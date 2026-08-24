import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ must stay crawlable: the entire compiled stylesheet and JS live there,
        // and blocking it makes Google's render pass see the site unstyled.
        disallow: ['/api/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
    ],
    sitemap: [
      'https://agrivisionai.org/sitemap.xml',
      'https://agrivisionai.org/image-sitemap.xml',
    ],
    host: 'https://agrivisionai.org',
  };
}
