import type { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';

const BASE = 'https://agrivisionai.org';
const SECTION = 'mx-auto w-full max-w-3xl px-5';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy — AGRIVISION AI' },
  description: 'How AGRIVISION AI (Agrivisionai Inc) collects and uses information from agrivisionai.org.',
  alternates: { canonical: `${BASE}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper pb-24">
      <header className="border-b border-ink-900/[0.07] bg-white/60 backdrop-blur">
        <div className={`${SECTION} flex items-center justify-between py-5`}>
          <Link href="/" aria-label="AGRIVISION AI home"><Logo /></Link>
          <Link href="/" className="text-sm font-semibold text-ink-600 hover:text-brand-primary">Home</Link>
        </div>
      </header>

      <article className={`${SECTION} pt-12`}>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ink-500">Last updated: June 30, 2026</p>

        <div className="mt-8 space-y-6 text-[1.02rem] leading-relaxed text-ink-700">
          <p>
            This Privacy Policy explains how AGRIVISION AI (legal entity Agrivisionai Inc, a Delaware
            C-Corporation headquartered in Detroit, Michigan, USA) handles information collected through
            agrivisionai.org. This site is informational: it does not host product accounts. Information
            collected when you sign up for or use YieldAI Global is handled at yieldaiglobal.com, under the
            privacy notice published there.
          </p>

          <Section title="Information we collect">
            <p>
              <strong>Information you give us.</strong> If you use our contact or early-access form, we collect the
              details you submit — typically your name, email address, company or organization, the reason for
              contact, and your message.
            </p>
            <p>
              <strong>Usage analytics.</strong> We use Google Analytics 4 and Microsoft Clarity to understand how
              visitors use the site (for example, pages viewed and general interactions). These tools may set cookies
              and collect device and approximate-location data. We do not use this data to identify you personally.
            </p>
          </Section>

          <Section title="How we use information">
            <p>We use the information to respond to your inquiry, to maintain an early-access/interest list for our
            products, to improve the website, and to keep records of communications. We do not sell your personal
            information.</p>
          </Section>

          <Section title="Sharing">
            <p>We share information only with service providers that help us operate (for example, our website host,
            analytics, and email providers), or where required by law. We do not sell or rent personal data.</p>
          </Section>

          <Section title="Your choices">
            <p>You can request access to, correction of, or deletion of the personal information you have submitted
            by emailing <a className="text-brand-primary hover:underline" href="mailto:hello@agrivisionai.org">hello@agrivisionai.org</a>.
            You can opt out of analytics cookies using your browser settings.</p>
          </Section>

          <Section title="Contact">
            <p>Questions about this policy? Email <a className="text-brand-primary hover:underline" href="mailto:hello@agrivisionai.org">hello@agrivisionai.org</a>.
            AGRIVISION AI · Agrivisionai Inc · Detroit, Michigan, USA.</p>
          </Section>

          <p className="text-sm text-ink-500">
            This notice covers this website only and may be updated as our products develop.
          </p>
        </div>

        <div className="mt-10 flex gap-4 text-sm">
          <Link href="/terms" className="font-semibold text-brand-primary hover:underline">Terms of Service →</Link>
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
