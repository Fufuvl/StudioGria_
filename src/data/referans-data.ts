// Referans listesi. Yeni isim eklemek icin bu diziye satir eklemek yeterli;
// referanslar sayfasi (filtreler dahil) ve hizmetler sayfasindaki serit
// otomatik guncellenir. Sira onemlidir: serit bastan ilk alti ismi gosterir.
export type Referans = {
  ad: string;
  sektor: string;
  grup: string;
  is: string;
};

const SOSYAL = "Sosyal medya ve reklam yönetimi";
const PRODUKSIYON = "Proje bazlı prodüksiyon çalışması";

export const referanslar: Referans[] = [
  { ad: "Beşiktaş Spor Kulübü", sektor: "Spor", grup: "Spor", is: SOSYAL },
  { ad: "The Oba Hotel", sektor: "Otel", grup: "Konaklama & Gayrimenkul", is: PRODUKSIYON },
  { ad: "Neşe Erberk Anaokulu", sektor: "Anaokulu", grup: "Eğitim & Yayıncılık", is: SOSYAL },
  { ad: "Luxera Paris", sektor: "Kozmetik", grup: "Güzellik & Kozmetik", is: PRODUKSIYON },
  { ad: "The Bodrum Pavillion", sektor: "Konaklama", grup: "Konaklama & Gayrimenkul", is: PRODUKSIYON },
  { ad: "Star Termos", sektor: "E-ticaret", grup: "E-Ticaret", is: SOSYAL },
  {
    ad: "Projekspert",
    sektor: "Gayrimenkul",
    grup: "Konaklama & Gayrimenkul",
    is: "Sosyal medya, reklam yönetimi ve prodüksiyon",
  },
  { ad: "Beylikdüzü İhtisas Spor Kulübü", sektor: "Spor", grup: "Spor", is: SOSYAL },
  { ad: "Büyükçekmece Atletik Spor Kulübü", sektor: "Spor", grup: "Spor", is: SOSYAL },
  { ad: "Hepta Omnis", sektor: "Spor", grup: "Spor", is: SOSYAL },
  { ad: "My Gym", sektor: "Çocuk spor", grup: "Spor", is: SOSYAL },
  { ad: "Entepe Mobilya", sektor: "Mobilya", grup: "Sanayi & Üretim", is: SOSYAL },
  {
    ad: "Necmettin Barman",
    sektor: "Hukuk",
    grup: "Danışmanlık & Hizmet",
    is: "Sosyal medya yönetimi, reklam ve yazılım",
  },
  { ad: "Oceanic Acarkent", sektor: "Restoran", grup: "Yeme İçme", is: PRODUKSIYON },
  { ad: "Deryam Balık", sektor: "Restoran", grup: "Yeme İçme", is: SOSYAL },
  { ad: "Bi Damla İşkembe", sektor: "Restoran", grup: "Yeme İçme", is: SOSYAL },
  { ad: "Pacua Coffee", sektor: "Kahve", grup: "Yeme İçme", is: SOSYAL },
  { ad: "Kien Coffee", sektor: "Kahve", grup: "Yeme İçme", is: SOSYAL },
  { ad: "Milvero Coffee", sektor: "Kahve", grup: "Yeme İçme", is: SOSYAL },
  { ad: "Tykhe Beauty", sektor: "Güzellik", grup: "Güzellik & Kozmetik", is: SOSYAL },
  { ad: "Merve Coşar Beauty", sektor: "Güzellik", grup: "Güzellik & Kozmetik", is: SOSYAL },
  {
    ad: "Love Yourself by Anastasiya Beauty",
    sektor: "Güzellik",
    grup: "Güzellik & Kozmetik",
    is: SOSYAL,
  },
  { ad: "Effectha", sektor: "Kozmetik", grup: "Güzellik & Kozmetik", is: SOSYAL },
  { ad: "Hempy", sektor: "Kozmetik", grup: "Güzellik & Kozmetik", is: SOSYAL },
  { ad: "Tykhe Danışmanlık", sektor: "Çocuk terapisi", grup: "Danışmanlık & Hizmet", is: SOSYAL },
  { ad: "DYT. Hilal Harmancı", sektor: "Diyetisyen", grup: "Danışmanlık & Hizmet", is: PRODUKSIYON },
  { ad: "SekizOniki Mimaroba Kurs Merkezi", sektor: "Eğitim", grup: "Eğitim & Yayıncılık", is: SOSYAL },
  { ad: "Be Inanna", sektor: "Eğitim", grup: "Eğitim & Yayıncılık", is: SOSYAL },
  { ad: "Beyaz Balina Yayınları", sektor: "Çocuk kitapları", grup: "Eğitim & Yayıncılık", is: SOSYAL },
  { ad: "Soothe Concept", sektor: "E-ticaret", grup: "E-Ticaret", is: SOSYAL },
  { ad: "Mieco", sektor: "E-ticaret", grup: "E-Ticaret", is: PRODUKSIYON },
  { ad: "Lucea", sektor: "E-ticaret", grup: "E-Ticaret", is: PRODUKSIYON },
  { ad: "Veloute", sektor: "E-ticaret", grup: "E-Ticaret", is: PRODUKSIYON },
  { ad: "Vona Lisa", sektor: "E-ticaret", grup: "E-Ticaret", is: PRODUKSIYON },
  { ad: "Koç Gıda", sektor: "Üretim", grup: "Sanayi & Üretim", is: "Katalog çalışması" },
  { ad: "Ulus Metal", sektor: "Sanayi", grup: "Sanayi & Üretim", is: PRODUKSIYON },
  { ad: "Deva Makine", sektor: "Sanayi", grup: "Sanayi & Üretim", is: PRODUKSIYON },
  { ad: "Liva Gaz", sektor: "Sanayi", grup: "Sanayi & Üretim", is: PRODUKSIYON },
  { ad: "Dumadum", sektor: "Marka", grup: "Danışmanlık & Hizmet", is: PRODUKSIYON },
];

// Filtre cubugu bu listeden uretilir; veri sirasindaki ilk gorulme sirasina gore
export const referansGruplari: string[] = Array.from(
  new Set(referanslar.map((item) => item.grup))
);

export const sektorSayisi: number = new Set(referanslar.map((item) => item.sektor)).size;
