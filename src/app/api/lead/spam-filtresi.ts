// Form spam filtresi.
//
// Tasarim ilkesi: gercek bir musteriyi asla kaybetmemek.
// Bu yuzden iki asamali calisir:
//   1. Kesin bot imzalari (honeypot, sure tuzagi, yabanci origin, link) sessizce reddedilir
//   2. Icerik supheleri puanlanir; yuksek puan cope, orta puan "SUPHELI" etiketiyle yine de gelir
//
// Boylece yanlis pozitif bir lead en fazla etiketlenir, hicbir zaman kaybolmaz.

export type LeadAlanlari = {
  kaynak?: string;
  adSoyad?: string;
  telefon?: string;
  eposta?: string;
  sektor?: string;
  hedef?: string;
  konu?: string;
  mesaj?: string;
  // Bot tuzaklari
  website?: string; // honeypot: gorunmez alan, insan dolduramaz
  sureSaniye?: number; // formun acilisindan gonderime kadar gecen sure
};

export type FiltreKarari = "gecti" | "supheli" | "reddedildi";

export type FiltreSonucu = {
  karar: FiltreKarari;
  puan: number;
  sebepler: string[];
};

// Formun insan tarafindan doldurulmasi icin gereken en kisa makul sure
const EN_KISA_DOLDURMA_SANIYE = 4;

// Puan esikleri
const ESIK_COP = 6;
const ESIK_SUPHE = 3;

const UNLULER = new Set("aeıioöuüAEIİOÖUÜ".split(""));

function harfMi(karakter: string) {
  return /\p{L}/u.test(karakter);
}

// Rastgele uretilmis dizeleri yakalar: "tIUmPliTKxYeTdgFYe", "nJLxICxYBfumXDLJcBLgwyuG"
function rastgeleDizePuani(metin: string): { puan: number; sebepler: string[] } {
  const sebepler: string[] = [];
  let puan = 0;
  const temiz = metin.trim();
  if (temiz.length < 4) return { puan, sebepler };

  const kelimeler = temiz.split(/\s+/);

  // 1. Kelime ici buyuk harf sicramasi (camelCase). Tamami buyuk yazilan
  //    isimler ("MEHMET ALI") bu kontrolden muaf tutulur.
  let icBuyukHarf = 0;
  for (const kelime of kelimeler) {
    if (kelime.length < 3) continue;
    if (kelime === kelime.toLocaleUpperCase("tr-TR")) continue;
    for (const karakter of kelime.slice(1)) {
      const buyuk = karakter.toLocaleUpperCase("tr-TR");
      const kucuk = karakter.toLocaleLowerCase("tr-TR");
      if (harfMi(karakter) && karakter === buyuk && buyuk !== kucuk) {
        icBuyukHarf += 1;
      }
    }
  }
  if (icBuyukHarf >= 2) {
    puan += 4;
    sebepler.push("kelime ici rastgele buyuk harf");
  }

  // 2. Unlu harf orani. Turkce isimlerde bu oran genelde yuzde 35 uzerindedir.
  const harfler = temiz.split("").filter(harfMi);
  if (harfler.length >= 8) {
    const unluSayisi = harfler.filter((k) => UNLULER.has(k)).length;
    if (unluSayisi / harfler.length < 0.25) {
      puan += 2;
      sebepler.push("unlu harf orani cok dusuk");
    }
  }

  // 3. Dort ve uzeri ardisik sessiz harf
  let ardisik = 0;
  for (const karakter of temiz) {
    if (harfMi(karakter) && !UNLULER.has(karakter)) {
      ardisik += 1;
      if (ardisik >= 4) {
        puan += 2;
        sebepler.push("ardisik sessiz harf yigini");
        break;
      }
    } else {
      ardisik = 0;
    }
  }

  return { puan, sebepler };
}

