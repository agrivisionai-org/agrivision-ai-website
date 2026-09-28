import type { Metadata } from 'next';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import { Reveal, CountUp } from '@/components/primitives';
import { CountryMarketCards, CountrySelector } from '@/components/investors/CountryExperience';
import { COUNTRIES } from '@/components/investors/countries';
import { HowItWorksPipeline } from '@/components/investors/Pipeline';
import { MarketOpportunityChart } from '@/components/investors/MarketChart';
import { investors } from './investors-data';
import {
  Mail, ArrowRight, Sprout, ScanEye, Radio, ClipboardList, Users, Building2,
  ShieldCheck, Ban, Check, Globe2, AlertTriangle, Scale,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Investors & Partners — YieldAI Global',
  description:
    'Why AGRIVISION AI exists, what YieldAI Global does, and where the company actually is. Crop intelligence for farming households and extension workers, live in India, the USA and Canada.',
  alternates: { canonical: 'https://agrivisionai.org/investors' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/investors',
    title: 'For Investors & Partners · AGRIVISION AI',
    description:
      'Extension services reach 6.8% of India’s farmers. YieldAI Global is grounded, multilingual crop intelligence that refuses to guess when the stakes are chemical. Live in India, the USA and Canada.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'AGRIVISION AI — for investors and partners' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'AGRIVISION AI — For Investors & Partners',
    description: 'Crop intelligence that knows when not to answer. Live in India, the USA and Canada.',
    images: ['https://agrivisionai.org/opengraph-image.png'],
  },
};

const SECTION = 'mx-auto w-full max-w-5xl px-5';

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://agrivisionai.org/investors#page',
  url: 'https://agrivisionai.org/investors',
  name: 'For Investors & Partners — AGRIVISION AI',
  description:
    'Company briefing for investors, partners and institutions: the advice gap YieldAI Global addresses, how the product works across India, the USA and Canada, what differentiates it, published pricing, and an explicit statement of what has not been verified.',
  isPartOf: { '@id': 'https://agrivisionai.org#website' },
  about: { '@id': 'https://agrivisionai.org#organization' },
  primaryImageOfPage: 'https://agrivisionai.org/opengraph-image.png',
};

const PRODUCT_ICONS = [Sprout, ScanEye, Radio, ClipboardList];
const WHO_ICONS = [Users, Sprout, Building2];

