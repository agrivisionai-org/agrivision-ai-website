import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, Mail, Check, Clock } from 'lucide-react';
import { SkipTarget } from '@/components/SkipTarget';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-3xl px-5';

// Ireland is NOT a live market. YieldAI Global runs in India, the USA and Canada only.
// This page says so in the first sentence, in the status pill, in the metadata description
// and in the JSON-LD, because a "coming soon" page that reads like a launch page is exactly
// the overclaim the honesty policy exists to prevent. There is no Offer node here and no
// availability claim of any kind.
export const metadata: Metadata = {
  title: { absolute: 'YieldAI Global in Ireland — not yet available | AGRIVISION AI' },
  description:
    'YieldAI Global is not available in Ireland yet. It is live in India, the USA and Canada. Here is what an Irish version would need, and how to register interest.',
  alternates: { canonical: `${BASE}/ireland` },
  openGraph: {
    type: 'website',
    url: `${BASE}/ireland`,
    title: 'YieldAI Global in Ireland — not yet available',
    description:
      'Not available in Ireland yet. Live today in India, the USA and Canada. What an Irish version would need, and how to register interest.',
    siteName: 'AGRIVISION AI',
    images: [{ url: `${BASE}/opengraph-image.png`, width: 1200, height: 630, alt: 'AGRIVISION AI — Ireland' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'YieldAI Global in Ireland — not yet available',
    description: 'Live in India, the USA and Canada. Ireland is not a live market yet.',
    images: [`${BASE}/opengraph-image.png`],
  },
};

// What an Irish build would actually have to handle. Written as open questions rather than
// commitments -- none of this is built, and dating a launch we cannot promise would be worse
// than saying nothing.
const REQUIREMENTS = [
  {
    title: 'Grass, not just crops',
    body: 'Irish farming is overwhelmingly grass-based dairy and beef. The platform today is built around tillage crops and mandi-style market data. Grass growth measurement, rotation planning and grazing budgets are a different model, not a translation.',
  },
  {
    title: 'Nitrates compliance',
    body: 'The Nitrates Directive and Ireland’s derogation shape almost every stocking and spreading decision on an Irish farm, with closed periods and stocking-rate limits that carry real penalties. Any useful tool here has to be correct about current-year rules, or it is worse than no tool.',
  },
  {
    title: 'CAP scheme deadlines',
    body: 'BISS, ACRES and the eco-schemes run on fixed application windows through DAFM. Our scheme guidance today covers Indian programmes like PM-KISAN and PMFBY. The Irish equivalent is a separate body of rules that changes annually.',
  },
  {
    title: 'Local price and weather sources',
    body: 'Market prices come from government sources per country — mandi data in India, USDA in the USA, StatCan in Canada. Ireland would need its own equivalents wired in before any price figure on screen could be trusted.',
  },
];

export default function IrelandPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE}/ireland#page`,
        url: `${BASE}/ireland`,
        name: 'YieldAI Global in Ireland — not yet available',
        description:
          'YieldAI Global is not available in Ireland. It is live in India, the USA and Canada. This page explains what an Irish version would require.',
        isPartOf: { '@id': `${BASE}#website` },
        about: { '@id': `${BASE}#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Ireland', item: `${BASE}/ireland` },
        ],
      },
    ],
  };

  return (
    <main className="relative pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <SkipTarget />

      <article className={`${SECTION} pt-12`}>
        <div className="mt-2 flex w-fit items-center gap-2 rounded-full border border-ink-900/15 bg-ink-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-600">
          <Clock className="h-3 w-3" /> Not available yet
        </div>

        <h1 className="mt-4 text-balance font-display text-display-md text-ink-900">
          YieldAI Global is not in Ireland yet
        </h1>

        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-700">
          We would rather say this plainly than let a page imply otherwise. YieldAI Global is
          live in <strong className="font-semibold text-ink-900">India, the USA and Canada</strong>.
          It is not available in Ireland, there is no Irish trial to sign up for, and we are
          not going to put a launch date on this page that we cannot stand behind.
        </p>

        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-700">
          Ireland is on our roadmap the same way FieldSense and FieldOps are: a direction, not
          a delivery. What follows is an honest account of what an Irish version would actually
          have to get right first.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-ink-900">
            What an Irish version would need
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {REQUIREMENTS.map((r) => (
              <div key={r.title} className="card-surface p-6">
                <h3 className="font-display text-base font-semibold text-ink-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-ink-900">
            What is available to you today
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              'Our writing on crop planning, irrigation and yield is free to read and much of it is not country-specific.',
              'CropVision, our photo-based plant disease layer, is a general computer-vision model rather than a region-locked one — but it ships inside YieldAI Global, so it is not separately available in Ireland either.',
              'Our internship programme is genuinely open worldwide, Ireland included, and is not tied to product availability.',
            ].map((x) => (
              <li key={x} className="flex gap-3 text-[1.05rem] leading-relaxed text-ink-700">
                <Check className="mt-1.5 h-4 w-4 shrink-0 text-brand-primary" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog" className="btn-secondary">
              Read the guides <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/careers" className="btn-secondary">
              Internships (worldwide) <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-brand-primary/25 bg-brand-primary/[0.05] p-6">
          <h2 className="font-display text-xl font-semibold text-ink-900">
            Farming in Ireland and want this to exist?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            Tell us what you actually need and it will shape whether Ireland moves up the
            roadmap. We are a small, founder-led company, so this genuinely gets read. What we
            cannot do is promise you a date.
          </p>
          <a
            href="mailto:hello@agrivisionai.org?subject=YieldAI%20Global%20in%20Ireland"
            className="btn-primary mt-5 inline-flex"
          >
            Register interest <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@agrivisionai.org"
            className="mt-4 flex items-center gap-2 text-sm text-ink-600 hover:text-ink-900"
          >
            <Mail className="h-4 w-4 text-brand-primary" />
            hello@agrivisionai.org
          </a>
        </section>

        <p className="mt-10 text-xs leading-relaxed text-ink-500">
          Nothing on this page is an offer of service in Ireland or the EU. Where we do
          operate, market prices come from official government sources and anything
          approaching a chemical or dosage decision is routed to a local agricultural advisor
          rather than answered by the product.
        </p>
      </article>

      <Footer />
    </main>
  );
}
