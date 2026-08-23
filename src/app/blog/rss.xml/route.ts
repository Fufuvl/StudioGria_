import { SITE_URL, kunye, kurucu } from "@/data/kurulus-data";
import { yazilariSirala } from "@/data/blog-yazilari";

// /blog/rss.xml
//
// RSS, yeni yazilarin arama motorlari ve icerik toplayicilar tarafindan
// hizli kesfedilmesini saglar. Sitemap "bu adresler var" der; besleme
// "bunlar yeni" der ve tarama sirasini one alir.

export const dynamic = "force-static";

// XML'de anlam tasiyan karakterler kacisla yazilir, yoksa besleme bozulur.
function xmlKacis(metin: string) {
  return metin
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const yazilar = yazilariSirala();
  const sonGuncelleme = yazilar.length
    ? new Date(yazilar[0].guncelleme ?? yazilar[0].tarih).toUTCString()
    : new Date().toUTCString();

  const kayitlar = yazilar
    .map((yazi) => {
      const adres = `${SITE_URL}/blog/${yazi.slug}`;
      return `    <item>
      <title>${xmlKacis(yazi.baslik)}</title>
      <link>${adres}</link>
      <guid isPermaLink="true">${adres}</guid>
      <description>${xmlKacis(yazi.kisaCevap)}</description>
      <category>${xmlKacis(yazi.kategori)}</category>
      <dc:creator>${xmlKacis(kurucu.ad)}</dc:creator>
      <pubDate>${new Date(yazi.tarih).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const besleme = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlKacis(kunye.ad)} Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Sosyal medya yönetimi, içerik üretimi ve Meta reklamları üzerine saha deneyiminden çıkan rehberler.</description>
    <language>tr-TR</language>
    <lastBuildDate>${sonGuncelleme}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${kayitlar}
  </channel>
</rss>
`;

  return new Response(besleme, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
