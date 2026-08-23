import React from "react";
import { Metadata } from "next";
import FaqMain from "@/page-components/faq/faq-main";
import { sssKayitlari } from "@/data/sss-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
  sssSemasi,
} from "@/data/kurulus-data";

const sayfaBaslik = "Sıkça Sorulan Sorular: Fiyat, Kapsam ve Süreç | Studio Gria";
const sayfaAciklama =
  "Sosyal medya ajansıyla çalışmadan önce sorulan sorular: hizmet kapsamı, fiyatlandırma, reklam bütçesi, sözleşme süresi ve ne kadar sürede sonuç alınacağı.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "/faq",
    images: [
      {
        url: "/assets/img/inner-project/showcase/background.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Gria sıkça sorulan sorular",
      },
    ],
  },
  twitter: { title: sayfaBaslik, description: sayfaAciklama },
};

// Soru-cevap metni src/data/sss-data.ts'ten gelir. Sayfada gorunen akordeon
// da ayni kaynagi kullanir, boylece sema ile gorunur icerik birebir esittir.
// Google, semadaki cevabin sayfada bulunmasini sart kosar.
const sayfaSemasi = grafSemasi([
  sssSemasi(
    sssKayitlari.map((kayit) => ({ soru: kayit.soru, cevap: kayit.cevap })),
    "/faq",
  ),
  {
    "@type": "WebPage",
    "@id": `${SITE_URL}/faq#sayfa`,
    url: `${SITE_URL}/faq`,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "Sıkça sorulan sorular", yol: "/faq" },
  ]),
]);

const FaqPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <FaqMain />
    </>
  );
};

export default FaqPage;
