"use client";
import React, { useState } from "react";
import Image from "next/image";
import stil from "./musteri-sozleri.module.scss";

// Dikey video karti: sayfa yuklenirken yalniz afis iner, video tiklaninca
// kaynak alir ve sesli oynar. Ayni anda tek video oynar. Gorunum musteri
// yorumu kartlariyla ayni stil modulunden gelir.

function sureYaz(saniye: number) {
  const dk = Math.floor(saniye / 60);
  const sn = String(saniye % 60).padStart(2, "0");
  return `${dk}:${sn}`;
}

type Props = {
  // Uzantisiz dosya yolu: {dosya}.mp4 ve {dosya}.jpg
  dosya: string;
  alt: string;
  etiket: string;
  sureSaniye: number;
  oncelikli?: boolean;
  sizes?: string;
};

export default function OynatKart({ dosya, alt, etiket, sureSaniye, oncelikli = false, sizes }: Props) {
  const [acik, setAcik] = useState(false);

  return (
    <div className={stil.ekran}>
      {acik ? (
        <video
          data-musteri-video
          className={stil.video}
          src={`${dosya}.mp4`}
          poster={`${dosya}.jpg`}
          controls
          autoPlay
          playsInline
          preload="auto"
          onPlay={(olay) => {
            document.querySelectorAll<HTMLVideoElement>("video[data-musteri-video]").forEach((video) => {
              if (video !== olay.currentTarget && !video.paused) video.pause();
            });
          }}
        />
      ) : (
        <button
          type="button"
          className={stil.oynat}
          onClick={() => setAcik(true)}
          aria-label={`${etiket} videosunu oynat, ${sureYaz(sureSaniye)}`}
        >
          <Image
            className={stil.afis}
            src={`${dosya}.jpg`}
            alt={alt}
            fill
            priority={oncelikli}
            sizes={sizes ?? "(max-width: 767px) 72vw, 360px"}
          />
          <span className={stil.dugme} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.29-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z" />
            </svg>
          </span>
          <span className={stil.sure}>{sureYaz(sureSaniye)}</span>
        </button>
      )}
    </div>
  );
}
