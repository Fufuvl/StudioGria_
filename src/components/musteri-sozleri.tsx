"use client";
import React from "react";
import Link from "next/link";
import OynatKart from "./oynat-kart";
import { musteriSozleri, VIDEO_YOLU, type MusteriSozu } from "@/data/musteri-sozleri-data";
import stil from "./musteri-sozleri.module.scss";

// Musterilerin kendi agzindan Studio Gria. Video karti oynat-kart.tsx: sayfa
// yuklenirken yalniz afis iner, video tiklaninca sesli oynar.
//
// Yapisal veri (VideoObject) burada basilmaz; bileseni kullanan sunucu sayfasi
// musteriVideoSemalari() ile kendi grafina ekler.

function VideoKart({ soz }: { soz: MusteriSozu }) {
  return (
    <figure className={stil.kart}>
      <OynatKart
        dosya={`${VIDEO_YOLU}/${soz.kimlik}-musteri-yorumu`}
        alt={`${soz.marka} adına ${soz.ad}, Studio Gria hakkında konuşurken`}
        etiket={`${soz.marka} müşteri yorumu`}
        sureSaniye={soz.sureSaniye}
      />
      <figcaption className={stil.alt}>
        <blockquote className={stil.alinti}>
          <p>&ldquo;{soz.alinti}&rdquo;</p>
        </blockquote>
        <p className={stil.kim}>
          <span className={stil.ad}>
            {soz.ad}
            {soz.rol ? `, ${soz.rol}` : ""}
          </span>
          <span className={stil.marka}>
            {soz.marka} · {soz.sektor}
          </span>
        </p>
      </figcaption>
    </figure>
  );
}

type Props = {
  // Gosterilecek videolar ve sirasi; verilmezse hepsi
  kimlikler?: string[];
  rozet?: string;
  baslik?: React.ReactNode;
  spot?: string;
  zemin?: "koyu" | "acik";
  kimlik?: string;
  // Bolum altinda referanslar sayfasina baglanti
  referansBagi?: boolean;
};

export default function MusteriSozleri({
  kimlikler,
  rozet = "Müşterilerimiz anlatıyor",
  baslik = (
    <>
      Bizi en iyi, <em>birlikte çalıştığımız</em> markalar anlatır
    </>
  ),
  spot = "Kurgusu bize ait, sözler onların. Her video bir işletme sahibinin ya da ekibinin, kamera karşısında Studio Gria ile çalışmayı anlatmasıdır.",
  zemin = "koyu",
  kimlik = "musteri-sozleri",
  referansBagi = false,
}: Props) {
  const liste = kimlikler
    ? kimlikler.flatMap((k) => musteriSozleri.filter((s) => s.kimlik === k))
    : musteriSozleri;
  if (liste.length === 0) return null;

  return (
    <section
      id={kimlik}
      className={`${stil.bolum} ${zemin === "koyu" ? stil.koyu : stil.acik}`}
      aria-labelledby={`${kimlik}-baslik`}
    >
      <div className={stil.ic}>
        <div className={stil.bas}>
          <span className={stil.rozet}>{rozet}</span>
          <h2 id={`${kimlik}-baslik`} className={stil.baslik}>
            {baslik}
          </h2>
          {spot && <p className={stil.spot}>{spot}</p>}
        </div>
        <div className={`${stil.izgara} ${liste.length === 1 ? stil.tek : liste.length === 2 ? stil.iki : ""}`}>
          {liste.map((soz) => (
            <VideoKart soz={soz} key={soz.kimlik} />
          ))}
        </div>
        {referansBagi && (
          <div className={stil.altBag}>
            <Link href="/referanslar" className={stil.bag}>
              Tüm referanslarımız
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
