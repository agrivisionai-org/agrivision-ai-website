import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-3xl px-5';

export const metadata: Metadata = {
  title: { absolute: 'Terms of Service — AGRIVISION AI' },
  description: 'Terms for using agrivisionai.org, operated by AGRIVISION AI (Agrivisionai Inc).',
  alternates: { canonical: `${BASE}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper pb-24">
      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className={`${SECTION} flex items-center justify-between py-5`}>
          <Link href="/" aria-label="AGRIVISION AI home"><Logo /></Link>
          <Link href="/" className="text-sm font-semibold text-ink-600 hover:text-brand-primary">Home</Link>
        </div>
      </header>

      <article className={`${SECTION} pt-12`}>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink-900">Terms of Service</h1>
        <p className="mt-3 text-sm text-ink-500">Last updated: June 30, 2026</p>

        <div className="mt-8 space-y-6 text-[1.02rem] leading-relaxed text-ink-700">
          <p>
            These Terms govern your use of agrivisionai.org (the &ldquo;Site&rdquo;), operated by AGRIVISION AI
            (legal entity Agrivisionai Inc, a Delaware C-Corporation headquartered in Detroit, Michigan, USA). By
            using the Site, you agree to these Terms.
          </p>

          <Section title="What this Site is, and what it is not">
            <p>These Terms cover the Site only. They do not govern use of our products. YieldAI Global,
            including its CropVision module, is live and is provided at yieldaiglobal.com under the terms
            presented there; signing up, subscribing, and paying all happen on that site, not this one.</p>
            <p>Other products described here — FieldSense and FieldOps — are planned and are not available.
            Descriptions of planned products, roadmap items, and future capabilities are statements of
            intent only, and are not an offer, warranty, or guarantee of future features, availability,
            or performance.</p>
          </Section>

          <Section title="Intellectual property">
            <p>The Site&rsquo;s content, branding, and logos are owned by Agrivisionai Inc or used with permission,
            except where noted (for example, brand assets we release under an open license). You may not use our
            branding in a way that implies affiliation or endorsement without permission.</p>
          </Section>

          <Section title="Acceptable use">
            <p>Don&rsquo;t use the Site unlawfully, attempt to disrupt it, or misrepresent your identity when
            contacting us. Information you submit must be accurate.</p>
          </Section>

          <Section title="No warranties; limitation of liability">
            <p>The Site is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum extent
            permitted by law, Agrivisionai Inc is not liable for any indirect or consequential damages arising from
            your use of the Site.</p>
          </Section>

          <Section title="Governing law">
            <p>These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law
            rules.</p>
          </Section>

          <Section title="Changes & contact">
            <p>We may update these Terms as our products develop. Questions? Email
            <a className="text-brand-primary hover:underline" href="mailto:hello@agrivisionai.org"> hello@agrivisionai.org</a>.</p>
          </Section>

          <p className="text-sm text-ink-500">
            These Terms cover this website only and may be updated over time. Use of YieldAI Global is
            governed by the terms published at yieldaiglobal.com.
          </p>
        </div>

        <div className="mt-10 flex gap-4 text-sm">
          <Link href="/privacy" className="font-semibold text-brand-primary hover:underline">Privacy Policy →</Link>
          <Link href="/" className="font-semibold text-ink-600 hover:text-brand-primary">Back home</Link>
        </div>
      </article>
    <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink-900">{title}</h2>
      <div className="mt-2 space-y-3">{children}</div>
    </section>
  );
}
