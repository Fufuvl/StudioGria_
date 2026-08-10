"use client";
import React, { useState } from "react";
import { trackLead } from "@/utils/meta-pixel";
import { leadKaydetVeBekle, whatsappAc } from "@/utils/lead";
import styles from "./teklif.module.scss";

type Alanlar = {
  adSoyad: string;
  telefon: string;
  eposta: string;
  sektor: string;
  hedef: string;
};

const BOS: Alanlar = { adSoyad: "", telefon: "", eposta: "", sektor: "", hedef: "" };

export default function TeklifForm() {
  const [veri, setVeri] = useState<Alanlar>(BOS);
  const [hatalar, setHatalar] = useState<Partial<Alanlar>>({});
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [gonderildi, setGonderildi] = useState(false);

  const degistir = (olay: React.ChangeEvent<HTMLInputElement>) => {
    setVeri({ ...veri, [olay.target.name]: olay.target.value });
    setHatalar({ ...hatalar, [olay.target.name]: undefined });
  };

  const dogrula = () => {
    const yeni: Partial<Alanlar> = {};
    if (veri.adSoyad.trim().length < 2) yeni.adSoyad = "Adınızı giriniz";
    // En az 10 rakam: sabit ve mobil numaralarin tamamini kapsar
    if (veri.telefon.replace(/\D/g, "").length < 10) yeni.telefon = "Geçerli bir telefon numarası giriniz";
    // E-posta istege bagli; girildiyse bicimi dogru olmali
    if (veri.eposta.trim() && !/^\S+@\S+\.\S+$/.test(veri.eposta.trim())) {
      yeni.eposta = "Geçerli bir e-posta adresi giriniz";
    }
    if (veri.sektor.trim().length < 2) yeni.sektor = "Sektörünüzü giriniz";
    setHatalar(yeni);
    return Object.keys(yeni).length === 0;
  };

  const gonder = async (olay: React.FormEvent) => {
    olay.preventDefault();
    if (gonderiliyor || !dogrula()) return;
    setGonderiliyor(true);

    trackLead({ content_name: "Teklif Sayfası", content_category: veri.sektor });

    // Once e-posta bildirimi: lead otomatik olarak posta kutusuna duser.
    const sonuc = await leadKaydetVeBekle({
      kaynak: "Teklif Sayfası",
      adSoyad: veri.adSoyad,
      telefon: veri.telefon,
      eposta: veri.eposta,
      sektor: veri.sektor,
      hedef: veri.hedef,
    });

    // E-posta altyapisi ulasilamazsa lead kaybolmasin diye WhatsApp yedegi devreye girer
    if (!sonuc.ok) {
      const mesaj =
        `Merhaba, teklif sayfasindan yaziyorum.%0A%0A` +
        `*Ad Soyad:* ${encodeURIComponent(veri.adSoyad)}%0A` +
        `*Telefon:* ${encodeURIComponent(veri.telefon)}%0A` +
        (veri.eposta ? `*E-posta:* ${encodeURIComponent(veri.eposta)}%0A` : "") +
        `*Sektor:* ${encodeURIComponent(veri.sektor)}%0A` +
        `*Hedef:* ${encodeURIComponent(veri.hedef)}`;
      whatsappAc(`https://wa.me/905388654405?text=${mesaj}`);
    }

    setVeri(BOS);
    setGonderiliyor(false);
    setGonderildi(true);
  };

  if (gonderildi) {
    return (
      <div className={styles.formKart}>
        <div className={styles.tesekkur}>
          <h2 className={styles.tesekkurBaslik}>Talebiniz bize ulaştı</h2>
          <p className={styles.tesekkurMetin}>
            Bilgilerinizi aldık. Ekibimiz aynı gün içinde dönüş yapıp markanıza özel
            teklif sunumunu paylaşacak.
          </p>
          <a className={styles.tesekkurBaglanti} href="https://wa.me/905388654405" target="_blank" rel="noopener noreferrer">
            Beklemeden WhatsApp üzerinden yazmak isterim
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formKart}>
      <h2 className={styles.formBaslik}>Markanıza özel teklif alın</h2>
      <p className={styles.formSpot}>
        Formu doldurun, size uygun çalışma modelini ve fiyatı içeren teklif
        sunumunu hazırlayalım.
      </p>

      <form onSubmit={gonder} noValidate>
        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="teklif-ad">Ad Soyad</label>
          <input
            id="teklif-ad"
            name="adSoyad"
            className={styles.girdi}
            type="text"
            placeholder="Adınız ve soyadınız"
            value={veri.adSoyad}
            onChange={degistir}
            autoComplete="name"
          />
          {hatalar.adSoyad && <span className={styles.hataMetni}>{hatalar.adSoyad}</span>}
        </div>

        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="teklif-telefon">Telefon</label>
          <input
            id="teklif-telefon"
            name="telefon"
            className={styles.girdi}
            type="tel"
            placeholder="+90 5__ ___ __ __"
            value={veri.telefon}
            onChange={degistir}
            autoComplete="tel"
          />
          {hatalar.telefon && <span className={styles.hataMetni}>{hatalar.telefon}</span>}
        </div>

        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="teklif-eposta">E-posta</label>
          <input
            id="teklif-eposta"
            name="eposta"
            className={styles.girdi}
            type="email"
            placeholder="ornek@firmaniz.com"
            value={veri.eposta}
            onChange={degistir}
            autoComplete="email"
          />
          {hatalar.eposta && <span className={styles.hataMetni}>{hatalar.eposta}</span>}
        </div>

        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="teklif-sektor">Sektör</label>
          <input
            id="teklif-sektor"
            name="sektor"
            className={styles.girdi}
            type="text"
            placeholder="Restoran, otel, klinik, mağaza"
            value={veri.sektor}
            onChange={degistir}
          />
          {hatalar.sektor && <span className={styles.hataMetni}>{hatalar.sektor}</span>}
        </div>

        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="teklif-hedef">Hedefiniz (isteğe bağlı)</label>
          <input
            id="teklif-hedef"
            name="hedef"
            className={styles.girdi}
            type="text"
            placeholder="Daha fazla rezervasyon, bilinirlik, satış"
            value={veri.hedef}
            onChange={degistir}
          />
        </div>

        <button className={styles.gonder} type="submit" disabled={gonderiliyor}>
          {gonderiliyor ? "Gönderiliyor..." : "Teklif İste"}
        </button>
      </form>

      <p className={styles.formNot}>
        Bilgileriniz yalnızca teklif hazırlamak için kullanılır, üçüncü kişilerle
        paylaşılmaz. Ödemenizi dilerseniz kredi kartıyla yapabilirsiniz.
      </p>
    </div>
  );
}
