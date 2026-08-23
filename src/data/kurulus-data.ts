// Studio Gria kurumsal kunyesi ve yapisal veri (schema.org) tek kaynagi.
//
// NEDEN TEK DOSYA: Arama motorlari ve yapay zeka motorlari bir markayi
// "varlik" (entity) olarak tanir. Ayni bilgi sitenin farkli sayfalarinda
// farkli yazilirsa varlik bolunur ve guven puani duser. Ad, adres, telefon
// ve sosyal hesap adresleri bu dosyadan uretilir; sayfalarda elle yazilmaz.
//
// DEGISTIRIRKEN: Buradaki ad, adres ve telefon bilgisi Google Isletme
// Profili kaydiyla birebir ayni olmak zorundadir. Tek harf farki bile
// yerel siralamayi dusurur.

import { hizmetler } from "./hizmet-data";
import social_data from "./social-data";

export const SITE_URL = "https://www.studiogria.com";

// Yapisal veri dugum kimlikleri. Sayfalar bu kimliklere atif yaparak
// ayni varliga baglanir, her sayfada yeni bir kurulus tanimlamaz.
export const KIMLIK = {
  kurulus: `${SITE_URL}/#kurulus`,
  website: `${SITE_URL}/#website`,
  kurucu: `${SITE_URL}/#kurucu`,
};

// Ad, adres, telefon (NAP). Google Isletme Profili ile ayni olmali.
export const kunye = {
  ad: "Studio Gria",
  aciklama:
    "Studio Gria, İstanbul Büyükçekmece merkezli dijital medya ajansı. Sosyal medya yönetimi, fotoğraf ve video prodüksiyon, Meta ve Google reklam yönetimi, marka kimliği tasarımı ve yapay zeka destekli içerik üretimini tek elden yürütür.",
  telefon: "+905388654405",
  eposta: "hello@studiogria.com",
  adres: {
    sokak: "Mimaroba Mahallesi, Mustafa Kemal Bulvarı No 18 Demir Plaza",
    ilce: "Büyükçekmece",
    il: "İstanbul",
    postaKodu: "34535",
    ulke: "TR",
  },
  logo: `${SITE_URL}/assets/img/logo/logo-white-new.png`,
  // Fiyat bandi: schema.org'un bekledigi kaba gosterge. Gercek fiyat
  // yazilmaz, teklif sunumunda verilir.
  fiyatBandi: "₺₺",
};

// DOLDURULACAK: Google Isletme Profili'ndeki calisma saatleriyle birebir
// ayni olmali. Farkli olursa Google celiskiyi gorur ve ikisine de guvenmez.
// Saatler dogrulanana kadar bos birakildi; bos oldugunda semaya eklenmez.
export const calismaSaatleri: {
  gunler: string[];
  acilis: string;
  kapanis: string;
}[] = [];

// DOLDURULACAK: Google Isletme Profili > Konum > enlem ve boylam.
// Yanlis koordinat harita ignesini yanlis yere koyar, bu yuzden tahmin
// yazilmaz. Deger girildiginde yerel sema otomatik olarak geo alanini alir.
export const koordinat: { enlem: number; boylam: number } | null = null;

export const kurucu = {
  ad: "Fuat Dilek",
  unvan: "Kurucu",
  // Yazar kimligi Google'in E-E-A-T sinyalinde ve yapay zeka motorlarinin
  // kaynak guveninde kurum adindan daha guclu calisir.
  biyografi:
    "Studio Gria'nın kurucusu. Sosyal medya yönetimi, içerik prodüksiyonu ve performans reklamcılığı alanında 39'dan fazla markanın hesabını yönetti.",
};

// Duzenli olarak sahada olunan ilceler. Yerel aramada hizmet alaninin
// acikca beyan edilmesi siralamayi etkiler.
export const hizmetBolgeleri = [
  "Büyükçekmece",
  "Beylikdüzü",
  "Esenyurt",
  "Avcılar",
  "Başakşehir",
  "İstanbul",
  "Türkiye",
];

// Markanin uzman oldugu konular. Yapay zeka motorlari bir soruya kaynak
// ararken bu alani markanin konu otoritesi olarak okur.
export const uzmanlikKonulari = [
  "Sosyal medya yönetimi",
  "İçerik pazarlaması",
  "Instagram Reels üretimi",
  "Meta reklam yönetimi",
  "Google Ads yönetimi",
  "Marka kimliği tasarımı",
  "Fotoğraf ve video prodüksiyon",
  "Drone çekimi",
  "Yapay zeka ile görsel ve video üretimi",
  "Web sitesi geliştirme",
  "SEO ve GEO optimizasyonu",
  "E-ticaret entegrasyonları",
];

