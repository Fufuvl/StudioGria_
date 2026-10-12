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
import styles from "./urun-gorseli.module.scss";

// Yapay zeka ile urun gorseli inis sayfasi. Reklamin sattigi teklifle ayni
// basligi, ayni fiyati ve ayni ilk adimi (fotografi gonder) tasir.
// Sayfa gorsel sattigi icin kanit metinle degil kareyle verilir: markanin
// gonderdigi fotograf kucuk, ayni urunden uretilen kareler buyuk durur.
// Fiyat ve kapsam maddeleri teklif dosyasiyla aynidir; degisirse ikisi birlikte
// guncellenir.

const sayfaBaslik = "Yapay Zeka ile Ürün Görseli: 3 Kare 1.000 TL | Studio Gria";
const sayfaAciklama =
  "Ürün fotoğrafınızı gönderin; ürününüz olduğu gibi kalır, sahnesi yapay zeka ile kurulur. Bir ürünün üç katalog karesi 1.000 TL, başlangıç paketi 5.000 TL.";

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

// Her vakada "once" markanin gonderdigi fotograf, kareler ayni urun icin
// uretilen gorsellerdir. Eslesmeler kaynak arsivdeki urun adlarina gore yapildi.
const vakalar = [
  {
    no: "01",
    ad: "Solis küpe",
    anahtar: "solis",
    aciklama:
      "Tezgah üstünde çekilmiş fotoğraftan modelli editoryal kare ve taş üzerinde ürün karesi.",
    kareler: ["modelli editoryal kare", "taş üzerinde ürün karesi"],
  },
  {
    no: "02",
    ad: "Vesper bileklik",
    anahtar: "vesper",
    aciklama:
      "Tezgah üstünde çekilmiş fotoğraftan modelli kare ve koyu zeminde yakın plan.",
    kareler: ["modelli kare", "koyu zeminde yakın plan"],
  },
  {
    no: "03",
    ad: "Rebela küpe",
    anahtar: "rebela",
    aciklama:
      "Tezgah üstünde çekilmiş fotoğraftan modelli kare ve siyah kum üzerinde ürün karesi.",
    kareler: ["modelli kare", "siyah kum üzerinde ürün karesi"],
  },
];

