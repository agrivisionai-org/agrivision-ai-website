'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import { GraduationCap, Cpu, Layers, FlaskConical, Handshake, ArrowUpRight, Mail } from 'lucide-react';

// What is genuinely open right now is intern tracks. The senior roles below are areas we
// expect to hire into, and are labelled as such rather than as live openings -- per the
// honesty policy, we do not advertise a role we cannot actually fill today.
const TRACKS = [
  {
    icon: Cpu,
    title: 'AI / ML engineering',
    status: 'Open now',
    location: 'Remote — USA or India',
    body: 'Models, data pipelines and evaluation for a platform already answering real farmers.',
    roles: ['AI/ML Intern'],
  },
  {
    icon: Layers,
    title: 'Product & design',
    status: 'Open now',
    location: 'Remote — USA or India',
    body: 'Farmer-facing workflows built for low connectivity, low literacy and 13 languages.',
    roles: ['Product Intern', 'Design Intern'],
  },
  {
    icon: FlaskConical,
    title: 'Agriculture research',
    status: 'Open now',
    location: 'Remote — USA or India',
    body: 'Ground our answers in ICAR, FAO and government data so the advice is actually right.',
    roles: ['Agriculture Research Intern'],
  },
  {
    icon: Handshake,
    title: 'Sales & growth',
    status: 'Open now',
    location: 'Remote — USA, or Hyderabad, India',
    body: 'Reach farmers, cooperatives and extension networks. The only track with a fixed Indian city.',
    roles: ['Sales Intern'],
  },
  {
    icon: GraduationCap,
    title: 'Later, as we grow',
    status: 'Not open yet',
    location: '—',
    body: 'Areas we expect to hire into. Not open today — but we read every email that arrives early.',
    roles: ['ML Engineer', 'Product Engineer', 'Agronomy Lead'],
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
              <h1 className="mt-6 text-balance font-display text-display-lg text-ink-900">
                Join <span className="gradient-text-green">AGRIVISION AI</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
                Help build the next generation of AgriTech products. Founder-led, shipping to
                production, and working on software farmers already use in three countries.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-600">
                Our open roles today are internships. They are <strong className="font-semibold text-ink-800">unpaid</strong>,
                fully remote, open to students on OPT and CPT, and flexible around coursework. You
                work on the live product, not a side project, and you get a reference that describes
                what you actually built.
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
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider ${
                        t.status === 'Open now' ? 'text-brand-primary' : 'text-ink-500'
                      }`}
                    >
                      {t.status}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">{t.title}</h3>
                  {t.location !== '—' && (
                    <p className="mt-1 text-[11px] font-medium text-ink-500">{t.location}</p>
                  )}
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
