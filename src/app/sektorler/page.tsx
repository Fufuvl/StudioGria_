import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import MusteriSozleri from "@/components/musteri-sozleri";
import { sektorler } from "@/data/sektor-data";
import { referanslar, referansGruplari } from "@/data/referans-data";
import { musteriVideoSemalari } from "@/data/musteri-sozleri-data";
import { KIMLIK, SITE_URL, grafSemasi, kirintiSemasi } from "@/data/kurulus-data";
import s from "./sektor.module.scss";

// Sektor sayfalarinin merkezi. Sekiz sektorun kendi sayfasi var; kalan
// sektorler referans gruplariyla gosterilir ve referanslar sayfasina baglanir.

const sayfaBaslik = "Sektörlere Göre Sosyal Medya Yönetimi | Studio Gria";
const sayfaAciklama =
  "Spor kulübü, otel, sanayi, eğitim, güzellik, kafe ve restoran, e-ticaret ve klinikler için sektöre özel sosyal medya, prodüksiyon ve reklam.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/sektorler" },
  openGraph: { type: "website", title: sayfaBaslik, description: sayfaAciklama, url: "/sektorler" },
  twitter: { card: "summary_large_image", title: sayfaBaslik, description: sayfaAciklama },
};

const adres = `${SITE_URL}/sektorler`;

const sayfaSemasi = grafSemasi([
  {
    "@type": "CollectionPage",
    "@id": `${adres}#sayfa`,
    url: adres,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: sektorler.length,
      itemListElement: sektorler.map((sektor, sira) => ({
        "@type": "ListItem",
        position: sira + 1,
        name: sektor.rozet,
        url: `${SITE_URL}/sektorler/${sektor.slug}`,
      })),
    },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "Sektörler", yol: "/sektorler" },
  ]),
  ...musteriVideoSemalari(),
]);

export default function SektorlerSayfasi() {
  const gruplar = referansGruplari.map((grup) => ({
    grup,
    markalar: referanslar.filter((r) => r.grup === grup).map((r) => r.ad),
  }));

  return (
    <Wrapper>
      <HeaderEleven transparent={false} />

      <main className={s.sayfa}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sayfaSemasi }} />

        <section className={s.hero}>
          <div className={s.kapsayici}>
            <h1 className={s.baslik}>
              <span className={`${s.rozet} sg-gir sg-gir-1`}>Sektörlere göre sosyal medya yönetimi</span>
              <span className={`${s.slogan} sg-gir sg-gir-2`}>
                Her sektörün <em>kendi dili</em> var
              </span>
            </h1>
            <p className={`${s.spot} sg-gir sg-gir-3`}>
              Güzellik merkezinde güveni uzman kurar, kafede ürün, otelde manzara, spor kulübünde
              saha, klinikte hekimin bilgisi. Aşağıdaki sekiz sektörde ne yaptığımızı kendi
              işlerimizle anlatıyoruz.
            </p>
          </div>
        </section>

        <section className={s.bolum} style={{ paddingTop: 0 }}>
          <div className={s.kapsayici}>
            <div className={s.merkezIzgara}>
              {sektorler.map((sektor) => (
                <Link className={s.merkezKart} href={`/sektorler/${sektor.slug}`} key={sektor.slug}>
                  {sektor.kapak ? (
                    <div className={s.merkezGorsel}>
                      <Image
                        className={s.gorsel}
                        src={sektor.kapak}
                        alt={sektor.kapakAlt ?? ""}
                        fill
                        sizes="(max-width: 767px) 100vw, 260px"
                      />
                    </div>
                  ) : (
                    <div className={`${s.merkezGorsel} ${s.merkezTipo}`} aria-hidden="true">
                      {sektor.ad}
                    </div>
                  )}
                  <div className={s.merkezMetin}>
                    <span className={s.bolumRozet}>{sektor.ad}</span>
                    <h2 className={s.merkezAd}>{sektor.rozet}</h2>
                    <p className={s.merkezOzet}>{sektor.seoAciklama}</p>
                    <span className={s.bag}>Sayfayı açın</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <MusteriSozleri referansBagi />

        <section className={s.bolum}>
          <div className={s.kapsayici}>
            <span className={s.bolumRozet}>Diğer sektörler</span>
            <h2 className={s.bolumBaslik}>
              Çalıştığımız <em>bütün alanlar</em>
            </h2>
            <p className={s.bolumSpot}>
              Ayrı sayfası olmayan alanlarda da teklif hazırlıyoruz; aşağıda her alanda birlikte
              çalıştığımız markalar var. Drone çekimi ve tanıtım filmi sektörden bağımsız olarak da
              tek iş halinde planlanabilir.
            </p>
            <ul className={s.grupIzgara}>
              {gruplar.map(({ grup, markalar }) => (
                <li className={s.grup} key={grup}>
                  <h3 className={s.grupAd}>{grup}</h3>
                  <p className={s.grupMarkalar}>{markalar.join(", ")}</p>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 40, display: "flex", gap: 28, flexWrap: "wrap", alignItems: "center" }}>
              <Link className={s.anaDugme} href="/teklif">
                Teklif alın
              </Link>
              <Link className={s.ikinciBag} href="/referanslar">
                Referanslarımız
              </Link>
              <Link className={s.ikinciBag} href="/hizmetler/drone-cekimleri">
                Drone çekimi
              </Link>
              <Link className={s.ikinciBag} href="/hizmetler/fotograf-video-produksiyon">
                Tanıtım filmi ve prodüksiyon
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterTwo topCls="" />
    </Wrapper>
  );
}
