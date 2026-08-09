import type { Metadata } from "next";
import ReferanslarMain from "@/page-components/referanslar/referanslar-main";

export const metadata: Metadata = {
  title: "Referanslarımız | Studio Gria",
  description:
    "Otelden restorana, güzellik markasından üretime kadar birlikte çalıştığımız markalar. Studio Gria, İstanbul merkezli dijital medya ajansı.",
  alternates: { canonical: "https://studiogria.com/referanslar" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Studio Gria",
    title: "Referanslarımız | Studio Gria",
    description:
      "Birlikte çalıştığımız markalar ve her biri için ürettiğimiz işler.",
    url: "https://studiogria.com/referanslar",
  },
};

export default function ReferanslarSayfasi() {
  return <ReferanslarMain />;
}
