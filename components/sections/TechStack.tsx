'use client';

import { Reveal } from '../primitives';

const STACK = [
  'Next.js',
  'FastAPI',
  'PostgreSQL',
  'OpenAI',
  'Stripe',
  'Cloudflare R2',
  'Vercel',
  'Google Maps',
  'OpenWeather',
  'PostHog',
  'Clerk',
  'TypeScript',
  'PyTorch',
  'Redis',
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden py-16">
      <Reveal>
        <div className="container-narrow">
          <div className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
Building on a modern, production-grade stack
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden mask-fade-edges">
          <div className="flex w-max animate-marquee items-center gap-12 px-6">
            {[...STACK, ...STACK].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="whitespace-nowrap font-display text-lg font-medium text-ink-500 sm:text-xl"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
