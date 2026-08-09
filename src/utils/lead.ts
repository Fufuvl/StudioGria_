// Form gönderimlerinin ortak akışı:
// 1. Veri sunucuya kaydedilir (e-posta bildirimi)
// 2. WhatsApp açılır
// Kayıt isteği beklenmeden gönderilir, böylece WhatsApp penceresi kullanıcı
// tıklamasının hemen ardından açılır ve tarayıcı engeline takılmaz.

export type LeadVerisi = {
  kaynak: string;
  adSoyad?: string;
  telefon?: string;
  sektor?: string;
  hedef?: string;
  konu?: string;
  mesaj?: string;
};

export function leadKaydet(veri: LeadVerisi) {
  try {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(veri),
      // Sayfa WhatsApp'a giderse bile istek tamamlanır
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Kayıt başarısız olsa da kullanıcının WhatsApp akışı bozulmamalı
  }
}

// Mobil tarayıcılar window.open'ı engelleyebiliyor; engellenirse aynı sekmede açarız
export function whatsappAc(url: string) {
  const pencere = window.open(url, "_blank");
  if (!pencere) {
    window.location.href = url;
  }
}
