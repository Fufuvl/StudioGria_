import React from "react";
import { Metadata } from "next";
import AiSolutionsMain from "@/page-components/ai-solutions/ai-solutions-main";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";

const sayfaBaslik = "Yapay Zeka ile Ürün Görseli ve Reklam İçeriği Üretimi | Studio Gria";
const sayfaAciklama =
  "Stüdyo kurmadan stüdyo kalitesinde görsel: yapay zeka destekli ürün çekimi, kampanya görseli ve video üretimi. Set ve lokasyon maliyeti olmadan, günler içinde kampanyaya hazır içerik.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/ai-destekli-cozumler" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://www.studiogria.com/ai-destekli-cozumler",
    images: [{ url: "/assets/img/ai-solutions/brand-mix/matcha-hero.jpg", width: 1200, height: 630, alt: "Yapay zeka ile üretilmiş ürün görseli" }],
  },
  twitter: {
    title: sayfaBaslik,
    description: sayfaAciklama,
  },
};

const sayfaSemasi = grafSemasi([
  {
    "@type": "WebPage",
    "@id": `${SITE_URL}/ai-destekli-cozumler#sayfa`,
    url: `${SITE_URL}/ai-destekli-cozumler`,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: {
      "@type": "Service",
      "@id": `${SITE_URL}/hizmetler/ai-uretim-reklam-filmleri#hizmet`,
      name: "Yapay zeka destekli görsel ve video üretimi",
      provider: { "@id": KIMLIK.kurulus },
    },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "AI destekli çözümler", yol: "/ai-destekli-cozumler" },
  ]),
]);

const AiSolutionsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <AiSolutionsMain />
    </>
  );
};

export default AiSolutionsPage;
