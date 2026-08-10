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
      "Google Ads ve Meta Ads reklam yönetimi: kampanya kurulumu, hedef kitle kurgusu, reklam görseli üretimi, günlük takip ve bütçe optimizasyonu. Ölçülebilir sonuç.",
    giris:
      "Reklam bütçesi doğru kurgulanmadığında en hızlı para kaybettiren kanaldır. Doğru kurgulandığında ise en hızlı müşteri getiren kanal.",
    aciklama: [
      "Meta (Instagram ve Facebook) ile Google (arama, görüntülü ağ, YouTube) kampanyalarınızı hedefinize göre kurarız: mesaj, form, arama, satış veya mağaza ziyareti. Piksel ve dönüşüm takibi kurulumdan itibaren doğru veriyle çalışır.",
      "Kampanyalar günlük takip edilir; bütçe işe yarayan reklamlara kaydırılır, yorulan kreatifler yenilenir. Reklam bütçeniz kendi hesabınızdan harcanır, her ay ne harcandığını ve ne kazandırdığını net görürsünüz.",
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
    ],
    gorsel: "/assets/img/inner-service/sercive-details/12.jpg",
    gorselAlt: "Strateji ve danışmanlık çalışması",
  },
];

export function hizmetBul(slug: string): Hizmet | undefined {
  return hizmetler.find((hizmet) => hizmet.slug === slug);
}
