import { MetadataRoute } from "next";
import { kittensData } from "@/data/kittens";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imperiumpersians.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gatitos`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const kittenPages: MetadataRoute.Sitemap = kittensData.map((kitten) => ({
    url: `${baseUrl}/gatitos/${kitten.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...kittenPages];
}
