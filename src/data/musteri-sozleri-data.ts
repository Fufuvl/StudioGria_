// Musterilerin Studio Gria hakkinda konustugu roportaj videolari.
//
// KURAL: alinti videoda soylenen cumledir; kisaltilabilir, anlami degistirilmez
// ve videoda olmayan bir soz eklenmez. Metinler 17 Eki 2026'da videolarin
// sesinden yaziya dokuldu ve altyazidaki kelimelerle karsilastirildi.
// Kullanici izni: 17 Eki 2026, "herhangi bir musteri portfoyumuzu hepsini
// sitede kullanabiliriz" ve bu videolar icin "onlari bile yukleyebiliriz".
//
// Videolar 720x1280, H.264, faststart; sayfa yalniz afis karesini yukler,
// video tiklaninca iner. Altyazi videonun icinde (acik altyazi).

import { SITE_URL } from "@/data/kurulus-data";

export type MusteriSozu = {
  kimlik: string;
  ad: string;
  rol?: string;
  marka: string;
  sektor: string;
  // Ilgili sektor sayfasi varsa /sektorler altindaki slug
  sektorSlug?: string;
  alinti: string;
  sureSaniye: number;
  // VideoObject aciklamasi
  ozet: string;
};

export const VIDEO_YOLU = "/assets/video/musteri";

export const musteriSozleri: MusteriSozu[] = [
  {
    kimlik: "love-yourself-by-anastasiya",
    ad: "Burak",
    rol: "Muhasebe uzmanı",
    marka: "Love Yourself by Anastasiya Beauty",
    sektor: "Güzellik merkezi",
    sektorSlug: "guzellik-merkezi-sosyal-medya-yonetimi",
    alinti: "Beklentilerimizin tamamını çok güzel ve fazlasıyla karşılıyorlar.",
    sureSaniye: 44,
    ozet:
      "Bir yıllık güzellik merkezi Love Yourself by Anastasiya Beauty, sosyal medyada Studio Gria ile çalışma deneyimini anlatıyor.",
  },
  {
    kimlik: "my-gym-buyukcekmece",
    ad: "Özlem Uluocak",
    marka: "My Gym Büyükçekmece",
    sektor: "Çocuk spor kulübü",
    alinti: "Gerçekten de nasıl olması gerektiğini onlar sayesinde görmüş oldum.",
    sureSaniye: 60,
    ozet:
      "My Gym Büyükçekmece, daha önce başka bir sosyal medya ekibiyle çalıştıktan sonra Studio Gria ile geçen iki yılı anlatıyor.",
  },
  {
    kimlik: "nese-erberk-anaokulu",
    ad: "Yaprak Altın",
    marka: "Neşe Erberk Anaokulu",
    sektor: "Anaokulu",
    alinti:
      "Bugüne kadar görüştüğümüz ajansların yapmadığı şeyi yaptılar. Bizi anlamaya çalıştılar.",
    sureSaniye: 93,
    ozet:
      "Neşe Erberk Anaokulu, uzun bir ajans arayışından sonra Studio Gria ile nasıl çalışmaya başladığını anlatıyor.",
  },
];

export function musteriSozuBul(kimlik: string): MusteriSozu | undefined {
  return musteriSozleri.find((soz) => soz.kimlik === kimlik);
}

// Sayfanin yapisal verisine eklenecek VideoObject dugumleri. Yalniz videonun
// gercekten gosterildigi sayfada kullanilir.
export function musteriVideoSemalari(kimlikler?: string[]) {
  const liste = kimlikler
    ? kimlikler.flatMap((k) => musteriSozleri.filter((s) => s.kimlik === k))
    : musteriSozleri;
  return liste.map((soz) => ({
    "@type": "VideoObject",
    "@id": `${SITE_URL}${VIDEO_YOLU}/${soz.kimlik}-musteri-yorumu.mp4#video`,
    name: `${soz.marka}: Studio Gria müşteri yorumu`,
    description: soz.ozet,
    thumbnailUrl: `${SITE_URL}${VIDEO_YOLU}/${soz.kimlik}-musteri-yorumu.jpg`,
    contentUrl: `${SITE_URL}${VIDEO_YOLU}/${soz.kimlik}-musteri-yorumu.mp4`,
    uploadDate: "2026-10-17",
    duration: `PT${soz.sureSaniye}S`,
    inLanguage: "tr-TR",
  }));
}
