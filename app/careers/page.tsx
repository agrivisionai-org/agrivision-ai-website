import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Careers } from '@/components/sections/Careers';

export const metadata: Metadata = {
  title: 'Careers & Internships',
  description:
    'Remote Learning & Internship Program in AI/ML, generative AI, software, data, product, design, AgriTech research, business and sales. USA, UK, Ireland or Hyderabad, India.',
  alternates: { canonical: 'https://agrivisionai.org/careers' },
  openGraph: {
    type: 'website',
    url: 'https://agrivisionai.org/careers',
    title: 'Careers & Internships at AGRIVISION AI',
    description:
      'Unpaid remote internships at AGRIVISION AI — AI/ML, product, agriculture research and sales. Build AI tools that reach real farmers.',
    siteName: 'AGRIVISION AI',
    images: [{ url: 'https://agrivisionai.org/opengraph-image.png', width: 1200, height: 630, alt: 'Careers at AGRIVISION AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yieldaiglobal',
    title: 'Careers at AGRIVISION AI',
    description: 'Unpaid remote internships — AI/ML, product, agriculture research and sales.',
    images: ['https://agrivisionai.org/opengraph-image.png'],
  },
};

const BASE = 'https://agrivisionai.org';

// JobPosting schema for Google Jobs. One posting per track card on the page.
// datePosted / validThrough are literals rather than computed: a build-time `new Date()`
// would silently re-date every posting on every deploy, which is exactly the drift Google
// penalises. Update these by hand when the intake changes.
const POSTED = '2026-08-24';
const VALID_THROUGH = '2026-12-31';

// No baseSalary node. Compensation varies by country and local rules, and asserting a
// figure -- including zero -- would state something the careers page deliberately does not.
const ROLES = [
  {
    id: 'ai-engineering',
    title: 'AI & Engineering Intern',
    areas: ['Artificial Intelligence & Machine Learning', 'Generative AI / LLMs', 'Software & Application Development'],
    summary:
      'Work on the models, LLM systems and application layer behind YieldAI Global, an AI farming assistant already live for farmers in India, the USA and Canada.',
  },
  {
    id: 'data-product-design',
    title: 'Data, Product & Design Intern',
    areas: ['Data Analytics & Data Engineering', 'Product Analysis', 'UI/UX & Product Design'],
    summary:
      'Turn field and market data into decisions farmers can act on, designing for low connectivity, low literacy and 13 languages.',
  },
  {
    id: 'agritech-research',
    title: 'AgriTech Research Intern',
    areas: ['AgriTech Research & Innovation'],
    summary:
      'Ground the platform’s answers in credible agronomic sources including ICAR, FAO and state agriculture departments, so the advice given to farmers is correct.',
  },
  {
    id: 'business-growth',
    title: 'Business & Growth Intern',
    areas: ['Business Strategy', 'Marketing & Business Development', 'Sales'],
    summary:
      'Reach farmers, cooperatives and agricultural extension networks, and work out which channels actually carry.',
  },
];

const PROGRAMME_HTML =
  '<p>AGRIVISION AI runs a learning-focused remote internship programme for students, recent graduates and early-career professionals. You work on YieldAI Global, an AI farming assistant live today in India, the USA and Canada.</p>' +
  '<p><strong>Commitment:</strong> 20 hours per week on US Eastern time. Applicants in the UK, Ireland or India should expect evening hours.</p>' +
  '<p><strong>Duration:</strong> approximately 8–12 weeks.</p>' +
  '<p><strong>Location:</strong> remote, open to candidates in the USA, the UK, Ireland, or Hyderabad, India.</p>' +
  '<p><strong>What you gain:</strong> supervised projects, mentorship and regular feedback, a completion certificate, a reference based on performance, and portfolio work where applicable.</p>' +
  '<p><strong>Compensation:</strong> this is primarily a learning and training programme. Compensation and eligibility vary by country and by local employment and university regulations, and are confirmed before you start.</p>' +
  '<p>Apply by email to careers@agrivisionai.org with your resume, area of interest, current education or experience, country, and LinkedIn profile.</p>';

const jobsSchema = {
  '@context': 'https://schema.org',
  '@graph': ROLES.map((r) => ({
    '@type': 'JobPosting',
    '@id': `${BASE}/careers#${r.id}`,
    title: r.title,
    description:
      `<p>${r.summary}</p><p>Focus areas: ${r.areas.join(', ')}.</p>` + PROGRAMME_HTML,
    identifier: { '@type': 'PropertyValue', name: 'AGRIVISION AI', value: r.id },
    datePosted: POSTED,
    validThrough: VALID_THROUGH,
    employmentType: 'INTERN',
    hiringOrganization: { '@id': `${BASE}#organization` },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'City', name: 'Hyderabad, India' },
    ],
    industry: 'Agricultural Technology',
    directApply: false,
    url: `${BASE}/careers`,
  })),
};

export default function CareersPage() {
  return (
    <main className="relative pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsSchema) }} />
      <Nav />
      <Careers />
      <Footer />
    </main>
  );
}
