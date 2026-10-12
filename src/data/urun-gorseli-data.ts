// Yapay zeka ile urun gorseli sayfasinin (/ai-urun-gorseli) metin verisi.
// Sayfa, FAQPage semasi ve /llms-full.txt ayni kaynaktan beslenir; metin tek
// yerden degisir. Sayfada fiyat yazilmaz (kullanici karari, 12 Eki 2026).

// Yapay zeka motorlarinin alintilayabilecegi, tek basina anlamli tanim
export const urunGorseliOzet =
  "Studio Gria, markanın gönderdiği ürün fotoğrafından katalog kareleri üretir. Ürün fotoğraftan alınır ve olduğu gibi korunur; sahne, ışık, zemin ve gerekiyorsa model yapay zeka ile kurulur. Her ürün için üç kare teslim edilir; stüdyo, model ve çekim günü gerekmez. Örnek işler Lucea Jewelry (takı) ve Star Termos (termos) için üretilmiştir.";

export const urunGorseliDahil = [
  "Ürün başına üç farklı kare",
  "Sahne konsepti ve stil tasarımı",
  "Elle rötuş ve aslına sadakat kontrolü",
  "E-ticaret ve sosyal medya formatları",
  "Yüksek çözünürlükte teslim",
  "Ticari kullanım hakkı",
];

export const urunGorseliAdimlari = [
  {
    no: "01",
    baslik: "Fotoğrafı gönderirsiniz",
    metin:
      "Ürününüzün net göründüğü fotoğrafı WhatsApp'tan iletirsiniz. Telefonla çekilmiş olması yeterlidir.",
  },
  {
    no: "02",
    baslik: "Sahneyi biz kurarız",
    metin:
      "Fon, mekan, model ve ışık kararını markanızın diline göre ekibimiz verir.",
  },
  {
    no: "03",
    baslik: "İlk ürünü onaylarsınız",
    metin:
      "İlk ürünün üç karesini size sunarız. Onayınızla kalan ürünler seri üretime geçer.",
  },
  {
    no: "04",
    baslik: "Kareler teslim edilir",
    metin:
      "Her kare elle rötuşlanır; e-ticaret ve sosyal medya formatlarında, yüksek çözünürlükte teslim edilir.",
  },
];

// Sorular hem sayfada gorunur hem FAQPage semasina gider. Ilk soru hizmetin
// tanimini, "fiyat" ve "kendim yapamaz miyim" sorulari fiyat ve arac niyetli
// aramalari karsilar; sayfada tutar yazilmaz.
export const urunGorseliSorulari = [
  {
    soru: "Yapay zeka ile ürün görseli nasıl hazırlanır?",
    cevap:
      "Ürününüzün net bir fotoğrafını gönderirsiniz. Ürün bu fotoğraftan alınır ve olduğu gibi korunur; sahne, ışık, zemin ve gerekiyorsa model yapay zeka ile kurulur. Her kare elle rötuşlanır; logo, renk ve ürün detayları tek tek kontrol edildikten sonra teslim edilir.",
  },
  {
    soru: "Ürünümün kendisi değişiyor mu?",
    cevap:
      "Hayır. Ürününüz olduğu gibi kalır; yapay zeka ile kurulan kısım sahne, ışık ve zemindir. Logo, renk ve ürün detayları her karede elle kontrol edilir.",
  },
  {
    soru: "Nasıl bir fotoğraf göndermeliyim?",
    cevap:
      "Ürünün net göründüğü, iyi ışıkta çekilmiş bir fotoğraf yeterlidir. Telefonla çekilmiş olabilir, beyaz fonlu katalog fotoğrafı da olur. Birkaç açıdan fotoğraf gönderirseniz kareler daha tutarlı çıkar.",
  },
  {
    soru: "Fiyat nasıl belirlenir?",
    cevap:
      "Fiyatı ürün sayısı ve ürün başına istenen kare sayısı belirler; ürün sayısı arttıkça ürün başına maliyet düşer. Çekim günü, stüdyo ve model masrafı oluşmadığı için modelli ürün çekimine göre daha ekonomiktir. Ürün fotoğrafınızı ve ürün sayınızı iletin, teklifinizi aynı gün gönderelim.",
  },
  {
    soru: "Yapay zeka mankenli ürün çekimi gerçek çekimin yerini tutar mı?",
    cevap:
      "Katalog, e-ticaret ve sosyal medya görsellerinde çoğu ihtiyacı karşılar: ürün gerçek fotoğrafından alınır, model ve sahne yapay zeka ile üretilir. Ekibinizin, mekanınızın ya da gerçek müşteri deneyiminin gösterilmesi gereken içeriklerde ise sahada çekimi öneririz.",
  },
  {
    soru: "Karelerdeki modeller gerçek mi?",
    cevap:
      "Hayır. Modelli karelerdeki kişiler yapay zeka ile üretilir ve gerçek bir kişiyi göstermez. Bu sayede model ve çekim günü maliyeti oluşmaz.",
  },
  {
    soru: "Hazır yapay zeka araçlarıyla bunu kendim yapamaz mıyım?",
    cevap:
      "Yapabilirsiniz; hazır araçlar hızlı denemeler için iyidir. Fark tutarlılıkta ortaya çıkar: logonun ve rengin her karede aynı kalması, sahnenin markanın diline göre kurulması ve karelerin elle rötuşlanması. Bu kısmı biz üstleniriz; siz yalnızca fotoğrafı gönderirsiniz.",
  },
  {
    soru: "Ne kadar sürede teslim ediyorsunuz?",
    cevap:
      "Önce ilk ürünün karelerini onayınıza sunarız. Onaydan sonra kalan ürünler seri üretime geçer; teslim tarihi ürün sayısına göre teklifte yazılır.",
  },
  {
    soru: "Kareleri nerede kullanabilirim?",
    cevap:
      "Kendi mağazanızda, sosyal medyada ve reklamlarınızda kullanabilirsiniz. Ticari kullanım hakkı teklife dahildir.",
  },
  {
    soru: "Hangi ürün gruplarında çalışıyorsunuz?",
    cevap:
      "Takı, termos ve mutfak ürünleri, içecek, mobilya ve parfüm için üretim yaptık; yöntem ürün odaklı her kategoriye uygulanır. Bu sayfadaki örnekler Lucea Jewelry ve Star Termos için ürettiğimiz işlerdendir.",
  },
  {
    soru: "Video da üretiyor musunuz?",
    cevap:
      "Evet. Aynı üretim hattıyla ürün videosu ve yapay zeka destekli reklam filmi de hazırlıyoruz.",
  },
  {
    soru: "Sosyal medyamı da yönetebilir misiniz?",
    cevap:
      "Evet. Görsel üretimini aylık sosyal medya yönetimiyle birleştirebiliriz. Çekim günü gerektirmeyen çekimsiz modelimiz ürün odaklı markalar için uygundur.",
  },
];
