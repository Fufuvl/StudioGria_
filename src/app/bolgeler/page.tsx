import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { bolgeler, batiIstanbulBolgeleri, batiIstanbulMu } from "@/data/bolge-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";
import styles from "./bolgeler.module.scss";

const sayfaBaslik = "Batı İstanbul Sosyal Medya Ajansı: Bölgeler | Studio Gria";
const sayfaAciklama =
  "Büyükçekmece'deki stüdyomuzdan Beylikdüzü, Esenyurt, Avcılar, Küçükçekmece, Başakşehir ve Silivri'ye; İstanbul'un iki yakasında sosyal medya ve reklam hizmeti.";

// 18 Kas 2026: once Bati Istanbul (stüdyoya yakin), sonra iki yakanin geri
// kalani. Bati Istanbul ilceleri Avrupa listesinde tekrar edilmez.
const YAKALAR = [
  { ad: "Avrupa Yakası, diğer ilçeler", anahtar: "Avrupa" },
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
      itemListElement: [
        ...batiIstanbulBolgeleri,
        ...bolgeler.filter((b) => !batiIstanbulMu(b.slug)),
      ].map((bolge, sira) => ({
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
              Batı İstanbul&apos;da sahadayız
            </h1>
            <p className={`${styles.heroSpot} sg-gir sg-gir-3`}>
              Stüdyomuz Büyükçekmece Mimaroba&apos;da. Beylikdüzü, Esenyurt,
              Avcılar, Küçükçekmece, Başakşehir ve Silivri&apos;de düzenli olarak
              sahadayız; ekibimiz İstanbul&apos;un iki yakasında da çekim yapıyor. Çekim günlerini önceden takvimliyor, ekip ve
              ekipmanla sahaya geliyoruz; Türkiye genelindeki markaların hesaplarını
              ise uzaktan yönetiyoruz. Aşağıda her ilçenin işletme dokusuna göre
              nasıl çalıştığımızı anlattık.
            </p>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Batı İstanbul: stüdyomuza yakın ilçeler</h2>
            <div className={styles.odakIzgara}>
              {batiIstanbulBolgeleri.map((bolge) => (
                <div className={styles.odakKart} key={bolge.slug}>
                  <h3 className={styles.odakBaslik}>{bolge.ilce}</h3>
                  <p className={styles.odakMetin}>{bolge.mesafeNotu}</p>
                  <Link className={styles.odakBag} href={`/bolgeler/${bolge.slug}`}>
                    {bolge.ilce} sosyal medya ajansı
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {YAKALAR.map((yaka) => {
          const liste = bolgeler.filter(
            (b) => b.yaka === yaka.anahtar && !batiIstanbulMu(b.slug),
          );
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
