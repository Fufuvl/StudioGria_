import React from "react";
import { Metadata } from "next";
import HizmetlerMain from "@/page-components/hizmetler/hizmetler-main";
import { hizmetler } from "@/data/hizmet-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";

const sayfaBaslik = "Sosyal Medya, Prodüksiyon ve Reklam Hizmetleri | Studio Gria";
const sayfaAciklama =
  "Sosyal medya yönetimi, fotoğraf ve video prodüksiyon, Meta ve Google reklam yönetimi, drone çekimi, web sitesi ve yazılım. On hizmet, tek ekip.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://www.studiogria.com/hizmetler",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Hizmetler" }],
  },
  twitter: {
    title: sayfaBaslik,
    description: sayfaAciklama,
  },
};

// Hizmet katalogu yapisal veri olarak da verilir. Motorlar "bu ajans neler
// yapiyor" sorusuna sayfayi okumadan bu listeden yanit uretebilir.
const sayfaSemasi = grafSemasi([
  {
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/hizmetler#sayfa`,
    url: `${SITE_URL}/hizmetler`,
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
        item: {
          "@type": "Service",
          "@id": `${SITE_URL}/hizmetler/${hizmet.slug}#hizmet`,
          name: hizmet.ad,
          description: hizmet.kisaAciklama,
          provider: { "@id": KIMLIK.kurulus },
        },
      })),
    },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "Hizmetlerimiz", yol: "/hizmetler" },
  ]),
]);

const HizmetlerPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <HizmetlerMain />
    </>
  );
};

export default HizmetlerPage;
