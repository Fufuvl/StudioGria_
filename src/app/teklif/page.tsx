import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/assets/img/logo/logo-dark.png";
import TeklifForm from "./teklif-form";
import SosyalKanit from "@/components/sosyal-kanit";
import ReferansSerit from "@/components/referans-serit";
import { surecAdimlari } from "@/data/surec-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  sssSemasi,
} from "@/data/kurulus-data";
import styles from "./teklif.module.scss";

export const metadata: Metadata = {
  title: "Markanıza Özel Sosyal Medya Teklifi | Studio Gria",
  description:
    "Studio Gria sizi dinler, markanıza özel sosyal medya teklif sunumunu hazırlar. Formu doldurun, aynı gün dönüş yapalım. Kredi kartıyla ödeme kolaylığı.",
  alternates: { canonical: "/teklif" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Studio Gria",
    title: "Markanıza Özel Sosyal Medya Teklifi | Studio Gria",
    description:
      "Sizi dinleyip markanıza özel teklif sunumunu hazırlıyoruz. İstanbul merkezli dijital medya ajansı Studio Gria.",
    url: "https://www.studiogria.com/teklif",
  },
};

const sorular = [
  {
    soru: "Çalışma nasıl başlıyor?",
    cevap:
      "Formu doldurduktan sonra sizi dinliyor ve size özel bir teklif sunumu hazırlıyoruz. Sunumun bedeli yok, karar tamamen sizin.",
  },
  {
    soru: "İçerikleri siz mi üretiyorsunuz?",
    cevap:
      "Evet. Çekim, tasarım, kurgu ve metin bizde. İhtiyaca göre yapay zeka destekli görsel ve video üretimini de aynı hatta ekliyoruz.",
  },
  {
    soru: "Reklam yönetimi dahil mi?",
    cevap:
      "Google Ads ve Meta reklamlarının kurulumu ve yönetimi çalışma kapsamına eklenebiliyor. Reklam bütçesi ajans ücretinden ayrıdır, doğrudan sizin hesabınızdan harcanır.",
  },
  {
    soru: "Ödemeyi kartla yapabilir miyim?",
    cevap:
      "Evet, ödemenizi dilerseniz kredi kartıyla yapabilirsiniz. Size en uygun ödeme yöntemini birlikte belirleriz.",
  },
];

// Sayfadaki soru-cevap blogu ayni zamanda yapisal veri olarak verilir.
// Reklam inis sayfasi oldugu icin kirinti izi eklenmez; sayfanin tek isi
// tek vaat ve tek formdur.
const sayfaSemasi = grafSemasi([
  {
    "@type": "WebPage",
    "@id": `${SITE_URL}/teklif#sayfa`,
    url: `${SITE_URL}/teklif`,
    name: "Markanıza özel sosyal medya teklifi",
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
  },
  sssSemasi(sorular, "/teklif"),
]);

export default function TeklifSayfasi() {
  return (
    <main className={styles.sayfa}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <header className={styles.ustBant}>
        <div className={styles.kapsayici}>
          {/* Sitenin gercek logosu kullanilir, metin logo degil */}
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
            <div>
              <span className={`${styles.rozet} sg-gir sg-gir-1`}>Dijital Medya Ajansı</span>
              <h1 className={`${styles.baslik} sg-gir sg-gir-2`}>
                Sosyal medyanız takipçi değil{" "}
                <span className={styles.baslikVurgu}>müşteri</span> getirmeli
              </h1>
              <p className={`${styles.spot} sg-gir sg-gir-3`}>
                Studio Gria, işletmelerin sosyal medya hesaplarını rastgele paylaşım
                yapılan bir alan olmaktan çıkarır. İçerik, tasarım ve reklamı tek elden
                yönetir, her ay ne yaptığımızı ve ne sonuç verdiğini gösteririz.
              </p>
              <ul className={`${styles.maddeler} sg-gir sg-gir-4`}>
                <li className={styles.madde}>
                  <span className={styles.maddeIsaret}>+</span>
                  Markanıza özel içerik yönü ve aylık yayın planı
                </li>
                <li className={styles.madde}>
                  <span className={styles.maddeIsaret}>+</span>
                  Profesyonel çekim, tasarım ve video kurgusu
                </li>
                <li className={styles.madde}>
                  <span className={styles.maddeIsaret}>+</span>
                  Google Ads ve Meta reklamlarının kurulumu ve takibi
                </li>
                <li className={styles.madde}>
                  <span className={styles.maddeIsaret}>+</span>
                  Tek muhatap, net takvim, ölçülebilir raporlama
                </li>
              </ul>
            </div>

            <div id="teklif-formu" className="sg-gir sg-gir-3">
              <TeklifForm />
            </div>
          </div>
        </div>
      </section>

      {/* Sosyal kanit: rakamlar gorunume girince sayarak dolar */}
      <div className={styles.kanitBant}>
        <div className={styles.kapsayici}>
          <SosyalKanit />
        </div>
      </div>

      <ReferansSerit />

      <section className={styles.bolum}>
        <div className={styles.kapsayici}>
          <h2 className={styles.bolumBaslik}>Nasıl ilerliyoruz</h2>
          <div className={styles.adimlar}>
            {surecAdimlari.map((adim) => (
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
          <h2 className={styles.kapanisBaslik}>Markanız için ne yapabileceğimizi görün</h2>
          <p className={styles.kapanisMetin}>
            Sizi dinleyip markanıza özel teklif sunumunu hazırlayalım. Sunum
            ücretsiz, karar sizin.
          </p>
          <a className={styles.kapanisDugme} href="#teklif-formu">
            Teklif İste
          </a>
        </div>
      </section>

      <footer className={styles.kapsayici}>
        <div className={styles.altBant}>
          <span>Studio Gria, İstanbul</span>
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
