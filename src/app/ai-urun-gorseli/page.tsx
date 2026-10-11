import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/assets/img/logo/logo-dark.png";
import TeklifForm from "../teklif/teklif-form";
import ErkenOlcum from "@/components/erken-olcum";
import ReferansSerit from "@/components/referans-serit";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
  sssSemasi,
} from "@/data/kurulus-data";
import styles from "../teklif/teklif.module.scss";

// Yapay zeka ile urun gorseli inis sayfasi. Reklamin sattigi teklifle ayni
// basligi, ayni fiyati ve ayni ilk adimi (fotografi gonder) tasir; /teklif
// sosyal medya yonetimini anlattigi icin bu hattin kendi sayfasi var.
// Tasarim /teklif ile ayni modulu kullanir, yeni gorsel dil eklenmez.

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

const WHATSAPP_MESAJ =
  "Merhaba, web sitenizden yazıyorum. Ürün görselleri için bilgi almak istiyorum.";
const whatsappAdresi = `https://wa.me/905388654405?text=${encodeURIComponent(WHATSAPP_MESAJ)}`;

// Solda elimize ulasan urun fotografi, sagda ayni urunden uretilen kare.
// konum: kare kirpimda gorselin hangi bolgesinin gorunecegi
const ciftler = [
  {
    ad: "Yüzük seti",
    metin: "Masa üstünde çekilmiş fotoğraftan stüdyo zeminli katalog karesi.",
    once: "/assets/img/ai-solutions/once-sonra/yuzuk-once.jpg",
    sonra: "/assets/img/ai-solutions/once-sonra/yuzuk-sonra.jpg",
    onceKonum: "center",
    sonraKonum: "center",
  },
  {
    ad: "Küpe",
    metin: "Yakın çekim ürün fotoğrafından modelli editoryal kare.",
    once: "/assets/img/ai-solutions/once-sonra/kupe-once.jpg",
    sonra: "/assets/img/ai-solutions/once-sonra/kupe-sonra.jpg",
    onceKonum: "center",
    sonraKonum: "left center",
  },
  {
    ad: "Termos",
    metin: "Beyaz fonlu ürün fotoğrafından yaşam sahnesi.",
    once: "/assets/img/ai-solutions/once-sonra/termos-once.jpg",
    sonra: "/assets/img/ai-solutions/once-sonra/termos-sonra.jpg",
    onceKonum: "center 40%",
    sonraKonum: "center 25%",
  },
];

const fiyatlar = [
  {
    ad: "Tek ürün",
    tutar: "1.000 TL",
    metin: "Bir ürün için üç katalog karesi.",
  },
  {
    ad: "Başlangıç paketi",
    tutar: "5.000 TL",
    metin:
      "5 ürün, 15 kare. İlk ürünü birlikte üretiyoruz; onaylarsanız kalan ürünler seri üretime geçer.",
  },
  {
    ad: "10 ürün ve üzeri",
    tutar: "Size özel",
    metin: "Kataloğunuzun büyüklüğüne göre mağazanıza özel teklif hazırlıyoruz.",
  },
];

const adimlar = [
  {
    no: "01",
    baslik: "Fotoğrafı gönderirsiniz",
    metin:
      "Ürününüzün net göründüğü fotoğrafı WhatsApp'tan ya da form üzerinden iletirsiniz.",
  },
  {
    no: "02",
    baslik: "İlk ürünü birlikte üretiriz",
    metin:
      "Markanızın diline uygun sahneyi kurar, ilk ürünün karelerini onayınıza sunarız.",
  },
  {
    no: "03",
    baslik: "Onayla seri üretim başlar",
    metin:
      "Kalan ürünler aynı görsel dille üretilir; kareler mağaza ve reklam kullanımına hazır teslim edilir.",
  },
];

