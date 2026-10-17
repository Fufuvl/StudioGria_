// Sektor sayfalari. Her kayit /sektorler/[slug] altinda kendi sayfasini uretir;
// site haritasi, alt bilgi, llms.txt ve /sektorler merkezi buradan beslenir.
//
// KURAL: her sektor kendi kanitiyla anlatilir. Gorsel ve video yalniz o
// sektorde gercekten yaptigimiz isten gelir; referans adlari referans-data.ts
// ile birebir aynidir. Kanitimiz olmayan sektor icin sayfa acilmaz.
// Istisna: klinik, spor kulubu ve sanayi acilis gorselleri stok (kullanici izni
// 17-18 Eki 2026; sayfada "Temsili gorsel" yazar). Spor ve sanayi gorsellerini
// kullanici secip gonderecek; o zamana kadar bu iki sayfada galeri yok.
// Sanayi sayfasinda Entepe Mobilya kullanilmaz (18 Eki 2026 kullanici karari).
//
// Hukuk burosu icin sayfa ACILMAZ: TBB Reklam Yasagi Yonetmeligi Md. 7/e
// (RG 9.8.2024, sayi 32627) avukatlara arama motoru siralama yontemlerini ve
// cevrim ici reklami yasakliyor; boyle bir sayfa musteriyi de riske atar.
//
// Egitim sayfasindaki kural MEB Ozel Ogretim Kurumlari Yonetmeligi Ek Madde 4
// metnine gore yazildi (reklam ve ilanda ogrenci resmi, adi ve basari bilgisi
// yok; karekod zorunlu), 17 Eki 2026'da MEB'in yayimladigi metinden okundu.
//
// Oba Hotel: yalniz drone kayitlari Gria'nindir; otel sayfasinda yer ve yemek
// cekimi kullanilmaz.
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
  yuklenme?: string; // VideoObject uploadDate; yoksa 2026-10-17
};

export type SektorGorselSatiri = {
  marka: string;
  urun: string;
  once: { src: string; alt: string; etiket: string };
  kareler: { src: string; alt: string }[];
};

export type SektorGaleriKaresi = {
  src: string;
  alt: string;
  etiket: string; // marka ve isin adi, karenin altinda
  oran: "dikey" | "yatay"; // dikey 4:5, yatay 3:2
};

