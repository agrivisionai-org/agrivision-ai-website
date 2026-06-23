'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import {
  ArrowUpRight,
  Sparkles,
  CloudRain,
  Bug,
  Wheat,
  Mic,
  Building2,
  TrendingUp,
  Activity,
  Eye,
  Wifi,
  Cog,
} from 'lucide-react';

const PRODUCTS = [
  {
    name: 'YieldAI Global',
    tagline: 'Flagship',
    description: 'AI-powered agriculture intelligence platform.',
    accent: '#5DBB63',
    features: [
      { icon: Wheat, label: 'Crop Recommendation' },
      { icon: TrendingUp, label: 'Yield Prediction' },
      { icon: CloudRain, label: 'Weather Intelligence' },
      { icon: Bug, label: 'Disease Detection' },
      { icon: Activity, label: 'Pest Monitoring' },
      { icon: Mic, label: 'Voice Assistant' },
      { icon: Building2, label: 'Government Services' },
      { icon: Sparkles, label: 'Market Analytics' },
    ],
    metric: { value: '8.4M+', label: 'Predictions / mo' },
    href: '#contact',
  },
  {
    name: 'CropVision',
    tagline: 'Computer vision',
    description: 'Computer vision platform for crop health and disease monitoring.',
    accent: '#0A84FF',
    features: [
      { icon: Eye, label: 'Field imagery analysis' },
      { icon: Bug, label: 'Disease classification' },
      { icon: Activity, label: 'Stress detection' },
      { icon: Sparkles, label: 'On-device inference' },
    ],
    metric: { value: '98.7%', label: 'Detection accuracy' },
    href: '#contact',
  },
  {
    name: 'AgriSense',
    tagline: 'IoT + AI',
    description: 'IoT + AI monitoring platform for farms, soil, irrigation, and microclimate.',
    accent: '#5DBB63',
    features: [
      { icon: Wifi, label: 'Sensor fabric' },
      { icon: Activity, label: 'Real-time telemetry' },
      { icon: CloudRain, label: 'Microclimate intel' },
      { icon: Cog, label: 'Edge automation' },
    ],
    metric: { value: '42K+', label: 'Devices online' },
    href: '#contact',
  },
  {
    name: 'FarmOS',
    tagline: 'Operations',
    description: 'Farm operations and management system for enterprises and cooperatives.',
    accent: '#0A84FF',
    features: [
      { icon: Cog, label: 'Workflow automation' },
      { icon: TrendingUp, label: 'Yield & cost ledger' },
      { icon: Building2, label: 'Multi-farm ops' },
      { icon: Sparkles, label: 'AI assistant' },
    ],
    metric: { value: '600+', label: 'Enterprises onboarded' },
    href: '#contact',
  },
];

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="-right-40 top-40" color="#0A84FF" size={500} />
      <div className="container-narrow">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow>Our Products</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
                Products we are building for{' '}
                <span className="gradient-text-green">global agriculture</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700">
                A product family spanning intelligence, vision, IoT, and operations — built on the same
                AI fabric.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <a href="#contact" className="btn-secondary">
              All products
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Flagship */}
          <Reveal delay={0.1} className="lg:col-span-12">
            <FlagshipCard p={PRODUCTS[0]} />
          </Reveal>

          {PRODUCTS.slice(1).map((p, i) => (
            <Reveal key={p.name} delay={0.15 + i * 0.08} className="lg:col-span-4">
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="card-surface relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${p.accent}22, transparent 50%)`,
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span
            className="chip"
            style={{ borderColor: `${p.accent}55`, color: p.accent }}
          >
            <Sparkles className="h-3 w-3" /> {p.tagline}
          </span>
        </div>
        <h3 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900">
          {p.name}
        </h3>
        <p className="mt-3 max-w-md text-base text-ink-700">{p.description}</p>

        <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-2">
          {p.features.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-2.5 rounded-xl border border-ink-900/[0.07] bg-ink-50 px-3 py-2.5"
            >
              <f.icon className="h-3.5 w-3.5 text-brand-primary" />
              <span className="text-xs font-medium text-ink-800">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a href={p.href} className="btn-primary">
            Explore platform <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-ghost">Talk to product team →</a>
        </div>
      </div>

      <ProductVisual accent={p.accent} />
    </motion.div>
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
        <span>Crop intelligence · live</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
          streaming
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
        <div className="text-[10px] uppercase tracking-wider text-ink-500">AI recommendation</div>
        <div className="text-sm font-medium text-ink-900">
          Apply targeted nitrogen at 18kg/ha for plot 7 — projected +9.2% yield.
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-brand-primary">Confidence 94%</span>
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-ink-100">
            <span className="block h-full w-[94%] bg-gradient-to-r from-brand-primary to-brand-secondary" />
          </span>
        </div>
      </div>
    </div>
  );
}
