import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";
import { yayindakiVakalar } from "@/data/vaka-data";

// Paylasim karti: src/utils/og-kart.tsx
export const alt = "Studio Gria vaka çalışması";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export function generateStaticParams() {
  return yayindakiVakalar().map((v) => ({ slug: v.slug }));
}

export default function Gorsel({ params }: { params: { slug: string } }) {
  const kayit = yayindakiVakalar().find((v) => v.slug === params.slug);
  return ogKart({
    ust: "Vaka çalışması",
    baslik: kayit?.baslik ?? "Studio Gria vaka çalışması",
  });
}