export type SektorKurali = {
  baslik: string;
  serbestEtiket?: string; // varsayilan "Yapılabilir"
  serbest: string[];
  yasakEtiket?: string; // varsayilan "Yapılamaz"
  yasak: string[];
  kaynak: string;
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
    | { tur: "gorsel"; src: string; alt: string; not: string };
  nedenBaslik: string;
  nedenler: SektorKart[];
  // Kanit bolumu
  kanitRozet: string;
  kanitBaslik: string;
  kanitSpot: string;
  videolar?: SektorVideo[];
  gorselSatirlari?: SektorGorselSatiri[];
  galeri?: SektorGaleriKaresi[];
  vakalar?: string[]; // vaka-data.ts slug'lari; yalniz yayindakiler gorunur
  kural?: SektorKurali; // mevzuat ozeti, kanit bolumunde
  adimlar?: SektorKart[]; // calisma adimlari, kanit bolumunde
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
  kapakKonum?: string; // kart kirpmasinda object-position, varsayilan orta
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
    acilis: {
      tur: "gorsel",
      src: "/assets/img/sektor/klinik/klinik-hekim-bilgilendirme.jpg",
      alt: "Diş hekimi, aydınlık bir muayenehanede tabletteki görüntüyü hastasına anlatıyor",
      not: "Temsilî görsel. Klinikte içeriğin merkezi, hekimin hastaya anlattığı bilgidir.",
    },
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
    // Satirlar yonetmeligin Md. 5 ve Md. 7'sinden
    kural: {
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
      kaynak: "Resmî Gazete 12.11.2025, sayı 33075, Madde 5 ve 7",
    },
    adimlar: [
      { baslik: "Soru", metin: "Hastaların gerçekten sorduğu soruyu seçeriz: aramalardan, kliniğe gelen sorulardan." },
      { baslik: "Çekim", metin: "Hekim cevabı kendi cümleleriyle verir; çekim klinikte, programına göre yapılır." },
      { baslik: "Onay", metin: "Kurgu, metin ve başlık yayından önce hekime gider. Onaysız içerik yayına çıkmaz." },
      { baslik: "Yayın", metin: "Sponsorsuz yayınlanır, sitede ve İşletme Profili'nde de kullanılır." },
    ],
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
    kapak: "/assets/img/sektor/klinik/klinik-hekim-bilgilendirme.jpg",
    kapakAlt: "Diş hekimi muayenehanede hastasına bilgi veriyor (temsilî görsel)",
  },

  {
    slug: "spor-kulubu-ve-spor-okulu-reklam",
    ad: "Spor kulübü",
    altBilgiAd: "Spor Kulübü Reklam ve Sosyal Medya",
    formSektor: "Spor kulübü / spor okulu",
    seoBaslik: "Spor Kulübü ve Spor Okulu Reklam Ajansı | Studio Gria",
    seoAciklama:
      "Spor kulüpleri ve spor okulları için kayıt dönemi reklamı, maç günü çekimi ve sosyal medya. Büyükçekmece Atletik ve Beylikdüzü İhtisas vakalarını okuyun.",
    rozet: "Spor kulübü ve spor okulu reklamı",
    slogan: "Kayıt dönemi *birkaç hafta* sürer",
    spot:
      "Veliler yeni sezonun kararını birkaç haftalık bir pencerede verir. Kayıt dönemine özel mesaj reklamı, maç ve antrenman günlerinden çıkan içerik ve kulübün kendi yüzünü gösteren çekimlerle o pencerede görünür oluyoruz; ölçüyü mesaj ve kayıt sayısıyla tutuyoruz.",
    kunye: [
      { deger: "468", etiket: "konuşma, Beylikdüzü İhtisas" },
      { deger: "5 kayıt", etiket: "17 günde, Büyükçekmece Atletik" },
      { deger: "5 marka", etiket: "spor ve çocuk sporunda" },
    ],
    acilis: {
      tur: "gorsel",
      src: "/assets/img/sektor/spor/spor-kulubu-antrenman.jpg",
      alt: "Basketbol antrenörü salonda genç oyunculara oyun planını anlatıyor",
      not: "Temsilî görsel. Spor kulübünde içeriğin kaynağı saha: antrenman, maç ve kulübün kendi insanları.",
    },
    nedenBaslik: "Spor kulübünde reklam ve sosyal medya *ne işe yarar*",
    nedenler: [
      {
        baslik: "Kayıt bir pencerede verilir",
        metin:
          "Yaz ve eylül, yeni sezonun kayıt dönemidir. Reklam bu haftalarda yoğunlaşır ve veli form doldurmadan doğrudan kulüple yazışır; mesajı kayda çeviren kulübün kendisidir, biz yolu kısaltırız.",
      },
      {
        baslik: "Maç günü içerik üretir",
        metin:
          "Maç, antrenman ve kutlama anları zaten yaşanıyor. Sahada çektiğimiz fotoğraf ve videolar, oyuncu tanıtımları ve sezon tasarımlarıyla hesap sezon boyunca canlı kalır.",
      },
      {
        baslik: "Veli, kulübün içini görmek ister",
        metin:
          "Antrenör, tesis ve çocuğun kulüpteki bir günü. Velinin aklındaki soruları cevaplayan içerik, kampanya duyurusundan daha çok güven kurar.",
      },
    ],
    kanitRozet: "İki kulüp, iki kayıt dönemi",
    kanitBaslik: "Reklamın ölçüsü *mesaj ve kayıt*",
    kanitSpot:
      "Rakamlar iki kulübün Meta reklam hesabından okundu; kayıt sayısı kulübün bildirimi. Hesaplamanın ayrıntısı vaka sayfalarında.",
    vakalar: ["buyukcekmece-atletik-kayit-kampanyasi", "beylikduzu-ihtisas-mesaj-kampanyasi"],
    referanslar: [
      "Beşiktaş Spor Kulübü",
      "Beylikdüzü İhtisas Spor Kulübü",
      "Büyükçekmece Atletik Spor Kulübü",
      "Hepta Omnis",
      "My Gym",
    ],
    yapilanlar: [
      {
        baslik: "Kayıt dönemi reklamı",
        metin: "Branşa göre ayrı reklam setleri; reklam doğrudan WhatsApp ya da Instagram mesajına açılır.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "Maç ve antrenman çekimi",
        metin: "Maç günü fotoğrafları, antrenman Reels'leri ve sezon özetleri.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Oyuncu ve sezon tasarımları",
        metin: "Kadro, transfer, maç günü ve skor duyuruları tek bir görsel dille.",
        hizmetSlug: "marka-kimligi-tasarim",
      },
      {
        baslik: "Aylık içerik ve yayın",
        metin: "Veliye dönük içerik planı, paylaşım ve hikaye akışı.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Drone ile tesis",
        metin: "Saha ve tesisi havadan gösteren açılış planları.",
        hizmetSlug: "drone-cekimleri",
      },
      {
        baslik: "Spor kulübü rehberi",
        metin: "Sezon boyunca neyin paylaşılacağını anlatan yazımız.",
        bag: "/blog/spor-kulubu-sosyal-medya-yonetimi",
      },
    ],
    model: {
      anahtar: "produksiyonlu",
      neden:
        "Spor kulübünde en güçlü içerik sahada olduğu için önerimiz prodüksiyonlu model: maç ve antrenman çekimi her ay ekibimizce yapılır.",
    },
    sorular: [
      {
        soru: "Spor okulu reklamı nasıl yapılır?",
        cevap:
          "Reklam kayıt döneminde yoğunlaşır, kulübün çevresindeki semtlere hedeflenir ve kişiyi form yerine doğrudan kulüple yazışmaya götürür. Büyükçekmece Atletik'te bu kurguyla 7-23 Eylül 2026 arasında 70 konuşma alındı ve kulübün bildirimine göre 5 yeni kayıt çıktı.",
      },
      {
        soru: "Spor kulübü reklam bütçesi ne kadar olmalı?",
        cevap:
          "Bütçe, kayıt hedefinden ve aidattan geriye doğru hesaplanır: bir kaydın size en fazla kaça mal olabileceğini belirler, reklam sisteminin öğrenmesine yetecek günlük tutarla başlarız. Büyükçekmece Atletik'te kayıt başı reklam maliyeti ₺2.136, aylık aidat ₺4.000 oldu. Reklam bütçesi hizmet ücretine dahil değildir.",
      },
      {
        soru: "Çocukların görüntüsü sosyal medyada paylaşılabilir mi?",
        cevap:
          "Biz çocuk görüntüsünü yalnız velinin açık rızasıyla ve rızanın kapsadığı mecralarda kullanırız. Kulübün kayıt sırasında aldığı izin metni sosyal medyayı açıkça kapsamalıdır; izin yoksa çekimi yüz göstermeyen planlarla kurarız. Reklamda çocuk yüzü yerine antrenörü, tesisi ve veliyi öne çıkarmayı tercih ederiz.",
      },
      {
        soru: "Maç günü sosyal medyada ne paylaşılır?",
        cevap:
          "Maç öncesi duyuru ve kadro, sahadan fotoğraf ve kısa video, skor ve maç sonu paylaşımı. Beylikdüzü İhtisas için oyuncu tanıtımlarını, transfer ve sezon tasarımlarını aynı görsel dille hazırlıyor, maç günü çekimlerini salonda kendimiz yapıyoruz.",
      },
      {
        soru: "Spor kulübü sosyal medya yönetimi ücreti ne kadar?",
        cevap:
          "Aylık saha çekimi dahil prodüksiyonlu yönetim genel olarak 30.000-60.000 TL, çekimsiz yürüyen prodüksiyonsuz yönetim 25.000-35.000 TL bandındadır. Kesin tutar branş sayısı, çekim günü ve reklam yönetimine göre kulübünüze özel teklifte belirlenir. Reklam bütçesi bu ücrete dahil değildir.",
      },
      {
        soru: "Reklamın işe yarayıp yaramadığını nasıl anlarız?",
        cevap:
          "Ölçü gösterim değil, kulüple başlayan konuşma ve kayıttır. Konuşma sayısını ve maliyetini reklam hesabından okur, kayıt sayısını kulüpten alırız; ikisini yan yana koyunca kayıt başı maliyet ortaya çıkar. Vaka sayfalarımızdaki rakamlar bu yöntemle hesaplandı.",
      },
    ],
    ilgiliYazilar: [
      "spor-kulubu-sosyal-medya-yonetimi",
      "meta-reklam-butcesi-nasil-belirlenir",
      "sosyal-medya-ajansi-fiyatlari",
      "isletmeler-icin-instagram-reels-rehberi",
    ],
    whatsappMesaj:
      "Merhaba, web sitenizden yazıyorum. Spor kulübümüz için reklam ve sosyal medya hakkında bilgi almak istiyorum.",
    kapak: "/assets/img/sektor/spor/spor-kulubu-antrenman.jpg",
    kapakAlt: "Basketbol antrenörü genç oyunculara oyun planını anlatıyor (temsilî görsel)",
  },

  {
    slug: "otel-tanitim-filmi-ve-drone-cekimi",
    ad: "Otel ve konaklama",
    altBilgiAd: "Otel Tanıtım Filmi ve Drone",
    formSektor: "Otel / konaklama",
    seoBaslik: "Otel Tanıtım Filmi ve Drone Çekimi | Studio Gria",
    seoAciklama:
      "Oteller ve tatil tesisleri için drone ve FPV çekimi, tanıtım filmi, sosyal medya ve reklam. The Oba Hotel ve The Bodrum Pavillion işlerimizden örnekler.",
    rozet: "Otel tanıtım filmi ve drone çekimi",
    slogan: "Misafir, otelinizi *havadan* seçer",
    spot:
      "Tatil kararı sahil, havuz ve manzara bir arada görüldüğünde verilir. Tesisinizi drone ve FPV ile havadan, mekânı doğru saatin ışığıyla yerden çekiyor; tanıtım filmini, Reels'leri ve reklam kreatiflerini aynı çekim gününden çıkarıyoruz.",
    kunye: [
      { deger: "Drone + FPV", etiket: "kendi ekibimizle" },
      { deger: "3 proje", etiket: "otel, konaklama, villa" },
      { deger: "Yatay + dikey", etiket: "film ve Reels aynı gün" },
    ],
    acilis: {
      tur: "video",
      video: {
        dosya: "the-oba-hotel-drone-tanitim",
        ad: "The Oba Hotel drone tanıtımı",
        aciklama: "The Oba Hotel için drone ve FPV ile çektiğimiz kayıtlardan kısa tanıtım",
        sureSaniye: 27,
        yuklenme: "2026-10-18",
      },
    },
    nedenBaslik: "Otelde tanıtım filmi ve sosyal medya *ne işe yarar*",
    nedenler: [
      {
        baslik: "Ölçek havadan anlaşılır",
        metin:
          "Sahilin uzunluğu, havuzun denizle ilişkisi, odaların yeşilin içindeki yeri. Bunu tek karede gösteren drone planıdır; FPV ise misafiri havuzdan iskeleye tek bir uçuşta gezdirir.",
      },
      {
        baslik: "Tek çekim günü, bütün sezon",
        metin:
          "Aynı çekimden yatay tanıtım filmi, dikey Reels'ler, web sitesi açılışı ve reklam kreatifleri çıkar. Çekimi ışığın en güçlü olduğu saatlere göre planlarız.",
      },
      {
        baslik: "Tesisi siz anlatırsınız",
        metin:
          "Rezervasyon sitelerindeki fotoğraflar her tesiste aynı çerçevede durur. Kendi hesabınızda ve sitenizde tesisi sizin anlattığınız gibi gösteren film, doğrudan size ulaşan misafire güven verir.",
      },
    ],
    kanitRozet: "The Oba Hotel · The Bodrum Pavillion",
    kanitBaslik: "Havadan ve yerden, *aynı dille*",
    kanitSpot:
      "The Oba Hotel karelerinin tamamı ekibimizin drone ve FPV kayıtlarından. The Bodrum Pavillion'da mekânı gündüz ve gece ışığında yerden çektik; Projekspert'in villa projesi gayrimenkulde aynı dili kullandığımız bir iş.",
    galeri: [
      {
        src: "/assets/img/home-05/project/obahotel/6.jpg",
        alt: "The Oba Hotel'in sahili, iskelesi ve şemsiye sıraları havadan",
        etiket: "The Oba Hotel · drone",
        oran: "yatay",
      },
      {
        src: "/assets/img/home-05/project/obahotel/4.jpg",
        alt: "The Oba Hotel havuzu ve şezlong sıraları tepeden",
        etiket: "The Oba Hotel · drone",
        oran: "yatay",
      },
      {
        src: "/assets/img/home-05/project/bodrum/2.jpg",
        alt: "The Bodrum Pavillion'da aydınlatılmış teras ve oturma alanı",
        etiket: "The Bodrum Pavillion · gece",
        oran: "dikey",
      },
      {
        src: "/assets/img/home-05/project/bodrum/4.jpg",
        alt: "The Bodrum Pavillion'da havuz başında şezlong ve deniz manzarası",
        etiket: "The Bodrum Pavillion · gündüz",
        oran: "dikey",
      },
      {
        src: "/assets/img/sektor/otel/projekspert-villa-projesi.jpg",
        alt: "Projekspert villa projesi, havuzlu bahçesiyle",
        etiket: "Projekspert · villa projesi",
        oran: "dikey",
      },
      {
        src: "/assets/img/home-05/project/9.jpg",
        alt: "The Oba Hotel ve koy akşam ışığında havadan",
        etiket: "The Oba Hotel · drone, akşam",
        oran: "yatay",
      },
      {
        src: "/assets/img/home-05/project/bodrum/3.jpg",
        alt: "The Bodrum Pavillion havuzu gece aydınlatmasıyla",
        etiket: "The Bodrum Pavillion · gece",
        oran: "yatay",
      },
    ],
    referanslar: ["The Oba Hotel", "The Bodrum Pavillion", "Projekspert"],
    yapilanlar: [
      {
        baslik: "Drone ve FPV çekimi",
        metin: "Tesisin ölçeğini ve konumunu havadan; FPV ile mekânın içinden akan tek planlar.",
        hizmetSlug: "drone-cekimleri",
      },
      {
        baslik: "Tanıtım filmi",
        metin: "Yatay film ve dikey kısa versiyonlar aynı çekim gününden.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Sosyal medya yönetimi",
        metin: "Sezon takvimine göre içerik planı, paylaşım ve hikaye akışı.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Reklam yönetimi",
        metin: "Sezon öncesi ve sezon içinde Meta reklamı; misafiri doğrudan iletişime yönlendirir.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "Web sitesi",
        metin: "Tanıtım filmiyle açılan, aramada bulunan bir site.",
        hizmetSlug: "web-site-seo-geo",
      },
    ],
    model: {
      anahtar: "produksiyonlu",
      neden:
        "Otelde içeriğin kaynağı tesisin kendisi olduğu için önerimiz prodüksiyonlu model: sezon başında kapsamlı bir çekim, sezon içinde kısa yenileme çekimleri.",
    },
    sorular: [
      {
        soru: "Otel tanıtım filmi nasıl çekilir?",
        cevap:
          "Önce tesisin neyle seçildiğini belirleriz: sahil, havuz, manzara, oda ya da mutfak. Çekimi ışığın en güçlü olduğu sabah ve akşam saatlerine, misafir akışını bozmayacak şekilde planlar; drone, FPV ve yer çekimini aynı gün tamamlarız. Kurgudan yatay film ile dikey kısa versiyonlar birlikte çıkar.",
      },
      {
        soru: "Otel drone çekimi fiyatı ne kadar?",
        cevap:
          "Drone çekimi proje başına 25.000 TL'den başlar. Fiyatı lokasyon sayısı, çekim süresi, uçuş izni gereklilikleri ve kurgunun kapsamı belirler. Tanıtım filmi ya da aylık sosyal medya ile birlikte planlandığında teklif tek pakette verilir.",
      },
      {
        soru: "Drone çekimi için izin gerekir mi?",
        cevap:
          "Uçuşun yapılacağı bölgeye göre değişir. Bölgenin uçuşa uygunluğunu ve gerekli izinleri çekimden önce kontrol eder, izin gereken bölgede başvuruyu planlamaya dahil ederiz. Kalabalığın üzerinden uçuş kısıtlı olduğu için rotayı misafir yoğunluğuna göre kurarız.",
      },
      {
        soru: "FPV çekimi nedir, otelde ne işe yarar?",
        cevap:
          "FPV, pilotun gözlükle yönettiği çevik bir drone türüdür; havuzun üzerinden iskeleye, bahçeden binanın cephesine kesintisiz tek bir planla geçebilir. Misafire tesisi geziyormuş hissi verir. The Oba Hotel kayıtlarının bir bölümünü FPV ile çektik.",
      },
      {
        soru: "Otel çekimi hangi dönemde yapılmalı?",
        cevap:
          "Dış mekân kareleri, bitki örtüsünün ve deniz renginin en canlı olduğu bahar sonu ve yaz başında daha güçlü durur; The Oba Hotel çekimini Mayıs sonunda yaptık. Sezon dışında iç mekân, mutfak ve hizmet çekimleri planlanabilir.",
      },
      {
        soru: "Villa ve gayrimenkul projelerinde de çalışıyor musunuz?",
        cevap:
          "Evet. Villa ve konut projelerinde drone ile arsanın konumunu ve çevre bağlantılarını, yerden mimari detayları çekiyoruz. Projekspert, sosyal medya, reklam yönetimi ve prodüksiyonu birlikte yürüttüğümüz referanslarımızdan.",
      },
    ],
    ilgiliYazilar: [
      "isletmeler-icin-instagram-reels-rehberi",
      "google-isletme-profili-optimizasyonu",
      "meta-reklam-butcesi-nasil-belirlenir",
      "sosyal-medya-ajansi-fiyatlari",
    ],
    whatsappMesaj:
      "Merhaba, web sitenizden yazıyorum. Otelimiz için tanıtım filmi ve drone çekimi hakkında bilgi almak istiyorum.",
    kapak: "/assets/img/home-05/project/obahotel/6.jpg",
    kapakAlt: "The Oba Hotel'in sahili ve iskelesi, ekibimizin drone kaydından",
  },

  {
    slug: "fabrika-ve-sanayi-tanitim-filmi",
    ad: "Sanayi ve üretim",
    altBilgiAd: "Fabrika Tanıtım Filmi ve Katalog",
    formSektor: "Sanayi / üretim",
    seoBaslik: "Fabrika Tanıtım Filmi ve Ürün Kataloğu | Studio Gria",
    seoAciklama:
      "Üretim firmaları için fabrika tanıtım filmi, drone ile tesis çekimi, ürün kataloğu ve B2B sosyal medya. Ulus Metal, Deva Makine ve Liva Gaz referanslarımızdan.",
    rozet: "Fabrika tanıtım filmi ve ürün kataloğu",
    slogan: "Üretiminiz *alıcının masasına* gitsin",
    spot:
      "Sanayide alıcı çoğu zaman tesisi gezmeden, kataloğu ve filmi görerek karar verir. Üretim hattını, tesisin ölçeğini ve ürünü kurumsal bir dille çekiyor; katalog sayfalarını, fuar ve satış sunumu videolarını aynı görsel dilde hazırlıyoruz.",
    kunye: [
      { deger: "5 marka", etiket: "sanayi ve üretimde" },
      { deger: "Film + katalog", etiket: "tek görsel dil" },
      { deger: "Drone", etiket: "ile tesis ölçeği" },
    ],
    acilis: {
      tur: "gorsel",
      src: "/assets/img/sektor/sanayi/fabrika-tanitim-filmi-cekimi.jpg",
      alt: "Kameraman bir atölyede metal ekipmanla çalışan işçiyi çekiyor",
      not: "Temsilî görsel. Fabrika çekiminin planı vardiya düzenine ve iş güvenliği kurallarına göre kurulur.",
    },
    nedenBaslik: "Sanayide tanıtım filmi ve katalog *ne işe yarar*",
    nedenler: [
      {
        baslik: "Alıcı ziyaretten önce karar verir",
        metin:
          "Yurt içi ve yurt dışı alıcı ilk elemeyi web sitesinde, katalogda ve fuarda yapar. Üretim hattını, kalite kontrolü ve tesisin ölçeğini gösteren film, ziyaretten önce güven kurar.",
      },
      {
        baslik: "Ürün tek dilde anlatılır",
        metin:
          "Katalog, web sitesi, fuar standı ve satış sunumu aynı fotoğraf ve aynı tasarım dilini kullandığında marka büyük görünür. Hepsini tek elden hazırlarız.",
      },
      {
        baslik: "Çekim üretimi durdurmaz",
        metin:
          "Çekim planını vardiya düzenine ve iş güvenliği kurallarına göre birlikte kurarız; hat çalışırken çekilecek planlarla duruş gerektirenleri önceden ayırırız.",
      },
    ],
    kanitRozet: "Nasıl çalışırız",
    kanitBaslik: "Bir fabrika filminin *dört adımı*",
    kanitSpot:
      "Her fabrika çekimi aynı yoldan geçer. Plan önceden kurulduğu için çekim günü üretim durmaz; Ulus Metal, Deva Makine ve Liva Gaz bu alandaki prodüksiyon referanslarımızdan.",
    adimlar: [
      {
        baslik: "Keşif",
        metin: "Tesisi gezer, filmin kime gideceğini ve hangi hattın, hangi anın çekileceğini belirleriz.",
      },
      {
        baslik: "Plan",
        metin: "Planları vardiya düzenine ve iş güvenliği kurallarına göre sıralar, çekim gününün akışını tesisle birlikte onaylarız.",
      },
      {
        baslik: "Çekim",
        metin: "Üretim hattı, kalite kontrol, ekip ve drone ile tesis aynı gün; hat çalışırken çekilecek planlarla duruş isteyenler ayrıdır.",
      },
      {
        baslik: "Kurgu",
        metin: "Uzun film, fuar ve satış sunumu için kısa kurgular, sosyal medya için dikey versiyonlar.",
      },
    ],
    referanslar: ["Ulus Metal", "Deva Makine", "Liva Gaz", "Koç Gıda", "Star Termos"],
    yapilanlar: [
      {
        baslik: "Fabrika tanıtım filmi",
        metin: "Üretim hattı, kalite kontrol, ekip ve tesisin ölçeği; uzun film ve fuar için kısa kurgular.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Drone ile tesis",
        metin: "Tesisin konumunu, ölçeğini ve yol bağlantılarını havadan gösteren planlar.",
        hizmetSlug: "drone-cekimleri",
      },
      {
        baslik: "Ürün kataloğu",
        metin: "Sayfa tasarımı, ürün düzeni ve baskıya ya da dijitale hazır dosya.",
        hizmetSlug: "marka-kimligi-tasarim",
      },
      {
        baslik: "Yapay zeka ile ürün görseli",
        metin: "Ürünü değiştirmeden yeni mekân ve kullanım sahnelerine taşınan kareler.",
        bag: "/ai-urun-gorseli",
      },
      {
        baslik: "B2B sosyal medya",
        metin: "LinkedIn ve Instagram'da üretim, fuar ve proje paylaşımları.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Kurumsal web sitesi",
        metin: "Ürün gruplarını aramada bulunur kılan site.",
        hizmetSlug: "web-site-seo-geo",
      },
    ],
    model: {
      anahtar: "produksiyonlu",
      neden:
        "Sanayide film ve ürün çekimi sahada yapıldığı için önerimiz prodüksiyonlu model: çekim günleri üretim takviminize göre planlanır.",
    },
    sorular: [
      {
        soru: "Fabrika tanıtım filmi nasıl çekilir?",
        cevap:
          "Önce filmin kime gideceğini belirleriz: yurt içi bayi, yurt dışı alıcı ya da fuar ziyaretçisi. Senaryo tesisin güçlü yanlarına göre kurulur; üretim hattı, kalite kontrol, depo ve ekip planları vardiya düzenine göre çekilir, drone ile tesisin ölçeği eklenir. Kurgudan uzun film ve kısa versiyonlar birlikte çıkar.",
      },
      {
        soru: "Çekim sırasında üretim durur mu?",
        cevap:
          "Durması gerekmez. Hat çalışırken çekilebilecek planlarla duruş gerektiren planları önceden ayırır, tesisin iş güvenliği kurallarına ve koruyucu donanım şartlarına uyarak çekim yaparız. Çekim günü tesisten bir sorumlunun ekiple birlikte olması yeterlidir.",
      },
      {
        soru: "Kurumsal tanıtım filmi fiyatı neye göre belirlenir?",
        cevap:
          "Çekim gün sayısı, lokasyon sayısı, drone ihtiyacı, seslendirme ve dil sürümleri ile kurgunun uzunluğu fiyatı belirler. Kapsamı tesisinizi dinledikten sonra netleştirip teklif sunarız; drone çekimi proje başına 25.000 TL'den başlar.",
      },
      {
        soru: "Ürün kataloğu baskı mı dijital mi olmalı?",
        cevap:
          "Çoğu üretim firması için ikisi birlikte: fuar ve bayi ziyaretinde baskı, e-posta ve web sitesinde dijital katalog. Sayfaları baştan iki kullanıma göre tasarlar, dijital sürümü telefonda rahat okunacak hafiflikte hazırlarız.",
      },
      {
        soru: "Sanayi firması sosyal medyada ne paylaşır?",
        cevap:
          "Üretimden kısa kesitler, yeni ürün ve proje duyuruları, fuar katılımları, ekip ve kalite süreçleri. Kurumsal alıcı için LinkedIn, bayi ve son kullanıcı için Instagram öne çıkar; aynı çekimden iki mecraya ayrı kurgu çıkarırız.",
      },
      {
        soru: "Film yabancı dilde de hazırlanabilir mi?",
        cevap:
          "Evet. Yurt dışı alıcıya gidecek filmde metni ve altyazıyı hedef dile göre hazırlar, gerekirse her dil için ayrı sürüm kurgularız.",
      },
    ],
    ilgiliYazilar: ["yapay-zeka-ile-reklam-filmi", "google-ads-mi-meta-ads-mi", "sosyal-medya-ajansi-fiyatlari"],
    whatsappMesaj:
      "Merhaba, web sitenizden yazıyorum. Firmamız için tanıtım filmi ve katalog hakkında bilgi almak istiyorum.",
    kapak: "/assets/img/sektor/sanayi/fabrika-tanitim-filmi-cekimi.jpg",
    kapakAlt: "Kameraman bir atölyede üretimi çekiyor (temsilî görsel)",
    kapakKonum: "30% 50%",
  },

  {
    slug: "egitim-kurumu-sosyal-medya-yonetimi",
    ad: "Eğitim kurumu",
    altBilgiAd: "Okul ve Kurs Sosyal Medya",
    formSektor: "Okul / anaokulu / kurs",
    seoBaslik: "Anaokulu, Okul ve Kurs Sosyal Medya Yönetimi | Studio Gria",
    seoAciklama:
      "Anaokulu, özel okul ve kurs merkezleri için MEB reklam kuralına uygun sosyal medya, röportaj videosu ve kayıt dönemi reklamı. Neşe Erberk Anaokulu anlatıyor.",
    rozet: "Anaokulu, okul ve kurs sosyal medya yönetimi",
    slogan: "Veli, okulu *güvenle* seçer",
    spot:
      "Okul seçen veli önce güven arar: öğretmeni, mekânı, eğitim anlayışını ve okulun nasıl konuştuğunu. Okulunuzun yaklaşımını her ay aynı dille anlatan içerikleri, röportaj videolarını ve kayıt dönemi reklamını MEB'in reklam kuralına uygun kuruyoruz.",
    kunye: [
      { deger: "4 kurum", etiket: "eğitim ve yayıncılıkta" },
      { deger: "Her ay", etiket: "aynı görsel dille içerik" },
      { deger: "Ek Madde 4", etiket: "MEB reklam kuralına göre" },
    ],
    acilis: { tur: "musteri-video", kimlik: "nese-erberk-anaokulu" },
    nedenBaslik: "Eğitimde sosyal medya *ne işe yarar*",
    nedenler: [
      {
        baslik: "Karar güvenle verilir",
        metin:
          "Veli çocuğunu kime emanet edeceğini seçer. Öğretmenlerin yaklaşımı, günün akışı ve okulun değerleri anlatılmadan kampanya duyurusu karşılık bulmaz.",
      },
      {
        baslik: "Okulun bir dili olur",
        metin:
          "Neşe Erberk için doğada öğrenmeyi merkeze alan, her ay aynı görsel dille devam eden bir içerik hattı kurduk. Hesabı gezen veli okulun ne anlattığını birkaç gönderide anlar.",
      },
      {
        baslik: "Reklamın kuralı ayrıdır",
        metin:
          "MEB'e bağlı özel okul ve kurslarda reklam ve ilanda öğrenci resmi, adı ve başarı bilgisi kullanılamaz, karekod bulunur. Reklamı mekân, öğretmen ve okulun kendi sesiyle kurarız.",
      },
    ],
    kanitRozet: "Neşe Erberk Anaokulu · Mimaroba",
    kanitBaslik: "Her ay *aynı dille* devam eden bir hesap",
    kanitSpot:
      "Neşe Erberk için hazırladığımız gönderilerden bir seçki. Okulun doğada öğrenme yaklaşımı her ay aynı tasarım diliyle anlatılıyor; bu seçkide çocuk yüzü göstermeyen kareleri kullandık.",
    galeri: [
      {
        src: "/assets/img/sektor/egitim/nese-erberk-dogada-ogrenme-gonderisi.jpg",
        alt: "Neşe Erberk Anaokulu için 'Bir çocuk doğada neler öğrenir?' gönderisi",
        etiket: "Neşe Erberk · Haziran",
        oran: "dikey",
      },
      {
        src: "/assets/img/sektor/egitim/nese-erberk-yaz-gonderisi.jpg",
        alt: "'Yaz geldiğinde çocuklar doğayı daha çok dinler' metinli gönderi",
        etiket: "Neşe Erberk · Haziran",
        oran: "dikey",
      },
      {
        src: "/assets/img/sektor/egitim/nese-erberk-hayvanlar-gonderisi.jpg",
        alt: "'Hayvanlardan öğrendiklerimiz' gönderisi, çimende hayvan kartları",
        etiket: "Neşe Erberk · Nisan",
        oran: "dikey",
      },
      {
        src: "/assets/img/sektor/egitim/nese-erberk-egitim-yaklasimi-gonderisi.jpg",
        alt: "'Bizim için eğitim' başlıklı okul yaklaşımı gönderisi",
        etiket: "Neşe Erberk · Nisan",
        oran: "dikey",
      },
      {
        src: "/assets/img/sektor/egitim/nese-erberk-gunes-saati-gonderisi.jpg",
        alt: "Güneş saati etkinliğinden çocuk elleri, doğanın ritmi üzerine gönderi",
        etiket: "Neşe Erberk · Nisan",
        oran: "dikey",
      },
      {
        src: "/assets/img/sektor/egitim/nese-erberk-sevgi-gonderisi.jpg",
        alt: "Okulda sevginin nasıl anlatıldığı üzerine metinli gönderi",
        etiket: "Neşe Erberk · Haziran",
        oran: "dikey",
      },
    ],
    // MEB Ozel Ogretim Kurumlari Yonetmeligi Md. 3/4 ve Ek Madde 4
    kural: {
      baslik: "Özel öğretim kurumlarında reklam, MEB yönetmeliğine göre",
      serbestEtiket: "Zorunlu",
      serbest: [
        "Tabela, reklam ve ilanda izin belgesi ve ruhsattaki kurum adı ya da kısaltması",
        "Reklam, ilan ve her türlü tanıtımda kurumu tanıtan karekod",
        "Karekodun kurum girişinde de görünür bir yerde bulunması",
      ],
      yasakEtiket: "Reklam ve ilanda kullanılamaz",
      yasak: ["Öğrenci resimleri", "Öğrenci isimleri", "Öğrenci başarı durum bilgileri"],
      kaynak: "MEB Özel Öğretim Kurumları Yönetmeliği, Madde 3/4 ve Ek Madde 4",
    },
    musteriSozu: "nese-erberk-anaokulu",
    referanslar: [
      "Neşe Erberk Anaokulu",
      "SekizOniki Mimaroba Kurs Merkezi",
      "Be Inanna",
      "Beyaz Balina Yayınları",
    ],
    yapilanlar: [
      {
        baslik: "Aylık içerik ve tasarım",
        metin: "Okulun yaklaşımını anlatan, her ay aynı görsel dille devam eden gönderi ve hikayeler.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Röportaj videoları",
        metin: "Kurucunun, öğretmenin ve velinin kendi sesiyle anlattığı kısa videolar.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Kayıt dönemi reklamı",
        metin: "Okulun çevresindeki semtlere, MEB reklam kuralına uygun kreatifle; ölçü mesaj ve okul ziyareti.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "Onay akışı",
        metin: "Her ayın içeriği yayından önce okul yönetiminin onayına gider.",
      },
      {
        baslik: "Google İşletme Profili",
        metin: "Haritada okul arayan veliye doğru bilgi, fotoğraf ve yorum düzeni.",
        bag: "/blog/google-isletme-profili-optimizasyonu",
      },
    ],
    model: {
      anahtar: "produksiyonlu",
      neden:
        "Okulda güven gerçek mekân ve gerçek insanlarla kurulduğu için önerimiz prodüksiyonlu model: röportaj ve etkinlik çekimleri okul takvimine göre planlanır.",
    },
    sorular: [
      {
        soru: "Anaokulu sosyal medyada çocuk fotoğrafı paylaşabilir mi?",
        cevap:
          "MEB'e bağlı özel öğretim kurumları reklam ve ilanlarında öğrenci resmi, adı ve başarı bilgisi kullanamaz (Özel Öğretim Kurumları Yönetmeliği, Ek Madde 4). Reklam dışındaki paylaşımlarda da çocuk görüntüsünü yalnız velinin açık rızasıyla ve rızanın kapsadığı mecralarda kullanırız. Reklamı çocuk yüzü olmadan kurarız.",
      },
      {
        soru: "Okul reklamında karekod zorunlu mu?",
        cevap:
          "Evet. Yönetmeliğe göre kurumların reklam, ilan ve her türlü tanıtıcı faaliyetinde kurumu tanıtan bilgilerin bulunduğu karekoda yer verilir; karekod kurumun girişinde de görünür bir yerde bulunur. Reklam görsellerini bu alanı baştan ayırarak tasarlarız.",
      },
      {
        soru: "Kayıt dönemi reklamı ne zaman başlamalı?",
        cevap:
          "Velinin araştırmaya başladığı haftalardan önce. Bu dönem okul türüne, programa ve bölgeye göre değişir; geçen yılın kayıt tarihlerine ve soruların yoğunlaştığı haftalara bakarak takvimi birlikte kurarız. Reklamdan önce hesabın güncel olması gerekir, çünkü veli reklamdan sonra profile bakar.",
      },
      {
        soru: "Okulumuzu kamera karşısında kim anlatmalı?",
        cevap:
          "Kurucu, müdür ve öğretmenler okulun yaklaşımını; veliler neden bu okulu seçtiklerini anlatır. İkisini de soru cevap biçiminde, ezber metin okutmadan çekeriz. Bu sayfadaki videoda Neşe Erberk Anaokulu adına Yaprak Altın bizimle çalışmayı anlatıyor.",
      },
      {
        soru: "Eğitim kurumu sosyal medya yönetimi ücreti ne kadar?",
        cevap:
          "Aylık çekim dahil prodüksiyonlu yönetim genel olarak 30.000-60.000 TL, çekimsiz yürüyen prodüksiyonsuz yönetim 25.000-35.000 TL bandındadır. Kesin tutar içerik adedi, çekim günü ve reklam yönetimine göre kurumunuza özel teklifte belirlenir. Reklam bütçesi bu ücrete dahil değildir.",
      },
      {
        soru: "Kurs merkezi için reklam nasıl kurulur?",
        cevap:
          "Kurs merkezinde karar programa, saate ve konuma bağlıdır. Reklamı kursun çevresindeki semtlere, tek bir programa odaklanarak kurar ve kişiyi doğrudan mesaja yönlendiririz. Kursun izin belgesindeki adı ve karekod reklamda yer alır; öğrenci başarı bilgisi kullanılmaz.",
      },
    ],
    ilgiliYazilar: [
      "instagram-hesabi-neden-buyumuyor",
      "google-isletme-profili-optimizasyonu",
      "sosyal-medya-ajansi-fiyatlari",
      "meta-reklam-butcesi-nasil-belirlenir",
    ],
    dipNot:
      "Bu sayfadaki mevzuat bilgileri MEB'e bağlı özel öğretim kurumları için bilgilendirme amaçlıdır, hukuki danışmanlık değildir. Kaynak: Özel Öğretim Kurumları Yönetmeliği, Madde 3/4 ve Ek Madde 4. Kreş ve gündüz bakımevleri farklı mevzuata tabi olabilir; kendi durumunuz için hukuk danışmanınıza başvurun.",
    whatsappMesaj:
      "Merhaba, web sitenizden yazıyorum. Okulumuz / kursumuz için sosyal medya yönetimi hakkında bilgi almak istiyorum.",
    kapak: "/assets/video/musteri/nese-erberk-anaokulu-musteri-yorumu.jpg",
    kapakAlt: "Neşe Erberk Anaokulu adına Yaprak Altın, röportaj çekiminde",
  },
];

export function sektorBul(slug: string): Sektor | undefined {
  return sektorler.find((s) => s.slug === slug);
}
