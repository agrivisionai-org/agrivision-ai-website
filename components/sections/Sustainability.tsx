'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, CountUp, GradientOrb } from '../primitives';
import { Bug, ShieldCheck, Target, BarChart3, Leaf } from 'lucide-react';

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
    title: 'Sustainability Analytics',
    body: 'Track input reduction, runoff impact, and ROI per season.',
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
                We&rsquo;re building AI and predictive models to reduce unnecessary pesticide usage —
                without compromising yield. The figures below are modelled projections, not results
                yet.
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
            <ImpactDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ImpactDashboard() {
  return (
    <div className="glass-strong relative rounded-3xl p-1.5">
      <div className="rounded-[22px] border border-ink-900/[0.07] bg-white p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-600">
              Projected impact · model
            </span>
          </div>
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" />
            Projection
          </span>
        </div>

        {/* Big numbers */}
        <div className="mt-7 grid grid-cols-2 gap-3">
          <ImpactStat
            label="Projected pesticide reduction"
            value={<><CountUp to={37} suffix="%" /></>}
            color="text-brand-primary"
          />
          <ImpactStat
            label="Projected water saved"
            value={<><CountUp to={2.4} format={(n) => n.toFixed(1)} suffix="B L" /></>}
            color="text-brand-accent"
          />
          <ImpactStat
            label="Projected carbon offset"
            value={<><CountUp to={184} suffix="K t" /></>}
            color="text-brand-primary"
          />
          <ImpactStat
            label="Pilot farms · target"
            value={<><CountUp to={10} suffix="K" /></>}
            color="text-brand-accent"
          />
        </div>

        {/* Bar chart */}
        <div className="mt-8 rounded-2xl border border-ink-900/[0.07] bg-ink-50 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-600">
              Projected input reduction
            </span>
            <span className="text-[11px] text-brand-sun">modelled</span>
          </div>

          <div className="mt-5 flex items-end gap-3 h-32">
            {[
              { q: 'Q1', base: 100, ai: 78 },
              { q: 'Q2', base: 100, ai: 71 },
              { q: 'Q3', base: 100, ai: 66 },
              { q: 'Q4', base: 100, ai: 61 },
            ].map((d, i) => (
              <div key={d.q} className="flex flex-1 flex-col items-center">
                <div className="relative flex h-full w-full items-end gap-1">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-md bg-ink-100"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${d.ai}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-primary to-brand-secondary"
                  />
                </div>
                <span className="mt-2 text-[10px] text-ink-500">{d.q}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 text-[10px] text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-ink-200" /> Baseline
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-brand-secondary" /> With YieldAI Global
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactStat({
  label,
  value,
  color,
}: {
  label: string;
  value: React.ReactNode;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-900/[0.07] bg-ink-50 p-5">
      <div className={`font-display text-3xl font-semibold tabular-nums ${color}`}>{value}</div>
      <div className="mt-1 text-xs text-ink-600">{label}</div>
    </div>
  );
}
