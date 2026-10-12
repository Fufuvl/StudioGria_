import React from "react";
import { Metadata } from "next";
import AiSolutionsMain from "@/page-components/ai-solutions/ai-solutions-main";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";

// Baslik bu sayfanin isini (ornek galerisi) tasir; "urun gorseli / urun
// fotografi" aramalarinin hedefi /ai-urun-gorseli sayfasidir.
const sayfaBaslik = "Yapay Zeka ile Üretilmiş Görsel Örnekleri | Studio Gria";
const sayfaAciklama =
  "Lucea Jewelry ve Star Termos için yapay zeka ile ürettiğimiz görseller: editoryal portre, ürün karesi, sokak ve stüdyo sahneleri. Set ve stüdyo kurmadan.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/ai-destekli-cozumler" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://www.studiogria.com/ai-destekli-cozumler",
  },
  twitter: {
    card: "summary_large_image",
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
