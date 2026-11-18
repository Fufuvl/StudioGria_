import React from "react";

// Stüdyonun Google Haritalar kaydı (İşletme Profili CID'i) gömülü harita
// olarak. Yerel aramada web sitesi ile İşletme Profili'nin aynı varlık
// olduğunu gösteren sinyallerden biri; ziyaretçi için yol tarifi kolaylığı.
//
// Adres: maps?cid=...&output=embed adresinin yönlendirdiği son adres
// (18 Kas 2026'da denendi; 200 döner, çerçeve kısıtı yok). Harita yalnız
// görünür alana yaklaşınca yüklenir, sayfa hızını etkilemez.
export const HARITA_GOMME =
  "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!3m2!1m1!4s13148170818970902705!3m1!1str!5m1!1str";

// Seçilen ilçeden stüdyoya yol tarifi. Hedef İşletme Profili'ndeki adresle
// birebir aynı yazılır.
export function yolTarifiAdresi(baslangic: string) {
  const hedef =
    "Studio Gria, Mimaroba Mahallesi, Mustafa Kemal Bulvarı No 18 Demir Plaza, 34535 Büyükçekmece/İstanbul";
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    baslangic,
  )}&destination=${encodeURIComponent(hedef)}`;
}

export default function StudyoHarita({ baslik }: { baslik?: string }) {
  return (
    <div className="sg-harita">
      <iframe
        src={HARITA_GOMME}
        title={baslik ?? "Studio Gria stüdyosu, Büyükçekmece Mimaroba, Google Haritalar"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
