// Blog icerik katalogu.
// Her kayit /blog listesinde bir kart ve /blog/[slug] altinda kendi
// SEO sayfasini uretir. Yeni yazi eklemek icin bu diziye kayit eklemek yeterlidir.
//
// Yazilar arama niyetine gore kurgulanir: baslik ziyaretcinin Google'a
// yazdigi soruyu karsilar, bolum basliklari (h2) alt sorulari yanitlar.

export type YaziTablosu = {
  basliklar: string[];
  satirlar: string[][];
  // Tablonun altinda duran kaynak ve kapsam notu
  not?: string;
};

export type YaziBolumu = {
  baslik: string;
  paragraflar: string[];
  liste?: string[];
  // Fiyat araligi gibi karsilastirmali bilgi. Motorlar tablo bicimindeki
  // veriyi dogrudan yanit olarak alintilamaya yatkindir.
  tablo?: YaziTablosu;
  // Tablodan sonra gelen paragraflar
  sonParagraflar?: string[];
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
    seoBaslik: "Sosyal Medya Ajansı Fiyatları 2026: Aylık Ücret Tablosu",
    seoAciklama:
      "2026'da tam hizmet sosyal medya ajansı ücretleri: çekimsiz yönetim 25.000 TL'den, prodüksiyonlu 45.000 TL'den başlar. Fiyat tablosu ve teklifte bakılacaklar.",
    ozet:
      "Ajans tekliflerini karşılaştırırken bakmanız gereken kalemler, fiyatı gerçekten belirleyen değişkenler ve ucuz teklifin gizli maliyeti.",
    tarih: "2026-06-18",
    okumaSuresi: 8,
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
        baslik: "2026'da tam hizmet ajans fiyatları: aylık ücret tablosu",
        paragraflar: [
          "Aşağıdaki aralıklar, sahada prodüksiyon yapan ve reklamı da yöneten tam hizmet bir ajansın 2026 fiyat düzeyini gösterir. Rakamlar reklam bütçesi hariçtir:",
        ],
        tablo: {
          basliklar: ["Hizmet kapsamı", "Aylık ücret (reklam bütçesi hariç)"],
          satirlar: [
            ["Sosyal medya yönetimi (çekimsiz: strateji, tasarım, yayın, rapor)", "25.000 - 35.000 TL"],
            ["Prodüksiyonlu sosyal medya (aylık saha çekimi dahil)", "45.000 - 90.000 TL"],
            ["Reklam yönetimi (Meta ve Google, tek başına)", "20.000 TL'den başlar"],
            ["Entegre ve kurumsal (çok kanal, çok marka)", "90.000 TL ve üzeri"],
          ],
          not: "Kaynak: Studio Gria'nın 2026 teklifleri. Kesin ücret, kapsam netleştikten sonra teklif sunumunda yazılır.",
        },
        sonParagraflar: [
          "Piyasada bu rakamların çok altında teklifler de bulunur. Bunlar genellikle freelance ya da yalnızca sizin gönderdiğiniz görselleri paylaşan hizmetlerdir; sahada çekim, kurgu ve reklam yönetimi içermez. Teklifleri karşılaştırırken aralığa değil, o ücrete ayda kaç özgün içerik ve kaç saha çekimi düştüğüne bakın.",
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
    guncelleme: "2026-09-28",
    kisaCevap:
      "2026'da sahada prodüksiyon yapan tam hizmet bir sosyal medya ajansında aylık ücret, reklam bütçesi hariç, çekimsiz yönetimde 25.000 TL'den, prodüksiyonlu yönetimde 45.000 TL'den başlar; entegre ve kurumsal işler 90.000 TL'yi aşar. Çok daha düşük teklifler genellikle yalnızca paylaşım yapan hizmetlerdir. Farkı, içeriğin kim tarafından ve sahada üretilip üretilmediği belirler.",
    anahtarCikarimlar: [
      "2026'da tam hizmet ajanslarda aylık ücret, reklam bütçesi hariç, çekimsiz yönetimde 25.000 TL'den, prodüksiyonlu yönetimde 45.000 TL'den başlar.",
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
          "Sahada prodüksiyon yapan tam hizmet bir ajansta 2026'da aylık ücret, reklam bütçesi hariç, çekimsiz yönetimde 25.000 ile 35.000 TL, aylık saha çekimi içeren prodüksiyonlu yönetimde 45.000 ile 90.000 TL arasındadır. Kesin rakamı üretilen özgün içerik adedi, saha çekim günü sayısı, yönetilen platformlar ve reklam yönetiminin dahil olup olmadığı belirler. Studio Gria olarak önce ihtiyaç analizi yapar, ardından markaya özel bir teklif sunumu hazırlarız.",
      },
      {
        soru: "Meta reklam yönetimi ücreti ne kadar?",
        cevap:
          "Reklam yönetimini tek başına aldığınızda aylık ücret 20.000 TL'den başlar; hesap sayısı, kampanya hacmi ve raporlama ihtiyacı arttıkça yükselir. Bu ücret reklam bütçesinden ayrıdır; bütçe doğrudan Meta'ya ödenir.",
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

  // 28 Eyl 2026 dalgasi: arastirmada dogrulanan dusuk rekabetli sorgular
  {
    slug: "sosyal-medya-ajansi-mi-kendim-mi",
    baslik: "Sosyal medya ajansı mı, kendim mi yönetmeliyim?",
    seoBaslik: "Sosyal Medya Ajansı mı, Kendim mi Yönetmeliyim?",
    seoAciklama:
      "Sosyal medyanızı kendiniz mi yönetmelisiniz, freelancer ile mi, ajansla mı? Dört modelin güçlü ve zayıf yanları ve ajans seçerken sorulacak sorular.",
    ozet:
      "Sosyal medyanızı kendiniz yönetmek, freelancer, ajans ve danışmanlık modellerinin hangi durumda doğru olduğu ve ajans seçerken sorulacak sorular.",
    tarih: "2026-09-28",
    okumaSuresi: 7,
    kategori: "Bütçe ve Süreç",
    giris:
      "Sosyal medyası için yardım aramaya başlayan işletme sahibinin önünde genelde dört yol vardır: işi kendisi yürütmek, bir freelancer ile çalışmak, bir ajansa devretmek ya da ekibini bir danışmanla güçlendirmek. Dördü de doğru olabilir. Yanlış olan, işletmenin ihtiyacına bakmadan yalnızca aylık rakama göre seçim yapmaktır. Bu rehberde her modelin neyi iyi yaptığını, nerede tıkandığını ve kararı hangi sorularla vereceğinizi anlatıyoruz.",
    kisaCevap:
      "Sosyal medyayı kendiniz yönetmek, bütçesi sınırlı ve haftada düzenli zaman ayırabilen küçük işletmeler için doğru bir başlangıçtır. Düzenli çekim, tasarım ve reklamın birlikte yürümesi gerektiğinde ajans daha verimlidir. İçeride üretim yapabilecek biri varsa danışmanlık iyi bir ara yoldur. Kararı aylık ücrete göre değil, sosyal medyadan beklediğiniz sonuca ve üretimi kimin yapacağına göre verin.",
    bolumler: [
      {
        baslik: "Önce ihtiyacı tanımlayın: sosyal medyadan ne bekliyorsunuz?",
        paragraflar: [
          "Karar vermeden önce sosyal medyanın işletmeniz için ne yapması gerektiğini netleştirin. Rezervasyon, randevu, mesaj, mağaza ziyareti ya da online satış: hedef ne kadar netse model seçimi o kadar kolaylaşır. “Hesap dolu görünsün” hedefi ile “ayda düzenli olarak müşteri mesajı gelsin” hedefi, bambaşka bir iş yükü ve uzmanlık ister.",
          "İkinci soru üretimle ilgilidir. İçeriğin ham maddesi nereden gelecek? Ürününüzü, mekanınızı ya da ekibinizi gösteren görüntüleri kim çekecek? Sosyal medyanın en çok zaman alan kısmı paylaşım butonuna basmak değil, paylaşılacak şeyi üretmektir. Bu kısmı hesaba katmayan her plan birkaç ay içinde aksar.",
          "Üçüncü soru zamandır. Sosyal medyanın düzenli yürümesi haftalık bir iş yükü demektir: içerik fikri, çekim, düzenleme, metin, yayın ve gelen soruların takibi. Bu iş yükünü kimin, haftanın hangi saatlerinde üstleneceği netleşmeden seçilen her model kağıt üzerinde kalır.",
        ],
      },
      {
        baslik: "Kendiniz yönetirseniz: ne zaman mantıklı?",
        paragraflar: [
          "Yeni açılmış, bütçesi sınırlı ve sahibinin işin başında olduğu küçük işletmelerde kendi yönetimi iyi bir başlangıçtır. Markayı en iyi siz tanırsınız, müşterinin ne sorduğunu siz duyarsınız ve bu samimiyet kameraya yansır. Telefonla çekilmiş içten bir video, bazen pahalı bir prodüksiyondan daha çok etkileşim alır.",
          "Sorun sürdürülebilirliktir. İş yoğunlaştığında ilk ertelenen şey paylaşım olur. Düzensiz yayın hesabın erişimini düşürür ve her yeniden başlangıç daha zor olur. Kendiniz yönetecekseniz haftalık sabit bir üretim saati ayırın, içerikleri önceden planlayın ve en az üç ay bu ritmi bozmadan ilerleyin. Kendi yönetimi özellikle şu durumlarda işe yarar:",
        ],
        liste: [
          "Aylık içerik ihtiyacınız az ve konu tek bir ürün ya da hizmet etrafında dönüyorsa",
          "Haftada birkaç saati düzenli olarak bu işe ayırabiliyorsanız",
          "Reklam vermeyi henüz planlamıyorsanız",
          "Kamera karşısında rahat, işini anlatmayı seven biriyseniz",
        ],
      },
      {
        baslik: "Freelancer ile çalışmak: esneklik ve tek kişiye bağımlılık",
        paragraflar: [
          "Freelancer, belirli bir işi iyi yapan tek bir kişidir: bazen tasarımcı, bazen içerik üreticisi, bazen reklam uzmanı. Doğru kişiyi bulduğunuzda hızlı ve esnek bir çalışma kurulur. Özellikle net tanımlanmış tek bir ihtiyacınız varsa, örneğin yalnızca tasarım ya da yalnızca reklam kurulumu, bu model verimli olabilir.",
          "Sınırı ise kapsamdır. Sosyal medya tek bir beceriden oluşmaz; plan, çekim, kurgu, tasarım, metin, yayın ve reklam birbirine bağlıdır. Tek bir kişinin hepsini aynı kalitede yapması zordur. Ayrıca o kişi hastalandığında, tatile çıktığında ya da başka bir işe geçtiğinde hesabınız bekler. Freelancer ile çalışıyorsanız dosyaların, şifrelerin ve reklam hesabının sizin üzerinizde kaldığından emin olun.",
          "Freelancer ile verimli çalışmanın yolu işi yazılı tanımlamaktır. Aylık kaç tasarım, kaç video, kaç revizyon beklediğinizi ve teslim günlerini baştan konuşun. Kapsam netse iki taraf da neyin eksik kaldığını kolayca görür; kapsam muğlaksa en iyi freelancer bile beklentinin gerisinde kalmış gibi görünür.",
        ],
      },
      {
        baslik: "Ajansa devretmek: ne zaman doğru karar?",
        paragraflar: [
          "Ajans modeli, sosyal medyanın işletmeniz için bir satış kanalı haline geldiği noktada anlam kazanır. Düzenli çekim, tasarım, yayın ve reklamın birlikte yürümesi gerekiyorsa bu işleri tek ekipte toplamak hem zaman kazandırır hem de sorumluluğu netleştirir. “İçerik iyi ama reklam kötü” ya da “reklam iyi ama içerik zayıf” gibi parçalı sonuçlar, çoğu zaman farklı kişilerin birbirinden habersiz çalışmasından doğar.",
          "Ajans modelinin bir diğer avantajı sürekliliktir. Ekipte bir kişi izne çıktığında ya da ayrıldığında hesap durmaz; plan, çekim takvimi ve marka bilgisi ekipte kalır. Bu, özellikle sezonluk kampanyaları olan otel, restoran ve perakende işletmeleri için önemli bir güvencedir.",
          "Ajansla çalışmanın bedeli yalnızca aylık ücret değildir; zamanınızın bir kısmını da ister. İyi bir ajans sizi dinlemeden üretime başlamaz, onay süreçlerine katılmanızı ve işletmenizdeki gelişmeleri paylaşmanızı bekler. “Verdim, unuttum” beklentisiyle başlayan iş birlikleri genelde hayal kırıklığıyla biter.",
          "Studio Gria olarak bu yüzden işe bir dinleme görüşmesiyle başlıyoruz. Hedefi, ürünü ve müşteriyi anladıktan sonra kapsamı ve fiyatı net yazan ücretsiz bir teklif sunumu hazırlıyoruz. Çekimi sahada kendi ekibimiz yapıyor, reklam bütçesi ise ajans ücretinden ayrı tutulup doğrudan sizin reklam hesabınızdan platforma harcanıyor.",
        ],
      },
      {
        baslik: "Danışmanlık modeli: ekibiniz üretiyor, yönü birlikte kuruyoruz",
        paragraflar: [
          "Bazı işletmelerin içinde zaten içerik üretebilecek biri vardır: bir çalışan, bir aile üyesi ya da kendi sosyal medya sorumlusu. Bu durumda işi tamamen devretmek yerine danışmanlık almak daha verimli olabilir. Danışman strateji, içerik yönü, reklam kurgusu ve ölçüm konusunda yol gösterir; üretimi ekibiniz yapar.",
          "Bu model, bilginin işletmenin içinde kalmasını sağlar. Dezavantajı ise üretim kalitesinin ekibin becerisine bağlı olmasıdır. Profesyonel çekim gerektiren sektörlerde, örneğin otel, restoran ya da ürün odaklı e-ticarette, danışmanlığı belirli aralıklarla yapılan prodüksiyon çekimleriyle desteklemek iyi bir denge kurar.",
          "Danışmanlıkta ilerlemenin ölçüsü, ekibin zamanla daha az yönlendirmeye ihtiyaç duymasıdır. İlk aylarda içerik planı ve reklam kurgusu birlikte hazırlanır; sonraki aylarda danışman daha çok sonuçları yorumlayan ve yön düzelten bir rol üstlenir.",
        ],
      },
      {
        baslik: "Ajans seçerken sorulacak sorular",
        paragraflar: [
          "Ajans tekliflerini yan yana koyduğunuzda rakamlar kadar kapsamın da karşılaştırılabilir olması gerekir. Aynı fiyatla biri yalnızca paylaşım, diğeri sahada çekim ve reklam yönetimi sunuyor olabilir.",
          "Ajans modeline karar verdiyseniz teklifleri karşılaştırmak için şu soruları sorun. Cevapları net olan ajans, işin nasıl yürüyeceğini de biliyordur:",
        ],
        liste: [
          "Ayda kaç özgün içerik üretilecek ve bunların kaçı sahada çekilecek?",
          "Çekimi kim yapıyor: ajansın kendi ekibi mi, dışarıdan biri mi?",
          "Reklam bütçesi ajans ücretine dahil mi, yoksa ayrı ve benim hesabımdan mı harcanıyor?",
          "Raporda hangi rakamları göreceğim ve rapor ne sıklıkla gelecek?",
          "Reklam hesabı, sayfa yetkileri ve üretilen dosyalar kimin üzerinde kalacak?",
          "Sözleşme süresi ve fesih koşulları neler?",
        ],
      },
      {
        baslik: "Kararı kolaylaştıran basit bir kural",
        paragraflar: [
          "Özellikle son iki soru önemlidir. Reklam hesabının ve içerik arşivinin işletmenin kendi üzerinde olması, ileride ajans değiştirmek isteseniz bile sıfırdan başlamamanızı sağlar.",
          "Karar vermekte zorlanıyorsanız sosyal medya için harcadığınız zamanı bir hafta boyunca not edin. Bu süre asıl işinizden çalıyor ve hesap yine de düzensiz ilerliyorsa, işi devretmenin ya da en azından danışmanlık almanın zamanı gelmiştir. Hesap düzenli ilerliyor ama sonuç gelmiyorsa sorun zamanda değil yöntemdedir; bu durumda danışmanlık iyi bir ilk adım olabilir.",
          "Hangi modeli seçerseniz seçin, ilk üç ayı bir deneme dönemi gibi düşünün. Başlamadan önce neyi ölçeceğinizi belirleyin: gelen mesaj, randevu, web sitesi ziyareti ya da satış. Üç ayın sonunda bu rakamlara bakarak modeli sürdürmek, genişletmek ya da değiştirmek çok daha kolay bir karar haline gelir.",
        ],
      },
    ],
    anahtarCikarimlar: [
      "Model seçimi aylık rakamla değil, sosyal medyadan beklenen sonuçla başlar.",
      "Kendi yönetimi küçük ve yeni işletmeler için iyi bir başlangıçtır, ama düzenli zaman ayrılmazsa kısa sürede aksar.",
      "Freelancer tek ve net bir ihtiyaç için verimlidir; plan, çekim ve reklamın birlikte yürümesi gerektiğinde sınırına ulaşır.",
      "Ajans, sosyal medya bir satış kanalına dönüştüğünde üretimi ve sorumluluğu tek ekipte toplar.",
      "Danışmanlık, içeride üretim yapabilecek biri olduğunda bilgiyi işletmede tutan bir ara yoldur.",
      "Hangi modeli seçerseniz seçin, reklam hesabı ve içerik arşivi işletmenin üzerinde kalmalıdır.",
    ],
    sorular: [
      {
        soru: "Küçük bir işletme sosyal medyasını kendi yönetebilir mi?",
        cevap:
          "Evet, özellikle başlangıç döneminde. Haftada sabit bir üretim saati ayırabiliyor ve en az üç ay düzenli paylaşım yapabiliyorsanız kendi yönetimi iyi sonuç verir. İş yoğunlaştıkça paylaşımlar erteleniyorsa bir destek modeline geçme zamanı gelmiştir.",
      },
      {
        soru: "Freelancer mı, ajans mı daha uygun?",
        cevap:
          "Net ve tek bir ihtiyacınız varsa, örneğin yalnızca tasarım ya da yalnızca reklam kurulumu, freelancer verimli olabilir. Plan, çekim, tasarım, yayın ve reklamın birlikte yürümesi gerekiyorsa bu işleri tek ekipte toplayan bir ajans hem zaman kazandırır hem de sorumluluğu netleştirir.",
      },
      {
        soru: "Sosyal medya danışmanlığı nedir?",
        cevap:
          "Danışmanlıkta strateji, içerik yönü, reklam kurgusu ve ölçüm konusunda yön verilir; üretimi işletmenin kendi ekibi yapar. İçeride içerik üretebilecek biri olan işletmeler için bilgiyi şirkette tutan, tam devre göre daha hafif bir modeldir.",
      },
      {
        soru: "Ajans değiştirirsem hesabım ve içeriklerim ne olur?",
        cevap:
          "Reklam hesabı, sayfa yetkileri ve üretilen dosyalar işletmenin kendi üzerindeyse hiçbir şey kaybetmezsiniz. Bu yüzden iş birliğinin başında bu yetkilerin kimde kalacağını netleştirmek gerekir. Studio Gria ile çalışırken reklam bütçesi doğrudan sizin hesabınızdan harcanır.",
      },
    ],
    etiketler: [
      "sosyal medya ajansı seçimi",
      "sosyal medya yönetimi",
      "freelancer mı ajans mı",
      "sosyal medya danışmanlığı",
      "küçük işletme sosyal medya",
    ],
    ilgiliHizmetler: ["sosyal-medya-yonetimi", "danismanlik"],
  },

  {
    slug: "google-ads-mi-meta-ads-mi",
    baslik: "Google Ads mı, Meta Ads mı? Sektöre göre doğru seçim",
    seoBaslik: "Google Ads mı Meta Ads mı? Sektöre Göre Doğru Seçim",
    seoAciklama:
      "Google Ads talebi yakalar, Meta Ads talep yaratır. Restoran, klinik, e-ticaret ve B2B için hangi kanalın önce gelmesi gerektiğini sade bir dille anlatıyoruz.",
    ozet:
      "Google Ads ile Meta Ads arasındaki mantık farkı, sektöre göre hangi kanalın önce gelmesi gerektiği ve sınırlı bütçede doğru sıralama.",
    tarih: "2026-09-28",
    okumaSuresi: 7,
    kategori: "Reklam Yönetimi",
    giris:
      "Reklam bütçesi ayırmaya karar veren işletmenin ilk sorusu genelde şudur: parayı Google'a mı vereyim, Instagram ve Facebook'a mı? İki kanal da çalışır, ama aynı işi yapmazlar. Birini diğerinin yerine koymak, bütçenin bir kısmını en baştan boşa harcamak anlamına gelebilir. Bu yazıda iki kanalın mantığını, sektöre göre hangisinin önce gelmesi gerektiğini ve sınırlı bütçede nasıl sıralama yapılacağını anlatıyoruz.",
    kisaCevap:
      "Google Ads, ürününüzü ya da hizmetinizi zaten arayan kişiyi yakalar; Meta Ads ise Instagram ve Facebook'ta sizi aramayan birinde ilgi uyandırır. Müşterileriniz sizi arıyorsa, örneğin yerel hizmet, klinik ya da B2B, Google Ads önce gelir. Görünce karar veriyorsa, örneğin restoran, moda ya da yeni ürün, Meta Ads önce gelir. Sınırlı bütçede tek kanalla başlayın.",
    bolumler: [
      {
        baslik: "Temel fark: talebi yakalamak ve talep yaratmak",
        paragraflar: [
          "Google Ads, birinin zaten aradığı bir şeye cevap verir. “Büyükçekmece diş kliniği” ya da “düğün fotoğrafçısı” yazan kişi o anda ihtiyacının farkındadır ve çözüm arıyordur. Reklamınız bu aramanın karşısına çıkar. Buna talebi yakalamak diyoruz.",
          "Meta Ads ise Instagram ve Facebook'ta gezinen, o anda sizi aramayan birinin karşısına çıkar. Reklam ilgi uyandırır, ihtiyacı hatırlatır ya da yeni bir istek doğurur. Buna talep yaratmak diyoruz. Görsel olarak güçlü, hızlı karar verilebilen ya da denenmek istenen ürün ve hizmetlerde Meta'nın etkisi büyüktür.",
          "Bu fark, reklamın nasıl kurgulanacağını da belirler. Google'da reklam metni aramaya net bir cevap vermeli ve kişiyi doğrudan ilgili sayfaya götürmelidir. Meta'da ise ilk iş dikkati çekmektir; görselin ya da videonun ilk saniyesi, kaydırmakta olan kişiyi durdurmalıdır. Aynı mesajı iki kanala aynen koymak, ikisinde de zayıf kalmak demektir.",
          "Kısaca: insanlar ürününüzü ya da hizmetinizi Google'da arıyorsa Google Ads, aramıyor ama görünce istiyorsa Meta Ads önce gelir.",
          "Reklam biçimleri de bu mantığı yansıtır. Google'da reklamınız çoğunlukla bir arama sonucunun üstünde, kısa bir metin olarak görünür; kararı başlık ve açıklama verdirir. Meta'da ise reklam akışın bir parçasıdır ve kararı görsel ya da video verdirir. Bu yüzden Google reklamında metin, Meta reklamında kreatif üretimi bütçenin en az kendisi kadar önemlidir.",
        ],
      },
      {
        baslik: "Sektöre göre hangisi önce gelir?",
        paragraflar: [
          "Bu soruya cevap verirken sektörden çok müşterinin karar anına bakmak gerekir. Aynı sektörde bile acil ihtiyaç ile planlı karar farklı kanallara yönelir; örneğin bir diş kliniğinde ağrıyla gelen hasta Google'da arama yapar, estetik bir uygulamayı düşünen kişi ise çoğu zaman Instagram'da gördüğü içerikle karar vermeye başlar.",
          "Sahada gördüğümüz tablo sektörden sektöre belirgin şekilde değişiyor. Aşağıdaki eşleştirme kesin bir kural değil, bir başlangıç noktasıdır:",
        ],
        liste: [
          "Restoran ve kafe: Meta Ads önce gelir. Mekan atmosferi ve yemek görseli karar verdirir; Google tarafında ise işletme profili ve harita görünürlüğü çoğu zaman reklamdan daha değerlidir.",
          "Klinik ve sağlık: arama niyeti güçlü olduğu için Google Ads önemlidir, ancak sağlık reklamlarındaki mevzuat sınırları her iki kanalda da dikkat ister. Meta tarafı daha çok bilgilendirme ve güven içeriğiyle çalışır.",
          "E-ticaret: yeni ürün ya da yeni marka için Meta Ads talep yaratır; bilinen ürün kategorilerinde Google'daki alışveriş ve arama reklamları hazır alıcıyı yakalar. Çoğu marka ikisini birlikte kullanır.",
          "B2B, üretici ve toptancı: karar süreci uzundur ve arama odaklıdır. Google Ads genelde önce gelir; Meta ve LinkedIn marka tanınırlığı için ikinci adımdır.",
          "Yerel hizmetler (tesisatçı, çilingir, oto servis gibi): acil ihtiyaç Google'da aranır. Google Ads ve Haritalar görünürlüğü önce gelir.",
          "Spor kulübü, kurs ve okul: kayıt dönemlerinde bölgesel hedefli Meta reklamı veli ve öğrenci kitlesine doğrudan ulaşır.",
          "Otel ve konaklama: planlı ve görsel bir karar olduğu için Meta Ads ilham yaratır; tarih ve bölge araması yapan kişiyi ise Google yakalar. Sezon öncesinde Meta, sezon içinde Google ağırlığı sık kurulan bir dengedir.",
        ],
      },
      {
        baslik: "Sınırlı bütçede tek kanalla başlamak",
        paragraflar: [
          "Bütçe küçükse iki kanala bölmek, ikisinde de yetersiz veri toplamak demektir. Reklam sistemleri doğru kişiyi bulmayı öğrenmek için belirli miktarda gösterim ve etkileşime ihtiyaç duyar. Bütçeyi ikiye bölüp her birine az pay bırakmak, iki kanalın da öğrenme aşamasında takılı kalmasına yol açabilir.",
          "Bu yüzden sınırlı bütçede önerimiz, işletmenin doğasına en uygun tek kanalla başlamak, o kanalda ölçülebilir bir sonuç elde etmek ve ardından ikinci kanalı eklemektir. Hangi kanalın önce geleceğine karar verirken şu soruyu sorun: müşterim beni bulmak için ne yapıyor, arıyor mu, yoksa görünce mi karar veriyor?",
          "Tek kanalla başlarken hedefi de sade tutun. İlk ayda hem bilinirlik hem mesaj hem satış hedefleyen karmaşık bir kurgu yerine tek bir ölçülebilir sonuç seçin: mesaj, form ya da arama. Sistem bu tek hedef üzerinden öğrenir, siz de sonucu net olarak okursunuz.",
        ],
      },
      {
        baslik: "İki kanalı birlikte kullanmak",
        paragraflar: [
          "Bütçe büyüdükçe iki kanal birbirini besler. Meta reklamıyla markanızı tanıyan biri birkaç gün sonra Google'da adınızı arayabilir; Google'dan sitenize gelip karar vermeden ayrılan biri ise Instagram'da hatırlatma reklamıyla yeniden karşılaşabilir. Bu zincir kurulduğunda iki kanalın toplam etkisi, ayrı ayrı çalıştıkları döneme göre daha güçlü olur.",
          "Bu zincirin çalışması için ölçüm altyapısının doğru kurulması şarttır. Web sitesinde Meta Pixel ve Google etiketi kurulu olmalı, form ve satın alma gibi dönüşümler doğru tanımlanmalı, her reklam bağlantısı kaynağını gösteren bir etiketle işaretlenmelidir. Aksi halde hangi kanalın hangi sonucu getirdiğini göremezsiniz.",
          "İki kanalı birlikte kullanırken bütçe dağılımını sabit bir orana bağlamayın. Hangi kanal mesaj ya da satış başına daha düşük maliyetle sonuç getiriyorsa bütçenin ağırlığını oraya kaydırın, diğer kanalı destekleyici rolde tutun. Bu dengeyi aylık raporlarla düzenli olarak gözden geçirmek gerekir.",
        ],
      },
      {
        baslik: "Sonucu nasıl ölçmeli?",
        paragraflar: [
          "Kanalları karşılaştırırken tıklama sayısına değil, işinize dokunan sonuca bakın. Google'da tıklama pahalı olabilir ama gelen kişi satın almaya daha yakındır. Meta'da tıklama ucuz olabilir ama kişi henüz karar aşamasında değildir. Doğru karşılaştırma, bir müşteri mesajı, form ya da satış başına ne harcandığıdır.",
          "Ölçüm penceresini de kısa tutmayın. Özellikle Meta reklamlarında ilk günler öğrenme dönemidir ve sonuçlar dalgalanır. Karar vermeden önce kampanyanın yeterli veri topladığından emin olun; ilk üç günün sonucuna bakıp kampanyayı kapatmak, çoğu zaman sistemin öğrenmesine fırsat vermemek demektir.",
          "Bir de gecikmeli etkiyi hesaba katın. Instagram'da reklamınızı gören biri o gün değil, bir hafta sonra Google'da adınızı arayarak size ulaşabilir. Bu durumda sonuç Google'da görünür ama başlangıcı Meta'dadır. Kanalları yalnızca kendi panellerindeki rakamlarla değil, toplam gelen müşteriyle birlikte değerlendirmek daha doğru bir tablo verir.",
        ],
      },
      {
        baslik: "Bazen doğru cevap ikisi de değildir",
        paragraflar: [
          "Bazı durumlarda önce reklam değil, zemin gelir. Reklamın gönderdiği sayfa yavaşsa, mobilde bozuk görünüyorsa ya da ziyaretçiye ne yapacağını söylemiyorsa bütçe hangi kanalda harcanırsa harcansın boşa gider. Aynı şekilde Google İşletme Profili eksik, yorumları yanıtsız bir işletme için ilk yatırım reklam değil, profilin toparlanması olmalıdır.",
          "Reklamın gönderdiği sayfada ziyaretçi üç şeyi hemen görebilmelidir: ne sunduğunuzu, neden size güvenmesi gerektiğini ve bir sonraki adımı. Telefon, WhatsApp ya da form, hangisi olursa olsun, bu adım tek dokunuşla atılabilmelidir. Bu zemin hazır değilse reklam yalnızca ziyaretçi getirir, müşteri getirmez.",
          "Studio Gria olarak reklam yönetimine başlarken önce bu zemini kontrol ediyoruz: açılış sayfası, ölçüm kurulumu ve profilin durumu. Reklam bütçesi ajans ücretinden ayrı tutulur ve doğrudan sizin reklam hesabınızdan harcanır; her ayın sonunda hangi kanalın ne getirdiğini rakamlarla raporluyoruz.",
        ],
      },
    ],
    anahtarCikarimlar: [
      "Google Ads var olan talebi yakalar, Meta Ads yeni talep yaratır.",
      "Müşteri sizi arıyorsa Google, görünce karar veriyorsa Meta önce gelir.",
      "Sınırlı bütçeyi iki kanala bölmek ikisini de öğrenme aşamasında bırakabilir; tek kanalla başlayın.",
      "Bütçe büyüdüğünde iki kanal birbirini besler, ancak bunun için ölçüm altyapısı doğru kurulmalıdır.",
      "Kanalları tıklamayla değil, mesaj, form ya da satış başına maliyetle karşılaştırın.",
    ],
    sorular: [
      {
        soru: "Küçük işletme Google Ads mı, Instagram reklamı mı vermeli?",
        cevap:
          "Müşterilerinizin sizi nasıl bulduğuna bakın. Hizmetinizi Google'da arıyorlarsa Google Ads, sosyal medyada görünce karar veriyorlarsa Instagram reklamı önce gelir. Bütçe sınırlıysa tek kanalla başlayıp sonuç aldıktan sonra ikincisini eklemek daha verimlidir.",
      },
      {
        soru: "Restoranlar için hangi reklam kanalı daha etkili?",
        cevap:
          "Restoranlarda karar genelde görselle verilir, bu yüzden Meta Ads çoğu zaman önce gelir. Google tarafında ise reklamdan önce Google İşletme Profili ve harita görünürlüğü toparlanmalıdır; mekan arayan kişi çoğunlukla haritadan seçim yapar.",
      },
      {
        soru: "Google Ads ve Meta Ads aynı anda kullanılabilir mi?",
        cevap:
          "Evet, bütçe yeterliyse iki kanal birbirini besler. Meta'da markanızı tanıyan kişi Google'da adınızı arayabilir, sitenize gelip ayrılan kişi Instagram'da hatırlatma reklamı görebilir. Bunun için web sitesinde ölçüm etiketlerinin doğru kurulması gerekir.",
      },
      {
        soru: "Reklam bütçesi ajans ücretine dahil mi?",
        cevap:
          "Hayır. Studio Gria'da reklam bütçesi ajans ücretinden ayrıdır ve doğrudan sizin reklam hesabınızdan Google ya da Meta'ya harcanır. Ajans ücreti kampanya kurgusu, reklam görselleri, düzenli takip ve raporlama karşılığıdır.",
      },
    ],
    etiketler: ["google ads mı meta ads mı", "google ads", "meta ads", "instagram reklamı", "reklam bütçesi"],
    ilgiliHizmetler: ["reklam-yonetimi"],
  },

  {
    slug: "instagram-hesabi-neden-buyumuyor",
    baslik: "Instagram hesabım neden büyümüyor? Teşhis rehberi",
    seoBaslik: "Instagram Hesabım Neden Büyümüyor? Nedenleri ve Çözümü",
    seoAciklama:
      "Düzenli paylaşıyorsunuz ama takipçi artmıyor mu? İçerik amacı, ilk üç saniye, format ve profil hatalarını inceliyor, ne zaman destek gerektiğini anlatıyoruz.",
    ozet:
      "Instagram hesabının büyümemesine yol açan en sık hatalar, takipçi düşüşünün gerçek nedenleri ve ne zaman profesyonel destek almak gerektiği.",
    tarih: "2026-09-28",
    okumaSuresi: 7,
    kategori: "İçerik Üretimi",
    giris:
      "Her gün ya da her hafta paylaşım yapıp hesabın yerinde saydığını görmek yorucudur. Çoğu işletme sahibi bu noktada algoritmayı suçlar ya da hesabının cezalandırıldığını düşünür. Sahada gördüğümüz tablo ise farklı: büyümeyen hesapların büyük kısmında sorun görünmez bir ceza değil, düzeltilebilir birkaç temel hatadır. Aşağıdaki teşhis listesini kendi hesabınıza uygulayarak nereden başlamanız gerektiğini bulabilirsiniz.",
    kisaCevap:
      "Instagram hesabı genelde görünmez bir ceza yüzünden değil, düzeltilebilir hatalar yüzünden büyümez: amacı olmayan içerik, ilk üç saniyede izleyiciyi tutamayan videolar, düzensiz paylaşım, tek bir formata bağlı kalmak ve ziyaretçiyi takipçiye çevirmeyen bir profil. Hesap durumu ekranında bir uyarı yoksa önce bu beş noktayı kontrol edin.",
    bolumler: [
      {
        baslik: "İçerikleriniz kime ve ne için?",
        paragraflar: [
          "Büyümeyen hesaplarda en sık gördüğümüz sorun, içeriklerin bir amaca bağlı olmamasıdır. Bugün ürün, yarın bir özel gün kutlaması, ertesi gün alakasız bir alıntı paylaşılır. Takip etmek için bir neden sunmayan hesap bir kez beğenilir ama takip edilmez.",
          "Her içerikten önce iki soru sorun: bu içerik kime hitap ediyor ve izleyen kişi bundan ne kazanıyor? Bilgi, ilham, eğlence ya da somut bir fayda. Cevap yoksa içerik hesabı dolduruyor ama büyütmüyor demektir. Hesabınızın takip edilmeye değer olmasının nedeni, izleyicinin bir sonraki içerikten de bir şey beklemesidir.",
          "Bunu netleştirmenin pratik yolu, hesabınız için üç ya da dört içerik başlığı belirlemektir. Bir restoran için bu başlıklar menüden bir tabak, mutfağın arkası, mekanın atmosferi ve müşteri anları olabilir. Her paylaşım bu başlıklardan birine oturduğunda hesap tutarlı bir kimlik kazanır ve izleyici ne beklediğini bilir.",
        ],
      },
      {
        baslik: "İlk üç saniye izleyiciyi tutuyor mu?",
        paragraflar: [
          "Reels ve kısa videolarda izleyici birkaç saniye içinde kalmaya ya da geçmeye karar verir. Yavaş bir girişle, logo animasyonuyla ya da bağlamsız bir görüntüyle açılan videolar, içerik ne kadar iyi olursa olsun izlenmeden geçilir. Platform da az izlenen videoyu daha az kişiye gösterir.",
          "Videonun en ilginç anını, sorusunu ya da sonucunu başa alın. İlk karede ne gördüğümüzü ve neden izlemeye devam etmemiz gerektiğini anlatan kısa bir yazı ekleyin. Hesabınızın istatistiklerinde videoların ortalama izlenme süresine bakarsanız sorunun burada olup olmadığını hızla görürsünüz.",
          "Kapak görseli de ilk izlenimin parçasıdır. Profilde ve akışta görünen kapak karesi, videonun ne anlattığını tek bakışta söylemelidir. Bulanık bir ara kare yerine konuyu özetleyen net bir kare seçmek hem izlenmeyi hem profil düzenini iyileştirir.",
        ],
      },
      {
        baslik: "Düzensiz paylaşım ve uzun sessizlikler",
        paragraflar: [
          "Üç hafta boyunca her gün paylaşıp sonra bir ay susan hesaplar, her dönüşte sıfırdan başlıyor gibi hisseder. Düzen, takipçinin sizi beklemesini ve platformun hesabınızı tanımasını sağlar. Burada kilit kelime sıklık değil süreklilik: haftada üç iyi içerik, bir hafta her gün paylaşıp ardından bir ay susmaktan daha iyi çalışır.",
          "Sürekliliği sağlamanın en pratik yolu içerikleri önceden üretip bir takvime bağlamaktır. Tek bir çekim gününde birkaç haftalık içeriğin ham maddesini toplamak, günlük “bugün ne paylaşsak” telaşını ortadan kaldırır.",
          "Yayın saatleri konusunda genel tavsiyeler yerine kendi hesabınızın verisine bakın. Instagram istatistiklerinde takipçilerinizin en aktif olduğu saatler görünür. Birkaç hafta boyunca bu saatlerde paylaşım yapıp sonuçları karşılaştırmak, hangi saatin sizin kitleniz için işe yaradığını gösterir. İyi çalışan bir formatı farklı ürünlerle ya da farklı müşteri hikayeleriyle yeniden kullanmaktan da çekinmeyin; her seferinde sıfırdan fikir aramaktan hem daha hızlı hem daha etkilidir.",
        ],
      },
      {
        baslik: "Yanlış format, yanlış yerde",
        paragraflar: [
          "Instagram'da her format farklı bir işe yarar. Reels yeni kişilere ulaşmak için, karusel kaydedilen ve paylaşılan bilgi için, hikaye ise mevcut takipçiyle ilişkiyi sıcak tutmak için güçlüdür. Yalnızca tek görsel paylaşan bir hesap, yeni kişilere ulaşma şansının büyük kısmını kullanmıyor demektir.",
          "Kalite de formatın parçasıdır. Karanlık, titrek ya da sesi anlaşılmayan videolar izleyiciyi erken kaybettirir. Profesyonel ekipman her zaman şart değil, ama iyi ışık, sabit kadraj ve temiz ses şarttır. Çekimi planlarken dikey formatı baştan düşünün; yatay çekilip sonradan kırpılan videolar önemli detayları kaybeder.",
          "Karuselin gücü sıkça hafife alınır. Adım adım bir anlatım, önce ve sonra karşılaştırması ya da kısa bir rehber, izleyicinin gönderiyi kaydetmesine ve arkadaşına göndermesine yol açar. Kaydedilen ve paylaşılan içerik platform için değerli bir sinyaldir ve hesabın yeni kişilere ulaşmasına katkı sağlar.",
        ],
      },
      {
        baslik: "Profiliniz ziyaretçiyi takipçiye çeviriyor mu?",
        paragraflar: [
          "Bir içeriğiniz yayılıp profilinize ziyaret geldiğinde karar birkaç saniyede verilir. Profil fotoğrafı, isim alanı, biyografi ve son gönderiler bu kararı belirler. Ne yaptığınızı, kime hizmet verdiğinizi ve nerede olduğunuzu anlatmayan bir biyografi, gelen ziyaretçiyi kaybettirir.",
          "Biyografiye tek cümlelik net bir tanım, konum ve bir sonraki adımı gösteren bağlantı ekleyin. Öne çıkan hikayelerde menü, fiyat aralığı, referanslar ya da sık sorulanlar gibi karar vermeyi kolaylaştıran başlıklar kullanın. Profilinizi hiç tanımayan biri gibi açıp beş saniyede ne anladığınıza bakın; bu basit test çoğu sorunu gösterir.",
          "Etkileşime yanıt vermek de dönüşümün parçasıdır. Yorumlara ve mesajlara geç ya da hiç yanıt verilmeyen bir hesap, ziyaretçiye burada kimsenin olmadığı izlenimini verir. Kısa ve samimi yanıtlar hem ilişkiyi güçlendirir hem de gönderinin etkileşimini artırır.",
        ],
      },
      {
        baslik: "Takipçi sayısı neden düşer, hesap cezalı mı?",
        paragraflar: [
          "Takipçi sayısındaki ani düşüşlerin önemli bir kısmı, platformun sahte ve pasif hesapları temizlemesinden kaynaklanır. Geçmişte takipçi satın alınmış ya da takip edip bırakma yöntemiyle büyütülmüş hesaplarda bu düşüş daha belirgindir. Bu, hesabınızın cezalandırıldığı anlamına gelmez; aksine kalan kitle daha gerçektir.",
          "Takipçi sayısına takılmak yerine hesabın sağlığını gösteren rakamlara bakmak daha doğru bir teşhis sağlar: içeriklerin kaç yeni kişiye ulaştığı, profil ziyaretlerinin ne kadarının takibe dönüştüğü ve gelen mesaj sayısı. Takipçi sayısı sabit kalırken bu rakamlar yükseliyorsa hesap aslında doğru yönde ilerliyordur.",
          "Sık duyulan “gizli engel” meselesine gelince: topluluk kurallarını ihlal eden içerikler dağıtımda kısıtlanabilir ve Instagram bunu uygulama içindeki hesap durumu ekranında gösterir. Orada bir uyarı yoksa, erişimdeki düşüşün nedenini büyük ihtimalle içerikte, düzende ya da formatta aramak gerekir. Takipçi satın almak, otomatik takip araçları kullanmak ve etkileşim grupları ise uzun vadede erişimi düşüren yöntemlerdir; uzak durun.",
          "Bir başka yaygın neden, sizi takip eden kitlenin hedef müşterinizle örtüşmemesidir. Çekilişlerle ya da alakasız hesaplarla etkileşimle toplanan takipçiler bir süre sonra hesaptan kopar; kalan kitle ise içeriğinizle ilgilenmediği için erişimi aşağı çeker.",
        ],
      },
      {
        baslik: "Ne zaman profesyonel destek almalı?",
        paragraflar: [
          "Yukarıdaki maddeleri üç ay boyunca düzenli olarak uyguladığınız halde hesap hâlâ yerinde sayıyorsa, sorun genelde içerik stratejisinde ya da üretim kalitesindedir. Bu noktada dışarıdan bir göz, içeriden göremediğinizi görür.",
          "Profesyonel destek her zaman tam devir anlamına gelmez. Bazı hesaplarda eksik olan yalnızca düzenli prodüksiyondur; ayda bir ya da iki çekim günüyle toplanan ham madde, hesabın kalitesini belirgin şekilde yükseltir. Bazı hesaplarda ise sorun yöndedir ve bir strateji çalışması yeterli olur. Hangisinin gerektiğini anlamak için önce mevcut durumu ve hedefi birlikte netleştirmek gerekir.",
          "Studio Gria olarak işe hedefinizi dinleyerek başlıyor, ardından içerik planını ve üretim kapsamını net yazan ücretsiz bir teklif sunumu hazırlıyoruz. Çekimleri sahada kendi ekibimiz yapıyor, her ayın sonunda erişim, profil ziyareti ve gelen mesaj gibi işinize dokunan rakamları raporluyoruz.",
        ],
      },
    ],
    anahtarCikarimlar: [
      "Büyümeyen hesapların çoğunda sorun ceza değil; amaç, düzen, format ve profil hatalarıdır.",
      "Videolarda ilk üç saniye izleyicinin kalıp kalmayacağını belirler; en güçlü anı başa alın.",
      "Süreklilik sıklıktan önemlidir: haftada üç iyi içerik, dağınık yoğun dönemlerden daha iyi çalışır.",
      "Reels yeni kişiye, karusel kayda, hikaye mevcut takipçiyle ilişkiye hizmet eder.",
      "Takipçi satın almak ve otomatik takip araçları uzun vadede erişimi düşürür.",
    ],
    sorular: [
      {
        soru: "Instagram'da takipçim neden artmıyor?",
        cevap:
          "En sık nedenler amacı olmayan içerik, izleyiciyi ilk saniyelerde tutamayan videolar, düzensiz paylaşım ve ne yaptığınızı anlatmayan bir profildir. Hesap durumu ekranında bir uyarı yoksa sorunu bu dört noktada arayın ve değişiklikleri en az birkaç hafta sürdürerek etkisini ölçün.",
      },
      {
        soru: "Instagram takipçi sayısı neden aniden düşer?",
        cevap:
          "Ani düşüşlerin önemli bir kısmı, platformun sahte ve pasif hesapları temizlemesinden kaynaklanır. Bu durum hesabınızın cezalandırıldığı anlamına gelmez; kalan kitle daha gerçektir. Geçmişte takipçi satın alınmış hesaplarda düşüş daha belirgin olur.",
      },
      {
        soru: "Hesabımın kısıtlandığını nasıl anlarım?",
        cevap:
          "Instagram, topluluk kurallarını ihlal eden içerikleri ve hesabınızın durumunu uygulama içindeki hesap durumu ekranında gösterir. Orada bir uyarı yoksa erişimdeki düşüşün nedeni büyük ihtimalle içerik, düzen ya da format kaynaklıdır.",
      },
      {
        soru: "Haftada kaç paylaşım yapmalıyım?",
        cevap:
          "Sabit bir sayıdan çok süreklilik önemlidir. Sürdürebileceğiniz bir ritim seçin; haftada üç güçlü içerik, bir hafta her gün paylaşıp ardından susmaktan daha iyi sonuç verir. İçerikleri önceden üretip bir takvime bağlamak bu ritmi korumayı kolaylaştırır.",
      },
    ],
    etiketler: [
      "instagram hesabı neden büyümüyor",
      "instagram takipçi artırma",
      "instagram algoritması",
      "reels izlenme",
      "sosyal medya yönetimi",
    ],
    ilgiliHizmetler: ["sosyal-medya-yonetimi", "fotograf-video-produksiyon"],
  },

  {
    slug: "meta-reklam-hesabi-kisitlandi",
    baslik: "Meta reklam hesabınız kısıtlandı mı? Adım adım ne yapmalı",
    seoBaslik: "Meta Reklam Hesabı Kısıtlandı mı? Adım Adım Çözüm",
    seoAciklama:
      "Reklamınız mı reddedildi, hesabınız mı kısıtlandı? Farkı, sık nedenleri, Hesap Kalitesi ekranından itiraz adımlarını ve tekrarını önlemeyi anlatıyoruz.",
    ozet:
      "Reklam reddi ile hesap kısıtlaması arasındaki fark, sık görülen nedenler, Hesap Kalitesi ekranından itiraz adımları ve tekrarını önleme yolları.",
    tarih: "2026-09-28",
    okumaSuresi: 7,
    kategori: "Reklam Yönetimi",
    giris:
      "Kampanya yayındayken gelen “reklam hesabınız kısıtlandı” bildirimi, özellikle satışları reklama bağlı işletmeler için panik anıdır. Bu anda yapılan aceleci hamleler, örneğin yeni hesap açıp aynı reklamı tekrar yayınlamak, durumu çoğu zaman daha da zorlaştırır. Bu yazıda önce neyle karşı karşıya olduğunuzu nasıl anlayacağınızı, ardından itiraz sürecini ve tekrarını önlemek için neler yapılabileceğini anlatıyoruz.",
    kisaCevap:
      "Meta reklam hesabınız kısıtlandıysa önce Hesap Kalitesi ekranında hangi varlığın etkilendiğini ve gerekçeyi kontrol edin. Sorunlu reklamı ya da ayarı düzeltin, ardından aynı ekrandan inceleme talep edin. Bu süreçte yeni hesap açıp aynı reklamı yayınlamayın; Meta bunu kuralları dolanma girişimi sayabilir ve sorun diğer varlıklarınıza yayılabilir.",
    bolumler: [
      {
        baslik: "Reklam reddi mi, hesap kısıtlaması mı?",
        paragraflar: [
          "İlk yapılması gereken, sorunun büyüklüğünü doğru teşhis etmektir. Tek bir reklamın reddedilmesi, o reklamın metninde, görselinde ya da gönderdiği sayfada politikalara uymayan bir unsur bulunduğu anlamına gelir. Diğer reklamlarınız yayında kalır; düzeltme yapıp yeniden gönderebilir ya da karara itiraz edebilirsiniz.",
          "Reddedilen bir reklamı hiç düzeltmeden tekrar tekrar göndermek ise en sık yapılan hatalardan biridir. Her ret hesabın geçmişine işlenir ve kısa sürede biriken retler, tek bir reklam sorununu hesap düzeyinde bir kısıtlamaya dönüştürebilir. Önce reddin nedenini anlayın, sonra düzeltin, ancak ondan sonra yeniden gönderin.",
          "Hesap kısıtlaması ise daha geniş bir durumdur. Reklam hesabı, işletme portföyü ya da reklamları yöneten kişisel profil reklam yayınlayamaz hale gelir. Hangi varlığın kısıtlandığını bilmeden itiraz etmek zaman kaybettirir. Bu bilgiyi Meta'nın Hesap Kalitesi ekranında görebilirsiniz.",
          "Bir üçüncü durum da tek bir kişinin reklam yetkisinin kısıtlanmasıdır. Reklamları yöneten profil kısıtlandığında hesap ve işletme portföyü sağlam olsa bile o kişi reklam yayınlayamaz. Bu yüzden işletme portföyünde birden fazla güvenilir yöneticinin bulunması, tek bir profile bağımlılığı azaltır.",
        ],
      },
      {
        baslik: "Kısıtlamanın sık görülen nedenleri",
        paragraflar: [
          "Kısıtlamanın nedenini anlamak doğru itirazın ilk şartıdır. Aynı bildirimi alan iki işletmeden biri ödeme sorunu, diğeri politika ihlali yaşıyor olabilir ve iki durumun çözümü tamamen farklıdır.",
          "Meta her kısıtlamanın ayrıntılı gerekçesini paylaşmaz, ancak sahada karşılaştığımız durumlar belirli başlıklarda toplanıyor:",
        ],
        liste: [
          "Reklam politikalarına aykırı içerik: abartılı vaatler, önce ve sonra karşılaştırmaları, kişisel özelliklere doğrudan hitap eden metinler.",
          "Kısa sürede tekrarlanan ret: aynı sorunlu reklamın küçük değişikliklerle tekrar tekrar gönderilmesi.",
          "Ödeme sorunları: reddedilen kart, ödenmemiş bakiye ya da ödeme yöntemindeki uyumsuzluk.",
          "Güvenlik şüphesi: yetkisiz giriş, olağandışı konumdan erişim ya da ele geçirilmiş bir profil.",
          "Açılış sayfası sorunları: çalışmayan, reklamla uyuşmayan ya da yanıltıcı bulunan web sayfaları.",
          "Yeni hesapta ani yüksek harcama: geçmişi olmayan bir hesabın ilk günden büyük bütçeyle başlaması.",
        ],
      },
      {
        baslik: "Hassas sektörlerde neden daha sık yaşanıyor?",
        paragraflar: [
          "Sağlık, estetik, finans, kilo verme ve benzeri kategorilerde reklam politikaları daha sıkı uygulanır. Bu sektörlerde tek bir cümle, örneğin kesin sonuç vaadi ya da izleyicinin bir sağlık durumuna doğrudan hitap eden bir ifade, reklamın reddedilmesine yetebilir. Tekrarlanan retler de zamanla hesabın genel değerlendirmesini olumsuz etkiler.",
          "Bu sektörlerde reklam metni ve görseli yayına girmeden önce ayrıca gözden geçirilmelidir. Bilgilendirici, sakin ve abartısız bir dil hem politikalara uyumu kolaylaştırır hem de izleyicide daha fazla güven yaratır.",
          "Görsel tarafında da aynı dikkat gerekir: vücut odaklı yakın çekimler, önce ve sonra karşılaştırmaları ya da abartılı sonuç gösteren görüntüler bu kategorilerde sıkça sorun çıkarır. Hassas sektörlerde reklam öncesi bir iç onay adımı kurmak da işe yarar; metni yazan kişiden farklı biri reklamı politikalar açısından okumadan yayına almayın.",
        ],
      },
      {
        baslik: "Hesap Kalitesi ekranından itiraz adımları",
        paragraflar: [
          "İtiraz etmeden önce ekran görüntüleri almak ve durumu not etmek faydalıdır. Hangi tarihte hangi bildirimin geldiğini, hangi reklamın etkilendiğini ve neyin düzeltildiğini kaydetmek, destek ekibiyle yazışırken işinizi kolaylaştırır.",
          "İtiraz sürecinin merkezi, Meta Business Suite ve Reklam Yöneticisi üzerinden erişilen Hesap Kalitesi ekranıdır. Burada kısıtlanan varlıklar, gerekçe başlığı ve varsa inceleme talep etme seçeneği görünür. Genel adımlar şöyledir:",
        ],
        liste: [
          "Hesap Kalitesi ekranında hangi varlığın kısıtlandığını kontrol edin: reklam hesabı, işletme portföyü, sayfa ya da kişisel profil.",
          "Gösterilen gerekçeyi okuyun ve ilgili reklamı ya da ayarı itiraz etmeden önce düzeltin.",
          "İnceleme talep et seçeneğini kullanın; istenirse kimlik doğrulamasını ve iki adımlı doğrulamayı tamamlayın.",
          "Açıklama alanı varsa kısa, net ve dürüst bir açıklama yazın; neyi düzelttiğinizi belirtin.",
          "Sonucu bekleyin ve bu sürede yeni hesap açarak aynı reklamı yayınlamayın.",
        ],
      },
      {
        baslik: "Yeni hesap açmak neden çözüm değil?",
        paragraflar: [
          "İnceleme süresi duruma göre değişir ve Meta bir süre taahhüdü vermez. Bu bekleme sırasında ilk akla gelen, yeni bir reklam hesabı ya da yeni bir işletme portföyü açıp devam etmektir. Meta, kısıtlanmış varlıklarla bağlantılı yeni hesapları tespit edebilir ve bu girişimi kuralları dolanma olarak değerlendirebilir. Bu durumda sorun tek bir hesaptan tüm varlıklarınıza yayılabilir.",
          "Doğru yol, mevcut itirazı sonuçlandırmak ve kısıtlamaya yol açan nedeni ortadan kaldırmaktır. Takıldığınız noktada İşletme Destek Ana Sayfası üzerinden destek talebi oluşturabilirsiniz. Kalıcı kısıtlama gibi istisnai durumlarda bile önce Meta'nın destek kanallarından hangi seçeneklerin kaldığını öğrenmek gerekir.",
          "Kişisel profiller için de aynı ilke geçerlidir. Kısıtlanan bir profil yerine başka bir kişinin profilinden aynı reklamları yönetmeye çalışmak, sorunun o profile de sıçramasına neden olabilir. Bekleme süresinde yapılacak en verimli iş zemini sağlamlaştırmaktır: iki adımlı doğrulamayı tüm yöneticilerde açın, ödeme yöntemini kontrol edin ve açılış sayfalarınızı gözden geçirin.",
        ],
      },
      {
        baslik: "Yeni hesaplarda güven nasıl oluşur?",
        paragraflar: [
          "Geçmişi olmayan hesaplar sistem tarafından daha dikkatli izlenir. İşletme portföyünü doğrulamak, reklamları yöneten herkeste iki adımlı doğrulamayı açmak, ödeme yöntemini hesabın sahibiyle uyumlu tutmak ve web sitenizin alan adını doğrulamak bu güvenin temel taşlarıdır.",
          "Reklam hesabını kimin, hangi cihazdan yönettiği de güven sinyalinin parçasıdır. Hesaba ortak şifreyle girmek yerine her kişiyi işletme portföyüne kendi profiliyle ve gereken yetkiyle eklemek hem güvenliği artırır hem de bir sorun çıktığında kimin ne yaptığını izlemeyi kolaylaştırır.",
          "Harcamayı da kademeli artırmak gerekir. İlk günden yüksek bütçeyle başlamak yerine, politikalara net biçimde uyan reklamlarla makul bir bütçeyle başlayıp performans geldikçe artırmak, hesabın hem öğrenmesini hem de güven kazanmasını sağlar.",
          "Web sitenizin alan adını işletme portföyünde doğrulamak ve siteye Meta Pixel ile olay ölçümünü doğru kurmak da hesabın gerçek bir işletmeye ait olduğunu gösteren sinyallerdir. Reklamın gönderdiği sayfanın gerçek iletişim bilgisi, gizlilik politikası ve net bir ürün ya da hizmet anlatımı içermesi de önemlidir.",
        ],
      },
      {
        baslik: "Tekrarını önlemek için kontrol listesi",
        paragraflar: [
          "Kısıtlamaların çoğu, reklam yayına girmeden önce yapılacak basit bir kontrolle önlenebilir. Her yeni kampanyadan önce şunlara bakın: metin kesin sonuç vaadi, abartılı iddia ya da kişisel özelliğe doğrudan hitap içeriyor mu; görsel, reklamın gönderdiği sayfadaki ürün ya da hizmetle birebir uyumlu mu; açılış sayfası hızlı açılıyor, mobilde düzgün görünüyor ve iletişim bilgisi içeriyor mu; ödeme yöntemi güncel mi?",
          "Bu kontrolü yalnızca bir kez değil, her kampanyada uygulamak gerekir. Politikalar zaman içinde güncellenir ve bir dönem sorunsuz yayınlanan bir reklam sonraki dönemde reddedilebilir. Düzenli kontrol sürprizleri en aza indirir.",
          "Studio Gria'da reklam yönetimini bu kontrol düzeniyle yürütüyoruz. Reklam bütçesi ajans ücretinden ayrı tutulur ve doğrudan sizin reklam hesabınızdan harcanır; böylece hesap ve geçmişi her zaman işletmenin üzerinde kalır.",
        ],
      },
    ],
    anahtarCikarimlar: [
      "Tek bir reklamın reddi ile hesabın kısıtlanması farklı durumlardır; önce hangisi olduğunu teşhis edin.",
      "Hesap Kalitesi ekranı, kısıtlanan varlığı, gerekçeyi ve inceleme seçeneğini gösteren merkezdir.",
      "İtiraz etmeden önce sorunu düzeltin ve açıklamada neyi değiştirdiğinizi belirtin.",
      "Kısıtlama sürerken yeni hesap açmak sorunu büyütebilir.",
      "İki adımlı doğrulama, doğrulanmış işletme portföyü ve kademeli bütçe artışı yeni hesaplarda güveni artırır.",
    ],
    sorular: [
      {
        soru: "Meta reklam hesabım neden kısıtlandı?",
        cevap:
          "En sık nedenler reklam politikalarına aykırı içerik, kısa sürede tekrarlanan retler, ödeme sorunları, güvenlik şüphesi ve sorunlu açılış sayfalarıdır. Meta ayrıntılı gerekçeyi her zaman paylaşmaz, ancak Hesap Kalitesi ekranında gerekçe başlığını görebilirsiniz.",
      },
      {
        soru: "Kısıtlanan reklam hesabına nasıl itiraz edilir?",
        cevap:
          "Hesap Kalitesi ekranında kısıtlanan varlığı seçin, gerekçeyi okuyun ve sorunu düzelttikten sonra inceleme talep edin. İstenirse kimlik ve iki adımlı doğrulamayı tamamlayın. Takıldığınız noktada İşletme Destek Ana Sayfası üzerinden destek talebi açabilirsiniz.",
      },
      {
        soru: "İtiraz sonucu ne kadar sürede gelir?",
        cevap:
          "Süre duruma göre değişir ve Meta kesin bir süre taahhüt etmez. Bu sürede aynı reklamı yeni bir hesaptan yayınlamamak ve aynı itirazı tekrar tekrar göndermemek önemlidir.",
      },
      {
        soru: "Yeni bir reklam hesabı açarak devam edebilir miyim?",
        cevap:
          "Kısıtlama sürerken önerilmez. Meta, kısıtlanmış varlıklarla bağlantılı yeni hesapları tespit edebilir ve bunu kuralları dolanma olarak değerlendirebilir. Doğru yol mevcut itirazı sonuçlandırmak ve kısıtlamaya yol açan nedeni ortadan kaldırmaktır.",
      },
    ],
    etiketler: [
      "meta reklam hesabı kısıtlandı",
      "facebook reklam hesabı kapatıldı",
      "instagram reklamı reddedildi",
      "hesap kalitesi",
      "meta reklam politikaları",
    ],
    ilgiliHizmetler: ["reklam-yonetimi"],
  },

  {
    slug: "spor-kulubu-sosyal-medya-yonetimi",
    baslik: "Spor kulüpleri ve spor okulları için sosyal medya yönetimi",
    seoBaslik: "Spor Kulübü Sosyal Medya Yönetimi: Kayıt ve Sponsor Rehberi",
    seoAciklama:
      "Spor kulübü ve spor okulları için içerik türleri, kayıt dönemi kampanya takvimi, veliye yerel reklam, çocuk sporcu görsellerinde izin ve sponsor dosyası.",
    ozet:
      "Spor kulübü ve spor okullarında içerik karması, kayıt dönemi kampanya takvimi, veli kitlesine yerel reklam, çocuk sporcu görsellerinde izin ve sponsor medya kiti.",
    tarih: "2026-09-28",
    okumaSuresi: 8,
    kategori: "Sektörel",
    giris:
      "Spor kulüplerinin sosyal medyası, çoğu işletmeninkinden daha zengin bir ham maddeye sahiptir: maçlar, antrenmanlar, başarılar, sporcu hikayeleri. Buna rağmen birçok kulüp hesabı yalnızca maç sonuçlarını ve kutlama mesajlarını paylaşan bir duyuru panosuna dönüşür. Oysa doğru kurgulanmış bir sosyal medya kulübe yeni sporcu kazandırır, velinin güvenini inşa eder ve sponsor görüşmelerinde elinizi güçlendirir. Beylikdüzü İhtisas Spor Kulübü, Büyükçekmece Atletik Spor Kulübü ve Beşiktaş Spor Kulübü gibi kulüplerle yürüttüğümüz çalışmalardan çıkan pratik bir çerçeveyi paylaşıyoruz.",
    kisaCevap:
      "Spor kulübü sosyal medyası yalnızca maç sonucu paylaşan bir duyuru panosu olmamalıdır. Maç günü, antrenman, sporcu hikayesi ve veliye dönük bilgilendirme içeriklerini dengeleyin; kayıt dönemlerinden birkaç hafta önce yerel hedefli reklam kampanyası başlatın; çocuk sporcu görselleri için veliden yazılı izin alın ve hesabın verilerini sponsorlar için bir medya kitine dönüştürün.",
    bolumler: [
      {
        baslik: "Hangi içerikler işe yarıyor?",
        paragraflar: [
          "Kulübün hangi branşta, hangi yaş gruplarında ve hangi seviyede faaliyet gösterdiği içerik tonunu belirler. Profesyonel bir takımın hesabı ile bir çocuk spor okulunun hesabı aynı dili kullanmaz; birincisi taraftarla, ikincisi veliyle konuşur.",
          "Spor kulübü hesabında içerik, kimin izlediğine göre kurgulanmalıdır. Sporcular kendilerini görmek ister, veliler çocuklarının güvende olduğunu ve geliştiğini görmek ister, taraftar ve çevre ise kulübün canlı olduğunu. Bu üç kitleyi dengeleyen bir içerik karması şöyle kurulabilir:",
        ],
        liste: [
          "Maç ve müsabaka günü: kadro duyurusu, maç anından kısa kesitler, sonuç ve öne çıkan an.",
          "Antrenman içerikleri: çalışma yöntemleri, antrenörün kısa anlatımı, gelişimi gösteren karşılaştırmalar.",
          "Sporcu hikayeleri: bir sporcunun kulüpteki yolculuğu, hedefi, başarısı.",
          "Veliye dönük bilgilendirme: yaş grupları, antrenman saatleri, tesis ve ulaşım bilgisi, kayıt süreci.",
          "Kulüp kültürü: tesis, ekip, değerler, sosyal sorumluluk etkinlikleri.",
        ],
      },
      {
        baslik: "Samimiyet neden tasarımdan önemli?",
        paragraflar: [
          "Spor içeriğinde yüzlerin görünmesi ve anın samimiyeti, parlak tasarımdan daha önemlidir. Antrenman sahasında çekilmiş kısa bir video, stüdyoda hazırlanmış bir afişten çok daha fazla etkileşim alır. Sporcular ve aileleri bu içerikleri kendi hesaplarında paylaştıkça kulübün erişimi de doğal yoldan büyür.",
          "Bu yüzden maç günleri ve önemli antrenmanlar için çekim planı yapmak, içerik takviminin omurgasını oluşturur. Tek bir maç gününde çekilen görüntüler; kadro duyurusu, maç anı, sonuç ve hafta içi paylaşılacak kısa kesitler için yeterli ham maddeyi sağlar.",
          "Maç günlerinin dışında kalan haftalar için de bir ritim kurun. Pazartesi haftanın maç özeti, çarşamba antrenmandan bir teknik detay, cuma kadro ya da program duyurusu gibi sabit başlıklar hem ekibin işini kolaylaştırır hem de takipçinin ne zaman ne göreceğini bilmesini sağlar.",
        ],
      },
      {
        baslik: "Kayıt dönemi kampanyası nasıl planlanır?",
        paragraflar: [
          "Spor okulları ve altyapı kulüplerinde yılın belirli dönemleri kayıt açısından belirleyicidir: sezon başı, okulların açıldığı dönem ve yaz okulu öncesi. Bu dönemlerde karar veren kişi çoğunlukla velidir ve karar birkaç haftaya yayılır.",
          "Bu yüzden kayıt kampanyası, kayıtların açılacağı günden birkaç hafta önce başlamalıdır. İlk aşamada kulübü, antrenörleri ve tesisi tanıtan içeriklerle güven kurulur. İkinci aşamada deneme antrenmanı, yaş grupları ve saatler gibi somut bilgiler paylaşılır. Son aşamada kontenjan, kayıt tarihleri ve iletişim kanalı net bir çağrıyla duyurulur.",
          "Veli sorularına hızlı yanıt vermek bu dönemde en az reklam kadar önemlidir. Mesajla gelen bir soru saatlerce yanıtsız kalırsa veli başka bir kulübe yönelebilir. Kulübün, mesajları kimin ve hangi saatlerde yanıtlayacağını kampanya öncesinde netleştirmesi gerekir.",
          "Kampanyayı ölçmek için basit bir düzen kurun: kaç veli mesaj attı, kaçı deneme antrenmanına geldi, kaçı kayıt oldu. Bu üç rakam, bir sonraki dönemde hangi içeriğin ve hangi reklamın daha çok işe yaradığını gösterir.",
        ],
      },
      {
        baslik: "Veli kitlesine yerel reklamla ulaşmak",
        paragraflar: [
          "Spor okulu için İstanbul geneline reklam vermek, bütçenin büyük kısmını hiç gelmeyecek kişilere harcamak demektir. Veliler çocuklarını genellikle evlerine ya da okullarına yakın bir tesise götürür. Meta reklamlarında hedeflemeyi tesisin çevresindeki ilçelerle sınırlamak, bütçeyi gerçekten kayıt olabilecek ailelere yönlendirir.",
          "Reklam içeriğinde de veli bakış açısı öne çıkmalıdır: çocuğun güvende olduğu, eğitimin planlı yürüdüğü ve antrenörlerin deneyimli olduğu. Reklamın mesaj ya da form ile doğrudan iletişime yönlendirmesi veliye soru sorma kolaylığı sağlar ve kulübe ölçülebilir bir sonuç verir.",
          "Kayıt dönemleri dışında reklamı tamamen kapatmak yerine düşük bütçeli bir hatırlatma kampanyası sürdürmek de bir seçenektir. Kulübü tanıyan ama henüz karar vermemiş aileler, bir sonraki kayıt döneminde sizi daha kolay hatırlar.",
        ],
      },
      {
        baslik: "Çocuk sporcu görsellerinde izin ve gizlilik",
        paragraflar: [
          "Altyapı ve spor okullarında paylaşılan içeriklerin büyük kısmında çocuklar yer alır ve bu ayrı bir özen gerektirir. Çocuk sporcuların fotoğraf ve videolarının sosyal medyada paylaşılması için velilerden yazılı izin almak, kişisel verilerin korunması açısından temel bir adımdır. İzin formunu kayıt sürecinin bir parçası haline getirmek en pratik yoldur. Formda fotoğraf ve videoların hangi kanallarda, ne amaçla kullanılacağını açıkça yazmak velinin güvenini de artırır.",
          "İzin alınmış olsa bile bazı kurallar gözetilmelidir: çocuğun tam adı, okulu ya da yaşadığı yer gibi bilgileri paylaşmamak, soyunma odası gibi özel alanlarda çekim yapmamak, izin vermeyen ailelerin çocuklarını kadraj dışında tutmak. Kulüp içinde bu kuralları bilen tek bir sorumlu belirlemek hataları büyük ölçüde önler. Tereddüt duyulan durumlarda bir hukuk danışmanından görüş almak doğru olur.",
        ],
      },
      {
        baslik: "Sponsorlar için sosyal medyayı medya kitine çevirmek",
        paragraflar: [
          "Sponsor görüşmelerinde kulübün sosyal medya hesabı, çoğu zaman sunulan dosyadan önce incelenir. Düzenli, canlı ve kitlesi belli bir hesap, sponsora markasının nerede ve kime görüneceğini gösterir.",
          "Yerel işletmeler, kulüplerin en doğal sponsor adaylarıdır. Kulübe gelen ailelerin yaşadığı mahallede hizmet veren bir restoran, klinik ya da spor mağazası için kulübün sosyal medyası doğrudan hedef kitlesine ulaşan bir kanaldır. Görüşmeye bu somut bağlantıyı göstererek gitmek, sponsorluğu bir bağıştan çok bir iş birliğine dönüştürür.",
          "Bunun için hesabın takipçi kitlesini, erişim ve etkileşim verilerini ve öne çıkan içerik örneklerini tek sayfalık bir medya kitinde toplamak işe yarar. Sponsora sunulacak görünürlüğü de somutlaştırın: forma ve pano görünürlüğünün yanında maç günü içeriklerinde, antrenman videolarında ya da sezon özetlerinde nasıl yer alacağını gösterin. Mevcut sponsorlara sezon sonunda kendi görünürlüklerini gösteren kısa bir rapor sunmak, ilişkinin yenilenmesini kolaylaştırır.",
          "Sponsor içeriklerinde denge önemlidir. Hesabın akışı reklam panosuna dönüşürse takipçi ilgisi düşer ve bu sponsorun da aleyhinedir. Sponsor görünürlüğünü doğal anlara, örneğin maç özetinin kapanışına ya da sezon içi özel bir içeriğe yerleştirmek hem kulübü hem sponsoru korur.",
        ],
      },
      {
        baslik: "Sınırlı bütçeyle nereden başlamalı?",
        paragraflar: [
          "Birçok kulübün bütçesi aidat gelirine bağlıdır ve sosyal medyaya ayrılan kaynak sınırlıdır. Bu durumda öncelik sırası şöyle olmalı: önce düzenli ve samimi içerik akışı, ardından kayıt dönemlerinde yerel hedefli reklam, son olarak sponsorluk için medya kiti. Reklam bütçesini yıl geneline yaymak yerine kayıt dönemlerinde yoğunlaştırmak, sınırlı kaynaktan daha fazla sonuç alınmasını sağlar.",
          "Kulüp içinde görev paylaşımı da bütçe kadar önemlidir. Antrenörlerin ya da yöneticilerin antrenman sırasında çektiği kısa görüntüler, profesyonel çekimle birleştiğinde içerik akışını besler. Kimin neyi çekeceğini ve görüntüleri nereye göndereceğini baştan belirlemek, hiçbir anın kaybolmamasını sağlar.",
          "Studio Gria olarak spor kulüplerinde işe kulübün hedefini ve kayıt takvimini dinleyerek başlıyoruz. Maç ve antrenman çekimlerini sahada kendi ekibimiz yapıyor, reklam bütçesi ise ajans ücretinden ayrı tutulup doğrudan kulübün hesabından harcanıyor. Her ayın sonunda hangi içeriğin ve hangi reklamın ne getirdiğini rakamlarla raporluyoruz.",
        ],
      },
    ],
    anahtarCikarimlar: [
      "Kulüp hesabı üç kitleye hitap eder: sporcu, veli ve çevre; içerik karması bu dengeyi kurmalıdır.",
      "Kayıt kampanyası, kayıtlar açılmadan birkaç hafta önce güven içerikleriyle başlamalıdır.",
      "Spor okulu reklamında hedeflemeyi tesisin çevresindeki ilçelerle sınırlamak bütçeyi korur.",
      "Çocuk sporcu görselleri için veliden yazılı izin almak ve kişisel bilgileri paylaşmamak temel kuraldır.",
      "Düzenli bir hesap, sponsor görüşmelerinde kulübün en güçlü medya kitidir.",
    ],
    sorular: [
      {
        soru: "Spor kulübü Instagram'da ne paylaşmalı?",
        cevap:
          "Maç ve müsabaka günü içerikleri, antrenmanlardan kısa kesitler, sporcu hikayeleri, veliye dönük bilgilendirme ve kulüp kültürünü anlatan içerikler dengeli bir karma oluşturur. Samimi ve yüzlerin göründüğü içerikler, parlak tasarımlardan daha fazla etkileşim alır.",
      },
      {
        soru: "Spor okulu kayıtlarını artırmak için ne zaman reklam verilmeli?",
        cevap:
          "Kayıtların açılacağı tarihten birkaç hafta önce başlamak gerekir. Önce kulübü ve antrenörleri tanıtan içeriklerle güven kurulur, ardından yaş grupları ve saatler paylaşılır, son aşamada kontenjan ve kayıt tarihleri net bir çağrıyla duyurulur.",
      },
      {
        soru: "Çocuk sporcuların fotoğrafları sosyal medyada paylaşılabilir mi?",
        cevap:
          "Veliden yazılı izin alınması temel bir adımdır; izin formunu kayıt sürecine eklemek en pratik yoldur. İzin olsa bile çocuğun tam adı, okulu ya da yaşadığı yer gibi bilgiler paylaşılmamalı, izin vermeyen ailelerin çocukları kadraj dışında tutulmalıdır.",
      },
      {
        soru: "Sosyal medya sponsor bulmaya nasıl yardımcı olur?",
        cevap:
          "Düzenli ve kitlesi belli bir hesap, sponsora markasının kime ve nerede görüneceğini gösterir. Takipçi kitlesini, erişim verilerini ve içerik örneklerini tek sayfalık bir medya kitinde toplamak, sponsor görüşmelerini somut bir zemine taşır.",
      },
    ],
    etiketler: [
      "spor kulübü sosyal medya yönetimi",
      "spor okulu reklam",
      "kayıt kampanyası",
      "sponsorluk",
      "altyapı sosyal medya",
    ],
    ilgiliHizmetler: ["sosyal-medya-yonetimi", "reklam-yonetimi"],
  },

  {
    slug: "yapay-zeka-ile-reklam-filmi",
    baslik: "Yapay zeka ile reklam filmi nasıl yapılır?",
    seoBaslik: "Yapay Zeka ile Reklam Filmi Nasıl Yapılır? Süreç ve Sınırlar",
    seoAciklama:
      "Yapay zeka reklam filmi hangi adımlarla üretilir, klasik çekimden neyle ayrılır, hangi ürünlere uyar? Marka tutarlılığı ve hibrit kullanım için pratik rehber.",
    ozet:
      "Yapay zeka reklam filminin üretim adımları, klasik çekimden farkı, hangi işlere uyup hangilerine uymadığı ve marka tutarlılığı için hibrit yaklaşım.",
    tarih: "2026-09-28",
    okumaSuresi: 8,
    kategori: "İçerik Üretimi",
    giris:
      "Yapay zeka ile üretilen reklam filmleri artık yalnızca teknoloji meraklılarının denediği bir şey değil; ürün lansmanlarından sosyal medya kampanyalarına kadar gerçek markaların işinde kullanılıyor. Ama “bir komut yaz, film hazır” algısı gerçeği yansıtmıyor. İyi bir yapay zeka reklam filmi, klasik prodüksiyon kadar dikkatli bir planlama ve üretim disiplini gerektirir. Bu yazıda süreci adım adım, klasik çekimle farkını ve bu yöntemin hangi işlere uyup hangilerine uymadığını anlatıyoruz.",
    kisaCevap:
      "Yapay zeka ile reklam filmi bir komutla değil, klasik prodüksiyon kadar planlı bir süreçle üretilir: brief, senaryo, stil referansı, sahne üretimi, kurgu ve ses. Set, ekip ve mekan maliyetinin çoğunu ortadan kaldırır; emek deneme, seçme ve kurguya kayar. Ürünü hayali mekanlarda göstermeye uygundur, gerçek bir deneyimin kanıt olarak gösterilmesi gereken işlerde ise gerçek çekim tercih edilmelidir.",
    bolumler: [
      {
        baslik: "Süreç brief ile başlar, komutla değil",
        paragraflar: [
          "Yapay zeka reklam filminin kalitesini belirleyen şey kullanılan araçtan önce brieftir. Filmin kime hitap ettiği, hangi duyguyu uyandırması gerektiği, ürünün hangi özelliğinin öne çıkacağı ve izleyicinin sonunda ne yapması istendiği netleşmeden üretime geçmek, güzel ama amaçsız görüntüler üretir.",
          "Brief netleştikten sonra senaryo yazılır. Kısa bir sosyal medya filminde bile sahne sırası, her sahnenin süresi, metin ve ses planı önceden belirlenir. Bu aşama, klasik prodüksiyondaki senaryo ve çekim listesinin karşılığıdır ve sonraki bütün adımların pusulasıdır.",
          "İyi bir briefte ayrıca filmin nerede yayınlanacağı ve ne kadar süreceği yazar. Instagram'da birkaç saniyede dikkat çekmesi gereken bir video ile web sitesinin ana sayfasında dönecek bir tanıtım filmi farklı kurgulanır. Bu bilgi baştan bilinirse sahneler de buna göre tasarlanır.",
        ],
      },
      {
        baslik: "Stil referansı ve sahne üretimi",
        paragraflar: [
          "Senaryonun ardından filmin görsel dili belirlenir: renk paleti, ışık, kamera hareketi, mekan ve karakterlerin görünümü. Bu kararlar referans görsellerle somutlaştırılır. Stil referansı ne kadar net olursa, farklı sahnelerde üretilen görüntüler o kadar birbirine benzer ve film bütünlüklü görünür.",
          "Bu aşamada markanın mevcut görsel arşivi de değerli bir kaynaktır. Daha önce çekilmiş ürün fotoğrafları, kampanya görselleri ve kurumsal kimlik kılavuzu, yapay zekanın markaya uygun sonuç üretmesini kolaylaştırır. Arşivi olmayan markalarda ise önce kısa bir ürün çekimi yapmak, sonraki bütün sahnelerin kalitesini yükseltir.",
          "Üretim aşamasında her sahne için çok sayıda deneme yapılır ve en iyi sonuçlar seçilir. Ürün görünümü, logo ve ambalaj gibi markaya ait unsurların sahneden sahneye bozulmadan kalması bu aşamanın en zor kısmıdır. Burada gerçek ürün fotoğraflarından yararlanmak ve her sahneyi ürünün kendisiyle karşılaştırarak kontrol etmek gerekir.",
          "Karakter kullanılan filmlerde tutarlılık ayrıca önemlidir. Aynı kişinin farklı sahnelerde yüzü, saçı ya da kıyafeti değişirse izleyici bunu fark eder ve film güvenilirliğini kaybeder. Bu yüzden karakter tasarımı da tıpkı ürün gibi referanslarla sabitlenir ve her sahnede kontrol edilir.",
        ],
      },
      {
        baslik: "Kurgu, ses ve son dokunuşlar",
        paragraflar: [
          "Üretilen sahneler tek başına film değildir. Kurgu aşamasında sahneler ritme göre sıralanır, geçişler ayarlanır, metin ve alt yazılar eklenir. Seslendirme, müzik ve ses efektleri filmin duygusunu belirler; çoğunlukla sessiz izlenen sosyal medya akışı için alt yazılar ayrıca önemlidir.",
          "Son aşamada film yayınlanacağı her format için ayrı ayrı hazırlanır: dikey hikaye ve Reels, kare akış görseli, yatay web videosu. Aynı film, platforma göre farklı bir açılış karesi ve farklı bir uzunlukla daha iyi çalışabilir.",
          "Ses tarafında da kalite belirleyicidir. Doğal duyulmayan bir seslendirme ya da görüntüyle uyuşmayan bir müzik, iyi üretilmiş sahneleri bile ucuz gösterebilir. Metni markanın konuşma tonuna göre yazmak ve seslendirmeyi bu tona uygun seçmek filmin bütününü taşır.",
        ],
      },
      {
        baslik: "Klasik çekimden farkı: süre ve maliyet mantığı",
        paragraflar: [
          "Klasik bir reklam filminde maliyetin büyük kısmı set, ekip, ekipman, mekan, oyuncu ve lojistikten oluşur. Çekim günü planlanır, hava ve ışık beklenir, bir sahnenin yeniden çekilmesi çoğu zaman yeni bir gün demektir. Yapay zeka üretiminde bu kalemlerin çoğu ortadan kalkar; mekan değiştirmek ya da bir sahneyi yeniden üretmek sete dönmeyi gerektirmez.",
          "Bu, yapay zeka üretiminin emeksiz olduğu anlamına gelmez. Emeğin yeri değişir: setteki zaman yerini deneme, seçme, düzeltme ve kurgu zamanına bırakır. Fiyat ve süre de sahne sayısına, filmin uzunluğuna ve istenen kalite düzeyine göre belirlenir. Studio Gria olarak bu kalemleri ücretsiz teklif sunumunda net olarak yazıyoruz.",
          "Bir diğer fark revizyondur. Klasik çekimde çekim bittikten sonra bir sahneyi değiştirmek çoğu zaman mümkün değildir; eldeki görüntülerle yetinilir. Yapay zeka üretiminde ise bir sahnenin rengi, mekanı ya da kamera açısı sonradan yeniden üretilebilir. Bu esneklik, kampanya sürecinde farklı versiyonları denemek isteyen markalar için değerlidir.",
        ],
      },
      {
        baslik: "Hangi işlere uyar, hangilerine uymaz?",
        paragraflar: [
          "Yapay zekanın güçlü olduğu yer, gerçekte kurulması zor ya da pahalı olan sahnelerdir. Bir kozmetik ürününü okyanus kıyısında, bir içeceği karlı bir dağ zirvesinde ya da bir takıyı editoryal bir set içinde göstermek, klasik prodüksiyonda ciddi bir organizasyon gerektirir.",
          "Yapay zeka reklam filmi özellikle şu durumlarda güçlüdür:",
        ],
        liste: [
          "Ürünün hayali ya da ulaşılması zor bir mekanda gösterilmesi gerektiğinde",
          "Kampanya için kısa sürede çok sayıda farklı görsel ve video çeşidi gerektiğinde",
          "Mevsimsel ya da tematik kampanyalarda aynı ürünü farklı atmosferlerde göstermek istendiğinde",
          "Lansman öncesinde bir fikri test etmek için hızlı taslaklar gerektiğinde",
          "Ürün yelpazesi geniş olan e-ticaret markalarında her ürün için ayrı sahne üretmek gerektiğinde",
        ],
      },
      {
        baslik: "Gerçek çekim ne zaman vazgeçilmez?",
        paragraflar: [
          "Gerçek bir mekanın, gerçek bir ekibin ya da gerçek bir deneyimin kanıt olarak gösterilmesi gereken işlerde klasik çekim hâlâ doğru tercihtir. Bir restoranın gerçek atmosferini, bir otelin gerçek odasını ya da bir kliniğin gerçek ekibini yapay zekayla üretmek müşteride yanıltılmışlık hissi yaratır. Kural basit: izleyicinin gerçek sandığı ve buna göre karar vereceği bir şeyi üretilmiş görüntüyle göstermeyin.",
          "En iyi sonuçları genelde gerçek çekim ile yapay zeka üretimini birlikte kullanan işlerde görüyoruz. Ürünün kendisi ve markanın gerçek insanları sahada çekilir; arka planlar, atmosfer ve kampanya varyasyonları yapay zekayla genişletilir. Böylece hem güven veren gerçek görüntü korunur hem de üretim hızı artar. Markanın renk, tipografi ve ton kurallarını bu sürece baştan dahil etmek, üretilen sahnelerin markanın diğer içerikleriyle yan yana konduğunda yabancı durmamasını sağlar.",
          "Hibrit yaklaşımın pratik bir örneği şöyledir: ürün stüdyoda ya da sahada gerçek ışıkla çekilir, ardından bu gerçek ürün görüntüsü farklı mevsimlere, mekanlara ve kampanya temalarına taşınır. Böylece ürün her karede gerçek halini korur, arka plan ise kampanyaya göre değişir.",
        ],
      },
      {
        baslik: "Yayında şeffaflık",
        paragraflar: [
          "Meta başta olmak üzere reklam platformları, yapay zekayla üretilmiş ya da değiştirilmiş içerikler için beyan ve etiket mekanizmaları uyguluyor. Bu kuralların kapsamı ve hangi içeriklerde beyan istendiği zaman içinde değişebildiği için, reklamı yayına almadan önce platformun güncel politikasını kontrol etmek gerekir. Gerçek kişileri ya da gerçekte yaşanmamış olayları gösteren içeriklerde bu konu ayrıca hassastır.",
          "Şeffaflık yalnızca bir kural meselesi değil, aynı zamanda bir güven meselesidir. Ürünü gerçeğe sadık gösteren, abartısız ve markanın gerçek vaatleriyle uyumlu bir film, üretim yöntemi ne olursa olsun izleyicide güven yaratır.",
          "Studio Gria'da yapay zeka üretimlerini bu sınırlar içinde, marka kimliğine ve gerçek ürüne sadık kalarak yürütüyoruz. Gerektiğinde gerçek çekimi sahada kendi ekibimizle tamamlıyor, filmi yayınlanacağı her format için ayrı hazırlıyoruz.",
        ],
      },
    ],
    anahtarCikarimlar: [
      "Yapay zeka reklam filminin kalitesini araçtan önce brief ve senaryo belirler.",
      "Net bir stil referansı, sahneler arasında görsel bütünlüğü sağlar.",
      "Set ve ekip maliyeti azalır, emek deneme, seçme ve kurguya kayar.",
      "İzleyicinin gerçek sanıp karar vereceği mekan, ekip ya da deneyim üretilmiş görüntüyle gösterilmemelidir.",
      "Gerçek çekim ile yapay zeka üretimini birlikte kullanmak hem güveni hem hızı korur.",
      "Yayından önce platformun yapay zeka içerik beyanı kuralları kontrol edilmelidir.",
    ],
    sorular: [
      {
        soru: "Yapay zeka ile reklam filmi yapmak ne kadar sürer?",
        cevap:
          "Süre sahne sayısına, filmin uzunluğuna ve revizyon ihtiyacına göre değişir. Set, mekan ve hava koşulları beklenmediği için planlama klasik çekime göre hızlanır, ancak deneme, seçme ve kurgu aşamaları da zaman ister. Kesin takvim, kapsam netleştikten sonra teklif sunumunda yazılır.",
      },
      {
        soru: "Yapay zeka reklam filmi klasik çekimden ucuz mu?",
        cevap:
          "Set, ekip, ekipman ve mekan kalemlerinin çoğu ortadan kalktığı için birçok işte daha ekonomik olabilir. Ancak maliyet sahne sayısına, filmin uzunluğuna ve istenen kalite düzeyine bağlıdır. Doğru karşılaştırma, aynı kapsam için iki yöntemin teklifini yan yana koymaktır.",
      },
      {
        soru: "Hangi işler için yapay zeka reklam filmi uygun değil?",
        cevap:
          "Gerçek bir mekanın, gerçek bir ekibin ya da gerçek bir deneyimin kanıt olarak gösterilmesi gereken işlerde uygun değildir. Restoranın gerçek atmosferi, otelin gerçek odası ya da kliniğin gerçek ekibi gibi içerikler gerçek çekimle gösterilmelidir.",
      },
      {
        soru: "Yapay zeka ile üretilen reklamlar Instagram'da etiketlenmeli mi?",
        cevap:
          "Meta, yapay zekayla üretilmiş ya da değiştirilmiş bazı içerikler için beyan ve etiket mekanizmaları uygular. Kuralların kapsamı değişebildiği için reklamı yayına almadan önce platformun güncel politikası kontrol edilmelidir.",
      },
    ],
    etiketler: [
      "yapay zeka reklam filmi",
      "ai reklam videosu",
      "yapay zeka video üretimi",
      "reklam filmi prodüksiyon",
      "yapay zeka ürün görseli",
    ],
    ilgiliHizmetler: ["ai-uretim-reklam-filmleri", "fotograf-video-produksiyon"],
  },

  {
    slug: "google-isletme-profili-optimizasyonu",
    baslik: "Google İşletme Profili nasıl optimize edilir? Haritalarda üst sıraya çıkmak",
    seoBaslik: "Google İşletme Profili Nasıl Optimize Edilir?",
    seoAciklama:
      "Google Haritalar'da üst sıraya çıkmak için kategori, ad, adres ve telefon tutarlılığı, fotoğraf, yorum ve web sitesi uyumunu adım adım anlatıyoruz.",
    ozet:
      "Google Haritalar'da üst sıraya çıkmak için kategori seçimi, ad, adres ve telefon tutarlılığı, fotoğraf, yorum ve web sitesi uyumunu adım adım anlatan rehber.",
    tarih: "2026-09-28",
    okumaSuresi: 8,
    kategori: "Yerel Görünürlük",
    giris:
      "Yakınındaki bir restoranı, kliniği ya da hizmet veren bir işletmeyi arayan kişi çoğu zaman web sitelerine bakmadan kararını Google Haritalar'da verir. Arama sonuçlarının üstünde çıkan harita kutusunda yer almak, yerel işletme için çoğu reklamdan daha değerli bir görünürlüktür. Bu görünürlüğün temeli Google İşletme Profili'dir. Bu rehberde profilin nasıl eksiksiz hale getirileceğini ve sıralamayı etkileyen unsurları sade bir dille anlatıyoruz.",
    kisaCevap:
      "Google İşletme Profili'ni optimize etmek için işletmenizi en doğru tanımlayan birincil kategoriyi seçin, adınızı, adresinizi ve telefonunuzu internetin her yerinde aynı yazın, gerçek fotoğraflar ekleyin, profili gönderilerle güncel tutun ve her yoruma yanıt verin. Google yerel sonuçları alaka, mesafe ve öne çıkmaya göre sıralar; mesafe dışındaki iki unsur sizin elinizdedir.",
    bolumler: [
      {
        baslik: "Google yerel sıralamayı neye göre belirler?",
        paragraflar: [
          "Google, yerel sonuçları üç ana unsura göre sıraladığını açıklıyor: alaka, mesafe ve öne çıkma. Alaka, profilinizin aranan şeyle ne kadar örtüştüğüdür; kategoriler, hizmetler ve açıklama bunu belirler. Mesafe, işletmenizin arama yapan kişiye ya da aranan konuma uzaklığıdır ve sizin değiştiremeyeceğiniz tek unsurdur. Öne çıkma ise işletmenizin ne kadar bilindiğidir; yorumlar, puan, web sitenize verilen bağlantılar ve işletmenizin internetteki genel varlığı buna katkı sağlar.",
          "Bu üç unsurdan ikisi sizin elinizdedir. Profil optimizasyonu, alakayı netleştirmek ve öne çıkmayı zaman içinde güçlendirmek demektir.",
          "Aynı aramayı yapan iki kişi, bulundukları konuma göre farklı sonuçlar görebilir. Bu yüzden sıralamanızı yalnızca kendi bilgisayarınızdan kontrol etmek yanıltıcı olabilir; hizmet verdiğiniz farklı mahallelerden yapılan aramalarda nasıl göründüğünüz daha gerçekçi bir tablo verir.",
        ],
      },
      {
        baslik: "Kategori seçimi: en çok gözden kaçan ayar",
        paragraflar: [
          "Birincil kategori, profilin en güçlü alaka sinyalidir. İşletmenizi en doğru tanımlayan tek bir birincil kategori seçin; “restoran” yerine “balık restoranı”, “klinik” yerine “diş kliniği” gibi daha özel bir kategori varsa onu tercih edin. Ek kategoriler ise gerçekten sunduğunuz diğer hizmetleri kapsamalıdır.",
          "Kategorileri rakiplerinizin profillerine bakarak da test edebilirsiniz: hedeflediğiniz aramada üst sıradaki işletmelerin hangi kategorileri kullandığına bakmak doğru seçimi kolaylaştırır. Hizmetler ve ürünler bölümlerini de boş bırakmayın; burada yazdığınız hizmet adları aramalarla eşleşir.",
          "Profil açıklamasını da sıradan bir tanıtım cümlesiyle geçiştirmeyin. Ne yaptığınızı, kime hizmet verdiğinizi ve sizi farklı kılan şeyi sade bir dille anlatın. Açıklamada abartılı iddialar, bağlantılar ya da tekrar eden anahtar kelimeler yerine gerçek bilgiye yer verin.",
        ],
      },
      {
        baslik: "Ad, adres, telefon: tutarlılık neden bu kadar önemli?",
        paragraflar: [
          "İşletmenizin adı, adresi ve telefonu internetin her yerinde aynı yazılmalıdır: Google profiliniz, web siteniz, sosyal medya hesaplarınız, harita uygulamaları ve firma rehberleri. Farklı yazımlar, eski adresler ya da farklı telefon numaraları, Google'ın işletmenize duyduğu güveni zayıflatır.",
          "İşletme adına anahtar kelime eklemek ise sık yapılan ve risk taşıyan bir hatadır. Gerçek işletme adınız “Mavi Diş Kliniği” ise profile “Mavi Diş Kliniği Büyükçekmece En İyi İmplant” yazmak Google'ın kurallarına aykırıdır ve profilin askıya alınmasına yol açabilir. Adı tabeladaki ve resmi kayıttaki haliyle yazın.",
          "Adres ve telefonun yanında çalışma saatleri de tutarlı olmalıdır. Google profilinde açık görünen bir saatte kapalı olan bir işletme hem müşteriyi kaybeder hem de olumsuz yorum riskini artırır. Resmi tatillerde ve özel günlerde saatleri önceden güncellemek bu sorunu önler. Web sitenizdeki saat bilgisinin de profille aynı olmasına dikkat edin.",
        ],
      },
      {
        baslik: "Fotoğraflar ve profilin canlı görünmesi",
        paragraflar: [
          "Profil ziyaretçisi karar vermeden önce fotoğraflara bakar. Dış cephe, giriş, iç mekan, ekip, ürünler ve yapılan işlerden gerçek fotoğraflar ekleyin. Stok görsel ya da aşırı düzenlenmiş fotoğraflar güven vermez; gerçek ve iyi ışıkta çekilmiş kareler verir. Dış cephe fotoğrafı ayrıca müşterinin sizi sokakta tanımasını kolaylaştırır.",
          "Profili düzenli güncellemek de önemlidir. Yeni fotoğraflar, güncel çalışma saatleri, özel gün saatleri ve Gönderiler özelliğiyle paylaşılan duyurular, profilin aktif bir işletmeye ait olduğunu gösterir. Gönderilerde kampanya, yeni ürün, etkinlik ya da mevsimsel duyuru paylaşabilirsiniz.",
          "Müşterilerin eklediği fotoğrafları da takip edin. Bazen profilinizde sizin yüklemediğiniz, düşük kaliteli ya da yanlış bilgi veren görseller öne çıkabilir. Düzenli olarak kendi gerçek ve güncel fotoğraflarınızı, mekanın içini ya da hizmetin nasıl verildiğini gösteren kısa videolarla birlikte eklemek, profilin görsel yüzünü sizin kontrolünüzde tutar.",
        ],
      },
      {
        baslik: "Yorum toplamak ve yanıtlamak",
        paragraflar: [
          "Yorumlar, öne çıkma unsurunun en görünür parçasıdır. Memnun müşteriden yorum istemenin en iyi zamanı hizmetin hemen sonrasıdır. Profilinizin yorum bağlantısını kısa bir teşekkür mesajıyla birlikte göndermek yorum bırakmayı kolaylaştırır. Yorum karşılığında indirim ya da hediye vermek ise Google'ın kurallarına aykırıdır; bundan kaçının.",
          "Gelen her yoruma, olumlu ya da olumsuz, yanıt verin. Olumlu yoruma kısa ve kişisel bir teşekkür, olumsuz yoruma ise savunmaya geçmeden, sorunu kabul eden ve çözüm öneren sakin bir yanıt yazın. Yanıtlar yalnızca yorumu yazan kişiye değil, profili okuyan bütün potansiyel müşterilere yazılır.",
          "Yorum almanın en kolay yolu, bunu hizmet sürecinin sabit bir adımı haline getirmektir. Ödeme sonrası kısa bir teşekkür mesajı, masada ya da tezgahta duran bir yorum kartı ya da randevu sonrası gönderilen bir hatırlatma, yorum sayısını zaman içinde istikrarlı biçimde artırır. Olumsuz yorumlar da bir fırsattır: sakin ve çözüm odaklı bir yanıt, okuyan kişiye işletmenin sorun karşısında nasıl davrandığını gösterir.",
        ],
      },
      {
        baslik: "Hizmet alanı, web sitesi ve profilin uyumu",
        paragraflar: [
          "Müşterisine giden işletmeler, örneğin tesisatçı, temizlik firması ya da çekim ekibi, adres yerine hizmet alanı belirleyebilir. Hizmet verdiğiniz ilçeleri gerçekçi tutun; hizmet vermediğiniz geniş bir alanı seçmek sıralamayı güçlendirmez.",
          "Profildeki özellikler bölümünü de eksiksiz doldurun. Otopark, erişilebilirlik, ödeme seçenekleri ya da rezervasyon gibi bilgiler, ziyaretçinin telefon etmeden karar vermesini kolaylaştırır ve bu özelliklere göre yapılan aramalarda profilinizin eşleşmesine yardımcı olabilir.",
          "Profilin bağlantı verdiği web sayfası da sıralamaya dolaylı katkı sağlar. Sayfada işletme adı, adres ve telefon profille birebir aynı yazılmalı, sunulan hizmetler ve hizmet verilen bölgeler açıkça anlatılmalıdır. Sayfanın mobilde hızlı açılması, profilden gelen ziyaretçiyi kaybetmemenizi sağlar.",
          "Web sitenizde yerel bilgiyi güçlendirmenin bir yolu da hizmet verdiğiniz bölgeler için gerçek içerik barındıran sayfalardır. Her bölgenin kendi ihtiyacını ve örneğini anlatan sayfalar, hem ziyaretçiye hem Google'a nerede çalıştığınızı açıkça gösterir. Aynı metnin yalnızca ilçe adı değiştirilerek çoğaltılması ise tam tersine zarar verir.",
        ],
      },
      {
        baslik: "Sık yapılan hatalar ve sonuç ne zaman gelir?",
        paragraflar: [
          "Profil düzenlemelerinin etkisi hemen görünmeyebilir. Google değişiklikleri işlemek için zamana ihtiyaç duyar ve öne çıkma unsuru ancak düzenli yorum ve güncellemeyle zamanla güçlenir. Kategori ve bilgi düzeltmeleri genelde daha hızlı yansır; yorum ve bilinirlik ise birikerek büyür.",
          "Bu süreçte yapılan yaygın bir hata, sonuç gelmedi diye kısa aralıklarla işletme adını, kategoriyi ya da adresi değiştirmektir. Sık yapılan temel değişiklikler profilin yeniden incelemeye girmesine yol açabilir. Studio Gria olarak web sitesi ve yerel görünürlük çalışmalarında profili, web sitesini ve sosyal medya hesaplarını tek bir tutarlı kimlik etrafında kuruyoruz; böylece Google işletmenizi her yerde aynı şekilde tanır.",
          "Sahada en sık karşılaştığımız hatalar ise şunlar:",
        ],
        liste: [
          "Birincil kategorinin çok genel ya da yanlış seçilmesi",
          "İşletme adına anahtar kelime eklenmesi",
          "Web sitesi ve sosyal medyada farklı adres ya da telefon kullanılması",
          "Çalışma saatlerinin güncellenmemesi",
          "Olumsuz yorumların yanıtsız bırakılması",
          "Profile yalnızca logo ve stok görsel eklenmesi",
        ],
      },
    ],
    anahtarCikarimlar: [
      "Google yerel sıralamayı alaka, mesafe ve öne çıkmaya göre belirler; mesafe dışındakiler sizin elinizdedir.",
      "Birincil kategori en güçlü alaka sinyalidir; mümkün olan en özel kategoriyi seçin.",
      "Ad, adres ve telefon internetin her yerinde birebir aynı yazılmalıdır.",
      "İşletme adına anahtar kelime eklemek kurallara aykırıdır ve profili riske atar.",
      "Her yoruma yanıt verin; yanıtlar profili okuyan bütün potansiyel müşterilere yazılır.",
    ],
    sorular: [
      {
        soru: "Google Haritalar'da üst sıraya nasıl çıkılır?",
        cevap:
          "Doğru birincil kategori, eksiksiz doldurulmuş profil, internetin her yerinde tutarlı ad, adres ve telefon, gerçek fotoğraflar, düzenli yorum ve yanıtlar sıralamayı güçlendirir. Google yerel sonuçları alaka, mesafe ve öne çıkmaya göre belirler.",
      },
      {
        soru: "Google İşletme Profili'ne anahtar kelime eklenebilir mi?",
        cevap:
          "İşletme adına anahtar kelime eklemek Google'ın kurallarına aykırıdır ve profilin askıya alınmasına yol açabilir. Anahtar kelimeleri kategoriler, hizmetler, açıklama ve gönderiler üzerinden doğal biçimde kullanabilirsiniz.",
      },
      {
        soru: "Google yorumları nasıl artırılır?",
        cevap:
          "Memnun müşteriden hizmetin hemen ardından, profilinizin yorum bağlantısını içeren kısa bir mesajla yorum isteyin. Yorum karşılığında indirim ya da hediye vermek kurallara aykırıdır. Gelen her yoruma yanıt vermek yeni yorum bırakılmasını da teşvik eder.",
      },
      {
        soru: "Profil optimizasyonunun etkisi ne zaman görülür?",
        cevap:
          "Google'ın değişiklikleri işlemesi zaman alır ve etki hemen görünmeyebilir. Kategori ve bilgi düzeltmeleri daha hızlı yansır; yorum ve güncellemeyle güçlenen öne çıkma unsuru ise zamanla etkisini gösterir.",
      },
    ],
    etiketler: [
      "google işletme profili",
      "google haritalarda üst sıraya çıkma",
      "yerel seo",
      "google yorumları",
      "işletme profili optimizasyonu",
    ],
    ilgiliHizmetler: ["web-site-seo-geo", "sosyal-medya-yonetimi"],
  },
];

export function yaziBul(slug: string): BlogYazisi | undefined {
  return blogYazilari.find((yazi) => yazi.slug === slug);
}

// Yazilari en yeniden eskiye siralar
export function yazilariSirala(): BlogYazisi[] {
  return [...blogYazilari].sort((a, b) => (a.tarih < b.tarih ? 1 : -1));
}
