import { ArrowUpRight, Newspaper } from 'lucide-react';

// AGRIVISION Build Notes — the LinkedIn newsletter. Rendered on the blog index
// and the homepage; keep it here so the copy and link cannot drift apart.
const NEWSLETTER_URL = 'https://www.linkedin.com/newsletters/7476661645046378496/';

export function BuildNotesCard() {
  return (
    <a
      href={NEWSLETTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-2xl border border-brand-primary/25 bg-brand-primary/[0.05] px-6 py-5 transition-colors hover:border-brand-primary/50 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
          <Newspaper className="h-4 w-4" />
        </span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">Newsletter</div>
          <div className="mt-1 font-semibold text-ink-900">AGRIVISION Build Notes</div>
          <p className="mt-1 text-sm leading-relaxed text-ink-600">
            Weekly build-in-public notes on LinkedIn — what shipped, what broke, and what we got wrong.
          </p>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-transform group-hover:-translate-y-0.5 sm:self-auto">
        Subscribe <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}