// Turkiye numarasi dogrulamasi: 10 hane, mobil 5 ya da sabit hat 2/3/4 ile baslar
function telefonGecerliMi(ham: string): boolean {
  let rakamlar = ham.replace(/\D/g, "");
  if (rakamlar.startsWith("0090")) rakamlar = rakamlar.slice(4);
  else if (rakamlar.startsWith("90") && rakamlar.length > 10) rakamlar = rakamlar.slice(2);
  else if (rakamlar.startsWith("0")) rakamlar = rakamlar.slice(1);
  if (rakamlar.length !== 10) return false;
  return /^[2345]/.test(rakamlar);
}

// Gmail adreslerinde nokta ve arti etiketi yok sayilir; ayni kutuya dusen
// varyantlari tek anahtara indirger.
export function epostaNormalize(eposta: string): string {
  const temiz = eposta.trim().toLowerCase();
  const [yerel, alan] = temiz.split("@");
  if (!yerel || !alan) return temiz;
  let yeniYerel = yerel.split("+")[0];
  if (alan === "gmail.com" || alan === "googlemail.com") {
    yeniYerel = yeniYerel.replace(/\./g, "");
  }
  return yeniYerel + "@" + alan;
}

const ATILABILIR_ALANLAR = [
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "yopmail.com",
  "sharklasers.com",
  "trashmail.com",
  "getnada.com",
];

