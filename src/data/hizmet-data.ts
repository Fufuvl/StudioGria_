// Hizmet katalogu. Her kayit /hizmetler listesinde bir kart ve
// /hizmetler/[slug] altinda kendi SEO sayfasini uretir.
// Yeni hizmet eklemek icin bu diziye kayit eklemek yeterlidir.
export type HizmetSSS = {
  soru: string;
  cevap: string;
};

export type Hizmet = {
  slug: string;
  ad: string;
  ikon: string;
  kisaAciklama: string;
  seoBaslik: string;
  seoAciklama: string;
  giris: string;
  aciklama: string[];
  dahil: string[];
  sss: HizmetSSS[];
  gorsel: string;
  gorselAlt: string;
};

export const hizmetler: Hizmet[] = [
  {
    slug: "sosyal-medya-yonetimi",
    ikon: "megafon",
    ad: "Sosyal Medya Yönetimi",
    kisaAciklama:
      "İçerik planından yayına, hesabınızın tamamını tek elden yönetiriz.",
    seoBaslik: "Sosyal Medya Yönetimi Hizmeti | Studio Gria",
    seoAciklama:
      "İşletmeler için sosyal medya yönetimi: aylık içerik planı, profesyonel çekim, tasarım, yayın ve raporlama tek elden. İstanbul merkezli, Türkiye geneli hizmet.",
    giris:
      "Sosyal medya hesabınız markanızın vitrini. Rastgele paylaşımlarla değil, planlı ve ölçülebilir bir üretimle yönetilmesi gerekir.",
    aciklama: [
      "Studio Gria olarak hesabınızı bir içerik takvimi üzerinden yönetiriz. Markanızın sesine uygun içerik yönünü birlikte belirler, aylık planı önceden onayınıza sunar, üretimi ve yayını biz üstleniriz. Böylece hesabınız düzenli, tutarlı ve her zaman güncel kalır.",
      "Her ayın sonunda neyin yayınlandığını ve ne sonuç verdiğini gösteren bir rapor alırsınız. Beğeni sayısına değil, işinize dokunan sonuçlara bakarız: erişim, profil ziyareti, gelen mesaj ve web sitesi trafiği.",
      "Bu hizmet en çok düzenli içerik ihtiyacı olan ama bunu kendi içinde sürdüremeyen işletmelere uygun: restoran ve kafeler, oteller, klinikler, spor kulüpleri, perakende mağazaları ve e-ticaret markaları. Her sektörde hesabın işi farklıdır. Bir restoranda amaç rezervasyon ve masa doluluğu, bir klinikte güven ve randevu, bir e-ticaret markasında ürün sayfasına giden trafiktir. İçerik planını bu amaca göre kurar, her paylaşımın hangi hedefe hizmet ettiğini baştan belirleriz.",
      "Çalışma düzeni basittir. Ay başlamadan içerik planı onayınıza gelir, çekim günleri takvime işlenir, tasarım ve metinler yayından önce size gösterilir. Ay içinde hangi içeriğin erişim, profil ziyareti ve mesaj getirdiğini izler, sonraki ayın planını bu veriyle düzeltiriz. Böylece hesap tahmine göre değil, gerçekten işe yarayan içerik türlerine göre büyür. Reklam yönetimi de alıyorsanız organik içerik ile reklam aynı takvimde kurgulanır.",
    ],
    dahil: [
      "Aylık içerik planı ve yayın takvimi",
      "Feed, hikaye ve reels üretimi",
      "Kapak tasarımları ve marka diline uygun görsel dil",
      "Ay sonu performans raporu",
      "Platform stratejisi: Instagram, Facebook, TikTok, LinkedIn",
    ],
    sss: [
      {
        soru: "Kaç içerik üretiyorsunuz?",
        cevap:
          "İçerik sayısı pakete göre değişir. İhtiyaç analizinden sonra markanız için doğru yayın ritmini önerir, kapsamı teklif sunumunda net olarak yazarız.",
      },
      {
        soru: "İçerikler markaya özel mi hazırlanıyor?",
        cevap:
          "Evet. Hazır şablon kullanmayız; görseller, metinler ve yayın planı markanızın kimliğine göre sıfırdan hazırlanır.",
      },
      {
        soru: "Hangi platformları yönetiyorsunuz?",
        cevap:
          "Instagram, Facebook, TikTok ve LinkedIn hesaplarını yönetiyoruz. Her platformu açmak zorunlu değil; hedef kitlenizin gerçekten bulunduğu kanalları seçer, emeği oraya yoğunlaştırırız.",
      },
      {
        soru: "Sosyal medya yönetimine başlamak için ne hazırlamamız gerekiyor?",
        cevap:
          "Hesaplarınıza erişim, varsa logo ve kurumsal kimlik dosyaları ve ilk görüşmede anlatacağınız hedefleriniz yeterli. Gerisini planlama aşamasında birlikte netleştiririz; çekim için gereken hazırlıkları biz organize ederiz.",
      },
      {
        soru: "Paylaşımları yayınlanmadan önce görebilir miyiz?",
        cevap:
          "Evet. Aylık plan, tasarımlar ve metinler yayından önce onayınıza sunulur. Onay vermediğiniz içerik yayınlanmaz.",
      },
    ],
    gorsel: "/assets/img/home-05/project/obahotel/1.jpg",
    gorselAlt: "Otel için üretilmiş sosyal medya içeriği",
  },
  {
    slug: "fotograf-video-produksiyon",
    ikon: "kamera",
    ad: "Fotoğraf & Video Prodüksiyon",
    kisaAciklama:
      "Mekan, ürün ve marka çekimleri; kurgu ve renk düzenlemesiyle teslim.",
    seoBaslik: "Fotoğraf ve Video Prodüksiyon Hizmeti | Studio Gria",
    seoAciklama:
      "İşletmeler için profesyonel fotoğraf ve video çekimi: mekan, ürün, menü ve tanıtım filmleri. Çekim, kurgu ve renk düzenleme tek ekipte. İstanbul merkezli.",
    giris:
      "Telefonla çekilmiş görsellerle premium marka kurulmaz. Profesyonel prodüksiyon, markanızın algısını tek başına yukarı çeker.",
    aciklama: [
      "Mekanınıza gelir, işletmenizi ve ürününüzü profesyonel ekipmanla çekeriz. Işık, kadraj ve sahne kurgusu markanızın karakterine göre planlanır; çekim günü size en az yük bindirecek şekilde organize edilir.",
      "Çekim sonrası kurgu, renk düzenleme ve format uyarlamaları bizde. Elinize sosyal medyada, reklamda ve web sitenizde doğrudan kullanabileceğiniz hazır bir arşiv geçer.",
      "Prodüksiyon hizmetini en çok görselin satışı doğrudan etkilediği işletmeler kullanıyor: restoran ve kafeler menü ve atmosfer çekimi için, oteller oda ve tesis tanıtımı için, perakende ve e-ticaret markaları ürün görselleri için, üretici firmalar tesis ve üretim hattı çekimi için. Her çekimin amacı farklı olduğu için ekipman, ışık ve kadraj da buna göre seçilir. Bir menü çekimiyle bir fabrika tanıtım filmi aynı yaklaşımla çekilmez.",
      "Süreç çekim öncesi planlamayla başlar. Hangi kareye, hangi formata ve hangi kanala ihtiyaç olduğunu çıkarır, çekim listesini ve sahne akışını önceden paylaşırız. Çekim günü mekanda kendi ekibimizle çalışırız; işletmenizin akışını en az etkileyecek saatleri birlikte seçeriz. Teslimde dosyalar kullanım yerine göre ayrılmış olarak gelir: sosyal medya için dikey kesimler, web sitesi için yüksek çözünürlüklü kareler, reklam için kısa versiyonlar. Çekimden seçilen kareler sonraki ayların içerik planında da kullanılabilecek şekilde arşivlenir.",
    ],
    dahil: [
      "Mekan, ürün ve menü çekimleri",
      "Tanıtım filmi ve reels çekimi",
      "Kurgu, renk düzenleme ve ses miksi",
      "Dikey ve yatay format uyarlamaları",
      "Kullanıma hazır arşiv teslimi",
    ],
    sss: [
      {
        soru: "Çekim ne kadar sürüyor?",
        cevap:
          "Kapsama göre değişir; tek mekan çekimi genellikle yarım gün, kapsamlı prodüksiyonlar bir tam gün sürer. Teslim süresi çekimden sonra ortalama bir haftadır.",
      },
      {
        soru: "İstanbul dışına geliyor musunuz?",
        cevap:
          "Evet. Türkiye genelinde çekim yapıyoruz; yol ve konaklama planlaması teklif sunumunda netleştirilir.",
      },
      {
        soru: "Çekim için mekanı kapatmamız gerekir mi?",
        cevap:
          "Çoğu zaman gerekmez. Çekimi müşteri yoğunluğunun düşük olduğu saatlere planlarız; boş mekan gerektiren kareler varsa bunu önceden konuşur, akışınızı bozmayacak bir zaman seçeriz.",
      },
      {
        soru: "Çekilen fotoğraf ve videoların kullanım hakkı kimde olur?",
        cevap:
          "Teslim edilen içerikleri markanızın iletişiminde, sosyal medyada, web sitenizde ve reklamlarınızda kullanabilirsiniz. Kullanım kapsamı teklif sunumunda yazılı olarak netleştirilir.",
      },
      {
        soru: "Yalnızca fotoğraf ya da yalnızca video çekimi yaptırabilir miyiz?",
        cevap:
          "Evet. İhtiyaca göre yalnızca fotoğraf, yalnızca video ya da ikisini aynı çekim gününde birlikte planlayabiliriz. Aynı günde birlikte çekmek çoğu zaman hem zaman hem bütçe açısından daha verimlidir.",
      },
    ],
    gorsel: "/assets/img/home-05/project/oceanic/1.jpg",
    gorselAlt: "Restoran için profesyonel yemek çekimi",
  },
  {
    slug: "reklam-yonetimi",
    ikon: "hedef",
    ad: "Reklam Yönetimi",
    kisaAciklama:
      "Google Ads ve Meta Ads kampanyalarınızı kurar, günlük takip ederiz.",
    seoBaslik: "Google Ads ve Meta Ads Reklam Yönetimi | Studio Gria",
    seoAciklama:
      "Google Ads ve Meta Ads reklam yönetimi: kampanya kurulumu, hedef kitle kurgusu, reklam görseli üretimi, günlük takip ve bütçe optimizasyonu.",
    giris:
      "Reklam bütçesi doğru kurgulanmadığında en hızlı para kaybettiren kanaldır. Doğru kurgulandığında ise en hızlı müşteri getiren kanal.",
    aciklama: [
      "Meta (Instagram ve Facebook) ile Google (arama, görüntülü ağ, YouTube) kampanyalarınızı hedefinize göre kurarız: mesaj, form, arama, satış veya mağaza ziyareti. Piksel ve dönüşüm takibi kurulumdan itibaren doğru veriyle çalışır.",
      "Kampanyalar günlük takip edilir; bütçe işe yarayan reklamlara kaydırılır, yorulan kreatifler yenilenir. Reklam bütçeniz kendi hesabınızdan harcanır, her ay ne harcandığını ve ne kazandırdığını net görürsünüz.",
      "Reklam yönetimi hedefi net olan her işletme için anlamlıdır, ama hedefin türü kurguyu değiştirir. Restoran, klinik ya da spor okulu gibi yerel işletmelerde genellikle mesaj, arama veya form toplanır ve hedefleme ilçe ve çevresiyle sınırlanır. E-ticarette ise satış ve sepet verisiyle çalışılır; katalog reklamları ve yeniden pazarlama devreye girer. Google tarafında arama reklamları sizi zaten arayan kişiyi yakalar, Meta tarafında ise henüz aramayan ama ilgilenebilecek kitleye ulaşılır.",
      "Kampanya kurulmadan önce ölçüm altyapısı kontrol edilir: piksel, dönüşüm olayları ve form ya da mesaj akışı doğru çalışmıyorsa reklam verisi yanıltıcı olur. Yayından sonra her kampanya kendi hedef metriğiyle okunur; mesaj kampanyasında mesaj başı maliyet, satış kampanyasında reklam harcamasının getirisi takip edilir. Beğeni ve erişim tek başına başarı sayılmaz. Yeni kreatifler düzenli olarak test edilir ve kazanan versiyon bir sonraki üretimin yönünü belirler.",
    ],
    dahil: [
      "Kampanya kurulumu ve hedef kitle kurgusu",
      "Piksel, dönüşüm ve olay takibi kurulumu",
      "Reklam görseli ve metin üretimi",
      "Günlük takip ve bütçe optimizasyonu",
      "Aylık performans raporu",
    ],
    sss: [
      {
        soru: "Minimum reklam bütçesi ne olmalı?",
        cevap:
          "Sektöre ve hedefe göre değişir. İlk görüşmede hedefinize göre gerçekçi bir başlangıç bütçesi öneririz; reklam harcaması ajans ücretinden ayrıdır ve kendi hesabınızdan yapılır.",
      },
      {
        soru: "Sonuçları nasıl raporluyorsunuz?",
        cevap:
          "Aylık raporda harcama, erişim, tıklama ve dönüşüm rakamları yer alır. Rakamları yorumuyla birlikte sunarız: neyin çalıştığı, neyin değiştirileceği net yazar.",
      },
      {
        soru: "Google Ads mı Meta Ads mı daha uygun?",
        cevap:
          "İkisi farklı işi görür. Google Ads hizmetinizi zaten arayan kişiyi yakalar; Meta Ads henüz aramayan ama ilgilenebilecek kitleye ulaşır. Hangisiyle başlanacağını sektörünüze, hedefinize ve bütçenize göre ilk görüşmede birlikte belirleriz.",
      },
      {
        soru: "Reklam hesabı kime ait oluyor?",
        cevap:
          "Reklam hesabı işletmenize ait olur ve bütçe doğrudan sizin hesabınızdan harcanır. Biz bu hesaba yönetici olarak erişiriz; çalışma sona erse bile hesap, veriler ve kitleler sizde kalır.",
      },
      {
        soru: "Reklamlar ne zaman sonuç vermeye başlar?",
        cevap:
          "Kampanyalar yayına girdiği ilk günlerden itibaren veri üretir, ancak platformların öğrenme süreci nedeniyle sağlıklı bir değerlendirme için birkaç haftalık veri gerekir. Bu dönemde bütçeyi ve kreatifleri gelen veriye göre düzenleyerek ilerleriz.",
      },
    ],
    gorsel: "/assets/img/inner-service/sercive-details/1.jpg",
    gorselAlt: "Reklam kampanyası için üretilmiş kreatif çalışma",
  },
  {
    slug: "ai-uretim-reklam-filmleri",
    ikon: "parilti",
    ad: "AI Üretim & AI Reklam Filmleri",
    kisaAciklama:
      "Yapay zeka ile stüdyo kalitesinde ürün görseli ve reklam filmi üretimi.",
    seoBaslik: "Yapay Zeka ile Görsel ve Reklam Filmi Üretimi | Studio Gria",
    seoAciklama:
      "AI destekli içerik üretimi: stüdyo kurmadan ürün çekimi, kampanya görseli ve yapay zeka ile reklam filmi. Set maliyeti olmadan günler içinde teslim.",
    giris:
      "Ürününüzü her mekanda, her ışıkta ve her mevsimde gösterebiliriz. Set kurulumu ve lokasyon kirası olmadan.",
    aciklama: [
      "Yapay zeka destekli üretim hattımızla ürününüzün stüdyo kalitesinde görsellerini ve reklam filmlerini hazırlarız. Fiziksel sette kurulması zor ya da maliyetli sahneler dijital olarak kurulur; marka estetiğiniz her karede korunur.",
      "Bu hat klasik prodüksiyonun yerine değil, yanına gelir: kampanya dönemlerinde hız, e-ticarette ürün çeşitliliği, reklamda sınırsız varyasyon sağlar. Çıktılar sosyal medyada, reklamda ve web sitenizde doğrudan kullanılır.",
      "Yapay zeka üretimi en çok görsel ihtiyacı yüksek ve hızlı değişen işlerde fark yaratıyor: çok sayıda ürünü olan e-ticaret markaları, sezon ve kampanya dönemlerinde yeni görsele ihtiyaç duyan perakendeciler, fiziksel çekimi pahalı ya da zor olan sahneler isteyen markalar. Örneğin bir kozmetik ürününü kıyıda, gün batımında ve makro detayda göstermek için üç ayrı set kurmak gerekmez. Ürünün gerçek fotoğrafından yola çıkılarak bu sahneler dijital olarak kurulur.",
      "Süreç ürününüzün gerçek fotoğraflarıyla başlar; ürünün formu, rengi ve etiketi referans alınır ve korunur. Sahne ve ışık yönü onayınıza sunulur, seçilen yönde üretim yapılır, ardından doku ve detaylar elle düzeltilir. Reklam filmlerinde senaryo ve kare akışı önceden paylaşılır. Görseller reklamda kullanılıyorsa hangi sahnenin daha çok tıklandığını izler, bir sonraki üretimi bu veriye göre yönlendiririz. Aynı ürün için farklı sahne ve formatlarda çok sayıda varyasyon hazırlanabildiği için reklam testleri de daha hızlı ilerler.",
    ],
    dahil: [
      "AI ürün ve kampanya görselleri",
      "AI reklam filmleri ve animasyonlu içerik",
      "Marka estetiğine uygun sahne ve ışık kurgusu",
      "Sınırsız mekan, mevsim ve doku varyasyonu",
      "Reklam ve e-ticaret için format uyarlamaları",
    ],
    sss: [
      {
        soru: "AI görseller yapay mı görünüyor?",
        cevap:
          "Hayır. Doku, ışık ve yüzey detaylarını elle işleyerek yapay hissi görünmez hale getiriyoruz. Sitemizdeki örneklerin tamamı bu hattan çıktı.",
      },
      {
        soru: "Ne kadar sürede teslim ediyorsunuz?",
        cevap:
          "Standart bir görsel seti genellikle birkaç gün içinde teslim edilir. Reklam filmlerinde süre kurguya göre teklif sunumunda netleştirilir.",
      },
      {
        soru: "Yapay zeka ile üretilen görselleri reklamda kullanabilir miyiz?",
        cevap:
          "Evet, görseller sosyal medyada, reklamda ve e-ticaret sitenizde kullanılmak üzere hazırlanır. Platformların yapay zeka içeriğine ilişkin beyan kurallarını takip eder, gereken durumlarda içeriğin nasıl işaretleneceği konusunda sizi bilgilendiririz.",
      },
      {
        soru: "AI üretim için ürünü size göndermemiz gerekir mi?",
        cevap:
          "Çoğu zaman ürünün net ve iyi ışıklı fotoğrafları yeterli olur. Ürünün dokusu ya da detayı önemliyse referans çekimini biz yaparız; bu durumda ürünün stüdyomuza ulaşması ya da bizim size gelmemiz planlanır.",
      },
      {
        soru: "Yapay zeka üretimi gerçek çekimin yerini tutar mı?",
        cevap:
          "Her işte değil. Ürün sahneleri, kampanya varyasyonları ve arka planlar için çok etkilidir; ekibinizin, mekanınızın ya da gerçek müşteri deneyiminin gösterilmesi gereken içeriklerde ise sahada çekimi öneririz. Çoğu markada en iyi sonuç ikisinin birlikte kullanılmasıyla alınır.",
      },
    ],
    gorsel: "/assets/img/ai-solutions/brand-mix/matcha-hero.jpg",
    gorselAlt: "Yapay zeka ile üretilmiş ürün görseli",
  },
  {
    slug: "web-site-seo-geo",
    ikon: "kure",
    ad: "Web Sitesi, SEO & GEO",
    kisaAciklama:
      "Hızlı ve dönüşüm odaklı web sitesi; arama motoru ve yapay zeka görünürlüğü.",
    seoBaslik: "Web Sitesi Tasarımı, SEO ve GEO Optimizasyon | Studio Gria",
    seoAciklama:
      "Kurumsal web sitesi tasarımı, SEO çalışması ve GEO (yapay zeka aramalarında görünürlük) optimizasyonu. Hızlı, mobil uyumlu ve dönüşüm odaklı siteler.",
    giris:
      "Web siteniz dijital ofisinizdir. Yavaş, eski ya da bulunamayan bir site, kazandığınız her müşteriye pahalıya mal olur.",
    aciklama: [
      "Modern, hızlı ve mobil uyumlu web siteleri kurarız. Tasarım markanızın kimliğine göre yapılır; her sayfa ziyaretçiyi bir eyleme yönlendirecek şekilde kurgulanır: arama, form ya da WhatsApp.",
      "Kurulumla bitmez: teknik SEO altyapısı, sayfa hızı, içerik yapısı ve yerel arama görünürlüğü birlikte ele alınır. GEO tarafında ise markanızın ChatGPT ve benzeri yapay zeka aramalarında doğru şekilde görünmesi için içerik ve veri yapısı optimize edilir.",
      "Bu hizmet iki tür işletmeye uygun: sitesi hiç olmayan ya da yıllardır güncellenmemiş işletmeler ve sitesi olduğu halde aramalarda bulunamayanlar. Yerel hizmet veren bir işletme için hedef, ilçe ve hizmet adıyla yapılan aramalarda görünmek ve ziyaretçiyi aramaya ya da forma yönlendirmektir. Kurumsal firmalarda güven veren bir kimlik ve net bir hizmet anlatımı öne çıkar. E-ticarette ise sayfa hızı ve ürün sayfalarının yapısı doğrudan satışı etkiler.",
      "Çalışma mevcut durumun ölçülmesiyle başlar: sayfa hızı, dizine eklenen sayfalar, arama sorguları ve teknik hatalar. Yeni sitede her sayfa hedeflediği aramaya göre kurgulanır; başlık, içerik yapısı, iç bağlantılar ve yapısal veri birlikte ele alınır. Yayından sonra Google Search Console ve analitik verileriyle hangi sayfanın gösterim ve tıklama aldığı, hangi formun doldurulduğu izlenir; içerik bu veriye göre geliştirilir. Yerel işletmelerde Google İşletme Profili ile site bilgilerinin birebir aynı olması da bu aşamada kontrol edilir.",
    ],
    dahil: [
      "Kurumsal web sitesi tasarımı ve geliştirme",
      "Mobil uyum ve sayfa hızı optimizasyonu",
      "Teknik SEO altyapısı ve içerik yapısı",
      "GEO: yapay zeka aramalarında görünürlük",
      "Analitik ve dönüşüm takibi kurulumu",
    ],
    sss: [
      {
        soru: "Mevcut sitemizi yenileyebiliyor musunuz?",
        cevap:
          "Evet. Mevcut siteyi inceleyip yenileme mi yoksa sıfırdan kurulum mu daha doğru, teklif sunumunda gerekçesiyle öneririz.",
      },
      {
        soru: "SEO sonuçları ne zaman görülür?",
        cevap:
          "Teknik düzeltmelerin etkisi haftalar içinde, içerik çalışmasının etkisi genellikle üç ile altı ay arasında görülür. Gerçekçi olmayan söz vermeyiz.",
      },
      {
        soru: "GEO nedir, SEO'dan farkı ne?",
        cevap:
          "SEO, sitenizin Google gibi arama motorlarında üst sıralarda görünmesini hedefler. GEO ise ChatGPT, Perplexity ve Google'ın yapay zeka özetleri gibi sistemlerin sorulara yanıt verirken markanızı doğru bilgiyle kaynak göstermesini hedefler. İkisi aynı temele dayanır: net, doğru ve iyi yapılandırılmış içerik.",
      },
      {
        soru: "Google Haritalar'da görünmek için ne yapılmalı?",
        cevap:
          "Yerel aramalarda görünmenin temeli eksiksiz ve doğru bir Google İşletme Profili'dir. Adres, telefon ve çalışma saatlerinin web sitesiyle birebir aynı olması, düzenli yorum alınması ve profilin güncel tutulması belirleyicidir. Web sitesi kurulumunda bu tutarlılığı da birlikte sağlarız.",
      },
      {
        soru: "Web sitesinin metinlerini siz mi yazıyorsunuz?",
        cevap:
          "İsterseniz evet. Hizmet sayfaları, kurumsal metinler ve blog içerikleri arama niyetine göre ekibimiz tarafından yazılır ve yayından önce onayınıza sunulur. Kendi metinleriniz varsa onları da yapıya uygun şekilde düzenleriz.",
      },
    ],
    gorsel: "/assets/img/inner-service/sercive-details/13.jpg",
    gorselAlt: "Web sitesi tasarım çalışması",
  },
  {
    slug: "yazilim-mobil-uygulama",
    ikon: "kod",
    ad: "Yazılım & Mobil Uygulama",
    kisaAciklama:
      "İşinize özel web tabanlı yazılım ve mobil uygulama geliştirme.",
    seoBaslik: "Özel Yazılım ve Mobil Uygulama Geliştirme | Studio Gria",
    seoAciklama:
      "İşletmenize özel yazılım ve mobil uygulama geliştirme: rezervasyon, sipariş, üyelik ve iç süreç yönetimi çözümleri. Tasarımdan yayına tek ekip.",
    giris:
      "Hazır araçların yetmediği yerde, işinize göre şekillenen yazılım devreye girer.",
    aciklama: [
      "Rezervasyon sistemi, sipariş yönetimi, üyelik altyapısı ya da iç süreçlerinizi yöneten panel: ihtiyacınız ne ise onu kurarız. Önce süreci anlar, sonra en az karmaşıklıkla çalışan çözümü tasarlarız.",
      "Mobil tarafta iOS ve Android için uygulama geliştiriyoruz. Tasarım, geliştirme ve mağaza yayın süreci tek ekipte ilerler; yayın sonrası bakım ve geliştirme desteği devam eder.",
      "Özel yazılım çoğu zaman hazır araçların işi karşılamadığı noktada gündeme gelir: randevuları hâlâ defterde ya da mesajla tutan bir klinik, siparişleri birkaç farklı kanaldan toplayan bir restoran, üyelik ve aidat takibini tablolarla yürüten bir spor kulübü. Bu işletmelerde amaç büyük bir sistem kurmak değil, günlük işi kolaylaştıran ve hataları azaltan sade bir araç sunmaktır. Önce mevcut akışı sizinle birlikte çıkarır, en çok zaman kaybettiren adımdan başlarız.",
      "Kullanıcı ekranları sade tutulur; personelinizin uzun bir eğitime ihtiyaç duymadan kullanabileceği bir arayüz hedeflenir. Yetki seviyeleri role göre ayrılır; örneğin personel yalnızca kendi randevularını görürken yönetici tüm raporlara erişir. Yayından sonra hangi özelliğin gerçekten kullanıldığını izler, geliştirmeyi buna göre önceliklendiririz. Böylece bütçe kullanılmayan özelliklere değil, işe yarayanlara harcanır. Verilerin düzenli yedeklenmesi ve erişimin güvenli tutulması da kurulumun standart parçasıdır; işletmenizin bilgisi yalnızca yetkili kişilerce görülür.",
    ],
    dahil: [
      "İhtiyaç analizi ve çözüm tasarımı",
      "Web tabanlı yazılım ve yönetim panelleri",
      "iOS ve Android mobil uygulama",
      "Mağaza yayın süreci yönetimi",
      "Yayın sonrası bakım ve geliştirme",
    ],
    sss: [
      {
        soru: "Süreç nasıl ilerliyor?",
        cevap:
          "Önce ihtiyacınızı dinler, kapsamı ve takvimi teklif sunumunda netleştiririz. Geliştirme aşamalı ilerler; her aşamada çalışan bir sürüm görürsünüz.",
      },
      {
        soru: "Mevcut sistemlerimizle entegre olur mu?",
        cevap:
          "Çoğu durumda evet. Kullandığınız araçları ilk görüşmede öğrenir, entegrasyon yolunu teklifte belirtiriz.",
      },
      {
        soru: "Mobil uygulama mı, web uygulaması mı yaptırmalıyız?",
        cevap:
          "İhtiyaca bağlı. Müşterilerinizin sık kullanacağı, bildirim ve telefon özelliklerine ihtiyaç duyan işler için mobil uygulama; personelin ya da müşterinin tarayıcıdan erişmesinin yeterli olduğu işler için web tabanlı uygulama daha doğrudur. İlk görüşmede kullanım senaryonuza göre öneri sunarız.",
      },
      {
        soru: "Uygulamanın App Store ve Google Play'de yayınlanmasını siz mi yapıyorsunuz?",
        cevap:
          "Evet. Mağaza sayfası metinlerinin ve görsellerinin hazırlanması ile inceleme sürecinin takibi bizde. Mağaza hesaplarının işletmeniz adına açılmasını öneririz; böylece uygulama size ait olur.",
      },
      {
        soru: "Yayından sonra hata ve güncelleme desteği veriyor musunuz?",
        cevap:
          "Evet. Yayın sonrası bakım, işletim sistemi güncellemelerine uyum ve yeni özellik geliştirme desteği sunuyoruz. Destek kapsamı teklif sunumunda yazılı olarak belirlenir.",
      },
    ],
    gorsel: "/assets/img/inner-service/sercive-details/14.jpg",
    gorselAlt: "Yazılım ve uygulama geliştirme çalışması",
  },
  {
    slug: "e-ticaret-entegrasyonlari",
    ikon: "canta",
    ad: "E-Ticaret Entegrasyonları",
    kisaAciklama:
      "Satış kanallarınızı kurar, ürün akışını ve reklam bağlantılarını bağlarız.",
    seoBaslik: "E-Ticaret Kurulumu ve Entegrasyonları | Studio Gria",
    seoAciklama:
      "E-ticaret sitesi kurulumu, pazaryeri ve kargo entegrasyonları, ürün katalogu ve reklam bağlantıları: Meta katalog, Google Merchant ve dönüşüm takibi.",
    giris:
      "E-ticarette sorun genellikle satış sayfası değil, birbirine bağlanmayan sistemlerdir.",
    aciklama: [
      "Satış altyapınızı uçtan uca kurarız: e-ticaret sitesi, ödeme sistemi, kargo ve pazaryeri bağlantıları. Ürün katalogunuz tek yerden yönetilir, her kanalda güncel kalır.",
      "Reklam tarafıyla köprüyü de biz kurarız: Meta katalog ve Google Merchant bağlantıları, piksel ve dönüşüm takibi. Böylece hangi ürünün hangi kanaldan sattığını net görürsünüz.",
      "Bu hizmet iki durumda en çok işe yarar: satışa yeni başlayan ve altyapıyı doğru kurmak isteyen markalar ile birden fazla kanalda satış yapıp stok, sipariş ve reklam verisini tek yerden göremeyen markalar. İkinci durumdaki sorunlar genellikle bellidir: pazaryerinde tükenen ürün sitede satılmaya devam eder, reklam katalogu güncel olmayan fiyat gösterir, satış verisi reklam paneline ulaşmaz. Entegrasyon çalışması bu kopuklukları kapatmayı hedefler.",
      "Çalışma mevcut kanalların ve ürün verisinin çıkarılmasıyla başlar. Ürün adları, varyantlar, stok ve fiyat alanları tek bir düzene sokulur; site, pazaryeri ve reklam katalogları bu kaynaktan beslenir. Ardından ödeme, kargo ve dönüşüm takibi test siparişleriyle uçtan uca denenir. Kurulum bittiğinde hangi ürünün hangi kanaldan ve hangi reklamdan sattığını gösteren bir raporlama düzeni kalır. Böylece reklam bütçesi en çok satan ürünlere yönlendirilebilir, stokta olmayan ürün için harcama yapılmaz.",
    ],
    dahil: [
      "E-ticaret sitesi kurulumu",
      "Ödeme ve kargo entegrasyonları",
      "Pazaryeri bağlantıları",
      "Meta katalog ve Google Merchant kurulumu",
      "Dönüşüm takibi ve raporlama",
    ],
    sss: [
      {
        soru: "Hangi altyapılarla çalışıyorsunuz?",
        cevap:
          "İhtiyacınıza göre doğru altyapıyı birlikte seçeriz. Mevcut bir altyapınız varsa onun üzerine kurulum ve entegrasyon da yapıyoruz.",
      },
      {
        soru: "Ürün çekimlerini de yapıyor musunuz?",
        cevap:
          "Evet. Prodüksiyon ve AI üretim hattımızla ürün görsellerinizi de aynı çatı altında hazırlıyoruz.",
      },
      {
        soru: "Trendyol ve Hepsiburada gibi pazaryerleriyle entegrasyon yapıyor musunuz?",
        cevap:
          "Evet. Kullandığınız e-ticaret altyapısının desteklediği yöntemlerle pazaryeri bağlantılarını kurar, ürün, stok ve sipariş akışının doğru çalıştığını test ederiz. Hangi entegrasyonun sizin altyapınızda mümkün olduğunu ilk görüşmede netleştiririz.",
      },
      {
        soru: "Meta katalog ve Google Merchant neden gerekli?",
        cevap:
          "Bu iki bağlantı, ürünlerinizin reklamlarda fiyatı, görseli ve stok durumuyla birlikte otomatik gösterilmesini sağlar. Kurulmadığında ürün reklamları elle hazırlanır ve güncelliğini kısa sürede kaybeder. Doğru kurulduğunda yeniden pazarlama reklamları, ürün sayfasına bakan kişiye aynı ürünü gösterebilir.",
      },
      {
        soru: "Kurulumdan sonra sipariş ve stok sorunlarında destek veriyor musunuz?",
        cevap:
          "Evet. Kurulum sonrasında entegrasyonların düzgün çalışmasını izler, stok ya da sipariş akışında bir kopukluk olduğunda nedenini bulup düzeltiriz. Destek kapsamı teklif sunumunda yazılı olarak belirlenir.",
      },
    ],
    gorsel: "/assets/img/home-05/project/star/2.jpg",
    gorselAlt: "E-ticaret markası için ürün çekimi",
  },
  {
    slug: "drone-cekimleri",
    ikon: "drone",
    ad: "Drone Çekimleri",
    kisaAciklama:
      "Mekan, proje ve etkinlikleriniz için havadan fotoğraf ve video.",
    seoBaslik: "Drone Çekimi: Havadan Fotoğraf ve Video | Studio Gria",
    seoAciklama:
      "Profesyonel drone çekimi: otel, restoran, gayrimenkul projesi, fabrika ve etkinlikler için havadan fotoğraf ve video. Kurgu ve renk düzenlemesiyle teslim.",
    giris:
      "Bazı kareler yerden çekilemez. Mekanınızın büyüklüğünü ve konumunu en iyi gökyüzü anlatır.",
    aciklama: [
      "Otel, restoran, gayrimenkul projesi, fabrika ya da etkinlik: mekanınızı havadan, sinematik bir dille çekeriz. Uçuş planı çekim öncesinde yapılır, gerekli izin süreçleri bilgilendirmesiyle birlikte yönetilir.",
      "Drone görüntüleri tek başına da etkilidir, yer çekimleriyle birleştiğinde ise tanıtım filminizin en güçlü karelerini oluşturur. Kurgu ve renk düzenlemesiyle, doğrudan kullanıma hazır teslim edilir.",
      "Drone çekimi, mekanın büyüklüğünün ya da konumunun karar üzerinde etkili olduğu işlerde en güçlü araçtır. Oteller ve tatil tesisleri için havuz, sahil ve çevre ilişkisini; gayrimenkul projeleri için arsanın konumunu ve çevre bağlantılarını; fabrikalar için tesis ölçeğini; etkinlikler için organizasyonun büyüklüğünü tek karede gösterir. Restoran ve kafelerde ise genellikle manzarası ya da konum avantajı olan mekanlarda anlam taşır. Tek bir havadan kare, sayfalarca tanıtım metninin anlatamadığı ölçeği ilk bakışta gösterir.",
      "Açık alan çekimlerinde sonucu belirleyen şey ışıktır; bu yüzden takvimi hava durumuna ve güneşin konumuna göre birlikte kurarız. Sahil ve tesis çekimlerinde gün doğumu ile gün batımına yakın saatler çoğu zaman en etkili kareleri verir. Gayrimenkul projelerinde farklı inşaat aşamalarının aynı noktadan tekrar çekilmesi de planlanabilir; böylece projenin ilerleyişi görsel olarak belgelenir. Teslimde fotoğraflar, uzun ve kısa video versiyonları ayrı ayrı gelir.",
    ],
    dahil: [
      "Havadan fotoğraf ve 4K video çekimi",
      "Sinematik uçuş planlaması",
      "Yer çekimleriyle birleşik kurgu",
      "Renk düzenleme ve müzik seçimi",
      "Sosyal medya ve reklam formatlarına uyarlama",
    ],
    sss: [
      {
        soru: "Her bölgede çekim yapılabiliyor mu?",
        cevap:
          "Uçuşa kapalı bölgeler dışında evet. Lokasyonunuzu ilettiğinizde uçuş iznini ve uygunluğu önceden kontrol ederiz.",
      },
      {
        soru: "Hava koşulları çekimi etkiler mi?",
        cevap:
          "Etkiler; güvenlik ve görüntü kalitesi için uygun hava beklenir. Çekim günü buna göre birlikte planlanır, gerekirse ücretsiz ertelenir.",
      },
      {
        soru: "Drone çekimi ne kadar tutar?",
        cevap:
          "Piyasada drone çekimi, süreye ve teslim edilen içeriğe göre kabaca 5.000 ile 25.000 TL arasında fiyatlanıyor. Fiyatı lokasyon sayısı, çekimin süresi, gerekli uçuş izinleri ve kurgunun dahil olup olmadığı belirler. Drone çekimini tek başına ya da prodüksiyon gününün parçası olarak planlayabilir, kapsamı netleştirdikten sonra teklif sunarız.",
      },
      {
        soru: "Drone çekimi için izin gerekir mi?",
        cevap:
          "Uçuşun yapılacağı bölgeye göre izin ve bildirim gereklilikleri değişir. Lokasyonu ilettiğinizde bölgenin uçuşa uygunluğunu ve gerekli izinleri çekim öncesinde biz kontrol eder, süreci planlamaya dahil ederiz.",
      },
      {
        soru: "Etkinlik sırasında drone ile çekim yapılabilir mi?",
        cevap:
          "Etkinliğin yapıldığı yere ve kalabalığın yoğunluğuna göre değişir. Kalabalığın üzerinden uçuş güvenlik ve mevzuat açısından kısıtlı olabildiği için rota buna göre planlanır; lokasyon ve izin durumunu etkinlik öncesinde birlikte netleştiririz.",
      },
      {
        soru: "Drone görüntüleri reklamda ve sosyal medyada kullanılabilir mi?",
        cevap:
          "Evet. Görüntüler sosyal medya, reklam ve web sitesi formatlarına uyarlanmış olarak teslim edilir. Reels ve hikayeler için dikey kısa versiyonlar ayrıca hazırlanır.",
      },
    ],
    gorsel: "/assets/img/inner-project/showcase/background.jpg",
    gorselAlt: "Otel için havadan drone çekimi",
  },
  {
    slug: "marka-kimligi-tasarim",
    ikon: "kalem",
    ad: "Marka Kimliği & Tasarım",
    kisaAciklama:
      "Logo, kurumsal kimlik ve markanızın tüm görsel dili.",
    seoBaslik: "Marka Kimliği ve Logo Tasarımı | Studio Gria",
    seoAciklama:
      "Logo tasarımı, kurumsal kimlik ve görsel dil rehberi: renk, tipografi, kullanım kuralları, menü, katalog ve sosyal medya şablonları. Tutarlı marka görünümü.",
    giris:
      "Markanızın nasıl göründüğü, ne söylediğinden önce algılanır. Tutarlı görünüm, güvenin ilk adımıdır.",
    aciklama: [
      "Logodan renk paletine, tipografiden kullanım kurallarına kadar markanızın görsel dilini kurarız. Ortaya çıkan kimlik rehberi sayesinde her paylaşım, her tasarım ve her basılı malzeme aynı markayı anlatır.",
      "Yeni marka kuruyorsanız sıfırdan, mevcut markanızı tazeliyorsanız bugünkü algıyı bozmadan çalışırız. Teslimde tüm dosyalar kullanıma hazır formatlarda elinizde olur.",
      "Kimlik çalışmasına en çok üç durumda ihtiyaç duyulur: yeni açılacak bir işletme, büyüdükçe görünümü markanın gerisinde kalmış bir işletme ya da şube, ürün ve kanal sayısı arttıkça görsel dili dağılmış bir marka. Bir restoranda kimlik menüden tabelaya, ambalajdan sosyal medyaya kadar her yüzeyde görünür. Kurumsal bir firmada ise sunum dosyası, teklif şablonu ve web sitesi aynı dili konuşmalıdır. Çalışmanın kapsamını bu kullanım yüzeylerine göre belirleriz.",
      "Süreç markanın kim olduğunu ve kime konuştuğunu netleştiren bir görüşmeyle başlar; sektörün görsel alışkanlıkları da bu aşamada değerlendirilir. Ardından farklı yönlerde fikirler sunulur, seçilen yön logo, renk ve tipografiyle geliştirilir, en sonda gerçek kullanım örnekleri üzerinde denenir: kartvizit, menü, sosyal medya gönderisi, tabela. Bir kimliğin işe yarayıp yaramadığı masa başında değil, bu gerçek yüzeylerde anlaşılır. Onaylanan kimlik, sosyal medya şablonlarına ve basılı malzemelere aynı gün uygulanabilecek şekilde hazırlanır.",
    ],
    dahil: [
      "Logo ve logo varyasyonları",
      "Renk paleti ve tipografi seçimi",
      "Kimlik rehberi ve kullanım kuralları",
      "Kartvizit, menü, katalog gibi basılı tasarımlar",
      "Sosyal medya şablonları",
    ],
    sss: [
      {
        soru: "Kaç logo alternatifi sunuyorsunuz?",
        cevap:
          "İlk sunumda farklı yönlerde alternatifler gösterir, seçilen yön üzerinde revizyonlarla ilerleriz. Süreç ve revizyon hakkı teklif sunumunda net yazar.",
      },
      {
        soru: "Mevcut logomuzu koruyarak kimlik çalışması yapılır mı?",
        cevap:
          "Evet. Logo sabit kalır, çevresindeki renk, tipografi ve kullanım dili modernleştirilir.",
      },
      {
        soru: "Logo tasarımı ile kurumsal kimlik arasındaki fark nedir?",
        cevap:
          "Logo markanın imzasıdır. Kurumsal kimlik ise logonun etrafındaki bütün sistemdir: renkler, yazı karakterleri, görsel üslup ve bunların nasıl kullanılacağını anlatan kurallar. Yalnızca logo yaptırmak, farklı kişilerin hazırladığı tasarımlarda markanın dağınık görünmesine yol açabilir.",
      },
      {
        soru: "Teslimde hangi dosyaları alıyoruz?",
        cevap:
          "Logo ve varyasyonları baskı ve dijital kullanım için uygun formatlarda, vektörel kaynak dosyalarıyla birlikte teslim edilir. Renk kodları, yazı karakterleri ve kullanım kuralları kimlik rehberinde yer alır.",
      },
      {
        soru: "Marka tescili başvurusunu siz mi yapıyorsunuz?",
        cevap:
          "Hayır. Marka tescili hukuki bir süreçtir ve bir marka vekili ya da avukat tarafından yürütülmelidir. Tasarım sürecine başlamadan önce marka adınız için benzer kayıtları bir uzmana kontrol ettirmenizi öneririz.",
      },
    ],
    gorsel: "/assets/img/home-05/project/pacua/1.jpg",
    gorselAlt: "Kahve markası için kimlik ve tasarım çalışması",
  },
  {
    slug: "danismanlik",
    ikon: "balon",
    ad: "Danışmanlık Hizmeti",
    kisaAciklama:
      "Ekibiniz üretiyor, biz yönü ve stratejiyi birlikte kuruyoruz.",
    seoBaslik: "Sosyal Medya ve Dijital Pazarlama Danışmanlığı | Studio Gria",
    seoAciklama:
      "İşletmeler için dijital pazarlama danışmanlığı: strateji, içerik yönü, reklam kurgusu ve ekip eğitimi. Üretimi ekibiniz yapar, yönü birlikte kurarız.",
    giris:
      "Her işletmenin tam kapsamlı yönetime ihtiyacı yoktur. Bazen tek gereken, doğru yönü gösteren deneyimli bir göz.",
    aciklama: [
      "İç ekibi olan markalarla danışmanlık modelinde çalışırız: strateji, içerik yönü, reklam kurgusu ve ölçüm düzenini birlikte kurarız; üretimi ekibiniz yapar. Düzenli görüşmelerle işleyişi takip eder, gereken yerde yön düzeltiriz.",
      "Bu model, ajans maliyetine hazır olmayan ama işi doğru kurmak isteyen işletmeler için en verimli başlangıçtır. İhtiyaç büyüdüğünde kapsam da birlikte büyür.",
      "Danışmanlık modeli en çok iç ekibi olan ama yön konusunda desteğe ihtiyaç duyan işletmelere uygun: sosyal medyasını bir çalışanının yönettiği restoranlar, pazarlama sorumlusu olan kurumsal firmalar, reklamlarını kendi veren e-ticaret markaları. Bu işletmelerde sorun genellikle emek eksikliği değil, önceliklerin belirsizliğidir. Hangi içeriğin üretileceği, reklam bütçesinin nereye harcanacağı ve hangi rakama bakılacağı netleşince mevcut ekip çok daha verimli çalışır. Danışmanlık, bu netliği dışarıdan ve tarafsız bir gözle kurmanın en hızlı yoludur.",
      "Süreç mevcut hesapların, reklam verilerinin ve iç işleyişin incelenmesiyle başlar; ardından ekiple birlikte uygulanabilir bir yol haritası çıkarılır. Görüşmelerde ekibin ürettiği içerikler ve kampanyalar birlikte değerlendirilir, somut düzeltmeler yapılır. İlerleme başta belirlenen ölçütlerle takip edilir: mesaj sayısı, form, satış ya da randevu. Böylece danışmanlığın işe yarayıp yaramadığını his değil, rakam gösterir. Görüşme notları ve alınan kararlar yazılı olarak paylaşılır; ekip bir sonraki görüşmeye kadar neyin yapılacağını net bilir.",
    ],
    dahil: [
      "Mevcut durum analizi ve yol haritası",
      "İçerik ve reklam stratejisi",
      "Aylık düzenli danışmanlık görüşmeleri",
      "Ekip için uygulamalı eğitim",
      "Ölçüm ve raporlama düzeni kurulumu",
    ],
    sss: [
      {
        soru: "Danışmanlık hangi sıklıkta ilerliyor?",
        cevap:
          "Genellikle aylık düzenli görüşmelerle ilerler; yoğun dönemlerde sıklık artırılabilir. Ritmi ihtiyacınıza göre birlikte belirleriz.",
      },
      {
        soru: "Sonrasında yönetime geçebilir miyiz?",
        cevap:
          "Evet. Danışmanlıkla başlayan markalarımızın bir kısmı ilerleyen dönemde tam kapsamlı yönetime geçiyor; geçiş kesintisiz olur.",
      },
      {
        soru: "Danışmanlık ile tam kapsamlı yönetim arasındaki fark nedir?",
        cevap:
          "Danışmanlıkta üretimi ve günlük yönetimi sizin ekibiniz yapar; biz stratejiyi, önceliklendirmeyi ve ölçüm düzenini kurar, düzenli görüşmelerle yön veririz. Tam kapsamlı yönetimde ise içerik üretimi, yayın ve reklam yönetimi doğrudan Studio Gria ekibi tarafından yürütülür.",
      },
      {
        soru: "Ekibimize eğitim veriyor musunuz?",
        cevap:
          "Evet. İçerik planlama, çekim, Meta reklam kurulumu ve raporlama gibi konularda ekibinizin gerçek işleri üzerinden uygulamalı eğitim veriyoruz. Eğitimin konusu ve süresi ihtiyacınıza göre teklif sunumunda belirlenir.",
      },
      {
        soru: "Reklamlarımızı kendimiz veriyoruz, danışmanlık bu durumda işe yarar mı?",
        cevap:
          "Evet. Kampanya yapısını, hedeflemeyi ve kreatifleri birlikte gözden geçirir, hangi metriklere bakılacağını netleştiririz. Reklamları yine ekibiniz yönetir, ama karar alırken neye dayandığını bilir.",
      },
    ],
    gorsel: "/assets/img/inner-service/sercive-details/12.jpg",
    gorselAlt: "Strateji ve danışmanlık çalışması",
  },
];

export function hizmetBul(slug: string): Hizmet | undefined {
  return hizmetler.find((hizmet) => hizmet.slug === slug);
}
