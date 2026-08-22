import type { Metadata } from "next";
import Script from "next/script";
import { BotIdClient } from "botid/client";
import {
  Syne,
  Aladin,
  Big_Shoulders_Display,
  Marcellus,
} from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import LeadPopup from "@/components/modal/lead-popup";
import MetaPixelEvents from "@/components/meta-pixel-events";
import WhatsappFloat from "@/components/whatsapp-float";
import { META_PIXEL_ID } from "@/utils/meta-pixel";
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
  metadataBase: new URL("https://www.studiogria.com"),
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
  url: "https://www.studiogria.com",
  logo: "https://www.studiogria.com/assets/img/logo/logo-white-new.png",
  description: "Studio Gria, İstanbul merkezli dijital medya ve sosyal medya ajansı.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Büyükçekmece",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  email: "hello@studiogria.com",
  telephone: "+905388654405",
  sameAs: [
    "https://www.instagram.com/studiogria",
    "https://www.linkedin.com/company/studiogria",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+905388654405",
    availableLanguage: "Turkish",
  },
};

// Vercel BotID'nin gorunmez dogrulama yapacagi uclar.
// Ziyaretciye hicbir ek adim yuklemez, CAPTCHA gostermez.
const botKorumaliYollar = [
  { path: "/api/lead", method: "POST" },
  { path: "/api/lead-bileti", method: "GET" },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Studio Gria",
  url: "https://www.studiogria.com",
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
        <BotIdClient protect={botKorumaliYollar} />
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
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${big_shoulders.variable} ${marcellus.variable}`}
      >
        {/* Meta Pixel: JavaScript kapalı tarayıcılar için yedek izleme */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <ThemeProvider defaultTheme="light">
          {children}
          <LeadPopup />
          <WhatsappFloat />
          <MetaPixelEvents />
        </ThemeProvider>
      </body>
    </html>
  );
}
