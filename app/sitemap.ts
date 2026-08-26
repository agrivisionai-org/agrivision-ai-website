import type { MetadataRoute } from 'next';
import { productSlugs } from './products/products-data';
import { posts } from './blog/blog-data';
import { roleSlugs } from './careers/roles-data';

const BASE = 'https://agrivisionai.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const d = (s: string) => new Date(s);
  return [
    { url: BASE, lastModified: d('2026-07-21'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: d('2026-07-21'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/founder`, lastModified: d('2026-08-04'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/careers`, lastModified: d('2026-07-21'), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: d('2026-07-21'), changeFrequency: 'yearly', priority: 0.5 },
    // Ireland is not a live market; the page says so. Lower priority than live pages
    // and yearly change frequency, because it should not compete with them.
    { url: `${BASE}/ireland`, lastModified: d('2026-08-26'), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/faq`, lastModified: d('2026-07-21'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/products`, lastModified: d('2026-06-30'), changeFrequency: 'weekly', priority: 0.9 },
    ...productSlugs.map((slug) => ({
      url: `${BASE}/products/${slug}`,
      lastModified: d('2026-06-30'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE}/blog`, lastModified: d('2026-06-30'), changeFrequency: 'weekly', priority: 0.8 },
    // Translated posts carry their language alternates here too, so the pairing is declared
    // in the sitemap as well as in each page's head — Google accepts either, and the two
    // reinforce each other.
    ...roleSlugs.map((slug) => ({
      url: `${BASE}/careers/${slug}`,
      lastModified: d('2026-08-24'),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: d(p.updated ?? p.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      ...(p.altSlug
        ? {
            alternates: {
              languages: {
                en: p.lang === 'en' ? `${BASE}/blog/${p.slug}` : `${BASE}/blog/${p.altSlug}`,
                hi: p.lang === 'hi' ? `${BASE}/blog/${p.slug}` : `${BASE}/blog/${p.altSlug}`,
              },
            },
          }
        : {}),
    })),
    { url: `${BASE}/press`, lastModified: d('2026-06-29'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/links`, lastModified: d('2026-06-29'), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: d('2026-06-30'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: d('2026-06-30'), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
