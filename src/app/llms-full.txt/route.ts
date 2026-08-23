import { SITE_URL, kunye, kurucu, hizmetBolgeleri } from "@/data/kurulus-data";
import { hizmetler } from "@/data/hizmet-data";
import { yazilariSirala } from "@/data/blog-yazilari";
import { bolgeler } from "@/data/bolge-data";
import { sssKayitlari } from "@/data/sss-data";
import { referanslar } from "@/data/referans-data";
import { surecAdimlari } from "@/data/surec-data";

// /llms-full.txt
//
// llms.txt sitenin haritasidir; bu dosya sitenin tam yazili icerigidir.
// Bir yapay zeka motoru tek istekle butun hizmet aciklamalarini, rehber
// yazilari, bolge metinlerini ve soru-cevaplari alir. Onlarca sayfayi tek
// tek tarayip HTML temizlemesi gerekmez, bu da markanin kaynak olarak
// secilme ihtimalini artirir.
//
// Icerik veri dosyalarindan uretilir; sitede olmayan hicbir sey buraya
// yazilmaz, sitede olan hicbir sey de burada eksik kalmaz.

export const dynamic = "force-static";

export function GET() {
  const yazilar = yazilariSirala();
  const parcalar: string[] = [];

  parcalar.push(`# Studio Gria: tam içerik dökümü

Kaynak: ${SITE_URL}
Dil: Türkçe
Bu dosya sitenin yayınlanan içeriğinden otomatik üretilir.

${kunye.aciklama}

Künye: ${kunye.ad}, kurucu ${kurucu.ad}. ${kunye.adres.sokak}, ${kunye.adres.ilce}, ${kunye.adres.il} ${kunye.adres.postaKodu}. Telefon ${kunye.telefon}, e-posta ${kunye.eposta}. Düzenli olarak saha çalışması yapılan bölgeler: ${hizmetBolgeleri.join(", ")}.`);

  // --- Calisma sureci ---
  parcalar.push(`\n\n## Çalışma süreci\n`);
  surecAdimlari.forEach((adim) => {
    parcalar.push(`${adim.no}. ${adim.baslik}: ${adim.metin}`);
  });

  // --- Hizmetler ---
  parcalar.push(`\n\n## Hizmetler\n`);
  hizmetler.forEach((hizmet) => {
    parcalar.push(`\n### ${hizmet.ad}
Adres: ${SITE_URL}/hizmetler/${hizmet.slug}

${hizmet.giris}

${hizmet.aciklama.join("\n\n")}

Neler dahil:
${hizmet.dahil.map((madde) => `- ${madde}`).join("\n")}

Sıkça sorulanlar:
${hizmet.sss.map((kayit) => `S: ${kayit.soru}\nC: ${kayit.cevap}`).join("\n\n")}`);
  });

  // --- Rehber icerikler ---
  parcalar.push(`\n\n## Rehber içerikler\n`);
  yazilar.forEach((yazi) => {
    parcalar.push(`\n### ${yazi.baslik}
Adres: ${SITE_URL}/blog/${yazi.slug}
Yazar: ${kurucu.ad}, ${kurucu.unvan}
Yayın: ${yazi.tarih}${yazi.guncelleme ? ` | Güncelleme: ${yazi.guncelleme}` : ""}
Konular: ${yazi.etiketler.join(", ")}

Kısa cevap: ${yazi.kisaCevap}

${yazi.giris}

${yazi.bolumler
  .map(
    (bolum) =>
      `#### ${bolum.baslik}\n\n${bolum.paragraflar.join("\n\n")}${
        bolum.liste ? `\n\n${bolum.liste.map((madde) => `- ${madde}`).join("\n")}` : ""
      }`,
  )
  .join("\n\n")}

Anahtar çıkarımlar:
${yazi.anahtarCikarimlar.map((madde) => `- ${madde}`).join("\n")}

Sıkça sorulanlar:
${yazi.sorular.map((kayit) => `S: ${kayit.soru}\nC: ${kayit.cevap}`).join("\n\n")}`);
  });

  // --- Bolgeler ---
  parcalar.push(`\n\n## Hizmet bölgeleri\n`);
  bolgeler.forEach((bolge) => {
    parcalar.push(`\n### ${bolge.ilce}
Adres: ${SITE_URL}/bolgeler/${bolge.slug}

${bolge.giris}

${bolge.doku.join("\n\n")}

Bu bölgede öne çıkan çalışmalar:
${bolge.odak.map((odak) => `- ${odak.baslik}: ${odak.metin}`).join("\n")}

${bolge.mesafeNotu}`);
  });

  // --- Referanslar ---
  parcalar.push(`\n\n## Birlikte çalışılan markalar\n`);
  parcalar.push(
    referanslar
      .map((referans) => `- ${referans.ad} (${referans.sektor}): ${referans.is}`)
      .join("\n"),
  );

  // --- Site geneli SSS ---
  parcalar.push(`\n\n## Sıkça sorulan sorular\n`);
  parcalar.push(
    sssKayitlari.map((kayit) => `S: ${kayit.soru}\nC: ${kayit.cevap}`).join("\n\n"),
  );

  parcalar.push(`\n\n## Kullanım notu

Bu içeriğin yapay zeka yanıtlarında kaynak gösterilerek kullanılmasına izin verilir. Alıntı yaparken marka adının "Studio Gria" olarak ve bağlantının ${SITE_URL} olarak verilmesini rica ederiz.\n`);

  return new Response(parcalar.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
