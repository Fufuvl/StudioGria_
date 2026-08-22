// Form gönderimlerinin ortak akışı:
// 1. Veri sunucuya kaydedilir (e-posta bildirimi)
// 2. WhatsApp açılır
// Kayıt isteği beklenmeden gönderilir, böylece WhatsApp penceresi kullanıcı
// tıklamasının hemen ardından açılır ve tarayıcı engeline takılmaz.
//
// Her gönderim iki bot tuzağı alanı taşır: görünmez honeypot (website) ve
// formun doldurulma süresi (sureSaniye). Değerlendirmeyi sunucu yapar.

export type LeadVerisi = {
  kaynak: string;
  adSoyad?: string;
  telefon?: string;
  eposta?: string;
  sektor?: string;
  hedef?: string;
  konu?: string;
  mesaj?: string;
  website?: string;
  sureSaniye?: number;
};

// Sunucunun yanıtı:
//   ok      istek sorunsuz tamamlandı mı
//   sayilir gerçek bir lead mi (spam filtresine takılan gönderimlerde false)
export type LeadYaniti = { ok: boolean; sayilir: boolean };

// Kaydı başlatır ve sonucu döndürür. Çağıran taraf sonucu beklemeden
// WhatsApp'ı açabilir, sonra dönen sözü Meta Pixel kararı için kullanabilir.
// ok:false dönerse (anahtar tanımsız, sunucu hatası, ağ sorunu) çağıran taraf
// WhatsApp yedeğine düşebilir; lead hiçbir durumda kaybolmaz.
export async function leadKaydetVeBekle(veri: LeadVerisi): Promise<LeadYaniti> {
  try {
    const yanit = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(veri),
      keepalive: true,
    });
    const govde = await yanit.json().catch(() => null);
    const ok = Boolean(yanit.ok && govde && govde.ok);
    // sayilir alanı yoksa (eski yanıt biçimi) gönderim gerçek kabul edilir
    const sayilir = ok && govde?.sayilir !== false;
    return { ok, sayilir };
  } catch {
    return { ok: false, sayilir: false };
  }
}

// Mobil tarayıcılar window.open'ı engelleyebiliyor; engellenirse aynı sekmede açarız
export function whatsappAc(url: string) {
  const pencere = window.open(url, "_blank");
  if (!pencere) {
    window.location.href = url;
  }
}
