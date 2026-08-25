import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { products, getProduct, productVisual, productSlugs } from '../products-data';
import { Footer } from '@/components/Footer';
import {
  ArrowUpRight,
  ArrowLeft,
  Mail,
  Sparkles,
  Eye,
  Wifi,
  Cog,
  CircleDot,
} from 'lucide-react';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-5xl px-5';

const ICONS: Record<string, typeof Sparkles> = { sparkles: Sparkles, eye: Eye, wifi: Wifi, cog: Cog };

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const url = `${BASE}/products/${product.slug}`;
  return {
    title: { absolute: product.metaTitle },
    description: product.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: product.metaTitle,
      description: product.metaDescription,
      siteName: 'AGRIVISION AI',
      images: [{ url: `${BASE}/opengraph-image.png`, width: 1200, height: 630, alt: `${product.name} — AI products for global agriculture by AGRIVISION AI` }],
    },
    twitter: { card: 'summary_large_image', site: '@yieldaiglobal', creator: '@yieldaiglobal', title: product.name, description: product.metaDescription, images: [`${BASE}/opengraph-image.png`] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const { accent, iconKey } = productVisual[product.slug] ?? { accent: '#0F6B3E', iconKey: 'sparkles' };
  const Icon = ICONS[iconKey] ?? Sparkles;
  const url = `${BASE}/products/${product.slug}`;
  const others = products.filter((p) => p.slug !== product.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        // Page-scoped id. The site-wide ItemList in app/layout.tsx already defines
        // ${BASE}#product-<slug> on every page; reusing it here made two nodes claim
        // one identity with conflicting descriptions.
        '@id': `${url}#software-application`,
        name: product.name,
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: product.category,
        operatingSystem: 'Web',
        url,
        description: product.metaDescription,
        // Only products with their own price carry an Offer. CropVision is a module inside
        // the YieldAI subscription, so it deliberately has none.
        ...(product.price
          ? {
              offers: {
                '@type': 'Offer',
                price: product.price.amount,
                priceCurrency: product.price.currency,
                availability: 'https://schema.org/InStock',
                url: product.liveUrl ?? url,
              },
            }
          : {}),
        publisher: { '@id': `${BASE}#organization` },
        creator: { '@id': `${BASE}#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE}/products` },
          { '@type': 'ListItem', position: 3, name: product.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: product.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.04] via-paper to-paper pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className={`${SECTION} flex items-center justify-between gap-4 py-5`}>
          <Link href="/" aria-label="AGRIVISION AI home">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/products" className="hidden rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-primary/40 hover:text-brand-primary sm:inline-flex">
              All products
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              <Mail className="h-4 w-4" /> Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={`${SECTION} pt-12 pb-8`}>
        <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-brand-primary">
          <ArrowLeft className="h-4 w-4" /> All products
        </Link>
        <div className="mt-6 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${accent}1a`, color: accent }}>
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: accent }}>{product.category}</div>
            <span className={`mt-1 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${product.liveUrl ? 'border-brand-primary/30 bg-brand-primary/10 text-brand-primary' : 'border-brand-sun/30 bg-brand-sun/10 text-brand-sun'}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${product.liveUrl ? 'bg-brand-primary' : 'bg-brand-sun'}`} /> {product.status}
            </span>
          </div>
        </div>
        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          {product.heroHeadline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">{product.heroSub}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {product.liveUrl ? (
            <a href={product.liveUrl} target="_blank" rel="noopener" className="btn-primary">
              Start Free Trial <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <Link href="/contact" className="btn-primary">
              Request early access <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
          <Link href="/#products" className="btn-secondary">See the product family</Link>
        </div>
      </section>

      {/* Overview */}
      <section className={`${SECTION} py-8`}>
        <div className="rounded-3xl border border-ink-900/[0.08] bg-white p-7 sm:p-9">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink-900">Overview</h2>
          <div className="space-y-4">
            {product.overview.map((para, i) => (
              <p key={i} className="max-w-3xl text-base leading-relaxed text-ink-700">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Capabilities</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.capabilities.map((c) => (
            <div key={c.title} className="rounded-2xl border border-ink-900/[0.08] bg-white p-5">
              <span className="mb-3 block h-1.5 w-8 rounded-full" style={{ background: `${accent}66` }} />
              <h3 className="text-sm font-semibold text-ink-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Built for</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {product.audience.map((a) => (
            <div key={a.title} className="rounded-2xl border border-ink-900/[0.08] bg-ink-50 p-5">
              <h3 className="text-sm font-semibold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Roadmap</h2>
        <ol className="space-y-3">
          {product.roadmap.map((step, i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-ink-900/[0.08] bg-white p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ background: accent }}>{i + 1}</span>
              <span className="text-sm leading-relaxed text-ink-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Frequently asked</h2>
        <div className="space-y-3">
          {product.faq.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-ink-900/[0.08] bg-white px-5 py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-ink-900 marker:hidden">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`${SECTION} py-8`}>
        <div className="overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-ink-900 p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Want to help shape {product.name}?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            We&rsquo;re an early-stage, founder-led company building in the open. If you&rsquo;re a farmer, agronomist, cooperative, or partner, we&rsquo;d love your input.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5">
            <Mail className="h-4 w-4" /> Talk to the team
          </Link>
        </div>
      </section>

      {/* Other products */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Other products</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((p) => {
            const v = productVisual[p.slug] ?? { accent: '#0F6B3E', iconKey: 'sparkles' };
            const OIcon = ICONS[v.iconKey] ?? Sparkles;
            return (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group rounded-2xl border border-ink-900/[0.08] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-primary/40">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: `${v.accent}1a`, color: v.accent }}>
                  <OIcon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{p.name}</h3>
                <p className="mt-1 text-xs text-ink-500">{p.status}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className={`${SECTION} mt-10 border-t border-ink-900/[0.07] pt-8`}>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" aria-label="AGRIVISION AI home"><Logo /></Link>
          <div className="flex items-center gap-2 text-xs text-ink-500">
            <CircleDot className="h-3.5 w-3.5" /> AGRIVISION AI · Agrivisionai Inc · Detroit, Michigan
          </div>
        </div>
        <p className="mt-4 text-center text-[11px] text-ink-500">
          {product.liveUrl
            ? `${product.name} is live and available today. Anything this page describes as planned or on the roadmap is not yet built.`
            : `${product.name} is not built yet. Capabilities described on this page reflect what we are planning, not features available today.`}
        </p>
      </footer>
    <Footer />
    </main>
  );
}
