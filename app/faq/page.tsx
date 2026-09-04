import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/sections/FAQ';
import { SkipTarget } from '@/components/SkipTarget';

export const metadata: Metadata = {
  title: 'FAQ — AGRIVISION AI & YieldAI Global',
  description:
    'Frequently asked questions about AGRIVISION AI and YieldAI Global — what it does, where it is available, languages, pricing, and how the free trial works.',
  alternates: { canonical: 'https://agrivisionai.org/faq' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/faq',
    title: 'FAQ — AGRIVISION AI & YieldAI Global',
    description:
      'Answers about YieldAI Global: availability (India, USA, Canada), languages, live data sources, and the free trial.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'AGRIVISION AI FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'FAQ — AGRIVISION AI',
    description: 'Frequently asked questions about AGRIVISION AI and YieldAI Global.',
    images: ['https://agrivisionai.org/opengraph-image.png'],
  },
};

export default function FAQPage() {
  return (
    <main className="relative pt-24">
      <Nav />
      <SkipTarget />
      <FAQ />
      <Footer />
    </main>
  );
}
