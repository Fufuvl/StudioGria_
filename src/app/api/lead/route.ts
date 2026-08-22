import { NextResponse } from "next/server";
import {
  spamDegerlendir,
  originGecerliMi,
  hizSiniriAsildiMi,
  istekAnahtari,
  type LeadAlanlari,
} from "./spam-filtresi";

export const runtime = "nodejs";

// Formdan gelen lead'i e-posta olarak iletir.
// Amac: WhatsApp penceresi acilmasa ya da ziyaretci mesaji gondermese bile
// form verisinin kaybolmamasi.
//
// Spam korumasi icin bkz. spam-filtresi.ts. Bot oldugu anlasilan gonderimlerde
// istemciye basarili yanit doner ama e-posta gonderilmez ve "sayilir" alani
// false gelir; boylece bot engellendigini fark etmez, Meta Pixel de tetiklenmez.
//
// Gerekli ortam degiskenleri (Vercel > Settings > Environment Variables):
//   RESEND_API_KEY   Resend panelinden alinan API anahtari
//   LEAD_MAIL_TO     Bildirimin dusecegi adres (varsayilan hello@studiogria.com)
//   LEAD_MAIL_FROM   Gonderen adres; domain dogrulanana kadar onboarding@resend.dev

type LeadPayload = LeadAlanlari;

function temizle(deger: unknown, maxUzunluk = 500) {
  if (typeof deger !== "string") return "";
  return deger.trim().slice(0, maxUzunluk);
}

function satir(baslik: string, deger: string) {
  if (!deger) return "";
  return `<p style="margin:0 0 8px"><strong>${baslik}:</strong> ${deger}</p>`;
}

// HTML e-postaya kullanici metni gomulurken etiket enjeksiyonunu engeller
function kacir(metin: string) {
  return metin
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Bota basarili gorunen yanit: e-posta gonderilmez, donusum sayilmaz
function sessizRet() {
  return NextResponse.json({ ok: true, sayilir: false });
}

export async function POST(request: Request) {
  // 1. Istek gercekten sitemizden mi geliyor
  if (!originGecerliMi(request)) {
    console.warn(
      "[lead] gecersiz origin:",
      request.headers.get("origin"),
      request.headers.get("referer")
    );
    return sessizRet();
  }

  let veri: LeadPayload;
  try {
    veri = await request.json();
  } catch {
    return NextResponse.json({ ok: false, hata: "gecersiz istek" }, { status: 400 });
  }

  const kaynak = temizle(veri.kaynak, 60) || "Bilinmiyor";
  const adSoyad = temizle(veri.adSoyad, 120);
  const telefon = temizle(veri.telefon, 40);
  const eposta = temizle(veri.eposta, 160);
  const sektor = temizle(veri.sektor, 120);
  const hedef = temizle(veri.hedef, 300);
  const konu = temizle(veri.konu, 160);
  const mesaj = temizle(veri.mesaj, 2000);

  // Ad ya da iletisim bilgisi yoksa kaydedilecek bir lead yok demektir
  if (!adSoyad && !telefon && !mesaj) {
    return NextResponse.json({ ok: false, hata: "bos form" }, { status: 400 });
  }

  // 2. Spam degerlendirmesi
  const filtre = spamDegerlendir({
    kaynak,
    adSoyad,
    telefon,
    eposta,
    sektor,
    hedef,
    konu,
    mesaj,
    website: typeof veri.website === "string" ? veri.website : undefined,
    sureSaniye: typeof veri.sureSaniye === "number" ? veri.sureSaniye : undefined,
  });

  if (filtre.karar === "reddedildi") {
    console.warn(
      `[lead] spam engellendi (puan ${filtre.puan}): ${filtre.sebepler.join(", ")} | ad: ${adSoyad} | tel: ${telefon}`
    );
    return sessizRet();
  }

  // 3. Hiz siniri: ayni kaynaktan seri gonderim
  if (hizSiniriAsildiMi(istekAnahtari(request, eposta), Date.now())) {
    console.warn(`[lead] hiz siniri asildi | ad: ${adSoyad} | tel: ${telefon}`);
    return sessizRet();
  }

  const supheli = filtre.karar === "supheli";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Anahtar tanimli degilse formu bozmamak icin sessizce basarili doneriz,
    // sunucu gunlugune dusen bu satir kurulumun eksik oldugunu gosterir.
    console.warn("[lead] RESEND_API_KEY tanimli degil, e-posta gonderilemedi");
    return NextResponse.json({ ok: false, hata: "eposta yapilandirilmamis" }, { status: 200 });
  }

  const gonderen = process.env.LEAD_MAIL_FROM || "Studio Gria <onboarding@resend.dev>";
  const alici = process.env.LEAD_MAIL_TO || "hello@studiogria.com";

  const zaman = new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Istanbul",
  }).format(new Date());

  const supheNotu = supheli
    ? `<p style="margin:0 0 16px;padding:10px 12px;background:#fff4e5;border-left:3px solid #d98324;font-size:13px;color:#7a4a10">
         <strong>Otomatik uyari:</strong> bu gonderim spam olabilir (puan ${filtre.puan}).
         Sebep: ${kacir(filtre.sebepler.join(", "))}.
         Aramadan once bilgileri gozden gecirin.
       </p>`
    : "";

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;max-width:560px">
      <h2 style="margin:0 0 4px;font-size:18px">Yeni lead: ${kacir(kaynak)}</h2>
      <p style="margin:0 0 16px;color:#666;font-size:13px">${zaman}</p>
      ${supheNotu}
      ${satir("Ad Soyad", kacir(adSoyad))}
      ${satir("Telefon", kacir(telefon))}
      ${satir("E-posta", kacir(eposta))}
      ${satir("Sektor", kacir(sektor))}
      ${satir("Hedef", kacir(hedef))}
      ${satir("Konu", kacir(konu))}
      ${satir("Mesaj", kacir(mesaj))}
      <p style="margin:16px 0 0;color:#666;font-size:12px">
        studiogria.com formundan otomatik olarak gonderildi.
      </p>
    </div>
  `;

  const baslik = `${supheli ? "[SUPHELI] " : ""}Yeni lead: ${adSoyad || telefon || kaynak}`;

  try {
    const yanit = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: gonderen,
        to: [alici],
        subject: baslik,
        html,
        // Musteri e-postasini birakti ise bildirime dogrudan yanit verilebilir
        ...(eposta ? { reply_to: eposta } : {}),
      }),
    });

    if (!yanit.ok) {
      const detay = await yanit.text();
      console.error("[lead] Resend hatasi:", yanit.status, detay);
      return NextResponse.json({ ok: false, hata: "eposta gonderilemedi" }, { status: 502 });
    }

    // Supheli gonderimler posta kutusuna duser ama reklam donusumu olarak sayilmaz
    return NextResponse.json({ ok: true, sayilir: !supheli });
  } catch (hata) {
    console.error("[lead] beklenmeyen hata:", hata);
    return NextResponse.json({ ok: false, hata: "sunucu hatasi" }, { status: 500 });
  }
}
