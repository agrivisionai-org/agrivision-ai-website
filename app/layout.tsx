import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://agrivisionai.org'),
  title: {
    default: 'AGRIVISION AI — Building the Future of Agriculture with AI',
    template: '%s · AGRIVISION AI',
  },
  description:
    'AGRIVISION AI builds intelligent agriculture products and predictive systems. Flagship YieldAI Global delivers crop intelligence, yield prediction, and AI decision-making for the global agriculture ecosystem.',
  keywords: [
    'AgriTech',
    'AI Agriculture',
    'YieldAI Global',
    'Precision Agriculture',
    'Crop Intelligence',
    'Predictive Farming',
    'Sustainable Agriculture',
    'Enterprise SaaS Agriculture',
  ],
  authors: [{ name: 'AGRIVISION AI' }],
  creator: 'AGRIVISION AI',
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org',
    title: 'AGRIVISION AI — Building the Future of Agriculture with AI',
    description:
      'AI-first technology company building the next generation of AgriTech products. Flagship: YieldAI Global.',
    siteName: 'AGRIVISION AI',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    creator: '@yieldaiglobal',
    title: 'AGRIVISION AI',
    description: 'Building the Future of Agriculture with Artificial Intelligence.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4F6F1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
