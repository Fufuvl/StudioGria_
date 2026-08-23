import { MetadataRoute } from "next";
import { hizmetler } from "@/data/hizmet-data";
import { blogYazilari } from "@/data/blog-yazilari";
import { bolgeler } from "@/data/bolge-data";
import { SITE_URL } from "@/data/kurulus-data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Alan adi tek kaynaktan gelir: src/data/kurulus-data.ts
  const baseUrl = SITE_URL;
  const lastModified = new Date();

  // Blog listesinin tazeligi en yeni yazinin tarihinden gelir; her derlemede
  // "bugun" yazmak arama motorlarina yanlis tazelik sinyali verir.
  const enYeniYazi = blogYazilari
    .map((yazi) => new Date(yazi.guncelleme ?? yazi.tarih).getTime())
    .sort((a, b) => b - a)[0];
  const blogSonGuncelleme = enYeniYazi ? new Date(enYeniYazi) : lastModified;

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
      url: `${baseUrl}/blog`,
      lastModified: blogSonGuncelleme,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bolgeler`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
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
      url: `${baseUrl}/gizlilik`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
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

  // Blog yazilari: yazi guncellendiyse guncelleme tarihi, yoksa yayin tarihi
  const blogSayfalari: MetadataRoute.Sitemap = blogYazilari.map((yazi) => ({
    url: `${baseUrl}/blog/${yazi.slug}`,
    lastModified: new Date(yazi.guncelleme ?? yazi.tarih),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Bolge sayfalari: yerel arama sonuclari icin
  const bolgeSayfalari: MetadataRoute.Sitemap = bolgeler.map((bolge) => ({
    url: `${baseUrl}/bolgeler/${bolge.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...sabitSayfalar, ...hizmetSayfalari, ...blogSayfalari, ...bolgeSayfalari];
}
