import React from "react";
import { Metadata } from "next";
import { getProjectBySlug } from "@/data/project-data";
import PortfolioDetailsOneMain from "@/pages/portfolio/details/portfolio-details-1-main";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  return {
    title: project ? `${project.title} - Proje Detayı` : "Proje Detayı",
  };
}

export default function PortfolioDetailsBySlugPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  return <PortfolioDetailsOneMain project={project} />;
}


