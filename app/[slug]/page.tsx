import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductLanding from '@/components/ProductLanding';
import { productLandings } from '@/data/productLandings';

export function generateStaticParams() {
  return Object.keys(productLandings).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const config = productLandings[slug];
  if (!config) return {};
  const plainTitle = config.title.replace(/<[^>]+>/g, '');
  return {
    title: `${plainTitle} | Aprende PMU Venezuela`,
    description: config.lead,
    alternates: { canonical: `https://aprendepmuvenezuela.com/${slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = productLandings[slug];
  if (!config) notFound();
  return <ProductLanding config={config} />;
}
