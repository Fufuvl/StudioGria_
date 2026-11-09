// Vaka calismalari. Her kayit /referanslar/[slug] altinda kendi sayfasini
// uretir; yayinda olanlar site haritasina, referanslar sayfasina ve ilgili
// blog yazisina baglanir.
//
// Yayin izni: 17 Eki 2026, kullanici "herhangi bir musteri portfoyumuzu
// hepsini sitede kullanabiliriz" dedi; iki spor vakasi yayina alindi.
//
// KURAL: rakamlar yalnizca reklam hesabindan okunan ya da musterinin bildirdigi
// gercek degerlerdir, yuvarlanmaz ve tahmin eklenmez. Musteri yayina izin
// vermeden `yayinda: true` yapilmaz; kapali kayit sayfa uretmez (404).
//
// Onizleme: yerelde VAKA_ONIZLEME=1 ile derlenirse kapali kayitlar da uretilir.

export type VakaRakami = {
  deger: string;
  etiket: string;
};

export type VakaTablosu = {
  baslik: string;
  basliklar: string[];
  satirlar: string[][];
  not?: string;
};

export type VakaCalismasi = {
  slug: string;
  yayinda: boolean;
  // referans-data.ts'deki ad ile birebir ayni
  marka: string;
  sektor: string;
  ilce: string;
  donem: string;
  baslik: string;
  seoBaslik: string;
  seoAciklama: string;
  ozet: string;
  rakamlar: VakaRakami[];
  durum: string[];
  yapilanlar: string[];
  sonuc: string[];
  // "Ne yaptik" bolumunden sonra duran kurulum ve akis tablolari
  tablolar?: VakaTablosu[];
  // Sonuctan sonra: bu vakadan cikan, baska isletmeye tasinabilir dersler
  ogrenilenler?: string[];
  // Rakamlarin kaynagi, sayfada gorunur
  kaynakNotu: string;
  ilgiliHizmetler: string[];
  ilgiliYazilar: string[];
};

