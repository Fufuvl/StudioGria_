import React from "react";
import { Metadata } from "next";
import ContactMain from "@/page-components/contact/contact";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";

export const metadata: Metadata = {
  title: "İletişim: Büyükçekmece Sosyal Medya Ajansı | Studio Gria",
  description: "Studio Gria ile iletişime geçin: +90 538 865 44 05, hello@studiogria.com. İstanbul Büyükçekmece merkezli sosyal medya ajansı, Türkiye geneli hizmet.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "İletişim: Büyükçekmece Sosyal Medya Ajansı | Studio Gria",
    description: "Studio Gria ile iletişime geçin: +90 538 865 44 05, hello@studiogria.com. İstanbul Büyükçekmece merkezli sosyal medya ajansı, Türkiye geneli hizmet.",
    url: "https://www.studiogria.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim: Büyükçekmece Sosyal Medya Ajansı | Studio Gria",
    description: "Studio Gria ile iletişime geçin: +90 538 865 44 05, hello@studiogria.com. İstanbul Büyükçekmece merkezli sosyal medya ajansı, Türkiye geneli hizmet.",
  },
};

const sayfaSemasi = grafSemasi([
  {
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#sayfa`,
    url: `${SITE_URL}/contact`,
    name: "Studio Gria iletişim",
    description:
      "Studio Gria iletişim bilgileri: telefon, e-posta ve stüdyo adresi.",
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
    mainEntity: { "@id": KIMLIK.kurulus },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "İletişim", yol: "/contact" },
  ]),
]);

const ContactPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <ContactMain />
    </>
  );
};

export default ContactPage;
