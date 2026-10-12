"use client";
import React, { useEffect, useState } from "react";
import { trackLead } from "@/utils/meta-pixel";
import { leadKaydetVeBekle, whatsappAc } from "@/utils/lead";
import { BotTuzagi, useFormSuresi, useFormBileti } from "@/components/form/bot-tuzagi";
import { atifKaydet } from "@/utils/atif";
import { MODEL_OLAYI } from "@/data/model-data";
import styles from "./teklif.module.scss";

type Alanlar = {
  adSoyad: string;
  telefon: string;
  eposta: string;
  sektor: string;
  hedef: string;
};

const BOS: Alanlar = { adSoyad: "", telefon: "", eposta: "", sektor: "", hedef: "" };

// Formun kullanildigi sayfaya gore degisen metinler. /teklif varsayilanlarla,
// /ai-urun-gorseli kendi etiketleriyle calisir; alan adlari ve sunucuya giden
// veri ayni kalir.
export type TeklifFormAyar = {
  kaynak?: string;
  baslik?: string;
  spot?: string;
  // Cekimli / cekimsiz secimi. Sosyal medya disindaki sayfalarda kapatilir.
  modelSecimi?: boolean;
  // Model secimi kapaliyken bildirim e-postasinin "Konu" satirina yazilir
  konu?: string;
  // Form karti kaydirirken ekranda kalsin mi (yalnizca hero icinde anlamli)
  yapiskan?: boolean;
  sektorEtiket?: string;
  sektorOrnek?: string;
  sektorHata?: string;
  hedefEtiket?: string;
  hedefOrnek?: string;
  whatsappMesaj?: string;
};

// Sosyal medya yonetiminin iki calisma modeli. "anahtar" adres cubugundaki
// ?model= degeriyle ve iki-model.tsx icindeki baglantilarla eslesir.
const MODELLER = [
  { anahtar: "cekimli", ad: "Çekimli", not: "Ekibimiz çeker" },
  { anahtar: "cekimsiz", ad: "Çekimsiz", not: "Çekim günü yok" },
  { anahtar: "kararsiz", ad: "Kararsızım", not: "Birlikte seçelim" },
];

const WHATSAPP_NUMARA = "905388654405";

// Sunucudaki spam filtresi baglanti iceren gonderimi sessizce reddeder
// (spam-filtresi.ts, LINK_DESENI). Ziyaretci magaza adresini yapistirirsa
// lead kaybolmasin diye ayni desen burada gorunur bir uyariya cevrilir.
const BAGLANTI_DESENI = /(https?:\/\/|www\.)/i;
const BAGLANTI_UYARISI = "Bağlantı yerine marka ya da mağaza adınızı yazın";

// Turkiye numarasi: 10 hane, mobil 5 ya da sabit hat 2/3/4 ile baslar
function telefonGecerliMi(ham: string) {
  let rakamlar = ham.replace(/\D/g, "");
  if (rakamlar.startsWith("0090")) rakamlar = rakamlar.slice(4);
  else if (rakamlar.startsWith("90") && rakamlar.length > 10) rakamlar = rakamlar.slice(2);
  else if (rakamlar.startsWith("0")) rakamlar = rakamlar.slice(1);
  return rakamlar.length === 10 && /^[2345]/.test(rakamlar);
}

