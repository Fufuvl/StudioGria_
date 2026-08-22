import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { bolgeler } from "@/data/bolge-data";
import styles from "./bolgeler.module.scss";

const sayfaBaslik = "Hizmet Bölgelerimiz: Batı İstanbul | Studio Gria";
const sayfaAciklama =
  "Büyükçekmece, Beylikdüzü, Esenyurt, Avcılar ve Başakşehir'de sosyal medya yönetimi, prodüksiyon ve reklam hizmeti. Stüdyomuz Büyükçekmece'de.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/bolgeler" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "/bolgeler",
    images: [
      {
        url: "/assets/img/inner-project/showcase/background.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Gria hizmet bölgeleri",
      },
    ],
  },
  twitter: { title: sayfaBaslik, description: sayfaAciklama },
};

export default function BolgelerPage() {
  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={styles.sayfa}>
        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={`${styles.rozet} sg-gir sg-gir-1`}>Hizmet bölgelerimiz</span>
            <h1 className={`${styles.heroBaslik} sg-gir sg-gir-2`}>
              Batı İstanbul&apos;da sahadayız
            </h1>
            <p className={`${styles.heroSpot} sg-gir sg-gir-3`}>
              Stüdyomuz Büyükçekmece&apos;de. Çekim gerektiren işlerde yakınlık
              gerçek bir avantaj: plan yapmak yerine aynı gün sahaya çıkabiliyoruz.
              Türkiye genelinde uzaktan yürüttüğümüz işler de var, ancak aşağıdaki
              ilçelerde düzenli olarak yerindeyiz.
            </p>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <div className={styles.odakIzgara}>
              {bolgeler.map((bolge) => (
                <div className={styles.odakKart} key={bolge.slug}>
                  <h2 className={styles.odakBaslik}>{bolge.ilce}</h2>
                  <p className={styles.odakMetin}>{bolge.giris}</p>
                  <Link className={styles.odakBag} href={`/bolgeler/${bolge.slug}`}>
                    Detaylar
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
