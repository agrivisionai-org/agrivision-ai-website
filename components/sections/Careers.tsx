'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import { GraduationCap, Cpu, Layers, FlaskConical, ArrowUpRight, Mail } from 'lucide-react';

const TRACKS = [
  {
    icon: GraduationCap,
    title: 'Internships',
    body: 'Build alongside founders. Ship to production from week one.',
    roles: ['ML Intern', 'Frontend Intern', 'Data Intern'],
  },
  {
    icon: Cpu,
    title: 'AI Engineering',
    body: 'Foundation models, predictive systems, decision engines at scale.',
    roles: ['Senior ML Engineer', 'AI Platform', 'MLOps'],
  },
  {
    icon: Layers,
    title: 'Product',
    body: 'Product engineering and design across our AgriTech surfaces.',
    roles: ['Product Engineer', 'Product Designer', 'PM, YieldAI'],
  },
  {
    icon: FlaskConical,
    title: 'Research',
    body: 'Agronomy + AI research. Field experiments, novel models.',
    roles: ['Research Scientist', 'Agronomy Lead', 'Field Ops'],
  },
];

export function Careers() {
  return (
    <section id="careers" className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="-left-32 top-32" color="#0F6B3E" size={500} />

      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <Reveal>
              <SectionEyebrow>Careers</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
                Join <span className="gradient-text-green">AGRIVISION AI</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
                Help build the next generation of AgriTech products. Remote-friendly, founder-led,
                and obsessed with shipping intelligent software that makes farming better.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="mailto:careers@agrivisionai.org" className="btn-primary">
                  Apply <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="mailto:careers@agrivisionai.org?subject=Interested%20in%20joining%20AGRIVISION%20AI" className="btn-secondary">
                  Express interest
                </a>
              </div>
              <a
                href="mailto:careers@agrivisionai.org"
                className="mt-6 inline-flex items-center gap-2 text-sm text-ink-600 hover:text-ink-900"
              >
                <Mail className="h-4 w-4 text-brand-primary" />
                careers@agrivisionai.org
              </a>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {TRACKS.map((t, i) => (
              <Reveal key={t.title} delay={0.1 + i * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="card-surface h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/15 to-transparent text-brand-primary">
                      <t.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                      Hiring
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">{t.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-600">{t.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.roles.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-ink-900/[0.07] bg-ink-50 px-2 py-1 text-[10px] font-medium text-ink-700"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