export default function TeklifForm({
  kaynak = "Teklif Sayfası",
  baslik = "Markanıza özel teklif alın",
  spot = "Formu doldurun, size uygun çalışma modelini ve fiyatı içeren teklif sunumunu hazırlayalım.",
  modelSecimi = true,
  konu,
  yapiskan = true,
  sektorEtiket = "Sektör",
  sektorOrnek = "Restoran, otel, klinik, mağaza",
  sektorHata = "Sektörünüzü giriniz",
  hedefEtiket = "Hedefiniz (isteğe bağlı)",
  hedefOrnek = "Daha fazla rezervasyon, bilinirlik, satış",
  whatsappMesaj = "Merhaba, teklif almak istiyorum.",
}: TeklifFormAyar) {
  const [veri, setVeri] = useState<Alanlar>(BOS);
  const [model, setModel] = useState("");
  const [hatalar, setHatalar] = useState<Partial<Alanlar>>({});
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [gonderildi, setGonderildi] = useState(false);
  // Bot tuzaklari: gorunmez alan ve formun doldurulma suresi
  const [tuzak, setTuzak] = useState("");
  const formSuresi = useFormSuresi();
  const bilet = useFormBileti();

  // Reklamdan gelen ziyaretcinin UTM / fbclid bilgisini oturuma yaz
  useEffect(() => {
    atifKaydet();
  }, []);

  // Model, baska sayfadan ?model= ile ya da ayni sayfadaki bir baglantidan
  // gelebilir; iki durumda da ziyaretci secimini formda hazir bulur.
  useEffect(() => {
    if (!modelSecimi) return;
    const gecerli = (deger: string | null) =>
      MODELLER.some((secenek) => secenek.anahtar === deger) ? (deger as string) : "";
    const adresten = gecerli(new URLSearchParams(window.location.search).get("model"));
    if (adresten) setModel(adresten);
    const dinle = (olay: Event) => {
      const secilen = gecerli((olay as CustomEvent<string>).detail);
      if (secilen) setModel(secilen);
    };
    window.addEventListener(MODEL_OLAYI, dinle);
    return () => window.removeEventListener(MODEL_OLAYI, dinle);
  }, [modelSecimi]);

  const modelAdi = MODELLER.find((secenek) => secenek.anahtar === model)?.ad;
  // Bildirim e-postasinda "Konu" satirinda gorunur
  const konuSatiri = modelSecimi ? (modelAdi ? `Model: ${modelAdi}` : undefined) : konu;

  const degistir = (olay: React.ChangeEvent<HTMLInputElement>) => {
    setVeri({ ...veri, [olay.target.name]: olay.target.value });
    setHatalar({ ...hatalar, [olay.target.name]: undefined });
  };

  const dogrula = () => {
    const yeni: Partial<Alanlar> = {};
    const ad = veri.adSoyad.trim();
    if (ad.length < 3) yeni.adSoyad = "Adınızı giriniz";
    else if (/\d/.test(ad)) yeni.adSoyad = "Adınızı harflerle giriniz";
    // Turkiye numarasi bicimi: yanlis yazilan numara lead'i ulasilmaz kilar
    if (!telefonGecerliMi(veri.telefon)) yeni.telefon = "Geçerli bir telefon numarası giriniz";
    // E-posta istege bagli; girildiyse bicimi dogru olmali
    if (veri.eposta.trim() && !/^\S+@\S+\.\S+$/.test(veri.eposta.trim())) {
      yeni.eposta = "Geçerli bir e-posta adresi giriniz";
    }
    const sektor = veri.sektor.trim();
    if (sektor.length < 2) yeni.sektor = sektorHata;
    else if (BAGLANTI_DESENI.test(sektor)) yeni.sektor = BAGLANTI_UYARISI;
    else if (!/[a-zçğıöşüA-ZÇĞİÖŞÜ]/.test(sektor)) yeni.sektor = "Bu alanı harflerle yazınız";
    if (BAGLANTI_DESENI.test(veri.hedef)) yeni.hedef = BAGLANTI_UYARISI;
    setHatalar(yeni);
    return Object.keys(yeni).length === 0;
  };

  const gonder = async (olay: React.FormEvent) => {
    olay.preventDefault();
    if (gonderiliyor || !dogrula()) return;
    setGonderiliyor(true);

    // Once e-posta bildirimi: lead otomatik olarak posta kutusuna duser.
    const sonuc = await leadKaydetVeBekle({
      kaynak,
      adSoyad: veri.adSoyad,
      telefon: veri.telefon,
      eposta: veri.eposta,
      sektor: veri.sektor,
      hedef: veri.hedef,
      konu: konuSatiri,
      website: tuzak,
      sureSaniye: formSuresi(),
      bilet,
    });

    // Meta Pixel yalnizca gercek lead'lerde tetiklenir.
    // Spam gonderimler donusum olarak sayilsaydi reklam optimizasyonu bozulurdu.
    if (sonuc.sayilir) {
      trackLead({ content_name: kaynak, content_category: veri.sektor });
    }

    // E-posta altyapisi ulasilamazsa lead kaybolmasin diye WhatsApp yedegi devreye girer
    if (!sonuc.ok) {
      const mesaj =
        `Merhaba, teklif sayfasindan yaziyorum.%0A%0A` +
        `*Ad Soyad:* ${encodeURIComponent(veri.adSoyad)}%0A` +
        `*Telefon:* ${encodeURIComponent(veri.telefon)}%0A` +
        (veri.eposta ? `*E-posta:* ${encodeURIComponent(veri.eposta)}%0A` : "") +
        (konuSatiri ? `*${encodeURIComponent(konuSatiri)}*%0A` : "") +
        `*${encodeURIComponent(sektorEtiket)}:* ${encodeURIComponent(veri.sektor)}%0A` +
        `*Not:* ${encodeURIComponent(veri.hedef)}`;
      whatsappAc(`https://wa.me/${WHATSAPP_NUMARA}?text=${mesaj}`);
    }

    setVeri(BOS);
    setTuzak("");
    setGonderiliyor(false);
    setGonderildi(true);
  };

  if (gonderildi) {
    return (
      <div className={`${styles.formKart} ${yapiskan ? "" : styles.formKartDuz}`}>
        <div className={styles.tesekkur}>
          <h2 className={styles.tesekkurBaslik}>Talebiniz bize ulaştı</h2>
          <p className={styles.tesekkurMetin}>
            Bilgilerinizi aldık. Ekibimiz aynı gün içinde dönüş yapıp markanıza özel
            teklif sunumunu paylaşacak.
          </p>
          <a className={styles.tesekkurBaglanti} href={`https://wa.me/${WHATSAPP_NUMARA}`} target="_blank" rel="noopener noreferrer">
            Beklemeden WhatsApp üzerinden yazmak isterim
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.formKart} ${yapiskan ? "" : styles.formKartDuz}`}>
      <h2 className={styles.formBaslik}>{baslik}</h2>
      <p className={styles.formSpot}>{spot}</p>

      <form onSubmit={gonder} noValidate>
        <BotTuzagi deger={tuzak} degistir={setTuzak} alanId="teklif-website" />

        {modelSecimi && (
          <div className={styles.alan}>
            <span className={styles.etiket} id="teklif-model-etiket">
              Çalışma modeli (isteğe bağlı)
            </span>
            <div className={styles.modeller} role="radiogroup" aria-labelledby="teklif-model-etiket">
              {MODELLER.map((secenek) => (
                <button
                  key={secenek.anahtar}
                  type="button"
                  role="radio"
                  aria-checked={model === secenek.anahtar}
                  className={`${styles.modelSecenek} ${model === secenek.anahtar ? styles.modelSecili : ""}`}
                  // Secili olana ikinci tiklama secimi kaldirir; alan zorunlu degil
                  onClick={() => setModel(model === secenek.anahtar ? "" : secenek.anahtar)}
                >
                  <span className={styles.modelAd}>{secenek.ad}</span>
                  <span className={styles.modelNot}>{secenek.not}</span>
                </button>
              ))}
            </div>
          </div>
        )}

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
          <label className={styles.etiket} htmlFor="teklif-sektor">{sektorEtiket}</label>
          <input
            id="teklif-sektor"
            name="sektor"
            className={styles.girdi}
            type="text"
            placeholder={sektorOrnek}
            value={veri.sektor}
            onChange={degistir}
          />
          {hatalar.sektor && <span className={styles.hataMetni}>{hatalar.sektor}</span>}
        </div>

        <div className={styles.alan}>
          <label className={styles.etiket} htmlFor="teklif-hedef">{hedefEtiket}</label>
          <input
            id="teklif-hedef"
            name="hedef"
            className={styles.girdi}
            type="text"
            placeholder={hedefOrnek}
            value={veri.hedef}
            onChange={degistir}
          />
          {hatalar.hedef && <span className={styles.hataMetni}>{hatalar.hedef}</span>}
        </div>

        <button className={styles.gonder} type="submit" disabled={gonderiliyor}>
          {gonderiliyor ? "Gönderiliyor..." : "Teklif İste"}
        </button>
      </form>

      {/* Form doldurmak istemeyen ziyaretci icin ikinci yol. Tiklama, site
          genelindeki dinleyici (meta-pixel-events.tsx) ile Contact olarak sayilir. */}
      <div className={styles.ayrac}>
        <span>ya da</span>
      </div>
      <a
        className={styles.whatsappSecenek}
        href={`https://wa.me/${WHATSAPP_NUMARA}?text=${encodeURIComponent(whatsappMesaj)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp&apos;tan yazın
      </a>

      <p className={styles.formNot}>
        Bilgileriniz yalnızca teklif hazırlamak için kullanılır, üçüncü kişilerle
        paylaşılmaz. Ödemenizi dilerseniz kredi kartıyla yapabilirsiniz.
      </p>
    </div>
  );
}
