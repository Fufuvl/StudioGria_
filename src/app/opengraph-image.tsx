import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";

// Paylasim karti: src/utils/og-kart.tsx
export const alt = "Studio Gria, İstanbul merkezli sosyal medya ajansı";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export default function Gorsel() {
  return ogKart({
    ust: "Sosyal medya ajansı",
    baslik: "İyi içerik izlenir. Doğru içerik satar.",
  });
}
