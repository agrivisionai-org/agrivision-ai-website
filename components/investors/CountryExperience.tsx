'use client';

import { useState, useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { COUNTRIES, type Country } from './countries';

/**
 * One reusable market component, used both as the three-up card strip and as the
 * tabbed "three data environments" selector.
 *
 * Factual guardrails baked in here on purpose, because this is the component most
 * likely to be copied and extended later:
 *
 *  - The crop names are LANDSCAPE CONTEXT, not a coverage claim. The repository has no
 *    crop list, so nothing here may say a given crop is supported. The label says what
 *    the market grows, and a note on the section says exactly that.
 *  - Market data sources are the three named in the product data and nowhere else:
 *    mandi (India), USDA (USA), StatCan (Canada).
 *  - The prices are the published live ones.
 *  - The imagery is original illustration, not photography, and says so in its alt text.
 */

/* ------------------------------------------------------------------ cards */

export function CountryMarketCards() {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {COUNTRIES.map((c, i) => (
        <motion.article
          key={c.id}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="group overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white transition-shadow duration-200 hover:shadow-[0_12px_40px_-18px_rgba(11,46,28,0.35)]"
        >
          <div className="relative h-44 overflow-hidden">
            <img
              src={c.image}
              srcSet={`${c.imageSmall} 800w, ${c.image} 1200w`}
              sizes="(max-width: 640px) 100vw, 33vw"
              alt={c.alt}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold text-ink-900 backdrop-blur">
              <span aria-hidden className="rounded bg-ink-900 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                {c.code}
              </span>
              {c.name}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink-900">{c.marketSource}</h3>
              <span className="text-sm font-semibold text-brand-primary">{c.price}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.context}</p>
            <p className="mt-4 text-xs leading-relaxed text-ink-500">
              <span className="font-semibold text-ink-700">Grown here:</span> {c.grows.join(' · ')}
            </p>
            <p
              className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-ink-500 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 motion-reduce:max-h-24 motion-reduce:opacity-100"
            >
              {c.marketDetail}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------- tabs */

export function CountrySelector() {
  const [active, setActive] = useState<Country['id']>('india');
  const reduce = useReducedMotion();
  const baseId = useId();
  const current = COUNTRIES.find((c) => c.id === active)!;

  return (
    <div>
      <div role="tablist" aria-label="Choose a market" className="flex flex-wrap gap-2">
        {COUNTRIES.map((c) => {
          const selected = c.id === active;
          return (
            <button
              key={c.id}
              role="tab"
              id={`${baseId}-tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${c.id}`}
              onClick={() => setActive(c.id)}
              className={`inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                selected
                  ? 'bg-ink-900 text-white'
                  : 'border border-ink-900/15 bg-white text-ink-700 hover:border-brand-primary/50 hover:text-brand-primary'
              }`}
            >
              <span
                aria-hidden
                className={`rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wider ${
                  selected ? 'bg-white/20 text-white' : 'bg-ink-900/[0.07] text-ink-700'
                }`}
              >
                {c.code}
              </span>
              {c.name}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${current.id}`}
        aria-labelledby={`${baseId}-tab-${current.id}`}
        className="mt-6 grid gap-6 lg:grid-cols-2"
      >
        <motion.div
          key={`${current.id}-img`}
          initial={reduce ? false : { opacity: 0, scale: 0.99 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="overflow-hidden rounded-2xl border border-ink-900/[0.08]"
        >
          <img
            src={current.image}
            srcSet={`${current.imageSmall} 800w, ${current.image} 1200w`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt={current.alt}
            width={1200}
            height={750}
            loading="lazy"
            decoding="async"
            className="h-full max-h-80 w-full object-cover"
          />
        </motion.div>


        <motion.div
          key={`${current.id}-body`}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex flex-col justify-center rounded-2xl border border-ink-900/[0.08] bg-white p-7"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
            {current.name} · market data
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900">{current.marketSource}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{current.marketDetail}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink-900/[0.07] pt-5 text-sm">
            <div>
              <dt className="text-ink-500">Subscription</dt>
              <dd className="mt-1 font-semibold text-ink-900">{current.price}</dd>
            </div>
            <div>
              <dt className="text-ink-500">Prices shown in</dt>
              <dd className="mt-1 font-semibold text-ink-900">{current.currency}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-ink-500">What this market grows</dt>
              <dd className="mt-1 font-medium text-ink-800">{current.grows.join(' · ')}</dd>
            </div>
          </dl>
        </motion.div>

        {current.marketImage && (
          <motion.figure
            key={`${current.id}-mkt`}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden rounded-2xl border border-ink-900/[0.08] lg:col-span-2"
          >
            <img
              src={current.marketImage}
              srcSet={`${current.marketImageSmall} 800w, ${current.marketImage} 1200w`}
              sizes="100vw"
              alt={current.marketAlt}
              width={1200}
              height={520}
              loading="lazy"
              decoding="async"
              className="h-48 w-full object-cover sm:h-60"
            />
            <figcaption className="bg-white px-5 py-3 text-xs leading-relaxed text-ink-600">
              Where the price is actually set. A mandi is a physical market, and the government price a household is
              quoted comes out of one &mdash; which is why the product carries the official figure rather than an
              estimate.
            </figcaption>
          </motion.figure>
        )}
      </div>
    </div>
  );
}
