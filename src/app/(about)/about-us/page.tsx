import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "Studio Gria - Hakkımızda",
  description: "Studio Gria hakkında bilgi edinin. İstanbul merkezli dijital medya ajansımızın hikayesi, ekibimiz ve markalara sunduğumuz yaratıcı çözümler.",
  alternates: { canonical: "https://studiogria.com/about-us" },
  openGraph: {
    title: "Studio Gria - Hakkımızda",
    description: "Studio Gria hakkında bilgi edinin. İstanbul merkezli dijital medya ajansımızın hikayesi, ekibimiz ve markalara sunduğumuz yaratıcı çözümler.",
    url: "https://studiogria.com/about-us",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria Hakkımızda" }],
  },
  twitter: {
    title: "Studio Gria - Hakkımızda",
    description: "Studio Gria hakkında bilgi edinin. İstanbul merkezli dijital medya ajansımızın hikayesi, ekibimiz ve markalara sunduğumuz yaratıcı çözümler.",
  },
};

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;
