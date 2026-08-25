import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Careers } from '@/components/sections/Careers';

export const metadata: Metadata = {
  title: 'Careers & Internships',
  description:
    'Remote Learning & Internship Program in AI/ML, generative AI, software, data, product, design, AgriTech research, business and sales. Fully remote, open worldwide.',
  alternates: { canonical: 'https://agrivisionai.org/careers' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/careers',
    title: 'Careers & Internships at AGRIVISION AI',
    description:
      'Remote Learning & Internship Program — AI/ML, generative AI, software, data, product, design, AgriTech research, business and sales. Fully remote, open worldwide.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'Careers at AGRIVISION AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'Careers at AGRIVISION AI',
    description: 'Remote internships — AI/ML, generative AI, software, data, product, design, research and sales.',
    images: ['https://agrivisionai.org/opengraph-image.png'],
  },
};

import { roles } from './roles-data';

const BASE = 'https://agrivisionai.org';

// The JobPosting nodes moved to /careers/[role]. Google wants one posting per URL, and
// duplicating them here would have the index page competing with the role pages.
// This page carries an ItemList pointing at them instead.
const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AGRIVISION AI Learning & Internship Program',
  numberOfItems: roles.length,
  itemListElement: roles.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.title,
    url: `${BASE}/careers/${r.slug}`,
  })),
};

export default function CareersPage() {
  return (
    <main className="relative pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <Nav />
      <Careers />
      <Footer />
    </main>
  );
}
