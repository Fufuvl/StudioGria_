import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/assets/img/logo/logo-dark.png";
import TeklifForm from "../teklif/teklif-form";
import ErkenOlcum from "@/components/erken-olcum";
import ReferansSerit from "@/components/referans-serit";
import MobilCubuk from "./mobil-cubuk";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
  sssSemasi,
} from "@/data/kurulus-data";
import {
  urunGorseliAdimlari as adimlar,
  urunGorseliDahil as dahil,
  urunGorseliSorulari as sorular,
} from "@/data/urun-gorseli-data";
import styles from "./urun-gorseli.module.scss";

// Yapay zeka ile urun gorseli inis sayfasi. Reklamin sattigi teklifle ayni
// basligi ve ayni ilk adimi (fotografi gonder) tasir.
// Sayfa gorsel sattigi icin kanit metinle degil kareyle verilir: markanin
// gonderdigi fotograf kucuk, ayni urunden uretilen kareler buyuk durur.
// Sayfada fiyat yazilmaz (kullanici karari, 12 Eki 2026); kapsam maddeleri
// teklif dosyasiyla aynidir. Gorseller yalniz Lucea Jewelry ve Star Termos
// islerinden secilir.
//
// Arama: baslik ve aciklama "yapay zeka urun fotografi / urun gorseli"
// sorgu kumesini tasir; fiyat ve arac niyetli sorgular SSS'de karsilanir.

const sayfaBaslik = "Yapay Zeka ile Ürün Fotoğrafı ve Ürün Görseli | Studio Gria";
const sayfaAciklama =
  "Ürün fotoğrafınızı gönderin, katalog karelerini yapay zeka ile üretelim. Ürün olduğu gibi kalır; sahne, ışık ve model markanıza göre kurulur. Çekim günü yok.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/ai-urun-gorseli" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Studio Gria",
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "https://www.studiogria.com/ai-urun-gorseli",
  },
  twitter: {
    card: "summary_large_image",
    title: sayfaBaslik,
    description: sayfaAciklama,
  },
};

const WHATSAPP_NUMARA = "905388654405";
const whatsapp = (mesaj: string) =>
  `https://wa.me/${WHATSAPP_NUMARA}?text=${encodeURIComponent(mesaj)}`;

const GENEL_MESAJ =
  "Merhaba, web sitenizden yazıyorum. Ürün görselleri için bilgi almak istiyorum.";
const genelAdres = whatsapp(GENEL_MESAJ);

const GORSEL = "/assets/img/ai-solutions/urun-gorseli";

// Her vakada "once" markadan gelen urun fotografi, kareler ayni urun icin
// uretilen gorsellerdir. Lucea eslesmeleri kaynak arsivdeki urun adlarina,
// Star Termos eslesmeleri markanin urun fotograflarina gore yapildi.
// Dosya adi kalibi: {dosya}-urun-fotografi.jpg ve {dosya}-yapay-zeka-gorseli-N.jpg
type Vaka = {
  no: string;
  ad: string;
  marka: string;
  dosya: string;
  onceEtiket: string;
  onceAlt: string;
  aciklama: string;
  kareler: [string, string];
};

const luceaVakalari: Vaka[] = [
  {
    no: "01",
    ad: "Solis küpe",
    marka: "Lucea Jewelry",
    dosya: "lucea-solis-kupe",
    onceEtiket: "Gönderilen fotoğraf",
    onceAlt: "markanın gönderdiği, tezgah üstünde çekilmiş fotoğraf",
    aciklama:
      "Tezgah üstünde çekilmiş fotoğraftan modelli editoryal kare ve taş üzerinde ürün karesi.",
    kareler: ["modelli editoryal kare", "taş üzerinde ürün karesi"],
  },
  {
    no: "02",
    ad: "Vesper bileklik",
    marka: "Lucea Jewelry",
    dosya: "lucea-vesper-bileklik",
    onceEtiket: "Gönderilen fotoğraf",
    onceAlt: "markanın gönderdiği, tezgah üstünde çekilmiş fotoğraf",
    aciklama:
      "Tezgah üstünde çekilmiş fotoğraftan modelli kare ve koyu zeminde yakın plan.",
    kareler: ["modelli kare", "koyu zeminde yakın plan"],
  },
];

