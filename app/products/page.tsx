import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { products, productVisual } from './products-data';
import { ArrowUpRight, Mail, Sparkles, Eye, Wifi, Cog } from 'lucide-react';
import { Footer } from '@/components/Footer';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-5xl px-5';
const ICONS: Record<string, typeof Sparkles> = { sparkles: Sparkles, eye: Eye, wifi: Wifi, cog: Cog };

export const metadata: Metadata = {
  title: { absolute: 'Products — AGRIVISION AI' },
  description:
    'The AGRIVISION AI product family: YieldAI Global and CropVision are live; FieldSense and FieldOps are on our roadmap — AI products for global agriculture.',
  alternates: { canonical: `${BASE}/products` },
  openGraph: {
    type: 'website',
    url: `${BASE}/products`,
    title: 'Products — AGRIVISION AI',
    description: 'AI products for global agriculture: YieldAI Global, CropVision, FieldSense, FieldOps.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'AGRIVISION AI products' }],
  },
};

export default function ProductsIndex() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AGRIVISION AI Products',
    url: `${BASE}/products`,
    about: { '@id': `${BASE}#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `${BASE}/products/${p.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.04] via-paper to-paper pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className={`${SECTION} flex items-center justify-between gap-4 py-5`}>
          <Link href="/" aria-label="AGRIVISION AI home"><Logo /></Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
            <Mail className="h-4 w-4" /> Contact
          </Link>
        </div>
      </header>

      <section className={`${SECTION} pt-14 pb-8`}>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">Products</div>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          A product family we&rsquo;re building for{' '}
          <span className="gradient-text-green">global agriculture</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700">
          Intelligence, vision, IoT, and operations — on a shared AI fabric. YieldAI Global and CropVision are
          live today; FieldSense and FieldOps are on the roadmap. Every card below states its stage plainly.
        </p>
      </section>

      <section className={`${SECTION} py-4`}>
        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((p) => {
            const v = productVisual[p.slug] ?? { accent: '#0F6B3E', iconKey: 'sparkles' };
            const Icon = ICONS[v.iconKey] ?? Sparkles;
            return (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-primary/40">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40" style={{ background: v.accent }} />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `${v.accent}1a`, color: v.accent }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${p.liveUrl ? 'border-brand-primary/30 bg-brand-primary/10 text-brand-primary' : 'border-brand-sun/30 bg-brand-sun/10 text-brand-sun'}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${p.liveUrl ? 'bg-brand-primary' : 'bg-brand-sun'}`} /> {p.status}
                  </span>
                </div>
                <h2 className="relative mt-5 font-display text-2xl font-semibold text-ink-900">{p.name}</h2>
                <div className="relative text-xs font-medium uppercase tracking-wider text-ink-500">{p.category}</div>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-600">{p.heroSub}</p>
                <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                  Explore {p.name} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className={`${SECTION} mt-10 border-t border-ink-900/[0.07] pt-8 text-center`}>
        <div className="inline-flex items-center gap-2 text-xs text-ink-500">
          AGRIVISION AI · Agrivisionai Inc · Detroit, Michigan
        </div>
        <p className="mt-2 text-[11px] text-ink-500">YieldAI Global and CropVision are live at yieldaiglobal.com. FieldSense and FieldOps are roadmap concepts and are not available yet.</p>
      </footer>
    <Footer />
    </main>
  );
}
