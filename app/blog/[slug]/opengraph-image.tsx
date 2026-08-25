import { ImageResponse } from 'next/og';
import { getPost, postSlugs } from '../blog-data';

// Per-post social card. Same design language as the site card in app/opengraph-image.png:
// paper ground, green rail, wordmark, green-to-deep headline, URL footer.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'AGRIVISION AI blog post';

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

// Satori does not reorder complex scripts. It maps codepoints to glyphs in sequence, so a
// Devanagari pre-base i-matra is drawn AFTER its base consonant and anusvara is dropped:
// "ड्रिप सिंचाई" came out as "ड्रपि सचिाई", which is not a word. Embedding Noto Sans
// Devanagari was tried and changed the typeface without changing the shaping, confirming
// this is a Satori limitation rather than a missing font.
//
// So Hindi cards do not render Devanagari at all. Each Hindi post has an English twin via
// altSlug, and its title is used instead: a readable English card beats a garbled Hindi one,
// and the page behind the link is still Hindi. The page's own <h1> is unaffected -- browsers
// shape it correctly.
const PAPER = '#F4F6F1';
const GREEN = '#0F6B3E';
const LEAF = '#4CAF2B';
const DEEP = '#0E3D24';
const INK600 = '#525A66';
const INK900 = '#14171C';

function formatDate(iso: string, lang: string) {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  const isHi = post?.lang === 'hi';
  const twin = isHi && post?.altSlug ? getPost(post.altSlug) : undefined;

  // Latin only on Hindi cards, including the date -- Devanagari month names would mis-shape
  // for exactly the same reason the headline does.
  const title = (isHi ? twin?.title : post?.title) ?? 'AGRIVISION AI';
  const tag = isHi ? 'Hindi guide' : post?.tags?.[0] ?? 'Blog';
  const date = post ? formatDate(post.date, 'en') : '';

  const len = title.length;
  const titleSize = len > 46 ? 58 : 68;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: PAPER,
          fontFamily: 'sans-serif',
        }}
      >
        {/* brand rail */}
        <div style={{ width: 16, height: '100%', backgroundColor: GREEN, display: 'flex' }} />

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 72px',
          }}
        >
          {/* wordmark */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  backgroundColor: GREEN,
                  display: 'flex',
                  marginRight: 14,
                }}
              />
              <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, letterSpacing: 1 }}>
                <span style={{ color: INK900 }}>AGRIVISION</span>
                <span style={{ color: LEAF, marginLeft: 10 }}>AI</span>
              </div>
            </div>
            <div
              style={{
                marginTop: 6,
                marginLeft: 44,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 3,
                color: INK600,
                display: 'flex',
              }}
            >
              AI FOR A SUSTAINABLE FUTURE
            </div>
          </div>

          {/* eyebrow + title */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 22 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 999,
                  backgroundColor: 'rgba(15,107,62,0.10)',
                  padding: '7px 16px',
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: GREEN,
                }}
              >
                {tag}
              </div>
              <div style={{ marginLeft: 18, fontSize: 16, color: INK600, display: 'flex' }}>{date}</div>
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: titleSize,
                fontWeight: 700,
                lineHeight: 1.18,
                letterSpacing: -0.5,
                color: DEEP,
                maxWidth: 1000,
              }}
            >
              {title}
            </div>
          </div>

          {/* footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              borderTop: `1px solid rgba(82,90,102,0.28)`,
              paddingTop: 22,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 19, fontWeight: 600, color: INK900, display: 'flex' }}>
                {post?.author ?? 'AGRIVISION AI'}
              </div>
              <div style={{ fontSize: 15, color: INK600, display: 'flex', marginTop: 4 }}>
                Founder, CEO &amp; AI Architect
              </div>
            </div>
            <div style={{ fontSize: 20, fontWeight: 600, color: GREEN, display: 'flex' }}>
              agrivisionai.org
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
