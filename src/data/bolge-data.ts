// Bolge sayfalari katalogu.
//
// Onemli: bu sayfalar sablon doldurularak uretilmez. Her bolge kendi
// isletme dokusunu, kendi ihtiyacini ve kendi ornegini anlatir. Ayni metnin
// ilce adi degistirilerek tekrarlandigi "kapi sayfasi" yaklasimi arama
// motorlari tarafindan cezalandirilir ve markaya zarar verir.

export type Bolge = {
  slug: string;
  ilce: string;
  seoBaslik: string;
  seoAciklama: string;
  h1: string;
  giris: string;
  // Bolgenin isletme dokusu: bu sayfayi digerlerinden ayiran kisim
  doku: string[];
  // Bu bolgede one cikan ihtiyaclar ve karsilik gelen hizmet slug'lari
  odak: { baslik: string; metin: string; hizmetSlug: string }[];
  mesafeNotu: string;
};

export const bolgeler: Bolge[] = [
  {
    slug: "buyukcekmece-sosyal-medya-ajansi",
    ilce: "Büyükçekmece",
    seoBaslik: "Büyükçekmece Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Büyükçekmece'de sosyal medya yönetimi, içerik üretimi ve reklam hizmeti. Stüdyomuz Büyükçekmece'de; çekim için aynı gün sahadayız. Teklif alın.",
    h1: "Büyükçekmece sosyal medya ajansı",
    giris:
      "Studio Gria'nın merkezi Büyükçekmece'de. Bu ilçedeki işletmelerle çalışırken çekim planlamak için takvim ayarlamıyoruz; ekip aynı gün sahada olabiliyor. Yakınlık, özellikle düzenli içerik üretimi gereken işlerde belirgin bir hız farkı yaratıyor.",
    doku: [
      "Büyükçekmece'nin ticari dokusu göl çevresi ve sahil hattında yoğunlaşıyor. Restoran, kafe ve etkinlik mekanları burada rekabet ediyor ve bu işletmelerin en güçlü kozu mekanın kendisi. Doğru saatte çekilmiş bir atmosfer videosu, bu sektörde onlarca tanıtım yazısından daha fazla iş getiriyor.",
      "İlçenin ikinci ağırlığı sağlık ve estetik alanında. Klinikler için içerik üretimi farklı bir disiplin gerektiriyor: sonuç görselleri mevzuata uygun olmalı, güven duygusu abartılı vaatlerle değil süreç anlatımıyla kurulmalı.",
      "Üçüncü grup ise site ve konut projelerinin çevresinde büyüyen perakende. Bu işletmeler için mahalle ölçeğinde hedeflenmiş reklam, geniş kitleye yayılan kampanyalardan çok daha verimli çalışıyor.",
    ],
    odak: [
      {
        baslik: "Göl çevresi mekanlar için atmosfer çekimi",
        metin:
          "Sahil ve göl hattındaki mekanlarda ışık günün belirli saatlerinde çok güçlü. Çekim planını bu saatlere göre kuruyoruz, böylece mekan olduğundan iyi görünüyor.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Mahalle ölçeğinde reklam hedeflemesi",
        metin:
          "Yerel işletme için İstanbul geneline reklam vermek bütçe israfı. Hedeflemeyi ilçe ve çevresiyle sınırlayıp bütçeyi gerçekten müşteri olabilecek kişilere yönlendiriyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "Düzenli içerik akışı",
        metin:
          "Yakınlık sayesinde ayda birden fazla çekim günü planlayabiliyoruz. Bu, hesabın taze kalması gereken sektörlerde önemli bir avantaj.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
    ],
    mesafeNotu: "Stüdyomuz Büyükçekmece'de, çekim için aynı gün sahada olabiliyoruz.",
  },

  {
    slug: "beylikduzu-sosyal-medya-ajansi",
    ilce: "Beylikdüzü",
    seoBaslik: "Beylikdüzü Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Beylikdüzü'nde sosyal medya yönetimi, ürün çekimi ve Meta reklam yönetimi. Perakende ve spor kulüpleriyle çalışma deneyimimizle teklif alın.",
    h1: "Beylikdüzü sosyal medya ajansı",
    giris:
      "Beylikdüzü, Batı İstanbul'un en yoğun perakende hattı. Aynı caddede birbirine çok yakın rakiplerin bulunduğu bir ilçede sosyal medya, fiyat rekabetine girmeden ayrışmanın en pratik yolu.",
    doku: [
      "İlçenin ticari kimliğini alışveriş merkezleri ve cadde mağazacılığı belirliyor. Bu işletmeler için içerik üretiminde belirleyici olan ürünün kendisi: iyi çekilmiş bir ürün videosu, mağazaya gelmeyi düşünen kişinin kararını doğrudan etkiliyor.",
      "Beylikdüzü aynı zamanda güçlü bir spor kulübü kültürüne sahip. Kulüpler ve spor okulları için ürettiğimiz içerikler, veli iletişimi ve sponsor ilişkileri açısından farklı bir işlev taşıyor; burada amaç satış değil aidiyet kurmak.",
      "Üçüncü grup hizmet işletmeleri: kuaför, güzellik merkezi, diş kliniği. Bu alanda randevuya dönüşen içerik türü nettir; öncesi ve sonrası anlatımı ile ekip tanıtımı diğer formatların önüne geçiyor.",
    ],
    odak: [
      {
        baslik: "Ürün odaklı çekim",
        metin:
          "Perakende işletmesi için ürünün doğru görünmesi her şey. Ürün videolarını hareket ve detay üzerine kuruyoruz, sabit katalog karesiyle yetinmiyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Spor kulübü ve etkinlik medyası",
        metin:
          "Maç günü çekimi, sezon tanıtımı ve sponsor görünürlüğü için kulüplerle çalışıyoruz. Bu iş, haftalık ritmi olan ayrı bir üretim disiplini.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Rekabetin yoğun olduğu yerde reklam",
        metin:
          "Aynı hizmeti veren çok sayıda işletmenin olduğu bir ilçede reklamın işi dikkat çekmek değil, doğru kişiyi bulmak. Hedefleme ve kreatif birlikte kurgulanmalı.",
        hizmetSlug: "reklam-yonetimi",
      },
    ],
    mesafeNotu: "Büyükçekmece'deki stüdyomuza yaklaşık on beş dakika mesafede.",
  },

  {
    slug: "esenyurt-sosyal-medya-ajansi",
    ilce: "Esenyurt",
    seoBaslik: "Esenyurt Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Esenyurt'ta üretici ve toptancı firmalar için sosyal medya yönetimi, ürün çekimi ve B2B içerik üretimi. Tesis çekimi ve katalog prodüksiyonu.",
    h1: "Esenyurt sosyal medya ajansı",
    giris:
      "Esenyurt'un ticari yapısı Batı İstanbul'un diğer ilçelerinden belirgin şekilde ayrılıyor. Burada perakende kadar üretim ve toptan satış ağırlıkta, dolayısıyla sosyal medyanın işlevi de farklı: hedef kitle son tüketici değil, çoğu zaman başka bir işletme.",
    doku: [
      "Üretici firmalar için sosyal medya bir vitrin değil, bir güven belgesi. Potansiyel bayi ya da kurumsal alıcı, çalışacağı firmanın tesisini ve üretim kapasitesini görmek istiyor. Bu yüzden tesis çekimi ve üretim hattı videoları, ürün fotoğrafından daha belirleyici olabiliyor.",
      "Toptan satış yapan firmalarda içeriğin ikinci işlevi katalog. Ürün gamının düzenli ve tutarlı biçimde görüntülenmesi, satış ekibinin işini doğrudan kolaylaştırıyor.",
      "İlçede ayrıca hızla büyüyen bir yerel hizmet ekonomisi var. Bu işletmeler için mahalle ölçeğinde hedefleme, ilçenin nüfus yoğunluğu nedeniyle özellikle verimli çalışıyor.",
    ],
    odak: [
      {
        baslik: "Tesis ve üretim hattı çekimi",
        metin:
          "Üretim yapan bir firmanın en güçlü içeriği kendi tesisi. Hattı çalışırken çekmek, kurumsal alıcı için hazırlanmış her sunumdan daha ikna edici.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Ürün gamı ve katalog prodüksiyonu",
        metin:
          "Geniş ürün gamı olan firmalarda tutarlılık esastır. Tüm ürünlerin aynı ışık ve aynı çerçeve disiplininde çekilmesi katalogu profesyonel kılar.",
        hizmetSlug: "e-ticaret-entegrasyonlari",
      },
      {
        baslik: "Havadan tesis görüntüsü",
        metin:
          "Büyük ölçekli tesislerde drone çekimi, işletmenin gerçek kapasitesini tek karede anlatan en etkili yöntem.",
        hizmetSlug: "drone-cekimleri",
      },
    ],
    mesafeNotu: "Stüdyomuza yaklaşık yirmi dakika mesafede, tesis çekimleri için düzenli olarak bölgedeyiz.",
  },

  {
    slug: "avcilar-sosyal-medya-ajansi",
    ilce: "Avcılar",
    seoBaslik: "Avcılar Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Avcılar'da işletmeler için sosyal medya yönetimi, içerik üretimi ve reklam yönetimi. Öğrenci yoğunluklu kitleye uygun içerik stratejisi.",
    h1: "Avcılar sosyal medya ajansı",
    giris:
      "Avcılar'ı diğer Batı İstanbul ilçelerinden ayıran şey kitlesinin yaş ortalaması. Üniversite çevresinde şekillenen genç bir nüfus, hem içerik dilini hem tercih edilen platformu doğrudan etkiliyor.",
    doku: [
      "Genç kitleye satış yapan işletmelerde kurumsal ve mesafeli bir dil işe yaramıyor. Bu kitle samimi, hızlı ve kendi diliyle konuşan içerikten karşılık veriyor. Aynı işletme için Instagram'da çalışan bir üslup, kurumsal bir müşteride tamamen ters tepebilir.",
      "İlçede yeme içme ve kafe yoğunluğu yüksek ve rekabet fiyat üzerinden ilerliyor. Sosyal medyanın buradaki işlevi fiyat rekabetinden çıkıp mekan kimliği kurmak.",
      "Sahil hattı ve kampüs çevresi, çekim için elverişli bir görsel zemin sunuyor. Mekan dışında çekilen içerikler markaya ilçeyle özdeşleşen bir kimlik kazandırabiliyor.",
    ],
    odak: [
      {
        baslik: "Genç kitleye uygun içerik dili",
        metin:
          "Marka sesini hedef kitleye göre kuruyoruz. Genç kitleye satış yapan bir işletmenin hesabı, kurumsal bir firmanın hesabı gibi görünmemeli.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Kısa video üretimi",
        metin:
          "Bu kitlede erişimin neredeyse tamamı kısa videodan geliyor. Üretimi buna göre planlıyor, ağırlığı reels tarafına veriyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Kampanya dönemlerinde reklam",
        metin:
          "Dönem başı ve sınav dönemleri gibi belirgin hareketlilik zamanları var. Reklam bütçesini yıla eşit dağıtmak yerine bu dönemlere yoğunlaştırmak daha verimli.",
        hizmetSlug: "reklam-yonetimi",
      },
    ],
    mesafeNotu: "Stüdyomuza yaklaşık yirmi beş dakika mesafede.",
  },

  {
    slug: "basaksehir-sosyal-medya-ajansi",
    ilce: "Başakşehir",
    seoBaslik: "Başakşehir Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Başakşehir ve Bahçeşehir'de kurumsal firmalar, klinikler ve konut projeleri için sosyal medya yönetimi, prodüksiyon ve reklam hizmeti.",
    h1: "Başakşehir sosyal medya ajansı",
    giris:
      "Başakşehir, planlı yerleşim yapısı ve kurumsal iş merkezleriyle Batı İstanbul'un en yeni ticari merkezlerinden biri. Buradaki işletmelerin beklentisi genelde daha kurumsal bir görsel dil oluyor.",
    doku: [
      "İlçede sağlık ve estetik alanında yoğun bir yatırım var. Bu alanda içerik üretimi hassas: mevzuata uygunluk, hasta mahremiyeti ve abartısız anlatım aynı anda gözetilmeli. Güven duygusu vaatle değil, süreci şeffaf göstererek kuruluyor.",
      "İkinci ağırlık konut projeleri ve gayrimenkul. Bu sektörde havadan çekim ve mekan turu, satış sürecinin doğrudan parçası haline gelmiş durumda. Bir projenin konumunu ve çevresini anlatan tek bir drone çekimi, sayfalarca metnin işini görüyor.",
      "Üçüncü grup, iş merkezlerindeki kurumsal firmalar. Bu firmalarda sosyal medyanın önceliği satış değil işveren markası ve sektörel görünürlük; içerik stratejisi de buna göre kuruluyor.",
    ],
    odak: [
      {
        baslik: "Klinikler için ölçülü içerik",
        metin:
          "Sağlık alanında içerik üretirken mevzuata uygunluk ve ölçülü anlatım esas. Süreci anlatan içerik, sonuç vaadi veren içerikten hem daha güvenli hem daha etkili.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Konut projeleri için havadan çekim",
        metin:
          "Projenin konumunu, çevresini ve ölçeğini anlatmanın en hızlı yolu havadan çekim. Gayrimenkul tanıtımında belirleyici bir fark yaratıyor.",
        hizmetSlug: "drone-cekimleri",
      },
      {
        baslik: "Kurumsal marka kimliği",
        metin:
          "Kurumsal beklentisi olan firmalarda tutarlı bir görsel sistem gerekiyor. Kimlik çalışmasını içerik üretiminden önce tamamlıyoruz.",
        hizmetSlug: "marka-kimligi-tasarim",
      },
    ],
    mesafeNotu: "Stüdyomuza yaklaşık otuz dakika mesafede, Bahçeşehir hattında düzenli çalışıyoruz.",
  },
];

export function bolgeBul(slug: string): Bolge | undefined {
  return bolgeler.find((bolge) => bolge.slug === slug);
}
