"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { referanslar } from "@/data/referans-data";
import styles from "@/app/(service)/service/hizmetler.module.scss";

const hizmetler = [
  {
    no: "01",
    baslik: "Sosyal medya yönetimi",
    metin:
      "Hesabınızı baştan sona biz yönetiriz. İçerik yönünü belirler, aylık planı çıkarır, yayınları zamanında paylaşır ve gelen mesajlarla ilgileniriz. Her ay ne yayınlandığını ve ne sonuç verdiğini raporlarız.",
    ciktilar: [
      "Aylık içerik planı ve yayın takvimi",
      "Feed, hikaye ve reels üretimi",
      "Yorum ve mesaj yönetimi",
      "Ay sonu performans raporu",
    ],
    gorsel: "/assets/img/home-05/project/obahotel/1.jpg",
    gorselAlt: "Otel sosyal medya içerik çekimi",
  },
  {
    no: "02",
    baslik: "İçerik üretimi ve çekim",
    metin:
      "Telefonla çekilmiş görsellerle premium marka kurulmaz. Mekanınıza gelir, ürününüzü ve atmosferinizi profesyonel ekipmanla çekeriz. Fotoğraf, video, kurgu ve tasarım tek elden çıkar.",
    ciktilar: [
      "Mekan, ürün ve menü çekimleri",
      "Reels ve kısa video kurgusu",
      "Tasarım ve görsel düzenleme",
      "Kullanıma hazır arşiv teslimi",
    ],
    gorsel: "/assets/img/home-05/project/oceanic/1.jpg",
    gorselAlt: "Restoran menü ve mekan çekimi",
  },
  {
    no: "03",
    baslik: "Marka kimliği ve tasarım",
    metin:
      "Markanızın nasıl göründüğü, ne söylediğinden önce algılanır. Logodan renk paletine, tipografiden kullanım kurallarına kadar tutarlı bir görsel dil kurarız. Böylece her paylaşım aynı markayı anlatır.",
    ciktilar: [
      "Logo ve kurumsal kimlik",
      "Renk, tipografi ve görsel dil rehberi",
      "Menü, katalog ve basılı tasarımlar",
      "Sosyal medya şablonları",
    ],
    gorsel: "/assets/img/home-05/project/pacua/1.jpg",
    gorselAlt: "Marka kimliği ve tasarım çalışması",
  },
  {
    no: "04",
    baslik: "Meta reklam yönetimi ve AI içerik",
    metin:
      "Organik erişim tek başına yetmiyor. Instagram ve Facebook reklamlarını kurar, bütçeyi doğru kitleye yönlendirir, sonucu günlük takip ederiz. Gerekli olduğunda yapay zeka destekli görsel ve video üretimini de aynı hatta ekleriz.",
    ciktilar: [
      "Kampanya kurulumu ve hedef kitle kurgusu",
      "Reklam görseli ve metin üretimi",
      "Günlük takip ve bütçe optimizasyonu",
      "Yapay zeka destekli görsel ve video",
    ],
    gorsel: "/assets/img/ai-solutions/brand-mix/matcha-hero.jpg",
    gorselAlt: "Yapay zeka destekli ürün görseli",
  },
];

const adimlar = [
  {
    no: "01",
    baslik: "Tanışma",
    metin: "Markanızı, hedefinizi ve bugüne kadar denediklerinizi dinleriz.",
  },
  {
    no: "02",
    baslik: "İnceleme",
    metin: "Hesabınızı ve rakiplerinizi inceler, nerede kaybettiğinizi çıkarırız.",
  },
  {
    no: "03",
    baslik: "Teklif",
    metin: "Size özel içerik yönünü, çalışma modelini ve fiyatı tek dosyada sunarız.",
  },
  {
    no: "04",
    baslik: "Üretim",
    metin: "Onay sonrası çekim, tasarım ve yayın takvimi işlemeye başlar.",
  },
];

const farklar = [
  {
    baslik: "Tek muhatap",
    metin:
      "Çekimden reklama kadar her şey aynı ekipte. Beş farklı kişiyle yazışmaz, tek bir muhatapla ilerlersiniz.",
  },
  {
    baslik: "Ölçülebilir iş",
    metin:
      "Beğeni sayısı değil, işinize dokunan sonuçlar raporlanır: gelen mesaj, tıklama, rezervasyon, satış.",
  },
  {
    baslik: "Gerçekçi söz",
    metin:
      "Bir ayda mucize sözü vermeyiz. Neyin ne kadar sürede olabileceğini baştan açıkça söyleriz.",
  },
];

