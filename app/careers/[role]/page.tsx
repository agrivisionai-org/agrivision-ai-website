import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { getRole, roleSlugs, roles, PROGRAMME } from '../roles-data';
import { ArrowLeft, ArrowUpRight, Mail, Check } from 'lucide-react';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-3xl px-5';

export function generateStaticParams() {
  return roleSlugs.map((role) => ({ role }));
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params;
  const r = getRole(role);
  if (!r) return {};
  const url = `${BASE}/careers/${r.slug}`;
  // Purpose-written per role. The old template concatenated the full summary with a fixed
  // tail and ran 225-272 characters, well past what a SERP shows.
  const description = r.metaDescription;
  return {
    title: { absolute: `${r.title} | AGRIVISION AI` },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${r.title} · AGRIVISION AI`,
      description,
      siteName: 'AGRIVISION AI',
      // Required explicitly: defining openGraph without `images` suppresses the root
      // opengraph-image.png file convention, leaving a summary_large_image card with no image.
      images: [{ url: `${BASE}/opengraph-image.png`, width: 1200, height: 630, alt: `${r.title} at AGRIVISION AI` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: r.title,
      description,
      images: [`${BASE}/opengraph-image.png`],
    },
  };
}

export default async function RolePage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  const r = getRole(role);
  if (!r) notFound();

  const url = `${BASE}/careers/${r.slug}`;
  const others = roles.filter((o) => o.slug !== r.slug);

  // The JobPosting lives here rather than on /careers: Google wants one posting per URL,
  // and duplicating it across both pages would compete with itself.
  const description =
    `<p>${r.summary}</p>` +
    `<p>Focus areas: ${r.areas.join(', ')}.</p>` +
    `<p><strong>What you would do:</strong></p><ul>${r.whatYouDo.map((x) => `<li>${x}</li>`).join('')}</ul>` +
    `<p><strong>Who this fits:</strong></p><ul>${r.whoFits.map((x) => `<li>${x}</li>`).join('')}</ul>` +
    `<p><strong>Commitment:</strong> 20 hours per week on US Eastern time. Check the overlap with your own timezone before applying — outside the Americas this means evening or early-morning hours.</p>` +
    `<p><strong>Duration:</strong> approximately ${PROGRAMME.duration}.</p>` +
    `<p><strong>Location:</strong> fully remote, open to candidates worldwide.</p>` +
    `<p><strong>What you gain:</strong> supervised projects, mentorship and regular feedback, a completion certificate, a reference based on performance, and portfolio work where applicable.</p>` +
    `<p><strong>Compensation:</strong> this is primarily a learning and training programme. Compensation and eligibility vary by country and by local employment and university regulations, and are confirmed before you start.</p>` +
    `<p>Apply by email to ${PROGRAMME.applyEmail} with your resume, area of interest, current education or experience, country, and LinkedIn profile.</p>`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'JobPosting',
        '@id': `${url}#posting`,
        title: r.title,
        description,
        identifier: { '@type': 'PropertyValue', name: 'AGRIVISION AI', value: r.slug },
        datePosted: PROGRAMME.posted,
        validThrough: PROGRAMME.validThrough,
        employmentType: 'INTERN',
        hiringOrganization: { '@id': `${BASE}#organization` },
        // Open worldwide, so no applicantLocationRequirements node. Google reads
        // TELECOMMUTE with no applicant-location restriction as "anywhere"; listing
        // countries here would narrow it, and listing every country is not a thing.
        jobLocationType: 'TELECOMMUTE',
        industry: 'Agricultural Technology',
        directApply: false,
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Careers', item: `${BASE}/careers` },
          { '@type': 'ListItem', position: 3, name: r.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="relative pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article className={`${SECTION} pt-12`}>
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-ink-600 transition-colors hover:text-brand-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All roles
        </Link>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> Open now
        </div>

        <h1 className="mt-4 text-balance font-display text-display-md text-ink-900">{r.title}</h1>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-700">{r.summary}</p>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl border border-ink-900/[0.07] bg-ink-50/60 p-6 sm:grid-cols-4">
          {[
            { label: 'Location', value: PROGRAMME.location },
            { label: 'Duration', value: PROGRAMME.duration },
            { label: 'Commitment', value: PROGRAMME.commitment },
            { label: 'Who can apply', value: PROGRAMME.whoCanApply },
          ].map((f) => (
            <div key={f.label}>
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">{f.label}</dt>
              <dd className="mt-1 text-sm font-medium text-ink-800">{f.value}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink-900">Focus areas</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {r.areas.map((a) => (
              <span
                key={a}
                className="rounded-full border border-ink-900/[0.08] bg-white px-3 py-1.5 text-xs font-medium text-ink-700"
              >
                {a}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink-900">What you would do</h2>
          <ul className="mt-3 space-y-3">
            {r.whatYouDo.map((x) => (
              <li key={x} className="flex gap-3 text-[1.05rem] leading-relaxed text-ink-700">
                <Check className="mt-1.5 h-4 w-4 shrink-0 text-brand-primary" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink-900">Who this fits</h2>
          <ul className="mt-3 space-y-3">
            {r.whoFits.map((x) => (
              <li key={x} className="flex gap-3 text-[1.05rem] leading-relaxed text-ink-700">
                <Check className="mt-1.5 h-4 w-4 shrink-0 text-brand-primary" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-ink-900/[0.07] bg-white p-6">
          <h2 className="font-display text-xl font-semibold text-ink-900">Hours, and being straight about pay</h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-700">
            The programme is fully remote and open worldwide. It runs 20 hours a week on US
            Eastern time, so check the overlap with your own timezone before applying — outside
            the Americas that means evening or early-morning hours. It is a learning-focused programme:
            supervised projects, mentorship and regular feedback, a completion certificate, and a
            reference based on performance.
          </p>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-700">
            Compensation and eligibility vary by country and by local employment and university
            regulations. We will tell you where you stand before you start, not after.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-brand-primary/25 bg-brand-primary/[0.05] p-6">
          <h2 className="font-display text-xl font-semibold text-ink-900">Apply</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            Send your resume, area of interest, current education or experience, country, and
            LinkedIn profile.
          </p>
          <a
            href={`mailto:${PROGRAMME.applyEmail}?subject=${encodeURIComponent(r.title)}`}
            className="btn-primary mt-5 inline-flex"
          >
            Apply for {r.title} <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROGRAMME.applyEmail}`}
            className="mt-4 flex items-center gap-2 text-sm text-ink-600 hover:text-ink-900"
          >
            <Mail className="h-4 w-4 text-brand-primary" />
            {PROGRAMME.applyEmail}
          </a>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-ink-900">Other open roles</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/careers/${o.slug}`}
                className="card-surface group block p-5 transition-colors hover:border-brand-primary/40"
              >
                <div className="text-sm font-semibold text-ink-900">{o.title}</div>
                <div className="mt-1 text-xs text-ink-600">{o.areas.length} focus area{o.areas.length > 1 ? 's' : ''}</div>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary">
                  View role <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
