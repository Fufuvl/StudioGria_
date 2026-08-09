// Meta Pixel yardımcıları
// Piksel: "Gria Web Site" (Meta Events Manager)
// ID'yi Vercel'de NEXT_PUBLIC_META_PIXEL_ID ile de verebilirsiniz; verilmezse aşağıdaki değer kullanılır.
export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1657840648966297";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

type PixelEventParams = Record<string, unknown>;

// fbq henüz yüklenmediyse ya da sunucu tarafındaysak sessizce geçer
export function trackPixelEvent(event: string, params?: PixelEventParams) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

// Form dolduran ziyaretçi: reklam optimizasyonunun hedef olayı
export function trackLead(params?: PixelEventParams) {
  trackPixelEvent("Lead", params);
}

// İletişime geçme niyeti (WhatsApp, telefon, e-posta)
export function trackContact(params?: PixelEventParams) {
  trackPixelEvent("Contact", params);
}