const starTermosVakalari: Vaka[] = [
  {
    no: "03",
    ad: "Pipetli termos",
    marka: "Star Termos",
    dosya: "star-termos-pipetli-termos",
    onceEtiket: "Gönderilen fotoğraf",
    onceAlt: "markanın gönderdiği, ofiste telefonla çekilmiş fotoğraf",
    aciklama:
      "Ofiste telefonla çekilmiş fotoğraftan çalışma masasında kullanım karesi ve yosun üzerinde ürün karesi.",
    kareler: ["çalışma masasında kullanım karesi", "yosun üzerinde ürün karesi"],
  },
  {
    no: "04",
    ad: "Yeşil termos",
    marka: "Star Termos",
    dosya: "star-termos-yesil-termos",
    onceEtiket: "Katalog fotoğrafı",
    onceAlt: "markanın beyaz fonlu katalog fotoğrafı",
    aciklama:
      "Beyaz fonlu katalog fotoğrafından koyu zeminde ürün karesi ve kafe masasında servis karesi.",
    kareler: ["koyu zeminde ürün karesi", "kafe masasında kahve servisi karesi"],
  },
  {
    no: "05",
    ad: "Beyaz termos",
    marka: "Star Termos",
    dosya: "star-termos-beyaz-termos",
    onceEtiket: "Katalog fotoğrafı",
    onceAlt: "markanın beyaz fonlu katalog fotoğrafı",
    aciklama:
      "Beyaz fonlu katalog fotoğrafından narlı sofra sahnesi ve buz üzerinde ürün karesi.",
    kareler: ["narlı sofra sahnesi", "buz ve limonla ürün karesi"],
  },
];

const sozler = [
  {
    ad: "Aslına sadakat",
    metin: "Logo, renk ve ürün detayları her karede tek tek elle kontrol edilir.",
  },
  {
    ad: "Elle rötuş",
    metin: "Her kare elden geçer ve rötuşlanır. Yapay görünen iş teslim edilmez.",
  },
  {
    ad: "Seçilmiş kareler",
    metin:
      "Her ürün için çok sayıda alternatif üretir, aralarından en güçlü kareleri seçeriz.",
  },
];

// Uc baslangic yolu. Sayfada tutar yazilmaz; teklif urun sayisina gore
// WhatsApp'tan ya da formdan iletilir.
const paketler = [
  {
    ad: "Tek ürün",
    olcu: "3 kare",
    ek: "Bir ürün",
    metin: "Denemek için en kısa yol. Sonucu kendi ürününüzde görürsünüz.",
    eylem: "Tek ürünle başlayın",
    mesaj:
      "Merhaba, web sitenizden yazıyorum. Tek ürün için üç kare hakkında bilgi almak istiyorum.",
  },
  {
    ad: "Başlangıç paketi",
    olcu: "15 kare",
    ek: "5 ürün",
    metin:
      "İlk ürünü birlikte üretiyoruz; onaylarsanız kalan ürünler seri üretime geçer.",
    eylem: "Paketle başlayın",
    mesaj:
      "Merhaba, web sitenizden yazıyorum. Başlangıç paketi (5 ürün, 15 kare) hakkında bilgi almak istiyorum.",
    one: true,
  },
  {
    ad: "Katalog",
    olcu: "10+ ürün",
    ek: "Mağazanıza özel plan",
    metin:
      "Ürün sayısı arttıkça ürün başına maliyet düşer. Kataloğunuzun büyüklüğüne göre teklif hazırlıyoruz.",
    eylem: "Kataloğunuz için teklif alın",
    mesaj:
      "Merhaba, web sitenizden yazıyorum. 10 ürün ve üzeri kataloğum için ürün görseli teklifi almak istiyorum.",
  },
];

const sayfaAdresi = `${SITE_URL}/ai-urun-gorseli`;

