"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { referanslar } from "@/data/referans-data";

// Cift yonlu akan marka seridi. Referanslar, hizmetler ve teklif
// sayfalarinda ortak kullanilir; veri referans-data'dan gelir.
export default function ReferansSerit({ tekSerit = false }: { tekSerit?: boolean }) {
  const adlar = referanslar.map((item) => item.ad);
  const ustYari = adlar.slice(0, 20);
  const altYari = adlar.slice(20);

  return (
    <div className="sg-serit-sarici">
      <div className="sg-serit">
        <Marquee speed={38} autoFill pauseOnHover gradient={false}>
          <span className="sg-serit-ic">
            {ustYari.map((ad) => (
              <React.Fragment key={ad}>
                <span className="sg-serit-oge">{ad}</span>
                <span className="sg-serit-ayrac" aria-hidden="true">·</span>
              </React.Fragment>
            ))}
          </span>
        </Marquee>
      </div>
      {!tekSerit && (
        <div className="sg-serit sg-serit-kontur">
          <Marquee speed={30} autoFill pauseOnHover gradient={false} direction="right">
            <span className="sg-serit-ic">
              {altYari.map((ad) => (
                <React.Fragment key={ad}>
                  <span className="sg-serit-oge">{ad}</span>
                  <span className="sg-serit-ayrac" aria-hidden="true">·</span>
                </React.Fragment>
              ))}
            </span>
          </Marquee>
        </div>
      )}
    </div>
  );
}
