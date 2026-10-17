import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";
import { sektorler } from "@/data/sektor-data";

// Paylasim karti: src/utils/og-kart.tsx. Yeni sektor eklendiginde kart
// derlemede kendiliginden uretilir.
export const alt = "Studio Gria sektör sayfası";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export function generateStaticParams() {
  return sektorler.map((k) => ({ slug: k.slug }));
}

export default function Gorsel({ params }: { params: { slug: string } }) {
  const kayit = sektorler.find((k) => k.slug === params.slug);
  return ogKart({
    ust: kayit?.ad ?? "Sektörler",
    baslik: kayit ? kayit.slogan.replace(/\*/g, "") : "Sektörlere göre sosyal medya yönetimi",
  });
}
