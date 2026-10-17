// Sektor sayfalari. Her kayit /sektorler/[slug] altinda kendi sayfasini uretir;
// site haritasi, alt bilgi, llms.txt ve /sektorler merkezi buradan beslenir.
//
// KURAL: her sektor kendi kanitiyla anlatilir. Gorsel ve video yalniz o
// sektorde gercekten yaptigimiz isten gelir; referans adlari referans-data.ts
// ile birebir aynidir. Kanitimiz olmayan sektor icin sayfa acilmaz.
//
// Fiyat: genel aylik bant prodüksiyonsuz 25.000-35.000 TL, prodüksiyonlu
// 30.000-60.000 TL (17 Eki 2026 kullanici karari, blog fiyat yazisiyla ayni).
// Kesin tutar her musteriye ozel tekliftedir.
//
// Klinik sayfasindaki mevzuat cumleleri "Saglik Hizmetlerinde Tanitim ve
// Bilgilendirme Faaliyetleri Hakkinda Yonetmelik" (RG 12.11.2025, sayi 33075)
// metnine gore yazildi; Md. 5 ve Md. 7, 17 Eki 2026'da Resmi Gazete'den okundu.

export type SektorKart = { baslik: string; metin: string };

export type SektorVideo = {
  dosya: string; // /assets/video/sektor altinda, uzantisiz
  ad: string;
  aciklama: string;
  sureSaniye: number;
};

export type SektorGorselSatiri = {
  marka: string;
  urun: string;
  once: { src: string; alt: string; etiket: string };
  kareler: { src: string; alt: string }[];
};

export type Sektor = {
  slug: string;
  ad: string;
  // Alt bilgideki baglanti metni: aranan kalibi tasir
  altBilgiAd: string;
  // Formun sektor alanina ve bildirim e-postasina yazilir
  formSektor: string;
  seoBaslik: string;
  seoAciklama: string;
  rozet: string; // H1'in ilk satiri: aranan kalip
  slogan: string; // H1'in ikinci satiri; *...* italik vurgu
  spot: string;
  kunye: { deger: string; etiket: string }[];
  // Acilis gorseli
  acilis:
    | { tur: "musteri-video"; kimlik: string }
    | { tur: "video"; video: SektorVideo }
    | { tur: "once-sonra"; satir: SektorGorselSatiri }
    | { tur: "mevzuat" };
  nedenBaslik: string;
  nedenler: SektorKart[];
  // Kanit bolumu
  kanitRozet: string;
  kanitBaslik: string;
  kanitSpot: string;
  videolar?: SektorVideo[];
  gorselSatirlari?: SektorGorselSatiri[];
  musteriSozu?: string; // musteri-sozleri-data kimligi
  referanslar: string[]; // referans-data.ts adlari
  yapilanlar: { baslik: string; metin: string; hizmetSlug?: string; bag?: string }[];
  model: { anahtar: "produksiyonlu" | "produksiyonsuz"; neden: string };
  sorular: { soru: string; cevap: string }[];
  ilgiliYazilar: string[];
  // Sayfanin altinda gorunur not (klinik: hukuki danismanlik degildir)
  dipNot?: string;
  whatsappMesaj: string;
  // Merkez sayfasindaki kart gorseli; yoksa kart tipografik kurulur
  kapak?: string;
  kapakAlt?: string;
};

const URUN = "/assets/img/ai-solutions/urun-gorseli";

