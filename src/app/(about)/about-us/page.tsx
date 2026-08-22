import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/page-components/about/about-us";

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

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;
