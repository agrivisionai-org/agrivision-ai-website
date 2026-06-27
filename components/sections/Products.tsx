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
  Droplets,
  GraduationCap,
  BookOpen,
  Compass,
  Wand2,
} from 'lucide-react';

// Flagship MVP — what we're building now (safe, current scope)
const MVP_FEATURES = [
  { icon: Wheat, label: 'Crop Advisory' },
  { icon: Activity, label: 'Pest Intelligence' },
  { icon: Sparkles, label: 'Market Insights' },
  { icon: TrendingUp, label: 'Dashboard' },
];

// Flagship roadmap — planned capabilities (not yet built)
const ROADMAP_FEATURES = [
  { icon: TrendingUp, label: 'Yield Prediction' },
  { icon: CloudRain, label: 'Weather Intelligence' },
  { icon: Bug, label: 'Disease Detection' },
  { icon: Mic, label: 'Voice Assistant' },
  { icon: Wifi, label: 'IoT Sensors' },
  { icon: Droplets, label: 'Smart Irrigation' },
];

const PRODUCTS = [
  {
    name: 'YieldAI Global',
    tagline: 'Flagship · MVP',
    status: 'In development',
    description:
      'An AI-powered agriculture platform we are building now — crop advisory, pest intelligence, market insights, and a dashboard, with IoT and yield prediction on the roadmap.',
    accent: '#5DBB63',
    features: MVP_FEATURES,
    metric: { value: 'MVP', label: 'In development' },
    href: '#contact',
  },
  {
    name: 'CropVision',
    tagline: 'Roadmap',
    status: 'Planned',
    description: 'Computer-vision module for crop health and disease monitoring — planned for future implementation.',
    accent: '#0A84FF',
    features: [
      { icon: Eye, label: 'Field imagery analysis' },
      { icon: Bug, label: 'Disease classification' },
      { icon: Activity, label: 'Stress detection' },
      { icon: Sparkles, label: 'On-device inference' },
    ],
    metric: { value: 'Roadmap', label: 'Planned capability' },
    href: '#contact',
  },
  {
    name: 'AgriSense',
    tagline: 'Roadmap · IoT',
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
    href: '#contact',
  },
  {
    name: 'FarmOS',
    tagline: 'Concept',
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
    href: '#contact',
  },
  {
    name: 'AgriSphere',
    tagline: 'In development',
    status: 'In development',
    description: 'Agricultural learning platform — courses in hydroponics, organic farming, smart AgTech, and permaculture.',
    accent: '#0F6B3E',
    features: [
      { icon: BookOpen, label: 'Course library' },
      { icon: Compass, label: 'Explore tracks' },
      { icon: Wand2, label: 'Agri Studio' },
      { icon: GraduationCap, label: 'Expert-led' },
    ],
    metric: { value: 'MVP', label: 'In development' },
    href: '#agrisphere',
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
                A product family we&rsquo;re building — intelligence, vision, IoT, and operations — on a
                shared AI fabric. Some are in development; others are on the roadmap.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <a href="#contact" className="btn-secondary">
              See the roadmap
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* Flagship */}
        <Reveal delay={0.1} className="mt-14 block">
          <FlagshipCard p={PRODUCTS[0]} />
        </Reveal>

        {/* Secondary products + AgriSphere */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.slice(1).map((p, i) => (
            <Reveal key={p.name} delay={0.15 + i * 0.08}>
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
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip" style={{ borderColor: `${p.accent}55`, color: p.accent }}>
            <Sparkles className="h-3 w-3" /> {p.tagline}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-sun/30 bg-brand-sun/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-sun">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" /> {p.status}
          </span>
        </div>
        <h3 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink-900">
          {p.name}
        </h3>
        <p className="mt-3 max-w-md text-base text-ink-700">{p.description}</p>

        {/* MVP — building now */}
        <div className="mt-7 text-[11px] font-semibold uppercase tracking-wider text-brand-primary">
          In the MVP · building now
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
          <a href="#contact" className="btn-primary">
            Request early access <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-ghost">Talk to the team →</a>
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
        <span>Crop intelligence · concept preview</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" />
          mockup
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
        <div className="text-[10px] uppercase tracking-wider text-ink-500">AI recommendation · concept</div>
        <div className="text-sm font-medium text-ink-900">
          Targeted nitrogen guidance per plot — an example of what we&rsquo;re building.
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-brand-primary">MVP in development</span>
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-ink-100">
            <span className="block h-full w-2/3 bg-gradient-to-r from-brand-primary to-brand-secondary" />
          </span>
        </div>
      </div>
    </div>
  );
}
