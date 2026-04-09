import React from "react";
import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-standard-main";

export const metadata: Metadata = {
  title: "Studio Gria - Portfolyo",
  description: "Studio Gria'nın tamamlanmış projeleri ve portfolyosu. Sosyal medya kampanyaları, marka tasarımları ve dijital projelerimizdeki başarı hikayelerimizi keşfedin.",
  alternates: { canonical: "https://studiogria.com/portfolio-standard" },
  openGraph: {
    title: "Studio Gria - Portfolyo",
    description: "Studio Gria'nın tamamlanmış projeleri ve portfolyosu. Sosyal medya kampanyaları, marka tasarımları ve dijital projelerimizdeki başarı hikayelerimizi keşfedin.",
    url: "https://studiogria.com/portfolio-standard",
    images: [{ url: "/assets/img/inner-project/showcase/showcase-1.jpg", width: 1200, height: 630, alt: "Studio Gria Portfolyo" }],
  },
  twitter: {
    title: "Studio Gria - Portfolyo",
    description: "Studio Gria'nın tamamlanmış projeleri ve portfolyosu. Sosyal medya kampanyaları, marka tasarımları ve dijital projelerimizdeki başarı hikayelerimizi keşfedin.",
  },
};

const PortfolioStandardPage = () => {
  return (
    <PortfolioStandardMain />
  );
};

export default PortfolioStandardPage;
