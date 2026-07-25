'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, CountUp, GradientOrb } from '../primitives';
import {
  Sprout,
  LineChart,
  Microscope,
  Leaf,
  TrendingUp,
  Bot,
  BarChart3,
  Building2,
} from 'lucide-react';

const FOCUS_AREAS = [
  { icon: Sprout, label: 'Precision Agriculture' },
  { icon: LineChart, label: 'Predictive Farming' },
  { icon: Microscope, label: 'Crop Intelligence' },
  { icon: Leaf, label: 'Sustainable Agriculture' },
  { icon: TrendingUp, label: 'Market Intelligence' },
  { icon: Bot, label: 'Farm Automation' },
  { icon: BarChart3, label: 'Agricultural Analytics' },
  { icon: Building2, label: 'Enterprise Agriculture' },
];

const TIMELINE = [
  { year: '2026', title: 'AGRIVISION AI founded', body: 'A founder-led, AI-first AgriTech company set out to build intelligent agriculture products.' },
  { year: 'Now', title: 'YieldAI Global is live', body: 'AI crop advice, live government market prices, weather, and scheme guidance — live in the USA, India, and Canada.' },
  { year: 'Next', title: 'Grow & expand', body: 'Scaling YieldAI Global toward 40+ countries with deeper crop intelligence.' },
  { year: 'Roadmap', title: 'Planned modules', body: 'AgriSense (IoT), deeper yield prediction, and smart irrigation — planned for future implementation.' },
];

const STATS = [
  { label: 'Flagship product', value: 'Live' },
  { label: 'Available in', value: '3 countries' },
  { label: 'Languages', value: '13' },
  { label: 'Innovation', value: 'AI Powered' },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mesh-soft pointer-events-none absolute inset-0 -z-10" />
      <GradientOrb className="-left-40 top-40" color="#0F6B3E" size={500} />

      <div className="container-narrow">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <Reveal>
              <SectionEyebrow>About AGRIVISION AI</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl text-balance font-display text-display-lg text-ink-900">
                The AI company building the next generation of{' '}
                <span className="gradient-text-green">AgriTech products</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-700">
                <p>
                  AGRIVISION AI is an AI-first technology company focused on designing and building
                  intelligent agriculture products and digital ecosystems.
                </p>
                <p>
                  We combine artificial intelligence, analytics, predictive systems, automation, and
                  modern software engineering to solve agriculture challenges at scale.
                </p>
              </div>
            </Reveal>

            {/* Focus area pills */}
            <Reveal delay={0.3}>
              <div className="mt-10">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  We build across
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-2">
                  {FOCUS_AREAS.map((f, i) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.6 }}
                      className="group flex items-center gap-3 rounded-xl border border-ink-900/[0.07] bg-ink-50 px-3.5 py-3 transition-all hover:border-ink-900/[0.12] hover:bg-brand-primary/10"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/15 text-brand-primary transition-all group-hover:bg-brand-primary/25">
                        <f.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-ink-800">{f.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Timeline */}
          <Reveal delay={0.2}>
            <div className="relative rounded-3xl border border-ink-900/[0.07] bg-white p-6 sm:p-8 shadow-[0_24px_60px_-30px_rgba(15,107,62,0.28)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-primary">
                    Company timeline
                  </div>
                  <div className="mt-1 font-display text-2xl font-semibold text-ink-900">
                    From idea to MVP
                  </div>
                </div>
                <span className="chip">Founded May 2026</span>
              </div>

              <ol className="relative mt-8 space-y-7 border-l border-ink-900/[0.07] pl-6">
                {TIMELINE.map((t, i) => (
                  <motion.li
                    key={t.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.7 }}
                    className="relative"
                  >
                    <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center">
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-brand-primary/40" />
                      <span className="h-2 w-2 rounded-full bg-brand-primary shadow-[0_0_12px_2px_rgba(15,107,62,0.4)]" />
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-semibold text-brand-primary">{t.year}</span>
                      <span className="text-base font-semibold text-ink-900">{t.title}</span>
                    </div>
                    <p className="mt-1.5 text-sm text-ink-600">{t.body}</p>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-ink-900/[0.07] pt-6">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-xl bg-ink-50 p-3.5">
                    <div className="font-display text-xl font-semibold text-ink-900">
                      {s.value}
                    </div>
                    <div className="text-[11px] text-ink-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
