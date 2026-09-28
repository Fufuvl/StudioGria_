import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { yayindakiVakalar, vakaBul } from "@/data/vaka-data";
import { hizmetBul } from "@/data/hizmet-data";
import { blogYazilari } from "@/data/blog-yazilari";
import { KIMLIK, SITE_URL, grafSemasi, kirintiSemasi } from "@/data/kurulus-data";
import styles from "../../bolgeler/bolgeler.module.scss";
import vakaStil from "../vaka.module.scss";

type Props = { params: { slug: string } };

// Yalnizca yayinda olan vakalar uretilir; digerleri 404 doner.
export const dynamicParams = false;

export function generateStaticParams() {
  return yayindakiVakalar().map((vaka) => ({ slug: vaka.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const vaka = vakaBul(params.slug);
  if (!vaka) return {};
  const url = `/referanslar/${vaka.slug}`;
  return {
    title: `${vaka.seoBaslik} | Studio Gria`,
    description: vaka.seoAciklama,
    alternates: { canonical: url },
    openGraph: { type: "article", title: vaka.seoBaslik, description: vaka.seoAciklama, url },
    twitter: { card: "summary_large_image", title: vaka.seoBaslik, description: vaka.seoAciklama },
  };
}

export default function VakaSayfasi({ params }: Props) {
  const vaka = vakaBul(params.slug);
  if (!vaka) notFound();

  const adres = `${SITE_URL}/referanslar/${vaka.slug}`;
  const hizmetler = vaka.ilgiliHizmetler
    .map((slug) => hizmetBul(slug))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));
  const yazilar = vaka.ilgiliYazilar
    .map((slug) => blogYazilari.find((y) => y.slug === slug))
    .filter((y): y is NonNullable<typeof y> => Boolean(y));

  const sayfaSemasi = grafSemasi([
    {
      "@type": "Article",
      "@id": `${adres}#vaka`,
      headline: vaka.baslik,
      description: vaka.seoAciklama,
      inLanguage: "tr-TR",
      url: adres,
      mainEntityOfPage: adres,
      author: { "@id": KIMLIK.kurulus },
      publisher: { "@id": KIMLIK.kurulus },
      isPartOf: { "@id": KIMLIK.website },
      about: {
        "@type": "SportsOrganization",
        name: vaka.marka,
        address: { "@type": "PostalAddress", addressLocality: vaka.ilce, addressRegion: "İstanbul", addressCountry: "TR" },
      },
    },
    kirintiSemasi([
      { ad: "Ana sayfa", yol: "/" },
      { ad: "Referanslarımız", yol: "/referanslar" },
      { ad: vaka.marka, yol: `/referanslar/${vaka.slug}` },
    ]),
  ]);

  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={styles.sayfa}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sayfaSemasi }} />

        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={`${styles.rozet} sg-gir sg-gir-1`}>
              Vaka çalışması · {vaka.sektor} · {vaka.donem}
            </span>
            <h1 className={`${styles.heroBaslik} sg-gir sg-gir-2`}>{vaka.baslik}</h1>
            <p className={`${styles.heroSpot} sg-gir sg-gir-3`}>{vaka.ozet}</p>
            <div className="sg-kanit sg-gir sg-gir-4">
              {vaka.rakamlar.map((r) => (
                <div className="sg-kanit-oge" key={r.etiket}>
                  <p className="sg-kanit-deger">{r.deger}</p>
                  <p className="sg-kanit-etiket">{r.etiket}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Başlangıç noktası</h2>
            <div className={styles.dokuMetin}>
              {vaka.durum.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Ne yaptık</h2>
            <ol className={vakaStil.adimlar}>
              {vaka.yapilanlar.map((madde, i) => (
                <li key={madde.slice(0, 40)}>
                  <span className={vakaStil.no}>{String(i + 1).padStart(2, "0")}</span>
                  <p>{madde}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Sonuç</h2>
            <div className={styles.dokuMetin}>
              {vaka.sonuc.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <p className={vakaStil.kaynak}>{vaka.kaynakNotu}</p>
          </div>
        </section>

        <section className={styles.bolum}>
          <div className={styles.kapsayici}>
            <div className={styles.cta}>
              <h2 className={styles.ctaBaslik}>Kulübünüz ya da işletmeniz için benzer bir plan</h2>
              <p className={styles.ctaMetin}>
                Hedefinizi dinleyip size uygun çalışma modelini ve fiyatı içeren bir
                teklif sunumu hazırlıyoruz. Görüşme için bir taahhüt gerekmiyor.
              </p>
              <Link className="sg-split-cta" href="/teklif">
                Teklif alın
              </Link>
            </div>

            {(hizmetler.length > 0 || yazilar.length > 0) && (
              <div className={styles.digerler}>
                <h2 className={styles.digerBaslik}>Bu çalışmada kullanılan hizmetler ve rehberler</h2>
                <ul className={styles.digerListe}>
                  {hizmetler.map((h) => (
                    <li key={h.slug}>
                      <Link className={styles.digerBag} href={`/hizmetler/${h.slug}`}>
                        {h.ad}
                      </Link>
                    </li>
                  ))}
                  {yazilar.map((y) => (
                    <li key={y.slug}>
                      <Link className={styles.digerBag} href={`/blog/${y.slug}`}>
                        {y.baslik}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link className={styles.digerBag} href="/referanslar">
                      Tüm referanslar
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