function postaAdresi() {
  return {
    "@type": "PostalAddress",
    streetAddress: kunye.adres.sokak,
    addressLocality: kunye.adres.ilce,
    addressRegion: kunye.adres.il,
    postalCode: kunye.adres.postaKodu,
    addressCountry: kunye.adres.ulke,
  };
}

/**
 * Kurulus dugumu. ProfessionalService, Organization'in yerel isletme
 * turevidir: hem kurumsal hem yerel arama sinyallerini tek dugumde tasir.
 */
export function kurulusSemasi() {
  const sema: Record<string, unknown> = {
    "@type": ["ProfessionalService", "Organization"],
    "@id": KIMLIK.kurulus,
    name: kunye.ad,
    alternateName: "Studio Gria Dijital Medya Ajansı",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: kunye.logo,
    },
    image: kunye.logo,
    description: kunye.aciklama,
    email: kunye.eposta,
    telephone: kunye.telefon,
    priceRange: kunye.fiyatBandi,
    address: postaAdresi(),
    // Sosyal hesaplar sitenin altbilgisiyle ayni kaynaktan gelir, boylece
    // ikisi arasinda adres farki olusamaz.
    sameAs: social_data.map((hesap) => hesap.link),
    areaServed: hizmetBolgeleri.map((bolge) => ({
      "@type": "AdministrativeArea",
      name: bolge,
    })),
    knowsAbout: uzmanlikKonulari,
    founder: { "@id": KIMLIK.kurucu },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: kunye.telefon,
      email: kunye.eposta,
      availableLanguage: ["Turkish", "English"],
      areaServed: "TR",
    },
    // Hizmet katalogu: motorun "bu ajans ne yapiyor" sorusuna tek yerden
    // yanit veren liste. Katalog buyudukce otomatik genisler.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Studio Gria hizmetleri",
      itemListElement: hizmetler.map((hizmet) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE_URL}/hizmetler/${hizmet.slug}#hizmet`,
          name: hizmet.ad,
          description: hizmet.kisaAciklama,
          url: `${SITE_URL}/hizmetler/${hizmet.slug}`,
        },
      })),
    },
  };

  if (koordinat) {
    sema.geo = {
      "@type": "GeoCoordinates",
      latitude: koordinat.enlem,
      longitude: koordinat.boylam,
    };
  }

  if (calismaSaatleri.length > 0) {
    sema.openingHoursSpecification = calismaSaatleri.map((aralik) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: aralik.gunler,
      opens: aralik.acilis,
      closes: aralik.kapanis,
    }));
  }

  return sema;
}

export function kurucuSemasi() {
  return {
    "@type": "Person",
    "@id": KIMLIK.kurucu,
    name: kurucu.ad,
    jobTitle: kurucu.unvan,
    description: kurucu.biyografi,
    worksFor: { "@id": KIMLIK.kurulus },
    knowsAbout: uzmanlikKonulari,
    url: `${SITE_URL}/about-us`,
  };
}

export function siteSemasi() {
  return {
    "@type": "WebSite",
    "@id": KIMLIK.website,
    name: kunye.ad,
    url: SITE_URL,
    inLanguage: "tr-TR",
    publisher: { "@id": KIMLIK.kurulus },
  };
}

/**
 * Sayfa hiyerarsisi. Arama sonucunda adres satiri yerine kirinti izi
 * gosterilmesini saglar; yapay zeka motorlari icin sayfanin site
 * icindeki yerini netlestirir.
 */
export function kirintiSemasi(parcalar: { ad: string; yol: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: parcalar.map((parca, sira) => ({
      "@type": "ListItem",
      position: sira + 1,
      name: parca.ad,
      item: `${SITE_URL}${parca.yol}`,
    })),
  };
}

/**
 * Soru-cevap blogu. Gorunur icerikle birebir ayni metni tasimalidir;
 * sayfada olmayan soruyu semaya yazmak Google tarafindan ihlal sayilir.
 */
export function sssSemasi(
  sorular: { soru: string; cevap: string }[],
  sayfaYolu: string,
) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${sayfaYolu}#sss`,
    mainEntity: sorular.map((kayit) => ({
      "@type": "Question",
      name: kayit.soru,
      acceptedAnswer: { "@type": "Answer", text: kayit.cevap },
    })),
  };
}

/**
 * Sayfalarin JSON-LD blogunu tek <script> icinde birlestirir.
 * Birden fazla ayri script yerine tek graf kullanmak dugumler arasi
 * @id baglarinin cozulmesini garanti eder.
 */
export function grafSemasi(dugumler: Record<string, unknown>[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": dugumler,
  });
}
