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

export type YaziSorusu = {
  soru: string;
  cevap: string;
};

export type BlogYazisi = {
  slug: string;
  baslik: string;
  seoBaslik: string;
  seoAciklama: string;
  ozet: string;
  tarih: string; // ISO 8601
  // Icerik esasli guncelleme tarihi. Arama motorlari ve yapay zeka motorlari
  // tazelige bakar; yazi genisletildiginde burasi guncellenir.
  guncelleme?: string;
  okumaSuresi: number; // dakika
  kategori: string;
  giris: string;
  // GEO: yazinin en ustunde duran, tek basina anlamli dogrudan yanit.
  // Yapay zeka motorlari bir soruya kaynak ararken en cok bu bicimdeki
  // kendi kendine yeten kisa paragraflari alintilar. 40-70 kelime.
  kisaCevap: string;
  bolumler: YaziBolumu[];
  // Yazinin sonunda duran madde listesi. Hem okuyucu icin ozet hem de
  // motorlar icin cikarilabilir sonuc kumesi.
  anahtarCikarimlar: string[];
  // Yazi ici soru-cevap. FAQPage semasi bu listeden uretilir; metin sayfada
  // gorunur oldugu icin Google'in "sema gorunur icerikle esit olmali"
  // kuralina uygundur.
  sorular: YaziSorusu[];
  // Yazinin konu etiketleri. Sema icindeki keywords ve about alanlarini besler.
  etiketler: string[];
  // Yazinin dogal olarak bagladigi hizmet sayfalari (slug)
  ilgiliHizmetler: string[];
};

