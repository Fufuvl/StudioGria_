import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";
import { bolgeler } from "@/data/bolge-data";

// Paylasim karti: src/utils/og-kart.tsx. Yeni kayit eklendiginde kart
// derlemede kendiliginden uretilir.
export const alt = "Studio Gria hizmet bölgesi";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export function generateStaticParams() {
  return bolgeler.map((k) => ({ slug: k.slug }));
}

export default function Gorsel({ params }: { params: { slug: string } }) {
  const kayit = bolgeler.find((b) => b.slug === params.slug);
  return ogKart({
    ust: "Hizmet bölgesi",
    baslik: kayit?.h1 ?? "Batı İstanbul sosyal medya ajansı",
  });
}
