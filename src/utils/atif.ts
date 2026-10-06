// Lead kaynak atfi (6 Eki 2026).
// Ziyaretci siteye UTM'li ya da fbclid'li bir adresle geldiyse bu bilgi
// oturum boyunca saklanir ve form gonderiminde lead e-postasina yazilir.
// Boylece hangi lead'in hangi reklamdan geldigi posta kutusunda gorulur.
// Ilk temas esastir: ayni oturumda sonradan gelen parametresiz sayfa
// kaydi silmez. sessionStorage erisilemezse yalnizca o anki adres okunur.

const ANAHTAR = "sg-atif";
const PARAMETRELER = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
];

function adrestenOku(): string {
  if (typeof window === "undefined") return "";
  const sorgu = new URLSearchParams(window.location.search);
  const parcalar: string[] = [];
  for (const ad of PARAMETRELER) {
    const deger = sorgu.get(ad);
    // fbclid ve gclid uzun ve anlamsizdir; yalnizca varligi yeterli
    if (deger) parcalar.push(ad.endsWith("clid") ? `${ad}=var` : `${ad}=${deger.slice(0, 80)}`);
  }
  return parcalar.join(" | ");
}

// Sayfa acilisinda cagrilir; parametre varsa oturuma yazar.
export function atifKaydet() {
  const atif = adrestenOku();
  if (!atif) return;
  try {
    if (!window.sessionStorage.getItem(ANAHTAR)) {
      window.sessionStorage.setItem(ANAHTAR, `${atif} | giris=${window.location.pathname}`);
    }
  } catch {
    // Gizli sekme ya da engellenmis depolama: gonderimde adresten okunur
  }
}

// Form gonderiminde cagrilir.
export function atifOku(): string {
  try {
    const kayitli = window.sessionStorage.getItem(ANAHTAR);
    if (kayitli) return kayitli;
  } catch {
    // depolama yoksa asagida adresten okunur
  }
  return adrestenOku();
}
