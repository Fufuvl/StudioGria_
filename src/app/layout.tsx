import type { Metadata } from "next";
import Script from "next/script";
import {
  Syne,
  Aladin,
  Big_Shoulders_Display,
  Marcellus,
} from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import LeadPopup from "@/components/modal/lead-popup";
import "./globals.scss";

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
  display: "swap",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
  display: "swap",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
  display: "swap",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
  display: "swap",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
  display: "swap",
});
const big_shoulders = Big_Shoulders_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-shoulders",
  display: "swap",
});
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studiogria.com"),
  title: "Studio Gria - Dijital Medya Ajansı",
  description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Sosyal medya yönetimi, marka kimliği tasarımı, web geliştirme ve AI destekli dijital çözümlerle markanızı büyütüyoruz.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Studio Gria",
    title: "Studio Gria - Dijital Medya Ajansı",
    description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Sosyal medya yönetimi, marka kimliği tasarımı, web geliştirme ve AI destekli dijital çözümlerle markanızı büyütüyoruz.",
    images: [
      {
        url: "/assets/img/inner-project/showcase/background.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Gria - Dijital Medya Ajansı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Gria - Dijital Medya Ajansı",
    description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Sosyal medya yönetimi, marka kimliği tasarımı, web geliştirme ve AI destekli dijital çözümlerle markanızı büyütüyoruz.",
    images: ["/assets/img/inner-project/showcase/background.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Studio Gria",
  url: "https://studiogria.com",
  logo: "https://studiogria.com/assets/img/logo/logo-white-new.png",
  description: "Studio Gria, İstanbul merkezli dijital medya ve sosyal medya ajansı.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [
    "https://www.instagram.com/studiogria",
    "https://www.linkedin.com/company/studiogria",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Turkish",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Studio Gria",
  url: "https://studiogria.com",
  inLanguage: "tr",
  publisher: {
    "@type": "Organization",
    name: "Studio Gria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4EWVJ0Y6EC"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4EWVJ0Y6EC');
            `,
          }}
        />
      </head>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${big_shoulders.variable} ${marcellus.variable}`}
      >
        <ThemeProvider defaultTheme="light">
          {children}
          <LeadPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
