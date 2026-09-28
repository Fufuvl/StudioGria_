"use client";
import React from "react";
import Link from "next/link";
import { useSiteBaglantilari } from "@/components/site-baglantilari";

// Iletisim sayfasindaki studyo kunyesi. Ad, adres, telefon ve saatler
// kurulus-data.ts'ten gelir; Google Isletme Profili ile birebir aynidir.
// Yerel aramada sayfadaki gorunur NAP ile semadaki NAP'in esit olmasi
// guven sinyalidir, bu yuzden burada elle bilgi yazilmaz.

const gunAdi: Record<string, string> = {
  Monday: "Pazartesi",
  Tuesday: "Salı",
  Wednesday: "Çarşamba",
  Thursday: "Perşembe",
  Friday: "Cuma",
  Saturday: "Cumartesi",
  Sunday: "Pazar",
};

function telefonGorunur(tel: string) {
  // +905388654405 -> +90 538 865 44 05
  const r = tel.replace(/\D/g, "");
  return `+${r.slice(0, 2)} ${r.slice(2, 5)} ${r.slice(5, 8)} ${r.slice(8, 10)} ${r.slice(10, 12)}`;
}

const ContactLocation = () => {
  const { kurum, bolgeler } = useSiteBaglantilari();
  const saatMetni = kurum.saatler.map((aralik) => {
    const ilk = gunAdi[aralik.gunler[0]];
    const son = gunAdi[aralik.gunler[aralik.gunler.length - 1]];
    const gunler = aralik.gunler.length > 1 ? `${ilk} ile ${son} arası` : ilk;
    return `${gunler} ${aralik.acilis} - ${aralik.kapanis}`;
  });

  return (
    <section className="sg-hk">
      <div className="sg-hk-ic">
        <div className="sg-hk-blok">
          <h2 className="sg-hk-baslik">Stüdyomuz</h2>
          <div className="sg-hk-metin">
            <p>
              <strong>{kurum.ad}</strong>
              <br />
              {kurum.sokak}
              <br />
              {kurum.postaKodu} {kurum.ilce} / {kurum.il}
            </p>
            <p>
              Telefon: <a href={`tel:${kurum.telefon}`}>{telefonGorunur(kurum.telefon)}</a>
              <br />
              E-posta: <a href={`mailto:${kurum.eposta}`}>{kurum.eposta}</a>
            </p>
            {saatMetni.length > 0 && (
              <p>Çalışma saatleri: {saatMetni.join(", ")}.</p>
            )}
            <p>
              <a href={kurum.harita} target="_blank" rel="noopener noreferrer">
                Google Haritalar&apos;da yol tarifi alın
              </a>
            </p>
          </div>
        </div>
        <div className="sg-hk-blok">
          <h2 className="sg-hk-baslik">Hizmet verdiğimiz ilçeler</h2>
          <div className="sg-hk-metin">
            <p>
              Batı İstanbul&apos;daki işletmelerle sahada çalışıyor, İstanbul ve
              Türkiye genelindeki markaların hesaplarını uzaktan yönetiyoruz.
            </p>
            <p className="sg-hk-bolgeler">
              {bolgeler.map((b, i) => (
                <React.Fragment key={b.slug}>
                  <Link href={`/bolgeler/${b.slug}`}>{b.ilce}</Link>
                  {i < bolgeler.length - 1 ? " · " : ""}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
