'use client';

import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import {
  LayoutDashboard,
  Tractor,
  CalendarDays,
  History,
  FlaskConical,
  Sprout,
  ScanLine,
  Bug,
  BadgeIndianRupee,
  TrendingUp,
  Store,
  Plane,
  CloudSun,
  Bell,
  BarChart3,
  LineChart,
  Mic,
  ArrowUpRight,
} from 'lucide-react';

const GROUPS = [
  {
    title: 'Plan & manage',
    body: 'One place for every field, season and record.',
    accent: '#0F6B3E',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard' },
      { icon: Tractor, label: 'My Farms' },
      { icon: CalendarDays, label: 'Farm Calendar' },
      { icon: History, label: 'Farm History' },
    ],
  },
  {
    title: 'Crop intelligence',
    body: 'What to grow, what is wrong, and what is coming.',
    accent: '#0A84FF',
    items: [
      { icon: FlaskConical, label: 'Soil Analysis' },
      { icon: Sprout, label: 'Crop Recommendation' },
      { icon: ScanLine, label: 'Disease Detection' },
      { icon: Bug, label: 'Pest Prediction' },
      { icon: LineChart, label: 'Yield Prediction' },
    ],
  },
  {
    title: 'Market & profit',
    body: 'From today’s price to what the season is worth.',
    accent: '#C9922B',
    items: [
      { icon: BadgeIndianRupee, label: 'Market Prices' },
      { icon: TrendingUp, label: 'Profit Prediction' },
      { icon: Store, label: 'Store Locator' },
      { icon: Plane, label: 'Drone Marketplace' },
    ],
  },
  {
    title: 'Signals & insight',
    body: 'The alerts and numbers that drive the next decision.',
    accent: '#7A4FD1',
    items: [
      { icon: CloudSun, label: 'Weather Intelligence' },
      { icon: Bell, label: 'Notifications' },
      { icon: BarChart3, label: 'Analytics' },
      { icon: Mic, label: 'Voice Assistant' },
    ],
  },
];

const FACTS = [
  { value: '17', label: 'Modules in the platform' },
  { value: '13', label: 'Languages supported' },
  { value: '54', label: 'Crops covered' },
  { value: '3', label: 'Countries live' },
];

export function Platform() {
  return (
    <section id="platform" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mesh-soft pointer-events-none absolute inset-0 -z-10" />
      <GradientOrb className="-left-40 top-32" color="#0A84FF" size={480} />

      <div className="container-narrow">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow>Inside the platform</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
                Seventeen modules,{' '}
                <span className="gradient-text-green">one farming assistant</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700">
                YieldAI Global is more than a chat box. Behind the free trial is a full platform for
                the farm — from soil and crop choice to pests, prices, profit and the season’s record.
                All of it in the farmer’s own language.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <a
              href="https://yieldaiglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start free trial
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* Module groups */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={0.1 + i * 0.07}>
              <div className="card-surface flex h-full flex-col p-7">
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: g.accent }}
                >
                  {g.title}
                </div>
                <p className="mt-2 text-sm text-ink-600">{g.body}</p>
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <div
                      key={it.label}
                      className="flex items-center gap-2.5 rounded-xl border border-ink-900/[0.07] bg-ink-50 px-3.5 py-3 transition-colors hover:border-ink-900/[0.12]"
                    >
                      <it.icon className="h-4 w-4 shrink-0" style={{ color: g.accent }} />
                      <span className="text-sm font-medium text-ink-800">{it.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Facts */}
        <Reveal delay={0.2} className="mt-6 block">
          <div className="card-surface grid grid-cols-2 gap-6 p-7 sm:grid-cols-4 sm:p-8">
            {FACTS.map((f) => (
              <div key={f.label}>
                <div className="font-display text-3xl font-semibold text-ink-900">{f.value}</div>
                <div className="mt-1 text-xs leading-relaxed text-ink-500">{f.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-6 text-sm text-ink-500">
            30-day free trial, then the Pro plan at Rs 149/month in India, $9.99 in the USA or
            C$9.99 in Canada. Market prices come from government sources — mandi
            data in India, USDA in the USA and StatCan in Canada.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
