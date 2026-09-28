"use client";
import React from "react";
import Link from "next/link";
import { surecAdimlari } from "@/data/surec-data";
import { sosyalKanit } from "@/data/sosyal-kanit-data";
import { referanslar } from "@/data/referans-data";
import { useSiteBaglantilari } from "@/components/site-baglantilari";

// Hakkimizda sayfasinin asil metni. Google'in "bu markanin arkasinda kim var"
// sorusunu (E-E-A-T) ve yapay zeka motorlarinin kurum tanimini bu bolumden
// okur; bu yuzden tum bilgi tek kaynak veri dosyalarindan gelir, sayfada elle
// kurum bilgisi yazilmaz.

const ilkeler = [
  "Çekimi sahada kendimiz yaparız; hazır şablon ve stok görselle hesap doldurmayız.",
  "Her içeriği bir amaca bağlarız: mesaj, rezervasyon, form ya da satış.",
  "Reklam bütçesi ajans ücretinden ayrıdır ve doğrudan sizin hesabınızdan platforma harcanır.",
  "Her ayın sonunda neyin yayınlandığını ve ne sonuç verdiğini rakamla raporlarız.",
];

function metrikMetni(deger: number, sonek: string) {
  return `${deger.toLocaleString("tr-TR")}${sonek}`;
}

export default function HakkimizdaIcerik() {
  const { kurum, bolgeler } = useSiteBaglantilari();
  const markaSayisi = sosyalKanit.find((m) => m.etiket.includes("marka"));
  const ornekMarkalar = referanslar.slice(0, 6).map((r) => r.ad);

  return (
    <section className="sg-hk">
      <div className="sg-hk-ic">
        <div className="sg-hk-blok">
          <h2 className="sg-hk-baslik">Studio Gria kimdir?</h2>
          <div className="sg-hk-metin">
            <p>{kurum.aciklama}</p>
            <p>
              Çoğu işletme sosyal medyası için bir ajansla, çekim için bir
              fotoğrafçıyla, reklam için ayrı bir uzmanla çalışır. Her biri
              kendi parçasını yapar, sonuçtan ise kimse sorumlu olmaz. Biz bu
              parçaları tek masada topladık: içeriği planlayan, çeken,
              tasarlayan, yayınlayan ve reklamını yöneten aynı ekiptir.
            </p>
            <p>
              {ornekMarkalar.join(", ")} dahil{" "}
              {markaSayisi ? metrikMetni(markaSayisi.deger, markaSayisi.sonek) : "39+"}{" "}
              markayla çalıştık. Tam listeyi{" "}
              <Link href="/referanslar">referanslar sayfamızda</Link> sektöre
              göre inceleyebilirsiniz.
            </p>
          </div>
        </div>

        {/* Rakamlar burada tekrar edilmez: hemen altindaki "Rakamlarla Studio Gria" bolumu gosterir */}

        <div className="sg-hk-blok">
          <h2 className="sg-hk-baslik">Nasıl çalışıyoruz?</h2>
          <ol className="sg-hk-surec">
            {surecAdimlari.map((adim) => (
              <li key={adim.no}>
                <span className="sg-hk-no">{adim.no}</span>
                <h3>{adim.baslik}</h3>
                <p>{adim.metin}</p>
              </li>
            ))}
          </ol>
          <ul className="sg-hk-ilkeler">
            {ilkeler.map((ilke) => (
              <li key={ilke}>{ilke}</li>
            ))}
          </ul>
        </div>

        <div className="sg-hk-blok">
          <h2 className="sg-hk-baslik">Kurucu</h2>
          <div className="sg-hk-metin">
            <p>
              <strong>{kurum.kurucuAd}</strong>, {kurum.kurucuBiyografi}
            </p>
          </div>
        </div>

        <div className="sg-hk-blok">
          <h2 className="sg-hk-baslik">Nerede çalışıyoruz?</h2>
          <div className="sg-hk-metin">
            <p>
              Stüdyomuz {kurum.sokak}, {kurum.ilce} /{" "}
              {kurum.il} adresinde. Batı İstanbul&apos;da çekim için
              sahaya hızlı çıkıyoruz; İstanbul ve Türkiye genelindeki
              markaların hesaplarını uzaktan yönetiyoruz.
            </p>
            <p className="sg-hk-bolgeler">
              {bolgeler.map((b, i) => (
                <React.Fragment key={b.slug}>
                  <Link href={`/bolgeler/${b.slug}`}>{b.ilce} sosyal medya ajansı</Link>
                  {i < bolgeler.length - 1 ? " · " : ""}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        <div className="sg-hk-cta">
          <p>Markanızı dinlemekle başlıyoruz. Teklif sunumu ücretsizdir.</p>
          <Link className="sg-split-cta" href="/teklif">
            Teklif Al
          </Link>
        </div>
      </div>
    </section>
  );
}