const gruplar = [
  {
    ad: "Termos",
    marka: "Star Termos",
    gorsel: "/assets/img/ai-solutions/once-sonra/termos-sonra.jpg",
    once: "/assets/img/ai-solutions/once-sonra/termos-once.jpg",
    konum: "center 25%",
  },
  {
    ad: "İçecek",
    marka: "Matchakizi",
    gorsel: "/assets/img/ai-solutions/brand-mix/matcha-hero.jpg",
    konum: "center",
  },
  {
    ad: "Mobilya",
    marka: "Entepe",
    gorsel: "/assets/img/ai-solutions/brand-mix/entepe-dining.jpg",
    konum: "center",
  },
  {
    ad: "Parfüm",
    marka: "Luxera",
    gorsel: "/assets/img/ai-solutions/brand-mix/luxera-rocks.jpg",
    konum: "center",
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

const fiyatlar = [
  {
    ad: "Tek ürün",
    tutar: "1.000 TL",
    ek: "+ KDV",
    metin: "Bir ürün, üç katalog karesi. Denemek için en kısa yol.",
    eylem: "Tek ürünle başlayın",
    mesaj:
      "Merhaba, web sitenizden yazıyorum. Tek ürün için üç kare (1.000 TL) hakkında bilgi almak istiyorum.",
  },
  {
    ad: "Başlangıç paketi",
    tutar: "5.000 TL",
    ek: "+ KDV · 5 ürün, 15 kare",
    metin:
      "İlk ürünü birlikte üretiyoruz; onaylarsanız kalan ürünler seri üretime geçer.",
    eylem: "Paketle başlayın",
    mesaj:
      "Merhaba, web sitenizden yazıyorum. Başlangıç paketi (5 ürün, 15 kare, 5.000 TL) hakkında bilgi almak istiyorum.",
    one: true,
  },
  {
    ad: "10 ürün ve üzeri",
    tutar: "Size özel",
    ek: "Ürün sayısı arttıkça birim fiyat düşer",
    metin: "Kataloğunuzun büyüklüğüne göre mağazanıza özel teklif hazırlıyoruz.",
    eylem: "Kataloğunuz için teklif alın",
    mesaj:
      "Merhaba, web sitenizden yazıyorum. 10 ürün ve üzeri kataloğum için ürün görseli teklifi almak istiyorum.",
  },
];

const dahil = [
  "Ürün başına üç farklı kare",
  "Sahne konsepti ve stil tasarımı",
  "Elle rötuş ve aslına sadakat kontrolü",
  "E-ticaret ve sosyal medya formatları",
  "Yüksek çözünürlükte teslim",
  "Ticari kullanım hakkı",
];

const adimlar = [
  {
    no: "01",
    baslik: "Fotoğrafı gönderirsiniz",
    metin:
      "Ürününüzün net göründüğü fotoğrafı WhatsApp'tan iletirsiniz. Telefonla çekilmiş olması yeterlidir.",
  },
  {
    no: "02",
    baslik: "Sahneyi biz kurarız",
    metin:
      "Fon, mekan, model ve ışık kararını markanızın diline göre ekibimiz verir.",
  },
  {
    no: "03",
    baslik: "İlk ürünü onaylarsınız",
    metin:
      "İlk ürünün üç karesini size sunarız. Onayınızla kalan ürünler seri üretime geçer.",
  },
  {
    no: "04",
    baslik: "Kareler teslim edilir",
    metin:
      "Her kare elle rötuşlanır; e-ticaret ve sosyal medya formatlarında, yüksek çözünürlükte teslim edilir.",
  },
];

const sorular = [
  {
    soru: "Ürünümün kendisi değişiyor mu?",
    cevap:
      "Hayır. Ürününüz olduğu gibi kalır; yapay zeka ile kurulan kısım sahne, ışık ve zemindir. Logo, renk ve ürün detayları her karede elle kontrol edilir.",
  },
  {
    soru: "Nasıl bir fotoğraf göndermeliyim?",
    cevap:
      "Ürünün net göründüğü, iyi ışıkta çekilmiş bir fotoğraf yeterlidir; telefonla çekilmiş olabilir. Birkaç açıdan fotoğraf gönderirseniz kareler daha tutarlı olur.",
  },
  {
    soru: "Sahneye kim karar veriyor?",
    cevap:
      "Sahne konseptini ekibimiz kurar: fon, mekan, model ve ışık markanızın diline göre seçilir. İlk ürünün karelerini görürsünüz; onaylarsanız kalan ürünler aynı dille üretilir.",
  },
  {
    soru: "Karelerdeki modeller gerçek mi?",
    cevap:
      "Hayır. Modelli karelerdeki kişiler yapay zeka ile üretilir ve gerçek bir kişiyi göstermez. Bu sayede model ve çekim günü maliyeti oluşmaz.",
  },
  {
    soru: "Ne kadar sürede teslim ediyorsunuz?",
    cevap:
      "Önce ilk ürünün karelerini onayınıza sunarız. Onaydan sonra kalan ürünler seri üretime geçer; teslim tarihi ürün sayısına göre teklifte yazılır.",
  },
  {
    soru: "Kareleri nerede kullanabilirim?",
    cevap:
      "Kendi mağazanızda, sosyal medyada ve reklamlarınızda kullanabilirsiniz. Ticari kullanım hakkı fiyata dahildir.",
  },
  {
    soru: "Video da üretiyor musunuz?",
    cevap:
      "Evet. Aynı üretim hattıyla ürün videosu ve yapay zeka destekli reklam filmi de hazırlıyoruz.",
  },
  {
    soru: "Sosyal medyamı da yönetebilir misiniz?",
    cevap:
      "Evet. Görsel üretimini aylık sosyal medya yönetimiyle birleştirebiliriz. Çekim günü gerektirmeyen çekimsiz modelimiz ürün odaklı markalar için uygundur.",
  },
];

const sayfaAdresi = `${SITE_URL}/ai-urun-gorseli`;

// Fiyat sayfada gorunur oldugu icin yapisal veride de Offer olarak verilir.
const sayfaSemasi = grafSemasi([
  {
    "@type": "Service",
    "@id": `${sayfaAdresi}#hizmet`,
    name: "Yapay zeka ile ürün görseli üretimi",
    serviceType: "Ürün görseli üretimi",
    description: sayfaAciklama,
    url: sayfaAdresi,
    provider: { "@id": KIMLIK.kurulus },
    areaServed: { "@type": "Country", name: "Türkiye" },
    offers: [
      {
        "@type": "Offer",
        name: "Bir ürün, üç katalog karesi",
        price: "1000",
        priceCurrency: "TRY",
        url: sayfaAdresi,
      },
      {
        "@type": "Offer",
        name: "Başlangıç paketi: 5 ürün, 15 kare",
        price: "5000",
        priceCurrency: "TRY",
        url: sayfaAdresi,
      },
    ],
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
            <a className={styles.gezintiBag} href="#fiyat">Fiyat</a>
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
                  Bir ürünün <em>üç katalog karesi</em> {"1.000 TL"}
                </span>
              </h1>
              <p className={`${styles.spot} sg-gir sg-gir-3`}>
                Ürününüzün net bir fotoğrafını gönderin. Ürün olduğu gibi kalır;
                sahnesini, ışığını ve zeminini biz kurarız.
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
                    src={`${GORSEL}/marea-1.jpg`}
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
                    src={`${GORSEL}/marea-2.jpg`}
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
                    src={`${GORSEL}/marea-3.jpg`}
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
                    src={`${GORSEL}/marea-once.jpg`}
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
          <span className={styles.bolumRozet}>Gerçek işlerden</span>
          <h2 className={styles.bolumBaslik}>
            Gönderilen fotoğraf, <em>teslim edilen kareler</em>
          </h2>
          <p className={styles.bolumSpot}>
            Her satırda solda markanın bize gönderdiği fotoğraf, sağda aynı
            üründen ürettiğimiz kareler var. Ürün aynı, sahne yeni.
          </p>

          <div className={styles.vakalar}>
            {vakalar.map((vaka) => (
              <article className={styles.vaka} key={vaka.anahtar}>
                <div className={styles.vakaMetin}>
                  <p className={styles.vakaNo}>{vaka.no}</p>
                  <h3 className={styles.vakaAd}>{vaka.ad}</h3>
                  <p className={styles.vakaMarka}>Lucea Jewelry</p>
                  <p className={styles.vakaAciklama}>{vaka.aciklama}</p>
                </div>
                <figure className={styles.vakaOnce}>
                  <div className={styles.vakaOnceKare}>
                    <Image
                      className={styles.gorsel}
                      src={`${GORSEL}/${vaka.anahtar}-once.jpg`}
                      alt={`${vaka.ad}: markanın gönderdiği, tezgah üstünde çekilmiş fotoğraf`}
                      fill
                      sizes="(max-width: 767px) 46vw, 220px"
                    />
                  </div>
                  <figcaption className={styles.vakaEtiket}>Gönderilen fotoğraf</figcaption>
                </figure>
                <figure className={`${styles.vakaKare} ${styles.vakaA}`}>
                  <Image
                    className={`${styles.gorsel} ${styles.yakin}`}
                    src={`${GORSEL}/${vaka.anahtar}-1.jpg`}
                    alt={`${vaka.ad}: yapay zeka ile üretilmiş ${vaka.kareler[0]}`}
                    fill
                    sizes="(max-width: 767px) 46vw, 430px"
                  />
                </figure>
                <figure className={`${styles.vakaKare} ${styles.vakaB}`}>
                  <Image
                    className={`${styles.gorsel} ${styles.yakin}`}
                    src={`${GORSEL}/${vaka.anahtar}-2.jpg`}
                    alt={`${vaka.ad}: yapay zeka ile üretilmiş ${vaka.kareler[1]}`}
                    fill
                    sizes="(max-width: 767px) 46vw, 430px"
                  />
                </figure>
              </article>
            ))}
          </div>

          <p className={styles.aciklamaNot}>
            Örnekler Lucea Jewelry için ürettiğimiz işlerden seçilmiştir. Modelli
            karelerdeki kişiler yapay zeka ile üretilmiştir; gerçek bir kişiyi
            göstermez.
          </p>
        </div>
      </section>

      <section className={`${styles.bolum} ${styles.bolumBeyaz}`}>
        <div className={styles.kapsayici}>
          <span className={styles.bolumRozet}>Ürün grupları</span>
          <h2 className={styles.bolumBaslik}>
            Takıdan termosa, <em>aynı yöntem</em>
          </h2>
          <p className={styles.bolumSpot}>
            Yöntem ürün grubuna göre değişmez: ürün aynı kalır, sahne markanın
            diline göre kurulur.
          </p>

          <div className={styles.gruplar}>
            {gruplar.map((grup) => (
              <figure className={styles.grup} key={grup.ad}>
                <div className={styles.grupKare}>
                  <Image
                    className={`${styles.gorsel} ${styles.yakin}`}
                    src={grup.gorsel}
                    alt={`${grup.marka} için yapay zeka ile üretilmiş ${grup.ad.toLocaleLowerCase("tr-TR")} görseli`}
                    fill
                    sizes="(max-width: 1100px) 46vw, 280px"
                    style={{ objectPosition: grup.konum }}
                  />
                  {grup.once && (
                    <div className={styles.grupOnce}>
                      <Image
                        className={styles.gorsel}
                        src={grup.once}
                        alt={`${grup.marka}: gönderilen ürün fotoğrafı`}
                        fill
                        sizes="110px"
                        style={{ objectPosition: "center 40%" }}
                      />
                    </div>
                  )}
                </div>
                <figcaption>
                  <p className={styles.grupAd}>{grup.ad}</p>
                  <p className={styles.grupMarka}>{grup.marka}</p>
                </figcaption>
              </figure>
            ))}
          </div>

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

      <section id="fiyat" className={`${styles.bolum} ${styles.capa}`}>
        <div className={styles.kapsayici}>
          <span className={styles.bolumRozet}>Fiyat</span>
          <h2 className={styles.bolumBaslik}>
            Fiyat açık: <em>ürün başına {"1.000 TL"}</em>
          </h2>
          <p className={styles.bolumSpot}>
            Her ürün için üç farklı kare teslim edilir. Ürün sayısı arttıkça
            birim fiyat düşer.
          </p>

          <div className={styles.fiyatlar}>
            {fiyatlar.map((fiyat) => (
              <div
                className={`${styles.fiyat} ${fiyat.one ? styles.fiyatOne : ""}`}
                key={fiyat.ad}
              >
                <p className={styles.fiyatAd}>
                  {fiyat.ad}
                  {fiyat.one && <span className={styles.fiyatIsaret}>Önerilen</span>}
                </p>
                <p className={styles.fiyatTutar}>{fiyat.tutar}</p>
                <p className={styles.fiyatEk}>{fiyat.ek}</p>
                <p className={styles.fiyatMetin}>{fiyat.metin}</p>
                <a
                  className={styles.fiyatBag}
                  href={whatsapp(fiyat.mesaj)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {fiyat.eylem}
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

          <p className={styles.kiyas}>
            <span className={styles.kiyasEtiket}>Piyasa kıyası</span>
            Türkiye&apos;de modelli ürün çekimi ürün başına 1.500 ile 4.000 TL
            arasındadır; üstüne günlük 5.000 ile 15.000 TL model ücreti eklenir.
            Aynı sahneyi set ve model olmadan, ürün başına 1.000 TL&apos;ye
            üretiyoruz.
          </p>

          <p className={styles.dipnot}>
            Fiyatlara KDV dahil değildir. Ödeme kredi kartıyla ve taksitle
            yapılabilir. Ek kare ya da farklı sahne talebi ayrıca
            fiyatlandırılır. Piyasa kıyası, Studio Gria&apos;nın Temmuz 2026
            piyasa araştırmasına dayanır.
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
              <span className={styles.bolumRozet}>Sık sorulanlar</span>
              <h2 className={styles.bolumBaslik}>
                Karar vermeden önce <em>sorulanlar</em>
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