// Sayfada tutar yazilmadigi icin yapisal veride Offer yoktur; hizmetin
// tanimi ve ornek gorselleri verilir.
const sayfaSemasi = grafSemasi([
  {
    "@type": "Service",
    "@id": `${sayfaAdresi}#hizmet`,
    name: "Yapay zeka ile ürün görseli üretimi",
    alternateName: "Yapay zeka ile ürün fotoğrafı",
    serviceType: "Ürün görseli üretimi",
    description: sayfaAciklama,
    url: sayfaAdresi,
    provider: { "@id": KIMLIK.kurulus },
    areaServed: { "@type": "Country", name: "Türkiye" },
    image: [1, 2, 3].map(
      (sira) => `${SITE_URL}${GORSEL}/lucea-marea-kupe-yapay-zeka-gorseli-${sira}.jpg`,
    ),
  },
  {
    "@type": "WebPage",
    "@id": `${sayfaAdresi}#sayfa`,
    url: sayfaAdresi,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": `${sayfaAdresi}#hizmet` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}${GORSEL}/lucea-marea-kupe-yapay-zeka-gorseli-1.jpg`,
    },
  },
  sssSemasi(sorular, "/ai-urun-gorseli"),
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "AI destekli çözümler", yol: "/ai-destekli-cozumler" },
    { ad: "Yapay zeka ile ürün görseli", yol: "/ai-urun-gorseli" },
  ]),
]);

