// Bolge sayfalari katalogu.
//
// Onemli: bu sayfalar sablon doldurularak uretilmez. Her bolge kendi
// isletme dokusunu, kendi ihtiyacini ve kendi ornegini anlatir. Ayni metnin
// ilce adi degistirilerek tekrarlandigi "kapi sayfasi" yaklasimi arama
// motorlari tarafindan cezalandirilir ve markaya zarar verir.

export type Bolge = {
  slug: string;
  ilce: string;
  // /bolgeler sayfasinda iki yakaya gore gruplama icin
  yaka: "Avrupa" | "Anadolu";
  seoBaslik: string;
  seoAciklama: string;
  h1: string;
  giris: string;
  // Bolgenin isletme dokusu: bu sayfayi digerlerinden ayiran kisim
  doku: string[];
  // Bu bolgede one cikan ihtiyaclar ve karsilik gelen hizmet slug'lari
  odak: { baslik: string; metin: string; hizmetSlug: string }[];
  mesafeNotu: string;
  // Ilceye ozgu sorular: sayfada akordeon, FAQPage semasi buradan uretilir.
  // Cevaplar o ilcenin dokusundan cikar; baska ilceden kopyalanmaz.
  sorular?: { soru: string; cevap: string }[];
};

export const bolgeler: Bolge[] = [
  {
    slug: "buyukcekmece-sosyal-medya-ajansi",
    ilce: "Büyükçekmece",
    yaka: "Avrupa",
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
    sorular: [
      {
        soru: "Büyükçekmece'de göl çevresindeki restoran için sosyal medya ajansı ne yapar?",
        cevap:
          "Göl ve sahil hattındaki bir restoran için ajans, mekânın atmosferini doğru saatte çekip düzenli bir içerik akışına çevirir. Bu hatta işletmenin en güçlü kozu mekânın kendisi olduğu için çekimi ışığın güçlü olduğu saatlere göre planlıyoruz. Aylık yönetim ve ilçe çevresiyle sınırlanmış reklam buna eşlik eder. Stüdyomuz Büyükçekmece'de olduğundan çekim için aynı gün sahada olabiliyoruz.",
      },
      {
        soru: "Klinik için sosyal medya içeriği mevzuata uygun nasıl hazırlanır?",
        cevap:
          "Klinik içeriği sonuç vaadiyle değil, süreç ve ekip anlatımıyla hazırlanır. Öncesi-sonrası ve vaat içeren paylaşımlar sağlık mevzuatıyla sınırlıdır; bu yüzden sonuç görsellerini mevzuata uygun tutar, güveni abartılı vaatle değil ekibi, ortamı ve işleyişi göstererek kurarız. Çekim planı ve paylaşım düzeni işletmeyle birlikte kurulur; ekip, ortam ve işleyiş gösterilir, sonuç vaadi verilmez.",
      },
      {
        soru: "Site ve konut projelerinin çevresindeki mağaza için reklam nasıl hedeflenir?",
        cevap:
          "Reklam, İstanbul geneline değil mahalle ölçeğine hedeflenir. Yerel bir işletme için geniş kitleye reklam vermek bütçe israfıdır; hedeflemeyi ilçe ve çevresiyle sınırlayıp bütçeyi gerçekten müşteri olabilecek kişilere yönlendiririz. Konut projelerinin çevresinde büyüyen perakendede bu yaklaşım, geniş kitleye yayılan kampanyalardan daha verimli çalışır.",
      },
    ],
  },

  {
    slug: "beylikduzu-sosyal-medya-ajansi",
    ilce: "Beylikdüzü",
    yaka: "Avrupa",
    seoBaslik: "Beylikdüzü Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Beylikdüzü'nde sosyal medya yönetimi, ürün çekimi ve Meta reklam yönetimi. Perakende ve spor kulüpleriyle çalışma deneyimimizle teklif alın.",
    h1: "Beylikdüzü sosyal medya ajansı",
    giris:
      "Beylikdüzü, Avrupa yakasının en yoğun perakende hatlarından biri. Aynı caddede birbirine çok yakın rakiplerin bulunduğu bir ilçede sosyal medya, fiyat rekabetine girmeden ayrışmanın en pratik yolu.",
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
    sorular: [
      {
        soru: "Beylikdüzü'nde mağazam için ürün videosu nasıl çekilir?",
        cevap:
          "Perakende mağazası için ürün videosu hareket ve detay üzerine kurulur; sabit katalog karesiyle yetinilmez. Mağazaya gelmeyi düşünen kişinin kararını ürünün nasıl göründüğü etkilediği için ürünü ışık ve açı değişimiyle gösteririz. Bu çekimler prodüksiyonlu modelde aylık saha çekimine dahildir; Büyükçekmece'deki stüdyomuza yaklaşık on beş dakika mesafedeyiz.",
      },
      {
        soru: "Spor okulu için sosyal medya yönetimi nasıl işler?",
        cevap:
          "Spor kulübü ve okulunda sosyal medyanın amacı satış değil aidiyet kurmaktır. Maç günü çekimi, sezon tanıtımı ve sponsor görünürlüğü etrafında haftalık ritmi olan bir plan kurarız. Veli iletişimi ve sponsor ilişkileri de aynı içerik akışından beslenir. Spor kulüpleriyle çalıştık ve bu işi ayrı bir üretim disiplini olarak ele alıyoruz.",
      },
      {
        soru: "Kuaför ya da güzellik merkezi için hangi içerik randevuya dönüşür?",
        cevap:
          "Hizmet işletmelerinde randevuya en çok dönüşen içerik, ekip tanıtımı ve öncesi-sonrası anlatımıdır. Kuaför, güzellik merkezi gibi işletmelerde bu formatlar diğerlerinin önüne geçer. Diş kliniği gibi sağlık alanlarında öncesi-sonrası ve vaat içeren paylaşımlar sağlık mevzuatıyla sınırlı olduğundan, orada süreç ve ekip anlatımıyla ilerleriz.",
      },
    ],
  },

  {
    slug: "esenyurt-sosyal-medya-ajansi",
    ilce: "Esenyurt",
    yaka: "Avrupa",
    seoBaslik: "Esenyurt Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Esenyurt'ta üretici ve toptancı firmalar için sosyal medya yönetimi, ürün çekimi ve B2B içerik üretimi. Tesis çekimi ve katalog prodüksiyonu.",
    h1: "Esenyurt sosyal medya ajansı",
    giris:
      "Esenyurt'un ticari yapısı çevresindeki ilçelerden belirgin şekilde ayrılıyor. Burada perakende kadar üretim ve toptan satış ağırlıkta, dolayısıyla sosyal medyanın işlevi de farklı: hedef kitle son tüketici değil, çoğu zaman başka bir işletme.",
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
    sorular: [
      {
        soru: "Esenyurt'taki üretici firma için sosyal medya neden gerekli?",
        cevap:
          "Üretici firma için sosyal medya bir vitrin değil, alıcıya güven veren bir belgedir. Potansiyel bayi ya da kurumsal alıcı, çalışacağı firmanın tesisini ve üretim kapasitesini görmek ister. Bu yüzden tesis çekimi ve üretim hattı videoları ürün fotoğrafından daha belirleyici olabilir. Büyük tesislerde havadan görüntü için drone çekimi de yapıyoruz.",
      },
      {
        soru: "Toptancı için ürün kataloğu çekimi nasıl yapılır?",
        cevap:
          "Geniş ürün gamı olan toptancıda katalog çekimi, tüm ürünlerin aynı ışık ve aynı çerçeve disiplininde çekilmesiyle yapılır. Tutarlılık kataloğu profesyonel gösterir ve satış ekibinin işini doğrudan kolaylaştırır. Ürün gamı düzenli ve tutarlı biçimde görüntülendikten sonra aynı görseller sosyal medya içeriğinin de temelini oluşturur.",
      },
      {
        soru: "Esenyurt'taki yerel işletmem için aylık sosyal medya yönetimi ne kadar tutar?",
        cevap:
          "Genel bantta prodüksiyonsuz model 25.000-35.000 TL, prodüksiyonlu model 30.000-60.000 TL aralığındadır; kesin tutar işletmenin ihtiyacına göre teklifte belirlenir. Prodüksiyonsuzda çekim günü yoktur, yönetim uzaktan yürür. Prodüksiyonlu modelde aylık saha çekimi dahildir. Yerel hizmet işletmeleri için hedeflemeyi mahalle ölçeğinde kurabiliriz. Hangi modelin uygun olduğu, işletmenin ihtiyacı konuşulduktan sonra net hale gelir.",
      },
    ],
  },

  {
    slug: "avcilar-sosyal-medya-ajansi",
    ilce: "Avcılar",
    yaka: "Avrupa",
    seoBaslik: "Avcılar Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Avcılar'da işletmeler için sosyal medya yönetimi, içerik üretimi ve reklam yönetimi. Öğrenci yoğunluklu kitleye uygun içerik stratejisi.",
    h1: "Avcılar sosyal medya ajansı",
    giris:
      "Avcılar'ı çevresindeki ilçelerden ayıran şey kitlesinin yaş ortalaması. Üniversite çevresinde şekillenen genç bir nüfus, hem içerik dilini hem tercih edilen platformu doğrudan etkiliyor.",
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
    sorular: [
      {
        soru: "Avcılar'da genç kitleye satış yapan kafenin Instagram hesabı nasıl yönetilir?",
        cevap:
          "Genç kitleye satış yapan kafede Instagram samimi, hızlı ve kendi diliyle konuşan içerikle yönetilir; kurumsal ve mesafeli bir dil bu kitlede işe yaramaz. Ağırlığı reels'e veririz, çünkü bu kitlede erişimin neredeyse tamamı kısa videodan gelir. Amaç fiyat rekabetinden çıkıp mekân kimliği kurmaktır.",
      },
      {
        soru: "Dönem başı ve sınav dönemleri için reklam bütçesi nasıl dağıtılmalı?",
        cevap:
          "Bütçeyi yıla eşit dağıtmak yerine dönem başı ve sınav dönemleri gibi belirgin hareketlilik zamanlarına yoğunlaştırmak daha verimlidir. Üniversite çevresinde şekillenen genç nüfus bu dönemlerde daha aktif olduğundan, reklamı kampanya dönemlerine göre planlarız. Hedeflemeyi ilçe ve çevresiyle sınırlamak da bütçeyi korur.",
      },
      {
        soru: "Sahil ve kampüs çevresinde çekilen içerik markaya ne katar?",
        cevap:
          "Mekân dışında çekilen içerik, markaya bölgeyle özdeşleşen bir kimlik kazandırır. Sahil hattı ve kampüs çevresi çekim için elverişli bir görsel zemin sunar. Bu zeminde üretilen kısa videolar markayı yalnızca bir adres olarak değil, bölgenin parçası olarak gösterir. Çekimi prodüksiyonlu modelde aylık saha çekiminin içinde planlarız.",
      },
    ],
  },

  {
    slug: "basaksehir-sosyal-medya-ajansi",
    ilce: "Başakşehir",
    yaka: "Avrupa",
    seoBaslik: "Başakşehir ve Bahçeşehir Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Başakşehir ve Bahçeşehir'de klinikler, konut projeleri ve kurumsal firmalar için sosyal medya yönetimi, drone çekimi ve reklam hizmeti. Teklif alın.",
    h1: "Başakşehir ve Bahçeşehir sosyal medya ajansı",
    giris:
      "Başakşehir, planlı yerleşim yapısı ve kurumsal iş merkezleriyle İstanbul'un en yeni ticari merkezlerinden biri. Buradaki işletmelerin beklentisi genelde daha kurumsal bir görsel dil oluyor.",
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
    sorular: [
      {
        soru: "Başakşehir'de klinik sosyal medyada öncesi-sonrası paylaşabilir mi?",
        cevap:
          "Öncesi-sonrası ve vaat içeren paylaşımlar sağlık mevzuatıyla sınırlıdır; bu yüzden klinik içeriği süreç ve ekip anlatımıyla kurulur. Mevzuata uygunluk, hasta mahremiyeti ve abartısız anlatım aynı anda gözetilmelidir. Güven vaatle değil, süreci şeffaf göstererek oluşur. Ekibi, ortamı ve işleyişi anlatan içerik hem daha güvenli hem daha etkilidir.",
      },
      {
        soru: "Konut projesi tanıtımında drone çekimi neden kullanılır?",
        cevap:
          "Drone çekimi, projenin konumunu ve çevresini tek karede anlattığı için kullanılır. Konut ve gayrimenkul pazarlamasında havadan çekim ve mekân turu satış sürecinin doğrudan parçası haline gelmiştir. Tek bir drone çekimi, sayfalarca metnin işini görür ve satış ekibinin elindeki en hızlı anlatım aracına dönüşür.",
      },
      {
        soru: "İş merkezindeki kurumsal firma sosyal medyaya nereden başlamalı?",
        cevap:
          "Önce marka kimliği ve görsel sistem tamamlanmalı, ardından içerik üretimine geçilmelidir. Kurumsal beklentisi olan firmalarda tutarlı bir görsel dil gerekir. Bu firmalarda sosyal medyanın önceliği genellikle satış değil, işveren markası ve sektörel görünürlüktür; içerik stratejisini buna göre kurarız. Kimlik çalışmasını içerik üretiminden önce tamamlıyoruz; böylece sonraki her paylaşım aynı görsel sistemin içinde kalır.",
      },
    ],
  },

  {
    slug: "kucukcekmece-sosyal-medya-ajansi",
    ilce: "Küçükçekmece",
    yaka: "Avrupa",
    seoBaslik: "Küçükçekmece Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Küçükçekmece'de sosyal medya yönetimi, içerik üretimi ve reklam hizmeti. Halkalı, Sefaköy ve Atakent'teki yerel işletmeler için teklif alın.",
    h1: "Küçükçekmece sosyal medya ajansı",
    giris:
      "Küçükçekmece, yoğun konut dokusuyla İstanbul'un en kalabalık ilçelerinden biri ve ticari hayatı da buna göre şekilleniyor. Büyük zincirlerin değil, mahallesinde tanınan yerel işletmelerin ağırlıkta olduğu bir ilçe; burada sosyal medyanın işi, yakındaki müşteriye işletmenin varlığını ve farkını düzenli olarak hatırlatmak.",
    doku: [
      "İlçenin ticari hayatı büyük ölçüde cadde ve mahalle ölçeğinde dönüyor. Halkalı, Sefaköy ve Atakent gibi semtlerde fırından kuaföre, kafeden optik mağazasına kadar zincir olmayan işletmeler aynı müşteri için yarışıyor. Bu işletmelerin en güçlü kozu yakınlık ve tanıdıklık; içerik de bu samimiyeti taşımalı, uzaktan çekilmiş kurumsal bir tanıtım gibi durmamalı.",
      "Yoğun konut nüfusu sağlık ve eğitim hizmetlerine de güçlü bir talep yaratıyor. Diş klinikleri, fizik tedavi merkezleri, kurslar ve anaokulları için sosyal medya bir güven belgesi işlevi görüyor. Veli ya da hasta kapıdan girmeden önce ekibi, ortamı ve işleyişi görmek istiyor; abartılı vaat yerine süreci şeffaf gösteren içerik burada daha iyi karşılık buluyor.",
      "Göl çevresi ise yeme içme ve hafta sonu gezmesi için ayrı bir hareketlilik yaratıyor. Bu hatta çalışan mekanlar için manzara ve atmosfer, çoğu zaman menüden önce satılan şey oluyor; doğru saatte çekilmiş bir mekan videosu burada tanıtım metninden daha fazla iş görüyor.",
    ],
    odak: [
      {
        baslik: "Semt bazlı reklam kurgusu",
        metin:
          "Küçükçekmece geniş bir ilçe; Halkalı'daki bir işletmenin müşterisi ile Atakent'teki bir işletmenin müşterisi aynı kişi değil. Reklam hedeflemesini ilçe geneline değil, işletmenin gerçekten hizmet verdiği semte ve çevresine göre kuruyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "Klinik ve eğitim kurumları için güven içeriği",
        metin:
          "Ekip tanıtımı, ortamın gerçek görüntüsü ve sürecin adım adım anlatımı; bu kurumlarda randevu ve kayıt kararını en çok etkileyen içerikler. Çekimi mahremiyet ve mevzuat kurallarına uygun şekilde planlıyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Cadde işletmeleri için düzenli kısa video",
        metin:
          "Yerel işletmenin hesabı düzenli ve samimi kısa videolarla canlı kalır. Çekim günlerini toplu planlayarak birkaç haftalık içeriği tek seferde üretebiliyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
    ],
    mesafeNotu:
      "Büyükçekmece'deki stüdyomuzun doğusundaki komşu ilçe; planlı çekimlerin yanında gerektiğinde aynı gün sahada olabiliyoruz.",
    sorular: [
      {
        soru: "Küçükçekmece'de Halkalı'daki bir işletme reklamı hangi bölgeye hedeflemeli?",
        cevap:
          "Reklam ilçe geneline değil, işletmenin gerçekten hizmet verdiği semte ve çevresine hedeflenmelidir. Halkalı'daki bir işletmenin müşterisi ile Atakent'teki bir işletmenin müşterisi aynı kişi değildir. Meta ve Google reklamlarında hedefleme ilçe ve çevresiyle sınırlanabildiği için bütçe, müşteri olabilecek kişilere gider. Böylece reklam, farklı semtlerdeki farklı müşteri havzalarına ayrı ayrı kurgulanabilir.",
      },
      {
        soru: "Anaokulu ya da kurs için sosyal medya veliye nasıl güven verir?",
        cevap:
          "Veli kapıdan girmeden önce ekibi, ortamı ve işleyişi görmek ister; sosyal medya bu noktada bir güven belgesi işlevi görür. Ekip tanıtımı, ortamın gerçek görüntüsü ve sürecin adım adım anlatımı kayıt kararını en çok etkileyen içeriklerdir. Abartılı vaat yerine süreci şeffaf gösteririz.",
      },
      {
        soru: "Mahalledeki fırın ya da kuaför için kısa video ne sıklıkla çekilmeli?",
        cevap:
          "Düzenli ve samimi kısa videolar hesabı canlı tutar; sıklık işletmeye göre teklifte belirlenir. Çekim günlerini toplu planlayarak birkaç haftalık içeriği tek seferde üretebiliyoruz. Zincir olmayan bir işletmede içerik yakınlığı ve tanıdıklığı taşımalı, uzaktan çekilmiş kurumsal bir tanıtım gibi durmamalıdır. Hesap bu sayede mahallenin tanıdığı, güvenilir bir işletme gibi görünür.",
      },
    ],
  },

  {
    slug: "silivri-sosyal-medya-ajansi",
    ilce: "Silivri",
    yaka: "Avrupa",
    seoBaslik: "Silivri Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Silivri'de oteller, tatil tesisleri, bungalovlar ve sahil restoranları için sosyal medya yönetimi, drone çekimi ve sezon reklamları. Teklif alın.",
    h1: "Silivri sosyal medya ajansı",
    giris:
      "Silivri'nin ticari takvimi büyük ölçüde mevsime bağlı. Yaz aylarında ve hafta sonlarında sahil hattı, yazlıklar ve tatil tesisleri hareketleniyor; kışın ise yerel müşteriyle ayakta kalan bir ekonomi devreye giriyor. Sosyal medya planı da bu iki farklı dönemi ayrı ayrı düşünmek zorunda.",
    doku: [
      "İlçenin en görünür sektörü konaklama ve hafta sonu turizmi. Tatil tesisleri, butik oteller ve bungalov işletmeleri için sosyal medya çoğu zaman rezervasyonun başladığı yer; misafir fiyatı sormadan önce mekanın havasını, odasını ve çevresini görmek istiyor. Bu işletmelerde doğru çekilmiş bir mekan videosu, rezervasyon kanalına en kısa yoldan ziyaretçi getiren içerik oluyor.",
      "Sahil hattındaki restoranlar ve balık lokantaları için rekabet manzara ve atmosfer üzerinden ilerliyor. Aynı sahilde yan yana duran mekanlar arasındaki tercih, çoğu zaman misafirin Instagram'da gördüğü bir gün batımı karesiyle yapılıyor.",
      "Silivri aynı zamanda tarım ve gıda üretiminin güçlü olduğu bir ilçe. Yerel üreticiler ve gıda markaları için içerik, ürünün nereden geldiğini ve nasıl üretildiğini göstermeye dayanıyor; tarladan ya da üretim yerinden çekilmiş görüntüler, ambalajlı ürün fotoğrafından daha fazla güven veriyor.",
    ],
    odak: [
      {
        baslik: "Sezona göre reklam takvimi",
        metin:
          "Konaklama kararları sezondan haftalar önce veriliyor. Reklam bütçesini yıla eşit yaymak yerine sezon öncesi ve hafta sonu öncesi dönemlere yoğunlaştırıyor, kış aylarında yerel kitleye dönük kampanyalarla işletmeyi görünür tutuyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
      {
        baslik: "Tesis ve sahil için havadan çekim",
        metin:
          "Havuzun denize, bungalovun doğaya ya da tesisin sahile olan ilişkisini tek karede göstermenin en iyi yolu drone çekimi. Uçuş planını ışığın en güçlü olduğu saatlere göre kuruyoruz.",
        hizmetSlug: "drone-cekimleri",
      },
      {
        baslik: "Rezervasyon odaklı içerik akışı",
        metin:
          "Oda, kahvaltı, çevre ve deneyim; misafirin rezervasyondan önce görmek istediği her şeyi planlı bir içerik akışına dönüştürüyor, profilden rezervasyon kanalına giden yolu kısaltıyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
    ],
    mesafeNotu:
      "Büyükçekmece'deki stüdyomuzun batısında; sezon öncesi ve hafta sonu çekimlerini önceden planlayarak bölgede çalışıyoruz.",
    sorular: [
      {
        soru: "Silivri'de bungalov ya da butik otel için sosyal medya rezervasyona nasıl yardım eder?",
        cevap:
          "Konaklamada sosyal medya çoğu zaman rezervasyonun başladığı yerdir. Misafir fiyat sormadan önce mekânın havasını, odasını ve çevresini görmek ister. Oda, kahvaltı, çevre ve deneyimi planlı bir içerik akışına dönüştürerek profilden rezervasyon kanalına giden yolu kısaltırız. Doğru çekilmiş bir mekân videosu bu akışın en güçlü parçasıdır.",
      },
      {
        soru: "Sezonluk tesis için reklam ne zaman başlamalı?",
        cevap:
          "Sezondan haftalar önce başlamalıdır, çünkü konaklama kararları sezondan haftalar önce verilir. Reklam bütçesini yıla eşit yaymak yerine sezon öncesi ve hafta sonu öncesi dönemlere yoğunlaştırırız. Kış aylarında ise yerel kitleye dönük kampanyalarla işletmeyi görünür tutarız. Böylece rezervasyon kararı verilen dönemde işletme, doğru kitlenin önünde olur ve bütçe yıl boyu eşit dağılıp erimez.",
      },
      {
        soru: "Yerel gıda üreticisi için hangi içerik güven verir?",
        cevap:
          "Ürünün nereden geldiğini ve nasıl üretildiğini gösteren içerik güven verir. Tarladan ya da üretim yerinden çekilmiş görüntüler, ambalajlı ürün fotoğrafından daha fazla güven oluşturur. Bu yüzden yerel üreticiler ve gıda markaları için çekimi üretimin kendi ortamına kurar, hikâyeyi ürünün yolculuğu üzerinden anlatırız.",
      },
    ],
  },

  // ---------- Avrupa yakasi merkez ilceler (28 Eyl 2026) ----------

  {
    slug: "besiktas-sosyal-medya-ajansi",
    ilce: "Beşiktaş",
    yaka: "Avrupa",
    seoBaslik: "Beşiktaş Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Beşiktaş'ta Boğaz restoranları, butik oteller, spor ve kurumsal markalar için sosyal medya yönetimi, prodüksiyon ve reklam. Bebek'ten Levent'e teklif alın.",
    h1: "Beşiktaş sosyal medya ajansı",
    giris:
      "Beşiktaş, Boğaz kıyısındaki restoranlarından Levent'in iş kulelerine kadar İstanbul'un en farklı ölçekteki markalarını aynı ilçede topluyor. Burada sosyal medya hem misafir çeken bir vitrin hem de kurumsal itibarın parçası.",
    doku: [
      "Bebek, Arnavutköy ve Ortaköy hattında Boğaz manzaralı restoranlar, kafeler ve gece mekânları yoğun. Bu işletmelerin en güçlü kozu konum ve atmosfer; misafir rezervasyon yapmadan önce masayı, manzarayı ve servisi görmek istiyor. Gün batımına göre planlanmış tek bir mekân videosu, bu hatta aylarca kullanılabilecek bir satış aracına dönüşüyor.",
      "Akaretler ve Beşiktaş çarşısı çevresinde butik oteller, tasarım mağazaları ve konsept dükkânlar var; Etiler ve Levent'te ise genel merkezler ve profesyonel hizmet firmaları. Kurumsal tarafta sosyal medyanın önceliği satış değil: işveren markası, sektörel görünürlük ve LinkedIn'de güvenilir bir duruş.",
      "Beşiktaş aynı zamanda güçlü bir spor kimliği taşıyor. Spor kulüpleri ve spor markaları için içerik, taraftarla ve sporcuyla kurulan aidiyet üzerinden çalışıyor. Beşiktaş Spor Kulübü ile sosyal medya ve reklam yönetimi alanında çalıştık; bu disiplinde maç takvimi ve haftalık ritim, içerik planının omurgası.",
    ],
    odak: [
      {
        baslik: "Boğaz hattı mekânları için atmosfer çekimi",
        metin:
          "Işığın en güçlü olduğu saatlere göre çekim planı kuruyor; mekânın manzarasını, servisini ve misafir deneyimini rezervasyona dönüşen içeriklere çeviriyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Kurumsal firmalar için işveren markası",
        metin:
          "Levent ve Etiler'deki kurumsal firmalar için içerik stratejisini satış yerine itibar, yetenek çekme ve sektörel görünürlük hedefleriyle kuruyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Spor kulüpleri ve spor markaları için medya",
        metin:
          "Maç günü, sezon tanıtımı ve sponsor görünürlüğü için haftalık ritmi olan bir üretim ve reklam planı kuruyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Beşiktaş'taki çekimleri ışığa ve mekânın yoğunluğuna göre önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz.",
    sorular: [
      {
        soru: "Beşiktaş'ta Boğaz manzaralı restoran için sosyal medya nasıl yönetilir?",
        cevap:
          "Boğaz manzaralı restoranda sosyal medya, konum ve atmosfer üzerine kurulur. Misafir rezervasyon yapmadan önce masayı, manzarayı ve servisi görmek ister. Gün batımına göre planlanmış tek bir mekân videosu bu hatta aylarca kullanılabilecek bir satış aracına dönüşür. Çekimi ışığa ve mekânın yoğunluğuna göre önceden takvimler, ekip ve ekipmanla sahaya geliriz.",
      },
      {
        soru: "Levent'teki kurumsal firma sosyal medyadan ne beklemeli?",
        cevap:
          "Kurumsal firmada sosyal medyanın önceliği satış değil; işveren markası, sektörel görünürlük ve LinkedIn'de güvenilir bir duruştur. İçerik stratejisini itibar, yetenek çekme ve görünürlük hedefleriyle kurarız. Satış dilinden çok ekibi ve uzmanlığı gösteren düzenli bir içerik akışı bu firmalara uygun düşer.",
      },
      {
        soru: "Spor markası ya da kulübü için içerik ve reklam maç takvimine göre nasıl planlanır?",
        cevap:
          "Maç takvimi ve haftalık ritim, planın omurgasını oluşturur. Spor kulüplerinde içerik taraftarla ve sporcuyla kurulan aidiyet üzerinden çalışır; maç günü, sezon tanıtımı ve sponsor görünürlüğü için haftalık ritmi olan bir üretim ve reklam planı kurarız. Beşiktaş Spor Kulübü ile bu alanda çalıştık.",
      },
    ],
  },

  {
    slug: "sisli-sosyal-medya-ajansi",
    ilce: "Şişli",
    yaka: "Avrupa",
    seoBaslik: "Şişli Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Şişli'de moda, butik, güzellik ve kurumsal markalar için sosyal medya yönetimi, kampanya çekimi ve reklam. Nişantaşı'ndan Mecidiyeköy'e teklif alın.",
    h1: "Şişli sosyal medya ajansı",
    giris:
      "Şişli, İstanbul'un moda ve iş hayatının kesiştiği ilçe. Nişantaşı'nın butiklerinde marka algısı, Mecidiyeköy ve Esentepe'nin ofislerinde kurumsal itibar konuşuluyor; iki taraf için de sosyal medya markanın ilk izlenimi.",
    doku: [
      "Nişantaşı ve Teşvikiye'de moda markaları, tasarımcı butikleri, güzellik ve estetik merkezleri yoğunlaşıyor. Bu işletmelerde ürün fotoğrafı yetmiyor; markanın dünyasını anlatan bir görsel dil gerekiyor. Kampanya çekimi, sezon lansmanı ve mağaza içi içerik aynı estetik çizginin parçası olmalı.",
      "Mecidiyeköy, Esentepe ve Fulya hattında ise genel merkezler, ajanslar, hukuk ve danışmanlık firmaları çalışıyor. Bu firmalar için içerik stratejisi uzmanlığı görünür kılmaya dayanıyor: ekip, bakış açısı ve sektöre dair net bir söz. Kurumsal hesapta düzen ve tutarlılık, paylaşım sıklığından daha önemli.",
      "İlçe aynı zamanda büyük alışveriş merkezleri ve yoğun bir yeme içme hayatı barındırıyor. Rekabetin bu kadar sık olduğu bir yerde reklamın işi geniş kitleye ulaşmak değil, markayı arayan ya da ona benzeyen kişiyi bulmak.",
    ],
    odak: [
      {
        baslik: "Moda ve butik markalar için kampanya çekimi",
        metin:
          "Sezon lansmanlarını ve kampanyaları markanın görsel dünyasına uygun bir çekim planıyla üretiyor, mağaza ve ürün içeriğini aynı çizgide tutuyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Profesyonel hizmet firmaları için kurumsal dil",
        metin:
          "Hukuk, danışmanlık ve ajans gibi uzmanlık satan firmalarda ekibi ve bakış açısını öne çıkaran, LinkedIn ve Instagram'da tutarlı bir kurumsal kimlik kuruyoruz.",
        hizmetSlug: "marka-kimligi-tasarim",
      },
      {
        baslik: "Yoğun rekabette hedefli reklam",
        metin:
          "Aynı caddede çok sayıda rakibin olduğu yerde bütçeyi ilgi alanı ve davranışa göre daraltıyor, markayı arayan kişiye ulaştırıyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Şişli'deki mağaza, ofis ve kampanya çekimlerini önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz.",
    sorular: [
      {
        soru: "Şişli'de butik ya da moda markası için kampanya çekimi neden önemlidir?",
        cevap:
          "Moda ve butik markalarda ürün fotoğrafı yetmez; markanın dünyasını anlatan bir görsel dil gerekir. Kampanya çekimi, sezon lansmanı ve mağaza içi içerik aynı estetik çizginin parçası olmalıdır. Bu içerikleri markanın görsel dünyasına uygun tek bir çekim planıyla üretir, mağaza ve ürün içeriğini aynı çizgide tutarız.",
      },
      {
        soru: "Hukuk ya da danışmanlık firması sosyal medyada nasıl görünür olur?",
        cevap:
          "Uzmanlık satan firma, ekibini ve bakış açısını öne çıkararak görünür olur. İçerik stratejisi uzmanlığı görünür kılmaya dayanır: ekip, bakış açısı ve sektöre dair net bir söz. Kurumsal hesapta düzen ve tutarlılık paylaşım sıklığından daha önemlidir; LinkedIn ve Instagram'da tutarlı bir kurumsal kimlik kurarız.",
      },
      {
        soru: "Aynı caddede çok sayıda rakibi olan işletme reklam bütçesini nasıl kullanmalı?",
        cevap:
          "Geniş kitleye ulaşmaya değil, markayı arayan ya da ona benzeyen kişiyi bulmaya harcamalıdır. Rekabetin sık olduğu yerde bütçeyi ilgi alanı ve davranışa göre daraltır, markayı doğru kişiye ulaştırırız. Yerel işletmede hedefleme ilçe ve çevresiyle de sınırlanabilir. Amaç herkese görünmek değil, doğru kişiye görünmektir.",
      },
    ],
  },

  {
    slug: "beyoglu-sosyal-medya-ajansi",
    ilce: "Beyoğlu",
    yaka: "Avrupa",
    seoBaslik: "Beyoğlu Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Beyoğlu'nda oteller, restoranlar, barlar, galeriler ve turizm markaları için sosyal medya yönetimi, prodüksiyon ve reklam. Galata'dan Karaköy'e teklif alın.",
    h1: "Beyoğlu sosyal medya ajansı",
    giris:
      "Beyoğlu, İstanbul'u ziyaret eden herkesin yolunun düştüğü ilçe. Galata, Karaköy, Cihangir ve İstiklal çevresinde oteller, restoranlar, barlar ve galeriler hem yerli hem yabancı misafir için yarışıyor; sosyal medya çoğu zaman bu misafirin ilk durağı.",
    doku: [
      "Galata ve Karaköy'de butik oteller ve konaklama işletmeleri yoğun. Yabancı misafir oda, manzara ve çevreyi rezervasyondan önce görmek istiyor; içeriğin ve reklamın bir kısmının İngilizce kurgulanması burada gerçek bir fark yaratıyor.",
      "Restoran, bar ve gece hayatı ilçenin ikinci ağırlığı. Bu işletmelerde atmosfer, müzik ve kalabalık, yani hareket satılıyor. Fotoğraftan çok kısa video öne çıkıyor; akşam saatlerinde ve düşük ışıkta yapılan çekim ayrı bir teknik gerektiriyor.",
      "Cihangir, Tophane ve Şişhane çevresindeki galeriler, tasarım stüdyoları ve kültür mekânları ise estetik beklentisi yüksek bir kitleye sesleniyor. Bu markalarda sosyal medya bir duyuru panosundan çok, markanın kendi küratörlüğünü yaptığı bir sergi alanı gibi işliyor.",
    ],
    odak: [
      {
        baslik: "Oteller için rezervasyon odaklı içerik",
        metin:
          "Oda, manzara, kahvaltı ve semt deneyimini yerli ve yabancı misafire göre kurguluyor, gerektiğinde İngilizce metinlerle üretiyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Gece ve düşük ışıkta mekân çekimi",
        metin:
          "Bar ve restoranların akşam atmosferini, düşük ışığa uygun ekipman ve kurguyla hareketli kısa videolara çeviriyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Turist ve yerli kitleye ayrı reklam",
        metin:
          "İstanbul'u ziyaret eden misafir ile şehirde yaşayan müşteriyi ayrı kitleler ve ayrı mesajlarla hedefliyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Beyoğlu'ndaki gündüz ve gece çekimlerini önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz.",
    sorular: [
      {
        soru: "Beyoğlu'nda otel için İngilizce sosyal medya içeriği gerekli mi?",
        cevap:
          "Yabancı misafir çeken oteller için içeriğin ve reklamın bir kısmını İngilizce kurgulamak gerçek bir fark yaratır. Yabancı misafir oda, manzara ve çevreyi rezervasyondan önce görmek ister. Oda, manzara, kahvaltı ve semt deneyimini yerli ve yabancı misafire göre kurgular, gerektiğinde İngilizce metinlerle üretiriz.",
      },
      {
        soru: "Bar ve restoran için gece çekimi nasıl yapılır?",
        cevap:
          "Gece çekimi, düşük ışığa uygun ekipman ve kurgu gerektirir. Bar ve restoranlarda atmosfer, müzik ve kalabalık yani hareket satıldığı için fotoğraftan çok kısa video öne çıkar. Akşam atmosferini bu teknikle çekip hareketli kısa videolara çeviririz; gündüz ve gece çekimlerini önceden takvimleriz.",
      },
      {
        soru: "Turist ve şehirde yaşayan müşteriye aynı reklam gösterilmeli mi?",
        cevap:
          "Hayır, iki kitleyi ayrı mesajlarla hedeflemek daha doğrudur. İstanbul'u ziyaret eden misafir ile şehirde yaşayan müşteri farklı şeyler arar ve farklı kanallardan karar verir. Reklamı bu iki kitle için ayrı kurar, her birine kendi dilinde ve kendi beklentisine uygun bir mesaj gösteririz.",
      },
    ],
  },

  {
    slug: "sariyer-sosyal-medya-ajansi",
    ilce: "Sarıyer",
    yaka: "Avrupa",
    seoBaslik: "Sarıyer Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Sarıyer'de Boğaz restoranları, butik oteller, İstinye ve Maslak'taki markalar için sosyal medya yönetimi, drone çekimi ve prodüksiyon. Teklif alın.",
    h1: "Sarıyer sosyal medya ajansı",
    giris:
      "Sarıyer, Boğaz'ın kuzey kıyısı boyunca uzanan restoranları, butik otelleri ve Maslak'ın iş merkezleriyle İstanbul'un en prestijli ticari hatlarından birini oluşturuyor. Bu hatta çalışan markalar için görsel kalite bir tercih değil, beklenti.",
    doku: [
      "Emirgan, Yeniköy, Tarabya ve Rumelifeneri'ne uzanan kıyıda balık restoranları, Boğaz manzaralı mekânlar ve butik oteller yer alıyor. Misafir bu işletmeleri çoğu zaman bir özel gün için seçiyor ve kararı görsel üzerinden veriyor. Mekânın denizle, ışıkla ve servisle kurduğu ilişkiyi doğru anlatan içerik burada doğrudan rezervasyona dönüşüyor.",
      "İstinye ve Maslak çevresinde lüks perakende, otomotiv ve teknoloji firmaları ile iş kuleleri bulunuyor. Bu markaların hedef kitlesi seçici; hesaba giren her içerik markanın fiyat konumunu destekleyen bir kaliteyle üretilmeli.",
      "Kuzey ormanları, Kilyos sahili ve Boğaz'ın kendisi, havadan çekim için İstanbul'un en güçlü sahnelerinden biri. Konaklama ve etkinlik mekânlarında drone ile çekilmiş tek bir açılış planı, mekânın ölçeğini ve çevresini yerden yapılan hiçbir çekimin veremeyeceği biçimde anlatıyor. Boğaz hattında uçuşa kısıtlı bölgeler bulunduğu için izin planlamasını çekimden önce yapıyoruz.",
    ],
    odak: [
      {
        baslik: "Boğaz hattı için havadan çekim",
        metin:
          "Uçuş izinlerini önceden planlayarak mekânın denizle ve çevresiyle kurduğu ilişkiyi havadan çekiyoruz.",
        hizmetSlug: "drone-cekimleri",
      },
      {
        baslik: "Özel gün rezervasyonu için içerik akışı",
        metin:
          "Masa, manzara, servis ve deneyimi; misafirin özel bir gün için mekân seçerken görmek istediği her şeyi planlı bir içerik akışına dönüştürüyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Seçici kitleye uygun prodüksiyon",
        metin:
          "Lüks perakende ve otomotiv markaları için ışık, kadraj ve kurgu disiplini yüksek, markanın fiyat konumunu destekleyen çekimler üretiyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Sarıyer'deki çekimleri ışığa ve uçuş izinlerine göre önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz.",
    sorular: [
      {
        soru: "Sarıyer'de Boğaz'daki mekân için drone çekimi yapılabilir mi?",
        cevap:
          "Yapılabilir, ancak Boğaz hattında uçuşa kısıtlı bölgeler bulunduğu için izin planlamasını çekimden önce yaparız. Drone ile çekilmiş tek bir açılış planı, mekânın ölçeğini ve çevresini yerden yapılan hiçbir çekimin veremeyeceği biçimde anlatır. Uçuş planını ışığa göre kurar, çekimi izinlere göre önceden takvimleriz. Planlama aşaması uzun sürmesin diye işletmeyle uçuş günü ve saatini baştan netleştiririz.",
      },
      {
        soru: "Balık restoranı için özel gün rezervasyonu getiren içerik nasıl olur?",
        cevap:
          "Mekânın denizle, ışıkla ve servisle kurduğu ilişkiyi doğru anlatan içerik olur. Misafir bu işletmeleri çoğu zaman bir özel gün için seçer ve kararı görsel üzerinden verir. Masa, manzara, servis ve deneyimi planlı bir içerik akışına dönüştürürüz. Sakin bir üslupla, abartıdan uzak, mekânın gerçek havasını yansıtan kareler kullanırız; böylece profil, özel gün arayan misafire güven verir.",
      },
      {
        soru: "Lüks perakende ve otomotiv markası için prodüksiyon kalitesi neden önemlidir?",
        cevap:
          "Hedef kitle seçici olduğu için hesaba giren her içerik markanın fiyat konumunu destekleyen bir kaliteyle üretilmelidir. İstinye ve Maslak çevresindeki markalar için ışık, kadraj ve kurgu disiplini yüksek çekimler planlarız. Bu çekimler prodüksiyonlu modelde aylık saha çekimine dahildir. Kalite düşüşü fiyat konumuyla çeliştiği için üretimde acele etmez, tek tek karelerin tutarlılığına bakarız.",
      },
    ],
  },

  {
    slug: "bakirkoy-sosyal-medya-ajansi",
    ilce: "Bakırköy",
    yaka: "Avrupa",
    seoBaslik: "Bakırköy Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Bakırköy'de cadde mağazaları, klinikler, restoranlar ve Ataköy markaları için sosyal medya yönetimi, prodüksiyon ve reklam hizmeti. Teklif alın.",
    h1: "Bakırköy sosyal medya ajansı",
    giris:
      "Bakırköy, köklü cadde kültürü, sağlık kurumları ve Ataköy'ün marina ile sahil hattıyla Avrupa yakasının en dengeli ticari ilçelerinden biri. Burada müşteri sadık ama seçici; markayı yıllardır tanıyor ve yeniliği hemen fark ediyor.",
    doku: [
      "İstanbul Caddesi, Ebuzziya Caddesi ve Bakırköy çarşısı çevresinde butikler, giyim ve ayakkabı mağazaları, kafeler ve pastaneler yan yana. Bu işletmelerin çoğu uzun yıllardır aynı adreste; sosyal medyanın buradaki işi köklü bir markayı güncel göstermek ve yeni kuşağa tanıtmak.",
      "İlçe, hastaneleri ve klinikleriyle sağlıkta da önemli bir merkez. Sağlık kurumlarında içerik ölçülü olmalı: mevzuata uygun, hasta mahremiyetini gözeten ve güveni süreci anlatarak kuran bir dil.",
      "Ataköy tarafında marina, sahil yürüyüş yolu, oteller ve alışveriş merkezleri bulunuyor. Deniz kenarındaki restoranlar ve konaklama işletmeleri için atmosfer çekimi, perakende için ise kampanya dönemlerine göre yoğunlaşan reklam belirleyici oluyor.",
    ],
    odak: [
      {
        baslik: "Köklü markalar için güncel görsel dil",
        metin:
          "Yıllardır aynı adreste olan bir markanın kimliğini koruyarak görsel dilini ve içerik tonunu yeni kuşağa göre güncelliyoruz.",
        hizmetSlug: "marka-kimligi-tasarim",
      },
      {
        baslik: "Sağlık kurumları için ölçülü içerik",
        metin:
          "Süreci anlatan, ekibi tanıtan ve mevzuata uygun içerikle hasta güvenini kuruyoruz; çekimi mahremiyet kurallarına göre planlıyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Marina ve sahil işletmeleri için çekim",
        metin:
          "Deniz kenarındaki mekânları ışığa göre planlanmış çekimlerle anlatıyor, gerektiğinde havadan çekimle ölçeği gösteriyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Bakırköy'deki çekimleri önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz.",
    sorular: [
      {
        soru: "Bakırköy'de yıllardır aynı adreste olan mağaza sosyal medyada nasıl güncel görünür?",
        cevap:
          "Köklü markanın kimliğini koruyarak görsel dilini ve içerik tonunu yeni kuşağa göre güncellemek gerekir. Müşteri sadık ama yeniliği hemen fark eden biri olduğundan, sosyal medyanın işi köklü bir markayı güncel göstermek ve yeni kuşağa tanıtmaktır. Gerekirse marka kimliği çalışmasıyla başlarız.",
      },
      {
        soru: "Alışveriş merkezi çevresindeki mağaza kampanya dönemlerinde reklamı nasıl yoğunlaştırır?",
        cevap:
          "Reklam bütçesi yıla eşit yayılmak yerine kampanya dönemlerine göre yoğunlaştırılır. Perakende için belirleyici olan, kampanyanın başlayacağı dönemde doğru kitleye görünür olmaktır. Takvimi işletmeyle birlikte kurar, hedeflemeyi ilçe ve çevresiyle sınırlarız. Böylece işletme, kampanya başladığında bütçenin büyük kısmını doğru haftaya ve doğru müşteri havzasına harcamış olur.",
      },
      {
        soru: "Ataköy'de marina ve sahil hattındaki restoran için atmosfer çekimi nasıl planlanır?",
        cevap:
          "Deniz kenarındaki mekânın atmosferi, ışığın güçlü olduğu saatlerde çekilerek anlatılır. Marina ve sahil hattındaki restoran ve konaklama işletmeleri için atmosfer çekimi belirleyicidir. Çekimi önceden takvimler, ekip ve ekipmanla sahaya geliriz; mekânın ölçeğini göstermek gerektiğinde havadan çekimle destekleriz. Kampanya dönemlerinde de aynı görsel arşivi reklamda kullanabiliriz.",
      },
    ],
  },

  // ---------- Anadolu yakasi merkez ilceler (28 Eyl 2026) ----------

  {
    slug: "kadikoy-sosyal-medya-ajansi",
    ilce: "Kadıköy",
    yaka: "Anadolu",
    seoBaslik: "Kadıköy Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Kadıköy'de kafe, restoran, butik ve tasarım markaları için sosyal medya yönetimi, prodüksiyon ve reklam. Moda'dan Bağdat Caddesi'ne teklif alın.",
    h1: "Kadıköy sosyal medya ajansı",
    giris:
      "Kadıköy, İstanbul'da marka kültürünün en hızlı değiştiği ilçelerden biri. Moda'nın bağımsız kafelerinden Bağdat Caddesi'nin mağazalarına kadar burada müşteri yalnızca ürünü değil markanın tavrını da seçiyor; sosyal medya bu tavrın ilk göründüğü yer.",
    doku: [
      "Moda, Yeldeğirmeni ve Kadıköy çarşısı çevresinde nitelikli kahveciler, bağımsız restoranlar, kitap ve tasarım dükkânları yan yana duruyor. Bu işletmelerde takipçi, hesabın estetiğini ve dilini mekânın kendisi kadar önemsiyor. Hazır şablonla hazırlanmış bir paylaşım burada hemen fark ediliyor; içerik markanın kendi sesini taşımak zorunda.",
      "Bağdat Caddesi ise ilçenin öbür yüzü: marka mağazaları, güzellik salonları, klinikler ve şık restoranlar. Bu hatta rekabet görünürlük kadar algılanan kaliteyle ilgili. Ürün ve mekân çekiminde ışık, kadraj ve kurgu disiplini, fiyatı yukarıda konumlanan bir işletmenin bu fiyatı hak ettiğini gösteren şey oluyor.",
      "Kadıköy etkinlik ve kültür hayatıyla da öne çıkıyor. Konserler, atölyeler, sergiler ve kısa süreli mağazalar hızla duyurulup hızla tüketiliyor. Bu tempoda çalışan markalar için planlı bir içerik takvimi ile hızlı üretilen kısa videonun bir arada yürümesi gerekiyor.",
    ],
    odak: [
      {
        baslik: "Markanın kendi sesiyle içerik",
        metin:
          "Kadıköy'de takipçi taklidi hemen sezer. Marka sesini ilk ay birlikte tanımlıyor, görsel dili ve metin tonunu buna göre kuruyoruz; her paylaşım aynı markadan çıktığını belli eder.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Cadde mağazaları ve klinikler için prodüksiyon",
        metin:
          "Bağdat Caddesi'nde fiyat kaliteyle birlikte algılanır. Ürün, mekân ve ekip çekimlerini ışık ve kurgu disipliniyle planlıyor, markanın konumunu görselle destekliyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Etkinlik ve lansman dönemlerinde reklam",
        metin:
          "Kısa süreli etkinliklerde duyurunun doğru kişiye hızla ulaşması gerekir. Reklamı etkinlik takvimine göre kısa ve yoğun dönemlerle kurguluyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Kadıköy'deki çekimleri önceden takvimliyor, ekip ve ekipmanla karşı yakaya geçiyoruz; toplantıları yüz yüze ya da çevrim içi yapabiliyoruz.",
    sorular: [
      {
        soru: "Kadıköy'de bağımsız kafe için sosyal medya nasıl yönetilir?",
        cevap:
          "Bağımsız kafenin hesabı markanın kendi sesini taşımalıdır. Moda ve Yeldeğirmeni çevresinde takipçi, hesabın estetiğini ve dilini mekân kadar önemser; hazır şablonla hazırlanmış paylaşım hemen fark edilir. Marka sesini ilk ay birlikte tanımlar, görsel dili ve metin tonunu buna göre kurarız.",
      },
      {
        soru: "Bağdat Caddesi'ndeki mağaza ya da klinik için profesyonel çekim gerekli mi ve ne kadar tutar?",
        cevap:
          "Bu hatta rekabet algılanan kaliteyle ilgili olduğundan ışık, kadraj ve kurgu disiplini önemlidir. Profesyonel çekim prodüksiyonlu modelde aylık saha çekimi olarak yer alır; genel bantta prodüksiyonlu model 30.000-60.000 TL, prodüksiyonsuz model 25.000-35.000 TL aralığındadır. Kesin tutar ihtiyaca göre teklifte belirlenir.",
      },
      {
        soru: "Etkinlik ve atölye duyuruları için reklam nasıl kurulur?",
        cevap:
          "Kısa süreli etkinliklerde reklam, etkinlik takvimine göre kısa ve yoğun dönemlerle kurulur. Duyurunun doğru kişiye hızla ulaşması gerekir. Planlı bir içerik takvimi ile hızlı üretilen kısa videoyu bir arada yürütür, lansman döneminde reklamı yoğunlaştırırız. Etkinlik sonrasında da aynı içerik arşivi, sonraki duyurular için yeniden kullanılabilir.",
      },
    ],
  },

  {
    slug: "uskudar-sosyal-medya-ajansi",
    ilce: "Üsküdar",
    yaka: "Anadolu",
    seoBaslik: "Üsküdar Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Üsküdar'da Boğaz kıyısındaki mekânlar, sağlık ve eğitim kurumları için sosyal medya yönetimi, prodüksiyon ve reklam. Kuzguncuk'tan Altunizade'ye teklif alın.",
    h1: "Üsküdar sosyal medya ajansı",
    giris:
      "Üsküdar, Boğaz kıyısındaki tarihi dokusu ile büyük konut semtlerini aynı ilçede buluşturuyor. Kuzguncuk'un sahil mekânlarından Altunizade'nin sağlık kurumlarına kadar burada güven ve köklülük, markanın en değerli sermayesi.",
    doku: [
      "Kuzguncuk, Çengelköy ve Üsküdar sahili boyunca kahvaltı mekânları, balık restoranları ve çay bahçeleri yoğun. Hafta sonu kararları çoğu zaman Instagram'da veriliyor; manzara, masa ve sabah ışığında çekilmiş birkaç kare bu hatta mekân seçiminin belirleyicisi.",
      "Altunizade ve çevresinde hastaneler, poliklinikler ve sağlık merkezleri bulunuyor; ilçe genelinde de özel okullar, kurslar ve üniversite kampüsleri var. Sağlık ve eğitim kurumlarında sosyal medya bir güven belgesi: ekip, ortam ve süreç şeffaf gösterilmeli, abartılı vaatten kaçınılmalı.",
      "İlçenin tarihi siluetini camiler, yalılar ve Kız Kulesi manzarası oluşturuyor; bu kıyı İstanbul'un en çok fotoğraflanan sahnelerinden biri. Bu sahneyi kullanan markalar için kıyıdan planlanmış bir çekim, İstanbul'la özdeşleşen bir marka imajı kuruyor.",
    ],
    odak: [
      {
        baslik: "Sahil mekânları için sabah ve gün batımı çekimi",
        metin:
          "Kahvaltı ve Boğaz manzarası, ışığın doğru olduğu saatlerde çekildiğinde satılır. Çekim planını bu saatlere göre kuruyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Sağlık ve eğitim kurumları için güven içeriği",
        metin:
          "Ekip tanıtımı, ortamın gerçek görüntüsü ve sürecin adım adım anlatımıyla; mahremiyet ve mevzuat kurallarına uygun içerik üretiyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Hafta sonu kararına göre reklam zamanlaması",
        metin:
          "Sahil ve kahvaltı mekânlarında karar genellikle hafta sonundan önce veriliyor. Reklam bütçesini bu karar anına yoğunlaştırarak doğru zamanda görünür oluyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Üsküdar'daki çekimleri ışık saatlerine göre önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz.",
    sorular: [
      {
        soru: "Üsküdar'da sahildeki kahvaltı mekânı için çekim ne zaman yapılmalı?",
        cevap:
          "Işığın doğru olduğu sabah saatlerinde yapılmalıdır. Kahvaltı ve Boğaz manzarası bu saatlerde çekildiğinde satılır; çekim planını buna göre kurarız. Hafta sonu kararları çoğu zaman Instagram'da verildiği için sabah ışığında çekilmiş birkaç kare, mekân seçiminde belirleyici olur. Işık ve manzara güçlü olduğunda aynı çekim, hafta boyunca birkaç farklı paylaşıma bölünebilir.",
      },
      {
        soru: "Özel okul ya da poliklinik için sosyal medya nasıl güven kurar?",
        cevap:
          "Ekip, ortam ve süreç şeffaf gösterilerek ve abartılı vaatten kaçınılarak güven kurulur. Sağlık ve eğitim kurumlarında sosyal medya bir güven belgesi işlevi görür. Ekip tanıtımı, ortamın gerçek görüntüsü ve sürecin adım adım anlatımıyla, mahremiyet ve mevzuat kurallarına uygun içerik üretiriz.",
      },
      {
        soru: "Kahvaltı mekânı için reklam hafta sonundan önce mi verilmeli?",
        cevap:
          "Evet, reklam hafta sonu kararının verildiği ana yoğunlaştırılmalıdır. Sahil ve kahvaltı mekânlarında karar genellikle hafta sonundan önce verilir. Reklam bütçesini bu karar anına odaklayarak mekânı doğru zamanda doğru kişiye görünür kılarız. Hafta içi son günlerde hesapta taze, görsel olarak güçlü bir içerik bulunması karar anında fark yaratır.",
      },
    ],
  },

  {
    slug: "atasehir-sosyal-medya-ajansi",
    ilce: "Ataşehir",
    yaka: "Anadolu",
    seoBaslik: "Ataşehir Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Ataşehir'de kurumsal firmalar, finans ve sağlık markaları, rezidans projeleri için sosyal medya yönetimi, LinkedIn, drone çekimi ve reklam. Teklif alın.",
    h1: "Ataşehir sosyal medya ajansı",
    giris:
      "Ataşehir, İstanbul Finans Merkezi ve iş kuleleriyle Anadolu yakasının kurumsal yüzü. Buradaki markalar sosyal medyadan bir kampanya kadar kurumsal bir duruş da bekliyor; görsel dil, ton ve yayın düzeni aynı özenle kurulmalı.",
    doku: [
      "Finans merkezi ve çevresindeki plazalarda bankalar, finans kuruluşları, teknoloji ve danışmanlık firmaları çalışıyor. Bu firmalar için sosyal medya bir güven belgesi: yetenek çekmek, iş ortağına ciddi bir duruş göstermek ve sektörel gündemde görünür olmak. Burada içerik üretimi, marka yönergesine sıkı sıkıya bağlı kalan bir disiplin istiyor.",
      "Ataşehir'in ikinci ağırlığı rezidans ve karma kullanım projeleri. Gayrimenkul pazarlamasında havadan çekim, proje turu ve yaşam alanı anlatımı satış sürecinin doğrudan parçası. Projenin konumunu ve çevresini tek karede anlatan bir drone çekimi, broşürden çok daha ikna edici.",
      "Üçüncü grup özel hastaneler, klinikler ve alışveriş merkezleri çevresindeki perakende. Sağlıkta ölçülü ve mevzuata uygun bir anlatım, perakendede ise kampanya dönemlerine göre yoğunlaşan bir reklam takvimi gerekiyor.",
    ],
    odak: [
      {
        baslik: "Kurumsal firmalar için tutarlı içerik sistemi",
        metin:
          "Marka yönergesine bağlı bir tasarım sistemi, onay süreci net bir yayın takvimi ve LinkedIn odaklı içerikle kurumsal hesabı düzenli ve güvenilir tutuyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Rezidans projeleri için havadan çekim",
        metin:
          "Projenin konumunu, ulaşımını ve çevresini havadan anlatıyor, satış ekibinin kullanacağı video ve görsel setini tek prodüksiyonda üretiyoruz. Uçuş izinlerini çekimden önce kontrol ediyoruz.",
        hizmetSlug: "drone-cekimleri",
      },
      {
        baslik: "Sosyal medyadan sunuma kurumsal kimlik",
        metin:
          "Sosyal medya hesabından sunum dosyasına kadar markanın her yüzünde aynı görsel sistemi kuruyoruz.",
        hizmetSlug: "marka-kimligi-tasarim",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Ataşehir'deki ofis ve proje çekimlerini önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz; toplantıları yüz yüze ya da çevrim içi yapabiliyoruz.",
    sorular: [
      {
        soru: "Ataşehir'de finans ya da teknoloji firması için LinkedIn içeriği nasıl yönetilir?",
        cevap:
          "Marka yönergesine bağlı kalan ve onay süreci net bir yayın takvimiyle yönetilir. Bu firmalar için sosyal medya yetenek çekmek, iş ortağına ciddi bir duruş göstermek ve sektörel gündemde görünür olmak içindir. Kurumsal hesabı düzenli ve güvenilir tutacak bir tasarım sistemi ve LinkedIn odaklı içerik planı kurarız.",
      },
      {
        soru: "Rezidans projesinin tanıtımında drone çekimi neden kullanılır?",
        cevap:
          "Drone çekimi, projenin konumunu ve çevresini tek karede anlattığı için kullanılır. Gayrimenkul pazarlamasında havadan çekim, proje turu ve yaşam alanı anlatımı satış sürecinin parçasıdır. Satış ekibinin kullanacağı video ve görsel setini tek prodüksiyonda üretir, uçuş izinlerini çekimden önce kontrol ederiz.",
      },
      {
        soru: "Sosyal medya hesabından sunum dosyasına aynı görsel sistem nasıl kurulur?",
        cevap:
          "Marka kimliği çalışmasıyla kurulur. Kurumsal firmada görsel dil, ton ve yayın düzeni aynı özenle hazırlanmalıdır. Sosyal medya hesabından sunum dosyasına kadar markanın her yüzünde aynı görsel sistemi kurar, böylece firmanın duruşu her temas noktasında tutarlı görünür. Marka kimliği çalışması, içerik üretiminden önce tamamlandığında sonraki tüm işler daha hızlı ve daha tutarlı ilerler.",
      },
    ],
  },

  {
    slug: "umraniye-sosyal-medya-ajansi",
    ilce: "Ümraniye",
    yaka: "Anadolu",
    seoBaslik: "Ümraniye Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Ümraniye'de üretici, B2B ve kurumsal firmalar ile AVM markaları için sosyal medya yönetimi, tesis çekimi, LinkedIn ve reklam hizmeti. Teklif alın.",
    h1: "Ümraniye sosyal medya ajansı",
    giris:
      "Ümraniye, sanayi siteleri, kurumsal genel merkezleri ve büyük alışveriş merkezleriyle Anadolu yakasının en hareketli iş ilçelerinden biri. Buradaki firmaların önemli bir kısmı son tüketiciye değil başka işletmelere satış yapıyor; sosyal medyanın dili de buna göre kurulmalı.",
    doku: [
      "Dudullu ve İMES çevresindeki sanayi sitelerinde üretici ve tedarikçi firmalar yoğun. Bu firmaların satış süreci uzun: bir distribütör ya da kurumsal alıcı karar vermeden önce firmayı birkaç kez araştırıyor, web sitesine ve sosyal medya hesaplarına bakıyor. Hesabın düzenli, güncel ve üretimi gerçekçi biçimde gösteriyor olması, bu araştırmanın sonunda teklif istenip istenmeyeceğini belirliyor.",
      "Kurumsal genel merkezler ve teknoloji firmaları ise LinkedIn'de görünür olmak, yetenek çekmek ve sektörel güven kurmak istiyor. B2B tarafta içerik, satış mesajından çok uzmanlık, referans ve süreç anlatımına dayanıyor.",
      "Alışveriş merkezleri çevresindeki perakende ve yeme içme işletmeleri için ise kampanya takvimine göre yoğunlaşan reklam ve düzenli kısa video üretimi öne çıkıyor.",
    ],
    odak: [
      {
        baslik: "Üretim kapasitesini gösteren video seti",
        metin:
          "Tedarikçi seçerken alıcının sorduğu soruları, yani kapasite, kalite kontrol ve ekip sorularını cevaplayan bir çekim planı kuruyor, satış ekibinin kullanacağı video ve fotoğraf setini tek prodüksiyonda üretiyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "B2B firmalar için LinkedIn stratejisi",
        metin:
          "Uzmanlığı, referansları ve süreci anlatan bir içerik planıyla firmayı sektöründe görünür ve güvenilir kılıyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Katalogdan fuar standına kurumsal kimlik",
        metin:
          "Ürün kataloğundan fuar standına, sosyal medyadan sunum dosyasına kadar firmanın her yüzünde aynı kurumsal görsel sistemi kuruyoruz.",
        hizmetSlug: "marka-kimligi-tasarim",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Ümraniye'deki tesis ve ofis çekimlerini önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz.",
    sorular: [
      {
        soru: "Ümraniye'de sanayi sitesindeki üretici firma için sosyal medya satışa nasıl yardım eder?",
        cevap:
          "Alıcının araştırma sürecinde güven kurarak yardım eder. Distribütör ya da kurumsal alıcı karar vermeden önce firmayı birkaç kez araştırır ve hesaplara bakar; hesabın düzenli, güncel ve üretimi gerçekçi biçimde gösteriyor olması teklif istenip istenmeyeceğini etkiler. Kapasite, kalite kontrol ve ekip sorularını yanıtlayan bir video ve fotoğraf seti çekeriz.",
      },
      {
        soru: "B2B firma LinkedIn'de ne paylaşmalı?",
        cevap:
          "B2B firma satış mesajından çok uzmanlık, referans ve süreç anlatımı paylaşmalıdır. Kurumsal genel merkezler ve teknoloji firmaları LinkedIn'de görünür olmak, yetenek çekmek ve sektörel güven kurmak ister. Uzmanlığı, referansları ve süreci anlatan bir içerik planıyla firmayı sektöründe görünür ve güvenilir kılarız.",
      },
      {
        soru: "Ümraniye'de AVM çevresindeki bir işletme için aylık sosyal medya bütçesi ne olmalı?",
        cevap:
          "Genel bantta prodüksiyonsuz model 25.000-35.000 TL, prodüksiyonlu model 30.000-60.000 TL aralığındadır; kesin tutar işletmenin ihtiyacına göre teklifte belirlenir. Alışveriş merkezleri çevresindeki perakende ve yeme içme işletmeleri için kampanya takvimine göre yoğunlaşan reklam ve düzenli kısa video üretimi öne çıkar. Reklamda hedefleme ilçe ve çevresiyle sınırlanabilir.",
      },
    ],
  },

  {
    slug: "maltepe-sosyal-medya-ajansi",
    ilce: "Maltepe",
    yaka: "Anadolu",
    seoBaslik: "Maltepe Sosyal Medya Ajansı | Studio Gria",
    seoAciklama:
      "Maltepe'de sahil hattındaki mekânlar, üniversite çevresi işletmeleri, klinikler ve perakende için sosyal medya yönetimi, kısa video ve reklam. Teklif alın.",
    h1: "Maltepe sosyal medya ajansı",
    giris:
      "Maltepe, uzun sahil parkı, üniversiteleri ve yoğun konut dokusuyla Anadolu yakasında hem genç hem aile kitlesine aynı anda seslenen bir ilçe. Burada iyi çalışan hesap, iki kitleyi birbirine karıştırmadan konuşabilen hesap.",
    doku: [
      "Sahil parkı ve Bağdat Caddesi'nin Maltepe'ye uzanan kısmı boyunca kafeler, restoranlar ve spor tesisleri bulunuyor. Hafta sonu ve akşam saatlerinde yoğunlaşan bu hatta, mekânın açık alanını ve deniz manzarasını gösteren içerik öne çıkıyor.",
      "İlçedeki üniversiteler ve kurslar genç bir kitle yaratıyor; bu kitle kısa video ve samimi bir dilden karşılık veriyor. Öte yandan aile yoğun konut semtlerinde klinikler, okullar ve hizmet işletmeleri güven ve süreklilik üzerinden tercih ediliyor. Aynı ilçede iki farklı içerik dili gerekebiliyor.",
      "Kartal, Ataşehir ve Kadıköy'e bitişik konumu nedeniyle Maltepe'deki işletmelerin müşterisi çoğu zaman ilçe sınırında kalmıyor. Reklam hedeflemesini ilçe sınırına göre değil, işletmenin gerçek müşteri havzasına göre kurmak bütçeyi doğru yere taşıyor.",
    ],
    odak: [
      {
        baslik: "Genç kitle için kısa video",
        metin:
          "Üniversite çevresindeki işletmeler için hızlı, samimi ve düzenli kısa video üretimi planlıyor, ağırlığı reels tarafına veriyoruz.",
        hizmetSlug: "fotograf-video-produksiyon",
      },
      {
        baslik: "Aile kitlesi için güven veren hesap",
        metin:
          "Klinik, okul ve hizmet işletmelerinde ekibi, ortamı ve süreci gösteren, düzenli ve tutarlı bir içerik akışı kuruyoruz.",
        hizmetSlug: "sosyal-medya-yonetimi",
      },
      {
        baslik: "Müşteri havzasına göre reklam",
        metin:
          "Hedeflemeyi ilçe sınırına değil, işletmenin gerçekten müşteri çektiği çevreye göre kurarak bütçeyi verimli kullanıyoruz.",
        hizmetSlug: "reklam-yonetimi",
      },
    ],
    mesafeNotu:
      "Stüdyomuz Büyükçekmece'de. Maltepe'deki çekimleri önceden takvimliyor, ekip ve ekipmanla sahaya geliyoruz.",
    sorular: [
      {
        soru: "Maltepe'de hem öğrenciye hem aileye seslenen işletme tek hesapta nasıl konuşmalı?",
        cevap:
          "İki kitleyi birbirine karıştırmadan, içerik biçimlerini ayırarak konuşmalıdır. Genç kitle kısa video ve samimi dilden, aile kitlesi güven ve süreklilikten karşılık verir. Reels ağırlığını genç kitleye, ekibi ve ortamı gösteren düzenli içeriği aile kitlesine ayırırız. Böylece aynı hesap, iki farklı kitleyi birbirinden uzaklaştırmadan, her birine kendi diliyle ulaşır.",
      },
      {
        soru: "Sahil parkı çevresindeki kafe için hangi içerik öne çıkar?",
        cevap:
          "Mekânın açık alanını ve deniz manzarasını gösteren içerik öne çıkar. Sahil parkı boyunca kafeler, restoranlar ve spor tesisleri hafta sonu ve akşam saatlerinde yoğunlaşır. Bu saatleri hesaba katarak çekimi önceden takvimler, ekip ve ekipmanla sahaya geliriz. Bu saatlerde mekânın dolu ve canlı hali görüneceğinden, gün ışığı ve kalabalık düzeni de çekim planına dahil edilir.",
      },
      {
        soru: "Reklam hedeflemesi ilçe sınırına göre mi yapılmalı?",
        cevap:
          "Hayır, işletmenin gerçek müşteri havzasına göre yapılmalıdır. Kartal, Ataşehir ve Kadıköy'e bitişik konum nedeniyle müşteri çoğu zaman ilçe sınırında kalmaz. Hedeflemeyi bu havzaya göre kurmak bütçeyi doğru yere taşır. Bu yaklaşım, reklamın ilçe dışındaki gerçek müşteriye de ulaşmasını sağlar.",
      },
    ],
  },
];

export function bolgeBul(slug: string): Bolge | undefined {
  return bolgeler.find((bolge) => bolge.slug === slug);
}
