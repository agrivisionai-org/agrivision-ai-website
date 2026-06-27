'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import {
  Compass,
  BookOpen,
  Wand2,
  Search,
  Droplets,
  Leaf,
  Cpu,
  TreePine,
  GraduationCap,
  ArrowUpRight,
  Hammer,
} from 'lucide-react';

const COURSES = [
  { icon: Droplets, title: 'Hydroponics', tag: 'Soil-free growing', color: '#0A84FF' },
  { icon: Leaf, title: 'Organic Farming', tag: 'Regenerative practice', color: '#5DBB63' },
  { icon: Cpu, title: 'Smart AgTech', tag: 'Sensors, data & AI', color: '#0F6B3E' },
  { icon: TreePine, title: 'Permaculture', tag: 'Whole-system design', color: '#FF5C2B' },
];

export function AgriSphere() {
  return (
    <section id="agrisphere" className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="-left-32 top-24" color="#0F6B3E" size={500} />
      <GradientOrb className="-right-32 bottom-0" color="#0A84FF" size={500} />

      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionEyebrow>New project · in development</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
              AgriSphere — <span className="gradient-text-green">cultivate your agricultural expertise</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-700">
              A learning platform we&rsquo;re building to empower agricultural minds everywhere — premium
              courses in Hydroponics, Organic Farming, Smart AgTech, and Permaculture, taught by
              agronomists and agricultural experts.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="chip">
                <Hammer className="h-3 w-3 text-brand-primary" /> In development
              </span>
              <span className="chip">Prototype / MVP</span>
              <span className="chip">Early access soon</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <AgriSphereMockup />
        </Reveal>
      </div>
    </section>
  );
}

function AgriSphereMockup() {
  return (
    <div className="relative mx-auto mt-14 max-w-5xl">
      {/* roadmap ribbon */}
      <div className="absolute -top-3 left-6 z-10 inline-flex items-center gap-1.5 rounded-full border border-brand-sun/30 bg-brand-sun/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-sun">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" /> Concept preview
      </div>

      <div className="overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-white shadow-[0_40px_90px_-50px_rgba(15,107,62,0.45)]">
        {/* browser chrome / app top bar */}
        <div className="flex flex-col gap-3 border-b border-ink-900/[0.07] bg-ink-50 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
                <GraduationCap className="h-4 w-4" />
              </span>
              <span className="font-display text-sm font-bold tracking-tight text-ink-900">AgriSphere</span>
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              {[
                { icon: Compass, label: 'Explore', active: true },
                { icon: BookOpen, label: 'My Learning' },
                { icon: Wand2, label: 'Agri Studio' },
              ].map((n) => (
                <span
                  key={n.label}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
                    n.active ? 'bg-white text-ink-900 shadow-[0_1px_2px_rgba(20,23,28,0.06)]' : 'text-ink-500'
                  }`}
                >
                  <n.icon className="h-3.5 w-3.5" />
                  {n.label}
                </span>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-ink-900/[0.08] bg-white px-3 py-1.5 sm:w-72">
            <Search className="h-3.5 w-3.5 text-ink-400" />
            <span className="truncate text-xs text-ink-400">Search crops, soil science, irrigation, AgTech…</span>
          </div>
        </div>

        {/* app body */}
        <div className="relative p-6 sm:p-9">
          {/* hero band */}
          <div className="relative overflow-hidden rounded-2xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/10 via-white to-brand-accent/[0.06] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-secondary/15 blur-2xl" />
            <div className="relative max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                <GraduationCap className="h-3 w-3" /> Premium courses
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Cultivate Your Agricultural Expertise
              </h3>
              <p className="mt-2 text-sm text-ink-600">
                Empowering agricultural minds all over the world.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="btn-primary px-4 py-2 text-xs">Browse courses</span>
                <span className="btn-secondary px-4 py-2 text-xs">Become an instructor</span>
              </div>
            </div>
          </div>

          {/* course categories */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Course tracks
            </span>
            <span className="text-[11px] text-ink-400">Curriculum in development</span>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="group rounded-2xl border border-ink-900/[0.07] bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgba(15,107,62,0.3)]"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${c.color}1A`, color: c.color }}
                >
                  <c.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-sm font-semibold text-ink-900">{c.title}</h4>
                <p className="mt-1 text-[11px] text-ink-500">{c.tag}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-ink-50 px-2 py-0.5 text-[10px] font-medium text-ink-500">
                    Coming soon
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-ink-400 transition-colors group-hover:text-brand-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
