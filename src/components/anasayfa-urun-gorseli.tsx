import React from "react";
import Image from "next/image";
import Link from "next/link";

// Ana sayfadaki yapay zeka ile urun gorseli bandi. Sosyal medya yonetiminden
// ayri satilan ikinci hizmet hattini fiyatiyla gosterir ve iniş sayfasina
// (/ai-urun-gorseli) ana sayfadan dogrudan bag verir.
const GORSEL = "/assets/img/ai-solutions/urun-gorseli";

const kareler = [
  { dosya: "marea-2.jpg", alt: "Marea küpe için yapay zeka ile üretilmiş, profilden modelli kare", konum: "60% 40%" },
  { dosya: "marea-1.jpg", alt: "Marea küpe için yapay zeka ile üretilmiş, tenis kortunda modelli kare", konum: "center" },
  { dosya: "marea-3.jpg", alt: "Marea küpe için yapay zeka ile üretilmiş, kırmızı toz zeminde ürün karesi", konum: "center" },
];

export default function AnasayfaUrunGorseli() {
  return (
    <section className="sg-urun" aria-labelledby="anasayfa-urun-gorseli">
      <div className="sg-hizmet-ic">
        <div className="sg-urun-izgara">
          <div>
            <span className="sg-urun-rozet">Yapay zeka ile ürün görseli</span>
            <h2 id="anasayfa-urun-gorseli" className="sg-urun-baslik">
              Bir ürünün <em>üç katalog karesi</em> {"1.000 TL"}
            </h2>
            <p className="sg-urun-spot">
              Ürün fotoğrafınızı gönderirsiniz. Ürün olduğu gibi kalır;
              sahnesini, ışığını ve zeminini biz kurarız.
            </p>
            <div className="sg-urun-eylem">
              <Link className="sg-urun-dugme" href="/ai-urun-gorseli">
                Fiyatı ve örnekleri görün
              </Link>
              <Link className="sg-urun-bag" href="/ai-destekli-cozumler">
                Tüm AI çalışmaları
              </Link>
            </div>
          </div>

          <div className="sg-urun-kareler">
            {/* Solda gonderilen fotograf kucuk, yaninda ayni urunden uretilen uc kare */}
            <figure className="sg-urun-once">
              <div className="sg-urun-once-kare">
                <Image
                  src={`${GORSEL}/marea-once.jpg`}
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
