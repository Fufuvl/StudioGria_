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

// Hizmet, portfolyo ve iletişim gibi niyet taşıyan sayfaların görüntülenmesi
export function trackViewContent(params?: PixelEventParams) {
  trackPixelEvent("ViewContent", params);
}

// Site içi arama (SSS sayfasındaki soru arama kutusu)
export function trackSearch(searchString: string) {
  trackPixelEvent("Search", { search_string: searchString });
}

// ViewContent gönderilecek sayfalar. Buraya girmeyen sayfalar yalnızca PageView üretir,
// böylece ilgi sinyali gerçekten niyet taşıyan sayfalarda toplanır.
const VIEW_CONTENT_PAGES: {
  match: (pathname: string) => boolean;
  content_name: string;
  content_category: string;
}[] = [
  {
    match: (p) => p === "/service" || p === "/service-details",
    content_name: "Hizmetler",
    content_category: "Hizmet",
  },
  {
    match: (p) => p === "/ai-destekli-cozumler",
    content_name: "AI Destekli Çözümler",
    content_category: "Hizmet",
  },
  {
    match: (p) => p.startsWith("/portfolio"),
    content_name: "Portfolyo",
    content_category: "Portfolyo",
  },
  {
    match: (p) => p === "/contact",
    content_name: "İletişim Sayfası",
    content_category: "İletişim",
  },
  {
    match: (p) => p === "/teklif",
    content_name: "Teklif Sayfası",
    content_category: "Kampanya",
  },
];

export function getViewContentParams(pathname: string): PixelEventParams | null {
  const page = VIEW_CONTENT_PAGES.find((item) => item.match(pathname));
  if (!page) return null;
  return {
    content_name: page.content_name,
    content_category: page.content_category,
  };
}
