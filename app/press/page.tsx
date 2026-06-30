import type { Metadata } from 'next';
import { Logo } from '@/components/Logo';
import { press } from './press-data';
import { Globe, Mail, Linkedin, Twitter, Github, Newspaper, Download, Building2, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press & Media Kit',
  description:
    'Press resources for AGRIVISION AI — company boilerplate, fact sheet, founder bio, quotes, brand assets, and media contact. Building YieldAI Global, AI crop intelligence for global agriculture.',
  alternates: { canonical: 'https://agrivisionai.org/press' },
};

const SECTION = 'mx-auto w-full max-w-4xl px-5';

export default function PressPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.04] via-paper to-paper pb-24">
      {/* Header */}
      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className={`${SECTION} flex flex-col items-start gap-4 py-7 sm:flex-row sm:items-center sm:justify-between`}>
          <a href="https://agrivisionai.org" aria-label="AGRIVISION AI home">
            <Logo />
          </a>
          <a
            href="mailto:hello@agrivisionai.org"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" /> Media inquiries
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className={`${SECTION} pt-14 pb-10`}>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">Press &amp; Media Kit</div>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          AGRIVISION AI <span className="gradient-text-green">press resources</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700">
          Everything journalists, podcasters, and partners need to cover AGRIVISION AI and our flagship
          platform, YieldAI Global. Quote freely from this page. For interviews or anything not here, email{' '}
          <a href="mailto:hello@agrivisionai.org" className="font-semibold text-brand-primary underline-offset-2 hover:underline">hello@agrivisionai.org</a>.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="/press/agrivision-ai-logo.png" download className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-primary/40 hover:text-brand-primary">
            <Download className="h-4 w-4" /> Logo (wide)
          </a>
          <a href="/press/agrivision-ai-logo-square.png" download className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-primary/40 hover:text-brand-primary">
            <Download className="h-4 w-4" /> Logo (square)
          </a>
          <a href="https://www.linkedin.com/company/113249948/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-primary/40 hover:text-brand-primary">
            <Linkedin className="h-4 w-4" /> Newsroom on LinkedIn
          </a>
        </div>
      </section>

      {/* Quick facts grid */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Fact sheet</h2>
        <div className="overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white">
          <dl className="divide-y divide-ink-900/[0.06]">
            {press.factsheet.rows.map((row) => (
              <div key={row.label} className="grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-[200px_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-ink-500">{row.label}</dt>
                <dd className="text-sm text-ink-900" dangerouslySetInnerHTML={{ __html: linkify(row.value) }} />
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Key facts */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Key facts</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {press.factsheet.keyFacts.map((fact, i) => (
            <li key={i} className="rounded-2xl border border-ink-900/[0.08] bg-white p-5 text-sm leading-relaxed text-ink-700">
              <span className="mb-2 block h-1.5 w-8 rounded-full bg-brand-primary/40" />
              {fact}
            </li>
          ))}
        </ul>
      </section>

      {/* Boilerplate */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">About AGRIVISION AI (boilerplate)</h2>
        <div className="space-y-4">
          {([['Short', press.boilerplate.short], ['Medium', press.boilerplate.medium], ['Long', press.boilerplate.long]] as const).map(([label, text]) => (
            <div key={label} className="rounded-2xl border border-ink-900/[0.08] bg-white p-5">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-primary">{label}</div>
              <p className="whitespace-pre-line text-sm leading-relaxed text-ink-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Founder</h2>
        <div className="rounded-2xl border border-ink-900/[0.08] bg-white p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-brand-primary">
              <User className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold text-ink-900">Vijesh Reddy Golamari</div>
              <div className="text-sm text-brand-primary">Founder, CEO &amp; AI Architect</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-700">
            Vijesh Reddy Golamari (born 2000, Hyderabad, India) is the founder, CEO, and AI Architect of
            AGRIVISION AI. He moved to the United States in January 2023 to pursue a master&rsquo;s degree.
            He brings five years building production AI systems &mdash; LLM evaluation and red-teaming at Google,
            LLaMA 3 fine-tuning and CLIP multimodal vision at Meta, enterprise generative AI and RAG at Citi,
            and end-to-end machine learning at Flipkart.
          </p>
          <a href="https://www.linkedin.com/in/vijesh-reddy-golamari/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline">
            <Linkedin className="h-4 w-4" /> LinkedIn profile
          </a>
        </div>
      </section>

      {/* Quotes */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-2 font-display text-2xl font-semibold text-ink-900">Quotes</h2>
        <p className="mb-5 text-sm text-ink-500">Attribute to Vijesh Reddy Golamari, Founder &amp; CEO, AGRIVISION AI.</p>
        <div className="space-y-4">
          {press.quotes.map((q, i) => (
            <blockquote key={i} className="rounded-2xl border-l-4 border-brand-primary/60 bg-ink-50 px-5 py-4 text-base italic leading-relaxed text-ink-800">
              &ldquo;{q}&rdquo;
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Journalist FAQ</h2>
        <div className="space-y-3">
          {press.faq.map((item, i) => (
            <details key={i} className="group rounded-2xl border border-ink-900/[0.08] bg-white px-5 py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-ink-900 marker:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section className={`${SECTION} py-8`}>
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">Channels</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { Icon: Globe, label: 'Website', sub: 'agrivisionai.org', href: 'https://agrivisionai.org' },
            { Icon: Newspaper, label: 'AGRIVISION Build Notes', sub: 'Founder newsletter', href: 'https://www.linkedin.com/newsletters/7476661645046378496/' },
            { Icon: Linkedin, label: 'LinkedIn', sub: 'Company page', href: 'https://www.linkedin.com/company/113249948/' },
            { Icon: Twitter, label: 'X', sub: '@yieldaiglobal', href: 'https://x.com/yieldaiglobal' },
            { Icon: Github, label: 'GitHub', sub: 'agrivisionai-org', href: 'https://github.com/agrivisionai-org' },
            { Icon: Mail, label: 'Media contact', sub: 'hello@agrivisionai.org', href: 'mailto:hello@agrivisionai.org' },
          ].map(({ Icon, label, sub, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 rounded-2xl border border-ink-900/[0.08] bg-white px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-brand-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-50 text-brand-primary"><Icon className="h-4 w-4" /></div>
              <div>
                <div className="text-sm font-semibold text-ink-900">{label}</div>
                <div className="text-xs text-ink-500">{sub}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className={`${SECTION} mt-10 border-t border-ink-900/[0.07] pt-8 text-center`}>
        <div className="inline-flex items-center gap-2 text-xs text-ink-500">
          <Building2 className="h-3.5 w-3.5" /> AGRIVISION AI · Agrivisionai Inc · Detroit, Michigan
        </div>
        <p className="mt-2 text-xs text-ink-400">© {new Date().getFullYear()} AGRIVISION AI. Press materials may be reproduced for editorial coverage.</p>
      </footer>
    </main>
  );
}

// Turn bare URLs and emails in fact-sheet values into links.
function linkify(value: string): string {
  return value
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-brand-primary underline-offset-2 hover:underline">$1</a>')
    .replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a href="mailto:$1" class="text-brand-primary underline-offset-2 hover:underline">$1</a>');
}
