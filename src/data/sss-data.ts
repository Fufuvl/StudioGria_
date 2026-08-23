// Site geneli sikca sorulan sorular.
//
// TEK KAYNAK: Bu metin hem /faq sayfasindaki gorunur akordeonu hem de
// FAQPage yapisal verisini besler. Onceden ayni sorular iki dosyada ayri
// ayri yaziliydi ve birbirinden ayrismisti. Google, semadaki cevabin
// sayfada gorunen cevapla birebir ayni olmasini sart kosar; ikisi
// ayrisirsa zengin sonuc hakki kaybedilir.

export type SssKaydi = {
  id: number;
  soru: string;
  cevap: string;
};

export const sssKayitlari: SssKaydi[] = [
  {
    id: 1,
    soru: "AI ile içerik üretimi yapıyor musunuz?",
    cevap:
      "Evet. Studio Gria olarak yapay zeka destekli görsel içerik üretimi, kampanya kurgusu ve marka estetiğine uygun kreatif çalışmalar hazırlıyoruz. AI üretim sürecini tek başına değil; marka dili, hedef kitle ve performans hedefleriyle birlikte ele alarak daha hızlı ve ölçeklenebilir içerikler sunuyoruz.",
  },
  {
    id: 2,
    soru: "Ödemeyi kartla yapabiliyor muyuz?",
    cevap:
      "Evet, kartla ödeme kabul ediyoruz. Süreci markalar ve bireysel müşteriler için mümkün olduğunca kolaylaştırıyoruz; banka veya kredi kartıyla ödeme yapabilir, ihtiyacınıza göre size en uygun ödeme yöntemini birlikte belirleyebiliriz.",
  },
  {
    id: 3,
    soru: "Sosyal medya yönetimi tam olarak neyi kapsıyor?",
    cevap:
      "Sosyal medya yönetimi; markanızın hedef kitlesine uygun içerik planlaması, içerik üretimi (görsel ve video), paylaşım takvimi oluşturulması, takipçi etkileşimi, reklam yönetimi ve analiz raporlarının sunulması gibi tüm süreçleri kapsar. Studio Gria olarak bu süreci uçtan uca profesyonel bir şekilde yönetiyoruz.",
  },
  {
    id: 4,
    soru: "Hangi sosyal medya platformlarıyla çalışıyorsunuz?",
    cevap:
      "Instagram, Facebook, TikTok, LinkedIn, Twitter (X) ve YouTube başta olmak üzere birçok platformda içerik üretimi ve yönetimi sağlıyoruz. Hedef kitlenize ve sektörünüze uygun olan platformlarda stratejik çalışmalar yapıyoruz.",
  },
  {
    id: 5,
    soru: "Hizmetlerinizi almak için bir marka ya da şirket olmak zorunda mıyım?",
    cevap:
      "Hayır, bireysel markalar, içerik üreticileri veya girişimciler de sosyal medya yönetimi hizmetlerimizden faydalanabilir. Kişisel markanızı dijital dünyada güçlü bir şekilde konumlandırmak için size özel çözümler sunuyoruz.",
  },
  {
    id: 6,
    soru: "İçerikler markaya özel mi hazırlanıyor, yoksa hazır şablonlar mı kullanılıyor?",
    cevap:
      "Tüm içerikler tamamen markanıza özel olarak hazırlanır. Hedef kitlenize, sektörünüze ve marka kimliğinize uygun özgün görseller, metinler ve stratejiler geliştiriyoruz. Hazır şablonlar kullanmadan, sizin için özel ve özgün bir içerik takvimi oluşturuyoruz.",
  },
  {
    id: 7,
    soru: "Ne kadar sürede sonuç almaya başlarım?",
    cevap:
      "Sosyal medya stratejileri orta ve uzun vadede etkili sonuçlar verir. İlk etkileri genellikle 4-6 hafta içinde gözlemleyebilirsiniz. Ancak etkileşim artışı, takipçi kazanımı ve marka bilinirliği gibi alanlarda sürdürülebilir başarı için düzenli çalışma ve sabır gereklidir.",
  },
  {
    id: 8,
    soru: "Sosyal medya yönetimi hizmetinin fiyatlandırması nasıl yapılıyor?",
    cevap:
      "Fiyatlandırmamız; talep edilen hizmet kapsamına (içerik sayısı, reklam yönetimi, platform sayısı, raporlama gibi) göre değişiklik gösterir. Size en uygun çözümleri sunabilmek için önce ihtiyaç analizi yapıyor, ardından markanıza özel bir teklif sunuyoruz.",
  },
  {
    id: 9,
    soru: "Reklam bütçesi ajans ücretine dahil mi?",
    cevap:
      "Hayır, bunlar ayrı kalemlerdir. Ajans ücreti üretim ve yönetim karşılığıdır. Reklam bütçesi ise doğrudan Meta ya da Google'a ödediğiniz tutardır ve tamamı platforma gider, kendi reklam hesabınızdan harcanır. Reklam bütçeniz arttığında ajans ücretimiz otomatik olarak artmaz.",
  },
  {
    id: 10,
    soru: "Çekimler nerede yapılıyor, ekip sahaya geliyor mu?",
    cevap:
      "Stüdyomuz İstanbul Büyükçekmece'de. Çekim gerektiren işlerde ekip işletmenin kendi mekanına gider; Büyükçekmece, Beylikdüzü, Esenyurt, Avcılar ve Başakşehir'de düzenli olarak sahadayız. Türkiye genelinde uzaktan yürüttüğümüz işler de var.",
  },
  {
    id: 11,
    soru: "Sözleşme süresi ne kadar, istediğim zaman bırakabilir miyim?",
    cevap:
      "Çalışma modelini ve süreyi teklif sunumunda açıkça yazarız; sürpriz madde olmaz. Sosyal medya yönetiminde anlamlı sonuç için en az üç aylık bir çalışma öneriyoruz, çünkü ilk ayın büyük kısmı marka dilini ve üretim ritmini oturtmakla geçer. Proje bazlı prodüksiyon işlerinde süre kısıtı yoktur.",
  },
];
