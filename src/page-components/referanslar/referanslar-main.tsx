"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import Wrapper from "@/layouts/wrapper";
import Sayac from "@/components/sayac";
import { referanslar, referansGruplari, sektorSayisi } from "@/data/referans-data";
import { sosyalKanit } from "@/data/sosyal-kanit-data";
import styles from "@/app/referanslar/referanslar.module.scss";

const TUMU = "Tümü";

export default function ReferanslarMain() {
  const [aktifGrup, setAktifGrup] = useState<string>(TUMU);
  const [acikSatir, setAcikSatir] = useState<string | null>(null);

  const liste = useMemo(
    () =>
      aktifGrup === TUMU
        ? referanslar
        : referanslar.filter((item) => item.grup === aktifGrup),
    [aktifGrup]
  );

  const grupSayilari = useMemo(() => {
    const sayilar = new Map<string, number>();
    referanslar.forEach((item) => {
      sayilar.set(item.grup, (sayilar.get(item.grup) ?? 0) + 1);
    });
    return sayilar;
  }, []);

  const filtreSec = (grup: string) => {
    setAktifGrup(grup);
    setAcikSatir(null);
  };

  const satirAc = (ad: string) => {
    setAcikSatir((mevcut) => (mevcut === ad ? null : ad));
  };

  // Serit ici: tum marka adlari, ayracla
  const seritOgeleri = referanslar.map((item) => item.ad);

  return (
    <Wrapper>
      <HeaderEleven />

      <main className={styles.sayfa}>
        <div className={styles.kapsayici}>
          <div className={styles.giris}>
            <span className={styles.rozet}>Referanslarımız</span>
            <h1 className={styles.baslik}>
              Otelden restorana, <em>39 markanın</em> güvendiği ekip
            </h1>
            <p className={styles.spot}>
              Her markanın dili farklı, disiplinimiz aynı: önce markayı anlamak,
              sonra düzenli üretmek, en sonunda sonucu ölçmek. Aşağıdan sektöre
              göre süzebilir, her markada ne yaptığımızı açıp bakabilirsiniz.
            </p>
          </div>

          {/* Sosyal kanit: rakamlar gorunume girince sayarak dolar */}
          <div className={styles.sayilar}>
            {sosyalKanit.map((metrik) => (
              <div key={metrik.etiket}>
                <p className={styles.sayiDeger}>
                  <Sayac hedef={metrik.deger} sonek={metrik.sonek} />
                </p>
                <p className={styles.sayiEtiket}>{metrik.etiket}</p>
              </div>
            ))}
            <div>
              <p className={styles.sayiDeger}>
                <Sayac hedef={sektorSayisi} sonek="+" />
              </p>
              <p className={styles.sayiEtiket}>Farklı sektör</p>
            </div>
          </div>
        </div>

        {/* Cift yonlu akan marka seridi */}
        <div className={styles.serit}>
          <Marquee speed={38} autoFill pauseOnHover gradient={false}>
            <span className={styles.seritIc}>
              {seritOgeleri.slice(0, 20).map((ad) => (
                <React.Fragment key={ad}>
                  <span className={styles.seritOge}>{ad}</span>
                  <span className={styles.seritAyrac} aria-hidden="true">·</span>
                </React.Fragment>
              ))}
            </span>
          </Marquee>
        </div>
        <div className={`${styles.serit} ${styles.seritKontur}`}>
          <Marquee speed={30} autoFill pauseOnHover gradient={false} direction="right">
            <span className={styles.seritIc}>
              {seritOgeleri.slice(20).map((ad) => (
                <React.Fragment key={ad}>
                  <span className={styles.seritOge}>{ad}</span>
                  <span className={styles.seritAyrac} aria-hidden="true">·</span>
                </React.Fragment>
              ))}
            </span>
          </Marquee>
        </div>

        <div className={styles.kapsayici}>
          <div className={styles.filtreAlan}>
            <p className={styles.filtreBaslik}>Sektöre göre süzün</p>
            <div className={styles.filtreler} role="tablist" aria-label="Sektör filtresi">
              <button
                type="button"
                className={`${styles.filtre} ${aktifGrup === TUMU ? styles.filtreAktif : ""}`}
                onClick={() => filtreSec(TUMU)}
              >
                {TUMU}
                <span className={styles.filtreSayi}>{referanslar.length}</span>
              </button>
              {referansGruplari.map((grup) => (
                <button
                  key={grup}
                  type="button"
                  className={`${styles.filtre} ${aktifGrup === grup ? styles.filtreAktif : ""}`}
                  onClick={() => filtreSec(grup)}
                >
                  {grup}
                  <span className={styles.filtreSayi}>{grupSayilari.get(grup)}</span>
                </button>
              ))}
            </div>
          </div>

          <ul className={styles.liste} key={aktifGrup}>
            {liste.length === 0 && (
              <li className={styles.bosMesaj}>Bu filtrede kayıt bulunamadı.</li>
            )}
            {liste.map((item, sira) => {
              const acik = acikSatir === item.ad;
              return (
                <li
                  key={item.ad}
                  className={`${styles.satir} ${acik ? styles.satirAcik : ""}`}
                  style={{ animationDelay: `${Math.min(sira * 45, 450)}ms` }}
                >
                  <button
                    type="button"
                    className={styles.satirBaslik}
                    onClick={() => satirAc(item.ad)}
                    aria-expanded={acik}
                  >
                    <span className={styles.satirNo}>
                      {String(sira + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.satirAd}>{item.ad}</span>
                    <span className={styles.satirSektor}>{item.sektor}</span>
                    <span className={styles.satirArti} aria-hidden="true">+</span>
                  </button>
                  <div className={styles.detay}>
                    <div className={styles.detayIc}>
                      <p className={styles.detayMetin}>{item.is}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <section className={styles.kapanis}>
          <div className={styles.kapsayici}>
            <h2 className={styles.kapanisBaslik}>
              Sıradaki marka <em>sizinki</em> olsun
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
