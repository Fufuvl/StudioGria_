import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import ReferansSerit from "@/components/referans-serit";
import { hizmetler, hizmetBul } from "@/data/hizmet-data";
import { surecAdimlari } from "@/data/surec-data";
import styles from "../hizmetler.module.scss";

type Props = { params: { slug: string } };

// 10 hizmet sayfasinin tamami build sirasinda statik uretilir
export function generateStaticParams() {
  return hizmetler.map((hizmet) => ({ slug: hizmet.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const hizmet = hizmetBul(params.slug);
  if (!hizmet) return {};
  const url = `https://studiogria.com/hizmetler/${hizmet.slug}`;
  return {
    title: hizmet.seoBaslik,
    description: hizmet.seoAciklama,
    alternates: { canonical: url },
    openGraph: {
      title: hizmet.seoBaslik,
      description: hizmet.seoAciklama,
      url,
      images: [{ url: hizmet.gorsel, width: 1200, height: 630, alt: hizmet.gorselAlt }],
    },
    twitter: {
      title: hizmet.seoBaslik,
      description: hizmet.seoAciklama,
    },
  };
}

export default function HizmetDetayPage({ params }: Props) {
  const hizmet = hizmetBul(params.slug);
  if (!hizmet) notFound();

  // Zengin sonuc sansi icin hizmete ozel SSS schema'si
  const sssSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hizmet.sss.map((madde) => ({
      "@type": "Question",
      name: madde.soru,
      acceptedAnswer: { "@type": "Answer", text: madde.cevap },
    })),
  };

  const hizmetSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: hizmet.ad,
    description: hizmet.seoAciklama,
    provider: {
      "@type": "Organization",
      name: "Studio Gria",
      url: "https://studiogria.com",
    },
    areaServed: "TR",
    url: `https://studiogria.com/hizmetler/${hizmet.slug}`,
  };

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sssSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hizmetSchema) }}
      />
      <HeaderEleven />

      <main className={styles.sayfa}>
        <section className={styles.detayHero}>
          <div className={styles.kapsayici}>
            <Link className={styles.detayGeri} href="/hizmetler">
              Tüm hizmetlerimize dönün
            </Link>
            <div className={styles.detayIzgara}>
              <div>
                <span className={styles.rozet}>Hizmetlerimiz</span>
                <h1 className={styles.bolumBaslik}>{hizmet.ad}</h1>
                <p className={styles.detayGiris}>{hizmet.giris}</p>
                <Link className={styles.kapanisDugme} href="/teklif" style={{ background: "#16181d", color: "#fff" }}>
                  Bu hizmet için teklif alın
                </Link>
              </div>
              <div className={styles.detayGorselKutu}>
                <Image
                  className={styles.detayGorsel}
                  src={hizmet.gorsel}
                  alt={hizmet.gorselAlt}
                  width={900}
                  height={675}
                  priority
                  sizes="(max-width: 991px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.detayGovde}>
          <div className={styles.kapsayici}>
            <div className={styles.detayKolonlar}>
              <div>
                {hizmet.aciklama.map((paragraf) => (
                  <p className={styles.detayParagraf} key={paragraf.slice(0, 30)}>
                    {paragraf}
                  </p>
                ))}
              </div>
              <aside className={styles.dahilKutu}>
                <h2 className={styles.dahilBaslik}>Neler dahil</h2>
                <ul className={styles.dahilListe}>
                  {hizmet.dahil.map((madde) => (
                    <li className={styles.dahilMadde} key={madde}>
                      {madde}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.detaySss}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Sık sorulanlar</h2>
            <p className={styles.bolumSpot}>
              Cevabını bulamadığınız soruyu WhatsApp üzerinden sorabilirsiniz.
            </p>
            <div className={styles.sssIzgara}>
              {hizmet.sss.map((madde) => (
                <div key={madde.soru}>
                  <h3 className={styles.sssSoru}>{madde.soru}</h3>
                  <p className={styles.sssCevap}>{madde.cevap}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "48px" }}>
              <h2 className={styles.bolumBaslik}>Nasıl ilerliyoruz</h2>
              <div className={styles.adimlar} style={{ marginTop: "28px" }}>
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
          </div>
        </section>

        <ReferansSerit tekSerit />

        <section className={styles.kapanis}>
          <div className={styles.kapsayici}>
            <h2 className={styles.kapanisBaslik}>
              {hizmet.ad} için <em>net bir teklif</em> alın
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
}
