import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/page-components/about/about-us";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";

const sayfaBaslik = "Hakkımızda: İstanbul Merkezli Dijital Medya Stüdyosu | Studio Gria";
const sayfaAciklama =
  "Studio Gria kimdir, nasıl çalışır: içerik, tasarım ve reklamı tek elden yöneten İstanbul merkezli dijital medya stüdyosunun hikayesi ve çalışma disiplini.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://www.studiogria.com/about-us",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Hakkımızda" }],
  },
  twitter: {
    title: sayfaBaslik,
    description: sayfaAciklama,
  },
};

// AboutPage dugumu kurulus ve kurucu dugumlerine baglanir. Google'in
// E-E-A-T degerlendirmesinde "bu markanin arkasinda kim var" sorusuna
// yanit veren asil sayfa burasidir.
const sayfaSemasi = grafSemasi([
  {
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about-us#sayfa`,
    url: `${SITE_URL}/about-us`,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
    mainEntity: { "@id": KIMLIK.kurulus },
    mentions: [{ "@id": KIMLIK.kurucu }],
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "Hakkımızda", yol: "/about-us" },
  ]),
]);

const AboutUsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <AboutUsMain />
    </>
  );
};

export default AboutUsPage;
