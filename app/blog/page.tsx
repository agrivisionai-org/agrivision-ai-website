import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { BuildNotesCard } from '@/components/BuildNotesCard';
import { posts, readingMinutes } from './blog-data';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Footer } from '@/components/Footer';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-3xl px-5';

function fmtDate(d: string) {
  const [y, m, day] = d.split('-').map(Number);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${months[(m || 1) - 1]} ${day}, ${y}`;
}

export const metadata: Metadata = {
  title: { absolute: 'Blog — AGRIVISION AI' },
  description:
    'Building AGRIVISION AI in public: honest updates from founder Vijesh Reddy Golamari on YieldAI Global and AI for global agriculture.',
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    type: 'website',
    url: `${BASE}/blog`,
    title: 'Blog — AGRIVISION AI',
    description: 'Honest, building-in-public updates from AGRIVISION AI.',
    siteName: 'AGRIVISION AI',
    images: [{ url: `${BASE}/opengraph-image.png`, width: 1200, height: 630, alt: 'AGRIVISION AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'AGRIVISION AI Blog',
    description: 'Building an AI farming assistant in public — crop guidance, market prices and honest notes on what shipped.',
    images: ['https://agrivisionai.org/opengraph-image.png'],
  },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AGRIVISION AI Blog',
    url: `${BASE}/blog`,
    publisher: { '@id': `${BASE}#organization` },
    blogPost: sorted.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${BASE}/blog/${p.slug}`, datePublished: p.date })),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.04] via-paper to-paper pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-5 py-5">
          <Link href="/" aria-label="AGRIVISION AI home"><Logo /></Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
            <Mail className="h-4 w-4" /> Contact
          </Link>
        </div>
      </header>

      <section className={`${SECTION} pt-14 pb-8`}>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">Blog</div>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          Building in <span className="gradient-text-green">public</span>.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-700">
          Honest updates from AGRIVISION AI as we build YieldAI Global — including the parts that don&rsquo;t work yet.
        </p>
      </section>

      {/* Newsletter — the long-form companion to these posts, published on LinkedIn */}
      <section className={`${SECTION} pb-8`}>
        <BuildNotesCard />
      </section>

      <section className={`${SECTION}`}>
        <div className="space-y-4">
          {sorted.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block rounded-3xl border border-ink-900/[0.08] bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-primary/40">
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <time dateTime={p.date}>{fmtDate(p.date)}</time>
                <span aria-hidden>·</span>
                <span>{readingMinutes(p)} min read</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink-900">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                Read post <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    <Footer />
    </main>
  );
}
