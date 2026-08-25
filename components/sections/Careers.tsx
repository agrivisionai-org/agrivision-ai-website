'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import Link from 'next/link';
import { Cpu, Layers, FlaskConical, Handshake, ArrowUpRight, Mail } from 'lucide-react';
import { roles, PROGRAMME } from '@/app/careers/roles-data';

// Cards are driven by app/careers/roles-data.ts so the index, the role pages and the
// JobPosting schema cannot disagree. Only the icon lives here -- it is presentation.
const ICONS: Record<string, typeof Cpu> = {
  'ai-engineering': Cpu,
  'data-product-design': Layers,
  'agritech-research': FlaskConical,
  'business-growth': Handshake,
};

const FACTS = [
  { label: 'Location', value: PROGRAMME.location },
  { label: 'Duration', value: PROGRAMME.duration },
  { label: 'Commitment', value: PROGRAMME.commitment },
  { label: 'Who can apply', value: PROGRAMME.whoCanApply },
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
              <h1 className="mt-6 text-balance font-display text-display-lg text-ink-900">
                Join <span className="gradient-text-green">AGRIVISION AI</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
                Our Learning &amp; Internship Program is open to students, recent graduates and
                early-career people who want supervised, hands-on work on software farmers
                already use in three countries.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-600">
                It is a learning-focused programme: supervised projects, mentorship and regular
                feedback, a completion certificate, and a reference based on what you actually
                built. Compensation and eligibility vary by country and by local employment and
                university rules — we will tell you where you stand before you start, not after.
                The programme is fully remote and open worldwide. It runs 20 hours a week on
                US Eastern time, so check the overlap with your own timezone before applying
                — outside the Americas that means evening or early-morning hours.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <dl className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4">
                {FACTS.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink-800">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.35}>
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
            {roles.map((r, i) => {
              const Icon = ICONS[r.slug];
              return (
                <Reveal key={r.slug} delay={0.1 + i * 0.08}>
                  <Link href={`/careers/${r.slug}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4 }}
                      className="card-surface group h-full p-6 transition-colors hover:border-brand-primary/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/15 to-transparent text-brand-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                          Open now
                        </span>
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-ink-900">{r.cardTitle}</h3>
                      <p className="mt-1 text-[11px] font-medium text-ink-500">{PROGRAMME.location}</p>
                      <p className="mt-2 text-xs leading-relaxed text-ink-600">{r.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {r.areas.map((a) => (
                          <span
                            key={a}
                            className="rounded-full border border-ink-900/[0.07] bg-ink-50 px-2 py-1 text-[10px] font-medium text-ink-700"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink-900/[0.12] bg-white px-4 py-2 text-xs font-semibold text-ink-900 transition-all duration-300 group-hover:border-brand-primary/45 group-hover:bg-brand-primary group-hover:text-white">
                        View role
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </motion.div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
