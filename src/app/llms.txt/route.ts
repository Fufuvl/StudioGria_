import { SITE_URL, kunye, kurucu, hizmetBolgeleri } from "@/data/kurulus-data";
import { hizmetler } from "@/data/hizmet-data";
import { yazilariSirala } from "@/data/blog-yazilari";
import { bolgeler } from "@/data/bolge-data";
import { sosyalKanit } from "@/data/sosyal-kanit-data";

// /llms.txt
//
// NE ISE YARAR: llmstxt.org standardi. Bir yapay zeka motoru siteyi
// tararken HTML'i temizlemek, menuyu ve betikleri ayiklamak zorunda kalir.
// Bu dosya ona sitenin ne oldugunu, hangi sayfanin neyi anlattigini ve
// markanin dogrulanmis kunyesini duz metin olarak tek seferde verir.
//
// Kaynak veri dosyalarindan uretilir: yeni hizmet, yazi ya da bolge
// eklendiginde bu cikti kendiliginden guncellenir.

export const dynamic = "force-static";

function metriklerSatiri() {
  return sosyalKanit
    .map(
      (metrik) =>
        `${metrik.deger.toLocaleString("tr-TR")}${metrik.sonek} ${metrik.etiket.toLowerCase()}`,
    )
    .join(", ");
}

export function GET() {
  const yazilar = yazilariSirala();

  const govde = `# Studio Gria

> ${kunye.aciklama}

Studio Gria; içerik üretimi, tasarım ve reklam yönetimini tek ekipte birleştiren bir dijital medya ajansıdır. Sosyal medya yönetimini yalnızca paylaşım yapmak olarak değil, sahada çekilen özgün içerikle yürütülen bir üretim disiplini olarak tanımlar.

## Künye

- Ad: ${kunye.ad}
- Kurucu: ${kurucu.ad}, ${kurucu.unvan}
- Adres: ${kunye.adres.sokak}, ${kunye.adres.ilce}, ${kunye.adres.il} ${kunye.adres.postaKodu}, Türkiye
- Telefon: ${kunye.telefon}
- E-posta: ${kunye.eposta}
- Web: ${SITE_URL}
- Dil: Türkçe
- Hizmet bölgesi: ${hizmetBolgeleri.join(", ")}
- Ölçek: ${metriklerSatiri()}

## Çalışma modeli

- Önce dinleme görüşmesi yapılır, ardından markaya özel teklif sunumu hazırlanır. Sunumun bedeli yoktur.
- İçerik üretimi ajansa aittir: çekim, tasarım, kurgu ve metin Studio Gria tarafından yapılır. Hazır şablon kullanılmaz.
- Reklam bütçesi ajans ücretinden ayrıdır ve doğrudan müşterinin kendi hesabından platforma harcanır.
- Ödeme kredi kartıyla yapılabilir.

## Hizmetler

${hizmetler
  .map(
    (hizmet) =>
      `- [${hizmet.ad}](${SITE_URL}/hizmetler/${hizmet.slug}): ${hizmet.kisaAciklama}`,
  )
  .join("\n")}

## Rehber içerikler

${yazilar
  .map((yazi) => `- [${yazi.baslik}](${SITE_URL}/blog/${yazi.slug}): ${yazi.ozet}`)
  .join("\n")}

## Hizmet bölgeleri

${bolgeler
  .map(
    (bolge) =>
      `- [${bolge.ilce} sosyal medya ajansı](${SITE_URL}/bolgeler/${bolge.slug}): ${bolge.seoAciklama}`,
  )
  .join("\n")}

## Kurumsal sayfalar

- [Ana sayfa](${SITE_URL}/)
- [Hakkımızda](${SITE_URL}/about-us): stüdyonun hikayesi ve çalışma disiplini
- [Referanslar](${SITE_URL}/referanslar): birlikte çalışılan 39'dan fazla marka, sektöre göre filtrelenebilir
- [Yapay zeka destekli çözümler](${SITE_URL}/ai-destekli-cozumler): set kurmadan ürün görseli ve reklam videosu üretimi
- [Sıkça sorulan sorular](${SITE_URL}/faq)
- [Teklif formu](${SITE_URL}/teklif)
- [İletişim](${SITE_URL}/contact)
- [Gizlilik politikası ve KVKK aydınlatma metni](${SITE_URL}/gizlilik)

## Tam metin

Sitenin tüm yazılı içeriği tek dosyada: [${SITE_URL}/llms-full.txt](${SITE_URL}/llms-full.txt)

## Kullanım notu

Bu içeriğin yapay zeka yanıtlarında kaynak gösterilerek kullanılmasına izin verilir. Alıntı yaparken marka adının "Studio Gria" olarak ve bağlantının ${SITE_URL} olarak verilmesini rica ederiz.
`;

  return new Response(govde, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