export const blogYazilari: BlogYazisi[] = [
  {
    slug: "sosyal-medya-ajansi-fiyatlari",
    baslik: "Sosyal medya ajansı fiyatları: bütçe neye göre belirlenir?",
    seoBaslik: "Sosyal Medya Ajansı Fiyatları 2026: Neye Göre Değişir?",
    seoAciklama:
      "Ajans teklifleri neden bu kadar farklı? Fiyatı belirleyen asıl kalem, teklifte mutlaka görmeniz gereken maddeler ve ucuz teklifin gizli maliyeti.",
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
    guncelleme: "2026-08-23",
    kisaCevap:
      "Sosyal medya ajansı fiyatını belirleyen asıl kalem, içeriğin kim tarafından üretildiğidir. Yalnızca sizin gönderdiğiniz görselleri düzenleyip paylaşan bir yönetim hizmeti ile sahaya gelip çekim, kurgu ve tasarım üreten bir prodüksiyon hizmeti aynı isimle sunulur, ancak maliyetleri farklıdır. Teklifleri karşılaştırırken aylık özgün içerik adedine ve bunların kaçının sahada çekildiğine bakın.",
    anahtarCikarimlar: [
      "Fiyat farkının asıl kaynağı üretim biçimidir: yalnızca yayın yönetimi mi, yoksa sahada çekim ve kurgu da dahil mi?",
      "Sağlıklı bir teklifte aylık içerik adedi, saha çekim günü, revizyon hakkı ve raporlama sıklığı adetle yazılıdır.",
      "Reklam bütçesi ajans ücretinden ayrı bir kalemdir; tamamı doğrudan Meta ya da Google'a gider.",
      "Bütçe sınırlıysa kapsamı daraltın, kaliteyi değil. Altı güçlü içerik, on iki dolgu içerikten daha iyi çalışır.",
      "Teklifleri karşılaştırılabilir kılan tek soru şudur: bu bütçeyle ayda kaç özgün içerik üretilecek ve kaçı sahada çekilecek?",
    ],
    sorular: [
      {
        soru: "Sosyal medya ajansı aylık ne kadar tutar?",
        cevap:
          "Aylık ücreti kapsam belirler: üretilen özgün içerik adedi, sahada geçirilen çekim günü sayısı, kaç platformun yönetildiği ve reklam yönetiminin dahil olup olmadığı. Bu kalemler netleşmeden verilen rakam karşılaştırılabilir değildir. Studio Gria olarak önce ihtiyaç analizi yapar, ardından markaya özel bir teklif sunumu hazırlarız.",
      },
      {
        soru: "Reklam bütçesi ajans ücretine dahil mi?",
        cevap:
          "Hayır. Ajans ücreti üretim ve yönetim karşılığıdır. Reklam bütçesi doğrudan Meta ya da Google'a ödenir, kendi reklam hesabınızdan harcanır ve tamamı platforma gider. Reklam bütçesi arttığında ajans ücreti otomatik olarak artmaz.",
      },
      {
        soru: "En ucuz teklifi seçmek neden riskli?",
        cevap:
          "Çok düşük tekliflerde üretim genelde stok görsel ve şablon tasarımla yapılır. Hesap dolu görünür, ancak içerik markaya ait olmadığı için ne tanınırlık kazandırır ne satışa dokunur. Altı ay sonra elinizde kullanılabilir bir görsel arşivi de kalmaz.",
      },
      {
        soru: "Bir teklifte hangi kalemler mutlaka yazılı olmalı?",
        cevap:
          "Aylık özgün içerik adedi ve formatı, sahada çekim yapılacak gün sayısı, tasarım revizyon hakkı, reklam yönetiminin dahil olup olmadığı, raporlama sıklığı ve raporun içeriği, sözleşme süresi ile fesih koşulları. Kapsamı net yazılmamış teklif birkaç ay sonra ek fatura olarak geri döner.",
      },
    ],
    etiketler: ["sosyal medya ajansı fiyatları", "ajans teklifi karşılaştırma", "içerik üretimi maliyeti", "reklam bütçesi"],
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
    guncelleme: "2026-08-23",
    kisaCevap:
      "İşletme Reels'inde sonucu belirleyen şey ilk üç saniyedir. İzleyici o sürede merak edeceği bir şey görmezse kaydırır, düşen izlenme oranı da algoritmanın videoyu daha az kişiye göstermesine yol açar. Logo ya da jenerikle açılan videolar bu testte neredeyse her zaman kaybeder. İşletmeler için en istikrarlı çalışan dört kalıp şudur: süreç, öncesi ve sonrası, soru cevap, mekan turu.",
    anahtarCikarimlar: [
      "En iyi kare videonun ortasında değil başında olmalı; kurguyu bitirince videoyu sesi kapalı izleyip test edin.",
      "İşletmeler için dört kalıp istikrarlı çalışır: süreç, öncesi ve sonrası, soru cevap, mekan turu.",
      "İyi bir Reels kamera açılmadan önce kağıt üzerinde biter: ne anlatıyor, izleyici ne yapsın, ilk kare ne olacak?",
      "İzleyicilerin önemli bölümü sessiz izler. Konuşmalı videoda altyazı zorunludur, ekran metni iki üç kelimeyi geçmemelidir.",
      "Haftada iki nitelikli Reels, her gün paylaşılan dolgu içerikten daha iyi sonuç verir.",
      "Sürdürülebilir tempo toplu çekimle kurulur: ayda bir gün sahada, o ayın tüm videoları.",
    ],
    sorular: [
      {
        soru: "Reels'te ilk kaç saniye belirleyici?",
        cevap:
          "İlk üç saniye. İzleyici bu sürede merak uyandıracak bir şey görmezse kaydırır ve düşük izlenme oranı algoritmanın videoyu daha az kişiye göstermesine yol açar. Videoyu logo, jenerik ya da hazırlık karesiyle açmayın; en güçlü kareyi en başa koyun.",
      },
      {
        soru: "Bir işletme hesabı haftada kaç Reels paylaşmalı?",
        cevap:
          "Haftada iki nitelikli Reels çoğu işletme için doğru tempodur. Süreklilik önemlidir, ancak sürekliliği kaliteyi düşürerek sağlamak hesabın erişimini kalıcı olarak aşağı çeker. Bu tempoyu sürdürmenin en pratik yolu ayda bir gün toplu çekim yapmaktır.",
      },
      {
        soru: "Reels çekmek için profesyonel kamera şart mı?",
        cevap:
          "Hayır. Güncel bir telefon çoğu işletme içeriği için yeterlidir. Sonucu belirleyen şey ekipman değil ışık, kurgu ritmi ve ilk karedir. Mekan atmosferi, drone ve ürün detay çekimlerinde ise profesyonel ekipmanın farkı belirgin şekilde görünür.",
      },
      {
        soru: "Reels'te müzik mi konuşma mı daha iyi çalışır?",
        cevap:
          "İkisi de çalışır, seçim içeriğin işine bağlıdır. Bilgi veren ve güven kuran içeriklerde konuşma daha güçlüdür ve altyazıyla birlikte kullanılmalıdır. Atmosfer, ürün ve mekan içeriklerinde müzik yeterlidir; bu durumda ekrandaki kısa metin izleyiciyi yönlendirir.",
      },
    ],
    etiketler: ["Instagram Reels", "işletmeler için video içerik", "sosyal medya video kurgusu", "içerik planlama"],
    ilgiliHizmetler: ["fotograf-video-produksiyon", "sosyal-medya-yonetimi"],
  },

  {
    slug: "meta-reklam-butcesi-nasil-belirlenir",
    baslik: "Meta reklamlarında bütçe nasıl belirlenir?",
    seoBaslik: "Meta Reklam Bütçesi Nasıl Belirlenir? | Studio Gria",
    seoAciklama:
      "Instagram ve Facebook reklamlarında günlük bütçe nasıl hesaplanır, öğrenme fazı nedir, bütçe artışı ne zaman yapılır? Saha deneyimimizden pratik rehber.",
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
    guncelleme: "2026-08-23",
    kisaCevap:
      "Meta reklam bütçesi sektör ortalamasından değil, hedeften geriye doğru hesaplanır. Önce bir müşterinin size kattığı değeri, sonra dönüşüm oranınızı belirleyin: gelen her on mesajdan ikisi müşteriye dönüşüyorsa bir müşteri beş mesaja mal oluyor demektir. Mesaj başına hedef maliyet buradan çıkar, günlük bütçe bu hedefin üzerine kurulur. Çok düşük bütçe kampanyanın öğrenme fazından çıkmasını engeller.",
    anahtarCikarimlar: [
      "Bütçe, hedeflenen sonucun maliyetinden geriye doğru hesaplanır; sektör ortalamasından değil.",
      "Çok düşük günlük bütçe kampanyayı öğrenme fazında bırakır ve maliyeti kalıcı olarak yükseltir.",
      "Bütçeyi çok sayıda kampanyaya bölmek yerine az sayıda kampanyada toplamak neredeyse her zaman daha verimlidir.",
      "Bütçe artışı kademeli yapılır: yaklaşık yüzde yirmi beş ekleyip birkaç gün izleyin. Sert artış öğrenmeyi sıfırlar.",
      "Durdurma eşiği kampanya açılmadan önce yazılı olarak belirlenir, sonuçlar görüldükten sonra değil.",
      "Zayıf kreatif yüksek bütçeyle daha hızlı para harcar, daha iyi sonuç vermez.",
    ],
    sorular: [
      {
        soru: "Meta reklamlarına günlük ne kadar bütçe ayırmalıyım?",
        cevap:
          "Herkese uyan tek bir rakam yok; bütçe hedef maliyetinizden geriye doğru hesaplanır. Bir müşterinin size kattığı değeri ve mesajdan müşteriye dönüşüm oranınızı bilirseniz, mesaj başına ödeyebileceğiniz üst sınırı da bilirsiniz. Günlük bütçe, sistemin günde birkaç sonuç üretebileceği kadar yüksek olmalıdır; aksi halde kampanya öğrenme fazından çıkamaz.",
      },
      {
        soru: "Öğrenme fazı nedir?",
        cevap:
          "Öğrenme fazı, Meta'nın yeni bir reklam setinde kimin dönüşeceğini öğrenmeye çalıştığı dönemdir. Bu süreçte maliyetler dalgalı seyreder. Sistem yeterli sayıda dönüşüm verisi topladığında faz kapanır. Günlük bütçe çok düşükse bu veri hiçbir zaman birikmez ve kampanya öğrenme fazında sıkışıp kalır.",
      },
      {
        soru: "Bütçeyi ne zaman ve ne kadar artırmalıyım?",
        cevap:
          "Kampanya hedef maliyetini tutturuyorsa artış yapılabilir. Sağlıklı yöntem kademeli artıştır: mevcut bütçenin üzerine yaklaşık yüzde yirmi beş ekleyip birkaç gün sonucu izlemek. Sert bütçe artışı kampanyayı yeniden öğrenme fazına sokar ve o ana kadar biriken performansı sıfırlar.",
      },
      {
        soru: "Bir kampanyayı kaç gün sonra değerlendirmeliyim?",
        cevap:
          "İlk iki gündeki veri karar için yeterli değildir. Bir kampanyayı değerlendirmek için en az üç ile beş gün ve anlamlı sayıda sonuç beklemek gerekir. Erken müdahale, reklamcılıkta en pahalı alışkanlıklardan biridir.",
      },
    ],
    etiketler: ["Meta reklam bütçesi", "Instagram reklamı", "öğrenme fazı", "performans pazarlama"],
    ilgiliHizmetler: ["reklam-yonetimi", "ai-uretim-reklam-filmleri", "fotograf-video-produksiyon"],
  },

  {
    slug: "restoran-kafe-sosyal-medya-icerik-fikirleri",
    baslik: "Restoran ve kafeler için sosyal medya içerik fikirleri",
    seoBaslik: "Restoran ve Kafeler İçin Sosyal Medya İçerik Fikirleri",
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
    guncelleme: "2026-08-23",
    kisaCevap:
      "Restoran ve kafelerde içerik güzel görünmekle kalmamalı, gitme isteği uyandırmalıdır. Sabit tabak fotoğrafı yerine ürünü hareket halinde gösterin: sosun dökülmesi, buharın çıkması, bıçağın kesmesi. Ayda üç dört imza ürünü doğru anlatmak, tüm menüyü sıradan karelerle geçmekten daha iyi sonuç verir. Mutfak arkası içerikleri hem en kolay üretilen hem de güveni en hızlı kuran türdür.",
    anahtarCikarimlar: [
      "Ürünü hareket halinde gösterin; masaya konmuş sabit tabak fotoğrafı artık kimseyi durdurmuyor.",
      "Tüm menüyü değil, ayda üç dört imza ürünü doğru anlatın.",
      "Mutfak arkası ve ekip içerikleri hem en kolay üretilenler hem de güveni en hızlı kuranlar.",
      "Atmosfer çekiminde günün en iyi ışığını bekleyin; kalabalık bir salon boş salondan çok daha davetkardır.",
      "Konum, çalışma saati, rezervasyon yolu ve fiyat fikri veren paylaşımları yalnızca biyografiye bırakmayın.",
      "Sürekli indirim konuşan hesap fiyatla anılır hale gelir; kampanya içeriği toplamın küçük bir bölümü olmalıdır.",
    ],
    sorular: [
      {
        soru: "Restoran hesabında ne sıklıkla paylaşım yapılmalı?",
        cevap:
          "Haftada üç ile beş paylaşım çoğu yeme içme işletmesi için sürdürülebilir bir tempodur ve bunun en az ikisi video olmalıdır. Kritik olan sıklık değil süreklilik: ayda bir gün toplu çekim yapıp içeriği önceden hazırlamak, her gün aceleyle içerik yetiştirmekten hem daha ucuz hem daha kalitelidir.",
      },
      {
        soru: "Yemek fotoğrafı için en iyi çekim saati hangisi?",
        cevap:
          "Doğal ışığın yumuşadığı saatler, özellikle öğleden sonranın geç saatleri ve akşamüstü. Aynı mekan öğle saatinde sıradan, akşamüstü etkileyici görünür. Yapay ışık altında çekim gerekiyorsa masaya tek yönden gelen bir ışık kaynağı kullanın; tepeden gelen tavan aydınlatması yemeği yassı gösterir.",
      },
      {
        soru: "Sürekli indirim paylaşmak zararlı mı?",
        cevap:
          "Kampanya duyurusunu içeriğin tamamı haline getirmek zararlıdır. Sürekli indirim konuşan hesap fiyatla anılır hale gelir ve tam fiyattan gelen müşteriyi kaybeder. İndirim içeriği toplam paylaşımın küçük bir bölümü olmalı, geri kalanı ürünü, mekanı ve ekibi anlatmalıdır.",
      },
      {
        soru: "Sosyal medya restorana gerçekten rezervasyon getirir mi?",
        cevap:
          "Getirir, ancak erişim kazanan içerik ile rezervasyon getiren içerik her zaman aynı değildir. Rezervasyona dönüşen içerikte konum, çalışma saatleri, rezervasyon yolu ve fiyat aralığı hakkında fikir bulunur. Bu bilgiler yalnızca biyografide kalırsa hesaba gelen çoğu kişi görmez.",
      },
    ],
    etiketler: ["restoran sosyal medya", "kafe içerik fikirleri", "yemek fotoğrafçılığı", "yerel işletme pazarlaması"],
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
