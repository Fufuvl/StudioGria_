// Referans listesi. Yeni isim eklemek icin bu diziye satir eklemek yeterli,
// referanslar sayfasi ve hizmetler sayfasindaki serit otomatik guncellenir.
// Sira onemlidir: hizmetler sayfasindaki serit bastan ilk alti ismi gosterir.
export type Referans = {
  ad: string;
  sektor: string;
  is: string;
};

const SOSYAL = "Sosyal medya ve reklam yönetimi";
const PRODUKSIYON = "Proje bazlı prodüksiyon çalışması";

export const referanslar: Referans[] = [
  { ad: "Beşiktaş Spor Kulübü", sektor: "Spor", is: SOSYAL },
  { ad: "Neşe Erberk Anaokulu", sektor: "Anaokulu", is: SOSYAL },
  { ad: "The Oba Hotel", sektor: "Otel", is: PRODUKSIYON },
  { ad: "The Bodrum Pavillion", sektor: "Konaklama", is: PRODUKSIYON },
  { ad: "Luxera Paris", sektor: "Kozmetik", is: PRODUKSIYON },
  { ad: "Star Termos", sektor: "E-ticaret", is: SOSYAL },
  {
    ad: "Projekspert",
    sektor: "Gayrimenkul",
    is: "Sosyal medya, reklam yönetimi ve prodüksiyon",
  },
  { ad: "Beylikdüzü İhtisas Spor Kulübü", sektor: "Spor", is: SOSYAL },
  { ad: "Büyükçekmece Atletik Spor Kulübü", sektor: "Spor", is: SOSYAL },
  { ad: "Hepta Omnis", sektor: "Spor", is: SOSYAL },
  { ad: "Entepe Mobilya", sektor: "Mobilya", is: SOSYAL },
  {
    ad: "Necmettin Barman",
    sektor: "Hukuk",
    is: "Sosyal medya yönetimi, reklam ve yazılım",
  },
  { ad: "Oceanic Acarkent", sektor: "Restoran", is: PRODUKSIYON },
  { ad: "Deryam Balık", sektor: "Restoran", is: SOSYAL },
  { ad: "Bi Damla İşkembe", sektor: "Restoran", is: SOSYAL },
  { ad: "Pacua Coffee", sektor: "Kahve", is: SOSYAL },
  { ad: "Kien Coffee", sektor: "Kahve", is: SOSYAL },
  { ad: "Milvero Coffee", sektor: "Kahve", is: SOSYAL },
  { ad: "Tykhe Beauty", sektor: "Güzellik", is: SOSYAL },
  { ad: "Merve Coşar Beauty", sektor: "Güzellik", is: SOSYAL },
  { ad: "Love Yourself by Anastasiya Beauty", sektor: "Güzellik", is: SOSYAL },
  { ad: "Effectha", sektor: "Kozmetik", is: SOSYAL },
  { ad: "Hempy", sektor: "Kozmetik", is: SOSYAL },
  { ad: "Tykhe Danışmanlık", sektor: "Danışmanlık", is: SOSYAL },
  { ad: "DYT. Hilal Harmancı", sektor: "Sağlık", is: PRODUKSIYON },
  { ad: "My Gym", sektor: "Çocuk spor", is: SOSYAL },
  { ad: "SekizOniki Mimaroba Kurs Merkezi", sektor: "Eğitim", is: SOSYAL },
  { ad: "Be Inanna", sektor: "Eğitim", is: SOSYAL },
  { ad: "Beyaz Balina Yayınları", sektor: "Yayıncılık", is: SOSYAL },
  { ad: "Soothe Concept", sektor: "E-ticaret", is: SOSYAL },
  { ad: "Mieco", sektor: "E-ticaret", is: PRODUKSIYON },
  { ad: "Lucea", sektor: "E-ticaret", is: PRODUKSIYON },
  { ad: "Veloute", sektor: "E-ticaret", is: PRODUKSIYON },
  { ad: "Vona Lisa", sektor: "E-ticaret", is: PRODUKSIYON },
  { ad: "Koç Gıda", sektor: "Üretim", is: "Katalog çalışması" },
  { ad: "Ulus Metal", sektor: "Sanayi", is: PRODUKSIYON },
  { ad: "Deva Makine", sektor: "Sanayi", is: PRODUKSIYON },
  { ad: "Liva Gaz", sektor: "Sanayi", is: PRODUKSIYON },
  { ad: "Dumadum", sektor: "Marka", is: PRODUKSIYON },
];
