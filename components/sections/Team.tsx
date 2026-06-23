'use client';

import { useState } from 'react';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const FOUNDER = {
  linkedin: 'https://www.linkedin.com/in/vijesh-reddy-golamari/',
  x: 'https://x.com/yieldaiglobal',
  email: 'mailto:hello@agrivisionai.com',
  photo: '/founder.jpg',
};

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-28 sm:py-36">
      <GradientOrb className="-right-32 top-32" color="#0A84FF" size={500} />

      <div className="container-narrow">
        <div className="max-w-3xl">
          <Reveal>
            <SectionEyebrow>Team</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
              Founder-led, <span className="gradient-text-green">built with conviction</span>.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div className="relative">
              <div className="aspect-square w-full overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-secondary/20 via-white to-brand-accent/10">
                <FounderPortrait />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl border border-ink-900/[0.07] bg-white px-4 py-3 shadow-[0_24px_60px_-30px_rgba(15,107,62,0.28)] sm:block">
                <div className="text-[10px] uppercase tracking-wider text-ink-500">Founder</div>
                <div className="text-sm font-semibold text-ink-900">Building since day one</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                Founder, CEO & AI Architect
              </div>
              <h3 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink-900">
                Vijesh Reddy
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700">
                Vijesh founded AGRIVISION AI to bring AI-first product thinking to global agriculture.
                A builder by craft and a systems thinker by training, he leads product, AI, and
                platform engineering — shipping intelligent agriculture products from the ground up.
              </p>

              <blockquote className="mt-8 border-l-2 border-brand-primary/60 bg-ink-50 pl-5 py-3">
                <p className="text-base italic leading-relaxed text-ink-800">
                  &ldquo;Agriculture is the largest industry in the world — and the most under-served by
                  modern software. We&rsquo;re here to change that, one intelligent product at a
                  time.&rdquo;
                </p>
                <footer className="mt-2 text-xs text-ink-500">— Vijesh Reddy</footer>
              </blockquote>

              <div className="mt-7 flex items-center gap-2">
                <a
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vijesh Reddy on LinkedIn"
                  className="rounded-xl border border-ink-900/[0.07] bg-ink-50 p-2.5 text-ink-700 transition-all hover:border-ink-900/[0.12] hover:text-brand-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={FOUNDER.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YieldAI Global on X"
                  className="rounded-xl border border-ink-900/[0.07] bg-ink-50 p-2.5 text-ink-700 transition-all hover:border-ink-900/[0.12] hover:text-brand-primary"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={FOUNDER.email}
                  aria-label="Email Vijesh Reddy"
                  className="rounded-xl border border-ink-900/[0.07] bg-ink-50 p-2.5 text-ink-700 transition-all hover:border-ink-900/[0.12] hover:text-brand-primary"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-900/[0.07] bg-ink-50 px-3 py-1.5 text-xs text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
                AGRIVISION AI · Founded 2023
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FounderPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative h-full w-full">
      {!imgError ? (
        // Real founder photo — drop the file at /public/founder.jpg
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={FOUNDER.photo}
          alt="Vijesh Reddy, Founder & CEO of AGRIVISION AI"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        // Fallback shown only until the photo file exists
        <>
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="h-3/5 w-3/5">
              <defs>
                <linearGradient id="founderGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5DBB63" />
                  <stop offset="100%" stopColor="#0A84FF" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="70" r="32" fill="url(#founderGrad)" opacity="0.9" />
              <path d="M40 180 C 40 130, 160 130, 160 180 Z" fill="url(#founderGrad)" opacity="0.9" />
            </svg>
          </div>
        </>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/85 p-3 backdrop-blur-sm">
        <div className="flex items-center justify-between text-[10px] text-ink-600">
          <span className="font-semibold text-ink-900">Vijesh Reddy</span>
          <span>CEO · AGRIVISION AI</span>
        </div>
      </div>
    </div>
  );
}
