import React from "react";
import Image from "next/image";
import Link from "next/link";

// Ana sayfadaki yapay zeka ile urun gorseli bandi. Sosyal medya yonetiminden
// ayri satilan ikinci hizmet hattini gosterir ve iniş sayfasina
// (/ai-urun-gorseli) ana sayfadan dogrudan bag verir. Fiyat yazilmaz.
const GORSEL = "/assets/img/ai-solutions/urun-gorseli";

const kareler = [
  { dosya: "lucea-marea-kupe-yapay-zeka-gorseli-2.jpg", alt: "Marea küpe için yapay zeka ile üretilmiş, profilden modelli kare", konum: "60% 40%" },
  { dosya: "lucea-marea-kupe-yapay-zeka-gorseli-1.jpg", alt: "Marea küpe için yapay zeka ile üretilmiş, tenis kortunda modelli kare", konum: "center" },
  { dosya: "lucea-marea-kupe-yapay-zeka-gorseli-3.jpg", alt: "Marea küpe için yapay zeka ile üretilmiş, kırmızı toz zeminde ürün karesi", konum: "center" },
];

export default function AnasayfaUrunGorseli() {
  return (
    <section className="sg-urun" aria-labelledby="anasayfa-urun-gorseli">
      <div className="sg-hizmet-ic">
        <div className="sg-urun-izgara">
          <div>
            <span className="sg-hizmet-rozet">Yapay zeka ile ürün görseli</span>
            <h2 id="anasayfa-urun-gorseli" className="sg-hizmet-baslik">
              Tek fotoğraftan <em>üç katalog karesi</em>
            </h2>
            <p className="sg-hizmet-spot">
              Ürün fotoğrafınızı gönderirsiniz. Ürün olduğu gibi kalır;
              sahnesini, ışığını ve zeminini biz kurarız. Stüdyo, model ve
              çekim günü gerekmez.
            </p>
            <div className="sg-hizmet-alt sg-urun-eylem">
              <Link className="sg-split-cta" href="/ai-urun-gorseli">
                Ürün görseli örneklerini görün
              </Link>
              <Link className="sg-split-link" href="/ai-destekli-cozumler">
                Tüm AI çalışmaları
              </Link>
            </div>
          </div>

          <div className="sg-urun-kareler">
            {/* Solda gonderilen fotograf kucuk, yaninda ayni urunden uretilen uc kare */}
            <figure className="sg-urun-once">
              <div className="sg-urun-once-kare">
                <Image
                  src={`${GORSEL}/lucea-marea-kupe-urun-fotografi.jpg`}
                  alt="Marea küpenin tezgah üstünde telefonla çekilmiş fotoğrafı"
                  fill
                  sizes="(max-width: 991px) 24vw, 150px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption className="sg-urun-once-etiket">Gönderilen fotoğraf</figcaption>
            </figure>
            {kareler.map((kare) => (
              <figure className="sg-urun-kare" key={kare.dosya}>
                <Image
                  src={`${GORSEL}/${kare.dosya}`}
                  alt={kare.alt}
                  fill
                  sizes="(max-width: 991px) 31vw, 230px"
                  style={{ objectFit: "cover", objectPosition: kare.konum }}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
