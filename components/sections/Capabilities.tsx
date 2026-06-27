'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import {
  Cpu,
  Database,
  LayoutDashboard,
  Server,
  FlaskConical,
  Lightbulb,
  Search,
  Layers,
  Hammer,
  Rocket,
  Globe2,
} from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Cpu,
    title: 'AI Product Engineering',
    body: 'Build AI applications, predictive systems, and decision engines that ship to production.',
    chips: ['LLM stack', 'Predictive ML', 'Decision engines'],
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    body: 'Data platforms, agricultural analytics, and forecasting engines on petabyte-scale data.',
    chips: ['Pipelines', 'Forecasting', 'Real-time analytics'],
  },
  {
    icon: LayoutDashboard,
    title: 'Digital Agriculture',
    body: 'Farm dashboards, mobile apps, and decision systems that meet farmers where they are.',
    chips: ['Dashboards', 'Mobile-first', 'Multi-lingual'],
  },
  {
    icon: Server,
    title: 'Enterprise Platforms',
    body: 'SaaS, workflow automation, and operational intelligence for enterprise agriculture.',
    chips: ['SaaS', 'Automation', 'RBAC + SSO'],
  },
  {
    icon: FlaskConical,
    title: 'Research & Innovation',
    body: 'In-house AI models, agricultural intelligence, and experimental products at the frontier.',
    chips: ['Foundation models', 'Field trials', 'R&D pipeline'],
  },
];

const LIFECYCLE = [
  { icon: Lightbulb, label: 'Idea' },
  { icon: Search, label: 'Research' },
  { icon: Layers, label: 'Architecture' },
  { icon: Hammer, label: 'Build' },
  { icon: Rocket, label: 'Deploy' },
  { icon: Globe2, label: 'Scale' },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="-left-32 -top-20" color="#0F6B3E" size={500} />
      <GradientOrb className="-right-32 bottom-0" color="#0A84FF" size={500} />

      <div className="container-narrow">
        <div className="max-w-3xl">
          <Reveal>
            <SectionEyebrow>Building AgriTech Products</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
              Building intelligent agriculture products — from{' '}
              <span className="gradient-text-green">idea to scale</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              We design, build, and scale agriculture technology products end-to-end — across AI,
              data, digital, and enterprise platforms.
            </p>
          </Reveal>
        </div>

        {/* Capability grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={0.1 + i * 0.06}>
              <CapabilityCard {...c} />
            </Reveal>
          ))}

          {/* Stats card */}
          <Reveal delay={0.45}>
            <div className="card-surface flex h-full flex-col justify-between p-7">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                  Building to scale
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900">
                  Engineering for production from day one.
                </h3>
                <p className="mt-2 text-xs text-ink-500">Design targets we&rsquo;re building toward.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <Mini label="Latency target" value="<150ms" />
                <Mini label="Uptime goal" value="99.9%" />
                <Mini label="Languages planned" value="10+" />
                <Mini label="Security" value="SOC 2 (planned)" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Lifecycle */}
        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl border border-ink-900/[0.07] bg-gradient-to-b from-white to-ink-50 p-7 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                  Product lifecycle
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900">
                  How we ship.
                </h3>
              </div>
              <span className="chip">Six-stage delivery</span>
            </div>

            <div className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {/* connector line */}
              <span className="absolute left-0 right-0 top-7 hidden h-px lg:block">
                <span className="block h-full w-full bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
              </span>
              {LIFECYCLE.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="relative flex flex-col items-center"
                >
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-900/[0.07] bg-white shadow-[0_24px_60px_-30px_rgba(15,107,62,0.28)]">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-transparent" />
                    <l.icon className="relative h-5 w-5 text-brand-primary" />
                  </span>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                    {`0${i + 1}`}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-ink-900">{l.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CapabilityCard({
  icon: Icon,
  title,
  body,
  chips,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  chips: string[];
}) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="card-surface h-full p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/10 to-transparent text-brand-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{body}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {chips.map((c) => (
          <span
            key={c}
            className="rounded-full border border-ink-900/[0.07] bg-ink-50 px-2.5 py-1 text-[10px] font-medium text-ink-700"
          >
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink-900/[0.07] bg-ink-50 p-3.5">
      <div className="font-display text-lg font-semibold text-ink-900">{value}</div>
      <div className="text-[11px] text-ink-500">{label}</div>
    </div>
  );
}
