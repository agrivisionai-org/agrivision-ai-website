import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Careers } from '@/components/sections/Careers';

export const metadata: Metadata = {
  title: 'Careers & Internships',
  description:
    'Unpaid remote internships in AI/ML, product, agriculture research and sales. Open to students on OPT and CPT in the USA, and in India.',
  alternates: { canonical: 'https://agrivisionai.org/careers' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/careers',
    title: 'Careers & Internships at AGRIVISION AI',
    description:
      'Unpaid remote internships at AGRIVISION AI — AI/ML, product, agriculture research and sales. Build AI tools that reach real farmers.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'Careers at AGRIVISION AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'Careers at AGRIVISION AI',
    description: 'Unpaid remote internships — AI/ML, product, agriculture research and sales.',
    images: ['https://agrivisionai.org/opengraph-image.png'],
  },
};

export default function CareersPage() {
  return (
    <main className="relative pt-24">
      <Nav />
      <Careers />
      <Footer />
    </main>
  );
}