function WhatsappIkon() {
  return (
    <svg className={styles.ikon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Bir urunun satiri: solda markadan gelen fotograf, saginda ayni urunden
// uretilen iki kare.
function VakaSatiri({ vaka }: { vaka: Vaka }) {
  return (
    <article className={styles.vaka}>
      <div className={styles.vakaMetin}>
        <p className={styles.vakaNo}>{vaka.no}</p>
        <h3 className={styles.vakaAd}>{vaka.ad}</h3>
        <p className={styles.vakaMarka}>{vaka.marka}</p>
        <p className={styles.vakaAciklama}>{vaka.aciklama}</p>
      </div>
      <figure className={styles.vakaOnce}>
        <div className={styles.vakaOnceKare}>
          <Image
            className={styles.gorsel}
            src={`${GORSEL}/${vaka.dosya}-urun-fotografi.jpg`}
            alt={`${vaka.marka} ${vaka.ad}: ${vaka.onceAlt}`}
            fill
            sizes="(max-width: 767px) 46vw, 220px"
          />
        </div>
        <figcaption className={styles.vakaEtiket}>{vaka.onceEtiket}</figcaption>
      </figure>
      {vaka.kareler.map((kare, sira) => (
        <figure
          className={`${styles.vakaKare} ${sira === 0 ? styles.vakaA : styles.vakaB}`}
          key={kare}
        >
          <Image
            className={`${styles.gorsel} ${styles.yakin}`}
            src={`${GORSEL}/${vaka.dosya}-yapay-zeka-gorseli-${sira + 1}.jpg`}
            alt={`${vaka.marka} ${vaka.ad}: yapay zeka ile üretilmiş ${kare}`}
            fill
            sizes="(max-width: 767px) 46vw, 430px"
          />
        </figure>
      ))}
    </article>
  );
}

export default function AiUrunGorseliSayfasi() {
  return (
    <main className={styles.sayfa}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <ErkenOlcum />

      <header className={styles.ust}>
        <div className={`${styles.kapsayici} ${styles.ustIc}`}>
          <Link href="/" aria-label="Studio Gria ana sayfa">
            <Image
              src={logoDark}
              alt="Studio Gria"
              width={150}
              height={40}
              style={{ height: "auto", width: "auto", maxHeight: "36px" }}
              priority
            />
          </Link>
          <nav className={styles.gezinti} aria-label="Sayfa içi">
            <a className={styles.gezintiBag} href="#ornekler">Örnekler</a>
            <a className={styles.gezintiBag} href="#kapsam">Kapsam</a>
            <a className={styles.gezintiBag} href="#surec">Süreç</a>
            <a className={styles.gezintiBag} href="#sorular">Sorular</a>
          </nav>
          <a
            className={styles.ustDugme}
            href={genelAdres}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIkon />
            WhatsApp
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.kapsayici}>
          <div className={styles.heroIzgara}>
            <div className={styles.heroMetin}>
              {/* Rozet H1'in parcasi: baslik "yapay zeka ile urun gorseli"
                  sorgusunu tasir, gorunum degismez. */}
              <h1 className={styles.baslik}>
                <span className={`${styles.rozet} sg-gir sg-gir-1`}>
                  Yapay zeka ile ürün görseli
                </span>
                <span className={`${styles.slogan} sg-gir sg-gir-2`}>
                  Tek fotoğraftan <em>üç katalog karesi</em>
                </span>
              </h1>
              <p className={`${styles.spot} sg-gir sg-gir-3`}>
                Ürününüzün net bir fotoğrafını gönderin. Ürün olduğu gibi kalır;
                sahnesini, ışığını ve zeminini biz kurarız. Stüdyo, model ve
                çekim günü gerekmez.
              </p>
              <div id="hero-eylem" className={`${styles.eylemler} sg-gir sg-gir-4`}>
                <a
                  className={styles.anaDugme}
                  href={genelAdres}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIkon />
                  Fotoğrafı WhatsApp&apos;tan gönderin
                </a>
                <a className={styles.ikinciBag} href="#ornekler">
                  Örnekleri görün
                </a>
              </div>
            </div>

            <div className={`${styles.vitrin} sg-gir sg-gir-3`}>
              <div className={styles.vitrinIzgara}>
                <figure className={`${styles.kare} ${styles.kareBuyuk}`}>
                  <span className={styles.kareNo}>01</span>
                  <Image
                    className={`${styles.gorsel} ${styles.yakin}`}
                    src={`${GORSEL}/lucea-marea-kupe-yapay-zeka-gorseli-1.jpg`}
                    alt="Marea küpe için yapay zeka ile üretilmiş, tenis kortunda modelli katalog karesi"
                    fill
                    priority
                    sizes="(max-width: 991px) 58vw, 380px"
                  />
                </figure>
                <figure className={styles.kare}>
                  <span className={styles.kareNo}>02</span>
                  <Image
                    className={`${styles.gorsel} ${styles.yakin}`}
                    src={`${GORSEL}/lucea-marea-kupe-yapay-zeka-gorseli-2.jpg`}
                    alt="Marea küpe için yapay zeka ile üretilmiş, profilden modelli yakın plan kare"
                    fill
                    priority
                    sizes="(max-width: 991px) 42vw, 280px"
                    style={{ objectPosition: "60% 45%" }}
                  />
                </figure>
                <figure className={styles.kare}>
                  <span className={styles.kareNo}>03</span>
                  <Image
                    className={`${styles.gorsel} ${styles.yakin}`}
                    src={`${GORSEL}/lucea-marea-kupe-yapay-zeka-gorseli-3.jpg`}
                    alt="Marea küpe için yapay zeka ile üretilmiş, kırmızı toz zeminde ürün karesi"
                    fill
                    sizes="(max-width: 991px) 42vw, 280px"
                  />
                </figure>
              </div>
              <figure className={styles.once}>
                <div className={styles.onceKare}>
                  <Image
                    className={styles.gorsel}
                    src={`${GORSEL}/lucea-marea-kupe-urun-fotografi.jpg`}
                    alt="Marea küpenin tezgah üstünde telefonla çekilmiş fotoğrafı"
                    fill
                    sizes="(max-width: 991px) 30vw, 200px"
                  />
                </div>
                <figcaption className={styles.onceEtiket}>Gönderilen fotoğraf</figcaption>
              </figure>
              <p className={styles.vitrinNot}>
                Küçük kare, Lucea Jewelry&apos;nin gönderdiği telefon fotoğrafı.
                Diğer üç kare aynı ürün için ürettiğimiz görseller.
              </p>
            </div>

            {/* Mobilde vitrinin altina iner; kare, kunyeden once gorunur */}
            <dl className={`${styles.kunye} sg-gir sg-gir-5`}>
              <div>
                <dt className={styles.kunyeDeger}>3 kare</dt>
                <dd className={styles.kunyeEtiket}>her ürün için</dd>
              </div>
              <div>
                <dt className={styles.kunyeDeger}>Elle rötuş</dt>
                <dd className={styles.kunyeEtiket}>her karede</dd>
              </div>
              <div>
                <dt className={styles.kunyeDeger}>Ticari kullanım</dt>
                <dd className={styles.kunyeEtiket}>hakkı dahil</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <ReferansSerit tekSerit />

      <section id="ornekler" className={`${styles.bolum} ${styles.capa}`}>
        <div className={styles.kapsayici}>
          <span className={styles.bolumRozet}>Takı · Lucea Jewelry</span>
          <h2 className={styles.bolumBaslik}>
            Gönderilen fotoğraf, <em>teslim edilen kareler</em>
          </h2>
          <p className={styles.bolumSpot}>
            Her satırda solda markanın bize gönderdiği fotoğraf, sağda aynı
            üründen ürettiğimiz kareler var. Ürün aynı, sahne yeni.
          </p>

          <div className={styles.vakalar}>
            {luceaVakalari.map((vaka) => (
              <VakaSatiri vaka={vaka} key={vaka.dosya} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.bolum} ${styles.bolumBeyaz}`}>
        <div className={styles.kapsayici}>
          <span className={styles.bolumRozet}>Termos · Star Termos</span>
          <h2 className={styles.bolumBaslik}>
            Takıdan termosa, <em>aynı yöntem</em>
          </h2>
          <p className={styles.bolumSpot}>
            Star Termos&apos;un ürün fotoğrafları bazen telefondan, bazen
            katalogdan geldi. Yöntem değişmedi: ürün aynı kalır, sahne markanın
            diline göre kurulur.
          </p>

          <div className={styles.vakalar}>
            {starTermosVakalari.map((vaka) => (
              <VakaSatiri vaka={vaka} key={vaka.dosya} />
            ))}
          </div>

          <p className={styles.aciklamaNot}>
            Örnekler Lucea Jewelry ve Star Termos için ürettiğimiz işlerden
            seçilmiştir. Karelerde görünen kişiler yapay zeka ile üretilmiştir;
            gerçek bir kişiyi göstermez.
          </p>
          <div className={styles.bolumAlt}>
            <Link className={styles.ikinciBag} href="/ai-destekli-cozumler">
              Tüm yapay zeka çalışmalarını görün
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.soz}>
        <div className={styles.kapsayici}>
          <h2 className={styles.sozBuyuk}>
            Ürününüz olduğu gibi kalır.{" "}
            <em className={styles.sozSoluk}>Değişen yalnızca sahnedir.</em>
          </h2>
          <div className={styles.sozIzgara}>
            {sozler.map((soz) => (
              <div className={styles.sozOge} key={soz.ad}>
                <h3 className={styles.sozAd}>{soz.ad}</h3>
                <p className={styles.sozMetin}>{soz.metin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kapsam" className={`${styles.bolum} ${styles.capa}`}>
        <div className={styles.kapsayici}>
          <span className={styles.bolumRozet}>Kapsam</span>
          <h2 className={styles.bolumBaslik}>
            Her ürün için <em>üç katalog karesi</em>
          </h2>
          <p className={styles.bolumSpot}>
            Tek üründen tüm kataloğa aynı yöntemle çalışırız. Teklifiniz ürün
            sayınıza göre hazırlanır; fotoğrafı gönderdiğiniz gün dönüş yaparız.
          </p>

          <div className={styles.paketler}>
            {paketler.map((paket) => (
              <div
                className={`${styles.paket} ${paket.one ? styles.paketOne : ""}`}
                key={paket.ad}
              >
                <p className={styles.paketAd}>
                  {paket.ad}
                  {paket.one && <span className={styles.paketIsaret}>Önerilen</span>}
                </p>
                <p className={styles.paketOlcu}>{paket.olcu}</p>
                <p className={styles.paketEk}>{paket.ek}</p>
                <p className={styles.paketMetin}>{paket.metin}</p>
                <a
                  className={styles.paketBag}
                  href={whatsapp(paket.mesaj)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {paket.eylem}
                </a>
              </div>
            ))}
          </div>

          <div className={styles.dahil}>
            <h3 className={styles.dahilBaslik}>Her üründe dahil olanlar</h3>
            <ul className={styles.dahilListe}>
              {dahil.map((oge) => (
                <li className={styles.dahilOge} key={oge}>
                  <span className={styles.dahilIsaret} aria-hidden="true">+</span>
                  {oge}
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.dipnot}>
            Ödeme kredi kartıyla ve taksitle yapılabilir. Ek kare ya da farklı
            sahne talebi ayrıca tekliflendirilir.
          </p>
        </div>
      </section>

      <section id="surec" className={`${styles.bolum} ${styles.bolumBeyaz} ${styles.capa}`}>
        <div className={styles.kapsayici}>
          <span className={styles.bolumRozet}>Süreç</span>
          <h2 className={styles.bolumBaslik}>
            Fotoğraftan kareye <em>dört adım</em>
          </h2>
          <div className={styles.adimlar}>
            {adimlar.map((adim) => (
              <div className={styles.adim} key={adim.no}>
                <p className={styles.adimNo}>{adim.no}</p>
                <h3 className={styles.adimBaslik}>{adim.baslik}</h3>
                <p className={styles.adimMetin}>{adim.metin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sorular" className={`${styles.bolum} ${styles.capa}`}>
        <div className={styles.kapsayici}>
          <div className={styles.sssIzgara}>
            <div>
              <span className={styles.bolumRozet}>Sorular</span>
              <h2 className={styles.bolumBaslik}>
                Yapay zeka ile ürün görseli: <em>sık sorulanlar</em>
              </h2>
              <p className={styles.bolumSpot}>
                Aradığınız cevap burada yoksa{" "}
                <a
                  className={styles.yolBag}
                  href={genelAdres}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderBottom: "1px solid rgba(22, 24, 29, 0.4)" }}
                >
                  WhatsApp&apos;tan sorun
                </a>
                .
              </p>
            </div>
            <div className={styles.sssListe}>
              {sorular.map((item, sira) => (
                <details className={styles.sss} key={item.soru} open={sira === 0}>
                  <summary className={styles.sssSoru}>
                    {item.soru}
                    <span className={styles.sssArti} aria-hidden="true">+</span>
                  </summary>
                  <p className={styles.sssCevap}>{item.cevap}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="teklif" className={`${styles.bolum} ${styles.bolumBeyaz} ${styles.capa}`}>
        <div className={styles.kapsayici}>
          <div className={styles.iletisimIzgara}>
            <div>
              <span className={styles.bolumRozet}>Başlayalım</span>
              <h2 className={styles.bolumBaslik}>
                İlk adım: <em>fotoğrafı gönderin</em>
              </h2>
              <p className={styles.iletisimSpot}>
                Ürün fotoğrafınızı WhatsApp&apos;tan iletin, aynı gün dönüş
                yapalım. Ürün sayınız fazlaysa formu doldurun; mağazanıza özel
                teklifi hazırlayalım.
              </p>
              <a
                className={styles.anaDugme}
                href={genelAdres}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIkon />
                Fotoğrafı WhatsApp&apos;tan gönderin
              </a>
              <ul className={styles.yollar}>
                <li className={styles.yol}>
                  <span className={styles.yolEtiket}>Telefon</span>
                  <a className={styles.yolBag} href="tel:+905388654405">
                    +90 538 865 44 05
                  </a>
                </li>
                <li className={styles.yol}>
                  <span className={styles.yolEtiket}>E-posta</span>
                  <a className={styles.yolBag} href="mailto:hello@studiogria.com">
                    hello@studiogria.com
                  </a>
                </li>
                <li className={styles.yol}>
                  <span className={styles.yolEtiket}>Çalışma bölgesi</span>
                  <span>Türkiye geneli, uzaktan</span>
                </li>
              </ul>
            </div>

            <div id="teklif-formu">
              <TeklifForm
                kaynak="AI Ürün Görseli Sayfası"
                baslik="Mağazanıza özel teklif alın"
                spot="Ürün grubunuzu ve ürün sayınızı yazın, aynı gün dönüş yapalım."
                modelSecimi={false}
                yapiskan={false}
                konu="Hizmet: Yapay zeka ile ürün görseli"
                sektorEtiket="Ürün grubunuz"
                sektorOrnek="Takı, kozmetik, tekstil, ev ürünleri"
                sektorHata="Ürün grubunuzu giriniz"
                hedefEtiket="Ürün sayınız (isteğe bağlı)"
                hedefOrnek="Örneğin 25 ürün"
                whatsappMesaj={GENEL_MESAJ}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.alt}>
        <div className={`${styles.kapsayici} ${styles.altIc}`}>
          <span>Studio Gria, İstanbul</span>
          <span className={styles.altBaglar}>
            <Link className={styles.altBag} href="/">Ana sayfa</Link>
            <Link className={styles.altBag} href="/ai-destekli-cozumler">
              AI destekli çözümler
            </Link>
            <Link className={styles.altBag} href="/hizmetler/ai-uretim-reklam-filmleri">
              AI reklam filmleri
            </Link>
            <Link className={styles.altBag} href="/hizmetler/sosyal-medya-yonetimi">
              Sosyal medya yönetimi
            </Link>
            <Link className={styles.altBag} href="/referanslar">Referanslar</Link>
          </span>
        </div>
      </footer>

      <MobilCubuk adres={genelAdres} gizleyenler={["hero-eylem", "teklif"]} />
    </main>
  );
}
