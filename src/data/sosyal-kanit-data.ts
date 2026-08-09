// Sitede birden fazla yerde gosterilen sosyal kanit metrikleri.
// Rakamlar guncellendiginde yalnizca bu dosya degistirilir.
export type KanitMetrigi = {
  deger: number;
  sonek: string;
  etiket: string;
};

export const sosyalKanit: KanitMetrigi[] = [
  { deger: 16000000, sonek: "+", etiket: "Reklam görüntülenmesi" },
  { deger: 7200, sonek: "+", etiket: "Gelen müşteri mesajı" },
  { deger: 39, sonek: "+", etiket: "Birlikte çalıştığımız marka" },
];
