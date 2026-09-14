import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aprendepmuvenezuela.com';

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/biblioteca`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/diseno-de-cejas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-efecto-polvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-micropigmentacion-labios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-hairstroke`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-microblading`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-micropigmentacion-ojos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-human-powder`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-labios-artisticos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-pigmentologia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/curso-remocion-cejas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/especializacion-pmu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/masterclass-trazos-hairstroke`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/masterclass-maniobras-maestras`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/masterclass-labios-oscuros`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guia-trazos-microblading`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/manual-trazos-hairstroke`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guia-pigmentologia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ebook-efecto-polvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
