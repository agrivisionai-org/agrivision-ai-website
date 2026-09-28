import type { Metadata } from 'next';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import { Reveal, CountUp } from '@/components/primitives';
import { investors } from './investors-data';
import {
  Mail, ArrowRight, Sprout, ScanEye, Radio, ClipboardList, Users, Building2,
  Landmark, ShieldCheck, Languages, LineChart, CloudSun, Ban, Check,
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
      'Extension services reach 6.8% of India’s farmers. YieldAI Global is grounded, multilingual crop intelligence that refuses to guess when the stakes are chemical.',
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

// The page is a summary of the company, so it declares itself as such and points at the
// Organization node rather than minting a second, competing description of the entity.
const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://agrivisionai.org/investors#page',
  url: 'https://agrivisionai.org/investors',
  name: 'For Investors & Partners — AGRIVISION AI',
  description:
    'Company briefing for investors, partners and institutions: the advice gap YieldAI Global addresses, how the product works, what differentiates it, published pricing, and an explicit statement of what has not been verified.',
  isPartOf: { '@id': 'https://agrivisionai.org#website' },
  about: { '@id': 'https://agrivisionai.org#organization' },
  primaryImageOfPage: 'https://agrivisionai.org/opengraph-image.png',
};

const PRODUCT_ICONS = [Sprout, ScanEye, Radio, ClipboardList];
const STEP_ICONS = [Languages, Landmark, LineChart, CloudSun, ShieldCheck, Check];
const WHO_ICONS = [Users, Sprout, Building2];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">{children}</div>
  );
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
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" /> Talk to the founder
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className={`${SECTION} pt-16 pb-12`}>
        <Reveal eager>
          <Eyebrow>{d.hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-6xl">
            Crop intelligence that knows when{' '}
            <span className="gradient-text-green">not to answer</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-700">{d.hero.lede}</p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {d.hero.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-ink-900/[0.08] bg-white px-5 py-6">
                <div className="font-display text-4xl font-semibold text-brand-primary">
                  <CountUp to={Number(s.value)} duration={1400} />
                </div>
                <div className="mt-2 text-sm leading-snug text-ink-600">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://yieldaiglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Try YieldAI Global free <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:vijeshreddy@agrivisionai.org?subject=Full%20investor%20deck"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-primary/50 hover:text-brand-primary"
            >
              Request the full deck
            </a>
          </div>
        </Reveal>
      </section>

      {/* Problem */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.problem.headline}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700">{d.problem.body}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {d.problem.stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-ink-900/[0.08] bg-white p-6">
                <div className="font-display text-3xl font-semibold text-brand-primary">{s.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.label}</p>
              </div>
            </Reveal>
          ))}
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
                {i < d.problem.chain.length - 1 && <ArrowRight className="h-4 w-4 text-brand-secondary" />}
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-ink-500">{d.problem.source}</p>
        </Reveal>
      </section>

      {/* How it is solved today */}
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
              <div className="h-full rounded-2xl border border-ink-900/[0.08] bg-white p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">{it.tag}</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Solution statement */}
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
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <Ban className="h-4 w-4 text-brand-secondary" /> No dosage recommendations, by rule
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <ShieldCheck className="h-4 w-4 text-brand-secondary" /> Routed to a local extension officer instead
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
                  className={`h-full rounded-2xl border p-6 transition-transform hover:-translate-y-0.5 ${
                    live ? 'border-brand-primary/25 bg-[#EAF4E9]' : 'border-ink-900/[0.08] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                        live ? 'bg-brand-primary/12 text-brand-primary' : 'bg-ink-900/[0.05] text-ink-500'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
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

      {/* How it works */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.how.headline}
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.how.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            const gate = i === 4;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div
                  className={`h-full rounded-2xl border p-6 ${
                    gate ? 'border-brand-primary/30 bg-[#EAF4E9]' : 'border-ink-900/[0.08] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-semibold text-ink-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon className={`h-4 w-4 ${gate ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-3xl border-l-2 border-brand-primary/50 pl-5 text-base leading-relaxed text-ink-700">
            {d.how.note}
          </p>
        </Reveal>
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
                <div className="flex h-full flex-col rounded-2xl border border-ink-900/[0.08] bg-white p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icon className="h-5 w-5" />
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
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
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
                  <dd className="text-sm font-medium text-brand-primary">{r.price}</dd>
                  <dd className="text-sm text-ink-600">{r.includes}</dd>
                  <dd>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-primary">
                      <Check className="h-3 w-3" /> {r.status}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700">{d.pricing.note}</p>
        </Reveal>
      </section>

      {/* Market */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Market</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {d.market.headline}
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {d.market.items.map((it, i) => (
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

      {/* Progress and what is not claimed */}
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
                  <Check className="h-3 w-3" /> Built
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
                  <Ban className="mt-0.5 h-4 w-4 shrink-0 text-[#9A5B33]" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Companies */}
      <section className={`${SECTION} py-12`}>
        <Reveal>
          <Eyebrow>Corporate structure</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Two companies, one founder.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <a
              href="https://yieldaiglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center gap-4 rounded-2xl border border-ink-900/[0.08] bg-white p-6 transition-transform hover:-translate-y-0.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/leaf-mark.svg" alt="" width={40} height={56} className="h-12 w-auto shrink-0" />
              <span>
                <span className="block font-display text-lg font-semibold text-ink-900">YieldAI Global</span>
                <span className="mt-1 block text-sm text-ink-600">
                  The flagship product of AgriVisionAI Inc. — yieldaiglobal.com
                </span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="https://buildvaillant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center gap-4 rounded-2xl border border-ink-900/[0.08] bg-white p-6 transition-transform hover:-translate-y-0.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/buildvaillant-icon.png" alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-lg object-contain" />
              <span>
                <span className="block font-display text-lg font-semibold text-ink-900">BuildVaillant</span>
                <span className="mt-1 block text-sm text-ink-600">
                  A web and product development studio, and a venture of AgriVisionAI Inc. No revenue contribution claimed.
                </span>
              </span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
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
          <div className="rounded-3xl bg-ink-900 px-7 py-12 text-center sm:px-12">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              The full deck goes deeper.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Forty-six slides covering the bottom-up model, go-to-market, roadmap, defensibility, the risk register and
              the raise. Ask and I will send it, along with product access and the evaluation data.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:vijeshreddy@agrivisionai.org?subject=Full%20investor%20deck"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Request the full deck
              </a>
              <a
                href="https://www.linkedin.com/in/vijesh-reddy-golamari/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
              >
                Vijesh Reddy Golamari on LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
