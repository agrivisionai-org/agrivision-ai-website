import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Careers } from '@/components/sections/Careers';

export const metadata: Metadata = {
  title: 'Careers & Internships',
  description:
    'We are hiring an Agriculture Research Intern (remote, India) to help make YieldAI Global’s advice to farmers accurate and trustworthy.',
  alternates: { canonical: 'https://agrivisionai.org/careers' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/careers',
    title: 'Careers & Internships at AGRIVISION AI',
    description:
      'Open roles at AGRIVISION AI, including an Agriculture Research Intern (remote, India). Build AI tools that reach real farmers.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'Careers at AGRIVISION AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'Careers at AGRIVISION AI',
    description: 'We are hiring an Agriculture Research Intern (remote, India).',
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
