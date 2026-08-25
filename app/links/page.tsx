import type { Metadata } from 'next';
import { Logo } from '@/components/Logo';
import { Globe, Linkedin, Twitter, Instagram, Github, Mail, Newspaper, User, Sprout } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'Links · AGRIVISION AI' },
  description: 'All AGRIVISION AI channels in one place — website, LinkedIn, newsletter, GitHub, and more.',
  // Without these, the page inherits the root layout's hardcoded homepage canonical and its
  // whole OpenGraph block, so a page that is in the sitemap tells Google it is a duplicate
  // of the homepage and previews as the homepage when shared.
  alternates: { canonical: 'https://agrivisionai.org/links' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/links',
    title: 'Links · AGRIVISION AI',
    description: 'All AGRIVISION AI channels in one place — website, LinkedIn, newsletter, GitHub, and more.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'AGRIVISION AI links' }],
  },
};

type LinkItem = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub?: string;
  href: string;
  accent?: 'green' | 'blue' | 'black' | 'pink';
};

const LINKS: LinkItem[] = [
  {
    Icon: Globe,
    label: 'Website',
    sub: 'agrivisionai.org',
    href: 'https://agrivisionai.org',
    accent: 'green',
  },
  {
    Icon: Newspaper,
    label: 'AGRIVISION Build Notes',
    sub: 'Newsletter — what we are building, in public',
    href: 'https://www.linkedin.com/newsletters/7476661645046378496/',
    accent: 'green',
  },
  {
    Icon: Linkedin,
    label: 'AGRIVISION AI on LinkedIn',
    sub: 'Follow the company',
    href: 'https://www.linkedin.com/company/agrivisionai/',
    accent: 'blue',
  },
  {
    Icon: User,
    label: 'Vijesh Reddy Golamari',
    sub: 'Founder & CEO on LinkedIn',
    href: 'https://www.linkedin.com/in/vijesh-reddy-golamari/',
    accent: 'blue',
  },
  {
    Icon: Twitter,
    label: 'YieldAI Global on X',
    sub: '@yieldaiglobal',
    href: 'https://x.com/yieldaiglobal',
    accent: 'black',
  },
  {
    Icon: Github,
    label: 'AGRIVISION AI on GitHub',
    sub: 'Source and docs — github.com/agrivisionai-org',
    href: 'https://github.com/agrivisionai-org',
    accent: 'black',
  },
  {
    Icon: Instagram,
    label: 'AGRIVISION AI on Instagram',
    sub: '@agrivisionai.inc',
    href: 'https://www.instagram.com/agrivisionai.inc/',
    accent: 'pink',
  },
  {
    Icon: Sprout,
    label: 'YieldAI Global — try it free',
    sub: 'Live in India, USA & Canada',
    href: 'https://yieldaiglobal.com',
    accent: 'green',
  },
  {
    Icon: Mail,
    label: 'Get in touch',
    sub: 'hello@agrivisionai.org',
    href: 'mailto:hello@agrivisionai.org',
    accent: 'green',
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.04] via-paper to-paper">
      <div className="mx-auto flex w-full max-w-md flex-col items-center px-5 py-12 sm:py-16">
        <a href="https://agrivisionai.org" className="mb-6 transition-transform hover:scale-[1.02]" aria-label="AGRIVISION AI home">
          <Logo />
        </a>

        <h1 className="font-display text-2xl font-semibold tracking-tight text-ink-900 text-center">
          AGRIVISION AI
        </h1>
        <p className="mt-2 text-center text-sm text-ink-600 max-w-xs">
          AI-first products for global agriculture. Flagship: <span className="font-semibold text-brand-primary">YieldAI Global</span>.
        </p>

        <ul className="mt-8 w-full space-y-3">
          {LINKS.map(({ Icon, label, sub, href, accent }) => {
            const accentRing =
              accent === 'blue' ? 'group-hover:border-[#0077B5]/40 group-hover:bg-[#0077B5]/[0.04]'
              : accent === 'pink' ? 'group-hover:border-[#E1306C]/40 group-hover:bg-[#E1306C]/[0.04]'
              : accent === 'black' ? 'group-hover:border-ink-900/30 group-hover:bg-ink-900/[0.04]'
              : 'group-hover:border-brand-primary/40 group-hover:bg-brand-primary/[0.05]';
            const iconColor =
              accent === 'blue' ? 'text-[#0077B5]'
              : accent === 'pink' ? 'text-[#E1306C]'
              : accent === 'black' ? 'text-ink-900'
              : 'text-brand-primary';
            return (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-4 rounded-2xl border border-ink-900/[0.08] bg-white px-4 py-4 shadow-[0_2px_10px_-4px_rgba(15,107,62,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(15,107,62,0.18)] ${accentRing}`}
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-50 ${iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-ink-900">{label}</div>
                    {sub && <div className="mt-0.5 truncate text-xs text-ink-500">{sub}</div>}
                  </div>
                  <svg className="h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-xs text-ink-400">
          © {new Date().getFullYear()} AGRIVISION AI · Founded May 2026
        </p>
      </div>
    </main>
  );
}