export const sektorler: Sektor[] = [
  {
    slug: "guzellik-merkezi-sosyal-medya-yonetimi",
    ad: "Güzellik merkezi",
    altBilgiAd: "Güzellik Merkezi Sosyal Medya",
    formSektor: "Güzellik merkezi",
    seoBaslik: "Güzellik Merkezi Sosyal Medya Yönetimi | Studio Gria",
    seoAciklama:
      "Güzellik merkezleri için sosyal medya yönetimi, uzman röportaj videoları ve semte hedefli reklam. Müşterimiz Love Yourself by Anastasiya Beauty anlatıyor.",
    rozet: "Güzellik merkezi sosyal medya yönetimi",
    slogan: "Güven, *kamera karşısında* kurulur",
    spot:
      "Güzellik merkezinde müşteri randevu almadan önce uzmanı tanımak ister. Ekibinizi kendi sesiyle anlatan röportaj videoları, işlemlerin sakin anlatımı ve salonunuzun çevresine verilen reklamla hesabınızı randevu alınan bir vitrine çeviriyoruz.",
    kunye: [
      { deger: "Röportaj", etiket: "uzman ve ekip videoları" },
      { deger: "Semt odaklı", etiket: "reklam hedeflemesi" },
      { deger: "6 marka", etiket: "güzellik ve kozmetikte" },
    ],
    acilis: { tur: "musteri-video", kimlik: "love-yourself-by-anastasiya" },
    nedenBaslik: "Güzellik merkezinde sosyal medya *ne işe yarar*",
    nedenler: [
      {
        baslik: "Karar, uzmanı görünce verilir",
        metin:
          "Cilt bakımından kalıcı makyaja kadar müşteri işlemi kime yaptıracağını seçer. Uzmanın kamera karşısında yaklaşımını anlattığı bir röportaj, kampanya görselinden daha hızlı güven kurar.",
      },
      {
        baslik: "Sakin anlatım, abartısız sonuç",
        metin:
          "İşlemleri süreç, bakım ve hijyen üzerinden anlatırız. Mucize vaadi ve ağır filtre güveni de reklam onayını da zedeler; gerçek ışıkta çekilmiş kare daha uzun iş görür.",
      },
      {
        baslik: "Müşteri yakından gelir",
        metin:
          "Salon müşterisinin çoğu yakın semtlerden gelir. Reklamı salonun çevresine hedefler, gelen mesajı WhatsApp'ta randevuya taşıyacak cevapları birlikte hazırlarız.",
      },
    ],
    kanitRozet: "Müşterimiz anlatıyor",
    kanitBaslik: "Bir yıllık bir salon, *altı ayda* ne gördü",
    kanitSpot:
      "Love Yourself by Anastasiya Beauty bir yıl önce açılmış bir güzellik merkezi. Sosyal medyayı kendi yönetemediklerini söyleyerek başladılar; videoda ekipten Burak Bey altı aylık çalışmayı anlatıyor.",
    musteriSozu: "love-yourself-by-anastasiya",
    referanslar: [
      "Love Yourself by Anastasiya Beauty",
      "Tykhe Beauty",
      "Merve Coşar Beauty",
      "Luxera Paris",
      "Effectha",
      "Hempy",
    ],
    yapilanlar: [
      {
        baslik: "Uzman ve ekip röportajları",
        metin:
          "Aynı çekim gününde birden fazla kısa röportaj: uzmanın yaklaşımı, sık sorulan sorular, salonun hikayesi.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "İşlem ve salon Reels'leri",
        metin: "Hazırlık, uygulama ve sonuç anını doğal ışıkta, sakin bir kurguyla anlatan kısa videolar.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Aylık içerik planı ve yayın",
        metin: "Kampanya dönemleri, yeni işlemler ve ekip tanıtımları tek takvimde; paylaşım ve hikaye akışı bizde.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Semte hedefli reklam",
        metin: "Meta reklamları salonun çevresindeki semtlere; mesajlar WhatsApp'a, ölçü randevu.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "Google İşletme Profili",
        metin: "Haritada bulunmak için fotoğraf, hizmet listesi ve yorum düzeni.",
        bag: "/blog/google-isletme-profili-optimizasyonu",
      },
    ],
    model: {
      anahtar: "produksiyonlu",
      neden:
        "Güzellik merkezinde içeriğin gücü uzmanın kendisi olduğu için önerimiz prodüksiyonlu model: röportaj ve salon çekimi her ay sahada yapılır.",
    },
    sorular: [
      {
        soru: "Güzellik merkezi için sosyal medya ajansı ne yapar?",
        cevap:
          "İçerik planını kurar, uzman ve ekip röportajlarını çeker, işlem videolarını kurgular, paylaşımları yönetir ve reklamı salonun çevresine verir. Studio Gria'da bu işin merkezinde röportaj videoları durur: müşteri, işlemi kime yaptıracağına uzmanın kamera karşısındaki halini görerek karar verir.",
      },
      {
        soru: "Güzellik merkezi reklamı nasıl yapılır?",
        cevap:
          "Reklam salonun çevresindeki semtlere hedeflenir, tek bir işleme ya da uzmana odaklanır ve mesajı WhatsApp'a yönlendirir. Başarının ölçüsü beğeni değil, mesajdan randevuya dönen kişi sayısıdır. Reklamda abartılı sonuç vaadi kullanmayız; hem güveni hem reklam onayını riske atar.",
      },
      {
        soru: "Güzellik merkezi için hangi içerikler randevu getirir?",
        cevap:
          "Uzmanın tanıtıldığı röportajlar, işlemin nasıl yapıldığını sakin anlatan videolar, salonun hijyen ve ortamını gösteren kareler ve sık sorulan soruların kısa cevapları. Kampanya duyurusu bu içeriklerin üstüne oturduğunda işe yarar; tek başına güven kurmaz.",
      },
      {
        soru: "Ekibim kamera karşısında rahat değil, röportaj nasıl çekiliyor?",
        cevap:
          "Röportajı soru cevap biçiminde çekeriz; uzman ezber metin okumaz, bildiği konuyu kendi cümleleriyle anlatır. Çekimi salonun sakin saatine koyar, kurguda en doğal anları seçeriz. Çoğu ekip ilk birkaç sorudan sonra rahatlar.",
      },
      {
        soru: "Güzellik merkezi sosyal medya yönetimi ücreti ne kadar?",
        cevap:
          "Aylık saha çekimi dahil prodüksiyonlu yönetim genel olarak 30.000-60.000 TL, çekimsiz yürüyen prodüksiyonsuz yönetim 25.000-35.000 TL bandındadır. Kesin tutar içerik adedi, çekim günü ve reklam yönetimine göre salonunuza özel teklifte belirlenir. Reklam bütçesi bu ücrete dahil değildir.",
      },
      {
        soru: "Botoks, dolgu gibi işlemlerin tanıtımını yapıyor musunuz?",
        cevap:
          "Hayır. Botoks ve dolgu gibi tıbbi işlemler hekim ve sağlık kuruluşu işidir; bu işlemlerin tanıtımı sağlık mevzuatına tabidir. Güzellik merkezi hesabında bu işlemlere dair vaat içeren içerik üretmeyiz. Sağlık kuruluşları için yürüttüğümüz işi klinik sayfamızda anlatıyoruz.",
      },
    ],
    ilgiliYazilar: [
      "sosyal-medya-ajansi-fiyatlari",
      "isletmeler-icin-instagram-reels-rehberi",
      "instagram-hesabi-neden-buyumuyor",
      "google-isletme-profili-optimizasyonu",
    ],
    whatsappMesaj:
      "Merhaba, web sitenizden yazıyorum. Güzellik merkezim için sosyal medya yönetimi hakkında bilgi almak istiyorum.",
    kapak: "/assets/video/musteri/love-yourself-by-anastasiya-musteri-yorumu.jpg",
    kapakAlt: "Love Yourself by Anastasiya Beauty ekibinden Burak Bey, salonda röportaj çekiminde",
  },

  {
    slug: "restoran-kafe-sosyal-medya-yonetimi",
    ad: "Kafe ve restoran",
    altBilgiAd: "Restoran ve Kafe Sosyal Medya",
    formSektor: "Kafe / restoran",
    seoBaslik: "Restoran ve Cafe Sosyal Medya Yönetimi | Studio Gria",
    seoAciklama:
      "Kafe ve restoranlar için sosyal medya yönetimi, menü ve ürün çekimi, kurucu röportajı, drone ile mekân tanıtımı ve yerel reklam. Milvero Coffee işini görün.",
    rozet: "Restoran ve kafe sosyal medya yönetimi",
    slogan: "Karar, masaya oturmadan *ekranda* verilir",
    spot:
      "Kafe ve restoranda müşteri önce ürünü, mekânı ve havayı telefonda görür, sonra yola çıkar. Ürünü iştah açan yakın planla, mekânı doğru saatin ışığıyla, işletme sahibini kendi sesiyle anlatıyor; reklamı mekânın çevresindeki semtlere veriyoruz.",
    kunye: [
      { deger: "6 marka", etiket: "kahve ve yeme içmede" },
      { deger: "Drone", etiket: "ile mekân ve konum" },
      { deger: "Kurucu", etiket: "röportajı ve ürün Reels'i" },
    ],
    acilis: {
      tur: "video",
      video: {
        dosya: "milvero-coffee-urun-reels",
        ad: "Milvero Coffee ürün Reels'i",
        aciklama: "Milvero Coffee için çektiğimiz ürün Reels'i",
        sureSaniye: 16,
      },
    },
    nedenBaslik: "Kafe ve restoranda sosyal medya *ne işe yarar*",
    nedenler: [
      {
        baslik: "Ürün iştahla satılır",
        metin:
          "Döküm anı, köpük, buhar, kesit. Menü fotoğrafı ürünü tanıtır, Reels ise canını çektirir; ikisini aynı çekim gününde üretiriz.",
      },
      {
        baslik: "Mekân doğru saatte çekilir",
        metin:
          "Bir mekânın havası ışıkla değişir. Çekimi en güçlü saate koyar, gerekiyorsa drone ile konumu ve çevreyi de anlatırız; misafir nereye geleceğini önceden görür.",
      },
      {
        baslik: "İşletmenin bir yüzü olur",
        metin:
          "Kurucunun ya da şefin mekânın hikayesini anlattığı kısa röportaj, zincirlerle aynı caddede rekabet eden bağımsız bir işletmeye en çok yakışan içeriktir.",
      },
    ],
    kanitRozet: "Milvero Coffee · Büyükçekmece",
    kanitBaslik: "Bir kafe için çektiğimiz *üç farklı video*",
    kanitSpot:
      "Kurucu röportajı, ürün Reels'i ve drone ile mekân tanıtımı. Üçü de Milvero Coffee'nin hesabı için ekibimizin çekip kurguladığı işler.",
    videolar: [
      {
        dosya: "milvero-coffee-kurucu-roportaji",
        ad: "Kurucu röportajı",
        aciklama: "Milvero Coffee'nin kurucusu, markanın nasıl doğduğunu anlatıyor",
        sureSaniye: 22,
      },
      {
        dosya: "milvero-coffee-urun-reels",
        ad: "Ürün Reels'i",
        aciklama: "Milvero Coffee ürünleri için döküm ve servis anlarından kurulan Reels",
        sureSaniye: 16,
      },
      {
        dosya: "milvero-coffee-drone-tanitim",
        ad: "Drone ile mekân tanıtımı",
        aciklama: "Milvero Coffee'nin Büyükçekmece'deki konumunu ve cephesini havadan anlatan video",
        sureSaniye: 30,
      },
    ],
    referanslar: [
      "Milvero Coffee",
      "Pacua Coffee",
      "Kien Coffee",
      "Oceanic Acarkent",
      "Deryam Balık",
      "Bi Damla İşkembe",
    ],
    yapilanlar: [
      {
        baslik: "Menü ve ürün çekimi",
        metin: "Menü, reklam ve teslimat uygulamaları için aynı gün çekilen ürün fotoğrafları.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Reels ve tanıtım videosu",
        metin: "Döküm, hazırlık ve servis anlarından kısa videolar; mekân için tanıtım filmi.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Kurucu ve şef röportajı",
        metin: "Mekânın hikayesini işletmenin kendi sesiyle anlatan röportaj videoları.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Drone ile mekân",
        metin: "Konum, cephe ve çevreyi havadan anlatan açılış planları.",
        hizmetSlug: "drone-cekimleri",
      },
      {
        baslik: "Yerel reklam",
        metin: "Mekânın çevresindeki semtlere Meta reklamı; ölçü rezervasyon ve yol tarifi.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "İçerik fikirleri",
        metin: "Ay boyunca ne paylaşılacağını anlatan rehberimiz.",
        bag: "/blog/restoran-kafe-sosyal-medya-icerik-fikirleri",
      },
    ],
    model: {
      anahtar: "produksiyonlu",
      neden:
        "Yeme içmede ürün ve mekân her ay yenilendiği için önerimiz prodüksiyonlu model. Tek çekim gününün kareleri yapay zeka ile yeni sahnelere taşınarak ay boyunca kullanılabilir.",
    },
    sorular: [
      {
        soru: "Restoran sosyal medya yönetimi neleri kapsar?",
        cevap:
          "Aylık içerik planı, menü ve ürün çekimi, Reels kurgusu, paylaşım ve hikaye yönetimi, yerel reklam ve aylık rapor. Studio Gria'da çekimi kendi ekibimiz yapar; kurucu röportajı ve drone ile mekân tanıtımı da aynı paketin içinde planlanabilir.",
      },
      {
        soru: "Cafe reklamı nasıl yapılır?",
        cevap:
          "Reklam mekâna gelebilecek mesafedeki semtlere hedeflenir, tek bir ürünü ya da deneyimi öne çıkarır ve kişiyi yol tarifine, rezervasyona ya da mesaja götürür. İstanbul geneline verilen reklam, gelmeyecek kişiye harcanır. Reklamın kreatifi mekânda çekilmiş gerçek görüntüdür.",
      },
      {
        soru: "Menü fotoğraf çekimi fiyatı ne kadar?",
        cevap:
          "Menü çekimi aylık prodüksiyonlu yönetimin içinde yapılabilir ya da tek seferlik çekim olarak teklif edilir; tutar ürün sayısına ve çekim süresine göre belirlenir. Aylık prodüksiyonlu sosyal medya yönetimi genel olarak 30.000-60.000 TL bandındadır.",
      },
      {
        soru: "Restoran tanıtım videosu nasıl çekilir?",
        cevap:
          "Önce mekânın neyle bilindiğini belirleriz: ürün, manzara, ekip ya da hikaye. Çekimi ışığın en güçlü olduğu saate ve servisin olağan akışına göre planlar, misafiri rahatsız etmeden ürün, mekân ve gerekiyorsa drone planlarını aynı gün tamamlarız.",
      },
      {
        soru: "Kafe hesabında ne sıklıkla paylaşım yapılmalı?",
        cevap:
          "Düzenli olmak sıklıktan önemlidir. Haftada birkaç akış paylaşımı ve her gün birkaç hikaye çoğu kafe için yeterli bir ritimdir; kesin sayı teklifte işletmenin hızına göre belirlenir. Tek çekim gününde ayın büyük kısmına yetecek içerik üretmeyi hedefleriz.",
      },
      {
        soru: "Yapay zeka ile yiyecek ve içecek görseli olur mu?",
        cevap:
          "Gerçek çekimden yola çıkarak olur. Ürünü kendi mekânınızda çeker, aynı ürünü yapay zeka ile yeni sahnelere ve mevsimlere taşırız; ürünün görünüşünü değiştirmeyiz. Menüde olmayan bir ürünü varmış gibi göstermek misafiri yanıltır, bunu yapmayız.",
      },
    ],
    ilgiliYazilar: [
      "sosyal-medya-ajansi-fiyatlari",
      "restoran-kafe-sosyal-medya-icerik-fikirleri",
      "isletmeler-icin-instagram-reels-rehberi",
      "meta-reklam-butcesi-nasil-belirlenir",
    ],
    whatsappMesaj:
      "Merhaba, web sitenizden yazıyorum. Kafe / restoranım için sosyal medya yönetimi hakkında bilgi almak istiyorum.",
    kapak: "/assets/video/sektor/milvero-coffee-urun-reels.jpg",
    kapakAlt: "Milvero Coffee için çekilmiş ürün Reels'inden bir kare",
  },

  {
    slug: "e-ticaret-reklam-ve-sosyal-medya",
    ad: "E-ticaret",
    altBilgiAd: "E-Ticaret Reklam Ajansı",
    formSektor: "E-ticaret",
    seoBaslik: "E-Ticaret Reklam Ajansı ve Sosyal Medya | Studio Gria",
    seoAciklama:
      "E-ticaret markaları için Meta reklam yönetimi, sosyal medya ve yapay zeka ile ürün görseli. Lucea Jewelry ve Star Termos işlerinden örnekler. Teklif alın.",
    rozet: "E-ticaret reklam ve sosyal medya ajansı",
    slogan: "Her ürün, *satan bir kareyle* görünsün",
    spot:
      "E-ticarette reklam, kreatif kadar iyidir. Ürününüzü telefon fotoğrafından katalog karesine taşıyor, Reels ve reklam setlerini birlikte kuruyor, harcamayı satış verisine göre yönetiyoruz. Çekim günü beklemeden.",
    kunye: [
      { deger: "6 marka", etiket: "e-ticarette" },
      { deger: "Çekimsiz", etiket: "ürün görseli üretimi" },
      { deger: "Meta + Google", etiket: "reklam yönetimi" },
    ],
    acilis: {
      tur: "once-sonra",
      satir: {
        marka: "Lucea Jewelry",
        urun: "Marea küpe",
        once: {
          src: `${URUN}/lucea-marea-kupe-urun-fotografi.jpg`,
          alt: "Marea küpenin tezgah üstünde telefonla çekilmiş fotoğrafı",
          etiket: "Gönderilen fotoğraf",
        },
        kareler: [
          {
            src: `${URUN}/lucea-marea-kupe-yapay-zeka-gorseli-1.jpg`,
            alt: "Marea küpe için yapay zeka ile üretilmiş, tenis kortunda modelli katalog karesi",
          },
          {
            src: `${URUN}/lucea-marea-kupe-yapay-zeka-gorseli-3.jpg`,
            alt: "Marea küpe için yapay zeka ile üretilmiş, kırmızı toz zeminde ürün karesi",
          },
        ],
      },
    },
    nedenBaslik: "E-ticarette sosyal medya ve reklam *ne işe yarar*",
    nedenler: [
      {
        baslik: "Hedeflemeyi artık kreatif yapıyor",
        metin:
          "Meta, reklamı kime göstereceğini büyük ölçüde görselin kendisinden öğreniyor. Bu yüzden bir ürün için tek kare değil, farklı sahne ve açılardan bir set gerekir.",
      },
      {
        baslik: "Ürün çekimi darboğaz olmasın",
        metin:
          "Yeni ürün geldiğinde stüdyo günü beklemeyiz. Net bir telefon fotoğrafından modelli ve sahneli kareler üretir, ürünün kendisini değiştirmeden kataloğa ve reklama hazırlarız.",
      },
      {
        baslik: "Ölçü satıştır",
        metin:
          "Beğeni ve tıklama ara göstergedir. Piksel ve katalog bağlantısını kontrol eder, bütçeyi satış ve sepet verisine göre kaydırırız.",
      },
    ],
    kanitRozet: "Lucea Jewelry · Star Termos",
    kanitBaslik: "Gönderilen fotoğraf, *teslim edilen kareler*",
    kanitSpot:
      "Solda markanın bize gönderdiği fotoğraf, sağda aynı üründen ürettiğimiz kareler. Takıda da termosta da ürün aynı kalır, sahne markaya göre kurulur.",
    gorselSatirlari: [
      {
        marka: "Lucea Jewelry",
        urun: "Solis küpe",
        once: {
          src: `${URUN}/lucea-solis-kupe-urun-fotografi.jpg`,
          alt: "Solis küpenin tezgah üstünde çekilmiş fotoğrafı",
          etiket: "Gönderilen fotoğraf",
        },
        kareler: [
          {
            src: `${URUN}/lucea-solis-kupe-yapay-zeka-gorseli-1.jpg`,
            alt: "Solis küpe için yapay zeka ile üretilmiş modelli editoryal kare",
          },
          {
            src: `${URUN}/lucea-solis-kupe-yapay-zeka-gorseli-2.jpg`,
            alt: "Solis küpe için yapay zeka ile üretilmiş, taş üzerinde ürün karesi",
          },
        ],
      },
      {
        marka: "Star Termos",
        urun: "Elegant serisi",
        once: {
          src: `${URUN}/star-termos-elegant-termos-urun-fotografi.jpg`,
          alt: "Elegant serisi termosun beyaz fonlu katalog fotoğrafı",
          etiket: "Katalog fotoğrafı",
        },
        kareler: [
          {
            src: `${URUN}/star-termos-elegant-termos-yapay-zeka-gorseli-1.jpg`,
            alt: "Elegant serisi termos için yapay zeka ile üretilmiş, piknik sofrasında modelli kare",
          },
          {
            src: `${URUN}/star-termos-elegant-termos-yapay-zeka-gorseli-2.jpg`,
            alt: "Elegant serisi termos için yapay zeka ile üretilmiş, piknik örtüsünde kitap okuyan modelli kare",
          },
        ],
      },
    ],
    referanslar: ["Lucea", "Star Termos", "Soothe Concept", "Mieco", "Veloute", "Vona Lisa"],
    yapilanlar: [
      {
        baslik: "Meta reklam yönetimi",
        metin: "Kreatif setleri, katalog ve dönüşüm kampanyaları; bütçe satış verisine göre.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "Yapay zeka ile ürün görseli",
        metin: "Telefon fotoğrafından modelli ve sahneli katalog kareleri, ticari kullanım hakkıyla.",
        bag: "/ai-urun-gorseli",
      },
      {
        baslik: "Reels ve ürün videosu",
        metin: "Reklamda ve akışta çalışan kısa ürün videoları.",
        hizmetSlug: "ai-uretim-reklam-filmleri",
      },
      {
        baslik: "Sosyal medya yönetimi",
        metin: "Prodüksiyonsuz modelde çekim günü olmadan aylık içerik ve yayın.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Piksel ve katalog",
        metin: "Mağaza altyapısıyla reklam hesabı arasındaki ölçüm bağlantısı.",
        hizmetSlug: "e-ticaret-entegrasyonlari",
      },
    ],
    model: {
      anahtar: "produksiyonsuz",
      neden:
        "Ürünü elinde olan e-ticaret markası için önerimiz prodüksiyonsuz model: ürün fotoğrafınızı gönderirsiniz, görsel, içerik ve reklam çekim günü beklemeden yürür.",
    },
    sorular: [
      {
        soru: "E-ticaret reklam ajansı ne yapar?",
        cevap:
          "Reklam kreatiflerini üretir, kampanyaları kurar, bütçeyi satış verisine göre yönetir ve sonucu raporlar. Studio Gria'da kreatif üretimi ile reklam yönetimi aynı ekipte olduğu için yeni ürünün görseli ve reklamı aynı hafta içinde yayına girebilir.",
      },
      {
        soru: "E-ticaret sosyal medya yönetimi için çekim şart mı?",
        cevap:
          "Şart değil. Prodüksiyonsuz modelde ürününüzün net bir fotoğrafından yapay zeka ile modelli ve sahneli kareler üretiyor, aylık içeriği bu karelerle kuruyoruz. Ürün değişmez; sahne, ışık ve model markanıza göre kurulur. Kampanya filmi gerekirse çekim ayrıca planlanır.",
      },
      {
        soru: "E-ticaret sosyal medya yönetimi ücreti ne kadar?",
        cevap:
          "Prodüksiyonsuz aylık yönetim genel olarak 25.000-35.000 TL bandındadır; kesin tutar ürün sayısı, içerik adedi ve reklam yönetiminin kapsamına göre teklifte belirlenir. Reklam bütçesi bu ücrete dahil değildir, doğrudan reklam platformuna ödenir.",
      },
      {
        soru: "Meta reklam bütçesi ne kadar olmalı?",
        cevap:
          "Bütçe, ürünün satış fiyatına ve bir satışın size kaça mal olabileceğine göre belirlenir. Reklam sistemi öğrenmek için yeterli sayıda sonuç görmelidir; çok düşük bütçe kampanyayı hiç olgunlaştırmaz. Hesaplama yöntemini ayrı bir rehberde anlattık.",
      },
      {
        soru: "Yapay zeka ürün görseli ürünümü değiştirir mi?",
        cevap:
          "Değiştirmez. Logo, renk ve ürün detayları her karede elle kontrol edilir; ürün olduğu gibi kalır, yalnız sahne ve ışık yeniden kurulur. Ürünle uyuşmayan kare teslim edilmez.",
      },
      {
        soru: "Hangi e-ticaret altyapılarıyla çalışıyorsunuz?",
        cevap:
          "Reklam ve içerik tarafı altyapıdan bağımsız yürür. Ölçüm için mağazanızın Meta pikseli ve ürün kataloğu bağlantısını kontrol eder, eksikse kurulumunu planlarız. Takı markası Lucea Jewelry'nin mağazası ikas altyapısında çalışıyor.",
      },
    ],
    ilgiliYazilar: [
      "sosyal-medya-ajansi-fiyatlari",
      "meta-reklam-butcesi-nasil-belirlenir",
      "google-ads-mi-meta-ads-mi",
      "meta-reklam-hesabi-kisitlandi",
    ],
    whatsappMesaj:
      "Merhaba, web sitenizden yazıyorum. E-ticaret markam için reklam ve sosyal medya hakkında bilgi almak istiyorum.",
    kapak: `${URUN}/lucea-marea-kupe-yapay-zeka-gorseli-1.jpg`,
    kapakAlt: "Lucea Jewelry Marea küpe için yapay zeka ile üretilmiş modelli katalog karesi",
  },

  {
    slug: "klinik-sosyal-medya-yonetimi",
    ad: "Klinik ve sağlık",
    altBilgiAd: "Klinik Sosyal Medya Yönetimi",
    formSektor: "Klinik / sağlık",
    seoBaslik: "Klinik ve Diş Kliniği Sosyal Medya Yönetimi | Studio Gria",
    seoAciklama:
      "Klinikler için 12 Kasım 2025 sağlık tanıtım yönetmeliğine uygun sosyal medya: hekim bilgilendirme videoları, onay akışı, Google İşletme Profili ve SEO.",
    rozet: "Klinik sosyal medya yönetimi",
    slogan: "Reklam değil, *güvenilir bilgilendirme*",
    spot:
      "Sağlıkta tanıtımın kuralları ayrıdır: reklam, fiyat, kampanya ve hasta teşekkürü yasak, görsel içerik şartlı. Hekiminizin bilgisini yönetmeliğe uygun biçimde anlatan içerikleri onay akışıyla üretiyor, hastanın sizi aradığı yerde, Google'da ve haritada görünür olmanızı sağlıyoruz.",
    kunye: [
      { deger: "12 Kasım 2025", etiket: "yönetmeliğine göre" },
      { deger: "Hekim onayı", etiket: "her paylaşımdan önce" },
      { deger: "Arama ve harita", etiket: "ana kanal" },
    ],
    acilis: { tur: "mevzuat" },
    nedenBaslik: "Klinikte sosyal medya *nasıl çalışır*",
    nedenler: [
      {
        baslik: "Büyüme kanalı arama",
        metin:
          "Yönetmelik ücretli ve öne çıkarmaya yönelik tanıtımı kısıtlar. Hasta ise ihtiyaç anında Google'a ve haritaya yazar; web sitesi, SEO ve Google İşletme Profili bu yüzden ana kanaldır.",
      },
      {
        baslik: "Bilgi hekimden gelir",
        metin:
          "İçeriğin konusu hastaların gerçekten sorduğu sorulardır, cevabı hekiminiz verir. Biz soruyu seçer, çekimi kurar, kurguyu ve yayını yönetiriz.",
      },
      {
        baslik: "Her paylaşım onaydan geçer",
        metin:
          "Yönetmeliğe aykırı içeriği yapan da paylaşan da aynı derecede sorumludur. Bu yüzden her içerik yayından önce hekim onayına gider; onaysız paylaşım yapılmaz.",
      },
    ],
    kanitRozet: "Nasıl çalışırız",
    kanitBaslik: "Bir bilgilendirme videosunun *dört adımı*",
    kanitSpot:
      "Sağlıkta hız değil doğruluk önce gelir. Her video aynı yoldan geçer; hekimin onayı olmadan hiçbir içerik yayına çıkmaz.",
    referanslar: ["DYT. Hilal Harmancı", "Tykhe Danışmanlık"],
    yapilanlar: [
      {
        baslik: "Hekim bilgilendirme videoları",
        metin: "Hastaların sık sorduğu sorulara hekimin kendi sesiyle verdiği kısa cevaplar.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Web sitesi, SEO ve GEO",
        metin: "Hastanın Google'da ve yapay zeka asistanlarında sorduğu soruya cevap veren sayfalar.",
        hizmetSlug: "web-site-seo-geo",
      },
      {
        baslik: "Google İşletme Profili",
        metin: "Haritada doğru kategori, çalışma saati, fotoğraf ve hizmet listesi.",
        bag: "/blog/google-isletme-profili-optimizasyonu",
      },
      {
        baslik: "İçerik takvimi ve onay akışı",
        metin: "Her ayın içerikleri tek listede; hekim onayı yayından önce alınır.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
    ],
    model: {
      anahtar: "produksiyonlu",
      neden:
        "Klinikte içeriğin kaynağı hekimin kendisi olduğu için önerimiz prodüksiyonlu model: bilgilendirme videoları klinikte, hekimin programına göre çekilir.",
    },
    sorular: [
      {
        soru: "Klinik sosyal medyada reklam yapabilir mi?",
        cevap:
          "Hayır. Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik (Resmî Gazete, 12 Kasım 2025) sağlık hizmetinde açık veya örtülü reklamı yasaklar ve yalnız belirlenen şartlarla tanıtım ve bilgilendirmeye izin verir. Bu yüzden klinik hesabı reklam diliyle değil, hekimin bilgilendirmesi çizgisinde kurulur.",
      },
      {
        soru: "Klinik Instagram'da öncesi sonrası fotoğraf paylaşabilir mi?",
        cevap:
          "Yönetmelik bunu şartlara bağlar: hastanın açık rızası, aynı ortam ve teknik koşullarda çekim, işlem ve çekim tarihlerinin belirtilmesi, sonradan düzeltme ve filtre uygulanmaması, paylaşımın yorum, beğeni ve yeniden paylaşım özelliklerinin kapalı olması. Görsel içerik sponsorlu ya da ücret verilerek yayınlatılamaz.",
      },
      {
        soru: "Hasta yorumu ya da teşekkür mesajı paylaşılabilir mi?",
        cevap:
          "Hasta veya yakınlarının teşekkür ve memnuniyet ifadeleri, yönetmeliğe göre reklam niteliğinde paylaşım için kullanılamaz. Bu kural sosyal medya dahil bütün mecraları kapsar. Güveni hasta sözüyle değil, hekimin bilgisi ve kliniğin şeffaf anlatımıyla kurarız.",
      },
      {
        soru: "Klinik fiyat ya da kampanya paylaşabilir mi?",
        cevap:
          "Hayır. Yönetmelik tanıtım ve bilgilendirmede ücret, indirim, kampanya ve promosyon bilgisine yer verilmesini yasaklar. Sosyal medya ve arama motorlarında kayıt mümkündür, ancak ücretli sponsorlu ve öne çıkarmaya yönelik olmaması şartıyla; yeni açılan tesis için açılışı takip eden ilk bir ay istisnası vardır.",
      },
      {
        soru: "Klinik için sosyal medya ajansı ne yapar?",
        cevap:
          "İçerik takvimini kurar, hastaların sorduğu soruları seçer, hekimin cevabını çeker ve kurgular, her içeriği hekim onayından geçirip yayınlar. Studio Gria ayrıca kliniğin web sitesini ve Google İşletme Profili'ni hastanın arama anına göre düzenler; sağlıkta asıl görünürlük buradan gelir.",
      },
      {
        soru: "Diş kliniği sosyal medyada ne paylaşabilir?",
        cevap:
          "Hekimin ağız ve diş sağlığına dair bilgilendirmeleri, tedavi süreçlerinin nasıl işlediğinin anlatımı ve sık sorulan soruların cevapları. Öncesi sonrası görseller yalnız yönetmelikteki şartlarla paylaşılır; fiyat, kampanya ve hasta teşekkürü paylaşılmaz.",
      },
    ],
    ilgiliYazilar: [
      "google-isletme-profili-optimizasyonu",
      "sosyal-medya-ajansi-mi-kendim-mi",
      "sosyal-medya-ajansi-fiyatlari",
    ],
    dipNot:
      "Bu sayfadaki mevzuat bilgileri bilgilendirme amaçlıdır, hukuki danışmanlık değildir. Kaynak: Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik, Resmî Gazete 12 Kasım 2025, sayı 33075, Madde 5 ve 7. Kendi durumunuz için hukuk danışmanınıza başvurun.",
    whatsappMesaj:
      "Merhaba, web sitenizden yazıyorum. Kliniğimiz için sosyal medya yönetimi hakkında bilgi almak istiyorum.",
  },
];

export function sektorBul(slug: string): Sektor | undefined {
  return sektorler.find((s) => s.slug === slug);
}

// Klinik acilis kartinin satirlari (Md. 5 ve Md. 7'den)
export const mevzuatKarti = {
  baslik: "Sağlıkta tanıtım, 12 Kasım 2025 yönetmeliğine göre",
  serbest: [
    "Hekimin bilgilendirme içeriği",
    "Şartlı öncesi sonrası: açık rıza, aynı koşullar, tarih, filtresiz",
    "Sosyal medya ve arama motoru kaydı, sponsorsuz",
    "Yeni açılan tesise ilk ay sponsorlu tanıtım, diğer şartlarla",
  ],
  yasak: [
    "Açık ya da örtülü reklam",
    "Ücret, indirim, kampanya, promosyon",
    "Hasta teşekkürü ve memnuniyet paylaşımı",
    "Ücretli ya da sponsorlu görsel yayın",
  ],
};

export const klinikAdimlari = [
  { baslik: "Soru", metin: "Hastaların gerçekten sorduğu soruyu seçeriz: aramalardan, kliniğe gelen sorulardan." },
  { baslik: "Çekim", metin: "Hekim cevabı kendi cümleleriyle verir; çekim klinikte, programına göre yapılır." },
  { baslik: "Onay", metin: "Kurgu, metin ve başlık yayından önce hekime gider. Onaysız içerik yayına çıkmaz." },
  { baslik: "Yayın", metin: "Sponsorsuz yayınlanır, sitede ve İşletme Profili'nde de kullanılır." },
];
