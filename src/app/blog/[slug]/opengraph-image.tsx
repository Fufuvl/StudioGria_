import { ogKart, OG_BOYUT, OG_TUR } from "@/utils/og-kart";
import { blogYazilari } from "@/data/blog-yazilari";

// Paylasim karti: src/utils/og-kart.tsx. Yeni kayit eklendiginde kart
// derlemede kendiliginden uretilir.
export const alt = "Studio Gria blog yazısı";
export const size = OG_BOYUT;
export const contentType = OG_TUR;

export function generateStaticParams() {
  return blogYazilari.map((k) => ({ slug: k.slug }));
}

export default function Gorsel({ params }: { params: { slug: string } }) {
  const kayit = blogYazilari.find((y) => y.slug === params.slug);
  return ogKart({
    ust: kayit?.kategori ?? "Blog",
    baslik: kayit?.baslik ?? "Studio Gria blog",
  });
}
