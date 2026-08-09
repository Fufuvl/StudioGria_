import { MetadataRoute } from "next";
import { hizmetler } from "@/data/hizmet-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://studiogria.com";
  const lastModified = new Date();

  const sabitSayfalar: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/teklif`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-destekli-cozumler`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/referanslar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Hizmet detay sayfalari katalogdan otomatik uretilir
  const hizmetSayfalari: MetadataRoute.Sitemap = hizmetler.map((hizmet) => ({
    url: `${baseUrl}/hizmetler/${hizmet.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...sabitSayfalar, ...hizmetSayfalari];
}
