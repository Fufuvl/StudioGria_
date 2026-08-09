import { Metadata } from "next";
import PortfolioDetailsShowcaseMain from "@/page-components/portfolio/details/portfolio-showcase-details-main";

// SEO: title arama niyetine gore kurgulanir, marka sonda kalir
const sayfaBaslik = "Sosyal Medya Ajansı İstanbul | Studio Gria";
const sayfaAciklama =
  "İstanbul merkezli sosyal medya ajansı: içerik üretimi, profesyonel çekim, marka kimliği ve Meta reklam yönetimi tek elden. 39'dan fazla markayla çalıştık. Ücretsiz teklif alın.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "https://studiogria.com" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://studiogria.com",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Ana Sayfa" }],
  },
  twitter: {
    title: sayfaBaslik,
    description: sayfaAciklama,
  },
};

export default function Home() {
  return (
    <>
      <PortfolioDetailsShowcaseMain />
    </>
  );
}
