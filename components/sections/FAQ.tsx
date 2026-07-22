// Homepage FAQ — also emits FAQPage structured data and states the entity
// identity explicitly (Detroit, Delaware, sole founder, live flagship, non-affiliation)
// to win the brand-disambiguation fight against similarly named projects.

const FAQS = [
  {
    q: "What is AGRIVISION AI?",
    a: "AGRIVISION AI (legal entity Agrivisionai Inc) is an AI-first agriculture technology company headquartered in Detroit, Michigan, building intelligent, multilingual products for global agriculture. Its flagship product, YieldAI Global, is a live AI crop intelligence platform available in India, the USA, and Canada.",
  },
  {
    q: "Who founded AGRIVISION AI?",
    a: "AGRIVISION AI was founded by Vijesh Reddy Golamari, its sole founder and CEO. The company has one founder and no co-founders.",
  },
  {
    q: "Where is AGRIVISION AI based?",
    a: "AGRIVISION AI is headquartered in Detroit, Michigan, USA, and is incorporated as Agrivisionai Inc, a Delaware C-Corporation.",
  },
  {
    q: "When was AGRIVISION AI founded?",
    a: "AGRIVISION AI was founded in May 2026.",
  },
  {
    q: "What is YieldAI Global?",
    a: "YieldAI Global is the flagship product of AGRIVISION AI — an AI crop intelligence platform for farming households and agricultural extension workers, with AI crop advice, live government market prices, weather, and government-scheme guidance in the farmer's own language. It is live and available in India, the USA, and Canada at yieldaiglobal.com, with a free trial.",
  },
  {
    q: "Is AGRIVISION AI's product available yet?",
    a: "Yes. YieldAI Global is live and available now in India, the USA, and Canada at yieldaiglobal.com, where you can start a free trial. AGRIVISION AI remains an early-stage, founder-led company and continues to build in public.",
  },
  {
    q: "Is this the same as other companies named AgriVision AI?",
    a: "No. This AGRIVISION AI is Agrivisionai Inc, a Detroit, Michigan company founded in 2026 by sole founder Vijesh Reddy Golamari. It is not affiliated with any other similarly named agricultural-technology project or company.",
  },
  {
    q: "How can I follow AGRIVISION AI or get involved?",
    a: "Visit agrivisionai.org, email hello@agrivisionai.org, follow AGRIVISION Build Notes on LinkedIn, or find the company on X (@yieldaiglobal) and GitHub (agrivisionai-org).",
  },
];

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mx-auto w-max">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_1px_rgba(15,107,62,0.5)]" />
            FAQ
          </div>
          <h2 className="mt-6 text-balance font-display text-display-lg text-ink-900">
            Questions, answered <span className="gradient-text-green">honestly</span>.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-ink-900/[0.08] bg-white px-5 py-4 sm:px-6 sm:py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900 marker:hidden sm:text-base">
                {f.q}
                <span className="text-ink-400 transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
