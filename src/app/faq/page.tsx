import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { sssGruplari, sssKayitlari } from "@/data/sss-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
  sssSemasi,
} from "@/data/kurulus-data";
import styles from "./faq.module.scss";

const sayfaBaslik = "Sıkça Sorulan Sorular: Fiyat, Kapsam ve Süreç | Studio Gria";
const sayfaAciklama =
  "Sosyal medya ajansıyla çalışmadan önce sorulan sorular: hizmet kapsamı, fiyatlandırma, reklam bütçesi, sözleşme süresi ve ne kadar sürede sonuç alınacağı.";

export const metadata: Metadata = {
  title: sayfaBaslik,
  description: sayfaAciklama,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: sayfaBaslik,
    description: sayfaAciklama,
    url: "/faq",
  },
  twitter: { card: "summary_large_image", title: sayfaBaslik, description: sayfaAciklama },
};

// Soru-cevap metni src/data/sss-data.ts'ten gelir. Sayfada gorunen sorular da
// ayni kaynagi kullanir, boylece sema ile gorunur icerik birebir esittir.
// Google, semadaki cevabin sayfada bulunmasini sart kosar; cevaplar kapali
// <details> icinde de olsa sayfanin HTML'inde yer alir.
const sayfaSemasi = grafSemasi([
  sssSemasi(
    sssKayitlari.map((kayit) => ({ soru: kayit.soru, cevap: kayit.cevap })),
    "/faq",
  ),
  {
    "@type": "WebPage",
    "@id": `${SITE_URL}/faq#sayfa`,
    url: `${SITE_URL}/faq`,
    name: sayfaBaslik,
    description: sayfaAciklama,
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "Sıkça sorulan sorular", yol: "/faq" },
  ]),
]);

const WHATSAPP_ADRESI = `https://wa.me/905388654405?text=${encodeURIComponent(
  "Merhaba, web sitenizdeki sık sorulanlar sayfasından yazıyorum. Bir sorum var.",
)}`;

const gruplar = sssGruplari.map((grup, sira) => ({
  ...grup,
  no: String(sira + 1).padStart(2, "0"),
  kayitlar: sssKayitlari.filter((kayit) => kayit.grup === grup.anahtar),
}));

export default function FaqPage() {
  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <HeaderEleven />

      <main className={styles.sayfa}>
        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={`${styles.rozet} sg-gir sg-gir-1`}>Sık sorulanlar</span>
            <h1 className={`${styles.baslik} sg-gir sg-gir-2`}>
              Sıkça sorulan <em>sorular</em>
            </h1>
            <p className={`${styles.spot} sg-gir sg-gir-3`}>
              Çalışma modeli, kapsam, fiyat ve süreç hakkında bize en çok
              sorulanları yanıtladık.
            </p>
            <nav className={`${styles.gezinti} sg-gir sg-gir-4`} aria-label="Soru grupları">
              {gruplar.map((grup) => (
                <a className={styles.gezintiBag} href={`#${grup.anahtar}`} key={grup.anahtar}>
                  {grup.ad}
                  <span className={styles.gezintiAdet}>{grup.kayitlar.length}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className={styles.govde}>
          <div className={`${styles.kapsayici} ${styles.izgara}`}>
            <div>
              {gruplar.map((grup) => (
                <section
                  className={styles.grup}
                  id={grup.anahtar}
                  key={grup.anahtar}
                  aria-labelledby={`${grup.anahtar}-baslik`}
                >
                  <h2 className={styles.grupBaslik} id={`${grup.anahtar}-baslik`}>
                    <span className={styles.grupNo}>{grup.no}</span>
                    {grup.ad}
                  </h2>
                  {grup.kayitlar.map((kayit, sira) => (
                    <details
                      className={styles.soru}
                      key={kayit.id}
                      open={grup.no === "01" && sira === 0}
                    >
                      <summary className={styles.soruBaslik}>
                        <h3 className={styles.soruMetin}>{kayit.soru}</h3>
                        <span className={styles.arti} aria-hidden="true">+</span>
                      </summary>
                      <div className={styles.cevap}>
                        <p>{kayit.cevap}</p>
                        {kayit.bag && (
                          <Link className={styles.cevapBag} href={kayit.bag.yol}>
                            {kayit.bag.metin}
                          </Link>
                        )}
                      </div>
                    </details>
                  ))}
                </section>
              ))}
            </div>

            <aside className={styles.yan}>
              <div className={styles.yanKart}>
                <p className={styles.yanRozet}>Cevabını bulamadınız mı?</p>
                <h2 className={styles.yanBaslik}>
                  Sorunuzu doğrudan <em>bize yazın</em>
                </h2>
                <p className={styles.yanMetin}>
                  WhatsApp&apos;tan yazın, aynı gün dönüş yapalım.
                </p>
                <a
                  className={styles.yanDugme}
                  href={WHATSAPP_ADRESI}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp&apos;tan yazın
                </a>
                <Link className={styles.yanBag} href="/teklif">
                  Markanıza özel teklif alın
                </Link>
                <ul className={styles.yanListe}>
                  <li>
                    <span className={styles.yanEtiket}>Telefon</span>
                    <a href="tel:+905388654405">+90 538 865 44 05</a>
                  </li>
                  <li>
                    <span className={styles.yanEtiket}>E-posta</span>
                    <a href="mailto:hello@studiogria.com">hello@studiogria.com</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.kapanis}>
          <div className={styles.kapsayici}>
            <h2 className={styles.kapanisBaslik}>
              Sorunuz kalmadıysa <em>teklifinizi hazırlayalım</em>
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
