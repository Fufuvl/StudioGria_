import type { Metadata } from "next";
import ReferanslarMain from "@/page-components/referanslar/referanslar-main";

export const metadata: Metadata = {
  title: "Referanslarımız: 39+ Marka, 20+ Sektör | Studio Gria",
  description:
    "Beşiktaş Spor Kulübü'nden The Oba Hotel'e, restorandan sanayiye birlikte çalıştığımız 39'dan fazla marka. Sektöre göre süzün, her markada ne yaptığımızı görün.",
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

export default function ReferanslarSayfasi() {
  return <ReferanslarMain />;
}
