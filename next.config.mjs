/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
