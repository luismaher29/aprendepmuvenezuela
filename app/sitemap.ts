import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aprendepmuvenezuela.com';

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/biblioteca`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/diseno-de-cejas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-efecto-polvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
