import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import ReferansSerit from "@/components/referans-serit";
import HizmetIkonu from "@/components/hizmet-ikonlari";
import { hizmetler, hizmetBul } from "@/data/hizmet-data";
import { surecAdimlari } from "@/data/surec-data";
import { blogYazilari } from "@/data/blog-yazilari";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  hizmetBolgeleri,
  kirintiSemasi,
  sssSemasi,
} from "@/data/kurulus-data";
import styles from "../hizmetler.module.scss";

type Props = { params: { slug: string } };

// 10 hizmet sayfasinin tamami build sirasinda statik uretilir
export function generateStaticParams() {
  return hizmetler.map((hizmet) => ({ slug: hizmet.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const hizmet = hizmetBul(params.slug);
  if (!hizmet) return {};
  // Goreli adres: layout.tsx icindeki metadataBase bunu mutlaklastirir,
  // boylece alan adi tek yerden yonetilir.
  const url = `/hizmetler/${hizmet.slug}`;
  return {
    title: hizmet.seoBaslik,
    description: hizmet.seoAciklama,
    // Hizmetin kendi SSS sorulari dogal anahtar kelime kumesini olusturur
    keywords: [hizmet.ad, ...hizmet.sss.map((kayit) => kayit.soru)],
    alternates: { canonical: url },
    openGraph: {
      title: hizmet.seoBaslik,
      description: hizmet.seoAciklama,
      url,
      // Fotograf yalnizca sosyal medya paylasim onizlemesinde kullanilir
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

  const sira = hizmetler.findIndex((kayit) => kayit.slug === hizmet.slug);
  const numara = String(sira + 1).padStart(2, "0");

  // Bu hizmete deginen rehber yazilar. Iliski blog tarafinda tanimli;
  // burada tersine cevrilerek iki yonlu ic baglanti kurulur.
  const ilgiliYazilar = blogYazilari.filter((yazi) =>
    yazi.ilgiliHizmetler.includes(hizmet.slug),
  );

  const hizmetAdresi = `${SITE_URL}/hizmetler/${hizmet.slug}`;

  // Tek graf: hizmet, sayfa, soru-cevap ve kirinti izi birlikte verilir.
  // provider alani site genelindeki kurulus dugumune @id ile baglanir,
  // boylece her hizmet sayfasinda yeni bir kurulus tanimlanmaz.
  const sayfaSemasi = grafSemasi([
    {
      "@type": "Service",
      "@id": `${hizmetAdresi}#hizmet`,
      name: hizmet.ad,
      serviceType: hizmet.ad,
      description: hizmet.seoAciklama,
      url: hizmetAdresi,
      provider: { "@id": KIMLIK.kurulus },
      areaServed: hizmetBolgeleri.map((bolge) => ({
        "@type": "AdministrativeArea",
        name: bolge,
      })),
      // "Neler dahil" listesi hizmetin kapsamini motorlara acikca bildirir
      // Bu hizmeti konu alan rehber yazilar
      subjectOf: ilgiliYazilar.map((yazi) => ({
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/blog/${yazi.slug}#yazi`,
        headline: yazi.baslik,
        url: `${SITE_URL}/blog/${yazi.slug}`,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${hizmet.ad} kapsamı`,
        itemListElement: hizmet.dahil.map((madde) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: madde },
        })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${hizmetAdresi}#sayfa`,
      url: hizmetAdresi,
      name: hizmet.seoBaslik,
      description: hizmet.seoAciklama,
      inLanguage: "tr-TR",
      isPartOf: { "@id": KIMLIK.website },
      about: { "@id": `${hizmetAdresi}#hizmet` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${hizmet.gorsel}` },
    },
    sssSemasi(hizmet.sss, `/hizmetler/${hizmet.slug}`),
    kirintiSemasi([
      { ad: "Ana sayfa", yol: "/" },
      { ad: "Hizmetlerimiz", yol: "/hizmetler" },
      { ad: hizmet.ad, yol: `/hizmetler/${hizmet.slug}` },
    ]),
  ]);

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <HeaderEleven />

      <main className={styles.sayfa}>
        {/* Editoryal hero: sayfayi gorsel degil tipografi tasir.
            Ikon kucuk bir muhur, numara dergi kapagi gibi konturlu. */}
        <section className={styles.detayHero}>
          <div className={styles.kapsayici}>
            <div className={styles.detayUst}>
              <span className={styles.detayEtiket}>
                <span className={styles.detayEtiketIkon}>
                  <HizmetIkonu ad={hizmet.ikon} />
                </span>
                Hizmetlerimiz · {numara}
              </span>
              <Link className={styles.detayGeri} href="/hizmetler">
                Tüm hizmetlerimize dönün
              </Link>
            </div>
            <div className={styles.detayHeroIzgara}>
              <div>
                <h1 className={styles.detayBaslik}>{hizmet.ad}</h1>
                <p className={styles.detayGiris}>{hizmet.giris}</p>
                <Link className={styles.kapanisDugme} href="/teklif" style={{ background: "#16181d", color: "#fff" }}>
                  Bu hizmet için teklif alın
                </Link>
              </div>
              <span className={styles.detayDevNo} aria-hidden="true">
                {numara}
              </span>
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
        </section>

        {/* Sikca sorulanlar: sade editoryal blok, akordeon degil.
            Ayni metin FAQPage semasina gider; Google semadaki cevabin
            sayfada gorunmesini sart kosar. Ayrica yapay zeka motorlari
            soru-cevap bicimindeki metni en cok alintilanan yapi olarak
            kullanir. */}
        {hizmet.sss.length > 0 && (
          <section className={styles.detaySss}>
            <div className={styles.kapsayici}>
              <h2 className={styles.bolumBaslik}>Sıkça sorulanlar</h2>
              <div className={styles.sssIzgara} style={{ marginTop: "28px" }}>
                {hizmet.sss.map((kayit) => (
                  <div key={kayit.soru}>
                    <h3 className={styles.sssSoru}>{kayit.soru}</h3>
                    <p className={styles.sssCevap}>{kayit.cevap}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {ilgiliYazilar.length > 0 && (
          <section className={styles.rehberler}>
            <div className={styles.kapsayici}>
              <h2 className={styles.bolumBaslik}>Bu konudaki rehberlerimiz</h2>
              <ul className={styles.rehberListe}>
                {ilgiliYazilar.map((yazi) => (
                  <li key={yazi.slug}>
                    <Link className={styles.rehberBag} href={`/blog/${yazi.slug}`}>
                      {yazi.baslik}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

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
