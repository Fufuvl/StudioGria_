import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";

export const alt = "Studio Gria: sektörlere göre sosyal medya yönetimi";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export default function Gorsel() {
  return ogKart({
    ust: "Sektörler",
    baslik: "Her sektörün kendi dili var",
  });
}
