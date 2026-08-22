import React from "react";
import Link from "next/link";
import { hizmetler } from "@/data/hizmet-data";

// Ana sayfadan hizmet detay sayfalarina dogrudan ic link veren bolum.
// Bu bolum eklenmeden once 10 hizmet sayfasi yalnizca /hizmetler listesinden
// erisiliyordu; arama motorlari icin ana sayfadan gelen dogrudan bag
// bu sayfalarin taranma ve siralanma sansini belirgin olcude artirir.
export default function AnasayfaHizmetler() {
  return (
    <section className="sg-hizmet-bolum" aria-labelledby="anasayfa-hizmetler">
      <div className="sg-hizmet-ic">
        <span className="sg-hizmet-rozet">Ne yapıyoruz</span>
        <h2 id="anasayfa-hizmetler" className="sg-hizmet-baslik">
          Markanızın dijitalde ihtiyacı olan her şey, tek çatı altında
        </h2>
        <p className="sg-hizmet-spot">
          İçerik üretiminden reklam yönetimine, profesyonel çekimden web
          geliştirmeye kadar tüm hizmetleri tek ekiple yürütüyoruz. Böylece
          markanızın dili her kanalda aynı kalıyor, iş birden fazla tedarikçi
          arasında bölünmüyor.
        </p>

        <ul className="sg-hizmet-liste">
          {hizmetler.map((hizmet) => (
            <li key={hizmet.slug} className="sg-hizmet-kart">
              <Link href={`/hizmetler/${hizmet.slug}`} className="sg-hizmet-bag">
                <h3 className="sg-hizmet-ad">{hizmet.ad}</h3>
                <p className="sg-hizmet-metin">{hizmet.kisaAciklama}</p>
                <span className="sg-hizmet-ok" aria-hidden="true">
                  Detaylar
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="sg-hizmet-alt">
          <Link className="sg-split-cta" href="/teklif">
            Markanıza özel teklif alın
          </Link>
          <Link className="sg-split-link" href="/hizmetler">
            Tüm hizmetleri karşılaştırın
          </Link>
        </div>
      </div>
    </section>
  );
}
