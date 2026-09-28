"use client";
import React from "react";
import Link from "next/link";
import SosyalKanit from "@/components/sosyal-kanit";
import ReferansSerit from "@/components/referans-serit";
import { useSiteBaglantilari } from "@/components/site-baglantilari";
import { bulunmaEki } from "@/utils/turkce-ek";

// Ana sayfanin sosyal kanit, rehber, bolge ve kapanis bolumleri.
//
// NEDEN: ana sayfa sitenin en guclu sayfasi ama 28 Eyl 2026'ya kadar blog
// yazilarina ve ilce sayfalarina hic baglanti vermiyordu, referans ve rakam da
// gostermiyordu. Buradaki baglantilar o sayfalarin taranma onceligini artirir.
// Yazi verisi sunucudaki page.tsx'ten gelir; blog-yazilari.ts istemci paketine
// girmesin diye burada ice aktarilmaz.

export type AnasayfaYazi = {
  slug: string;
  baslik: string;
  ozet: string;
  kategori: string;
};

export function AnasayfaKanit() {
  return (
    <section className="sg-ana-kanit" aria-labelledby="anasayfa-kanit">
      <div className="sg-hizmet-ic sg-ana-kanit-ic">
        <span className="sg-hizmet-rozet">Referanslarımız</span>
        <h2 id="anasayfa-kanit" className="sg-hizmet-baslik">
          Birlikte büyüdüğümüz markalar
        </h2>
        <SosyalKanit />
      </div>
      <ReferansSerit />
    </section>
  );
}

export function AnasayfaRehberler({ yazilar }: { yazilar: AnasayfaYazi[] }) {
  if (yazilar.length === 0) return null;
  return (
    <section className="sg-hizmet-bolum" aria-labelledby="anasayfa-rehberler">
      <div className="sg-hizmet-ic">
        <span className="sg-hizmet-rozet">Rehberler</span>
        <h2 id="anasayfa-rehberler" className="sg-hizmet-baslik">
          Karar vermeden önce okunacak rehberler
        </h2>
        <p className="sg-hizmet-spot">
          Ajans fiyatlarından reklam kanalı seçimine kadar işletmelerin bize en
          sık sorduğu soruları sahadaki deneyimimizle yanıtladık.
        </p>

        <ul className="sg-hizmet-liste">
          {yazilar.map((yazi) => (
            <li key={yazi.slug} className="sg-hizmet-kart">
              <Link href={`/blog/${yazi.slug}`} className="sg-hizmet-bag">
                <span className="sg-ana-kategori">{yazi.kategori}</span>
                <h3 className="sg-hizmet-ad">{yazi.baslik}</h3>
                <p className="sg-hizmet-metin">{yazi.ozet}</p>
                <span className="sg-hizmet-ok" aria-hidden="true">
                  Yazıyı oku
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="sg-hizmet-alt">
          <Link className="sg-split-link" href="/blog">
            Tüm yazılar
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AnasayfaBolgeler() {
  const { bolgeler, kurum } = useSiteBaglantilari();
  if (bolgeler.length === 0) return null;
  return (
    <section className="sg-ana-bolge" aria-labelledby="anasayfa-bolgeler">
      <div className="sg-hizmet-ic">
        <span className="sg-hizmet-rozet">Hizmet bölgelerimiz</span>
        <h2 id="anasayfa-bolgeler" className="sg-hizmet-baslik">
          Batı İstanbul&apos;da sahadayız
        </h2>
        <p className="sg-hizmet-spot">
          Stüdyomuz {bulunmaEki(kurum.ilce)}. Çevre ilçelerdeki işletmelerle çekim için
          aynı gün sahada olabiliyor, İstanbul ve Türkiye genelindeki markaların
          hesaplarını uzaktan yönetiyoruz.
        </p>
        <ul className="sg-ana-bolge-liste">
          {bolgeler.map((bolge) => (
            <li key={bolge.slug}>
              <Link className="sg-ana-bolge-bag" href={`/bolgeler/${bolge.slug}`}>
                {bolge.ilce} sosyal medya ajansı
              </Link>
            </li>
          ))}
        </ul>
        <p className="sg-ana-adres">
          <a href={kurum.harita} target="_blank" rel="noopener noreferrer">
            {kurum.sokak}, {kurum.postaKodu} {kurum.ilce}/{kurum.il}
          </a>
        </p>
      </div>
    </section>
  );
}

export function AnasayfaKapanis() {
  return (
    <section className="sg-ana-kapanis" aria-labelledby="anasayfa-kapanis">
      <div className="sg-hizmet-ic">
        <h2 id="anasayfa-kapanis" className="sg-ana-kapanis-baslik">
          Markanız için <em>net bir plan</em> çıkaralım
        </h2>
        <p className="sg-ana-kapanis-metin">
          Sizi dinleyip markanıza özel teklif sunumunu hazırlayalım. Sunum
          ücretsiz, karar sizin.
        </p>
        <Link className="sg-ana-kapanis-dugme" href="/teklif">
          Teklif İste
        </Link>
      </div>
    </section>
  );
}
