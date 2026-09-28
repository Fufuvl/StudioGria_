"use client";
import React, { createContext, useContext } from "react";

// Footer'in site geneli bagladigi hizmet, blog ve bolge listeleri.
//
// NEDEN CONTEXT: Footer istemci bileseni. Veri dosyalarini (blog-yazilari.ts
// gibi) dogrudan ice aktarsaydi, tum yazilarin tam metni her sayfada
// tarayiciya inen JS paketine girerdi (28 Eyl 2026'da blog 11 yaziya cikinca
// her sayfaya ~35 KB eklenmisti). Listeler sunucudaki root layout'ta
// hesaplanir ve yalnizca baslik + adres olarak buraya aktarilir.

export type Kurum = {
  ad: string;
  aciklama: string;
  sokak: string;
  ilce: string;
  il: string;
  postaKodu: string;
  telefon: string;
  eposta: string;
  harita: string;
  saatler: { gunler: string[]; acilis: string; kapanis: string }[];
  kurucuAd: string;
  kurucuBiyografi: string;
};

export type SiteBaglantilari = {
  hizmetler: { ad: string; slug: string }[];
  yazilar: { baslik: string; slug: string }[];
  bolgeler: { ilce: string; slug: string }[];
  // kurulus-data.ts istemcide ice aktarilmaz (hizmet katalogunu da ceker)
  kurum: Kurum;
};

const Baglam = createContext<SiteBaglantilari>({
  hizmetler: [],
  yazilar: [],
  bolgeler: [],
  kurum: {
    ad: "Studio Gria",
    aciklama: "",
    sokak: "",
    ilce: "",
    il: "",
    postaKodu: "",
    telefon: "",
    eposta: "",
    harita: "",
    saatler: [],
    kurucuAd: "",
    kurucuBiyografi: "",
  },
});

export function SiteBaglantilariSaglayici({
  deger,
  children,
}: {
  deger: SiteBaglantilari;
  children: React.ReactNode;
}) {
  return <Baglam.Provider value={deger}>{children}</Baglam.Provider>;
}

export function useSiteBaglantilari() {
  return useContext(Baglam);
}
