'use client';

import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import {
  Target,
  Eye,
  Sparkles,
  Smartphone,
  ArrowUpRight,
  Check,
  Sprout,
  CloudSun,
  BadgeIndianRupee,
  Landmark,
  Languages,
  ShieldCheck,
} from 'lucide-react';

const CARDS = [
  {
    icon: Target,
    tag: 'Mission',
    title: 'Intelligence every farmer can trust',
    body: 'To put accurate, AI-powered agricultural guidance in the hands of every farmer and extension worker — grounded in real data and delivered in their own language. Good advice should not depend on where you farm, how big your holding is, or which language you speak.',
    points: [
      'Answers grounded in real government and agronomic data, not guesswork',
      'Every response in the farmer’s own language',
      'Honest about uncertainty — routes to a local extension officer when it matters',
    ],
    accent: '#0F6B3E',
  },
  {
    icon: Eye,
    tag: 'Vision',
    title: 'A smarter harvest, everywhere',
    body: 'A world where every farming decision — in every language, in every country — is backed by intelligence farmers can rely on. We start with the extension workers and smallholders who feed the world, and scale outward from there.',
    points: [
      'From 3 countries today toward 40+ over time',
      'Built for the ~1,200 households one extension worker often serves',
      'Voice-first and multilingual by design',
    ],
    accent: '#0A84FF',
  },
  {
    icon: Sparkles,
    tag: 'Motto',
    title: 'AI for a sustainable future',
    body: 'Technology in service of the land, the farmer, and the next harvest. We build tools that are honest about what they know — and careful with what they don’t — because a confident wrong answer can cost someone an entire season.',
    points: [
      'Right over impressive, every time',
      'Less waste: smarter inputs, water, and pesticide use',
      'Building in public, honestly',
    ],
    accent: '#C9922B',
  },
];

const APP_FEATURES = [
  { icon: Sprout, label: 'AI crop advice' },
  { icon: BadgeIndianRupee, label: 'Live mandi prices' },
  { icon: CloudSun, label: 'Weather & alerts' },
  { icon: Landmark, label: 'Government schemes' },
  { icon: Languages, label: 'Your own language' },
  { icon: ShieldCheck, label: 'Grounded in real data' },
];

export function Purpose() {
  return (
    <section id="purpose" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mesh-soft pointer-events-none absolute inset-0 -z-10" />
      <GradientOrb className="-right-40 top-24" color="#0F6B3E" size={480} />

      <div className="container-narrow">
        <div className="max-w-2xl">
          <Reveal>
            <SectionEyebrow>What drives us</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
              Our mission, vision &amp; <span className="gradient-text-green">the app that proves it</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              AGRIVISION AI exists to close the gap between modern AI and the people who grow the
              world’s food. Here is what we stand for — and the live product where it becomes real.
            </p>
          </Reveal>
        </div>

        {/* Mission / Vision / Motto */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.tag} delay={0.1 + i * 0.08}>
              <div className="card-surface group flex h-full flex-col p-7">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accent}99 100%)` }}
                >
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: c.accent }}>
                  {c.tag}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{c.body}</p>
                <ul className="mt-5 space-y-2.5 border-t border-ink-900/[0.07] pt-5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.accent }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* App — YieldAI Global */}
        <Reveal delay={0.15} className="mt-6 block">
          <div className="card-surface relative overflow-hidden p-7 sm:p-9">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: 'radial-gradient(circle at 12% 20%, #0F6B3E22, transparent 55%)' }}
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
                  <Smartphone className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary">
                      The app
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> Live
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink-900">
                    YieldAI Global
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-700">
                    Our live AI farming assistant, and the clearest expression of everything above. A
                    farmer asks a real question — about a crop, today’s market price, the weather, or a
                    government scheme — and gets a clear, correct answer in their own language. Available
                    in India, the USA &amp; Canada, with a free trial.
                  </p>
                </div>
              </div>
              <a
                href="https://yieldaiglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0 self-start"
              >
                Try it free
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative mt-8 grid grid-cols-2 gap-2.5 border-t border-ink-900/[0.07] pt-7 sm:grid-cols-3">
              {APP_FEATURES.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2.5 rounded-xl border border-ink-900/[0.07] bg-ink-50 px-3.5 py-3"
                >
                  <f.icon className="h-4 w-4 shrink-0 text-brand-primary" />
                  <span className="text-sm font-medium text-ink-800">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
