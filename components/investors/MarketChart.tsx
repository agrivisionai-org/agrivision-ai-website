'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Market size, drawn honestly.
 *
 * Bars are proportional to their values from a zero baseline — no truncated axis, no
 * exaggerated growth. The source sits under each chart, as it does everywhere else on
 * this page. The figures are the ones already published on the page; nothing new is
 * introduced here.
 */

type Series = {
  label: string;
  source: string;
  max: number;
  points: { year: string; value: number; display: string }[];
};

const SERIES: Series[] = [
  {
    label: 'Digital agriculture',
    source: 'Coherent Market Insights, 2026',
    max: 71.2,
    points: [
      { year: '2026', value: 26.2, display: '$26.2B' },
      { year: '2033', value: 53.8, display: '$53.8B' },
    ],
  },
  {
    label: 'Agritech overall',
    source: 'Market.us, 2026',
    max: 71.2,
    points: [
      { year: '2025', value: 21.4, display: '$21.4B' },
      { year: '2035', value: 71.2, display: '$71.2B' },
    ],
  },
];

export function MarketOpportunityChart() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {SERIES.map((s, si) => (
        <figure key={s.label} className="rounded-2xl border border-ink-900/[0.08] bg-white p-6">
          <figcaption className="font-display text-lg font-semibold text-ink-900">{s.label}</figcaption>
          <p className="mt-1 text-sm text-ink-500">
            {s.points[0].year} to {s.points[s.points.length - 1].year}
          </p>

          <div className="mt-6 space-y-5">
            {s.points.map((p, i) => (
              <div key={p.year}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium tabular-nums text-ink-700">{p.year}</span>
                  <span className="font-display font-semibold tabular-nums text-brand-primary">{p.display}</span>
                </div>
                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-ink-900/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-brand-primary"
                    initial={reduce ? { width: `${(p.value / s.max) * 100}%` } : { width: 0 }}
                    whileInView={{ width: `${(p.value / s.max) * 100}%` }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, delay: si * 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* The chart is decorative to a screen reader without this. */}
          <p className="sr-only">
            {s.label}: {s.points.map((p) => `${p.year}, ${p.display}`).join('; ')}. Bars are drawn to a common scale
            from a zero baseline.
          </p>
          <p className="mt-6 border-t border-ink-900/[0.07] pt-4 text-xs text-ink-500">Source: {s.source}</p>
        </figure>
      ))}
    </div>
  );
}
