// Imzali form bileti.
//
// Sorun: formun doldurulma suresini istemci bildirirse bot istedigi degeri
// yazabilir ("30 saniyede doldurdum"). Sure tuzagi o zaman islevsiz kalir.
//
// Cozum: sayfa acilirken sunucudan bir bilet alinir. Bilet, sunucunun
// urettigi zaman damgasini tasir ve HMAC ile imzalanir. Gonderim geldiginde
// sureyi istemcinin beyanindan degil biletin icindeki damgadan okuruz.
// Gizli anahtar olmadan bilet uretilemez, damga degistirilemez.
//
// Bilet ayrica tek kullanimliktir: ayni bilet ikinci kez gonderilirse
// reddedilir, boylece tek bir gecerli bilet tekrar tekrar kullanilamaz.

import { createHmac, randomBytes, timingSafeEqual } from "crypto";

// Biletin gecerlilik suresi. Ziyaretci sayfayi acip bir sure sonra
// donebilir, bu yuzden genis tutulur.
const OMUR_MS = 6 * 60 * 60 * 1000;

// Insanin formu doldurmasi icin gereken en kisa makul sure
const EN_KISA_MS = 4000;

function gizliAnahtar(): string {
  const acikAnahtar = process.env.LEAD_BILET_SECRET;
  if (acikAnahtar) return acikAnahtar;
  // Env degiskeni tanimlanmamissa dagitima ozgu sabit bir degere duseriz:
  // tum sunucu ornekleri ayni degeri gorur ve deger dagitim boyunca sabittir.
  // LEAD_BILET_SECRET tanimlamak yine de daha guvenlidir.
  const yedek = process.env.VERCEL_GIT_COMMIT_SHA || process.env.VERCEL_DEPLOYMENT_ID;
  if (yedek) return "studiogria-lead-bileti-" + yedek;
  return "studiogria-lead-bileti-yerel-gelistirme";
}

function imzala(govde: string): string {
  return createHmac("sha256", gizliAnahtar()).update(govde).digest("base64url");
}

export function biletUret(): string {
  const icerik = JSON.stringify({
    t: Date.now(),
    n: randomBytes(9).toString("base64url"),
  });
  const govde = Buffer.from(icerik, "utf8").toString("base64url");
  return govde + "." + imzala(govde);
}

export type BiletDurumu =
  | "gecerli"
  | "yok" // bilet hic gonderilmemis
  | "bozuk" // imza tutmuyor: uydurulmus ya da kurcalanmis
  | "suresi-dolmus" // cok eski bir sekmeden gelmis olabilir
  | "cok-hizli" // form dort saniyeden kisa surede gonderilmis
  | "tekrar"; // ayni bilet ikinci kez kullanilmis

export type BiletSonucu = { durum: BiletDurumu; yasSaniye?: number };

// Kullanilmis bilet numaralari. Sunucusuz ortamda her ornek kendi bellegini
// tutar, bu yuzden mutlak degildir; ayni ornege dusen tekrarlari keser.
const kullanilanlar = new Map<string, number>();

function eskileriTemizle(simdi: number) {
  if (kullanilanlar.size < 1000) return;
  const silinecekler: string[] = [];
  kullanilanlar.forEach((zaman, numara) => {
    if (simdi - zaman > OMUR_MS) silinecekler.push(numara);
  });
  silinecekler.forEach((numara) => kullanilanlar.delete(numara));
}

export function biletDogrula(bilet: unknown): BiletSonucu {
  if (typeof bilet !== "string" || bilet.length === 0) return { durum: "yok" };

  const parcalar = bilet.split(".");
  if (parcalar.length !== 2) return { durum: "bozuk" };

  const [govde, imza] = parcalar;
  const beklenenImza = imzala(govde);
  const gelen = Buffer.from(imza, "utf8");
  const beklenen = Buffer.from(beklenenImza, "utf8");
  if (gelen.length !== beklenen.length || !timingSafeEqual(gelen, beklenen)) {
    return { durum: "bozuk" };
  }

  let icerik: { t?: unknown; n?: unknown };
  try {
    icerik = JSON.parse(Buffer.from(govde, "base64url").toString("utf8"));
  } catch {
    return { durum: "bozuk" };
  }
  if (typeof icerik.t !== "number" || typeof icerik.n !== "string") {
    return { durum: "bozuk" };
  }

  const simdi = Date.now();
  const yasMs = simdi - icerik.t;
  const yasSaniye = Math.round(yasMs / 1000);

  // Gelecege tarihli bilet: saat kaymasi degil, kurcalama isaretidir
  if (yasMs < -60000) return { durum: "bozuk" };
  if (yasMs > OMUR_MS) return { durum: "suresi-dolmus", yasSaniye };
  if (yasMs < EN_KISA_MS) return { durum: "cok-hizli", yasSaniye };

  if (kullanilanlar.has(icerik.n)) return { durum: "tekrar", yasSaniye };
  kullanilanlar.set(icerik.n, simdi);
  eskileriTemizle(simdi);

  return { durum: "gecerli", yasSaniye };
}
