import type { Metadata } from "next";
import Link from "next/link";
import TeklifForm from "./teklif-form";
import styles from "./teklif.module.scss";

export const metadata: Metadata = {
  title: "Markanıza Özel Sosyal Medya Teklifi | Studio Gria",
  description:
    "Studio Gria hesabınızı inceler, markanıza özel sosyal medya stratejisini ve çalışma teklifini paylaşır. Formu doldurun, aynı gün dönüş yapalım.",
  alternates: { canonical: "https://studiogria.com/teklif" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Studio Gria",
    title: "Markanıza Özel Sosyal Medya Teklifi | Studio Gria",
    description:
      "Hesabınızı inceleyip markanıza özel stratejiyi ve teklifi paylaşıyoruz. İstanbul merkezli dijital medya ajansı Studio Gria.",
    url: "https://studiogria.com/teklif",
  },
};

const adimlar = [
  {
    no: "01",
    baslik: "Hesabınızı inceliyoruz",
    metin:
      "Mevcut paylaşımlarınızı, rakiplerinizi ve hedef kitlenizi çıkarıyoruz. Nerede ilgi kaybettiğinizi somut olarak gösteriyoruz.",
  },
  {
    no: "02",
    baslik: "Stratejiyi ve teklifi sunuyoruz",
    metin:
      "Markanıza özel içerik yönü, yayın ritmi ve çalışma modelini tek dosyada paylaşıyoruz. Fiyat da bu dosyada net yazıyor.",
  },
  {
    no: "03",
    baslik: "Üretim başlıyor",
    metin:
      "Onay sonrası çekim, tasarım ve yayın takvimi işlemeye başlıyor. Her ay ne yayınlandığını ve ne sonuç verdiğini raporluyoruz.",
  },
];

const isler = [
  { ad: "The Oba Hotel", tur: "Otel" },
  { ad: "Bodrum Pavillion", tur: "Yaşam alanı" },
  { ad: "Pacua Coffee", tur: "Kafe" },
  { ad: "Tykhe Beauty", tur: "Güzellik" },
];

const sorular = [
  {
    soru: "Çalışma nasıl başlıyor?",
    cevap:
      "Formu doldurduktan sonra hesabınızı inceliyoruz ve size özel bir strateji ile teklif hazırlıyoruz. İncelemenin ve teklifin bedeli yok, karar tamamen sizin.",
  },
  {
    soru: "İçerikleri siz mi üretiyorsunuz?",
    cevap:
      "Evet. Çekim, tasarım, kurgu ve metin bizde. İhtiyaca göre yapay zeka destekli görsel ve video üretimini de aynı hatta ekliyoruz.",
  },
  {
    soru: "Reklam yönetimi dahil mi?",
    cevap:
      "Meta reklamlarının kurulumu ve yönetimi çalışma kapsamına eklenebiliyor. Reklam bütçesi ajans ücretinden ayrıdır, doğrudan sizin hesabınızdan harcanır.",
  },
  {
    soru: "Ne kadar sürede sonuç görürüm?",
    cevap:
      "İlk etkiler genellikle 4 ile 6 hafta içinde görülür. Kalıcı sonuç için düzenli yayın ve sabır gerekir, bunu baştan açıkça söylüyoruz.",
  },
];

export default function TeklifSayfasi() {
  return (
    <main className={styles.sayfa}>
      <header className={styles.ustBant}>
        <div className={styles.kapsayici}>
          <Link className={styles.logo} href="/">
            Studio Gria
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.kapsayici}>
          <div className={styles.heroIzgara}>
            <div>
              <span className={styles.rozet}>Dijital Medya Ajansı</span>
              <h1 className={styles.baslik}>
                Sosyal medyanız takipçi değil{" "}
                <span className={styles.baslikVurgu}>müşteri</span> getirmeli
              </h1>
              <p className={styles.spot}>
                Studio Gria, işletmelerin sosyal medya hesaplarını rastgele paylaşım
                yapılan bir alan olmaktan çıkarır. İçerik, tasarım ve reklamı tek elden
                yönetir, her ay ne yaptığımızı ve ne sonuç verdiğini gösteririz.
              </p>
              <ul className={styles.maddeler}>
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
                  Meta reklamlarının kurulumu, takibi ve optimizasyonu
                </li>
                <li className={styles.madde}>
                  <span className={styles.maddeIsaret}>+</span>
                  Tek muhatap, net takvim, ölçülebilir raporlama
                </li>
              </ul>
            </div>

            <div id="teklif-formu">
              <TeklifForm />
            </div>
          </div>
        </div>
      </section>

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
          <h2 className={styles.bolumBaslik}>Birlikte çalıştığımız markalardan</h2>
          <div className={styles.isler}>
            {isler.map((is) => (
              <div className={styles.isKart} key={is.ad}>
                <h3 className={styles.isAd}>{is.ad}</h3>
                <p className={styles.isTur}>{is.tur}</p>
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
            Hesabınızı inceleyip size özel stratejiyi ve teklifi hazırlayalım. İnceleme
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
