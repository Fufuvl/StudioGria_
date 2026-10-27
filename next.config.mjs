// Vercel BotID: /api/lead ucuna gelen istekleri gorunmez bicimde dogrular.
// withBotId, dogrulama betiginin ilk taraf alan adindan servis edilmesi icin
// gereken yeniden yazma kurallarini ekler.
import { withBotId } from "botid/next/config";

// Guvenlik basliklari: form sayfalarinin baska sitede cerceveye alinmasini
// (clickjacking) ve MIME tahminini engeller. CSP bilincli olarak yok: GTM,
// Meta Pixel ve BotID betikleri icin ayri bir calisma ister.
const guvenlikBasliklari = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      { source: "/:path*", headers: guvenlikBasliklari },
      // public/assets varsayilanda max-age=0 ile sunuluyordu; hero gorseli
      // dahil her ziyarette yeniden dogrulaniyordu. Dosya adi degismeden
      // icerik degisirse en gec 30 gunde yenilenir.
      {
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
  async redirects() {
    // Kaldirilan eski URL'ler yeni sayfalara 301 ile yonlendirilir;
    // indekslenmis eski adresler SEO degeri kaybetmeden tasinir.
    return [
      { source: "/service", destination: "/hizmetler", permanent: true },
      { source: "/service-details", destination: "/hizmetler", permanent: true },
      { source: "/brand", destination: "/referanslar", permanent: true },
      { source: "/portfolio-standard", destination: "/referanslar", permanent: true },
      { source: "/portfolio-details-1", destination: "/referanslar", permanent: true },
      { source: "/portfolio/:slug", destination: "/referanslar", permanent: true },
      { source: "/portfolio", destination: "/referanslar", permanent: true },
      // Ziyaretcilerin ve yapay zeka motorlarinin tahmin ettigi Turkce adresler
      { source: "/hakkimizda", destination: "/about-us", permanent: true },
      { source: "/iletisim", destination: "/contact", permanent: true },
      { source: "/sss", destination: "/faq", permanent: true },
      { source: "/referans", destination: "/referanslar", permanent: true },
      // Onceki Wix sitesinden Google hafizasinda kalan adresler
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/services", destination: "/hizmetler", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/product-page/:slug*", destination: "/hizmetler", permanent: true },
      { source: "/shop", destination: "/hizmetler", permanent: true },
      // Bing dizininde kalan eski sablon sayfasi ("Glowia"), canlida 404 veriyordu
      // (16 Eki 2026 denetimi). Adres kodlanmis ve kodlanmamis haliyle eslenir.
      { source: "/kopyas%C4%B1-bond", destination: "/", permanent: true },
      { source: "/kopyası-bond", destination: "/", permanent: true },
      // Sektor sayfalarina tahmin edilen kisa adresler
      { source: "/sektor", destination: "/sektorler", permanent: true },
      { source: "/guzellik-merkezi", destination: "/sektorler/guzellik-merkezi-sosyal-medya-yonetimi", permanent: true },
      { source: "/restoran", destination: "/sektorler/restoran-kafe-sosyal-medya-yonetimi", permanent: true },
      { source: "/e-ticaret", destination: "/sektorler/e-ticaret-reklam-ve-sosyal-medya", permanent: true },
      { source: "/klinik", destination: "/sektorler/klinik-sosyal-medya-yonetimi", permanent: true },
      // Google aramasinda ve yapay zeka ozelliklerinde gosterim alan hatali
      // adresler 404 veriyordu (27 Eki 2026 denetimi, D1).
      { source: "/blog/meta-reklammadaki-butce-nasil-belirlenir", destination: "/blog/meta-reklam-butcesi-nasil-belirlenir", permanent: true },
      { source: "/bolgelaer/:slug*", destination: "/bolgeler/:slug*", permanent: true },
    ];
  },
};

export default withBotId(nextConfig);
