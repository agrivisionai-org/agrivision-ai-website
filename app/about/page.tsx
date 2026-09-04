import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { About } from '@/components/sections/About';
import { Purpose } from '@/components/sections/Purpose';
import { Team } from '@/components/sections/Team';
import { Sustainability } from '@/components/sections/Sustainability';
import { SkipTarget } from '@/components/SkipTarget';

export const metadata: Metadata = {
  title: 'About — Mission, Team & Founder',
  description:
    'AGRIVISION AI is a Detroit-based company building AI-first tools for global agriculture. Meet the founder, the mission, and the team behind YieldAI Global.',
  alternates: { canonical: 'https://agrivisionai.org/about' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/about',
    title: 'About AGRIVISION AI — Mission, Team & Founder',
    description:
      'Who we are: a Detroit-based company building AI-first tools for global agriculture, founded by Vijesh Reddy Golamari.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'About AGRIVISION AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'About AGRIVISION AI',
    description: 'Our mission, our team, and the founder building YieldAI Global.',
    images: ['https://agrivisionai.org/opengraph-image.png'],
  },
};

export default function AboutPage() {
  return (
    <main className="relative pt-24">
      <Nav />
      <SkipTarget />
      <About />
      <Purpose />
      <Team />
      <Sustainability />
      <Footer />
    </main>
  );
}
