"use client";
import Sayac from "@/components/sayac";
import { sosyalKanit } from "@/data/sosyal-kanit-data";

// Sayaclarla akan sosyal kanit satiri.
// koyu: koyu zemin uzerinde beyaz yazi icin
export default function SosyalKanit({ koyu = false }: { koyu?: boolean }) {
  return (
    <div className={`sg-kanit ${koyu ? "sg-kanit-koyu" : ""}`}>
      {sosyalKanit.map((metrik) => (
        <div className="sg-kanit-oge" key={metrik.etiket}>
          <p className="sg-kanit-deger">
            <Sayac hedef={metrik.deger} sonek={metrik.sonek} />
          </p>
          <p className="sg-kanit-etiket">{metrik.etiket}</p>
        </div>
      ))}
    </div>
  );
}
