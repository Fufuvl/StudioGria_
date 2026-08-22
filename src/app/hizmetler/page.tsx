import React from "react";
import { Metadata } from "next";
import HizmetlerMain from "@/page-components/hizmetler/hizmetler-main";

const sayfaBaslik = "Hizmetlerimiz: Sosyal Medya, Prodüksiyon, Reklam ve Yazılım | Studio Gria";
const sayfaAciklama =
  "Sosyal medya yönetimi, fotoğraf ve video prodüksiyon, Google Ads ve Meta Ads reklam yönetimi, drone çekimi, web sitesi, SEO, yazılım, e-ticaret ve AI üretim. Tek çatı altında.";

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

const HizmetlerPage = () => {
  return <HizmetlerMain />;
};

export default HizmetlerPage;
