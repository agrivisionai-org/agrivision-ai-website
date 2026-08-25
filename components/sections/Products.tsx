'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import { Tilt } from '../Tilt';
import {
  ArrowUpRight,
  Sparkles,
  CloudRain,
  Bug,
  Wheat,
  Mic,
  Building2,
  LayoutDashboard,
  TrendingUp,
  Activity,
  Eye,
  Wifi,
  Cog,
  Droplets,
} from 'lucide-react';

// Flagship — what is live today. Disease Detection is CropVision, which ships
// as a module inside YieldAI Global, so it belongs here rather than on the roadmap.
const MVP_FEATURES = [
  { icon: Wheat, label: 'Crop Advisory' },
  { icon: Activity, label: 'Pest Intelligence' },
  { icon: Bug, label: 'Disease Detection' },
  { icon: CloudRain, label: 'Weather & Schemes' },
  { icon: Sparkles, label: 'Market Insights' },
  { icon: TrendingUp, label: 'Yield Prediction' },
  { icon: Mic, label: 'Voice Assistant' },
  { icon: LayoutDashboard, label: 'Dashboard' },
];

// Flagship roadmap — the only capabilities not yet built. Everything above
// ships today inside YieldAI Global.
const ROADMAP_FEATURES = [
  { icon: Wifi, label: 'IoT Sensors' },
  { icon: Droplets, label: 'Smart Irrigation' },
];

// BuildVaillant accents, sampled from the new lockup artwork. Two values because
// the chip sets 12px text on white: the dominant teal (#009FA4) only reaches 3.2:1
// there, worse than the blue it replaces, so text and border use the darker teal
// that also appears in the mark (4.9:1, WCAG AA). The bright one stays for the
// purely decorative glow and dot.
const BV_TEAL = '#009FA4';
const BV_TEAL_INK = '#007D88';

const PRODUCTS = [
  {
    name: 'YieldAI Global',
    tagline: 'Flagship · Live',
    status: 'Live',
    description:
      'Our live AI agriculture platform — AI crop advice, live government market prices, weather, and scheme guidance in the farmer’s own language. Available now in India, the USA, and Canada, with more capabilities on the roadmap.',
    accent: '#5DBB63',
    features: MVP_FEATURES,
    metric: { value: 'Live', label: 'India · USA · Canada' },
    href: '/products/yieldai-global',
  },
  {
    name: 'CropVision',
    tagline: 'YieldAI module',
    status: 'Live',
    description: 'Photograph a plant and get a likely disease, an honest confidence level, and what to do next — live inside YieldAI Global.',
    accent: '#0A84FF',
    features: [
      { icon: Eye, label: 'Photo diagnosis' },
      { icon: Bug, label: 'Disease detection' },
      { icon: Activity, label: 'Confidence-first' },
      { icon: Sparkles, label: 'In your language' },
    ],
    metric: { value: 'Live', label: 'Inside YieldAI Global' },
    href: '/products/cropvision',
  },
  {
    name: 'FieldSense',
    tagline: 'YieldAI roadmap · IoT',
    status: 'Planned',
    description: 'IoT + AI monitoring for farms, soil, irrigation, and microclimate — planned for future implementation.',
    accent: '#5DBB63',
    features: [
      { icon: Wifi, label: 'Sensor fabric' },
      { icon: Activity, label: 'Real-time telemetry' },
      { icon: CloudRain, label: 'Microclimate intel' },
      { icon: Cog, label: 'Edge automation' },
    ],
    metric: { value: 'Roadmap', label: 'Planned capability' },
    href: '/products/fieldsense',
  },
  {
    name: 'FieldOps',
    tagline: 'YieldAI roadmap',
    status: 'Early design',
    description: 'Concept for a farm operations and management system for enterprises and cooperatives.',
    accent: '#0A84FF',
    features: [
      { icon: Cog, label: 'Workflow automation' },
      { icon: TrendingUp, label: 'Yield & cost ledger' },
      { icon: Building2, label: 'Multi-farm ops' },
      { icon: Sparkles, label: 'AI assistant' },
    ],
    metric: { value: 'Concept', label: 'Early design' },
    href: '/products/fieldops',
  },
];

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mesh-soft pointer-events-none absolute inset-0 -z-10" />
      <GradientOrb className="-right-40 top-40" color="#0A84FF" size={500} />
      <div className="container-narrow">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow>Our Product</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
                One platform for{' '}
                <span className="gradient-text-green">global agriculture</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700">
                Our flagship product, YieldAI Global, is live — and so is CropVision, its
                computer-vision layer. FieldSense and FieldOps are planned modules that extend it.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <Link href="/contact" className="btn-secondary">
              See the roadmap
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Flagship */}
        <Reveal delay={0.1} className="mt-14 block">
          <FlagshipCard p={PRODUCTS[0]} />
        </Reveal>

        {/* Modules & roadmap */}
        <div className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
          Modules &amp; roadmap
        </div>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.slice(1).map((p, i) => (
            <Reveal key={p.name} delay={0.15 + i * 0.08}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Venture: BuildVaillant — accents come from the logo, not the site's
            brand-accent blue, so the card reads as one piece with the artwork. */}
        <div className="mt-14 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
          Also from Agrivisionai Inc
        </div>
        <Reveal delay={0.1} className="mt-4 block">
          <a
            href="https://buildvaillant.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-surface relative grid gap-7 overflow-hidden p-7 sm:p-9 lg:grid-cols-[1.4fr_1fr] lg:items-center"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: `radial-gradient(circle at 85% 15%, ${BV_TEAL}22, transparent 55%)` }}
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip" style={{ borderColor: `${BV_TEAL_INK}55`, color: BV_TEAL_INK }}>
                  Web &amp; product development
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> Live
                </span>
              </div>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900">
                BuildVaillant
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-700">
                Our venture beyond the farm — websites, web apps, and digital products for businesses
                worldwide, designed and shipped, then managed for 365 days under a written contract.
                We build it. Then we stay.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-900/[0.07] bg-ink-50 px-3.5 py-1.5 text-xs font-medium text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: BV_TEAL }} />
                The revenue engine that funds our agriculture work
              </div>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-900/[0.08] bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition-all group-hover:border-brand-primary/40 group-hover:text-brand-primary">
                Visit buildvaillant.com
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            {/* The lockup carries its own navy ground, so the container matches that
                exact navy (#011C3C, sampled from the artwork edge) and the logo is
                contained rather than cropped — no seam, no clipped wordmark. */}
            <div
              className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-ink-900/[0.06] px-6 py-8"
              style={{ background: '#011C3C' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/buildvaillant-logo.webp"
                alt="BuildVaillant"
                width={1000}
                height={421}
                loading="lazy"
                decoding="async"
                className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FlagshipCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <Tilt max={4} glare className="rounded-2xl">
    <div
      className="tilt-layer card-surface relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${p.accent}22, transparent 50%)`,
        }}
      />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip" style={{ borderColor: `${p.accent}55`, color: p.accent }}>
            <Sparkles className="h-3 w-3" /> {p.tagline}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> {p.status}
          </span>
        </div>
        <h3 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900">
          {p.name}
        </h3>
        <p className="mt-3 max-w-md text-base text-ink-700">{p.description}</p>

        {/* MVP — building now */}
        <div className="mt-7 text-[11px] font-semibold uppercase tracking-wider text-brand-primary">
          Live now
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {MVP_FEATURES.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-2.5 rounded-xl border border-ink-900/[0.07] bg-ink-50 px-3 py-2.5"
            >
              <f.icon className="h-3.5 w-3.5 text-brand-primary" />
              <span className="text-xs font-medium text-ink-800">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Roadmap — planned */}
        <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-ink-500">
          On the roadmap · planned
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {ROADMAP_FEATURES.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink-900/15 bg-white px-2.5 py-1 text-[11px] font-medium text-ink-500"
            >
              <f.icon className="h-3 w-3" />
              {f.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a href="https://yieldaiglobal.com" target="_blank" rel="noopener" className="btn-primary">
            Start Free Trial <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link href="/products/yieldai-global" className="btn-ghost">Explore YieldAI Global →</Link>
        </div>
      </div>

      <ProductVisual accent={p.accent} />
    </div>
    </Tilt>
  );
}

