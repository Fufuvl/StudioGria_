import React from "react";
import { Metadata } from "next";
import ContactMain from "@/page-components/contact/contact";

export const metadata: Metadata = {
  title: "Studio Gria - İletişim",
  description: "Studio Gria ile iletişime geçin: +90 538 865 44 05, hello@studiogria.com. İstanbul Büyükçekmece merkezli sosyal medya ajansı, Türkiye geneli hizmet.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Studio Gria - İletişim",
    description: "Studio Gria ile iletişime geçin: +90 538 865 44 05, hello@studiogria.com. İstanbul Büyükçekmece merkezli sosyal medya ajansı, Türkiye geneli hizmet.",
    url: "https://www.studiogria.com/contact",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria İletişim" }],
  },
  twitter: {
    title: "Studio Gria - İletişim",
    description: "Studio Gria ile iletişime geçin: +90 538 865 44 05, hello@studiogria.com. İstanbul Büyükçekmece merkezli sosyal medya ajansı, Türkiye geneli hizmet.",
  },
};

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
