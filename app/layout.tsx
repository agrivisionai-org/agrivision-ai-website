import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_ID = 'G-DFX8SDNRYV';
const CLARITY_ID = 'xdmyfpauf4';

export const metadata: Metadata = {
  metadataBase: new URL('https://agrivisionai.org'),
  title: {
    default: 'AGRIVISION AI — AI Farming Assistant (YieldAI Global)',
    template: '%s · AGRIVISION AI',
  },
    description:
    'YieldAI Global, our AI farming assistant, is live in India, the USA & Canada — AI crop advice, live government market prices, weather and scheme guidance.',
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
  alternates: { canonical: 'https://agrivisionai.org' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://agrivisionai.org#organization',
  name: 'AGRIVISION AI',
  alternateName: 'Agrivisionai Inc',
  url: 'https://agrivisionai.org',
  logo: {
    '@type': 'ImageObject',
    url: 'https://agrivisionai.org/logo-square.png',
    contentUrl: 'https://agrivisionai.org/logo-square.png',
    width: 512,
    height: 512,
    caption: 'AGRIVISION AI logo',
  },
  image: 'https://agrivisionai.org/opengraph-image.png',
  description:
    'AI-first technology company building intelligent products for global agriculture. Flagship: YieldAI Global — AI-powered crop intelligence for extension workers across 40+ countries, built to work multilingually.',
  disambiguatingDescription:
    'AGRIVISION AI (Agrivisionai Inc) is a Detroit, Michigan-based company founded in 2026 by sole founder Vijesh Reddy Golamari. It is not affiliated with any other similarly named agricultural-technology project or company.',
  foundingDate: '2026-05-01',
  foundingLocation: {
    '@type': 'Place',
    name: 'Detroit, Michigan, United States',
  },
  founders: [
    {
      '@type': 'Person',
      '@id': 'https://agrivisionai.org#founder',
      name: 'Vijesh Reddy Golamari',
      jobTitle: 'Founder, CEO & AI Architect',
      image: {
        '@type': 'ImageObject',
        url: 'https://agrivisionai.org/founder.jpg',
        contentUrl: 'https://agrivisionai.org/founder.jpg',
        width: 1000,
        height: 829,
        caption: 'Vijesh Reddy Golamari, Founder & CEO of AGRIVISION AI',
        representativeOfPage: true,
      },
      sameAs: [
        'https://www.linkedin.com/in/vijesh-reddy-golamari/',
      ],
    },
  ],
  founder: {
    '@type': 'Person',
    '@id': 'https://agrivisionai.org#founder',
    name: 'Vijesh Reddy Golamari',
    jobTitle: 'Founder, CEO & AI Architect',
    image: {
      '@type': 'ImageObject',
      url: 'https://agrivisionai.org/founder.jpg',
      contentUrl: 'https://agrivisionai.org/founder.jpg',
      width: 1000,
      height: 829,
      caption: 'Vijesh Reddy Golamari, Founder & CEO of AGRIVISION AI',
      representativeOfPage: true,
    },
    sameAs: [
      'https://www.linkedin.com/in/vijesh-reddy-golamari/',
    ],
  },
  sameAs: [
    'https://www.linkedin.com/company/agrivisionai/',
    'https://x.com/yieldaiglobal',
    'https://www.instagram.com/agrivisionai.inc/',
    'https://github.com/agrivisionai-org',
    'https://www.linkedin.com/newsletters/7476661645046378496/',
  ],
  // Reciprocates the parentOrganization claim buildvaillant.com already makes,
  // so the two entities resolve as one corporate structure rather than one-way.
  subOrganization: {
    '@type': 'Organization',
    '@id': 'https://buildvaillant.com/#organization',
    name: 'BuildVaillant',
    url: 'https://buildvaillant.com',
    description:
      'Web and product development studio, and a venture of Agrivisionai Inc — websites, web apps, and digital products, hosted and supported for 365 days after launch under a written contract.',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'hello@agrivisionai.org',
      contactType: 'Customer Support',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      email: 'careers@agrivisionai.org',
      contactType: 'Recruiting',
      availableLanguage: ['English'],
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AGRIVISION AI',
  url: 'https://agrivisionai.org',
  publisher: { '@id': 'https://agrivisionai.org#organization' },
};

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://agrivisionai.org#founder',
  name: 'Vijesh Reddy Golamari',
  givenName: 'Vijesh Reddy',
  familyName: 'Golamari',
  jobTitle: 'Founder, CEO & AI Architect',
  description:
    'Sole founder and CEO of AGRIVISION AI (Agrivisionai Inc), a Detroit, Michigan AI agriculture company founded in 2026, and a Generative AI Engineer and Technical Lead at Symplore Inc.',
  image: {
    '@type': 'ImageObject',
    url: 'https://agrivisionai.org/founder.jpg',
    contentUrl: 'https://agrivisionai.org/founder.jpg',
    width: 1000,
    height: 829,
    caption: 'Vijesh Reddy Golamari, Founder & CEO of AGRIVISION AI',
    representativeOfPage: true,
  },
  worksFor: [
    { '@id': 'https://agrivisionai.org#organization' },
    { '@type': 'Organization', name: 'Symplore Inc' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/vijesh-reddy-golamari/',
  ],
};

const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AGRIVISION AI product family',
  description:
    'AI products for global agriculture built by AGRIVISION AI (Agrivisionai Inc).',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareApplication',
        '@id': 'https://agrivisionai.org#product-yieldai-global',
        name: 'YieldAI Global',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'AgTech · Crop Intelligence',
        operatingSystem: 'Web',
        url: 'https://agrivisionai.org/products/yieldai-global',
        description:
          'Flagship AI-powered agriculture platform, live in India, the USA & Canada — AI crop advice, live government market prices, weather and forecasting, government-scheme guidance, yield prediction, and a voice assistant in the farmer\'s own language. Available at https://yieldaiglobal.com.',
        publisher: { '@id': 'https://agrivisionai.org#organization' },
        creator: { '@id': 'https://agrivisionai.org#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'SoftwareApplication',
        '@id': 'https://agrivisionai.org#product-cropvision',
        name: 'CropVision',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'AgTech · Computer Vision',
        operatingSystem: 'Web',
        url: 'https://agrivisionai.org/products/cropvision',
        description:
          'Live computer-vision module inside YieldAI Global — photograph a plant for a likely disease diagnosis with an honest confidence level and clear next steps.',
        publisher: { '@id': 'https://agrivisionai.org#organization' },
        creator: { '@id': 'https://agrivisionai.org#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'SoftwareApplication',
        '@id': 'https://agrivisionai.org#product-fieldsense',
        name: 'FieldSense',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'AgTech · IoT',
        operatingSystem: 'Web',
        url: 'https://agrivisionai.org/products/fieldsense',
        description:
          'Planned IoT and AI monitoring for farms, soil, irrigation, and microclimate — real-time sensor telemetry, microclimate intelligence, and edge automation.',
        publisher: { '@id': 'https://agrivisionai.org#organization' },
        creator: { '@id': 'https://agrivisionai.org#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'SoftwareApplication',
        '@id': 'https://agrivisionai.org#product-fieldops',
        name: 'FieldOps',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'AgTech · Farm Management',
        operatingSystem: 'Web',
        url: 'https://agrivisionai.org/products/fieldops',
        description:
          'Early-stage concept for a farm operations and management system for enterprises and cooperatives — workflow automation, multi-farm operations, and an AI assistant.',
        publisher: { '@id': 'https://agrivisionai.org#organization' },
        creator: { '@id': 'https://agrivisionai.org#organization' },
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
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
