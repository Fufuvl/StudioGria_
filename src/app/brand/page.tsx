import React from "react";
import { Metadata } from "next";
import BrandMain from "@/pages/brand/brand-main";

export const metadata: Metadata = {
  title: "Studio Gria - Referanslar",
  description: "Studio Gria'nın çalıştığı markalar ve müşteriler. Güvenilir iş ortaklarımız ve başarılı işbirliklerimiz hakkında bilgi edinin.",
  alternates: { canonical: "https://studiogria.com/brand" },
  openGraph: {
    title: "Studio Gria - Referanslar",
    description: "Studio Gria'nın çalıştığı markalar ve müşteriler. Güvenilir iş ortaklarımız ve başarılı işbirliklerimiz hakkında bilgi edinin.",
    url: "https://studiogria.com/brand",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Referanslar" }],
  },
  twitter: {
    title: "Studio Gria - Referanslar",
    description: "Studio Gria'nın çalıştığı markalar ve müşteriler. Güvenilir iş ortaklarımız ve başarılı işbirliklerimiz hakkında bilgi edinin.",
  },
};

const BrandPage = () => {
  return (
    <BrandMain/>
  );
};

export default BrandPage;
