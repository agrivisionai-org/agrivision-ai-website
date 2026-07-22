import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { posts, getPost, postSlugs, readingMinutes } from '../blog-data';
import { ArrowLeft, ArrowUpRight, Mail, CircleDot } from 'lucide-react';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-3xl px-5';

function fmtDate(d: string) {
  const [y, m, day] = d.split('-').map(Number);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${months[(m || 1) - 1]} ${day}, ${y}`;
}

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `${BASE}/blog/${post.slug}`;
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: 'AGRIVISION AI',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${BASE}/opengraph-image.png`, width: 1200, height: 630, alt: 'AGRIVISION AI' }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.metaDescription, images: [`${BASE}/opengraph-image.png`] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${BASE}/blog/${post.slug}`;
  const others = posts.filter((p) => p.slug !== post.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.date,
        dateModified: post.date,
        author: { '@type': 'Person', '@id': `${BASE}#founder`, name: post.author },
        publisher: { '@id': `${BASE}#organization` },
        mainEntityOfPage: url,
        image: `${BASE}/opengraph-image.png`,
        keywords: post.tags.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-primary/[0.04] via-paper to-paper pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className={`${SECTION} flex items-center justify-between gap-4 py-5`} style={{ maxWidth: '64rem' }}>
          <Link href="/" aria-label="AGRIVISION AI home"><Logo /></Link>
          <a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>
      </header>

      <article className={`${SECTION} pt-12`}>
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-brand-primary">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>
        <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-[2.75rem] sm:leading-[1.1]">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-500">
          <span className="font-medium text-ink-700">{post.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.date}>{fmtDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{readingMinutes(post)} min read</span>
        </div>

        <div className="mt-10 space-y-9">
          {post.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">{s.heading}</h2>
              <div className="mt-3 space-y-4">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-[1.05rem] leading-relaxed text-ink-700">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full border border-ink-900/[0.08] bg-ink-50 px-3 py-1 text-xs text-ink-600">{t}</span>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-ink-900/[0.08] bg-ink-900 p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-white">Follow the build</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            We&rsquo;re building AGRIVISION AI in the open. Get the next update via AGRIVISION Build Notes, or reach out directly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://www.linkedin.com/newsletters/7476661645046378496/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5">
              Read Build Notes <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className={`${SECTION} mt-12`}>
          <h2 className="mb-4 font-display text-lg font-semibold text-ink-900">More posts</h2>
          <div className="space-y-3">
            {others.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-2xl border border-ink-900/[0.08] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-primary/40">
                <div className="text-xs text-ink-500">{fmtDate(p.date)}</div>
                <div className="mt-1 font-display text-base font-semibold text-ink-900">{p.title}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer className={`${SECTION} mt-12 border-t border-ink-900/[0.07] pt-8 text-center`}>
        <div className="inline-flex items-center gap-2 text-xs text-ink-500">
          <CircleDot className="h-3.5 w-3.5" /> AGRIVISION AI · Agrivisionai Inc · Detroit, Michigan
        </div>
      </footer>
    </main>
  );
}
