import type { Metadata } from "next";
import ReferanslarMain from "@/page-components/referanslar/referanslar-main";
import { referanslar } from "@/data/referans-data";
import {
  KIMLIK,
  SITE_URL,
  grafSemasi,
  kirintiSemasi,
} from "@/data/kurulus-data";

export const metadata: Metadata = {
  title: "Referanslarımız: 39+ Marka, 20+ Sektör | Studio Gria",
  description:
    "Beşiktaş Spor Kulübü'nden The Oba Hotel'e, restorandan sanayiye birlikte çalıştığımız 39'dan fazla marka. Sektöre göre süzün, ne yaptığımızı görün.",
  alternates: { canonical: "/referanslar" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Studio Gria",
    title: "Referanslarımız | Studio Gria",
    description:
      "Birlikte çalıştığımız markalar ve her biri için ürettiğimiz işler.",
    url: "https://www.studiogria.com/referanslar",
  },
};

// Referans listesi yapisal veri olarak da verilir. "Studio Gria hangi
// markalarla calisti" sorusuna yanit uretebilmek icin motorlarin ihtiyaci
// olan tek sey bu liste.
const sayfaSemasi = grafSemasi([
  {
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/referanslar#sayfa`,
    url: `${SITE_URL}/referanslar`,
    name: "Studio Gria referansları",
    description:
      "Studio Gria'nın birlikte çalıştığı markalar, sektörleri ve her marka için üstlenilen iş.",
    inLanguage: "tr-TR",
    isPartOf: { "@id": KIMLIK.website },
    about: { "@id": KIMLIK.kurulus },
    mainEntity: {
      "@type": "ItemList",
      name: "Birlikte çalıştığımız markalar",
      numberOfItems: referanslar.length,
      itemListElement: referanslar.map((referans, sira) => ({
        "@type": "ListItem",
        position: sira + 1,
        name: referans.ad,
        description: `${referans.sektor}: ${referans.is}`,
      })),
    },
  },
  kirintiSemasi([
    { ad: "Ana sayfa", yol: "/" },
    { ad: "Referanslarımız", yol: "/referanslar" },
  ]),
]);

export default function ReferanslarSayfasi() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sayfaSemasi }}
      />
      <ReferanslarMain />
    </>
  );
}
