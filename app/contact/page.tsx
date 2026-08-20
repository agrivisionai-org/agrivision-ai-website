import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch about partnerships, press, careers or general enquiries — or start a free trial of YieldAI Global, our AI farming assistant.',
  alternates: { canonical: 'https://agrivisionai.org/contact' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/contact',
    title: 'Contact AGRIVISION AI',
    description: 'Partnerships, press, careers, or general enquiries — get in touch with the AGRIVISION AI team.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'Contact AGRIVISION AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'Contact AGRIVISION AI',
    description: 'Partnerships, press, careers, or general enquiries.',
    images: ['https://agrivisionai.org/opengraph-image.png'],
  },
};

export default function ContactPage() {
  return (
    <main className="relative pt-24">
      <Nav />
      <Contact />
      <Footer />
    </main>
  );
}
