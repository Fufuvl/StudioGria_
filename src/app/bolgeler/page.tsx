import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { bolgeler } from "@/data/bolge-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";
import styles from "./bolgeler.module.scss";

const sayfaBaslik = "İstanbul Sosyal Medya Ajansı: Hizmet Bölgeleri | Studio Gria";
const sayfaAciklama =
  "İstanbul'un Avrupa ve Anadolu yakasında sosyal medya yönetimi, prodüksiyon ve reklam hizmeti. İlçe ilçe nasıl çalıştığımızı görün, teklif alın.";

// Iki yaka ayri listelenir; ilce sirasi bolge-data.ts'deki siradir
const YAKALAR = [
  { ad: "Avrupa Yakası", anahtar: "Avrupa" },
  { ad: "Anadolu Yakası", anahtar: "Anadolu" },
] as const;

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/bolgeler" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "/bolgeler",
  },
  twitter: { card: "summary_large_image", title: sayfaBaslik, description: sayfaAciklama },
};

const sayfaSemasi = grafSemasi([
  {
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/bolgeler#sayfa`,
    url: `${SITE_URL}/bolgeler`,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
    mainEntity: {
      "@type": "ItemList",
      name: "Studio Gria hizmet bölgeleri",
      numberOfItems: bolgeler.length,
      itemListElement: bolgeler.map((bolge, sira) => ({
        "@type": "ListItem",
        position: sira + 1,
        name: `${bolge.ilce} sosyal medya ajansı`,
        url: `${SITE_URL}/bolgeler/${bolge.slug}`,
      })),
    },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "Hizmet bölgelerimiz", yol: "/bolgeler" },
  ]),
]);

export default function BolgelerPage() {
  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={styles.sayfa}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
        />

        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={`${styles.rozet} sg-gir sg-gir-1`}>Hizmet bölgelerimiz</span>
            <h1 className={`${styles.heroBaslik} sg-gir sg-gir-2`}>
              İstanbul&apos;un tamamında sahadayız
            </h1>
            <p className={`${styles.heroSpot} sg-gir sg-gir-3`}>
              Stüdyomuz Büyükçekmece&apos;de, ekibimiz İstanbul&apos;un iki
              yakasında çekim yapıyor. Çekim günlerini önceden takvimliyor, ekip ve
              ekipmanla sahaya geliyoruz; Türkiye genelindeki markaların hesaplarını
              ise uzaktan yönetiyoruz. Aşağıda her ilçenin işletme dokusuna göre
              nasıl çalıştığımızı anlattık.
            </p>
          </div>
        </section>

        {YAKALAR.map((yaka) => {
          const liste = bolgeler.filter((b) => b.yaka === yaka.anahtar);
          if (liste.length === 0) return null;
          return (
            <section className={styles.bolum} key={yaka.anahtar}>
              <div className={styles.kapsayici}>
                <h2 className={styles.bolumBaslik}>{yaka.ad}</h2>
                <div className={styles.odakIzgara}>
                  {liste.map((bolge) => (
                    <div className={styles.odakKart} key={bolge.slug}>
                      <h3 className={styles.odakBaslik}>{bolge.ilce}</h3>
                      <p className={styles.odakMetin}>{bolge.giris}</p>
                      <Link className={styles.odakBag} href={`/bolgeler/${bolge.slug}`}>
                        {bolge.ilce} sosyal medya ajansı
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