// Klasik SEO spam ve enjeksiyon izleri
const LINK_DESENI = /(https?:\/\/|www\.|\[url|<a\s|\[link)/i;
// Kiril, Yunan, CJK, Arap alfabeleri: Turkce bir lead formunda beklenmez
const YABANCI_ALFABE = /[Ѐ-ӿͰ-Ͽ一-鿿぀-ヿ؀-ۿ]/;

export function spamDegerlendir(veri: LeadAlanlari): FiltreSonucu {
  const sebepler: string[] = [];

  // --- Kesin bot imzalari: puanlamaya bile girmez ---

  // Honeypot: gorunmez alan yalnizca otomatik doldurma ile dolar
  if (typeof veri.website === "string" && veri.website.trim() !== "") {
    return { karar: "reddedildi", puan: 99, sebepler: ["honeypot alani doldurulmus"] };
  }

  // Sure tuzagi: insan formu dort saniyeden hizli dolduramaz
  if (
    typeof veri.sureSaniye === "number" &&
    veri.sureSaniye >= 0 &&
    veri.sureSaniye < EN_KISA_DOLDURMA_SANIYE
  ) {
    return {
      karar: "reddedildi",
      puan: 99,
      sebepler: ["form " + veri.sureSaniye + " saniyede gonderildi"],
    };
  }

  const tumMetin = [veri.adSoyad, veri.sektor, veri.hedef, veri.konu, veri.mesaj]
    .filter(Boolean)
    .join(" ");

  if (LINK_DESENI.test(tumMetin)) {
    return { karar: "reddedildi", puan: 99, sebepler: ["metinde baglanti var"] };
  }

  if (YABANCI_ALFABE.test(tumMetin)) {
    return { karar: "reddedildi", puan: 99, sebepler: ["yabanci alfabe karakterleri"] };
  }

  // --- Puanlanan supheler ---
  let puan = 0;

  // Tarayici uzerinden gelen her gonderimde sure alani bulunur.
  // Yoksa istek dogrudan API'ye atilmis olabilir.
  if (typeof veri.sureSaniye !== "number") {
    puan += 3;
    sebepler.push("form suresi bildirilmemis");
  }

  if (veri.adSoyad) {
    if (/\d/.test(veri.adSoyad)) {
      puan += 3;
      sebepler.push("ad soyad alaninda rakam var");
    }
    const analiz = rastgeleDizePuani(veri.adSoyad);
    puan += analiz.puan;
    sebepler.push(...analiz.sebepler.map((s) => "ad soyad: " + s));
  }

  if (veri.telefon && !telefonGecerliMi(veri.telefon)) {
    puan += 3;
    sebepler.push("telefon Turkiye formatina uymuyor");
  }

  if (veri.sektor) {
    const sektor = veri.sektor.trim();
    if (sektor.length >= 3 && !sektor.split("").some(harfMi)) {
      puan += 4;
      sebepler.push("sektor alaninda hic harf yok");
    } else {
      const analiz = rastgeleDizePuani(sektor);
      puan += analiz.puan;
      sebepler.push(...analiz.sebepler.map((s) => "sektor: " + s));
    }
  }

  if (veri.hedef) {
    const analiz = rastgeleDizePuani(veri.hedef);
    puan += analiz.puan;
    sebepler.push(...analiz.sebepler.map((s) => "hedef: " + s));
  }

  if (veri.eposta) {
    const eposta = veri.eposta.trim().toLowerCase();
    const [yerel, alan] = eposta.split("@");
    if (alan && ATILABILIR_ALANLAR.includes(alan)) {
      puan += 4;
      sebepler.push("tek kullanimlik e-posta servisi");
    }
    // Gmail nokta hilesi: tek kutuya dusen sayisiz varyant uretmek icin kullanilir
    if (yerel && (alan === "gmail.com" || alan === "googlemail.com")) {
      const noktaSayisi = (yerel.match(/\./g) || []).length;
      if (noktaSayisi >= 3) {
        puan += 3;
        sebepler.push("e-posta adresinde nokta hilesi");
      }
    }
  }

  if (puan >= ESIK_COP) return { karar: "reddedildi", puan, sebepler };
  if (puan >= ESIK_SUPHE) return { karar: "supheli", puan, sebepler };
  return { karar: "gecti", puan, sebepler };
}

// --- Origin dogrulamasi ---

const IZINLI_ORIGINLER = [
  "https://studiogria.com",
  "https://www.studiogria.com",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

export function originGecerliMi(istek: Request): boolean {
  const origin = istek.headers.get("origin");
  const referer = istek.headers.get("referer");
  const kaynak = origin || referer;
  // Tarayicidan gelen POST isteklerinin tamami origin tasir.
  // Ikisi de yoksa istek bir tarayicidan gelmiyordur.
  if (!kaynak) return false;

  if (IZINLI_ORIGINLER.some((izinli) => kaynak.startsWith(izinli))) return true;
  // Vercel onizleme dagitimlari
  if (/^https:\/\/[a-z0-9-]+\.vercel\.app/i.test(kaynak)) return true;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl && kaynak.startsWith(siteUrl)) return true;
  return false;
}

// --- Basit hiz siniri ---
//
// Sunucusuz ortamda her ornek kendi bellegini tutar, bu yuzden mutlak bir
// koruma degildir; ayni ornege dusen ardisik bot denemelerini keser.
// Kalici bir sinir gerekirse Vercel Firewall kural katmani devreye alinir.

type Kayit = { zamanlar: number[] };
const hafiza = new Map<string, Kayit>();

const SAAT_MS = 60 * 60 * 1000;
const GUN_MS = 24 * SAAT_MS;
const SAATLIK_SINIR = 3;
const GUNLUK_SINIR = 8;

export function hizSiniriAsildiMi(anahtar: string, simdi: number): boolean {
  const kayit = hafiza.get(anahtar) || { zamanlar: [] };
  const guncel = kayit.zamanlar.filter((zaman) => simdi - zaman < GUN_MS);

  const sonSaat = guncel.filter((zaman) => simdi - zaman < SAAT_MS).length;
  const asildi = sonSaat >= SAATLIK_SINIR || guncel.length >= GUNLUK_SINIR;

  guncel.push(simdi);
  hafiza.set(anahtar, { zamanlar: guncel });

  // Bellek sismesini onle
  if (hafiza.size > 500) {
    const silinecekler: string[] = [];
    hafiza.forEach((mevcutKayit, mevcutAnahtar) => {
      if (mevcutKayit.zamanlar.every((zaman: number) => simdi - zaman > GUN_MS)) {
        silinecekler.push(mevcutAnahtar);
      }
    });
    silinecekler.forEach((anahtarAdi) => hafiza.delete(anahtarAdi));
  }

  return asildi;
}

export function istekAnahtari(istek: Request, eposta: string): string {
  const ip =
    istek.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    istek.headers.get("x-real-ip") ||
    "bilinmiyor";
  return eposta ? ip + "|" + epostaNormalize(eposta) : ip;
}
