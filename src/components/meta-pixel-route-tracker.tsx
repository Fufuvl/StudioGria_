"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// App Router'da sayfa geçişleri tam sayfa yenilemesi yapmadığı için piksel base kodu
// PageView'i yalnızca ilk açılışta gönderir. Bu bileşen sonraki her route değişiminde tekrar gönderir.
export default function MetaPixelRouteTracker() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // İlk yüklemedeki PageView'i base kod zaten gönderdi, çift saymayalım
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
