"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  getViewContentParams,
  trackContact,
  trackViewContent,
} from "@/utils/meta-pixel";

// Meta Pixel standart olaylarının site geneli kurulumu:
// 1. PageView: App Router geçişlerinde tekrar gönderilir (base kod yalnızca ilk açılışta gönderir)
// 2. ViewContent: hizmet, portfolyo ve iletişim sayfalarında
// 3. Contact: telefon, e-posta ve WhatsApp bağlantılarına tıklandığında
export default function MetaPixelEvents() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // İlk yüklemedeki PageView'i base kod zaten gönderdi, çift saymayalım
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
    } else if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }

    const viewContent = getViewContentParams(pathname || "");
    if (viewContent) {
      trackViewContent(viewContent);
    }
  }, [pathname]);

  useEffect(() => {
    // Tek bir dinleyici tüm sitedeki iletişim bağlantılarını yakalar,
    // böylece footer, menü ve mobil panel ayrı ayrı düzenlenmek zorunda kalmaz.
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackContact({ content_name: "Telefon" });
      } else if (href.startsWith("mailto:")) {
        trackContact({ content_name: "E-posta" });
      } else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        trackContact({ content_name: "WhatsApp" });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
