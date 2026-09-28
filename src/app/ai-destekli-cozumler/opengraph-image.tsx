import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";

// Paylasim karti: src/utils/og-kart.tsx
export const alt = "Studio Gria yapay zeka destekli görsel üretimi";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export default function Gorsel() {
  return ogKart({
    ust: "AI destekli çözümler",
    baslik: "Stüdyo kurmadan stüdyo kalitesinde görsel",
    gorsel: "/assets/img/ai-solutions/brand-mix/matcha-hero.jpg",
  });
}
