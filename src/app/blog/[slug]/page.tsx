import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { blogYazilari, yaziBul } from "@/data/blog-yazilari";
import { hizmetBul } from "@/data/hizmet-data";
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
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: yazi.seoBaslik,
      description: yazi.seoAciklama,
      url,
      publishedTime: yazi.tarih,
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

export default function BlogYaziPage({ params }: Props) {
  const yazi = yaziBul(params.slug);
  if (!yazi) notFound();

  const ilgiliHizmetler = yazi.ilgiliHizmetler
    .map((slug) => hizmetBul(slug))
    .filter((hizmet): hizmet is NonNullable<typeof hizmet> => Boolean(hizmet));

  const yaziSemasi = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: yazi.baslik,
    description: yazi.seoAciklama,
    datePublished: yazi.tarih,
    dateModified: yazi.tarih,
    inLanguage: "tr",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.studiogria.com/blog/${yazi.slug}`,
    },
    author: { "@type": "Organization", name: "Studio Gria" },
    publisher: {
      "@type": "Organization",
      name: "Studio Gria",
      logo: {
        "@type": "ImageObject",
        url: "https://www.studiogria.com/assets/img/logo/logo-white-new.png",
      },
    },
  };

  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={styles.sayfa}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(yaziSemasi) }}
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
                <span>Studio Gria</span>
              </div>
            </div>
          </header>

          <div className={styles.govde}>
            <div className={`${styles.kapsayici} ${styles.dar}`}>
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
