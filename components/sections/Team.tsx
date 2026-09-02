'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Reveal, SectionEyebrow, GradientOrb } from '../primitives';
import { Linkedin, Twitter, Mail, Github, ArrowRight } from 'lucide-react';

const FOUNDER = {
  linkedin: 'https://www.linkedin.com/in/vijesh-reddy-golamari/',
  x: 'https://x.com/yieldaiglobal',
  github: 'https://github.com/agrivisionai-org',
  email: 'mailto:hello@agrivisionai.org',
  // Display variant. /founder.jpg stays canonical for the Person schema and Wikimedia.
  photo: '/founder-800.jpg',
};

const LEADERSHIP = [
  {
    name: 'Bhanu Prakash',
    role: 'Product Analyst',
    initials: 'BP',
    accent: '#0F6B3E',
    photo: '/team/bhanu-prakash.jpg',
    blurb: 'Advises on the product from the farmer\'s side — a non-technical read on what people keep asking for and where YieldAI Global loses them.',
  },
  {
    name: 'Bala Sleeva Thirumala Reddy',
    role: 'Business Strategist',
    initials: 'BR',
    accent: '#0A84FF',
    photo: '/team/bala-sleeva-thirumala-reddy.jpg',
    blurb: 'Drives business strategy — market positioning, partnerships, and the path from live product to real adoption.',
  },
];

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
                Vijesh Reddy Golamari
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700">
                Vijesh Reddy Golamari is the sole founder of AGRIVISION AI (AgriVisionAI Inc.),
                headquartered in Detroit, Michigan, and a Generative AI Engineer and Technical Lead at
                Symplore Inc. He founded AGRIVISION AI to bring AI-first product thinking to global
                agriculture, and leads product, AI, and platform engineering — building intelligent
                agriculture products, including the flagship platform YieldAI Global, from the ground up.
              </p>

              <blockquote className="mt-8 border-l-2 border-brand-primary/60 bg-ink-50 pl-5 py-3">
                <p className="text-base italic leading-relaxed text-ink-800">
                  &ldquo;Agriculture is the largest industry in the world — and the most under-served by
                  modern software. We&rsquo;re here to change that, one intelligent product at a
                  time.&rdquo;
                </p>
                <footer className="mt-2 text-xs text-ink-500">— Vijesh Reddy Golamari</footer>
              </blockquote>

              <div className="mt-7 flex items-center gap-2">
                <a
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vijesh Reddy Golamari on LinkedIn"
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
                  href={FOUNDER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AGRIVISION AI on GitHub"
                  className="rounded-xl border border-ink-900/[0.07] bg-ink-50 p-2.5 text-ink-700 transition-all hover:border-ink-900/[0.12] hover:text-brand-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={FOUNDER.email}
                  aria-label="Email Vijesh Reddy Golamari"
                  className="rounded-xl border border-ink-900/[0.07] bg-ink-50 p-2.5 text-ink-700 transition-all hover:border-ink-900/[0.12] hover:text-brand-primary"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/founder"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/[0.07] bg-white px-4 py-1.5 text-xs font-semibold text-ink-800 transition-colors hover:border-brand-primary/40 hover:text-brand-primary"
                >
                  Full founder profile <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <div className="inline-flex items-center gap-2 rounded-full border border-ink-900/[0.07] bg-ink-50 px-3 py-1.5 text-xs text-ink-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
                  AGRIVISION AI · Founded May 2026
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {LEADERSHIP.map((m, i) => (
            <Reveal key={m.name} delay={0.15 + i * 0.08}>
              <div className="group flex h-full items-start gap-5 rounded-3xl border border-ink-900/[0.07] bg-white p-6 transition-all hover:border-brand-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(15,107,62,0.25)]">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl font-display text-xl font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, ${m.accent} 0%, ${m.accent}99 100%)` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at AGRIVISION AI`}
                    width={240}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.textContent = m.initials;
                    }}
                  />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary">
                    {m.role}
                  </div>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-ink-900">{m.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{m.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
          alt="Vijesh Reddy Golamari, Founder & CEO of AGRIVISION AI"
          onError={() => setImgError(true)}
          width={800}
          height={800}
          // Below the fold on /about. Without loading="lazy" React 19 emits a
          // <link rel="preload" as="image"> for it during SSR, so the portrait competed
          // with the page's own critical resources.
          loading="lazy"
          decoding="async"
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
          <span className="font-semibold text-ink-900">Vijesh Reddy Golamari</span>
          <span>CEO · AGRIVISION AI</span>
        </div>
      </div>
    </div>
  );
}
