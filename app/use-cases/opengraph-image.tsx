import { ImageResponse } from 'next/og';
import { LEAF_MARK } from '../blog/[slug]/leaf-mark';

// Social card for /use-cases. Same design language as the blog cards and the site card:
// paper ground, green rail, the real leaf mark, deep-green headline, signature rule at the
// foot. Static -- this page has one title, so there is nothing to parameterise.
//
// The page previously fell back to the site-wide opengraph-image.png, which meant every
// share of the use-cases page looked identical to a share of the homepage.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'AI use cases in agriculture — what YieldAI Global actually does';

const PAPER = '#F4F6F1';
const GREEN = '#0F6B3E';
const LEAF = '#4CAF2B';
const DEEP = '#0E3D24';
const INK600 = '#525A66';
const INK900 = '#14171C';

export default function Image() {
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
              {/* Satori cannot read /public at render time, so the mark arrives as a data
                  URI from the blog card's module rather than as a file path. */}
              <img src={LEAF_MARK} width={30} height={36} alt="" style={{ marginRight: 14 }} />
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
                Use cases
              </div>
              <div style={{ marginLeft: 18, fontSize: 16, color: INK600, display: 'flex' }}>
                India · USA · Canada
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: 68,
                fontWeight: 700,
                lineHeight: 1.18,
                letterSpacing: -0.5,
                color: DEEP,
                maxWidth: 1000,
              }}
            >
              AI use cases in agriculture
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: 18,
                fontSize: 22,
                lineHeight: 1.4,
                color: INK600,
                maxWidth: 940,
              }}
            >
              Nine things farmers and extension workers actually use YieldAI Global for, each
              mapped to the module behind it.
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
                No outcome statistics on this page
              </div>
              <div style={{ fontSize: 15, color: INK600, display: 'flex', marginTop: 4 }}>
                We have not run the studies that would support one
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
