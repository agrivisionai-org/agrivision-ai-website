// Single source of truth for the Learning & Internship Program.
//
// Both /careers (the index cards) and /careers/[role] (the individual pages, which carry
// the JobPosting schema) read from here, so a change to hours, location or areas cannot
// leave one surface disagreeing with another.

export type Role = {
  slug: string;
  /** Full job title. Used as the h1 and as JobPosting.title, so no company or location in it. */
  title: string;
  /** Shorter label for the index card. */
  cardTitle: string;
  /** The specific areas this track covers. */
  areas: string[];
  /** One sentence, used on the card and as the opening line of the JobPosting description. */
  summary: string;
  /** Purpose-written for <meta name="description">. Kept under 160 characters. */
  metaDescription: string;
  whatYouDo: string[];
  whoFits: string[];
};

// Programme-wide facts. Stated once, rendered everywhere.
export const PROGRAMME = {
  location: 'Remote — USA, UK, Ireland, or Hyderabad, India',
  duration: '8–12 weeks',
  commitment: '20 hrs / week, US Eastern hours',
  whoCanApply: 'Students, recent graduates, early career',
  applyEmail: 'careers@agrivisionai.org',
  /**
   * Literals, deliberately. A build-time `new Date()` would re-date every posting on every
   * deploy, which is the staleness Google penalises. Update by hand when the intake changes.
   */
  posted: '2026-08-24',
  validThrough: '2026-12-31',
};

export const roles: Role[] = [
  {
    slug: 'ai-engineering',
    metaDescription:
      'Remote AI/ML internship at AGRIVISION AI — work on the models and LLM systems behind YieldAI Global. 20 hrs/week, US Eastern. USA, UK, Ireland or Hyderabad.',
    title: 'AI & Engineering Intern',
    cardTitle: 'AI & engineering',
    areas: ['Artificial Intelligence & Machine Learning', 'Generative AI / LLMs', 'Software & Application Development'],
    summary:
      'Work on the models, LLM systems and application layer behind YieldAI Global, an AI farming assistant already live for farmers in India, the USA and Canada.',
    whatYouDo: [
      'Work on the retrieval and reasoning layer that turns government market data, weather and agronomic sources into an answer a farmer can act on.',
      'Help evaluate model output — including where it should decline to answer. Anything approaching chemical dosage routes to a local extension officer instead of guessing.',
      'Build and maintain the pipelines that keep live market prices and weather flowing into the platform.',
      'Ship to production. Your work goes in front of real users, not into a sandbox.',
    ],
    whoFits: [
      'You can read and write Python, and you are comfortable being wrong in public while you learn.',
      'You have some exposure to ML or LLM tooling — coursework and side projects count.',
      'You care that a confident wrong answer can cost someone a season.',
    ],
  },
  {
    slug: 'data-product-design',
    metaDescription:
      'Remote data, product and design internship — turn farm and market data into decisions farmers act on. 20 hrs/week, US Eastern. USA, UK, Ireland or Hyderabad.',
    title: 'Data, Product & Design Intern',
    cardTitle: 'Data, product & design',
    areas: ['Data Analytics & Data Engineering', 'Product Analysis', 'UI/UX & Product Design'],
    summary:
      'Turn field and market data into decisions farmers can act on, designing for low connectivity, low literacy and 13 languages.',
    whatYouDo: [
      'Analyse how farmers actually use the platform, and turn that into changes we ship.',
      'Design flows that work on a mid-range Android phone on a weak connection, for someone who may be reading their second language.',
      'Work on the 17 platform modules — from soil analysis and crop recommendation through to market prices and the season record.',
      'Build the reporting that tells us whether a change helped or not.',
    ],
    whoFits: [
      'You can hold a user in your head who is not like you.',
      'Some SQL, spreadsheets, Figma, or analytics tooling — you do not need all four.',
      'You would rather test an assumption than argue about it.',
    ],
  },
  {
    slug: 'agritech-research',
    metaDescription:
      'Remote AgriTech research internship — ground our crop advice in ICAR, FAO and government sources. 20 hrs/week, US Eastern. USA, UK, Ireland or Hyderabad.',
    title: 'AgriTech Research Intern',
    cardTitle: 'AgriTech research',
    areas: ['AgriTech Research & Innovation'],
    summary:
      'Ground the platform’s answers in credible agronomic sources — ICAR, FAO and state agriculture departments — so the advice given to farmers is correct.',
    whatYouDo: [
      'Check what the platform tells farmers against credible agronomic sources, and flag where it is thin or wrong.',
      'Build out crop, pest and disease coverage across the 54 crops the platform handles.',
      'Work on government scheme guidance — PM-KISAN, PMFBY and others — so the detail is accurate and current.',
      'Help decide where the honest answer is "ask your local extension officer".',
    ],
    whoFits: [
      'A background in agriculture, agronomy, environmental science or a related field.',
      'You are careful with sources and comfortable saying "this claim is not supported".',
      'Bonus: you have spent time on or around a working farm.',
    ],
  },
  {
    slug: 'business-growth',
    metaDescription:
      'Remote business and growth internship — reach farmers, cooperatives and extension networks. 20 hrs/week, US Eastern. USA, UK, Ireland or Hyderabad.',
    title: 'Business & Growth Intern',
    cardTitle: 'Business & growth',
    areas: ['Business Strategy', 'Marketing & Business Development', 'Sales'],
    summary:
      'Reach farmers, cooperatives and agricultural extension networks, and work out which channels actually carry.',
    whatYouDo: [
      'Find and test routes to farmers — cooperatives, extension networks, agri-input retailers, farmer producer organisations.',
      'Run outreach and report honestly on what converted and what did not.',
      'Research the market across our three live countries and the ones on the roadmap.',
      'Help shape the story we tell, without overclaiming what the product does.',
    ],
    whoFits: [
      'You are comfortable starting conversations with strangers.',
      'You write clearly and follow up without being told to.',
      'You would rather report a channel that failed than dress it up.',
    ],
  },
];

export const roleSlugs = roles.map((r) => r.slug);

export function getRole(slug: string): Role | undefined {
  return roles.find((r) => r.slug === slug);
}
