// Calisma sureci: sitede birden fazla yerde gosterilir (hizmetler, teklif).
// Kural: rakip/hesap analizi teklif oncesi vaat edilmez; analiz hizmetin parcasidir.
export type SurecAdimi = {
  no: string;
  baslik: string;
  metin: string;
};

export const surecAdimlari: SurecAdimi[] = [
  {
    no: "01",
    baslik: "Sizi dinliyoruz",
    metin:
      "Markanızı, hedeflerinizi ve beklentilerinizi ilk görüşmede anlıyoruz.",
  },
  {
    no: "02",
    baslik: "Size özel teklif sunumu hazırlıyoruz",
    metin:
      "Kapsam, çalışma modeli ve fiyat tek dosyada, net olarak önünüze gelir.",
  },
  {
    no: "03",
    baslik: "Onayla birlikte üretim başlıyor",
    metin:
      "Çekim, tasarım ve yayın takvimi vakit kaybetmeden işlemeye başlar.",
  },
];
