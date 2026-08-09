"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import styles from "./ai-solutions-main.module.scss";

// Galeri: tamami yapay zeka ile uretilmis calisma ornekleri.
// Farkli en boy oranlari masonry dizilimde dogal bir ritim kurar.
const galeri = [
  { ad: "Sokak Çekimi", tag: "Matchakizi", gorsel: "/assets/img/ai-solutions/brand-mix/matcha-street.jpg" },
  { ad: "Editoryal Portre", tag: "Lucea", gorsel: "/assets/img/ai-solutions/brand-mix/lucea-portrait.jpg" },
  { ad: "Gün Batımı", tag: "Luxera", gorsel: "/assets/img/ai-solutions/brand-mix/luxera-goldenhour.jpg" },
  { ad: "Restoran Sahnesi", tag: "Entepe", gorsel: "/assets/img/ai-solutions/brand-mix/entepe-dining.jpg" },
  { ad: "Hareket Halinde", tag: "Matchakizi", gorsel: "/assets/img/ai-solutions/brand-mix/matcha-on-the-go.jpg" },
  { ad: "Doku Detayı", tag: "Entepe", gorsel: "/assets/img/ai-solutions/brand-mix/entepe-material.jpg" },
  { ad: "Ürün Vitrini", tag: "Lucea", gorsel: "/assets/img/ai-solutions/brand-mix/lucea-necklace-display.jpg" },
  { ad: "Makro Çekim", tag: "Luxera", gorsel: "/assets/img/ai-solutions/brand-mix/luxera-macro.jpg" },
  { ad: "Ana Ürün Karesi", tag: "Matchakizi", gorsel: "/assets/img/ai-solutions/brand-mix/matcha-hero.jpg" },
  { ad: "İç Mekan", tag: "Entepe", gorsel: "/assets/img/ai-solutions/brand-mix/entepe-bedroom.jpg" },
  { ad: "Kompozisyon", tag: "Lucea", gorsel: "/assets/img/ai-solutions/brand-mix/lucea-rings-composition.jpg" },
  { ad: "Kıyı Sahnesi", tag: "Luxera", gorsel: "/assets/img/ai-solutions/brand-mix/luxera-dunes.jpg" },
];

const degerler = [
  "Stüdyo kirası ve lojistik yükü olmadan üretim",
  "Günler içinde kampanyaya hazır görselleştirme",
  "Sınırsız mekan, ışık ve doku varyasyonu",
  "Yüzlerce ürün için tutarlı görsel kütüphanesi",
];

const surec = [
  {
    no: "01",
    baslik: "Marka estetiğini okuyoruz",
    metin:
      "Yalnızca komut üretmeyiz; markanızın estetik kodlarını, renk ritmini ve görsel tonunu anlayarak her kareye aynı kimliği taşırız.",
  },
  {
    no: "02",
    baslik: "Dokuyu hassasiyetle işliyoruz",
    metin:
      "Tekstilin lif hissi, kozmetik yüzey parlaklığı ya da mücevher kesimi gibi ayrıntıları işleyerek yapay hissi görünmez hale getiririz.",
  },
  {
    no: "03",
    baslik: "Işığı ve sahneyi özgürleştiriyoruz",
    metin:
      "Fiziksel sette kurulması zor ya da maliyetli sahneleri dijital olarak kurar, her ışık koşulunu kontrollü biçimde üretiriz.",
  },
  {
    no: "04",
    baslik: "Hikayeyi görsele dönüştürüyoruz",
    metin:
      "Sadece görsel üretmeyiz; markanızın hikayesini algıya ve satışa çalışan bir anlatı diliyle kurarız.",
  },
];

