"use client";
import { useEffect, useRef, useState } from "react";

// Gorunume girince hedefe dogru sayan rakam.
// Buyuk sayilar tr-TR binlik ayraciyla yazilir (16.000.000 gibi).
export default function Sayac({
  hedef,
  sonek = "",
  sure = 1300,
}: {
  hedef: number;
  sonek?: string;
  sure?: number;
}) {
  const [deger, setDeger] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const basladi = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const gozlemci = new IntersectionObserver(
      (girisler) => {
        if (!girisler[0].isIntersecting || basladi.current) return;
        basladi.current = true;
        const baslangic = performance.now();
        const adim = (simdi: number) => {
          // rAF zaman damgasi kayit anindan kucuk gelebilir; 0'a sabitlenir
          const oran = Math.min(Math.max((simdi - baslangic) / sure, 0), 1);
          const yumusatilmis = 1 - Math.pow(1 - oran, 3);
          setDeger(Math.round(hedef * yumusatilmis));
          if (oran < 1) requestAnimationFrame(adim);
        };
        requestAnimationFrame(adim);
      },
      { threshold: 0.35 }
    );
    gozlemci.observe(el);
    return () => gozlemci.disconnect();
  }, [hedef, sure]);

  return (
    <span ref={ref}>
      {deger.toLocaleString("tr-TR")}
      {sonek}
    </span>
  );
}
