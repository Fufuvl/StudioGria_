"use client";
import React from "react";
import Link from "next/link";
import { MODEL_OLAYI, ModelAnahtari } from "@/data/model-data";

// "Bu modelle teklif alin" baglantisi. Teklif formu ayni sayfadaysa secimi
// forma isler ve forma kaydirir; degilse secimi adres cubugunda tasiyarak
// /teklif sayfasina goturur. Iki durumda da ziyaretci modelini iki kez secmez.
export default function ModelBag({
  model,
  className,
  children,
}: {
  model: ModelAnahtari;
  className?: string;
  children: React.ReactNode;
}) {
  const tikla = (olay: React.MouseEvent<HTMLAnchorElement>) => {
    const form = document.getElementById("teklif-formu");
    if (!form) return;
    olay.preventDefault();
    window.dispatchEvent(new CustomEvent(MODEL_OLAYI, { detail: model }));
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Link className={className} href={`/teklif?model=${model}#teklif-formu`} onClick={tikla}>
      {children}
    </Link>
  );
}
