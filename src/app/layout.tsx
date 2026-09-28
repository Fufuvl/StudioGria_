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
import { SiteBaglantilariSaglayici } from "@/components/site-baglantilari";
import { hizmetler } from "@/data/hizmet-data";
import { yazilariSirala } from "@/data/blog-yazilari";
import { bolgeler } from "@/data/bolge-data";
import { META_PIXEL_ID } from "@/utils/meta-pixel";
import {
  SITE_URL,
  kunye,
  kurucu,
  calismaSaatleri,
  haritaAdresi,
  grafSemasi,
  kurulusSemasi,
  kurucuSemasi,
  siteSemasi,
} from "@/data/kurulus-data";
import "./globals.scss";

// HIZ (28 Eyl 2026): ilk ekranda yalnizca Syne gorunur. Diger fontlar
// on yuklenmez, gerektiginde iner. Gallery icin eskiden ttf + woff + woff2
// ucu birden ayri font olarak on yukleniyordu (~63 KB bosa); yalniz woff2 kaldi.
const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
  display: "swap",
  preload: false,
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
  display: "swap",
  preload: false,
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
  preload: false,
});
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Arama motorlarina ust sinir birakmadigimizi soyler. Varsayilanda Google
  // ozet uzunlugunu ve onizleme boyutunu kendi kisitlar; bu blok buyuk gorsel
  // onizlemesini ve tam uzunlukta ozet alintisini serbest birakir. Yapay zeka
  // ozetlerinde ve zengin sonuclarda gorunurlugu dogrudan etkiler.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  title: "Studio Gria - Dijital Medya Ajansı",
  description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Sosyal medya yönetimi, marka kimliği tasarımı, web geliştirme ve AI destekli dijital çözümlerle markanızı büyütüyoruz.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Studio Gria",
    title: "Studio Gria - Dijital Medya Ajansı",
    description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Sosyal medya yönetimi, marka kimliği tasarımı, web geliştirme ve AI destekli dijital çözümlerle markanızı büyütüyoruz.",
    // Gorsel: src/app/opengraph-image.tsx (her rota kendi kartini uretir)
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Gria - Dijital Medya Ajansı",
    description: "Studio Gria, İstanbul merkezli dijital medya ajansı. Sosyal medya yönetimi, marka kimliği tasarımı, web geliştirme ve AI destekli dijital çözümlerle markanızı büyütüyoruz.",
  },
};

// Footer'in site geneli bagladigi listeler: yalnizca baslik ve adres.
// En yeni dort yazi site geneli baglanti alir.
const siteBaglantilari = {
  hizmetler: hizmetler.map((h) => ({ ad: h.ad, slug: h.slug })),
  yazilar: yazilariSirala()
    .slice(0, 4)
    .map((y) => ({ baslik: y.baslik, slug: y.slug })),
  bolgeler: bolgeler.map((b) => ({ ilce: b.ilce, slug: b.slug })),
  kurum: {
    ad: kunye.ad,
    aciklama: kunye.aciklama,
    sokak: kunye.adres.sokak,
    ilce: kunye.adres.ilce,
    il: kunye.adres.il,
    postaKodu: kunye.adres.postaKodu,
    telefon: kunye.telefon,
    eposta: kunye.eposta,
    harita: haritaAdresi,
    saatler: calismaSaatleri,
    kurucuAd: kurucu.ad,
    kurucuBiyografi: kurucu.biyografi,
  },
};

// Vercel BotID'nin gorunmez dogrulama yapacagi uclar.
// Ziyaretciye hicbir ek adim yuklemez, CAPTCHA gostermez.
const botKorumaliYollar = [
  { path: "/api/lead", method: "POST" },
  { path: "/api/lead-bileti", method: "GET" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <head>
        <BotIdClient protect={botKorumaliYollar} />
        {/* Site geneli varlik grafi: kurulus, kurucu ve web sitesi dugumleri
            tek blokta tanimlanir. Sayfalar bu dugumlere @id ile atif yapar,
            boylece her sayfada yeniden kurulus tanimlanmaz. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: grafSemasi([kurulusSemasi(), kurucuSemasi(), siteSemasi()]),
          }}
        />
        {/* HIZ (28 Eyl 2026): olcum kodlari sayfa gorundukten sonra yuklenir.
            Donusum olaylari (form, WhatsApp, teklif) etkilenmez. */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-4EWVJ0Y6EC"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
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
          strategy="lazyOnload"
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
        {/* Meta Pixel noscript yedegi BILINCLI OLARAK YOK: Next.js noscript
            icindeki gorseli <head>'e preload olarak tasiyor ve JS acik her
            ziyaretcide ikinci bir PageView gonderiyordu (28 Eyl 2026). */}
        <ThemeProvider defaultTheme="light">
          <SiteBaglantilariSaglayici deger={siteBaglantilari}>
          {children}
          <LeadPopup />
          <WhatsappFloat />
          <MetaPixelEvents />
          </SiteBaglantilariSaglayici>
        </ThemeProvider>
      </body>
    </html>
  );
}
