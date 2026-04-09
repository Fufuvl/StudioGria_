import { Metadata } from "next";
import PortfolioDetailsShowcaseMain from "@/pages/portfolio/details/portfolio-showcase-details-main";

export const metadata: Metadata = {
  title: "Studio Gria - Ana Sayfa",
  description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Yaratıcı sosyal medya stratejileri, marka kimliği tasarımı ve AI destekli çözümlerle markanızın dijital dünyada fark yaratmasını sağlıyoruz.",
  alternates: { canonical: "https://studiogria.com" },
  openGraph: {
    title: "Studio Gria - Ana Sayfa",
    description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Yaratıcı sosyal medya stratejileri, marka kimliği tasarımı ve AI destekli çözümlerle markanızın dijital dünyada fark yaratmasını sağlıyoruz.",
    url: "https://studiogria.com",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Ana Sayfa" }],
  },
  twitter: {
    title: "Studio Gria - Ana Sayfa",
    description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Yaratıcı sosyal medya stratejileri, marka kimliği tasarımı ve AI destekli çözümlerle markanızın dijital dünyada fark yaratmasını sağlıyoruz.",
  },
};

export default function Home() {
  return (
    <>
      <PortfolioDetailsShowcaseMain />
    </>
  );
}