function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <motion.a
      href={p.href}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="card-surface group block h-full p-7"
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
        style={{ background: p.accent }}
      />
      <div className="relative flex h-full flex-col">
        <span className="chip w-max" style={{ borderColor: `${p.accent}55`, color: p.accent }}>
          {p.tagline}
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">{p.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.description}</p>

        <ul className="mt-5 space-y-2.5">
          {p.features.map((f) => (
            <li key={f.label} className="flex items-center gap-2 text-xs text-ink-700">
              <f.icon className="h-3.5 w-3.5 text-brand-primary" />
              {f.label}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between pt-7">
          <div>
            <div className="font-display text-2xl font-semibold text-ink-900">{p.metric.value}</div>
            <div className="text-[11px] text-ink-500">{p.metric.label}</div>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/[0.07] bg-ink-50 text-ink-700 transition-all group-hover:border-brand-primary/50 group-hover:bg-brand-primary/20 group-hover:text-ink-900">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function ProductVisual({ accent }: { accent: string }) {
  return (
    <div className="relative h-full min-h-[300px] rounded-2xl border border-ink-900/[0.07] bg-ink-50 p-5">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-ink-500">
        <span>Crop intelligence · YieldAI Global</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          live · illustrative view
        </span>
      </div>

      {/* Animated bars */}
      <div className="mt-5 grid grid-cols-7 items-end gap-2 h-32">
        {[60, 78, 52, 88, 72, 95, 80].map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="origin-bottom rounded-md"
            style={{
              height: `${h}%`,
              background: `linear-gradient(180deg, ${accent} 0%, ${accent}33 100%)`,
            }}
          />
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-2 text-center text-[9px] text-ink-500">
        {['Wheat', 'Rice', 'Maize', 'Cotton', 'Soy', 'Coffee', 'Tea'].map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>

      {/* Recommendations */}
      <div className="mt-5 space-y-2 rounded-xl border border-ink-900/[0.07] bg-white p-3">
        <div className="text-[10px] uppercase tracking-wider text-ink-500">AI answer · example</div>
        <div className="text-sm font-medium text-ink-900">
          Ask about your crop, today&rsquo;s mandi price, weather, or a government scheme — answered from live data, in your language.
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold text-brand-primary">Live in India · USA · Canada</span>
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-ink-100">
            <span className="block h-full w-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
          </span>
        </div>
      </div>
    </div>
  );
}
