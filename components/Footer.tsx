import { Logo } from './Logo';
import { Github, Linkedin, Twitter, Mail, Instagram, ArrowRight } from 'lucide-react';

const SOCIALS = [
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/113249948/', label: 'AGRIVISION AI on LinkedIn' },
  { Icon: Twitter, href: 'https://x.com/yieldaiglobal', label: 'YieldAI Global on X' },
  { Icon: Instagram, href: 'https://www.instagram.com/yieldai.global', label: 'YieldAI Global on Instagram' },
  { Icon: Github, href: 'https://github.com/golamarivijesh-glitch', label: 'AGRIVISION AI on GitHub' },
  { Icon: Mail, href: 'mailto:hello@agrivisionai.com', label: 'Email AGRIVISION AI' },
];

const COLS = [
  {
    title: 'Products',
    links: [
      { label: 'YieldAI Global', href: '#products' },
      { label: 'CropVision', href: '#products' },
      { label: 'AgriSense', href: '#products' },
      { label: 'FarmOS', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#' },
      { label: 'Investors', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Trust & Security', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@agrivisionai.com', href: 'mailto:hello@agrivisionai.com' },
      { label: 'support@yieldaiglobal.com', href: 'mailto:support@yieldaiglobal.com' },
      { label: 'careers@agrivisionai.com', href: 'mailto:careers@agrivisionai.com' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-28 overflow-hidden border-t border-ink-900/[0.07] bg-white">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="container-narrow relative pt-20 pb-10">
        {/* CTA band */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-gradient-to-br from-brand-primary to-[#0b5531] p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Get started with YieldAI Global.
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/80">
                Bring intelligent decision-making to your fields — across the USA, India, and Canada.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5">
                Book a demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Explore products
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-600">
              AI-first technology company building the next generation of AgriTech products.
              Transforming agriculture through intelligent software and predictive systems.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="rounded-xl border border-ink-900/10 bg-white p-2.5 text-ink-500 transition-all hover:border-brand-primary/40 hover:bg-brand-primary/[0.06] hover:text-brand-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-ink-600 transition-colors hover:text-ink-900">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-900/[0.07] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">© {new Date().getFullYear()} AGRIVISION AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-400">
            <a href="#" className="hover:text-ink-900">Privacy</a>
            <a href="#" className="hover:text-ink-900">Terms</a>
            <a href="#" className="hover:text-ink-900">Security</a>
            <span className="hidden sm:inline text-ink-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
