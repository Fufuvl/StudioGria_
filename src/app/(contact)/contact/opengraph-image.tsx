import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";

// Paylasim karti: src/utils/og-kart.tsx
export const alt = "Studio Gria iletişim";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export default function Gorsel() {
  return ogKart({
    ust: "İletişim",
    baslik: "Bizimle iletişime geçin",
  });
}
