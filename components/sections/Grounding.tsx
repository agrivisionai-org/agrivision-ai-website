'use client';

import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import { BadgeIndianRupee, Sprout, CloudSun, Landmark, ShieldCheck } from 'lucide-react';

const SOURCES = [
  {
    icon: BadgeIndianRupee,
    title: 'Live market prices',
    body: 'Real government mandi rates from official sources like AGMARKNET and e-NAM — with the date, benchmarked against the Minimum Support Price (MSP).',
  },
  {
    icon: Sprout,
    title: 'Agronomy you can cite',
    body: 'Crop guidance grounded in credible agronomic sources — ICAR, FAO, and state agriculture departments — not whatever a model happens to say.',
  },
  {
    icon: CloudSun,
    title: 'Weather & alerts',
    body: 'Location-based weather and early pest-and-disease signals, so advice reflects what is actually happening in the field.',
  },
  {
    icon: Landmark,
    title: 'Government schemes',
    body: 'Clear, accurate guidance on schemes like PM-KISAN and PMFBY, drawn from official programme details.',
  },
];

export function Grounding() {
  return (
    <section id="grounding" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mesh-soft pointer-events-none absolute inset-0 -z-10" />
      <GradientOrb className="-left-40 bottom-0" color="#0A84FF" size={480} />

      <div className="container-narrow">
        <div className="max-w-2xl">
          <Reveal>
            <SectionEyebrow>Why you can trust it</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
              Answers grounded in <span className="gradient-text-green">real data</span>, not guesswork.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              An AI is only as good as what it stands on. YieldAI reasons over real, current, citable
              data — and answers in the farmer’s own language. The hard part was never sounding smart;
              it was being right.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOURCES.map((s, i) => (
            <Reveal key={s.title} delay={0.1 + i * 0.07}>
              <div className="card-surface flex h-full flex-col p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Safety line */}
        <Reveal delay={0.2} className="mt-6 block">
          <div className="flex items-start gap-4 rounded-2xl border border-brand-primary/20 bg-brand-primary/[0.05] p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-ink-800">
              <strong className="font-semibold text-ink-900">Honest when it doesn’t know.</strong>{' '}
              For anything high-stakes — like exact chemical doses — YieldAI is built to send the farmer
              to their local agriculture extension officer or Krishi Vigyan Kendra rather than risk a
              confident wrong answer. A wrong answer can cost someone a season, so that rule is baked in.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
