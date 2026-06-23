'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Activity, Users, Cpu } from 'lucide-react';
import { CountUp } from '../primitives';
import { FarmerWorking } from './FarmerWorking';

const HERO_STATS = [
  { label: 'Active markets', to: 3, suffix: '', icon: Globe2 },
  { label: 'AI predictions', to: 8.4, suffix: 'M', decimals: 1, icon: Activity },
  { label: 'Farmers on platform', to: 92000, format: (n: number) => Math.round(n / 1000) + 'K+', icon: Users },
  { label: 'AI requests / day', to: 1.2, suffix: 'M', decimals: 1, icon: Cpu },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[520px] grid-bg opacity-60" />
        <div
          className="absolute -left-40 top-10 h-[560px] w-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(93,187,99,0.20), transparent 70%)' }}
        />
        <div
          className="absolute -right-32 top-40 h-[520px] w-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,92,43,0.12), transparent 70%)' }}
        />
      </div>

      <div className="container-narrow">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-max items-center gap-2 rounded-full border border-ink-900/10 bg-white px-3.5 py-1.5 shadow-[0_1px_2px_rgba(20,23,28,0.04)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_1px_rgba(15,107,62,0.6)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
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
          We build intelligent agriculture products that transform how crops are managed, decisions
          are made, and farming ecosystems operate — across the USA, India, and Canada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#products" className="btn-primary">
            Explore YieldAI Global <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-secondary">
            Book a demo
          </a>
          <a href="#farmer" className="btn-ghost ml-1">
            See how farmers use it →
          </a>
        </motion.div>

        {/* THE FARMER-WORKING SCENE */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-6xl"
        >
          <FarmerWorking className="aspect-[1200/620]" />
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
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">Live</span>
              </div>
              <div className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900">
                <CountUp
                  to={s.to}
                  suffix={s.suffix}
                  format={s.format ? s.format : s.decimals ? (n) => n.toFixed(s.decimals) : undefined}
                />
              </div>
              <div className="mt-1 text-xs text-ink-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
