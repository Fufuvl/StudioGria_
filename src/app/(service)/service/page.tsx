import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Studio Gria - Hizmetler",
  description: "Studio Gria'nın sunduğu dijital hizmetler: sosyal medya yönetimi, içerik üretimi, marka kimliği tasarımı, web geliştirme ve dijital pazarlama çözümleri.",
  alternates: { canonical: "https://studiogria.com/service" },
  openGraph: {
    title: "Studio Gria - Hizmetler",
    description: "Studio Gria'nın sunduğu dijital hizmetler: sosyal medya yönetimi, içerik üretimi, marka kimliği tasarımı, web geliştirme ve dijital pazarlama çözümleri.",
    url: "https://studiogria.com/service",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Hizmetler" }],
  },
  twitter: {
    title: "Studio Gria - Hizmetler",
    description: "Studio Gria'nın sunduğu dijital hizmetler: sosyal medya yönetimi, içerik üretimi, marka kimliği tasarımı, web geliştirme ve dijital pazarlama çözümleri.",
  },
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
