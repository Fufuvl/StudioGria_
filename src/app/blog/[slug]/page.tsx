import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { blogYazilari, yaziBul } from "@/data/blog-yazilari";
import { hizmetBul } from "@/data/hizmet-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
  kurucu,
  sssSemasi,
} from "@/data/kurulus-data";
import styles from "../blog.module.scss";

type Props = { params: { slug: string } };

// Tum yazilar build sirasinda statik uretilir
export function generateStaticParams() {
  return blogYazilari.map((yazi) => ({ slug: yazi.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const yazi = yaziBul(params.slug);
  if (!yazi) return {};
  // Goreli adres: layout.tsx icindeki metadataBase bunu mutlaklastirir
  const url = `/blog/${yazi.slug}`;
  return {
    title: yazi.seoBaslik,
    description: yazi.seoAciklama,
    keywords: yazi.etiketler,
    alternates: { canonical: url },
    authors: [{ name: kurucu.ad }],
    openGraph: {
      type: "article",
      title: yazi.seoBaslik,
      description: yazi.seoAciklama,
      url,
      publishedTime: yazi.tarih,
      modifiedTime: yazi.guncelleme ?? yazi.tarih,
      authors: [kurucu.ad],
      section: yazi.kategori,
      tags: yazi.etiketler,
      images: [
        {
          url: "/assets/img/inner-project/showcase/background.jpg",
          width: 1200,
          height: 630,
          alt: yazi.baslik,
        },
      ],
    },
    twitter: { title: yazi.seoBaslik, description: yazi.seoAciklama },
  };
}

function tarihYaz(isoTarih: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(isoTarih));
}

// Yazinin kelime sayisi BlogPosting semasindaki wordCount alanini besler.
// Motorlar icerik derinligini bu alandan da okur.
function kelimeSay(metinler: string[]) {
  return metinler.reduce(
    (toplam, metin) => toplam + metin.trim().split(/\s+/).length,
    0,
  );
}

export default function BlogYaziPage({ params }: Props) {
  const yazi = yaziBul(params.slug);
  if (!yazi) notFound();

  const ilgiliHizmetler = yazi.ilgiliHizmetler
    .map((slug) => hizmetBul(slug))
    .filter((hizmet): hizmet is NonNullable<typeof hizmet> => Boolean(hizmet));

  const yaziAdresi = `${SITE_URL}/blog/${yazi.slug}`;
  const guncelleme = yazi.guncelleme ?? yazi.tarih;

  const tumMetin = [
    yazi.giris,
    yazi.kisaCevap,
    ...yazi.bolumler.flatMap((bolum) => [
      ...bolum.paragraflar,
      ...(bolum.liste ?? []),
    ]),
    ...yazi.anahtarCikarimlar,
    ...yazi.sorular.flatMap((kayit) => [kayit.soru, kayit.cevap]),
  ];

  // Sayfa semasi tek graf halinde verilir. Yazar Person dugumu site
  // genelindeki kurucu dugumune @id ile baglanir, boylece motorlar ayni
  // kisiyi her yazida yeniden tanimlamak yerine tek varlik olarak gorur.
  const sayfaSemasi = grafSemasi([
    {
      "@type": "BlogPosting",
      "@id": `${yaziAdresi}#yazi`,
      headline: yazi.baslik,
      alternativeHeadline: yazi.seoBaslik,
      description: yazi.seoAciklama,
      // abstract: yapay zeka motorlarinin dogrudan alintiladigi kisa yanit
      abstract: yazi.kisaCevap,
      articleSection: yazi.kategori,
      keywords: yazi.etiketler.join(", "),
      about: yazi.etiketler.map((etiket) => ({ "@type": "Thing", name: etiket })),
      wordCount: kelimeSay(tumMetin),
      timeRequired: `PT${yazi.okumaSuresi}M`,
      datePublished: yazi.tarih,
      dateModified: guncelleme,
      inLanguage: "tr-TR",
      url: yaziAdresi,
      mainEntityOfPage: { "@type": "WebPage", "@id": yaziAdresi },
      author: { "@id": KIMLIK.kurucu },
      publisher: { "@id": KIMLIK.kurulus },
      isPartOf: { "@id": `${SITE_URL}/blog#blog` },
      // Yazinin dogal olarak bagladigi hizmet sayfalari
      mentions: ilgiliHizmetler.map((hizmet) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/hizmetler/${hizmet.slug}#hizmet`,
        name: hizmet.ad,
      })),
    },
    sssSemasi(yazi.sorular, `/blog/${yazi.slug}`),
    kirintiSemasi([
      { ad: "Ana sayfa", yol: "/" },
      { ad: "Blog", yol: "/blog" },
      { ad: yazi.baslik, yol: `/blog/${yazi.slug}` },
    ]),
  ]);

  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={styles.sayfa}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
        />

        <article>
          <header className={styles.yaziHero}>
            <div className={`${styles.kapsayici} ${styles.dar}`}>
              <span className={styles.rozet}>{yazi.kategori}</span>
              <h1 className={styles.yaziBaslik}>{yazi.baslik}</h1>
              <div className={styles.kunye}>
                <time dateTime={yazi.tarih}>{tarihYaz(yazi.tarih)}</time>
                <span aria-hidden="true">·</span>
                <span>{yazi.okumaSuresi} dakika okuma</span>
                <span aria-hidden="true">·</span>
                <span>
                  {kurucu.ad}, {kurucu.unvan}
                </span>
                {guncelleme !== yazi.tarih && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>
                      Güncelleme{" "}
                      <time dateTime={guncelleme}>{tarihYaz(guncelleme)}</time>
                    </span>
                  </>
                )}
              </div>
            </div>
          </header>

          <div className={styles.govde}>
            <div className={`${styles.kapsayici} ${styles.dar}`}>
              {/* Kisa cevap: sorunun dogrudan yaniti, tek basina anlamli.
                  Hem aceleci okuyucunun hem de yapay zeka motorlarinin
                  ilk okudugu blok burasidir. */}
              <div className={styles.kisaCevap}>
                <span className={styles.kisaCevapEtiket}>Kısa cevap</span>
                <p className={styles.kisaCevapMetin}>{yazi.kisaCevap}</p>
              </div>

              <p className={styles.giris}>{yazi.giris}</p>

              {yazi.bolumler.map((bolum) => (
                <section className={styles.bolum} key={bolum.baslik}>
                  <h2 className={styles.bolumBaslik}>{bolum.baslik}</h2>
                  {bolum.paragraflar.map((paragraf) => (
                    <p className={styles.paragraf} key={paragraf.slice(0, 40)}>
                      {paragraf}
                    </p>
                  ))}
                  {bolum.liste && (
                    <ul className={styles.maddeler}>
                      {bolum.liste.map((madde) => (
                        <li key={madde.slice(0, 40)}>{madde}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className={styles.cikarimlar}>
                <h2 className={styles.cikarimBaslik}>Anahtar çıkarımlar</h2>
                <ul className={styles.cikarimListe}>
                  {yazi.anahtarCikarimlar.map((madde) => (
                    <li key={madde.slice(0, 40)}>{madde}</li>
                  ))}
                </ul>
              </section>

              {/* Soru-cevap sayfada gorunur, ayni metin FAQPage semasina
                  gider. Ikisi ayrisirsa zengin sonuc hakki kaybedilir. */}
              <section className={styles.sorular}>
                <h2 className={styles.cikarimBaslik}>Sıkça sorulan sorular</h2>
                {yazi.sorular.map((kayit) => (
                  <div className={styles.soruKayit} key={kayit.soru}>
                    <h3 className={styles.soru}>{kayit.soru}</h3>
                    <p className={styles.cevap}>{kayit.cevap}</p>
                  </div>
                ))}
              </section>

              <section className={styles.yazar}>
                <h2 className={styles.yazarAd}>
                  {kurucu.ad}, {kurucu.unvan}
                </h2>
                <p className={styles.yazarBio}>{kurucu.biyografi}</p>
              </section>

              {ilgiliHizmetler.length > 0 && (
                <div className={styles.ilgili}>
                  <h2 className={styles.ilgiliBaslik}>Bu konuyla ilgili hizmetlerimiz</h2>
                  <ul className={styles.ilgiliListe}>
                    {ilgiliHizmetler.map((hizmet) => (
                      <li key={hizmet.slug}>
                        <Link className={styles.ilgiliBag} href={`/hizmetler/${hizmet.slug}`}>
                          {hizmet.ad}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <aside className={styles.cta}>
                <h2 className={styles.ctaBaslik}>Markanız için ne yapabiliriz?</h2>
                <p className={styles.ctaMetin}>
                  İşinizi dinleyip size uygun çalışma modelini ve fiyatı içeren bir
                  teklif sunumu hazırlıyoruz. Görüşme için bir taahhüt gerekmiyor.
                </p>
                <Link className="sg-split-cta" href="/teklif">
                  Teklif alın
                </Link>
              </aside>

              <Link className={styles.geri} href="/blog">
                Tüm yazılara dön
              </Link>
            </div>
          </div>
        </article>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
