"use client";
import React from "react";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import SosyalKanit from "@/components/sosyal-kanit";
import ReferansSerit from "@/components/referans-serit";
import HizmetIkonu from "@/components/hizmet-ikonlari";
import { hizmetler } from "@/data/hizmet-data";
import { surecAdimlari } from "@/data/surec-data";
import styles from "@/app/hizmetler/hizmetler.module.scss";

const farklar = [
  {
    baslik: "Tek muhatap",
    metin:
      "Çekimden reklama, web sitesinden yazılıma kadar her iş aynı ekipte. Beş farklı tedarikçiyle değil, tek bir muhatapla ilerlersiniz.",
  },
  {
    baslik: "Ölçülebilir iş",
    metin:
      "Beğeni sayısı değil, işinize dokunan sonuçlar raporlanır: gelen mesaj, tıklama, rezervasyon, satış.",
  },
  {
    baslik: "Gerçekçi söz",
    metin:
      "Bir ayda mucize sözü vermeyiz. Neyin ne kadar sürede olabileceğini teklif sunumunda açıkça yazarız.",
  },
];

const HizmetlerMain = () => {
  return (
    <Wrapper>
      <HeaderEleven />

      <main className={styles.sayfa}>
        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={`${styles.rozet} sg-gir sg-gir-1`}>Hizmetlerimiz</span>
            <h1 className={`${styles.heroBaslik} sg-gir sg-gir-2`}>
              Markanızın dijitalde ihtiyacı olan her şey, <em>tek çatı altında</em>
            </h1>
            <p className={`${styles.heroSpot} sg-gir sg-gir-3`}>
              İçerikten reklama, web sitesinden yazılıma kadar on ayrı hizmet
              hattımız var. Hepsinde aynı disiplin geçerli: önce dinleriz, sonra
              net bir teklif sunarız, onayla birlikte üretime geçeriz.
            </p>
            <div className="sg-gir sg-gir-4">
              <SosyalKanit />
            </div>
          </div>
        </section>

        <section className={styles.katalog}>
          <div className={styles.kapsayici}>
            <div className={styles.izgara}>
              {hizmetler.map((hizmet) => (
                <Link
                  className={styles.kart}
                  href={`/hizmetler/${hizmet.slug}`}
                  key={hizmet.slug}
                >
                  {/* Fotograf yerine cizgisel ikon: kartlar esit agirlikta durur */}
                  <span className={styles.kartIkon}>
                    <HizmetIkonu ad={hizmet.ikon} />
                  </span>
                  <span className={styles.kartIc}>
                    <span className={styles.kartBaslik}>{hizmet.ad}</span>
                    <span className={styles.kartMetin}>{hizmet.kisaAciklama}</span>
                    <span className={styles.kartBaglanti}>İncele</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.surec}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Nasıl ilerliyoruz</h2>
            <p className={styles.bolumSpot}>
              Üç adım. Hepsinde ne olacağını önceden bilirsiniz.
            </p>
            <div className={styles.adimlar}>
              {surecAdimlari.map((adim) => (
                <div className={styles.adim} key={adim.no}>
                  <p className={styles.adimNo}>{adim.no}</p>
                  <h3 className={styles.adimBaslik}>{adim.baslik}</h3>
                  <p className={styles.adimMetin}>{adim.metin}</p>
                </div>
              ))}
            </div>
            <p className={styles.odemeNotu}>
              Ödemenizi dilerseniz <em>kredi kartıyla</em> yapabilirsiniz.
            </p>
          </div>
        </section>

        <section className={styles.farklar}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Neden Studio Gria</h2>
            <div className={styles.farkIzgara}>
              {farklar.map((fark) => (
                <div className={styles.farkKart} key={fark.baslik}>
                  <h3 className={styles.farkBaslik}>{fark.baslik}</h3>
                  <p className={styles.farkMetin}>{fark.metin}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ReferansSerit />

        <section className={styles.kapanis}>
          <div className={styles.kapsayici}>
            <h2 className={styles.kapanisBaslik}>
              Markanız için <em>doğru paketi</em> birlikte kuralım
            </h2>
            <p className={styles.kapanisMetin}>
              Sizi dinleyip markanıza özel teklif sunumunu hazırlayalım. Sunum
              ücretsiz, karar sizin.
            </p>
            <Link className={styles.kapanisDugme} href="/teklif">
              Teklif İste
            </Link>
          </div>
        </section>

        <FooterTwo topCls="" />
      </main>
    </Wrapper>
  );
};

export default HizmetlerMain;
