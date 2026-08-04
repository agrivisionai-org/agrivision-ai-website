import type { MetadataRoute } from 'next';
import { productSlugs } from './products/products-data';
import { postSlugs } from './blog/blog-data';

const BASE = 'https://agrivisionai.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const d = (s: string) => new Date(s);
  return [
    { url: BASE, lastModified: d('2026-07-21'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: d('2026-07-21'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/founder`, lastModified: d('2026-08-04'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/careers`, lastModified: d('2026-07-21'), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: d('2026-07-21'), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/faq`, lastModified: d('2026-07-21'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/products`, lastModified: d('2026-06-30'), changeFrequency: 'weekly', priority: 0.9 },
    ...productSlugs.map((slug) => ({
      url: `${BASE}/products/${slug}`,
      lastModified: d('2026-06-30'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE}/blog`, lastModified: d('2026-06-30'), changeFrequency: 'weekly', priority: 0.8 },
    ...postSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: d('2026-06-30'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${BASE}/press`, lastModified: d('2026-06-29'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/links`, lastModified: d('2026-06-29'), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: d('2026-06-30'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: d('2026-06-30'), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
