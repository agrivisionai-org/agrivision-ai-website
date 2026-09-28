'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mic, MapPin, Library, Cpu, ShieldCheck, MessageSquare, ArrowRight, UserCheck } from 'lucide-react';

/**
 * The six-step pipeline, with the refusal branch drawn as an actual branch.
 *
 * This is the page's strongest differentiator, so VALIDATE gets a visible fork: a safe
 * answer continues to ANSWER, and a chemical or low-confidence question leaves the system
 * entirely and goes to a person. Everything else on the page can be paraphrased by a
 * competitor; this cannot, because their revenue depends on making the recommendation.
 */

const STEPS = [
  { n: '01', Icon: Mic, title: 'Ask', body: 'Typed or spoken, in any of 13 languages, or a photograph of the affected plant.' },
  { n: '02', Icon: MapPin, title: 'Locate', body: 'Crop, growth stage, district and season establish what the question actually means.' },
  { n: '03', Icon: Library, title: 'Retrieve', body: 'Retrieval over ICAR, FAO and state department material, plus live price and weather feeds.' },
  { n: '04', Icon: Cpu, title: 'Reason', body: 'Routed models compose an answer against the retrieved material, not from memory.', emphasis: true },
  { n: '05', Icon: ShieldCheck, title: 'Validate', body: 'Confidence is checked, and the refusal rules are applied before anything is returned.', emphasis: true },
  { n: '06', Icon: MessageSquare, title: 'Answer', body: 'Returned in the language asked, by voice or text, with the next step spelled out.' },
];

export function HowItWorksPipeline() {
  const reduce = useReducedMotion();

  return (
    <div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s, i) => (
          <motion.li
            key={s.title}
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-2xl border p-6 ${
              s.emphasis ? 'border-brand-primary/30 bg-[#EAF4E9]' : 'border-ink-900/[0.08] bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-semibold tabular-nums text-ink-400">{s.n}</span>
              <s.Icon className={`h-4 w-4 ${s.emphasis ? 'text-brand-primary' : 'text-brand-secondary'}`} aria-hidden />
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.body}</p>
          </motion.li>
        ))}
      </ol>

      {/* The fork. Both outcomes are stated in words as well as colour. */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 rounded-2xl border border-ink-900/[0.08] bg-white p-6 sm:p-8"
      >
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
          At step 05, the path forks
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="rounded-xl border border-brand-primary/25 bg-[#EAF4E9] p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary">
              <MessageSquare className="h-4 w-4" aria-hidden /> Confident and safe
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              The answer is returned in the language the question was asked in, with the next step spelled out.
            </p>
          </div>

          <div className="flex items-center justify-center lg:px-2" aria-hidden>
            <ArrowRight className="h-5 w-5 rotate-90 text-ink-400 lg:rotate-0" />
          </div>

          <div className="rounded-xl border border-[#E2D2C6] bg-[#F6EFEA] p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#9A5B33]">
              <UserCheck className="h-4 w-4" aria-hidden /> Chemical dosage, or not confident
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[#5A4A40]">
              The system refuses and routes the farmer to a local agriculture extension officer or Krishi Vigyan
              Kendra. A wrong dosage can cost a season, so it does not guess. No exceptions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
