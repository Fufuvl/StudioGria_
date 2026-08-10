import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Formdan gelen lead'i e-posta olarak iletir.
// Amac: WhatsApp penceresi acilmasa ya da ziyaretci mesaji gondermese bile
// form verisinin kaybolmamasi.
//
// Gerekli ortam degiskenleri (Vercel > Settings > Environment Variables):
//   RESEND_API_KEY   Resend panelinden alinan API anahtari
//   LEAD_MAIL_TO     Bildirimin dusecegi adres (varsayilan hello@studiogria.com)
//   LEAD_MAIL_FROM   Gonderen adres; domain dogrulanana kadar onboarding@resend.dev

type LeadPayload = {
  kaynak?: string;
  adSoyad?: string;
  telefon?: string;
  eposta?: string;
  sektor?: string;
  hedef?: string;
  konu?: string;
  mesaj?: string;
};

function temizle(deger: unknown, maxUzunluk = 500) {
  if (typeof deger !== "string") return "";
  return deger.trim().slice(0, maxUzunluk);
}

function satir(baslik: string, deger: string) {
  if (!deger) return "";
  return `<p style="margin:0 0 8px"><strong>${baslik}:</strong> ${deger}</p>`;
}

export async function POST(request: Request) {
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

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;max-width:560px">
      <h2 style="margin:0 0 4px;font-size:18px">Yeni lead: ${kaynak}</h2>
      <p style="margin:0 0 16px;color:#666;font-size:13px">${zaman}</p>
      ${satir("Ad Soyad", adSoyad)}
      ${satir("Telefon", telefon)}
      ${satir("E-posta", eposta)}
      ${satir("Sektor", sektor)}
      ${satir("Hedef", hedef)}
      ${satir("Konu", konu)}
      ${satir("Mesaj", mesaj)}
      <p style="margin:16px 0 0;color:#666;font-size:12px">
        studiogria.com formundan otomatik olarak gonderildi.
      </p>
    </div>
  `;

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
        subject: `Yeni lead: ${adSoyad || telefon || kaynak}`,
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

    return NextResponse.json({ ok: true });
  } catch (hata) {
    console.error("[lead] beklenmeyen hata:", hata);
    return NextResponse.json({ ok: false, hata: "sunucu hatasi" }, { status: 500 });
  }
}
