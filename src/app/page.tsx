import { Metadata } from "next";
import PortfolioDetailsShowcaseMain from "@/page-components/portfolio/details/portfolio-showcase-details-main";
import { hizmetler } from "@/data/hizmet-data";
import { KIMLIK, SITE_URL, grafSemasi } from "@/data/kurulus-data";
import { blogYazilari } from "@/data/blog-yazilari";

// Ana sayfada one cikan rehberler. Footer en yeni 4 yaziyi zaten bagladigi
// icin burada ticari niyeti en guclu, footer'da olmayan yazilar secilir.
const ONE_CIKAN_YAZILAR = [
  "sosyal-medya-ajansi-fiyatlari",
  "sosyal-medya-ajansi-mi-kendim-mi",
  "google-ads-mi-meta-ads-mi",
];

const oneCikanYazilar = ONE_CIKAN_YAZILAR.flatMap((slug) => {
  const yazi = blogYazilari.find((y) => y.slug === slug);
  return yazi ? [{ slug: yazi.slug, baslik: yazi.baslik, ozet: yazi.ozet, kategori: yazi.kategori }] : [];
});

const hizmetOzetleri = hizmetler.map((h) => ({ slug: h.slug, ad: h.ad, kisaAciklama: h.kisaAciklama }));

// SEO: title arama niyetine gore kurgulanir, marka sonda kalir
const sayfaBaslik = "Sosyal Medya Ajansı İstanbul | Studio Gria";
const sayfaAciklama =
  "İstanbul merkezli sosyal medya ajansı: içerik üretimi, profesyonel çekim ve Meta reklam yönetimi tek elden. 39'dan fazla marka ile çalıştık. Teklif alın.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://www.studiogria.com",
  },
  twitter: {
    card: "summary_large_image",
    title: sayfaBaslik,
    description: sayfaAciklama,
  },
};

// Ana sayfa dugumu. Kurulus, kurucu ve web sitesi dugumleri layout.tsx
// icindeki site geneli grafta tanimlidir; burada yalnizca sayfanin kendisi
// ve sundugu hizmet listesi verilir.
const sayfaSemasi = grafSemasi([
  {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#sayfa`,
    url: SITE_URL,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
    mainEntity: {
      "@type": "ItemList",
      name: "Studio Gria hizmetleri",
      numberOfItems: hizmetler.length,
      itemListElement: hizmetler.map((hizmet, sira) => ({
        "@type": "ListItem",
        position: sira + 1,
        name: hizmet.ad,
        url: `${SITE_URL}/hizmetler/${hizmet.slug}`,
      })),
    },
  },
]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <PortfolioDetailsShowcaseMain hizmetler={hizmetOzetleri} yazilar={oneCikanYazilar} />
    </>
  );
}
