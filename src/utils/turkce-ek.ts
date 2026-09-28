// Ozel adlara Turkce bulunma eki (-de/-da/-te/-ta) ekler.
// Ilce adlari sayfa basliklarinda gecer; "Esenyurt'de" gibi hatali ek hem
// okuyucuya hem de markanin dil ozenine dair izlenime zarar verir.
//
// Kurallar: son unlu kalin (a, ı, o, u) ise "a", ince (e, i, ö, ü) ise "e";
// ad sert unsuzle (f, s, t, k, ç, ş, h, p) bitiyorsa "d" yerine "t".

const KALIN = "aıou";
const UNLULER = "aeıioöuü";
const SERT = "fstkçşhp";

export function bulunmaEki(ad: string, ek: "" | "ki" = ""): string {
  const kucuk = ad.toLocaleLowerCase("tr-TR");
  const sonUnlu = kucuk.split("").reverse().find((h) => UNLULER.includes(h)) ?? "e";
  const unlu = KALIN.includes(sonUnlu) ? "a" : "e";
  const sonHarf = kucuk[kucuk.length - 1];
  const unsuz = SERT.includes(sonHarf) ? "t" : "d";
  return `${ad}'${unsuz}${unlu}${ek}`;
}
