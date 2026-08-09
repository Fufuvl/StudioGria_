"use client";
import React, { useState } from "react";
import { trackLead } from "@/utils/meta-pixel";
import { leadKaydet, whatsappAc } from "@/utils/lead";
import styles from "./teklif.module.scss";

type Alanlar = {
  adSoyad: string;
  telefon: string;
  sektor: string;
  hedef: string;
};

const BOS: Alanlar = { adSoyad: "", telefon: "", sektor: "", hedef: "" };

export default function TeklifForm() {
  const [veri, setVeri] = useState<Alanlar>(BOS);
  const [hatalar, setHatalar] = useState<Partial<Alanlar>>({});
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
    if (veri.sektor.trim().length < 2) yeni.sektor = "Sektörünüzü giriniz";
    setHatalar(yeni);
    return Object.keys(yeni).length === 0;
  };

  const gonder = (olay: React.FormEvent) => {
    olay.preventDefault();
    if (!dogrula()) return;

    const mesaj =
      `Merhaba, teklif sayfasindan yaziyorum.%0A%0A` +
      `*Ad Soyad:* ${encodeURIComponent(veri.adSoyad)}%0A` +
      `*Telefon:* ${encodeURIComponent(veri.telefon)}%0A` +
      `*Sektor:* ${encodeURIComponent(veri.sektor)}%0A` +
      `*Hedef:* ${encodeURIComponent(veri.hedef)}`;

    leadKaydet({
      kaynak: "Teklif Sayfası",
      adSoyad: veri.adSoyad,
      telefon: veri.telefon,
      sektor: veri.sektor,
      hedef: veri.hedef,
    });
    trackLead({ content_name: "Teklif Sayfası", content_category: veri.sektor });
    whatsappAc(`https://wa.me/905388654405?text=${mesaj}`);

    setVeri(BOS);
    setGonderildi(true);
  };

  if (gonderildi) {
    return (
      <div className={styles.formKart}>
        <div className={styles.tesekkur}>
          <h2 className={styles.tesekkurBaslik}>Talebiniz bize ulaştı</h2>
          <p className={styles.tesekkurMetin}>
            Bilgilerinizi aldık. Ekibimiz aynı gün içinde dönüş yapıp markanıza özel
            stratejiyi ve teklifi paylaşacak.
          </p>
          <a className={styles.tesekkurBaglanti} href="https://wa.me/905388654405" target="_blank" rel="noopener noreferrer">
            Hemen WhatsApp üzerinden yazmak isterim
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

        <button className={styles.gonder} type="submit">
          Teklif İste
        </button>
      </form>

      <p className={styles.formNot}>
        Bilgileriniz yalnızca teklif hazırlamak için kullanılır, üçüncü kişilerle
        paylaşılmaz. Ödemenizi dilerseniz kredi kartıyla yapabilirsiniz.
      </p>
    </div>
  );
}
