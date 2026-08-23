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
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
  kunye,
} from "@/data/kurulus-data";
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

  const bolgeAdresi = `${SITE_URL}/bolgeler/${bolge.slug}`;

  // Yerel isletme semasi: Google'in hizmet verilen bolgeyi anlamasini saglar.
  // Ad, adres ve telefon kurulus kunyesinden gelir; sayfada elle yazilmaz.
  // Yerel siralamada bu uc bilginin her yerde birebir ayni olmasi sarttir.
  const sayfaSemasi = grafSemasi([
    {
      "@type": "ProfessionalService",
      "@id": `${bolgeAdresi}#yerel`,
      name: `Studio Gria ${bolge.ilce}`,
      description: bolge.seoAciklama,
      url: bolgeAdresi,
      email: kunye.eposta,
      telephone: kunye.telefon,
      priceRange: kunye.fiyatBandi,
      image: kunye.logo,
      address: {
        "@type": "PostalAddress",
        streetAddress: kunye.adres.sokak,
        addressLocality: kunye.adres.ilce,
        addressRegion: kunye.adres.il,
        postalCode: kunye.adres.postaKodu,
        addressCountry: kunye.adres.ulke,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: bolge.ilce,
        containedInPlace: { "@type": "City", name: "İstanbul" },
      },
      parentOrganization: { "@id": KIMLIK.kurulus },
      // Bu bolgede one cikardigimiz hizmetler
      makesOffer: bolge.odak
        .map((odak) => hizmetBul(odak.hizmetSlug))
        .filter((hizmet): hizmet is NonNullable<typeof hizmet> => Boolean(hizmet))
        .map((hizmet) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}/hizmetler/${hizmet.slug}#hizmet`,
            name: hizmet.ad,
          },
        })),
    },
    {
      "@type": "WebPage",
      "@id": `${bolgeAdresi}#sayfa`,
      url: bolgeAdresi,
      name: bolge.seoBaslik,
      description: bolge.seoAciklama,
      inLanguage: "tr-TR",
      isPartOf: { "@id": KIMLIK.website },
      about: { "@id": `${bolgeAdresi}#yerel` },
    },
    kirintiSemasi([
      { ad: "Ana sayfa", yol: "/" },
      { ad: "Hizmet bölgelerimiz", yol: "/bolgeler" },
      { ad: bolge.ilce, yol: `/bolgeler/${bolge.slug}` },
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