const AiSolutionsMain = () => {
  return (
    <Wrapper>
      <HeaderEleven />

      <main className={styles.sayfa}>
        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={`${styles.rozet} sg-gir sg-gir-1`}>AI Destekli Çözümler</span>
            <h1 className={`${styles.baslik} sg-gir sg-gir-2`}>
              Stüdyo kurmadan <em>stüdyo kalitesinde</em> görsel
            </h1>
            <p className={`${styles.spot} sg-gir sg-gir-3`}>
              Ürününüzü her mekanda, her ışıkta ve her mevsimde gösterebiliriz.
              Set kurulumu, lokasyon kirası ve günler süren çekim planı olmadan,
              günler içinde kampanyaya hazır görseller ve reklam filmleri.
            </p>
            <div className={`${styles.dugmeler} sg-gir sg-gir-4`}>
              <Link className={styles.anaDugme} href="/teklif">
                Markanız için teklif alın
              </Link>
              <a className={styles.ikinciDugme} href="#ornekler">
                Örnekleri görün
              </a>
            </div>
          </div>
        </section>

        <section className={styles.galeri} id="ornekler">
          <div className={styles.kapsayici}>
            <div className={styles.galeriBaslikSatir}>
              <h2 className={styles.galeriBaslik}>
                Bu görsellerin tamamı <em>yapay zeka</em> ile üretildi
              </h2>
              <p className={styles.galeriNot}>
                Nereden mi biliyoruz? Çünkü biz ürettik.
              </p>
            </div>
            <div className={styles.galeriIzgara}>
              {galeri.map((oge, sira) => (
                <figure
                  className={styles.galeriOge}
                  key={oge.gorsel}
                  style={{ animationDelay: `${Math.min(sira * 70, 700)}ms` }}
                >
                  <Image
                    className={styles.galeriGorsel}
                    src={oge.gorsel}
                    alt={`${oge.tag} için yapay zeka ile üretilmiş ${oge.ad.toLowerCase()} görseli`}
                    width={640}
                    height={800}
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 400px"
                  />
                  <figcaption className={styles.galeriEtiket}>
                    <span className={styles.galeriAd}>{oge.ad}</span>
                    <span className={styles.galeriTag}>{oge.tag}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.degerler}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>
              Klasik prodüksiyonun yerine değil, <em>yanına</em>
            </h2>
            <p className={styles.bolumSpot}>
              Çekimin güçlü olduğu yerde çekim, hızın ve varyasyonun gerektiği
              yerde AI üretim. İki hattı markanız için birlikte çalıştırırız.
            </p>
            <div className={styles.degerIzgara}>
              {degerler.map((deger) => (
                <div className={styles.degerKart} key={deger}>
                  <p className={styles.degerMetin}>{deger}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.surec}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Nasıl çalışıyoruz</h2>
            <p className={styles.bolumSpot}>
              Dört adımda markanıza özgü, tutarlı bir görsel kütüphanesi kurulur.
            </p>
            <div className={styles.surecIzgara}>
              {surec.map((adim) => (
                <div className={styles.surecKart} key={adim.no}>
                  <span className={styles.surecNo}>{adim.no}</span>
                  <div>
                    <h3 className={styles.surecBaslik}>{adim.baslik}</h3>
                    <p className={styles.surecMetin}>{adim.metin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.kopru}>
          <div className={styles.kapsayici}>
            <div className={styles.kopruIc}>
              <div>
                <h2 className={styles.kopruBaslik}>
                  Görselle bitmiyor: <em>AI reklam filmleri</em>
                </h2>
                <p className={styles.kopruMetin}>
                  Aynı üretim hattıyla markanız için hareketli içerik ve reklam
                  filmleri de hazırlıyoruz. Detaylar hizmet sayfasında.
                </p>
              </div>
              <Link className={styles.anaDugme} href="/hizmetler/ai-uretim-reklam-filmleri">
                Hizmeti inceleyin
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.kapanis}>
          <div className={styles.kapsayici}>
            <h2 className={styles.kapanisBaslik}>
              Ürününüzü <em>bir sonraki seviyede</em> gösterin
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
};

export default AiSolutionsMain;
