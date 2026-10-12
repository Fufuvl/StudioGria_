// Site geneli sikca sorulan sorular.
//
// TEK KAYNAK: Bu metin hem /faq sayfasindaki gorunur sorulari hem de
// FAQPage yapisal verisini ve /llms-full.txt'i besler. Onceden ayni sorular
// iki dosyada ayri ayri yaziliydi ve birbirinden ayrismisti. Google, semadaki
// cevabin sayfada gorunen cevapla birebir ayni olmasini sart kosar; ikisi
// ayrisirsa zengin sonuc hakki kaybedilir.
//
// Sorular /faq sayfasinda gruplar halinde gosterilir; dizideki sira sayfadaki
// siradir. "bag" cevabin altinda gorunen ic baglantidir, semaya girmez.

export const sssGruplari = [
  { anahtar: "calisma-modeli", ad: "Çalışma modeli ve kapsam" },
  { anahtar: "yapay-zeka", ad: "Yapay zeka ile üretim" },
  { anahtar: "fiyat", ad: "Fiyat ve ödeme" },
  { anahtar: "surec", ad: "Süreç ve sözleşme" },
] as const;

export type SssGrubu = (typeof sssGruplari)[number]["anahtar"];

export type SssKaydi = {
  id: number;
  grup: SssGrubu;
  soru: string;
  cevap: string;
  bag?: { yol: string; metin: string };
};

