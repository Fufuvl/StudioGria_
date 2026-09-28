import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";
import { hizmetler } from "@/data/hizmet-data";

// Paylasim karti: src/utils/og-kart.tsx. Yeni kayit eklendiginde kart
// derlemede kendiliginden uretilir.
export const alt = "Studio Gria hizmeti";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export function generateStaticParams() {
  return hizmetler.map((k) => ({ slug: k.slug }));
}

export default function Gorsel({ params }: { params: { slug: string } }) {
  const kayit = hizmetler.find((h) => h.slug === params.slug);
  return ogKart({
    ust: "Hizmet",
    baslik: kayit?.ad ?? "Studio Gria hizmetleri",
    gorsel: kayit?.gorsel,
  });
}
