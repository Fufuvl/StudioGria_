import React from "react";
import { Metadata } from "next";
import ContactMain from "@/pages/contact/contact";

export const metadata: Metadata = {
  title: "Studio Gria - İletişim",
  description: "Studio Gria ile iletişime geçin. İstanbul ofisimiz, telefon numaramız ve e-posta adresimiz ile projeleriniz hakkında konuşmak için bize ulaşın.",
  alternates: { canonical: "https://studiogria.com/contact" },
  openGraph: {
    title: "Studio Gria - İletişim",
    description: "Studio Gria ile iletişime geçin. İstanbul ofisimiz, telefon numaramız ve e-posta adresimiz ile projeleriniz hakkında konuşmak için bize ulaşın.",
    url: "https://studiogria.com/contact",
    images: [{ url: "/assets/img/inner-project/showcase/background.jpg", width: 1200, height: 630, alt: "Studio Gria İletişim" }],
  },
  twitter: {
    title: "Studio Gria - İletişim",
    description: "Studio Gria ile iletişime geçin. İstanbul ofisimiz, telefon numaramız ve e-posta adresimiz ile projeleriniz hakkında konuşmak için bize ulaşın.",
  },
};

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
