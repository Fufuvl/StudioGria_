import React from "react";
import Image from "next/image";
import ModelBag from "@/components/model-bag";
import { calismaModelleri, modelOrtaklari } from "@/data/model-data";

// Sosyal medya yonetiminin iki calisma modeli: produksiyonlu ve produksiyonsuz.
// Studio Gria'yi ayiran teklif budur; ana sayfa, hizmet sayfasi ve /teklif
// ayni bolumu gosterir. Kartlar yan yana durur ve satirlar karsilikli okunur
// (alt izgara), boylece ziyaretci iki modeli tek bakista karsilastirir.
export default function IkiModel({
  rozet = "Sosyal medya yönetimi",
  zemin = "beyaz",
  kimlik = "iki-model",
  genislik = 1280,
}: {
  rozet?: string;
  zemin?: "beyaz" | "krem";
  kimlik?: string;
  // Bolumun ic genisligi, yerlestigi sayfanin kapsayicisiyla hizalanir
  genislik?: number;
}) {
  return (
    <section
      id={kimlik}
      className={`sg-model ${zemin === "krem" ? "sg-model-krem" : ""}`}
      aria-labelledby={`${kimlik}-baslik`}
    >
      <div className="sg-hizmet-ic" style={genislik === 1280 ? undefined : { maxWidth: genislik }}>
        <span className="sg-hizmet-rozet">{rozet}</span>
        <h2 id={`${kimlik}-baslik`} className="sg-hizmet-baslik">
          İki çalışma modeli: <em>prodüksiyonlu</em> ya da{" "}
          <em>prodüksiyonsuz</em>
        </h2>
        <p className="sg-hizmet-spot">
          Strateji, içerik planı, reklam yönetimi ve rapor iki modelde de
          aynıdır. Fark, içeriğin nerede üretildiğidir: sahada ya da stüdyoda.
        </p>

        <div className="sg-model-izgara">
          {calismaModelleri.map((model) => (
            <article className="sg-model-kart" key={model.anahtar}>
              <figure className="sg-model-gorsel">
                <Image
                  src={model.gorsel}
                  alt={model.gorselAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 600px"
                  style={{ objectFit: "cover", objectPosition: model.gorselKonum }}
                />
                <figcaption className="sg-model-gorsel-not">{model.gorselNot}</figcaption>
              </figure>
              <div className="sg-model-bas">
                <span className="sg-model-etiket">{model.etiket}</span>
                <h3 className="sg-model-ad">{model.ad}</h3>
                <p className="sg-model-ozet">{model.ozet}</p>
              </div>
              {model.satirlar.map((satir) => (
                <dl className="sg-model-satir" key={satir.baslik}>
                  <dt>{satir.baslik}</dt>
                  <dd>{satir.deger}</dd>
                </dl>
              ))}
              <div className="sg-model-eylem">
                <ModelBag className="sg-hizmet-ok" model={model.anahtar}>
                  {model.ad} için teklif alın
                </ModelBag>
              </div>
            </article>
          ))}
        </div>

        <div className="sg-model-ortak">
          <p className="sg-model-ortak-baslik">İki modelde de aynı</p>
          <ul className="sg-model-ortak-liste">
            {modelOrtaklari.map((oge) => (
              <li key={oge}>{oge}</li>
            ))}
          </ul>
        </div>

        <p className="sg-model-karar">
          Hangisi size uygun? İlk görüşmede birlikte karar veririz; iki model
          birlikte de kurgulanabilir.
        </p>
      </div>
    </section>
  );
}