const sorular = [
  {
    soru: "Ürünümün kendisi değişiyor mu?",
    cevap:
      "Hayır. Ürününüz olduğu gibi kalır; yapay zeka ile kurulan kısım sahne, ışık ve zemindir. Amaç ürünü olduğundan farklı göstermek değil, markanızın diline uygun bir karede sunmaktır.",
  },
  {
    soru: "Nasıl bir fotoğraf göndermeliyim?",
    cevap:
      "Ürünün net göründüğü, iyi ışıkta çekilmiş bir fotoğraf yeterlidir; telefonla çekilmiş olabilir. Birkaç açıdan fotoğraf gönderirseniz kareler daha tutarlı olur.",
  },
  {
    soru: "Ne kadar sürede teslim ediyorsunuz?",
    cevap:
      "Önce ilk ürünün karelerini onayınıza sunarız. Onaydan sonra kalan ürünler seri üretime geçer; teslim tarihi ürün sayısına göre teklifte yazılır.",
  },
  {
    soru: "Kareleri nerede kullanabilirim?",
    cevap:
      "Kendi mağazanızda, sosyal medyada ve reklamlarınızda kullanabilirsiniz. Kullanım kapsamı teklifte yazılı olarak netleştirilir.",
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

export default function AiUrunGorseliSayfasi() {
  return (
    <main className={styles.sayfa}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <ErkenOlcum />
      <header className={styles.ustBant}>
        <div className={styles.kapsayici}>
          <Link href="/" aria-label="Studio Gria ana sayfa">
            <Image
              src={logoDark}
              alt="Studio Gria"
              width={150}
              height={40}
              style={{ height: "auto", width: "auto", maxHeight: "40px" }}
              priority
            />
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.kapsayici}>
          <div className={styles.heroIzgara}>
            <div className={styles.heroMetin}>
              <span className={`${styles.rozet} sg-gir sg-gir-1`}>Yapay zeka ile ürün görseli</span>
              <h1 className={`${styles.baslik} sg-gir sg-gir-2`}>
                Bir ürünün{" "}
                <span className={styles.baslikVurgu}>üç katalog karesi</span>{" "}
                {"1.000 TL"}
              </h1>
              <p className={`${styles.spot} sg-gir sg-gir-3`}>
                Ürün fotoğrafınızı gönderin. Ürününüz olduğu gibi kalır; markanızın
                diline uygun yeni sahneleri yapay zeka ile kurar, katalog karelerini
                teslim ederiz.
              </p>
              <div className={`${styles.heroEylem} sg-gir sg-gir-3`}>
                <a
                  className={styles.heroDugme}
                  href={whatsappAdresi}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fotoğrafı WhatsApp&apos;tan gönderin
                </a>
                <span className={styles.heroEylemNot}>ya da formu doldurun, biz arayalım</span>
              </div>
            </div>

            <ul className={`${styles.maddeler} sg-gir sg-gir-4`}>
              <li className={styles.madde}>
                <span className={styles.maddeIsaret}>+</span>
                Ürününüz olduğu gibi kalır; sahne, ışık ve zemin yeniden kurulur
              </li>
              <li className={styles.madde}>
                <span className={styles.maddeIsaret}>+</span>
                Başlangıç paketi: 5 ürün, 15 kare, 5.000 TL
              </li>
              <li className={styles.madde}>
                <span className={styles.maddeIsaret}>+</span>
                İlk ürünü birlikte üretiyoruz; onaylarsanız kalan ürünler seri üretime geçer
              </li>
              <li className={styles.madde}>
                <span className={styles.maddeIsaret}>+</span>
                10 ürün ve üzeri kataloglar için mağazanıza özel teklif
              </li>
            </ul>

            <div id="teklif-formu" className={`${styles.heroForm} sg-gir sg-gir-3`}>
              <TeklifForm
                kaynak="AI Ürün Görseli Sayfası"
                baslik="Mağazanıza özel teklif alın"
                spot="Ürün grubunuzu ve ürün sayınızı yazın, aynı gün dönüş yapalım."
                hizmetSecenekleri={[]}
                varsayilanHizmet="Yapay zeka ile ürün görseli"
                sektorEtiket="Ürün grubunuz"
                sektorOrnek="Takı, kozmetik, tekstil, ev ürünleri"
                sektorHata="Ürün grubunuzu giriniz"
                hedefEtiket="Ürün sayınız (isteğe bağlı)"
                hedefOrnek="Örneğin 25 ürün"
                whatsappMesaj={WHATSAPP_MESAJ}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bolum}>
        <div className={styles.kapsayici}>
          <h2 className={styles.bolumBaslik}>Gönderilen fotoğraf, teslim edilen kare</h2>
          <p className={styles.bolumSpot}>
            Solda elimize ulaşan ürün fotoğrafı, sağda aynı üründen yapay zeka ile
            üretilen kare.
          </p>
          <div className={styles.ciftler}>
            {ciftler.map((cift) => (
              <div key={cift.ad}>
                <div className={styles.ciftKareler}>
                  <figure className={styles.ciftKare}>
                    <span className={styles.ciftRozet}>Önce</span>
                    <Image
                      className={styles.ciftGorsel}
                      src={cift.once}
                      alt={`${cift.ad}: gönderilen ürün fotoğrafı`}
                      fill
                      sizes="(max-width: 991px) 50vw, 180px"
                      style={{ objectPosition: cift.onceKonum }}
                    />
                  </figure>
                  <figure className={styles.ciftKare}>
                    <span className={styles.ciftRozet}>Sonra</span>
                    <Image
                      className={styles.ciftGorsel}
                      src={cift.sonra}
                      alt={`${cift.ad}: yapay zeka ile üretilen katalog karesi`}
                      fill
                      sizes="(max-width: 991px) 50vw, 180px"
                      style={{ objectPosition: cift.sonraKonum }}
                    />
                  </figure>
                </div>
                <h3 className={styles.ciftAd}>{cift.ad}</h3>
                <p className={styles.ciftMetin}>{cift.metin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bolum}>
        <div className={styles.kapsayici}>
          <h2 className={styles.bolumBaslik}>Fiyat</h2>
          <div className={styles.fiyatlar}>
            {fiyatlar.map((fiyat) => (
              <div className={styles.fiyat} key={fiyat.ad}>
                <p className={styles.fiyatAd}>{fiyat.ad}</p>
                <p className={styles.fiyatTutar}>{fiyat.tutar}</p>
                <p className={styles.fiyatMetin}>{fiyat.metin}</p>
              </div>
            ))}
          </div>
          <p className={styles.fiyatNot}>
            Fiyatlara KDV dahil değildir. Ödemenizi dilerseniz kredi kartıyla yapabilirsiniz.
          </p>
        </div>
      </section>

      <ReferansSerit tekSerit />

      <section className={styles.bolum}>
        <div className={styles.kapsayici}>
          <h2 className={styles.bolumBaslik}>Nasıl ilerliyoruz</h2>
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

      <section className={styles.bolum}>
        <div className={styles.kapsayici}>
          <h2 className={styles.bolumBaslik}>Sık sorulanlar</h2>
          <div className={styles.sorular}>
            {sorular.map((item) => (
              <div key={item.soru}>
                <h3 className={styles.soru}>{item.soru}</h3>
                <p className={styles.cevap}>{item.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.kapanis}>
        <div className={styles.kapsayici}>
          <h2 className={styles.kapanisBaslik}>Ürününüzü yeni sahnesinde görün</h2>
          <p className={styles.kapanisMetin}>
            Fotoğrafı gönderin, ilk ürünü birlikte üretelim.
          </p>
          <div className={styles.kapanisDugmeler}>
            <a
              className={styles.kapanisDugme}
              href={whatsappAdresi}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp&apos;tan gönderin
            </a>
            <a className={styles.kapanisIkinci} href="#teklif-formu">
              Teklif formu
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.kapsayici}>
        <div className={styles.altBant}>
          <span>
            Studio Gria, İstanbul ·{" "}
            <Link className={styles.altBaglanti} href="/ai-destekli-cozumler">
              Diğer AI çalışmalarımız
            </Link>
          </span>
          <span>
            <a className={styles.altBaglanti} href="tel:+905388654405">
              +90 538 865 44 05
            </a>
            {"  "}
            <a className={styles.altBaglanti} href="mailto:hello@studiogria.com">
              hello@studiogria.com
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
