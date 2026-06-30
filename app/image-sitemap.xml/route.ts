// Dedicated Google image sitemap (Next 14's MetadataRoute.Sitemap has no `images`
// field until a later release, so we emit the image: namespace ourselves).
// Helps Google Images discover and index the logo, brand card, and founder photo.

export const dynamic = 'force-static';

const BASE = 'https://agrivisionai.org';

type ImageEntry = { page: string; images: { loc: string; title: string }[] };

const ENTRIES: ImageEntry[] = [
  {
    page: `${BASE}/`,
    images: [
      { loc: `${BASE}/logo-square.png`, title: 'AGRIVISION AI logo' },
      { loc: `${BASE}/opengraph-image.png`, title: 'AGRIVISION AI — building YieldAI Global' },
      { loc: `${BASE}/founder.jpg`, title: 'Vijesh Reddy Golamari, Founder & CEO of AGRIVISION AI' },
    ],
  },
  {
    page: `${BASE}/press`,
    images: [{ loc: `${BASE}/press/agrivision-ai-logo.png`, title: 'AGRIVISION AI logo (press kit)' }],
  },
];

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const urls = ENTRIES.map(
    (e) => `  <url>
    <loc>${escapeXml(e.page)}</loc>
${e.images
  .map(
    (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`
  )
  .join('\n')}
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
