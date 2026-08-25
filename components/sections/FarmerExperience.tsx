'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import {
  Sun,
  Mic,
  Droplets,
  Bug,
  TrendingUp,
  Bell,
  CheckCircle2,
  ChevronRight,
  CloudSun,
  Wheat,
} from 'lucide-react';

export function FarmerExperience() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="-left-32 top-20" color="#0F6B3E" size={500} />
      <GradientOrb className="-right-32 bottom-0" color="#0A84FF" size={500} />

      <div className="container-narrow">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <SectionEyebrow>Designed for the farmer</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
                A farmer&rsquo;s AI co-pilot,{' '}
                <span className="gradient-text-green">in the palm of their hand</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
                We built YieldAI Global with farmers — not just for them. Multilingual and
                live in the USA, India, and Canada, designed for 40+ countries. The screens below are an
                illustrative preview — try the real thing free at yieldaiglobal.com.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={0.1 + i * 0.08}>
                  <FarmerStep {...s} index={i + 1} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="chip">
                  <Mic className="h-3 w-3 text-brand-primary" /> Multilingual voice · live
                </span>
                <span className="chip">
                  <CheckCircle2 className="h-3 w-3 text-brand-sun" /> Offline · planned
                </span>
                <span className="chip">
                  <CheckCircle2 className="h-3 w-3 text-brand-sun" /> SMS fallback · planned
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PhoneMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: Sun,
    title: 'Sunrise briefing',
    body: '"Good morning, Rajesh — light rain in 6 hours. Spray window opens 18:42."',
  },
  {
    icon: Mic,
    title: 'Just ask',
    body: 'Voice questions in your language. Crop, soil, weather, market — answered.',
  },
  {
    icon: Bug,
    title: 'Snap to diagnose',
    body: 'Photograph a leaf. Get species-level pest or disease ID with treatment in seconds.',
  },
  {
    icon: TrendingUp,
    title: 'Sell smarter',
    body: 'Live mandi prices, demand signals, and the best week to sell — built in.',
  },
];

function FarmerStep({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-ink-900/[0.07] bg-white p-4 transition-all hover:border-ink-900/[0.12]">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/15 to-transparent text-brand-primary">
        <Icon className="h-4 w-4" />
        <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-secondary text-[9px] font-bold text-brand-dark">
          {index}
        </span>
      </span>
      <div>
        <div className="text-sm font-semibold text-ink-900">{title}</div>
        <div className="mt-1 text-xs leading-relaxed text-ink-600">{body}</div>
      </div>
    </div>
  );
}

/* ---------------- Phone mockup ---------------- */

function PhoneMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(15,107,62,0.35), transparent 70%)',
        }}
      />

      {/* floating notification chip */}
      <motion.div
        animate={{ y: [-8, 4, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-2 top-12 z-10 hidden items-center gap-2 rounded-2xl border border-ink-900/10 bg-white/90 px-3 py-2.5 text-[11px] shadow-[0_24px_60px_-30px_rgba(15,107,62,0.28)] sm:flex"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary/15 text-brand-primary">
          <Droplets className="h-3.5 w-3.5" />
        </span>
        <div>
          <div className="font-semibold text-ink-900">Irrigation suggested</div>
          <div className="text-ink-500">Zone B · 14 min</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [4, -6, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-4 top-1/3 z-10 hidden items-center gap-2 rounded-2xl border border-ink-900/10 bg-white/90 px-3 py-2.5 text-[11px] shadow-[0_24px_60px_-30px_rgba(15,107,62,0.28)] sm:flex"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-accent/25 text-brand-accent">
          <Bug className="h-3.5 w-3.5" />
        </span>
        <div>
          <div className="font-semibold text-ink-900">Pest scan complete</div>
          <div className="text-ink-500">0 threats found</div>
        </div>
      </motion.div>

      {/* the phone */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateY: -8 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="relative h-[640px] w-[320px] rounded-[48px] border border-white/[0.08] p-3 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)]"
          style={{
            background:
              'linear-gradient(155deg, #2a2f38 0%, #0d1014 45%, #1a1d23 100%)',
          }}
        >
          {/* side buttons */}
          <span className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-l-md bg-[#1a1d23]" />
          <span className="absolute -left-[3px] top-44 h-16 w-[3px] rounded-l-md bg-[#1a1d23]" />
          <span className="absolute -right-[3px] top-36 h-20 w-[3px] rounded-r-md bg-[#1a1d23]" />

          {/* screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-[#0a0d12]">
            <PhoneScreen />
            {/* dynamic island */}
            <div className="pointer-events-none absolute left-1/2 top-2 z-30 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />
            {/* reflection */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background:
                  'linear-gradient(115deg, rgba(255,255,255,0.07) 0%, transparent 28%, transparent 70%, rgba(255,255,255,0.04) 100%)',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="relative h-full w-full px-5 pb-6 pt-12 text-white">
      {/* status bar */}
      <div className="flex items-center justify-between text-[10px] text-white/80">
        <span className="font-semibold">7:24</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
          <span>5G</span>
          <span>·</span>
          <span>94%</span>
        </span>
      </div>

      {/* greeting */}
      <div className="mt-5">
        <div className="text-[10px] uppercase tracking-wider text-ink-400">YieldAI Global</div>
        <h3 className="mt-1 font-display text-xl font-semibold leading-tight text-white">
          Good morning,
          <br />
          Rajesh.
        </h3>
      </div>

      {/* weather card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-brand-primary/30 to-brand-accent/15 p-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-ink-200">Bengaluru, IN</div>
            <div className="mt-0.5 font-display text-3xl font-semibold text-white">
              28°<span className="text-sm text-ink-300">C</span>
            </div>
            <div className="text-[10px] text-ink-300">Light rain in 6 hours</div>
          </div>
          <CloudSun className="h-10 w-10 text-brand-secondary" />
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1 text-center text-[9px] text-ink-200">
          {[
            { h: '8am', t: 26 },
            { h: '12pm', t: 30 },
            { h: '4pm', t: 28 },
            { h: '8pm', t: 24 },
          ].map((h) => (
            <div key={h.h} className="rounded-lg bg-white/5 py-1.5">
              <div className="text-white">{h.t}°</div>
              <div>{h.h}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI suggestion */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mt-3 rounded-2xl border border-brand-secondary/30 bg-brand-primary/15 p-3"
      >
        <div className="flex items-center justify-between text-[10px]">
          <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-brand-secondary">
            <Bell className="h-3 w-3" /> Today&rsquo;s plan
          </span>
          <span className="text-ink-300">AI · 94%</span>
        </div>
        <div className="mt-2 text-sm font-semibold leading-snug text-white">
          Hold spray today. Window opens 18:42 — rain risk drops to 12%.
        </div>
        <div className="mt-3 flex gap-1.5">
          <span className="flex-1 rounded-lg bg-white/10 px-2 py-1.5 text-center text-[10px] font-semibold text-white">
            Got it
          </span>
          <span className="rounded-lg bg-brand-secondary px-2.5 py-1.5 text-[10px] font-semibold text-brand-dark">
            Schedule →
          </span>
        </div>
      </motion.div>

      {/* tasks */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-3"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">
            On your farm
          </span>
          <ChevronRight className="h-3 w-3 text-ink-400" />
        </div>
        <div className="mt-2 space-y-1.5">
          {[
            { icon: Wheat, t: 'Plot 7 — vigor 96%', s: 'Excellent', c: 'text-brand-secondary' },
            { icon: Droplets, t: 'Zone B irrigation due', s: '14 min', c: 'text-brand-accent' },
            { icon: TrendingUp, t: 'Wheat price ↑ 2.4% in mandi', s: 'Rs 2,840', c: 'text-brand-secondary' },
          ].map((row) => (
            <div
              key={row.t}
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-2.5 py-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-brand-secondary">
                <row.icon className="h-3 w-3" />
              </span>
              <div className="flex-1">
                <div className="text-[11px] font-medium text-white">{row.t}</div>
              </div>
              <span className={`text-[10px] font-semibold ${row.c}`}>{row.s}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* voice bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65 }}
        className="absolute inset-x-5 bottom-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 p-2"
      >
        {/* Decoration inside the illustrative phone mock, not a control. As a <button> it
            was a keyboard tab stop with no accessible name and nothing to activate. */}
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-glow-primary"
        >
          <Mic className="h-4 w-4" />
        </span>
        <div className="flex flex-1 items-center gap-1.5">
          {[16, 22, 30, 24, 18, 28, 22, 14].map((h, i) => (
            <motion.span
              key={i}
              className="block w-1 rounded-full bg-brand-secondary"
              animate={{ height: [h, h * 0.4, h] }}
              transition={{ duration: 0.8 + i * 0.08, repeat: Infinity, ease: 'easeInOut' }}
              style={{ height: h }}
            />
          ))}
        </div>
        <span className="pr-1 text-[10px] font-medium text-ink-300">EN · HI · KN</span>
      </motion.div>
    </div>
  );
}
