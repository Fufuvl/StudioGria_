import React from "react";
import { Metadata } from "next";
import PortfolioDetailsOneMain from "@/pages/portfolio/details/portfolio-details-1-main";

export const metadata: Metadata = {
  title: "Studio Gria - Portfolyo Detayı",
  description: "Studio Gria proje detayları. Dijital medya projelerimizin süreçleri, kullanılan stratejiler ve elde edilen sonuçlar hakkında detaylı bilgi.",
  openGraph: {
    title: "Studio Gria - Portfolyo Detayı",
    description: "Studio Gria proje detayları. Dijital medya projelerimizin süreçleri, kullanılan stratejiler ve elde edilen sonuçlar hakkında detaylı bilgi.",
    url: "https://studiogria.com/portfolio-details-1",
    images: [{ url: "/assets/img/inner-project/showcase/showcase-1.jpg", width: 1200, height: 630, alt: "Studio Gria Proje Detayı" }],
  },
  twitter: {
    title: "Studio Gria - Portfolyo Detayı",
    description: "Studio Gria proje detayları. Dijital medya projelerimizin süreçleri, kullanılan stratejiler ve elde edilen sonuçlar hakkında detaylı bilgi.",
  },
};

const PortfolioDetailsOnePage = () => {
  return (
    <PortfolioDetailsOneMain />
  );
};

export default PortfolioDetailsOnePage;



