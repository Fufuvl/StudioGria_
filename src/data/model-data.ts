// Sosyal medya yonetiminin iki calisma modeli: produksiyonlu ve produksiyonsuz.
// Adlandirma kullanici karari (12 Eki 2026): "cekimli / cekimsiz" denmez.
// Ana sayfa, hizmet sayfasi ve /teklif ayni bolumu (components/iki-model.tsx)
// bu dosyadan besler; metin tek yerden degisir.
//
// Icerik teklif dosyasindaki iki paket hattiyla aynidir (cekim dahil paketler
// ve dijital uretim paketleri). Sitede fiyat yazilmaz; produksiyonsuz modelin
// gerekcesi "yapay zeka oldugu icin ucuz" degil, "cekim gunu maliyeti olmadigi
// icin ekonomik" olarak anlatilir.

export type ModelAnahtari = "produksiyonlu" | "produksiyonsuz";

export type CalismaModeli = {
  anahtar: ModelAnahtari;
  etiket: string;
  ad: string;
  ozet: string;
  gorsel: string;
  gorselAlt: string;
  gorselKonum: string;
  gorselNot: string;
  // Satir basliklari iki modelde ayni sirayla gelir; kartlar yan yana
  // dizildiginde satirlar karsilikli okunur.
  satirlar: { baslik: string; deger: string }[];
};

export const calismaModelleri: CalismaModeli[] = [
  {
    anahtar: "produksiyonlu",
    etiket: "Model 01",
    ad: "Prodüksiyonlu yönetim",
    ozet: "Ekibimiz işletmenize gelir; fotoğrafı ve videoyu kendi ekipmanıyla çeker.",
    gorsel: "/assets/img/inner-project/showcase/16.jpg",
    gorselAlt: "Studio Gria ekibinin bir restoranda çektiği sofra karesi",
    gorselKonum: "center 42%",
    gorselNot: "Sahada çekilen kare",
    satirlar: [
      { baslik: "İçerik kaynağı", deger: "O ayın çekimi: fotoğraf ve video" },
      { baslik: "Çekim günü", deger: "Ayda en az bir gün" },
      {
        baslik: "Kimler için",
        deger: "Mekanı, ekibi ve atmosferi anlatılması gereken işletmeler: restoran, otel, klinik, spor kulübü",
      },
      { baslik: "Bölge", deger: "İstanbul ve çevresi" },
      { baslik: "Bütçe", deger: "Çekim günü pakete dahildir" },
    ],
  },
  {
    anahtar: "produksiyonsuz",
    etiket: "Model 02",
    ad: "Prodüksiyonsuz yönetim",
    ozet: "Çekim günü planlanmaz; içerik elinizdeki görsellerden stüdyoda üretilir.",
    gorsel: "/assets/img/ai-solutions/urun-gorseli/lucea-vesper-bileklik-yapay-zeka-gorseli-2.jpg",
    gorselAlt: "Markanın gönderdiği fotoğraftan stüdyoda üretilmiş bileklik karesi",
    gorselKonum: "center 46%",
    gorselNot: "Stüdyoda üretilen kare",
    satirlar: [
      {
        baslik: "İçerik kaynağı",
        deger: "Elinizdeki ürün ve mekan görselleri, yapay zeka destekli üretim",
      },
      { baslik: "Çekim günü", deger: "Yok" },
      { baslik: "Kimler için", deger: "Ürün odaklı markalar ve e-ticaret" },
      { baslik: "Bölge", deger: "Türkiye geneli, uzaktan" },
      { baslik: "Bütçe", deger: "Çekim günü maliyeti olmadığı için daha ekonomik" },
    ],
  },
];

// Iki modelde de degismeyen kisim
export const modelOrtaklari = [
  "Rakip analizi ve strateji",
  "Aylık içerik planı ve metinler",
  "Gönderi, reels ve hikaye üretimi",
  "Meta reklam yönetimi",
  "Aylık performans raporu",
];

// Model secimi form ile sayfadaki baglantilar arasinda bu olayla tasinir
export const MODEL_OLAYI = "sg-model-sec";