// One photograph per persona, in the same order. Locations are named in alt text only
// where Pexels documents them; the other two are described by scene alone.
const WHO_PHOTOS = [
  {
    src: '/images/investors/photo-smallholder.webp',
    small: '/images/investors/photo-smallholder-800.webp',
    alt: 'A young farmer harvesting rice by hand in a paddy field in Patna, Bihar',
  },
  {
    src: '/images/investors/photo-agronomist.webp',
    small: '/images/investors/photo-agronomist-800.webp',
    alt: 'An agronomist inspecting mangoes on the tree while holding a tablet',
  },
  {
    src: '/images/investors/photo-cooperative.webp',
    small: '/images/investors/photo-cooperative-800.webp',
    alt: 'A group of farmers standing together in a wheat field at dusk',
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">{children}</div>;
}

export default function InvestorsPage() {
  const d = investors;

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.05] via-paper to-paper pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Header */}
      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className={`${SECTION} flex flex-col items-start gap-4 py-7 sm:flex-row sm:items-center sm:justify-between`}>
          <a href="https://agrivisionai.org" aria-label="AGRIVISION AI home">
            <Logo />
          </a>
          <a
            href="mailto:vijeshreddy@agrivisionai.org"
            className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" aria-hidden /> Talk to the founder
          </a>
        </div>
      </header>

      {/* Hero — headline first on mobile, market imagery after */}
      <section className={`${SECTION} pt-14 pb-10`}>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <Reveal eager>
              <Eyebrow>{d.hero.eyebrow}</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl">
                Crop intelligence that knows when <span className="gradient-text-green">not to answer</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700">{d.hero.lede}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {d.hero.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-ink-900/[0.08] bg-white px-4 py-5">
                    <div className="font-display text-3xl font-semibold tabular-nums text-brand-primary">
                      <CountUp to={Number(s.value)} duration={1400} />
                    </div>
                    <div className="mt-1.5 text-xs leading-snug text-ink-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://yieldaiglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Try YieldAI Global free <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="mailto:vijeshreddy@agrivisionai.org?subject=Full%20investor%20deck"
                  className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-ink-900/15 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition-colors duration-200 hover:border-brand-primary/50 hover:text-brand-primary"
                >
                  Request the full deck
                </a>
              </div>
            </Reveal>
          </div>

          {/* Three markets, shown rather than stated */}
          <Reveal delay={0.16}>
            <div className="rounded-3xl border border-ink-900/[0.08] bg-white p-4">
              <div className="flex items-center gap-2 px-2 pb-3 pt-1">
                <Globe2 className="h-4 w-4 text-brand-primary" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-700">Live in 3 markets</span>
              </div>
              <div className="space-y-2.5">
                {COUNTRIES.map((c) => (
                  <div key={c.id} className="relative overflow-hidden rounded-2xl">
                    <img
                      src={c.imageSmall}
                      alt={c.alt}
                      width={800}
                      height={500}
                      loading="eager"
                      decoding="async"
                      className="h-24 w-full object-cover sm:h-28"
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-semibold text-ink-900 backdrop-blur">
                      <span aria-hidden>{c.flag}</span> {c.name}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-ink-900/85 px-2.5 py-1 text-[11px] font-semibold text-white">
                      {c.marketSource}
                    </span>
                  </div>
                ))}
              </div>
              <p className="px-2 pb-1 pt-4 text-xs leading-relaxed text-ink-600">
                Local crops. Local market data. Local context. One intelligence platform.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* At a glance: problem, alternatives and solution side by side, so the whole
          argument is legible before the reader commits to scrolling. */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <div className="text-center">
            <Eyebrow>Why YieldAI Global</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              From guesswork to grounded crop decisions<span className="text-brand-secondary">.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
              The problem, the options households have today, and why this is built differently.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* 1. Problem */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-ink-900/[0.08] bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#FBF4E4] text-[#8A6A1F]">
                  <AlertTriangle className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink-900">Problem</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                Extension advice is structurally unavailable to most farming households. India figures.
              </p>
              <dl className="mt-5 space-y-2.5">
                {d.problem.stats.map((s) => (
                  <div key={s.value} className="rounded-xl bg-ink-900/[0.03] px-4 py-3">
                    <dt className="font-display text-xl font-semibold tabular-nums text-[#B07A1E]">{s.value}</dt>
                    <dd className="mt-1 text-xs leading-snug text-ink-600">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">The consequence chain</p>
              <ol className="mt-3 space-y-1.5">
                {d.problem.chain.map((step, i) => (
                  <li key={step} className="flex items-center gap-2 text-sm text-ink-700">
                    <span className="font-display text-xs font-semibold tabular-nums text-ink-400">{i + 1}</span>
                    <span className={i === d.problem.chain.length - 1 ? 'font-semibold text-[#8A3B3B]' : ''}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* 2. Current alternatives */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-ink-900/[0.08] bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900/[0.05] text-ink-600">
                  <Scale className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink-900">Current alternatives</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                People do get answers today. Each option has a limitation.
              </p>
              <ul className="mt-5 space-y-2.5">
                {d.today.items.map((it) => (
                  <li key={it.title} className="rounded-xl border border-ink-900/[0.06] px-4 py-3">
                    <p className="text-sm font-semibold text-ink-900">{it.title}</p>
                    <p className="mt-1 text-xs leading-snug text-ink-600">{it.body}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-[#FBF4E4] px-4 py-3 text-xs leading-relaxed text-[#6B5420]">
                The gap is not that these are bad products. It is that none of them is a paid, neutral adviser sold to
                the household itself.
              </p>
            </div>
          </Reveal>

          {/* 3. Our platform solution */}
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col rounded-2xl border border-brand-primary/25 bg-[#EAF4E9] p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary">
                  <Sprout className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink-900">Our platform solution</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Grounded, multilingual crop intelligence in an ordinary phone, and a refusal when the stakes are
                chemical.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {['Crop advisory', 'Photo disease detection', 'Live market prices', 'Weather', 'Government schemes', 'Multilingual + voice'].map((chip) => (
                  <li key={chip} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-800 ring-1 ring-ink-900/[0.06]">
                    {chip}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#E0C4C4] bg-[#F7EAEA] px-4 py-3">
                <Ban className="mt-0.5 h-4 w-4 shrink-0 text-[#8A3B3B]" aria-hidden />
                <p className="text-xs leading-relaxed text-[#6B3535]">
                  <span className="font-semibold">No dosage recommendations, by rule.</span> Chemical and dosage
                  questions are routed to a local extension officer instead.
                </p>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-2.5">
                {[
                  ['Grounded answers', 'Built on retrieved material, not model memory.'],
                  ['Refusal as a feature', 'Safer when the answer could cause harm.'],
                  ['One platform', 'Advice, diagnosis, prices, weather and schemes in one place.'],
                  ['Multilingual access', '13 languages, with voice for real field use.'],
                ].map(([t, b]) => (
                  <div key={t} className="rounded-xl bg-white px-3.5 py-3">
                    <dt className="text-xs font-semibold text-ink-900">{t}</dt>
                    <dd className="mt-1 text-[11px] leading-snug text-ink-600">{b}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-brand-primary/20 pt-4 sm:grid-cols-4">
                {d.hero.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-lg font-semibold tabular-nums text-brand-primary">{s.value}</p>
                    <p className="text-[11px] leading-snug text-ink-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Global market strip */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Three markets</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Built local. Designed global.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700">
            The product is localised by data and context, not only by language. Each market has its own government
            price source, its own crops and its own season.
          </p>
        </Reveal>
        <div className="mt-9">
          <CountryMarketCards />
        </div>
        <Reveal delay={0.1}>
          <p className="mt-5 text-xs leading-relaxed text-ink-500">
            Crops listed describe what each market grows. They are landscape context, not a statement of platform crop
            coverage. Imagery is original AGRIVISION AI illustration, not photography.
          </p>
        </Reveal>
      </section>

      {/* Problem — explicitly scoped to India */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>The problem</Eyebrow>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBF4E4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A6A1F]">
              <span aria-hidden>🇮🇳</span> India case study
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.problem.headline}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700">{d.problem.body}</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-500">
            These figures are India public-sector extension statistics. They describe the India market only and are not
            presented as applying to the USA or Canada.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {d.problem.stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink-900/[0.08] bg-white p-6">
                  <div className="font-display text-3xl font-semibold tabular-nums text-brand-primary">{s.value}</div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-2xl border border-ink-900/[0.08]">
              <img
                src="/images/investors/photo-problem-india.webp"
                srcSet="/images/investors/photo-problem-india-800.webp 800w, /images/investors/photo-problem-india.webp 1200w"
                sizes="(max-width: 1024px) 100vw, 45vw"
                alt="Overhead view of rice being raked out to dry across a field in Habra, India"
                width={1200}
                height={750}
                loading="lazy"
                decoding="async"
                className="h-full max-h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {d.problem.chain.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    i === d.problem.chain.length - 1
                      ? 'bg-[#F7EAEA] text-[#8A3B3B]'
                      : 'bg-white text-ink-700 ring-1 ring-ink-900/[0.08]'
                  }`}
                >
                  {step}
                </span>
                {i < d.problem.chain.length - 1 && <ArrowRight className="h-4 w-4 text-brand-secondary" aria-hidden />}
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-ink-500">{d.problem.source}</p>
        </Reveal>
      </section>

      {/* Alternatives */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>The alternatives</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.today.headline}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700">{d.today.body}</p>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {d.today.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-ink-900/[0.08] bg-white p-6 transition-shadow duration-200 hover:shadow-[0_12px_36px_-20px_rgba(11,46,28,0.35)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">{it.tag}</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <div className="rounded-3xl bg-ink-900 px-7 py-12 sm:px-12 sm:py-16">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">The solution</div>
            <p className="mt-6 max-w-3xl font-display text-2xl font-medium leading-[1.35] text-white sm:text-3xl">
              YieldAI Global helps <span className="text-brand-secondary">farming households and extension workers</span>{' '}
              make better season decisions by putting{' '}
              <span className="text-brand-secondary">grounded, multilingual crop intelligence</span> in an ordinary
              phone — and by <span className="text-brand-secondary">refusing to guess</span> when the stakes are
              chemical.
            </p>
            <div className="mt-9 flex flex-wrap gap-2.5">
              {['Crop advisory', 'CropVision', 'Market prices', 'Weather', 'Schemes', 'Yield intelligence', 'Voice', 'Multilingual'].map((chip) => (
                <span key={chip} className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-start gap-2.5 rounded-2xl border border-brand-secondary/40 bg-brand-secondary/10 px-4 py-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" aria-hidden />
              <span className="text-sm font-medium text-white">
                Safety layer — no chemical dosage guessing. Routed to a local extension officer instead.
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Platform */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>The platform</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.platform.headline}
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {d.platform.items.map((it, i) => {
            const Icon = PRODUCT_ICONS[i];
            const live = it.tone === 'live';
            return (
              <Reveal key={it.title} delay={i * 0.07}>
                <div
                  className={`h-full rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-0.5 ${
                    live ? 'border-brand-primary/25 bg-[#EAF4E9]' : 'border-ink-900/[0.08] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                        live ? 'bg-brand-primary/12 text-brand-primary' : 'bg-ink-900/[0.05] text-ink-500'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                        live ? 'bg-brand-primary/12 text-brand-primary' : 'bg-[#FBF4E4] text-[#8A6A1F]'
                      }`}
                    >
                      {it.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{it.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CropVision: the photograph carries this one, because the product story is
          literally a person pointing a phone at a plant. */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>CropVision</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            See the crop. Understand the problem.
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-ink-900/[0.08]">
              <img
                src="/images/investors/photo-cropvision.webp"
                srcSet="/images/investors/photo-cropvision-800.webp 800w, /images/investors/photo-cropvision.webp 1600w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="A farmer holding a young plant in one hand and a smartphone in the other"
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ol className="space-y-3">
              {[
                ['Photograph', 'The farmer points a phone at the affected plant.'],
                ['Analysis', 'The image is assessed against the agronomic corpus, not from model memory.'],
                ['Detection and explanation', 'The likely cause is named, and an unclear read is reported as unclear rather than guessed.'],
                ['Next action', 'Anything approaching a chemical or dosage decision is routed to a local extension officer or Krishi Vigyan Kendra.'],
              ].map(([t2, b], i) => (
                <li key={t2} className="flex gap-4 rounded-2xl border border-ink-900/[0.08] bg-white p-5">
                  <span className="font-display text-sm font-semibold tabular-nums text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="block font-display text-base font-semibold text-ink-900">{t2}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-600">{b}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-4 rounded-2xl bg-[#FBF4E4] px-5 py-4 text-xs leading-relaxed text-[#6B5420]">
              No confidence percentage or example diagnosis is shown here, because neither would come from a real
              CropVision result. The product is live at{' '}
              <a href="https://yieldaiglobal.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
                yieldaiglobal.com
              </a>{' '}
              if you want to see an actual one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.how.headline}
          </h2>
        </Reveal>
        <div className="mt-9">
          <HowItWorksPipeline />
        </div>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-3xl border-l-2 border-brand-primary/50 pl-5 text-base leading-relaxed text-ink-700">
            {d.how.note}
          </p>
        </Reveal>
      </section>

      {/* Three data environments */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Localised by data</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Three markets. Three data environments. One platform.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700">
            Market prices come from a different government source in each country. That is three separate integrations,
            not one feed with three labels.
          </p>
        </Reveal>
        <div className="mt-9">
          <CountrySelector />
        </div>
      </section>

      {/* Why AI */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Why AI</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.whyAi.headline}
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {d.whyAi.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div
                className={`h-full rounded-2xl border p-6 ${
                  it.tone === 'note' ? 'border-[#E6D5A8] bg-[#FBF4E4]' : 'border-ink-900/[0.08] bg-white'
                }`}
              >
                <h3 className="font-display text-lg font-semibold text-ink-900">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Differentiation */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Differentiation</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.different.headline}
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {d.different.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-ink-900/[0.08] bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ink-900">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who it is for */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Who it is for</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.who.headline}
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {d.who.rows.map((r, i) => {
            const Icon = WHO_ICONS[i];
            const live = r.status === 'Live and self-serve';
            return (
              <Reveal key={r.who} delay={i * 0.07}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white">
                  <img
                    src={WHO_PHOTOS[i].src}
                    srcSet={`${WHO_PHOTOS[i].small} 800w, ${WHO_PHOTOS[i].src} 1600w`}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    alt={WHO_PHOTOS[i].alt}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="h-40 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{r.who}</h3>
                  <dl className="mt-4 space-y-2 text-sm text-ink-600">
                    <div><dt className="inline font-semibold text-ink-800">User: </dt><dd className="inline">{r.user}</dd></div>
                    <div><dt className="inline font-semibold text-ink-800">Buyer: </dt><dd className="inline">{r.buyer}</dd></div>
                    <div><dt className="inline font-semibold text-ink-800">Problem: </dt><dd className="inline">{r.problem}</dd></div>
                  </dl>
                  <span
                    className={`mt-5 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                      live ? 'bg-brand-primary/12 text-brand-primary' : 'bg-[#FBF4E4] text-[#8A6A1F]'
                    }`}
                  >
                    {r.status}
                  </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Pricing, with the market it belongs to */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.pricing.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white">
            <dl className="divide-y divide-ink-900/[0.06]">
              {d.pricing.rows.map((r) => (
                <div key={r.tier} className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[180px_180px_1fr_auto] sm:items-center sm:gap-4">
                  <dt className="text-sm font-semibold text-ink-900">{r.tier}</dt>
                  <dd className="text-sm font-medium tabular-nums text-brand-primary">{r.price}</dd>
                  <dd className="text-sm text-ink-600">{r.includes}</dd>
                  <dd>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-primary">
                      <Check className="h-3 w-3" aria-hidden /> {r.status}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700">{d.pricing.note}</p>
        </Reveal>
      </section>

      {/* Market opportunity */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Market</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.market.headline}
          </h2>
        </Reveal>
        <div className="mt-9">
          <MarketOpportunityChart />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {d.market.items.slice(2).map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-ink-900/[0.08] bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-ink-900">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{it.body}</p>
                <p className="mt-4 text-xs text-ink-500">Source: {it.tag}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Global visual break */}
      <section className="py-12">
        <Reveal>
          <div className={SECTION}>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/investors/global-agriculture.webp"
                alt="Three-panel illustration: smallholder paddy plots in India, row crops in the United States, and a canola prairie in Canada"
                width={1599}
                height={560}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/45 to-ink-900/20" />
              <div className="absolute inset-0 flex items-center px-7 sm:px-12">
                <p className="max-w-lg font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Different fields. Different markets. Different conditions.
                  <span className="text-brand-secondary"> One intelligence layer.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Where we are */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Where we are</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.progress.headline}
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {d.progress.built.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-brand-primary/25 bg-[#EAF4E9] p-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-primary">
                  <Check className="h-3 w-3" aria-hidden /> Built
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-7 rounded-2xl border border-[#E2D2C6] bg-[#F6EFEA] p-7">
            <h3 className="font-display text-lg font-semibold text-ink-900">What we are not claiming</h3>
            <ul className="mt-4 space-y-2.5">
              {d.progress.notClaimed.map((n) => (
                <li key={n} className="flex gap-3 text-sm leading-relaxed text-[#5A4A40]">
                  <Ban className="mt-0.5 h-4 w-4 shrink-0 text-[#9A5B33]" aria-hidden />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Corporate structure */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Corporate structure</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Two companies, one founder.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-2xl border border-ink-900/[0.08] bg-white p-7">
            <div className="inline-flex items-center gap-3 rounded-xl bg-ink-900 px-5 py-3">
              <img src="/leaf-mark.svg" alt="" width={20} height={28} className="h-6 w-auto" />
              <span className="font-display text-base font-semibold text-white">AgriVisionAI Inc.</span>
            </div>
            <div className="mt-5 grid gap-4 border-l-2 border-ink-900/10 pl-6 sm:grid-cols-2">
              <a
                href="https://yieldaiglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-ink-900/[0.08] p-5 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <img src="/leaf-mark.svg" alt="" width={32} height={44} className="h-10 w-auto shrink-0" />
                <span>
                  <span className="block font-display text-base font-semibold text-ink-900">YieldAI Global</span>
                  <span className="mt-1 block text-sm text-ink-600">Flagship crop intelligence product</span>
                </span>
              </a>
              <a
                href="https://buildvaillant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-ink-900/[0.08] p-5 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <img src="/buildvaillant-icon.png" alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-lg object-contain" />
                <span>
                  <span className="block font-display text-base font-semibold text-ink-900">BuildVaillant</span>
                  <span className="mt-1 block text-sm text-ink-600">
                    Web and product development studio. No revenue contribution claimed.
                  </span>
                </span>
              </a>
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-ink-500">
            Several unrelated organisations use the same or a similar name and are not affiliated with AgriVisionAI Inc.
            The full list is on the{' '}
            <a href="/press" className="font-medium text-brand-primary underline-offset-2 hover:underline">press page</a>.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/images/investors/global-agriculture.webp"
              alt=""
              width={1599}
              height={560}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink-900/88" />
            <div className="relative px-7 py-14 text-center sm:px-12">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">YieldAI Global is live.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                AI crop advice, live government market prices, weather and scheme guidance in your language — available
                in India, the USA and Canada.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://yieldaiglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Start free trial <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="mailto:vijeshreddy@agrivisionai.org?subject=Full%20investor%20deck"
                  className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/60"
                >
                  <Mail className="h-4 w-4" aria-hidden /> Request the full deck
                </a>
                <a
                  href="/products"
                  className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/80 transition-colors duration-200 hover:text-white"
                >
                  Explore products
                </a>
              </div>
              <p className="mt-7 text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                India • United States • Canada
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${SECTION} pb-4`}>
        <p className="text-[11px] leading-relaxed text-ink-500">
          Photography licensed under the{' '}
          <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Pexels licence</a>{' '}
          and self-hosted: wheat field, vishal mali; corn crop, Frank Rubio; canola and tractor, Efrem Efre; plant and
          smartphone, Mark Stebnicki; plus the rice harvest in Patna, the rice drying in Habra, the mango orchard and the wheat-field group, via Pexels contributors. A location is named only where Pexels documents one. Landscape panels elsewhere on
          this page are original AGRIVISION AI illustration.
        </p>
      </section>

      <Footer />
    </main>
  );
}
