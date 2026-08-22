// Blog icerik katalogu.
// Her kayit /blog listesinde bir kart ve /blog/[slug] altinda kendi
// SEO sayfasini uretir. Yeni yazi eklemek icin bu diziye kayit eklemek yeterlidir.
//
// Yazilar arama niyetine gore kurgulanir: baslik ziyaretcinin Google'a
// yazdigi soruyu karsilar, bolum basliklari (h2) alt sorulari yanitlar.

export type YaziBolumu = {
  baslik: string;
  paragraflar: string[];
  liste?: string[];
};

export type BlogYazisi = {
  slug: string;
  baslik: string;
  seoBaslik: string;
  seoAciklama: string;
  ozet: string;
  tarih: string; // ISO 8601
  okumaSuresi: number; // dakika
  kategori: string;
  giris: string;
  bolumler: YaziBolumu[];
  // Yazinin dogal olarak bagladigi hizmet sayfalari (slug)
  ilgiliHizmetler: string[];
};

export const blogYazilari: BlogYazisi[] = [
  {
    slug: "sosyal-medya-ajansi-fiyatlari",
    baslik: "Sosyal medya ajansı fiyatları: bütçe neye göre belirlenir?",
    seoBaslik: "Sosyal Medya Ajansı Fiyatları 2026 | Studio Gria",
    seoAciklama:
      "Sosyal medya ajansı fiyatları neye göre belirlenir? Paket kapsamı, içerik adedi, çekim ve reklam yönetimi kalemlerinin bütçeye etkisini örneklerle anlattık.",
    ozet:
      "Ajans tekliflerini karşılaştırırken bakmanız gereken kalemler, fiyatı gerçekten belirleyen değişkenler ve ucuz teklifin gizli maliyeti.",
    tarih: "2026-06-18",
    okumaSuresi: 7,
    kategori: "Bütçe ve Süreç",
    giris:
      "Sosyal medya yönetimi için teklif toplayan çoğu işletme aynı sorunla karşılaşıyor: aynı işe benzeyen hizmet için birbirinden çok farklı fiyatlar geliyor. Aradaki farkın nereden geldiğini bilmeden karşılaştırma yapmak, çoğu zaman en ucuz teklifi seçip birkaç ay sonra baştan başlamak anlamına geliyor.",
    bolumler: [
      {
        baslik: "Fiyatı belirleyen asıl kalem: üretim mi, yönetim mi?",
        paragraflar: [
          "Sosyal medya tekliflerinde en büyük fiyat farkı, içeriğin kim tarafından ve nasıl üretildiğinden doğar. Bir ajans yalnızca sizin gönderdiğiniz görselleri düzenleyip paylaşıyorsa bu bir yönetim hizmetidir ve maliyeti düşüktür. Ekip sahaya gelip çekim yapıyor, kurgu ve tasarım üretiyorsa bu bir prodüksiyon hizmetidir ve maliyeti buna göre artar.",
          "İki hizmet aynı isimle sunulduğu için teklifler yan yana konduğunda yanıltıcı görünür. Teklifi okurken ilk bakmanız gereken şey aylık kaç özgün içerik üretildiği ve bu içeriklerin kaçının sahada çekildiğidir.",
        ],
      },
      {
        baslik: "Bir teklifte mutlaka görmeniz gereken kalemler",
        paragraflar: [
          "Kapsamı net yazılmamış teklif, birkaç ay sonra ek fatura olarak geri döner. Sağlıklı bir teklifte şu kalemlerin adet ve sıklık bilgisiyle yer alması gerekir:",
        ],
        liste: [
          "Aylık özgün içerik adedi ve bunların formatı (feed, hikaye, reels)",
          "Sahada çekim yapılacak gün sayısı",
          "Tasarım revizyon hakkı",
          "Reklam yönetimi dahil mi, reklam bütçesi ayrı mı",
          "Raporlama sıklığı ve raporda hangi metriklerin yer alacağı",
          "Sözleşme süresi ve fesih koşulları",
        ],
      },
      {
        baslik: "Reklam bütçesi ile ajans ücreti aynı şey değildir",
        paragraflar: [
          "Sık karşılaştığımız bir karışıklık: işletme aylık bütçesini konuşurken reklam harcamasını da ajans ücretinin içinde sanıyor. Bunlar ayrı kalemlerdir. Ajans ücreti üretim ve yönetim karşılığıdır; reklam bütçesi ise doğrudan Meta ya da Google'a ödediğiniz tutardır ve tamamı platforma gider.",
          "Teklif alırken bu ikisini ayrı sorun. Reklam yönetimi hizmeti alıyorsanız, ajansın bu iş için aldığı ücretin reklam bütçesinden bağımsız olduğunu ve bütçe arttıkça otomatik artmadığını netleştirin.",
        ],
      },
      {
        baslik: "Ucuz teklifin gizli maliyeti",
        paragraflar: [
          "Çok düşük tekliflerde üretim genelde stok görsel ve şablon tasarım üzerine kurulur. Kısa vadede hesabınız dolu görünür, ancak içerik markanıza ait olmadığı için ne tanınırlık kazandırır ne satışa dokunur. Altı ay sonra elinizde kullanılabilir bir görsel arşivi de olmaz.",
          "Bütçeniz sınırlıysa doğru yaklaşım kapsamı daraltmaktır, kaliteyi değil. Ayda on iki içerik yerine altı içerik üretin, ama bunların hepsi gerçekten sizin işinizi anlatsın. Az sayıda güçlü içerik, çok sayıda dolgu içerikten her zaman daha iyi sonuç verir.",
        ],
      },
      {
        baslik: "Doğru soruyu sormak",
        paragraflar: [
          "Ajans seçerken sorulacak en iyi soru fiyat değil, şu: bu bütçeyle ayda kaç özgün içerik üretilecek ve bunların kaçı sahada çekilecek? Cevap netse teklifler karşılaştırılabilir hale gelir. Cevap muğlaksa fiyat da muğlaktır.",
        ],
      },
    ],
    ilgiliHizmetler: ["sosyal-medya-yonetimi", "reklam-yonetimi", "fotograf-video-produksiyon"],
  },

  {
    slug: "isletmeler-icin-instagram-reels-rehberi",
    baslik: "İşletmeler için Instagram Reels rehberi: ne çekilir, nasıl kurgulanır?",
    seoBaslik: "İşletmeler İçin Instagram Reels Rehberi | Studio Gria",
    seoAciklama:
      "Instagram Reels nasıl çekilir, ilk üç saniye neden belirleyici, hangi içerik türleri işletmeler için çalışır? Saha deneyimimizden çıkan pratik rehber.",
    ozet:
      "Reels üretiminde ilk üç saniyenin rolü, işletmeler için çalışan dört içerik kalıbı ve çekim öncesi hazırlık listesi.",
    tarih: "2026-07-09",
    okumaSuresi: 8,
    kategori: "İçerik Üretimi",
    giris:
      "Reels, bugün bir işletme hesabının erişim kazandığı en güçlü format. Ancak çoğu işletme kamerayı açıp ürünü çekiyor, altına müzik koyuyor ve sonuç alamayınca formatın kendisini suçluyor. Sorun genelde formatta değil, videonun ilk saniyelerinde ve kurgunun ritminde.",
    bolumler: [
      {
        baslik: "İlk üç saniye neden bu kadar belirleyici?",
        paragraflar: [
          "Reels izleyicisi karar vermek için düşünmez, parmağını kaydırır. Videonun ilk üç saniyesinde ekranda merak uyandıran bir şey yoksa izleyici geçer ve algoritma videoyu daha az kişiye gösterir. Bu yüzden en iyi kare, videonun ortasında değil başında olmalıdır.",
          "Pratik kural: kurguyu bitirdikten sonra videoyu sesi kapalı izleyin. İlk üç saniyede ne olduğunu anlamıyorsanız, izleyici de anlamayacak demektir. Logo ile açılan videolar bu testte neredeyse her zaman kaybeder.",
        ],
      },
      {
        baslik: "İşletmeler için çalışan dört içerik kalıbı",
        paragraflar: [
          "Her sektöre uyan tek bir formül yok, ancak saha çekimlerinde tekrar tekrar sonuç veren dört kalıp var:",
        ],
        liste: [
          "Süreç: ürünün ya da hizmetin hazırlanma anı. İzleyici emeği gördüğünde fiyatı sorgulamayı bırakır.",
          "Öncesi ve sonrası: değişimi tek karede gösteren en hızlı anlatım. Tadilat, bakım, kuaför ve estetik alanında güçlü çalışır.",
          "Soru cevap: müşterilerin en sık sorduğu soruyu doğrudan kameraya yanıtlamak. Hem güven kurar hem arama sonuçlarında karşılık bulur.",
          "Mekan turu: işletmenin atmosferini gösteren akıcı çekim. Restoran, otel ve mağaza için rezervasyon ve ziyarete en çok dokunan format.",
        ],
      },
      {
        baslik: "Çekim öncesi hazırlık, çekimden daha önemli",
        paragraflar: [
          "İyi bir Reels, kamerayı açmadan önce kağıt üzerinde bitmiş olmalıdır. Çekime gitmeden önce şu üç soruyu yanıtlayın: bu video hangi tek şeyi anlatıyor, izleyici sonunda ne yapsın, ilk kare ne olacak?",
          "Bu üç sorunun cevabı yoksa çekim sırasında yüz kare çekilir ve kurguda hiçbiri işe yaramaz. Hazırlıklı bir çekimde ise on beş dakikada üç video çıkar.",
        ],
      },
      {
        baslik: "Sesin ve altyazının rolü",
        paragraflar: [
          "İzleyicilerin önemli bir bölümü videoları sessiz izler. Bu yüzden anlatının altyazısız da anlaşılması gerekir. Konuşmalı videolarda altyazı zorunludur; müzikli videolarda ise ekrandaki kısa metin izleyiciyi yönlendirir.",
          "Ekran metnini iki ya da üç kelimeyle sınırlayın. Uzun cümle okunmaz, sadece kareyi kapatır.",
        ],
      },
      {
        baslik: "Ne sıklıkla paylaşmalı?",
        paragraflar: [
          "Haftada iki nitelikli Reels, her gün paylaşılan dolgu içerikten daha iyi sonuç verir. Süreklilik önemlidir ama sürekliliği kaliteyi düşürerek sağlamak hesabın erişimini kalıcı olarak aşağı çeker.",
          "Sürdürülebilir bir tempo kurmanın en pratik yolu toplu çekimdir: ayda bir gün sahada geçirip o ayın tüm videolarını çekmek, her hafta aceleyle içerik yetiştirmekten hem daha ucuz hem daha kalitelidir.",
        ],
      },
    ],
    ilgiliHizmetler: ["fotograf-video-produksiyon", "sosyal-medya-yonetimi"],
  },

  {
    slug: "meta-reklam-butcesi-nasil-belirlenir",
    baslik: "Meta reklamlarında bütçe nasıl belirlenir?",
    seoBaslik: "Meta Reklam Bütçesi Nasıl Belirlenir? | Studio Gria",
    seoAciklama:
      "Instagram ve Facebook reklamlarında günlük bütçe nasıl hesaplanır, öğrenme fazı nedir, bütçe artışı ne zaman yapılır? Reklam yönetimi deneyimimizden pratik rehber.",
    ozet:
      "Günlük bütçenin hedef maliyetle ilişkisi, öğrenme fazının bütçeye etkisi ve bütçe artırırken yapılan en yaygın hata.",
    tarih: "2026-07-28",
    okumaSuresi: 7,
    kategori: "Reklam Yönetimi",
    giris:
      "Meta reklamlarında en sık sorulan soru bütçenin ne kadar olması gerektiği. Doğru cevap sektöre göre değişse de, bütçeyi belirlemenin mantığı her işletme için aynı: hedeflediğiniz sonucun maliyetinden geriye doğru hesaplamak.",
    bolumler: [
      {
        baslik: "Bütçeyi hedeften geriye doğru hesaplayın",
        paragraflar: [
          "Önce şu soruyu yanıtlayın: bir müşteri kazanmak size ne kadar değer katıyor? Ortalama satış tutarınızı ve kârlılığınızı biliyorsanız, bir müşteri için ödeyebileceğiniz üst sınırı da biliyorsunuz demektir.",
          "Ardından dönüşüm oranınızı ekleyin. Gelen her on mesajdan ikisi müşteriye dönüşüyorsa, bir müşteri beş mesaja mal oluyor demektir. Mesaj başına maliyet hedefiniz buradan çıkar ve günlük bütçe bu hedefin üzerine kurulur.",
        ],
      },
      {
        baslik: "Öğrenme fazı ve neden çok düşük bütçe işe yaramaz",
        paragraflar: [
          "Meta, yeni bir reklam setini yayına aldığında önce kimin dönüşeceğini öğrenmeye çalışır. Bu döneme öğrenme fazı denir ve sistem yeterli veri toplayana kadar maliyetler dalgalı seyreder.",
          "Günlük bütçe çok düşük tutulduğunda sistem bu veriyi hiçbir zaman toplayamaz ve kampanya öğrenme fazından çıkamaz. Sonuç, sürekli yüksek ve öngörülemez maliyettir. Bu yüzden bütçeyi çok sayıda kampanyaya bölmek yerine az sayıda kampanyada toplamak neredeyse her zaman daha verimlidir.",
        ],
      },
      {
        baslik: "Bütçe artırırken yapılan en yaygın hata",
        paragraflar: [
          "İyi çalışan bir kampanyayı gördüğünde çoğu işletmenin ilk refleksi bütçeyi bir anda katlamak oluyor. Ancak sert bütçe artışı kampanyayı yeniden öğrenme fazına sokar ve o ana kadar biriken performansı sıfırlar.",
          "Sağlıklı yöntem kademeli artıştır: mevcut bütçenin üzerine yüzde yirmi beş civarında ekleyip birkaç gün sonucu izlemek. Maliyet korunuyorsa artışı tekrarlamak, bozuluyorsa geri almak.",
        ],
      },
      {
        baslik: "Kampanyayı ne zaman durdurmalı?",
        paragraflar: [
          "Erken müdahale, reklamcılıkta en pahalı alışkanlıklardan biri. İlk iki gündeki veri bir karar için yeterli değildir. Kampanyayı değerlendirmek için en az üç ile beş gün ve anlamlı sayıda sonuç beklemek gerekir.",
          "Bununla birlikte bir eşik belirlemek şart. Hedef maliyetinizin belirgin biçimde üzerine çıkan ve düzelme eğilimi göstermeyen bir kampanya durdurulmalıdır. Önemli olan bu eşiği kampanyayı açmadan önce yazılı olarak belirlemek, sonuçları gördükten sonra değil.",
        ],
      },
      {
        baslik: "Bütçe tek başına yeterli değildir",
        paragraflar: [
          "Zayıf bir kreatif, yüksek bütçeyle daha hızlı para harcar, daha iyi sonuç vermez. Reklam performansının en belirleyici bileşeni hâlâ videonun ya da görselin kendisi.",
          "Bütçeyi artırmadan önce elinizdeki içeriğin gerçekten ilgi çekip çekmediğine bakın. İzlenme süresi ve tıklama oranı düşükse çözüm bütçede değil, kreatifte.",
        ],
      },
    ],
    ilgiliHizmetler: ["reklam-yonetimi", "ai-uretim-reklam-filmleri", "fotograf-video-produksiyon"],
  },

  {
    slug: "restoran-kafe-sosyal-medya-icerik-fikirleri",
    baslik: "Restoran ve kafeler için sosyal medya içerik fikirleri",
    seoBaslik: "Restoran ve Kafeler İçin Sosyal Medya İçerik Fikirleri | Studio Gria",
    seoAciklama:
      "Restoran ve kafeler için işe yarayan sosyal medya içerik fikirleri: menü tanıtımı, mutfak arkası, mekan atmosferi ve rezervasyona dokunan paylaşım örnekleri.",
    ozet:
      "Yeme içme işletmeleri için rezervasyona ve ziyarete dokunan içerik türleri, çekim zamanlaması ve sık yapılan hatalar.",
    tarih: "2026-08-11",
    okumaSuresi: 6,
    kategori: "Sektörel",
    giris:
      "Yeme içme sektöründe sosyal medya, vitrinin kendisi. İnsanlar bir mekana gitmeden önce hesabına bakıyor ve kararını çoğu zaman orada veriyor. Bu yüzden içerik güzel görünmekle kalmamalı, gitme isteği uyandırmalı.",
    bolumler: [
      {
        baslik: "Menüyü tanıtmanın doğru yolu",
        paragraflar: [
          "Masaya konmuş sabit tabak fotoğrafı artık kimseyi durdurmuyor. Ürünü hareket halinde göstermek gerekiyor: sosun dökülmesi, buharın çıkması, bıçağın kesmesi. Bu anlar iştah uyandırır ve izleyiciyi videonun sonuna kadar tutar.",
          "Her ürünü tanıtmaya çalışmayın. Ayda üç ya da dört imza ürünü doğru şekilde anlatmak, tüm menüyü sıradan karelerle geçmekten daha iyi sonuç verir.",
        ],
      },
      {
        baslik: "Mutfak arkası ve ekip",
        paragraflar: [
          "İnsanlar mekanı sevmeden önce arkasındaki insanları sever. Şefin hazırlık anı, ekibin servis öncesi telaşı, sabah gelen malzemenin seçilmesi gibi içerikler hem güven kurar hem sizi rakiplerden ayırır.",
          "Bu içerikler ayrıca en kolay üretilenlerdir. Özel bir kurgu gerektirmez, yalnızca doğru anı yakalamak yeterlidir.",
        ],
      },
      {
        baslik: "Mekan atmosferi ve doğru saat",
        paragraflar: [
          "Mekan çekimlerinde ışık her şeydir. Aynı mekan öğle saatinde sıradan, akşamüstü ise etkileyici görünür. Atmosfer çekimleri için günün en iyi ışığını bekleyin.",
          "Kalabalık bir salon, boş bir salondan çok daha davetkardır. Çekimi yoğun saatte yapmak zor görünse de sonuç farkı büyüktür.",
        ],
      },
      {
        baslik: "Rezervasyona dokunan içerik",
        paragraflar: [
          "Erişim kazanan içerik ile rezervasyon getiren içerik her zaman aynı olmayabilir. Hesabınızda mutlaka yer alması gereken bilgiler var: konum, çalışma saatleri, rezervasyon yolu ve fiyat aralığı hakkında fikir veren paylaşımlar.",
          "Bu bilgileri yalnızca biyografiye bırakmayın. Ayda bir kez içerik olarak da paylaşın, çünkü hesabınıza gelen herkes biyografiyi okumuyor.",
        ],
      },
      {
        baslik: "Sık yapılan üç hata",
        paragraflar: ["Yeme içme hesaplarında en çok karşılaştığımız hatalar şunlar:"],
        liste: [
          "Kötü ışıkta çekilmiş yemek fotoğrafı paylaşmak. Zayıf bir kare, hiç paylaşmamaktan daha çok zarar verir.",
          "Kampanya duyurusunu içeriğin tamamı haline getirmek. Sürekli indirim konuşan hesap, fiyatla anılır hale gelir.",
          "Yorum ve mesajlara geç dönmek. Sosyal medya bir vitrin olduğu kadar bir müşteri hizmetleri kanalıdır.",
        ],
      },
    ],
    ilgiliHizmetler: ["sosyal-medya-yonetimi", "fotograf-video-produksiyon", "drone-cekimleri"],
  },
];

export function yaziBul(slug: string): BlogYazisi | undefined {
  return blogYazilari.find((yazi) => yazi.slug === slug);
}

// Yazilari en yeniden eskiye siralar
export function yazilariSirala(): BlogYazisi[] {
  return [...blogYazilari].sort((a, b) => (a.tarih < b.tarih ? 1 : -1));
}
