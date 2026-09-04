import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Linkedin, Twitter, Github, Mail, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SkipTarget } from '@/components/SkipTarget';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-4xl px-5';

export const metadata: Metadata = {
  title: { absolute: 'Vijesh Reddy Golamari — Founder & CEO | AGRIVISION AI' },
  description:
    'Vijesh Reddy Golamari is the sole founder, CEO and AI Architect of AGRIVISION AI, the Detroit company behind YieldAI Global.',
  alternates: { canonical: `${BASE}/founder` },
  openGraph: {
    type: 'profile',
    url: `${BASE}/founder`,
    title: 'Vijesh Reddy Golamari — Founder, CEO & AI Architect of AGRIVISION AI',
    description:
      'Sole founder and CEO of AGRIVISION AI, and creator and lead architect of YieldAI Global — live in India, the USA and Canada.',
    siteName: 'AGRIVISION AI',
    images: [{ url: `${BASE}/opengraph-image.png`, width: 1200, height: 630, alt: 'Vijesh Reddy Golamari — Founder & CEO of AGRIVISION AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    creator: '@yieldaiglobal',
    title: 'Vijesh Reddy Golamari — Founder, CEO & AI Architect',
    description: 'Sole founder and CEO of AGRIVISION AI, creator of YieldAI Global.',
    images: [`${BASE}/opengraph-image.png`],
  },
};

const LINKS = [
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/vijesh-reddy-golamari/', label: 'Vijesh Reddy Golamari on LinkedIn' },
  { Icon: Twitter, href: 'https://x.com/yieldaiglobal', label: 'YieldAI Global on X' },
  { Icon: Github, href: 'https://github.com/agrivisionai-org', label: 'AGRIVISION AI on GitHub' },
  { Icon: Mail, href: 'mailto:hello@agrivisionai.org', label: 'Email Vijesh Reddy Golamari' },
];

const FACTS = [
  { label: 'Role', value: 'Founder, CEO & AI Architect' },
  { label: 'Company', value: 'AGRIVISION AI (AgriVisionAI Inc.)' },
  { label: 'Headquarters', value: 'Detroit, Michigan, USA' },
  { label: 'Founded', value: 'May 2026 — sole founder' },
  { label: 'Flagship', value: 'YieldAI Global — live in India, the USA & Canada' },
  { label: 'Also', value: 'Generative AI Engineer & Technical Lead, Symplore Inc' },
];

// The Person entity itself is emitted site-wide from the root layout; this page
// points at that same @id rather than declaring a second, competing copy.
const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE}/founder#profilepage`,
  url: `${BASE}/founder`,
  name: 'Vijesh Reddy Golamari — Founder, CEO & AI Architect of AGRIVISION AI',
  mainEntity: { '@id': `${BASE}#founder` },
  // isPartOf expects a CreativeWork; the WebSite node is the correct parent here.
    isPartOf: { '@id': `${BASE}#website` },
};

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.04] via-paper to-paper pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />

      {/* Header */}
      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className={`${SECTION} flex items-center justify-between gap-4 py-5`}>
          <Link href="/" aria-label="AGRIVISION AI home"><Logo /></Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" /> Contact
          </Link>
        </div>
      </header>
      <SkipTarget />

      {/* Hero */}
      <section className={`${SECTION} pt-12 pb-10`}>
        <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-brand-primary">
          <ArrowLeft className="h-4 w-4" /> About AGRIVISION AI
        </Link>

        <div className="mt-8 grid gap-10 sm:grid-cols-[200px_1fr] sm:items-start">
          <div className="w-[200px] overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-secondary/20 via-white to-brand-accent/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              /* Display-only variant. /founder.jpg stays the canonical image in the
                 Person schema and is CORS-enabled for Wikimedia, so it keeps its
                 resolution; serving that 1000x829 original into a 200px box was 93 KB
                 for 40 KB of pixels. */
              src="/founder-400.jpg"
              alt="Vijesh Reddy Golamari, Founder & CEO of AGRIVISION AI"
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
              className="h-[200px] w-[200px] object-cover"
            />
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              Founder, CEO &amp; AI Architect
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Vijesh Reddy Golamari
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700">
              Sole founder of AGRIVISION AI, and the creator and lead architect of YieldAI Global — an
              AI agriculture platform live today in India, the USA and Canada.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="rounded-xl border border-ink-900/[0.07] bg-ink-50 p-2.5 text-ink-700 transition-all hover:border-ink-900/[0.12] hover:text-brand-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className={`${SECTION} pb-4`}>
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-ink-900/[0.07] bg-ink-900/[0.07] sm:grid-cols-2">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-white px-5 py-4">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">{f.label}</dt>
              <dd className="mt-1 text-sm font-medium text-ink-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Biography */}
      <section className={`${SECTION} py-10`}>
        <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">Biography</h2>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-700">
          <p>
            Vijesh Reddy Golamari is the sole founder, Chief Executive Officer, and AI Architect of{' '}
            <strong className="font-semibold text-ink-900">AGRIVISION AI (AgriVisionAI Inc.)</strong>, an
            AI-first agricultural technology company headquartered in Detroit, Michigan. He is also a
            Generative AI Engineer and Technical Lead at Symplore Inc.
          </p>
          <p>
            He founded AGRIVISION AI with the goal of making advanced agricultural intelligence
            accessible, practical, and useful for farmers, agricultural professionals, researchers, and
            agribusinesses worldwide.
          </p>
          <p>
            He leads the company&rsquo;s product strategy, artificial intelligence architecture, platform
            engineering, and technical execution. His work brings together generative AI, machine
            learning, computer vision, agricultural data, multilingual technology, and cloud engineering
            to build products that address real farming problems.
          </p>
          <p>
            Vijesh is the creator and lead architect of{' '}
            <strong className="font-semibold text-ink-900">YieldAI Global</strong>, AGRIVISION AI&rsquo;s
            flagship agricultural intelligence platform. He has led it from initial concept through
            product architecture and implementation, building a connected platform for crop guidance,
            live government market prices, weather, government-scheme guidance, and photo-based disease
            detection through CropVision. Soil and irrigation sensing (FieldSense) and farm operations
            (FieldOps) are on the roadmap, not yet built.
          </p>
          <p>
            His approach centres on the realities farmers actually face: language accessibility, regional
            agricultural practice, data reliability, simple user experiences, and responsible AI
            recommendations. He believes agricultural technology should be not only intelligent, but
            trustworthy, inclusive, and easy to use.
          </p>
          <p>
            Alongside building the technology, he works directly with the farmers, agronomists, and
            advisors the product serves, and with a small team spanning business strategy and product
            feedback, turning early-stage ideas into working products.
          </p>
          <p>
            Through AGRIVISION AI, his long-term goal is a globally connected agricultural technology
            ecosystem that helps farmers make better decisions, reduce uncertainty, improve productivity,
            and reach reliable agricultural knowledge in their own language.
          </p>
        </div>

        <blockquote className="mt-10 border-l-2 border-brand-primary/60 bg-ink-50 py-4 pl-5">
          <p className="text-base italic leading-relaxed text-ink-800">
            &ldquo;Agriculture is the largest industry in the world — and the most under-served by modern
            software. We&rsquo;re here to change that, one intelligent product at a time.&rdquo;
          </p>
          <footer className="mt-2 text-xs text-ink-500">— Vijesh Reddy Golamari</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className={`${SECTION} pt-4`}>
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-ink-900/[0.07] bg-white px-6 py-6">
          <p className="mr-auto text-sm text-ink-700">
            Media, partnership, or interview requests are welcome.
          </p>
          <Link href="/press" className="btn-secondary">Press kit</Link>
          <a href="https://yieldaiglobal.com" target="_blank" rel="noopener" className="btn-primary">
            Try YieldAI Global <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    <Footer />
    </main>
  );
}
