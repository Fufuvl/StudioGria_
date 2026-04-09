import React from "react";
import { Metadata } from "next";
import AiSolutionsMain from "@/pages/ai-solutions/ai-solutions-main";

export const metadata: Metadata = {
  title: "Studio Gria - AI Destekli Çözümler",
  description: "Studio Gria'nın yapay zeka destekli dijital çözümleri. AI ile güçlendirilmiş içerik üretimi, otomasyon ve veri odaklı pazarlama stratejileriyle markanızı geleceğe taşıyın.",
  alternates: { canonical: "https://studiogria.com/ai-destekli-cozumler" },
  openGraph: {
    title: "Studio Gria - AI Destekli Çözümler",
    description: "Studio Gria'nın yapay zeka destekli dijital çözümleri. AI ile güçlendirilmiş içerik üretimi, otomasyon ve veri odaklı pazarlama stratejileriyle markanızı geleceğe taşıyın.",
    url: "https://studiogria.com/ai-destekli-cozumler",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria AI Destekli Çözümler" }],
  },
  twitter: {
    title: "Studio Gria - AI Destekli Çözümler",
    description: "Studio Gria'nın yapay zeka destekli dijital çözümleri. AI ile güçlendirilmiş içerik üretimi, otomasyon ve veri odaklı pazarlama stratejileriyle markanızı geleceğe taşıyın.",
  },
};

const AiSolutionsPage = () => {
  return <AiSolutionsMain />;
};

export default AiSolutionsPage;
