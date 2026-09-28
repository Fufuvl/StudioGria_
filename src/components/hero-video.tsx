"use client";
import React, { useEffect, useRef, useState } from "react";
import stil from "./hero-video.module.scss";

// Ana sayfa hero'sunda sahadan kisa, sessiz dongu.
//
// LCP ogesi fotograf olarak kalir: video yalnizca sayfa yuklenip tarayici bosa
// ciktiktan sonra kaynak alir ve oynamaya baslayinca fotografin ustunde belirir.
// Hareket azaltma tercihi ya da veri tasarrufu modu aciksa video hic yuklenmez.
// 5 saniyeden uzun kendiliginden oynayan icerik icin duraklatma dugmesi zorunlu
// (WCAG 2.2.2).

type Props = {
  masaustu: string;
  mobil: string;
  etiket: string;
};

export default function HeroVideo({ masaustu, mobil, etiket }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [oynuyor, setOynuyor] = useState(false);
  const [durdu, setDurdu] = useState(false);

  useEffect(() => {
    const azHareket = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const baglanti = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (azHareket || baglanti?.saveData) return;

    let iptal = false;
    const baslat = () => {
      const video = ref.current;
      if (!video || iptal) return;
      video.muted = true;
      video.src = window.innerWidth < 768 ? mobil : masaustu;
      video.play().catch(() => undefined);
    };
    const bekle = () => {
      const pencere = window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      };
      if (pencere.requestIdleCallback) pencere.requestIdleCallback(baslat, { timeout: 2500 });
      else window.setTimeout(baslat, 1200);
    };

    if (document.readyState === "complete") bekle();
    else window.addEventListener("load", bekle, { once: true });
    return () => {
      iptal = true;
      window.removeEventListener("load", bekle);
    };
  }, [masaustu, mobil]);

  const degistir = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => undefined);
      setDurdu(false);
    } else {
      video.pause();
      setDurdu(true);
    }
  };

  return (
    <>
      <video
        ref={ref}
        className={`${stil.video} ${oynuyor ? stil.acik : ""}`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setOynuyor(true)}
      />
      <p className={stil.etiket}>{etiket}</p>
      {oynuyor && (
        <button
          type="button"
          className={stil.dugme}
          onClick={degistir}
          aria-label={durdu ? "Videoyu oynat" : "Videoyu duraklat"}
        >
          {durdu ? (
            <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true">
              <path d="M1 1l10 6-10 6z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true">
              <rect x="1" y="1" width="3.5" height="12" fill="currentColor" />
              <rect x="7.5" y="1" width="3.5" height="12" fill="currentColor" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