const ServiceMain = () => {
  return (
    <Wrapper>
      <HeaderEleven />

      <main className={styles.sayfa}>
        <section className={styles.hero}>
          <div className={styles.kapsayici}>
            <span className={styles.rozet}>Hizmetlerimiz</span>
            <h1 className={styles.heroBaslik}>
              İçerik, tasarım ve reklamı{" "}
              <span className={styles.heroVurgu}>tek elden</span> yönetiyoruz
            </h1>
            <p className={styles.heroSpot}>
              Studio Gria bir tasarım tedarikçisi değil, markanızın dijital
              departmanı gibi çalışır. Ne yayınlanacağına birlikte karar veririz,
              üretimi biz yaparız, sonucu birlikte ölçeriz.
            </p>
            <div className={styles.dugmeler}>
              <Link className={styles.anaDugme} href="/teklif">
                Teklif Al
              </Link>
              <Link className={styles.ikinciDugme} href="/referanslar">
                Referanslarımızı görün
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.hizmetler}>
          <div className={styles.kapsayici}>
            {hizmetler.map((hizmet, sira) => (
              <article
                className={`${styles.hizmet} ${sira % 2 === 1 ? styles.hizmetTers : ""}`}
                key={hizmet.no}
              >
                <div>
                  <p className={styles.hizmetNo}>{hizmet.no}</p>
                  <h2 className={styles.hizmetBaslik}>{hizmet.baslik}</h2>
                  <p className={styles.hizmetMetin}>{hizmet.metin}</p>
                  <ul className={styles.ciktilar}>
                    {hizmet.ciktilar.map((cikti) => (
                      <li className={styles.cikti} key={cikti}>
                        {cikti}
                      </li>
                    ))}
                  </ul>
                  <Link className={styles.hizmetBaglanti} href="/teklif">
                    Bu hizmet için teklif alın
                  </Link>
                </div>
                <div className={styles.gorselKutu}>
                  <Image
                    className={styles.gorsel}
                    src={hizmet.gorsel}
                    alt={hizmet.gorselAlt}
                    width={900}
                    height={675}
                    sizes="(max-width: 991px) 100vw, 620px"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.surec}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Çalışma şeklimiz</h2>
            <p className={styles.bolumSpot}>
              İlk görüşmeden ilk yayına kadar dört adım. Hepsinde ne olacağını
              önceden bilirsiniz.
            </p>
            <div className={styles.adimlar}>
              {adimlar.map((adim) => (
                <div className={styles.adim} key={adim.no}>
                  <p className={styles.adimNo}>{adim.no}</p>
                  <h3 className={styles.adimBaslik}>{adim.baslik}</h3>
                  <p className={styles.adimMetin}>{adim.metin}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.farklar}>
          <div className={styles.kapsayici}>
            <h2 className={styles.bolumBaslik}>Neden Studio Gria</h2>
            <div className={styles.farkIzgara}>
              {farklar.map((fark) => (
                <div className={styles.farkKart} key={fark.baslik}>
                  <h3 className={styles.farkBaslik}>{fark.baslik}</h3>
                  <p className={styles.farkMetin}>{fark.metin}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.referanslar}>
          <div className={styles.kapsayici}>
            <p className={styles.referansBaslik}>Birlikte çalıştığımız markalardan</p>
            <div className={styles.referansIzgara}>
              {referanslar.slice(0, 6).map((item) => (
                <div className={styles.referansAd} key={item.ad}>
                  {item.ad}
                </div>
              ))}
            </div>
            <Link className={styles.referansTumu} href="/referanslar">
              Tüm referanslarımız
            </Link>
          </div>
        </section>

        <section className={styles.kapanis}>
          <div className={styles.kapsayici}>
            <h2 className={styles.kapanisBaslik}>Markanız için ne yapabiliriz</h2>
            <p className={styles.kapanisMetin}>
              Hesabınızı inceleyip size özel stratejiyi ve teklifi hazırlayalım.
              İnceleme ücretsiz, karar sizin.
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

export default ServiceMain;
