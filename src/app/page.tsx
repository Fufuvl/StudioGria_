import { Metadata } from "next";
import PortfolioDetailsShowcaseMain from "@/page-components/portfolio/details/portfolio-showcase-details-main";
import { hizmetler } from "@/data/hizmet-data";
import { KIMLIK, SITE_URL, grafSemasi } from "@/data/kurulus-data";

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
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Ana Sayfa" }],
  },
  twitter: {
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
      <PortfolioDetailsShowcaseMain />
    </>
  );
}
