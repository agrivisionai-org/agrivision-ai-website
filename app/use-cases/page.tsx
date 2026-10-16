import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, Mail, ShieldAlert } from 'lucide-react';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-3xl px-5';

// An industry "use cases" page, which is the page type this site was missing. Every entry
// below names the modules it runs on, and every one of those modules is a real screen in
// the product -- the same list rendered by components/sections/Platform.tsx. Nothing here
// is aspirational. FieldSense and FieldOps are deliberately absent, because they do not
// exist yet, and a use-case page is exactly where a roadmap item quietly becomes a claim.
//
// No outcome statistics appear on this page. Competitor pages in this category lead with
// figures like "3x faster harvesting"; we have measured nothing of the kind and will not
// borrow the shape of a claim we cannot source.
export const metadata: Metadata = {
  title: { absolute: 'AI use cases in agriculture — what YieldAI Global actually does | AGRIVISION AI' },
  description:
    'Nine things farmers and extension workers use YieldAI Global for, each mapped to the module it runs on — disease detection, crop choice, market prices, schemes, irrigation and more. Live in India, the USA and Canada.',
  alternates: { canonical: `${BASE}/use-cases` },
  openGraph: {
    type: 'website',
    url: `${BASE}/use-cases`,
    title: 'AI use cases in agriculture — what YieldAI Global actually does',
    description:
      'Nine real uses, each mapped to the module behind it. No outcome statistics, because we have not measured any.',
    siteName: 'AGRIVISION AI',
    images: [{ url: `${BASE}/opengraph-image.png`, width: 1200, height: 630, alt: 'AGRIVISION AI — use cases' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'AI use cases in agriculture — what YieldAI Global actually does',
    description: 'Nine real uses, each mapped to the module behind it.',
    images: [`${BASE}/opengraph-image.png`],
  },
};

// Three audiences, taken from how the product is actually built rather than from personas.
const AUDIENCES = [
  {
    where: 'India',
    who: 'A smallholder household',
    img: '/images/investors/photo-smallholder.webp',
    imgSmall: '/images/investors/photo-smallholder-800.webp',
    alt: 'A young farmer harvesting rice by hand in a paddy field in Patna, Bihar',
    body: 'Crop advice in the language the household actually speaks, and the government mandi price checked against the Minimum Support Price before agreeing a sale.',
  },
  {
    where: 'United States',
    who: 'An extension worker',
    img: '/images/investors/photo-agronomist.webp',
    imgSmall: '/images/investors/photo-agronomist-800.webp',
    alt: 'An agronomist inspecting mangoes on the tree while holding a tablet',
    body: 'Farmer records, field visits and follow-ups in one dashboard instead of scattered across notebooks and spreadsheets, with USDA market information alongside.',
  },
  {
    where: 'Canada',
    who: 'A grain farmer',
    img: '/images/investors/photo-canada.webp',
    imgSmall: '/images/investors/photo-canada-800.webp',
    alt: 'A canola field in full bloom under a prairie sky in Saskatchewan, Canada',
    body: 'The weather and irrigation view for planning field work, and Canadian market prices in the same place, without switching between several sites.',
  },
];

// Each `modules` entry is a label from the live platform grid. Keep the two in step.
const USE_CASES = [
  {
    title: 'Identify what is wrong with a plant from a photograph',
    body: 'Photograph an affected leaf and get the likely disease, the visible symptoms behind that read, and a confidence level stated honestly rather than rounded up to certainty. Guidance comes back in the farmer’s own language.',
    modules: ['Disease Detection'],
  },
  {
    title: 'Decide what to plant on a given field',
    body: 'Soil figures and local conditions feed a crop recommendation, so the choice is grounded in what the ground will actually carry rather than in what did well for a neighbour.',
    modules: ['Soil Analysis', 'Crop Recommendation'],
  },
  {
    title: 'Check what a crop is worth before agreeing a sale',
    body: 'Government market prices for the relevant country, each carrying the date it was published. In India the figure is benchmarked against the Minimum Support Price, so a farmer can see whether an offer sits above or below the state floor.',
    modules: ['Market Prices', 'Price Alerts'],
  },
  {
    title: 'Find a government scheme and work out whether you qualify',
    body: 'Schemes across India, the USA and Canada with the benefit, the eligibility rules and the application route, each checked by hand against the official source. There is no API for this data anywhere, so it is curated deliberately and kept current.',
    modules: ['Government Schemes'],
  },
  {
    title: 'Plan irrigation around the weather that is actually coming',
    body: 'Forecast and field conditions together, so watering decisions follow the week ahead instead of a fixed schedule set at the start of the season.',
    modules: ['Weather Intelligence', 'Irrigation Scheduling'],
  },
  {
    title: 'Keep farmer records straight across many holdings',
    body: 'Built for the extension worker rather than only the individual grower: farmer records, field visits and follow-ups in one place. One advisor often carries around 1,200 farming households, which is the constraint the whole product is shaped around.',
    modules: ['Extension Worker CRM', 'Field Scouting', 'My Farms'],
  },
  {
    title: 'Ask a question out loud, in your own language',
    body: 'Fourteen languages across the whole interface, not only the chatbot, with voice input and voice output. Someone can speak a question and hear the answer, which matters when reading is the harder half.',
    modules: ['Voice Assistant', 'Ask AI'],
  },
  {
    title: 'See pest pressure before it arrives',
    body: 'Pest prediction against local conditions, so the warning lands while there is still a decision to make rather than after the damage is visible.',
    modules: ['Pest Prediction'],
  },
  {
    title: 'Estimate yield and track a season',
    body: 'Yield prediction alongside the season’s own records, so the estimate can be read against what the field has actually done rather than in isolation.',
    modules: ['Yield Prediction', 'Analytics', 'Dashboard'],
  },
];

// The cadence distinction. This is the single most misreported fact about the product, and
// it is stated here as a table because it is comparative and gets quoted out of context.
const PRICE_SOURCES = [
  ['India', 'Agmarknet, via data.gov.in', 'Daily'],
  ['USA', 'USDA NASS Quick Stats', 'Monthly'],
  ['Canada', 'Statistics Canada table 32-10-0077', 'Monthly'],
];

export default function UseCasesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${BASE}/use-cases#page`,
        url: `${BASE}/use-cases`,
        name: 'AI use cases in agriculture — what YieldAI Global actually does',
        description:
          'Nine things farmers and agricultural extension workers use YieldAI Global for, each mapped to the module it runs on. Live in India, the USA and Canada.',
        isPartOf: { '@id': `${BASE}#website` },
        about: { '@id': `${BASE}#organization` },
      },
      {
        '@type': 'ItemList',
        name: 'AI use cases in agriculture',
        itemListElement: USE_CASES.map((u, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: u.title,
          description: u.body,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Use cases', item: `${BASE}/use-cases` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.04] via-paper to-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article className={`${SECTION} pb-24 pt-14`}>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
          Use cases
        </div>
        <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-[2.75rem] sm:leading-[1.1]">
          AI use cases in agriculture
        </h1>

        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-700">
          Nine things farmers and agricultural extension workers actually use{' '}
          <Link href="/products/yieldai-global" className="font-semibold text-brand-primary hover:underline">
            YieldAI Global
          </Link>{' '}
          for. Each one names the modules behind it, and every one of those modules is a screen
          that exists in the product today.
        </p>

        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-700">
          You will not find an outcome statistic anywhere on this page. We have not run the
          studies that would support one, and a number we cannot source is worth less than the
          sentence it sits in.
        </p>

        <figure className="mt-10 overflow-hidden rounded-2xl border border-ink-900/[0.08]">
          <img
            src="/images/investors/photo-paddy.webp"
            srcSet="/images/investors/photo-paddy-800.webp 800w, /images/investors/photo-paddy.webp 1200w"
            sizes="(min-width: 768px) 48rem, 100vw"
            alt="A farmer transplanting rice seedlings by hand in a flooded paddy field in India"
            width={1200}
            height={600}
            loading="eager"
            decoding="async"
            className="h-52 w-full object-cover sm:h-72"
          />
          <figcaption className="bg-white px-5 py-3 text-xs leading-relaxed text-ink-600">
            The work the advice is about. Timing a transplant, a spray or a sale is where a
            grounded answer either helps or does not.
          </figcaption>
        </figure>

        {/* ---------------------------------------------------------- audiences */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink-900">Who is this for?</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {AUDIENCES.map((a) => (
              <div key={a.where} className="card-surface overflow-hidden">
                <img
                  src={a.img}
                  srcSet={`${a.imgSmall} 800w, ${a.img} 1200w`}
                  sizes="(min-width: 640px) 16rem, 100vw"
                  alt={a.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-36 w-full object-cover"
                />
                <div className="p-6 pt-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
                  {a.where}
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-ink-900">{a.who}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- use cases */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink-900">
            What can it do today?
          </h2>
          <div className="mt-6 space-y-5">
            {USE_CASES.map((u, i) => (
              <div key={u.title} className="card-surface p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-semibold text-brand-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-900">{u.title}</h3>
                </div>
                <p className="mt-2.5 text-[1.02rem] leading-relaxed text-ink-700">{u.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {u.modules.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-ink-900/[0.08] bg-ink-50 px-3 py-1 text-xs text-ink-600"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- the refusal */}
        <section className="mt-14 rounded-2xl border border-brand-sun/30 bg-brand-sun/[0.06] p-7">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="h-5 w-5 shrink-0 text-brand-sun" />
            <h2 className="font-display text-xl font-semibold text-ink-900">
              What it will refuse to answer
            </h2>
          </div>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-700">
            Asked for a chemical dose or a spray rate, YieldAI Global declines and routes the
            farmer to a local agriculture extension officer or Krishi Vigyan Kendra. It does not
            estimate, hedge or give a range.
          </p>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-700">
            Most AI products are built to always answer. This one is built to recognise the
            questions where a confident wrong number costs a household a season, and to hand
            those to a person who is accountable for the answer. It is the most distinctive
            thing about the product and the thing we are least willing to trade away.
          </p>
        </section>

        <figure className="mt-10 overflow-hidden rounded-2xl border border-ink-900/[0.08]">
          <img
            src="/images/investors/photo-cropvision.webp"
            srcSet="/images/investors/photo-cropvision-800.webp 800w, /images/investors/photo-cropvision.webp 1600w"
            sizes="(min-width: 768px) 48rem, 100vw"
            alt="A farmer holding a young plant in one hand and a smartphone in the other"
            width={1600}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-52 w-full object-cover sm:h-72"
          />
          <figcaption className="bg-white px-5 py-3 text-xs leading-relaxed text-ink-600">
            A photograph of a plant is the input. What comes back is a likely disease and a
            confidence level — never a dose.
          </figcaption>
        </figure>

        {/* ---------------------------------------------------------- price sources */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink-900">
            Where do the market prices come from?
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-700">
            Named government sources, not the model. Cadence differs by country and the product
            shows the date each figure was published, because a stale price without a date is a
            trap and a stale price with one is still useful.
          </p>
          <figure className="mt-5 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[32rem] border-collapse text-left text-[0.95rem]">
              <thead>
                <tr className="border-b border-ink-900/15">
                  <th scope="col" className="py-2.5 pr-5 font-semibold text-ink-900">Country</th>
                  <th scope="col" className="py-2.5 pr-5 font-semibold text-ink-900">Source</th>
                  <th scope="col" className="py-2.5 pr-5 font-semibold text-ink-900">Update cadence</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_SOURCES.map((row) => (
                  <tr key={row[0]} className="border-b border-ink-900/[0.07]">
                    {row.map((cell) => (
                      <td key={cell} className="py-2.5 pr-5 align-top leading-relaxed text-ink-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <figcaption className="mt-2.5 text-sm text-ink-500">
              Only India’s feed is daily. We do not describe the prices as “live” across all
              three countries, because for two of them that would not be true.
            </figcaption>
          </figure>
        </section>

        {/* ---------------------------------------------------------- not claimed */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink-900">
            What this page does not claim
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              'No customer count, user count, revenue, funding or partnership. None have been established, and AGRIVISION AI is early-stage, founder-led and pre-revenue.',
              'No accuracy percentage for disease detection, and no yield-improvement figure. We intend to publish field-validated numbers when we have results worth standing behind.',
              'No crop count. A figure of 54 circulated previously and nothing in the codebase supports it.',
              'No claim to be the first or only AI agriculture platform. Cropin, Farmonaut and others were serving this sector earlier.',
              'FieldSense and FieldOps appear nowhere above, because neither is built. They are roadmap, and a use-case page is exactly where roadmap quietly becomes a promise.',
            ].map((x) => (
              <li key={x} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink-700">
                <span aria-hidden className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------------- CTA */}
        <section className="mt-14 rounded-2xl border border-brand-primary/25 bg-brand-primary/[0.05] p-7">
          <h2 className="font-display text-xl font-semibold text-ink-900">
            Try it, or tell us where it falls short
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            YieldAI Global is live as a web app in India, the USA and Canada, with a 30-day free
            trial. The mobile app has not launched. If you work in agriculture, extension or
            agronomy and it fails you somewhere, that is the message we most want to receive.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://yieldaiglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Open YieldAI Global <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/products" className="btn-secondary">
              All products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <a
            href="mailto:hello@agrivisionai.org"
            className="mt-5 flex items-center gap-2 text-sm text-ink-600 hover:text-ink-900"
          >
            <Mail className="h-4 w-4 text-brand-primary" />
            hello@agrivisionai.org
          </a>
        </section>

        <p className="mt-10 text-[11px] leading-relaxed text-ink-500">
          Photography licensed under the{' '}
          <a
            href="https://www.pexels.com/license/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Pexels licence
          </a>{' '}
          and self-hosted, via Pexels contributors: the rice transplanting and the rice harvest
          in Patna, the mango orchard, the canola field in Saskatchewan, and the plant and
          smartphone by Mark Stebnicki. A location is named only where Pexels documents one.
          None of these photographs shows the product.
        </p>
      </article>

      <Footer />
    </main>
  );
}
