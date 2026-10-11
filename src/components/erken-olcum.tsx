import Script from "next/script";
import { META_PIXEL_ID } from "@/utils/meta-pixel";

// REKLAM INIS SAYFASI OLCUMU (6 Eki 2026): sitenin genelinde olcum kodlari
// hiz icin lazyOnload ile gec yuklenir. Reklamdan gelip hizla cikan
// ziyaretcinin PageView'i kaybolmasin diye inis sayfalarinda ayni kodlar
// afterInteractive ile erken yuklenir. Kimlikler layout.tsx ile ayni
// oldugu icin next/script ikinciyi yuklemez; cift PageView olusmaz.
export default function ErkenOlcum() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4EWVJ0Y6EC"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4EWVJ0Y6EC');
          `,
        }}
      />
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}
