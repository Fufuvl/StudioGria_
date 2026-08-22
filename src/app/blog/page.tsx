import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { yazilariSirala } from "@/data/blog-yazilari";
import styles from "./blog.module.scss";

const sayfaBaslik = "Blog: Sosyal Medya ve Reklam Rehberleri | Studio Gria";
const sayfaAciklama =
  "Sosyal medya yönetimi, içerik üretimi ve Meta reklamları üzerine saha deneyimimizden çıkan pratik rehberler. Bütçe, süreç ve içerik soruları yanıtlarıyla.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "/blog",
    images: [
      {
        url: "/assets/img/inner-project/showcase/background.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Gria Blog",
      },
    ],
  },
  twitter: { title: sayfaBaslik, description: sayfaAciklama },
};

function tarihYaz(isoTarih: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(isoTarih));
}

export default function BlogPage() {
  const yazilar = yazilariSirala();

  // Blog listesi icin yapisal veri: arama motorlari yazilari tek tek taniyabilir
  const listeSemasi = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Studio Gria Blog",
    url: "https://www.studiogria.com/blog",
    inLanguage: "tr",
    publisher: { "@type": "Organization", name: "Studio Gria" },
    blogPost: yazilar.map((yazi) => ({
      "@type": "BlogPosting",
      headline: yazi.baslik,
      description: yazi.ozet,
      datePublished: yazi.tarih,
      url: `https://www.studiogria.com/blog/${yazi.slug}`,
    })),
  };

  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={styles.sayfa}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(listeSemasi) }}
        />

        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={`${styles.rozet} sg-gir sg-gir-1`}>Blog</span>
            <h1 className={`${styles.heroBaslik} sg-gir sg-gir-2`}>
              Sahada öğrendiklerimizi <em>paylaşıyoruz</em>
            </h1>
            <p className={`${styles.heroSpot} sg-gir sg-gir-3`}>
              Bütçe, içerik ve reklam tarafında en sık karşılaştığımız soruları
              yanıtlıyoruz. Teorik anlatım değil, çekim setinde ve reklam
              panelinde öğrendiklerimiz.
            </p>
          </div>
        </section>

        <section className={styles.liste}>
          <div className={styles.kapsayici}>
            <div className={styles.izgara}>
              {yazilar.map((yazi) => (
                <Link key={yazi.slug} className={styles.kart} href={`/blog/${yazi.slug}`}>
                  <div className={styles.kartUst}>
                    <span>{yazi.kategori}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={yazi.tarih}>{tarihYaz(yazi.tarih)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{yazi.okumaSuresi} dk okuma</span>
                  </div>
                  <h2 className={styles.kartBaslik}>{yazi.baslik}</h2>
                  <p className={styles.kartOzet}>{yazi.ozet}</p>
                  <span className={styles.kartBaglanti}>Yazıyı oku</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
