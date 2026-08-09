"use client";
import React from "react";
import Link from "next/link";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import Wrapper from "@/layouts/wrapper";
import { referanslar } from "@/data/referans-data";
import styles from "@/app/referanslar/referanslar.module.scss";

// Sektor sayisi listeden turetiliyor, elle guncellemek gerekmiyor
const sektorSayisi = new Set(referanslar.map((item) => item.sektor)).size;

export default function ReferanslarMain() {
  return (
    <Wrapper>
      <HeaderEleven />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className={styles.sayfa}>
            <div className={styles.kapsayici}>
              <div className={styles.giris}>
                <span className={styles.rozet}>Referanslarımız</span>
                <h1 className={styles.baslik}>
                  Farklı sektörlerden markalarla aynı disiplinle çalışıyoruz
                </h1>
                <p className={styles.spot}>
                  Otelden restorana, güzellik markasından üretime kadar birbirinden
                  farklı işlerde çalıştık. Değişen şey içerik, değişmeyen şey yöntem:
                  önce markayı anlamak, sonra düzenli üretmek, en sonunda sonucu
                  ölçmek.
                </p>
              </div>

              <div className={styles.sayilar}>
                <div>
                  <p className={styles.sayiDeger}>{referanslar.length}+</p>
                  <p className={styles.sayiEtiket}>Birlikte çalıştığımız marka</p>
                </div>
                <div>
                  <p className={styles.sayiDeger}>{sektorSayisi}</p>
                  <p className={styles.sayiEtiket}>Farklı sektör</p>
                </div>
                <div>
                  <p className={styles.sayiDeger}>İstanbul</p>
                  <p className={styles.sayiEtiket}>Merkez ofis, Türkiye geneli hizmet</p>
                </div>
              </div>

              <div className={styles.izgara}>
                {referanslar.map((item) => (
                  <article className={styles.kart} key={item.ad}>
                    <div className={styles.kartUst}>
                      <h2 className={styles.kartAd}>{item.ad}</h2>
                      <span className={styles.kartSektor}>{item.sektor}</span>
                    </div>
                    <p className={styles.kartIs}>{item.is}</p>
                  </article>
                ))}
              </div>
            </div>

            <section className={styles.kapanis}>
              <div className={styles.kapsayici}>
                <h2 className={styles.kapanisBaslik}>
                  Sıradaki marka sizinki olsun
                </h2>
                <p className={styles.kapanisMetin}>
                  Hesabınızı inceleyip markanıza özel stratejiyi ve teklifi
                  hazırlayalım. İnceleme ücretsiz, karar sizin.
                </p>
                <Link className={styles.kapanisDugme} href="/teklif">
                  Teklif İste
                </Link>
              </div>
            </section>

            <FooterTwo />
          </main>
        </div>
      </div>
    </Wrapper>
  );
}
