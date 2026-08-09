import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/page-components/service/service";

const sayfaBaslik = "Sosyal Medya Yönetimi ve İçerik Üretimi Hizmetleri | Studio Gria";
const sayfaAciklama =
  "Sosyal medya yönetimi, profesyonel çekim ve içerik üretimi, marka kimliği tasarımı, Meta reklam yönetimi ve yapay zeka destekli içerik. İstanbul merkezli, Türkiye geneli hizmet.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "https://studiogria.com/service" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://studiogria.com/service",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Hizmetler" }],
  },
  twitter: {
    title: sayfaBaslik,
    description: sayfaAciklama,
  },
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