export const vakalar: VakaCalismasi[] = [
  {
    slug: "buyukcekmece-atletik-kayit-kampanyasi",
    yayinda: true,
    marka: "Büyükçekmece Atletik Spor Kulübü",
    sektor: "Spor okulu",
    ilce: "Büyükçekmece",
    donem: "7-23 Eylül 2026",
    baslik: "Büyükçekmece Atletik: 17 günde 70 mesaj konuşması, 5 yeni kayıt",
    seoBaslik: "Spor Okulu Reklam Vakası: Büyükçekmece Atletik",
    seoAciklama:
      "Büyükçekmece Atletik Spor Kulübü kayıt döneminde Meta mesaj reklamlarıyla 17 günde 70 konuşma ve 5 yeni kayıt aldı. Kayıt başı maliyet aylık aidatın altında.",
    ozet:
      "Kayıt dönemine özel mesaj kampanyası: 70 konuşma, 5 yeni kayıt ve aylık aidatın altında kalan kayıt başı maliyet.",
    rakamlar: [
      { deger: "70", etiket: "Mesaj konuşması" },
      { deger: "5", etiket: "Yeni kayıt" },
      { deger: "₺2.136", etiket: "Kayıt başı reklam maliyeti" },
      { deger: "₺4.000", etiket: "Aylık aidat" },
    ],
    durum: [
      "Büyükçekmece Atletik, basketbol ve jimnastik branşlarında çocuklara eğitim veren bir spor okulu. Eylül, yeni sezonun kayıt dönemi; velilerin karar verdiği birkaç haftalık bir pencere var ve bu pencerede görünür olmayan kulüp, sezonu eksik kadroyla açıyor.",
      "Hedef netti: beğeni ya da takipçi değil, kulüple doğrudan yazışan veli ve sonunda kayıt.",
    ],
    yapilanlar: [
      "Kayıt dönemi için konuşma başlatma hedefli bir Meta kampanyası kurduk: günlük ₺700 bütçe, iki reklam.",
      "Reklamı gören kişi form doldurmadan doğrudan kulüple yazışmaya başladı.",
      "Sonucu gösterim ya da tıklamayla değil, kulübün bildirdiği kayıt sayısıyla ölçtük.",
    ],
    sonuc: [
      "7-23 Eylül arasında ₺10.680 reklam harcamasıyla 34.020 kişiye ulaşıldı, 70 kişi kulüple konuşma başlattı ve kulübün bildirimine göre bu konuşmalardan 5 yeni kayıt çıktı.",
      "Kayıt başı reklam maliyeti ₺2.136 oldu. Bir öğrencinin aylık aidatı ₺4.000 olduğu için her kaydın ilk ay aidatı, o kaydı getiren reklam maliyetinin yaklaşık iki katı.",
    ],
    tablolar: [
      {
        baslik: "Kampanya kurulumu",
        basliklar: ["Kalem", "Değer"],
        satirlar: [
          ["Reklam hedefi", "Mesaj (konuşma başlatma)"],
          ["Dönem", "7-23 Eylül 2026, 17 gün"],
          ["Günlük bütçe", "₺700"],
          ["Reklam sayısı", "2"],
          ["Toplam reklam harcaması", "₺10.680"],
          ["Görüntülenme", "84.133"],
        ],
      },
      {
        baslik: "Reklamı gören kişiden kayda: adım adım maliyet",
        basliklar: ["Adım", "Kişi", "Adım başı maliyet"],
        satirlar: [
          ["Reklamı gördü", "34.020", "₺0,31"],
          ["Kulübe mesaj attı", "70", "₺152,57"],
          ["Kayıt oldu", "5", "₺2.136"],
        ],
        not: "Mesaj atan 70 kişinin 66'sı kulübe ilk kez yazan ailelerdi. Mesajdan kayda dönüş %7,1: her 14 konuşmadan biri kayıt oldu.",
      },
    ],
    ogrenilenler: [
      "Kayıt reklamının başarısı konuşma sayısıyla değil, kayıtla ölçülür. Kulüpten kayıt sayısını almadan kampanyanın işe yarayıp yaramadığı bilinemezdi; bu yüzden ölçümü baştan kayda bağladık.",
      "Mesajdan kayda dönüş oranı bir sonraki dönemin bütçesini hesaplamayı sağlar. Bu kampanyada her 14 konuşmadan biri kayıt oldu; hedeflenen kayıt sayısı 14 ile ve konuşma başı maliyetle çarpıldığında gereken reklam bütçesi ortaya çıkar.",
      "Doğru karşılaştırma reklam maliyeti ile kaydın getirdiği gelirdir. Bir kaydın reklam maliyeti (₺2.136) tek aylık aidatın (₺4.000) yarısı kadardı; 5 öğrencinin ilk ay aidatı (₺20.000) toplam reklam harcamasının 1,9 katı oldu.",
      "Form yerine doğrudan mesaj, velinin aklındaki soruyu o anda sormasını sağlar. 70 konuşmanın 66'sı kulübe ilk kez yazan ailelerdendi.",
    ],
    kaynakNotu:
      "Rakamlar Meta reklam hesabından 7-23 Eylül 2026 dönemi için okunmuştur. Kayıt sayısı ve aidat tutarı kulübün bildirimidir.",
    ilgiliHizmetler: ["reklam-yonetimi", "sosyal-medya-yonetimi"],
    ilgiliYazilar: ["spor-kulubu-sosyal-medya-yonetimi", "meta-reklam-butcesi-nasil-belirlenir"],
  },
  {
    slug: "beylikduzu-ihtisas-mesaj-kampanyasi",
    yayinda: true,
    marka: "Beylikdüzü İhtisas Spor Kulübü",
    sektor: "Spor kulübü",
    ilce: "Beylikdüzü",
    donem: "Haziran-Eylül 2026",
    baslik: "Beylikdüzü İhtisas: yaz kayıt döneminde 468 mesaj konuşması",
    seoBaslik: "Spor Kulübü Reklam Vakası: Beylikdüzü İhtisas",
    seoAciklama:
      "Beylikdüzü İhtisas Spor Kulübü altyapı kayıtları için Meta mesaj reklamlarıyla Haziran-Eylül 2026'da 468 konuşma aldı; konuşma başı maliyet ₺84,30.",
    ozet:
      "Altyapı kayıtları için yaz boyunca süren mesaj kampanyası: 468 konuşma, 154.600 kişiye erişim, konuşma başı ₺84,30.",
    rakamlar: [
      { deger: "468", etiket: "Mesaj konuşması" },
      { deger: "154.600", etiket: "Erişilen kişi" },
      { deger: "₺84,30", etiket: "Konuşma başı maliyet" },
    ],
    durum: [
      "Beylikdüzü İhtisas Spor Kulübü, basketbol ve voleybol branşlarında altyapı takımları olan, A takımı Türkiye Basketbol 2. Ligi'nde oynayan bir kulüp. Sosyal medya hesabını ve reklamlarını birlikte yürütüyoruz.",
      "Yaz ayları, yeni sezon öncesi altyapı kayıtlarının döndüğü dönem. Amaç, kayıt düşünen ailelerin kulübe doğrudan mesajla ulaşmasını sağlamaktı.",
    ],
    yapilanlar: [
      "Branş bazında ayrı reklam setleri kurduk; her branş kendi bütçesi ve kendi reklamlarıyla yayında kaldı.",
      "Reklamlar doğrudan mesaja yönlendirdi; kayıt soruları form beklemeden kulübe ulaştı.",
      "Sonuçları kulübe dönem dönem rakamla raporladık.",
    ],
    sonuc: [
      "Haziran-Eylül 2026 arasında ₺39.452 reklam harcamasıyla 154.600 kişiye ulaşıldı ve 468 kişi kulüple konuşma başlattı.",
      "Konuşma başı maliyet ₺84,30 oldu.",
    ],
    tablolar: [
      {
        baslik: "Kampanya kurulumu: branş başına ayrı reklam seti",
        basliklar: ["Reklam seti", "Yayına giriş", "Günlük bütçe"],
        satirlar: [
          ["Voleybol", "3 Haziran", "₺500"],
          ["Basketbol", "3 Haziran", "₺400"],
          ["Voleybol 2", "1 Temmuz", "₺300"],
          ["Voleybol 3", "3 Ağustos", "₺400"],
        ],
        not: "Tek mesaj kampanyası, dört reklam seti, sekiz reklam. Her sette biri Reels olmak üzere en az iki reklam yayında kaldı. Kampanya 19 Eylül'de kayıt dönemi bitince kapatıldı.",
      },
      {
        baslik: "Dönem dönem sonuç",
        basliklar: ["Gösterge", "Haziran-Eylül", "1-19 Eylül"],
        satirlar: [
          ["Reklam harcaması", "₺39.452", "₺10.200"],
          ["Konuşma", "468", "141"],
          ["Konuşma başı", "₺84,30", "₺72,34"],
          ["Erişilen kişi", "154.600", "64.720"],
        ],
        not: "Haziran-Eylül sütunu kampanyanın tamamıdır (537.792 görüntülenme); 1-19 Eylül, kayıt döneminin son haftalarıdır.",
      },
    ],
    ogrenilenler: [
      "Her branşı kendi reklam setinde yürütmek, bütçeyi branş başına ayrı ayarlamayı sağlar. Yaz boyunca Temmuz ve Ağustos'ta yeni voleybol setleri eklendi; tek bir genel reklamla bu ayar yapılamazdı.",
      "Ailelerin karar verdiği dönem reklamın en verimli çalıştığı dönemdir. Kayıt döneminin son haftalarında (1-19 Eylül) konuşma başı maliyet kampanya ortalamasının altındaydı: ₺84,30'a karşı ₺72,34.",
      "Reklamın hedefi doğrudan mesaj olduğunda kayıt soruları kulübe form beklemeden ulaşır. Bir sonraki adım konuşmaların kaça kayda döndüğünü kulüpten almak; bu oran bütçenin kayıt hedefinden geriye hesaplanmasını sağlar.",
    ],
    kaynakNotu:
      "Rakamlar Meta reklam hesabından Haziran-Eylül 2026 ve 1-19 Eylül 2026 dönemleri için okunmuştur.",
    ilgiliHizmetler: ["reklam-yonetimi", "sosyal-medya-yonetimi"],
    ilgiliYazilar: ["spor-kulubu-sosyal-medya-yonetimi", "meta-reklam-butcesi-nasil-belirlenir"],
  },
];

const onizleme = process.env.VAKA_ONIZLEME === "1";

export function yayindakiVakalar(): VakaCalismasi[] {
  return vakalar.filter((v) => v.yayinda || onizleme);
}

export function vakaBul(slug: string): VakaCalismasi | undefined {
  return yayindakiVakalar().find((v) => v.slug === slug);
}
