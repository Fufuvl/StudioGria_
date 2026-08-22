"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

// Tum lead formlarinin paylastigi bot tuzaklari.
//
// 1. Honeypot: ekranda gorunmeyen bir alan. Gercek ziyaretci goremedigi icin
//    bos birakir, formu otomatik dolduran bot ise doldurur.
// 2. Imzali bilet: form acilirken sunucudan alinir, gonderimde geri yollanir.
//    Sureyi sunucunun kendi zaman damgasindan olcer ve tek kullanimliktir.
// 3. Sure olcumu: biletin alinamadigi durumlar icin yedek sinyal.
//
// Karar sunucuda verilir (bkz. app/api/lead/spam-filtresi.ts), boylece
// istemci tarafi kod okunarak atlatilamaz.

const GIZLI_STIL: React.CSSProperties = {
  position: "absolute",
  left: "-9999px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  opacity: 0,
  pointerEvents: "none",
};

type Props = {
  deger: string;
  degistir: (yeniDeger: string) => void;
  // Ayni sayfada birden fazla form olabilir, id cakismasin
  alanId?: string;
};

export function BotTuzagi({ deger, degistir, alanId = "website" }: Props) {
  return (
    <div style={GIZLI_STIL} aria-hidden="true">
      <label htmlFor={alanId}>Web siteniz (bu alani bos birakin)</label>
      <input
        id={alanId}
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={deger}
        onChange={(olay) => degistir(olay.target.value)}
      />
    </div>
  );
}

// Form acilisindan gonderime kadar gecen saniyeyi verir
export function useFormSuresi() {
  const acilis = useRef<number>(0);

  useEffect(() => {
    // Sunucu ve istemci saati farkli olabilir, olcum istemcide baslar
    acilis.current = Date.now();
  }, []);

  return useCallback(() => {
    if (!acilis.current) return undefined;
    return Math.round((Date.now() - acilis.current) / 1000);
  }, []);
}

// Form acilirken sunucudan imzali bilet alir.
// Bilet alinamazsa (ag hatasi, eski onbellek) form calismaya devam eder;
// gonderim o zaman diger sinyallere gore degerlendirilir.
//
// etkin: bilet yalnizca form gercekten gorundugunde istenir. Popup her
// sayfada bulundugu icin bu olmadan her sayfa goruntulemesinde gereksiz
// bir istek atilirdi.
export function useFormBileti(etkin: boolean = true) {
  const [bilet, setBilet] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!etkin || bilet) return;
    let iptal = false;
    fetch("/api/lead-bileti", { headers: { Accept: "application/json" } })
      .then((yanit) => (yanit.ok ? yanit.json() : null))
      .then((govde) => {
        if (!iptal && govde && typeof govde.bilet === "string") setBilet(govde.bilet);
      })
      .catch(() => {});
    return () => {
      iptal = true;
    };
  }, [etkin, bilet]);

  return bilet;
}
