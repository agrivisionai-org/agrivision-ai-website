'use client';

import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import {
  Bug,
  ShieldCheck,
  Target,
  BarChart3,
  Leaf,
  CalendarX,
  ScanLine,
  Droplets,
  FlaskConical,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Bug,
    title: 'Pest Prediction',
    body: 'Forecast pest pressure 7–14 days ahead from weather + crop signal.',
  },
  {
    icon: ShieldCheck,
    title: 'Disease Prevention',
    body: 'Pre-emergent advisories with low-impact alternatives.',
  },
  {
    icon: Target,
    title: 'Targeted Recommendations',
    body: 'Spray only the right plot, the right day, the right dose.',
  },
  {
    icon: BarChart3,
    title: 'Season Analytics',
    body: 'Keep a record of what you applied, when, and what it cost.',
  },
];

/** The mechanism — each row is a real decision a live module informs. */
const MECHANISM = [
  {
    icon: CalendarX,
    decision: 'When to spray',
    module: 'Pest Prediction',
    effect: 'Spray on a forecast signal instead of a fixed calendar.',
  },
  {
    icon: ScanLine,
    decision: 'Where to spray',
    module: 'CropVision',
    effect: 'Catch disease early from a photo and treat the affected plot, not the whole field.',
  },
  {
    icon: Droplets,
    decision: 'When to irrigate',
    module: 'Weather Intelligence',
    effect: 'Schedule watering against evapotranspiration and the forecast, not habit.',
  },
  {
    icon: FlaskConical,
    decision: 'What to feed',
    module: 'Soil Analysis',
    effect: 'Apply against what the soil actually lacks rather than a default dose.',
  },
];

export function Sustainability() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="-left-32 top-20" color="#0F6B3E" size={500} />

      <div className="container-narrow">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Reveal>
              <SectionEyebrow>Low-pesticide agriculture</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
                <span className="gradient-text-green">Grow more.</span>
                <br />
                Use less.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
                Most wasted input comes from a decision made on a calendar or a habit rather than on
                a signal. YieldAI Global exists to put a signal behind those decisions — so a farmer
                sprays, waters and feeds when the crop actually needs it.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={0.1 + i * 0.08}>
                  <div className="group flex h-full items-start gap-3 rounded-xl border border-ink-900/[0.07] bg-ink-50 p-4 transition-all hover:border-ink-900/[0.12]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary/20 text-brand-primary">
                      <f.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink-900">{f.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-ink-600">{f.body}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <MechanismPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MechanismPanel() {
  return (
    <div className="glass-strong relative rounded-3xl p-1.5">
      <div className="rounded-[22px] border border-ink-900/[0.07] bg-white p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-600">
              How less gets used
            </span>
          </div>
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            Live modules
          </span>
        </div>

        <div className="mt-7 space-y-3">
          {MECHANISM.map((m) => (
            <div
              key={m.decision}
              className="flex items-start gap-4 rounded-2xl border border-ink-900/[0.07] bg-ink-50 p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-primary shadow-[0_2px_10px_-6px_rgba(20,23,28,0.35)]">
                <m.icon className="h-4 w-4" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-ink-900">{m.decision}</span>
                  <span className="rounded-full border border-brand-primary/25 bg-brand-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                    {m.module}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-600">{m.effect}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-ink-900/[0.07] bg-white p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-600">
            On the numbers
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            We haven&rsquo;t measured the aggregate effect across farms yet, so we don&rsquo;t publish
            a percentage. When we have field data worth standing behind, we&rsquo;ll publish the
            result and the method behind it.
          </p>
        </div>
      </div>
    </div>
  );
}
