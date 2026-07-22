'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Layers, Hammer, Rocket } from 'lucide-react';
import { CountUp } from '../primitives';
import { FarmerWorking } from './FarmerWorking';
import { Tilt } from '../Tilt';

// Honest positioning — the flagship product is live; the company is still early.
type HeroStat = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value?: string;
  to?: number;
  suffix?: string;
};
const HERO_STATS: HeroStat[] = [
  { label: 'YieldAI Global', value: 'Live', icon: Rocket },
  { label: 'Available in', value: 'IN · US · CA', icon: Globe2 },
  { label: 'Market prices', value: 'Live data', icon: Layers },
  { label: 'Interface', value: 'Multilingual', icon: Hammer },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40">
      {/* atmospheric depth — layered mesh + grid + grain */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh-hero absolute inset-x-0 top-0 h-[820px]" />
        <div className="absolute inset-x-0 top-0 h-[520px] grid-bg opacity-60" />
        <div
          className="animate-float-slow absolute -left-40 top-10 h-[560px] w-[560px] rounded-full blur-[2px]"
          style={{ background: 'radial-gradient(circle, rgba(93,187,99,0.22), transparent 70%)' }}
        />
        <div
          className="absolute -right-32 top-40 h-[520px] w-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(10,132,255,0.12), transparent 70%)' }}
        />
        <div className="grain absolute inset-0 h-[820px]" />
      </div>

      <div className="container-narrow">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-full items-center gap-2 rounded-full border border-ink-900/10 bg-white px-3.5 py-1.5 shadow-[0_1px_2px_rgba(20,23,28,0.04)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_1px_rgba(15,107,62,0.6)]" />
          <span className="text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-600 sm:text-xs sm:tracking-[0.12em]">
            AI-first AgriTech · YieldAI Global is live
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-4xl text-balance text-center font-display text-display-xl text-ink-900"
        >
          Driving innovation and growth in{' '}
          <span className="gradient-text-green">agriculture with AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-balance text-center text-base leading-relaxed text-ink-600 sm:text-lg"
        >
          Our flagship product, YieldAI Global, is live in the USA, India, and Canada — AI crop advice,
          live government market prices, weather, and scheme guidance, in the farmer&rsquo;s own language.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="https://yieldaiglobal.com" target="_blank" rel="noopener" className="btn-primary">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#products" className="btn-secondary">
            Explore YieldAI Global
          </a>
          <a href="#farmer" className="btn-ghost ml-1">
            See how farmers use it →
          </a>
        </motion.div>

        {/* THE FARMER-WORKING SCENE */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-14 max-w-6xl"
        >
          <Tilt max={6} glare className="rounded-[28px]">
            <div className="tilt-layer overflow-hidden rounded-[28px] border border-ink-900/[0.08] bg-white shadow-[0_2px_6px_rgba(20,23,28,0.05),0_50px_90px_-40px_rgba(15,107,62,0.35)]">
              <FarmerWorking className="aspect-[1200/620]" />
            </div>
          </Tilt>
        </motion.div>

        {/* stats */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.07 }}
              className="card-surface p-5"
            >
              <div className="flex items-center justify-between">
                <s.icon className="h-4 w-4 text-brand-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                  Live
                </span>
              </div>
              <div className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900">
                {s.value ? s.value : <CountUp to={s.to as number} suffix={s.suffix} />}
              </div>
              <div className="mt-1 text-xs text-ink-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
