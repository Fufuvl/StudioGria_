import React from "react";

// Hizmet kartlari icin tek cizgi kalinliginda, murekkep renginde ikonlar.
// Fotograf yerine ikon kullanilir: kartlar birbirine esit agirlikta durur
// ve tek renk kuralina uyar. Renk currentColor uzerinden gelir.
const ortak = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ikonlar: Record<string, React.ReactNode> = {
  // Megafon: sosyal medya yonetimi
  megafon: (
    <svg {...ortak}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1Z" />
      <path d="M14 8a4 4 0 0 1 0 8" />
      <path d="M17 5a8 8 0 0 1 0 14" />
    </svg>
  ),
  // Kamera: fotograf ve video produksiyon
  kamera: (
    <svg {...ortak}>
      <rect x="2.5" y="7" width="13" height="11" rx="2" />
      <path d="m15.5 11 5-3v9l-5-3" />
      <circle cx="7" cy="4.5" r="1.8" />
      <circle cx="12" cy="4.2" r="1.4" />
    </svg>
  ),
  // Hedef: reklam yonetimi
  hedef: (
    <svg {...ortak}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 3.5V1.8M12 22.2v-1.7M3.5 12H1.8M22.2 12h-1.7" />
    </svg>
  ),
  // Drone: havadan cekim
  drone: (
    <svg {...ortak}>
      <rect x="9" y="9.5" width="6" height="5" rx="1.5" />
      <path d="M9 11 5 7M15 11l4-4M9 13l-4 4M15 13l4 4" />
      <circle cx="4" cy="6" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="4" cy="18" r="2" />
      <circle cx="20" cy="18" r="2" />
    </svg>
  ),
  // Kure ve pencere: web sitesi, SEO, GEO
  kure: (
    <svg {...ortak}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.3 4 5.2 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.2-4-8.5s1.4-6.2 4-8.5Z" />
    </svg>
  ),
  // Kod: yazilim ve mobil uygulama
  kod: (
    <svg {...ortak}>
      <path d="m8 8-4.5 4L8 16" />
      <path d="m16 8 4.5 4L16 16" />
      <path d="m13.5 5-3 14" />
    </svg>
  ),
  // Canta: e-ticaret
  canta: (
    <svg {...ortak}>
      <path d="M5 8h14l-1 12a2 2 0 0 1-2 1.8H8A2 2 0 0 1 6 20L5 8Z" />
      <path d="M9 11V6.5a3 3 0 0 1 6 0V11" />
    </svg>
  ),
  // Parilti: AI uretim
  parilti: (
    <svg {...ortak}>
      <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.2l-1.8-5.6-5.7-1.8L10.2 9 12 3.5Z" />
      <path d="M19 15.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z" />
    </svg>
  ),
  // Kalem ucu: marka kimligi ve tasarim
  kalem: (
    <svg {...ortak}>
      <path d="m13 5.5 5.5 5.5L8 21.5H2.5V16L13 5.5Z" />
      <path d="m11 7.5 5.5 5.5" />
      <path d="M16 2.5 21.5 8" />
    </svg>
  ),
  // Konusma balonu: danismanlik
  balon: (
    <svg {...ortak}>
      <path d="M21 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-5.4A8 8 0 1 1 21 11.5Z" />
      <path d="M8.5 10.5h7M8.5 13.5h4.5" />
    </svg>
  ),
};

export default function HizmetIkonu({ ad }: { ad: string }) {
  return <>{ikonlar[ad] ?? ikonlar.parilti}</>;
}
