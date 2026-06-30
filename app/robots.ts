import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
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
