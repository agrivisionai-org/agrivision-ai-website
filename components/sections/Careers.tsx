'use client';

import { motion } from 'framer-motion';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import { Cpu, Layers, FlaskConical, Handshake, ArrowUpRight, Mail } from 'lucide-react';

// The Learning & Internship Program. Nine areas, grouped so the page stays readable.
// Remote, but not worldwide: the USA, UK and Ireland, or Hyderabad specifically within
// India. Stated on
// every card so nobody in another city applies and finds out afterwards.
const TRACKS = [
  {
    icon: Cpu,
    title: 'AI & engineering',
    location: 'Remote — USA, UK, Ireland, or Hyderabad, India',
    body: 'Models, LLM systems and the application layer behind a platform already answering real farmers.',
    roles: ['AI & Machine Learning', 'Generative AI / LLMs', 'Software & App Development'],
  },
  {
    icon: Layers,
    title: 'Data, product & design',
    location: 'Remote — USA, UK, Ireland, or Hyderabad, India',
    body: 'Turn field and market data into decisions farmers can act on, in low-connectivity settings.',
    roles: ['Data Analytics & Engineering', 'Product Analysis', 'UI/UX & Product Design'],
  },
  {
    icon: FlaskConical,
    title: 'AgriTech research',
    location: 'Remote — USA, UK, Ireland, or Hyderabad, India',
    body: 'Ground our answers in ICAR, FAO and government sources so the advice is actually right.',
    roles: ['AgriTech Research & Innovation'],
  },
  {
    icon: Handshake,
    title: 'Business & growth',
    location: 'Remote — USA, UK, Ireland, or Hyderabad, India',
    body: 'Reach farmers, cooperatives and extension networks, and work out which channels carry.',
    roles: ['Business Strategy', 'Marketing & Business Development', 'Sales'],
  },
];

// Programme facts, kept beside the tracks so nobody has to email to find them out.
const PROGRAMME = [
  { label: 'Location', value: 'Remote — USA, UK, Ireland, or Hyderabad, India' },
  { label: 'Duration', value: '8–12 weeks' },
  { label: 'Commitment', value: '10–15 hrs / week' },
  { label: 'Who can apply', value: 'Students, recent graduates, early career' },
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
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <dl className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4">
                {PROGRAMME.map((f) => (
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
            {TRACKS.map((t, i) => (
              <Reveal key={t.title} delay={0.1 + i * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="card-surface h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary/15 to-transparent text-brand-primary">
                      <t.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                      Open now
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">{t.title}</h3>
                  <p className="mt-1 text-[11px] font-medium text-ink-500">{t.location}</p>
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
