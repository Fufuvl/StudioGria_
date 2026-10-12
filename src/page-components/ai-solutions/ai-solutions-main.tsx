"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import styles from "./ai-solutions-main.module.scss";

// Galeri: tamami yapay zeka ile uretilmis calisma ornekleri. Kareler yalniz
// Lucea Jewelry ve Star Termos islerinden secilir (kullanici karari, 12 Eki 2026).
// Farkli en boy oranlari masonry dizilimde dogal bir ritim kurar; en ve boy
// dosyanin gercek olculeridir.
const GALERI = "/assets/img/ai-solutions/galeri";
const galeri = [
  { ad: "Sokak karesi", tag: "Star Termos", dosya: "star-termos-pipetli-termos-sokak-karesi", en: 1000, boy: 1241 },
  { ad: "Editoryal portre", tag: "Lucea Jewelry", dosya: "lucea-yuzuk-editoryal-portre", en: 896, boy: 1200 },
  { ad: "Stüdyo portresi", tag: "Star Termos", dosya: "star-termos-termos-studyo-portresi", en: 1000, boy: 1241 },
  { ad: "Buz üzerinde ürün karesi", tag: "Lucea Jewelry", dosya: "lucea-verdelle-kupe-buz-uzerinde", en: 1000, boy: 1000 },
  { ad: "Metro karesi", tag: "Star Termos", dosya: "star-termos-pipetli-termos-metro-karesi", en: 1000, boy: 1241 },
  { ad: "Ürün vitrini", tag: "Lucea Jewelry", dosya: "lucea-kolye-urun-vitrini", en: 669, boy: 1200 },
  { ad: "Piknik sahnesi", tag: "Star Termos", dosya: "star-termos-termos-piknik-sahnesi", en: 1000, boy: 1241 },
  { ad: "Araç içi portre", tag: "Lucea Jewelry", dosya: "lucea-sia-kupe-arac-ici-portre", en: 1000, boy: 1339 },
  { ad: "Boğaz manzarası", tag: "Star Termos", dosya: "star-termos-termos-bogaz-manzarasi", en: 1000, boy: 1241 },
  { ad: "Yakın portre", tag: "Lucea Jewelry", dosya: "lucea-cendre-kupe-yakin-portre", en: 1000, boy: 1000 },
  { ad: "Servis anı", tag: "Star Termos", dosya: "star-termos-termos-servis-ani", en: 1000, boy: 1241 },
  { ad: "Kompozisyon", tag: "Lucea Jewelry", dosya: "lucea-yuzuk-kompozisyon", en: 896, boy: 1200 },
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
              <Link className={styles.anaDugme} href="/ai-urun-gorseli">
                Yapay zeka ile ürün görseli
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
                  key={oge.dosya}
                  style={{ animationDelay: `${Math.min(sira * 70, 700)}ms` }}
                >
                  <Image
                    className={styles.galeriGorsel}
                    src={`${GALERI}/${oge.dosya}-yapay-zeka-gorseli.jpg`}
                    alt={`${oge.tag} için yapay zeka ile üretilmiş ${oge.ad.toLocaleLowerCase("tr-TR")}`}
                    width={oge.en}
                    height={oge.boy}
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 400px"
                  />
                  <figcaption className={styles.galeriEtiket}>
                    <span className={styles.galeriAd}>{oge.ad}</span>
                    <span className={styles.galeriTag}>{oge.tag}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className={styles.galeriAlt}>
              Kareler Lucea Jewelry ve Star Termos için ürettiğimiz işlerdendir;
              karelerde görünen kişiler yapay zeka ile üretilmiştir.{" "}
              <Link className={styles.galeriBag} href="/ai-urun-gorseli">
                Markaların gönderdiği fotoğraflarla yan yana görün
              </Link>
            </p>
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
              Ürün fotoğrafınızı gönderin; her ürün için üç katalog karesi
              hazırlayalım. İlk ürünü birlikte üretiriz.
            </p>
            <Link className={styles.kapanisDugme} href="/ai-urun-gorseli">
              Ürün görseli örneklerini görün
            </Link>
          </div>
        </section>

        <FooterTwo topCls="" />
      </main>
    </Wrapper>
  );
};

export default AiSolutionsMain;
