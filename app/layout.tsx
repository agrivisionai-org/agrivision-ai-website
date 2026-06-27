import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_ID = 'G-DFX8SDNRYV';
const CLARITY_ID = 'xdmyfpauf4';

export const metadata: Metadata = {
  metadataBase: new URL('https://agrivisionai.org'),
  title: {
    default: 'AGRIVISION AI — Building the Future of Agriculture with AI',
    template: '%s · AGRIVISION AI',
  },
    description:
    'AGRIVISION AI is building intelligent agriculture products and predictive systems. Our flagship, YieldAI Global, is in development — crop advisory, pest intelligence, and AI decision-making, with IoT and yield prediction on the roadmap.',
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
