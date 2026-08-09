import React from "react";
import { Metadata } from "next";
import AiSolutionsMain from "@/page-components/ai-solutions/ai-solutions-main";

const sayfaBaslik = "Yapay Zeka ile Ürün Görseli ve Reklam İçeriği Üretimi | Studio Gria";
const sayfaAciklama =
  "Stüdyo kurmadan stüdyo kalitesinde görsel: yapay zeka destekli ürün çekimi, kampanya görseli ve video üretimi. Set ve lokasyon maliyeti olmadan, günler içinde kampanyaya hazır içerik.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "https://studiogria.com/ai-destekli-cozumler" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://studiogria.com/ai-destekli-cozumler",
    images: [{ url: "/assets/img/ai-solutions/brand-mix/matcha-hero.jpg", width: 1200, height: 630, alt: "Yapay zeka ile üretilmiş ürün görseli" }],
  },
  twitter: {
    title: sayfaBaslik,
    description: sayfaAciklama,
  },
};

const AiSolutionsPage = () => {
  return <AiSolutionsMain />;
};

export default AiSolutionsPage;
