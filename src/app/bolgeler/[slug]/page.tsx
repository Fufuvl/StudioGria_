import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import SosyalKanit from "@/components/sosyal-kanit";
import { bolgeler, bolgeBul } from "@/data/bolge-data";
import { hizmetBul } from "@/data/hizmet-data";
import styles from "../bolgeler.module.scss";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return bolgeler.map((bolge) => ({ slug: bolge.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const bolge = bolgeBul(params.slug);
  if (!bolge) return {};
  const url = `/bolgeler/${bolge.slug}`;
  return {
    title: bolge.seoBaslik,
    description: bolge.seoAciklama,
    alternates: { canonical: url },
    openGraph: {
      title: bolge.seoBaslik,
      description: bolge.seoAciklama,
      url,
      images: [
        {
          url: "/assets/img/inner-project/showcase/background.jpg",
          width: 1200,
          height: 630,
          alt: `Studio Gria ${bolge.ilce}`,
        },
      ],
    },
    twitter: { title: bolge.seoBaslik, description: bolge.seoAciklama },
  };
}

export default function BolgePage({ params }: Props) {
  const bolge = bolgeBul(params.slug);
  if (!bolge) notFound();

  const digerBolgeler = bolgeler.filter((b) => b.slug !== bolge.slug);

  // Yerel isletme semasi: Google'in hizmet verilen bolgeyi anlamasini saglar
  const yerelSema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Studio Gria ${bolge.ilce}`,
    description: bolge.seoAciklama,
    url: `https://www.studiogria.com/bolgeler/${bolge.slug}`,
    email: "hello@studiogria.com",
    telephone: "+905388654405",
    priceRange: "$$",
    image: "https://www.studiogria.com/assets/img/logo/logo-white-new.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Büyükçekmece",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: bolge.ilce,
      containedInPlace: { "@type": "City", name: "İstanbul" },
    },
    parentOrganization: { "@type": "Organization", name: "Studio Gria" },
  };

  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={styles.sayfa}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(yerelSema) }}
        />

        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={`${styles.rozet} sg-gir sg-gir-1`}>
              {bolge.ilce}, İstanbul
            </span>
            <h1 className={`${styles.heroBaslik} sg-gir sg-gir-2`}>{bolge.h1}</h1>
            <p className={`${styles.heroSpot} sg-gir sg-gir-3`}>{bolge.giris}</p>
            <p className={`${styles.mesafe} sg-gir sg-gir-4`}>{bolge.mesafeNotu}</p>
            <div className="sg-gir sg-gir-5">
              <SosyalKanit />
            </div>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>
              {bolge.ilce}&apos;de işletme dokusu ve içeriğin işlevi
            </h2>
            <div className={styles.dokuMetin}>
              {bolge.doku.map((paragraf) => (
                <p key={paragraf.slice(0, 40)}>{paragraf}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>
              {bolge.ilce} için öne çıkardığımız çalışmalar
            </h2>
            <div className={styles.odakIzgara}>
              {bolge.odak.map((odak) => {
                const hizmet = hizmetBul(odak.hizmetSlug);
                return (
                  <div className={styles.odakKart} key={odak.baslik}>
                    <h3 className={styles.odakBaslik}>{odak.baslik}</h3>
                    <p className={styles.odakMetin}>{odak.metin}</p>
                    {hizmet && (
                      <Link
                        className={styles.odakBag}
                        href={`/hizmetler/${hizmet.slug}`}
                      >
                        {hizmet.ad}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <div className={styles.cta}>
              <h2 className={styles.ctaBaslik}>
                {bolge.ilce}&apos;deki işletmeniz için teklif alın
              </h2>
              <p className={styles.ctaMetin}>
                İşinizi dinleyip size uygun çalışma modelini ve fiyatı içeren bir
                teklif sunumu hazırlıyoruz. Görüşme için bir taahhüt gerekmiyor.
              </p>
              <Link className="sg-split-cta" href="/teklif">
                Teklif alın
              </Link>
            </div>

            <div className={styles.digerler}>
              <h2 className={styles.digerBaslik}>Hizmet verdiğimiz diğer bölgeler</h2>
              <ul className={styles.digerListe}>
                {digerBolgeler.map((b) => (
                  <li key={b.slug}>
                    <Link className={styles.digerBag} href={`/bolgeler/${b.slug}`}>
                      {b.ilce}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