export const sssKayitlari: SssKaydi[] = [
  // ---- Calisma modeli ve kapsam ----
  {
    id: 3,
    grup: "calisma-modeli",
    soru: "Sosyal medya yönetimi tam olarak neyi kapsıyor?",
    cevap:
      "Sosyal medya yönetimi; markanızın hedef kitlesine uygun içerik planlaması, içerik üretimi (görsel ve video), paylaşım takvimi oluşturulması, takipçi etkileşimi, reklam yönetimi ve analiz raporlarının sunulması gibi tüm süreçleri kapsar. Studio Gria olarak bu süreci uçtan uca profesyonel bir şekilde yönetiyoruz.",
    bag: { yol: "/hizmetler/sosyal-medya-yonetimi", metin: "Sosyal medya yönetimi hizmetini inceleyin" },
  },
  {
    id: 12,
    grup: "calisma-modeli",
    soru: "Çekim yapmadan sosyal medya yönetimi mümkün mü?",
    cevap:
      "Evet. Sosyal medya yönetimini iki modelle yürütüyoruz. Prodüksiyonlu modelde ekibimiz mekanınıza gelir ve çekimi kendi ekipmanımızla yapar. Prodüksiyonsuz modelde çekim günü planlanmaz; içerik, elinizdeki ürün ve mekan görsellerinden markanızın diline uygun biçimde hazırlanır ve süreç uzaktan yürür. Hangi modelin size uygun olduğuna ilk görüşmede birlikte karar veririz.",
    bag: { yol: "/hizmetler/sosyal-medya-yonetimi#iki-model", metin: "İki çalışma modelini karşılaştırın" },
  },
  {
    id: 10,
    grup: "calisma-modeli",
    soru: "Çekimler nerede yapılıyor, ekip sahaya geliyor mu?",
    cevap:
      "Stüdyomuz İstanbul Büyükçekmece'de. Çekim gerektiren işlerde ekip işletmenin kendi mekanına gider; Büyükçekmece, Beylikdüzü, Esenyurt, Avcılar ve Başakşehir'de düzenli olarak sahadayız. Türkiye genelinde uzaktan yürüttüğümüz işler de var.",
    bag: { yol: "/bolgeler", metin: "Hizmet bölgelerimizi görün" },
  },
  {
    id: 4,
    grup: "calisma-modeli",
    soru: "Hangi sosyal medya platformlarıyla çalışıyorsunuz?",
    cevap:
      "Instagram, Facebook, TikTok, LinkedIn, Twitter (X) ve YouTube başta olmak üzere birçok platformda içerik üretimi ve yönetimi sağlıyoruz. Hedef kitlenize ve sektörünüze uygun olan platformlarda stratejik çalışmalar yapıyoruz.",
  },
  {
    id: 6,
    grup: "calisma-modeli",
    soru: "İçerikler markaya özel mi hazırlanıyor, yoksa hazır şablonlar mı kullanılıyor?",
    cevap:
      "Tüm içerikler tamamen markanıza özel olarak hazırlanır. Hedef kitlenize, sektörünüze ve marka kimliğinize uygun özgün görseller, metinler ve stratejiler geliştiriyoruz. Hazır şablonlar kullanmadan, sizin için özel ve özgün bir içerik takvimi oluşturuyoruz.",
  },
  {
    id: 5,
    grup: "calisma-modeli",
    soru: "Hizmetlerinizi almak için bir marka ya da şirket olmak zorunda mıyım?",
    cevap:
      "Hayır, bireysel markalar, içerik üreticileri veya girişimciler de sosyal medya yönetimi hizmetlerimizden faydalanabilir. Kişisel markanızı dijital dünyada güçlü bir şekilde konumlandırmak için size özel çözümler sunuyoruz.",
  },

  // ---- Yapay zeka ile uretim ----
  {
    id: 1,
    grup: "yapay-zeka",
    soru: "Yapay zeka (AI) ile içerik üretimi yapıyor musunuz?",
    cevap:
      "Evet. Studio Gria olarak yapay zeka destekli görsel içerik üretimi, kampanya kurgusu ve marka estetiğine uygun kreatif çalışmalar hazırlıyoruz. AI üretim sürecini tek başına değil; marka dili, hedef kitle ve performans hedefleriyle birlikte ele alarak daha hızlı ve ölçeklenebilir içerikler sunuyoruz.",
    bag: { yol: "/ai-destekli-cozumler", metin: "Yapay zeka ile ürettiğimiz kareleri görün" },
  },
  {
    id: 13,
    grup: "yapay-zeka",
    soru: "Ürün fotoğrafımdan yapay zeka ile katalog görseli hazırlayabilir misiniz?",
    cevap:
      "Evet. Ürününüzün net bir fotoğrafını gönderirsiniz; ürün olduğu gibi kalır, sahne, ışık ve zemin yapay zeka ile kurulur. Her ürün için üç kare teslim edilir. Stüdyo, model ve çekim günü gerekmez.",
    bag: { yol: "/ai-urun-gorseli", metin: "Ürün görseli örneklerini görün" },
  },

  // ---- Fiyat ve odeme ----
  {
    id: 8,
    grup: "fiyat",
    soru: "Sosyal medya yönetimi hizmetinin fiyatlandırması nasıl yapılıyor?",
    cevap:
      "Fiyatlandırmamız; talep edilen hizmet kapsamına (içerik sayısı, reklam yönetimi, platform sayısı, raporlama gibi) göre değişiklik gösterir. Size en uygun çözümleri sunabilmek için önce ihtiyaç analizi yapıyor, ardından markanıza özel bir teklif sunuyoruz.",
    bag: { yol: "/teklif", metin: "Markanıza özel teklif alın" },
  },
  {
    id: 9,
    grup: "fiyat",
    soru: "Reklam bütçesi ajans ücretine dahil mi?",
    cevap:
      "Hayır, bunlar ayrı kalemlerdir. Ajans ücreti üretim ve yönetim karşılığıdır. Reklam bütçesi ise doğrudan Meta ya da Google'a ödediğiniz tutardır ve tamamı platforma gider, kendi reklam hesabınızdan harcanır. Reklam bütçeniz arttığında ajans ücretimiz otomatik olarak artmaz.",
  },
  {
    id: 2,
    grup: "fiyat",
    soru: "Ödemeyi kartla yapabiliyor muyuz?",
    cevap:
      "Evet, kartla ödeme kabul ediyoruz. Süreci markalar ve bireysel müşteriler için mümkün olduğunca kolaylaştırıyoruz; banka veya kredi kartıyla ödeme yapabilir, ihtiyacınıza göre size en uygun ödeme yöntemini birlikte belirleyebiliriz.",
  },

  // ---- Surec ve sozlesme ----
  {
    id: 14,
    grup: "surec",
    soru: "Çalışmaya nasıl başlıyoruz?",
    cevap:
      "Önce sizi dinliyoruz: markanızı, hedeflerinizi ve beklentilerinizi ilk görüşmede anlıyoruz. Ardından kapsamı, çalışma modelini ve fiyatı tek dosyada, net olarak önünüze getiriyoruz. Onayınızla birlikte çekim, tasarım ve yayın takvimi vakit kaybetmeden işlemeye başlar.",
  },
  {
    id: 7,
    grup: "surec",
    soru: "Ne kadar sürede sonuç almaya başlarım?",
    cevap:
      "Sosyal medya stratejileri orta ve uzun vadede etkili sonuçlar verir. İlk etkileri genellikle 4-6 hafta içinde gözlemleyebilirsiniz. Ancak etkileşim artışı, takipçi kazanımı ve marka bilinirliği gibi alanlarda sürdürülebilir başarı için düzenli çalışma ve sabır gereklidir.",
  },
  {
    id: 11,
    grup: "surec",
    soru: "Sözleşme süresi ne kadar, istediğim zaman bırakabilir miyim?",
    cevap:
      "Çalışma modelini ve süreyi teklif sunumunda açıkça yazarız; sürpriz madde olmaz. Sosyal medya yönetiminde anlamlı sonuç için en az üç aylık bir çalışma öneriyoruz, çünkü ilk ayın büyük kısmı marka dilini ve üretim ritmini oturtmakla geçer. Proje bazlı prodüksiyon işlerinde süre kısıtı yoktur.",
  },
];
