import { Metadata } from "next";
import PortfolioDetailsShowcaseMain from "@/pages/portfolio/details/portfolio-showcase-details-main";

export const metadata: Metadata = {
  title: "Studio Gria - Ana Sayfa",
};

export default function Home() {
  return (
    <>
      <PortfolioDetailsShowcaseMain />
    </>
  );
}
