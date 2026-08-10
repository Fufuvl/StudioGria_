// Form gönderimlerinin ortak akışı:
// 1. Veri sunucuya kaydedilir (e-posta bildirimi)
// 2. WhatsApp açılır
// Kayıt isteği beklenmeden gönderilir, böylece WhatsApp penceresi kullanıcı
// tıklamasının hemen ardından açılır ve tarayıcı engeline takılmaz.

export type LeadVerisi = {
  kaynak: string;
  adSoyad?: string;
  telefon?: string;
  eposta?: string;
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

// Sonucu beklenen kayıt: e-posta bildirimi gerçekten gitti mi bilmek istediğimizde.
// ok:false dönerse (anahtar tanımsız, sunucu hatası, ağ sorunu) çağıran taraf
// WhatsApp yedeğine düşebilir; lead hiçbir durumda kaybolmaz.
export async function leadKaydetVeBekle(veri: LeadVerisi): Promise<{ ok: boolean }> {
  try {
    const yanit = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(veri),
      keepalive: true,
    });
    const govde = await yanit.json().catch(() => null);
    return { ok: Boolean(yanit.ok && govde && govde.ok) };
  } catch {
    return { ok: false };
  }
}

// Mobil tarayıcılar window.open'ı engelleyebiliyor; engellenirse aynı sekmede açarız
export function whatsappAc(url: string) {
  const pencere = window.open(url, "_blank");
  if (!pencere) {
    window.location.href = url;
  }
}
