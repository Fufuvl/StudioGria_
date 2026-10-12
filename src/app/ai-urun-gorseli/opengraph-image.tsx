import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";

// Paylasim karti: src/utils/og-kart.tsx
export const alt = "Studio Gria yapay zeka ile ürün görseli";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export default function Gorsel() {
  return ogKart({
    ust: "Yapay zeka ile ürün görseli",
    baslik: "Tek fotoğraftan üç katalog karesi",
  });
}
