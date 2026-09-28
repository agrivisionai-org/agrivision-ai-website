// Public portion of the investor deck.
//
// The full 46-slide deck carries the funding ask, proposed pricing tiers for unsold
// segments, the bottom-up model with its assumptions, the risk register and a head-to-head
// competitor matrix. None of that belongs on a public URL that the companies named in it
// can read, so this page stops at differentiation, pricing that is already published, and
// an honest statement of where the company actually is.
//
// Every figure here is either sourced on the page or read from the product. Nothing about
// users, revenue, customers or partnerships is asserted, because none of it is verified.

export type Stat = { value: string; label: string };
export type Item = { title: string; body: string; tag?: string; tone?: 'live' | 'planned' | 'note' };

export const investors = {
  hero: {
    eyebrow: 'Investor and partner briefing',
    headline: 'Crop intelligence that knows when not to answer.',
    lede:
      'YieldAI Global gives farming households and agricultural extension workers grounded, multilingual crop advice, live government market prices and photo-based disease detection — and refuses to guess when the stakes are chemical.',
    stats: [
      { value: '17', label: 'platform modules' },
      { value: '54', label: 'crops covered' },
      { value: '13', label: 'languages, voice included' },
      { value: '3', label: 'countries live today' },
    ] as Stat[],
  },

  problem: {
    headline: 'Extension services reach 6.8% of India’s farmers.',
    body:
      'Public agricultural extension is the system that is supposed to tell a farming household what to plant, when to spray and what to sell it for. It is understaffed by design, and has been for two decades.',
    stats: [
      { value: '1 : 1,162', label: 'Public extension workers to operational holdings. Field reality is often worse than 1:5,000.' },
      { value: '52,575', label: 'Sanctioned extension posts unfilled — 91,288 of 143,863 filled.' },
      { value: '0.12–0.16%', label: 'Share of agricultural GDP invested in extension, flat for twenty years.' },
    ] as Stat[],
    chain: [
      'No adviser reachable',
      'Decisions made on guesswork',
      'Wrong input, timing or price',
      'A season’s income lost',
    ],
    source:
      'ICRISAT, “Agriculture Extension System in India: A Meta-analysis”; MANAGE Discussion Paper 20. Figures are India public-sector extension.',
  },

  today: {
    headline: 'How a household gets an answer today.',
    body:
      'Each of these serves someone well. The gap is not that they are bad products — it is that none of them is a paid, neutral adviser sold to the household itself.',
    items: [
      { title: 'The extension officer', body: 'Trusted, trained, and structurally unavailable to the large majority of farmers. A staffing problem, not a technology one.', tag: 'Human' },
      { title: 'The input dealer', body: 'Present, immediate and free. Also the person selling the fertiliser or pesticide being recommended.', tag: 'Human' },
      { title: 'Free advisory apps', body: 'Plantix, AgroStar and DeHaat offer crop advice at no charge, monetised through input sales, credit or market linkage.', tag: 'Apps' },
      { title: 'Enterprise farm platforms', body: 'Cropin and Farmonaut serve agribusinesses, banks and insurers with satellite and farm-management tooling, priced for organisations.', tag: 'B2B' },
      { title: 'Generic AI assistants', body: 'Fluent in every language and grounded in none. No mandi price, no scheme eligibility, no crop calendar, and confident when wrong.', tag: 'General AI' },
      { title: 'Nothing at all', body: 'For a large share of households the honest answer is that no adviser is consulted, because none is reachable.', tag: 'The base case' },
    ] as Item[],
  },

  platform: {
    headline: 'One platform. Four products. Two of them are real today.',
    items: [
      { title: 'YieldAI Global', body: 'The flagship crop intelligence platform: AI crop advisory, live government market prices, weather, scheme guidance, yield prediction and a voice assistant across 17 modules.', tag: 'Live', tone: 'live' },
      { title: 'CropVision', body: 'Photo-based disease, pest and nutrient detection. Runs inside YieldAI Global, so a diagnosis continues into explanation, scheme guidance and next steps.', tag: 'Live', tone: 'live' },
      { title: 'FieldSense', body: 'Soil and irrigation sensing: sensor fabric, real-time telemetry, microclimate intelligence and edge automation.', tag: 'Planned — roadmap, IoT', tone: 'planned' },
      { title: 'FieldOps', body: 'Farm operations for agribusinesses and cooperatives: workflow automation, yield and cost ledger, multi-farm operations and traceability.', tag: 'Early-stage concept', tone: 'planned' },
    ] as Item[],
  },

  how: {
    headline: 'Question in, grounded answer out — or an honest refusal.',
    steps: [
      { title: 'Ask', body: 'Typed or spoken, in any of 13 languages, or a photograph of the affected plant.' },
      { title: 'Locate', body: 'Crop, growth stage, district and season establish what the question actually means.' },
      { title: 'Retrieve', body: 'Retrieval over ICAR, FAO and state agriculture department material, plus live price and weather feeds.' },
      { title: 'Reason', body: 'Routed models compose an answer against the retrieved material, not from memory.' },
      { title: 'Validate', body: 'Confidence is checked. Chemical and dosage questions are refused and routed to a local officer.' },
      { title: 'Answer', body: 'Returned in the language asked, by voice or text, with the next step spelled out.' },
    ],
    note:
      'The difference between this and a general-purpose assistant is the fourth and fifth steps. A model answering from memory will produce a fluent dosage recommendation for a crop it has never seen in a district it cannot name. This one is built so that it cannot.',
  },

  whyAi: {
    headline: 'Why AI is required here, and where it is the wrong tool.',
    items: [
      { title: 'The combinatorics', body: '54 crops, multiple growth stages, district-level conditions and 13 languages. A rules engine covering that is tens of thousands of branches, hand-written and stale within a season.' },
      { title: 'The input is unstructured', body: 'A voice note and a blurred photograph of a leaf are the actual inputs. Neither is a form field.' },
      { title: 'The answer must be composed', body: 'A useful reply combines agronomy, today’s price, the weather window and a scheme rule into one paragraph in one language.' },
      { title: 'Where AI is the wrong tool', body: 'Prices come from government feeds, not predictions. Scheme eligibility comes from published rules, not inference. Dosage is refused outright. We use AI where judgement is needed and data where facts exist.', tone: 'note' },
    ] as Item[],
  },

  different: {
    headline: 'The incentive is the product.',
    items: [
      { title: 'Aligned incentive', body: 'Advice funded by input sales earns more when more input is sold. A subscription earns more when the household renews, which happens only if last season’s advice was right. We are paid for being correct.' },
      { title: 'Refusal as a feature', body: 'Declining dosage questions costs engagement and wins trust. It is also the only defensible position when a wrong answer can cost a season.' },
      { title: 'Vertical depth, not breadth', body: 'Advisory, diagnosis, prices, weather and schemes for one user in one place — not a diagnosis app, a price app and a scheme portal that never speak to each other.' },
      { title: 'Three markets from day one', body: 'India, the USA and Canada, each with its own government price feed. Most comparable products start single-market and stay there.' },
    ] as Item[],
  },

  who: {
    headline: 'Who it is for.',
    rows: [
      { who: 'Smallholder household', user: 'The farming household', buyer: 'The same household', problem: 'No adviser reachable in time', status: 'Live and self-serve' },
      { who: 'Extension worker or agronomist', user: 'The field officer', buyer: 'Their department, or themselves', problem: 'More households than can be visited', status: 'Proposed motion' },
      { who: 'Cooperative, FPO or agribusiness', user: 'Member farmers and field staff', buyer: 'The organisation', problem: 'Inconsistent advice across members', status: 'Proposed motion' },
    ],
  },

  pricing: {
    headline: 'Pricing, as published.',
    rows: [
      { tier: 'Free trial', price: '30 days, no card required', includes: 'Full platform access, all 17 modules', status: 'Live' },
      { tier: 'Pro — India', price: 'Rs 149 / month', includes: 'Full platform, 54 crops, 13 languages, CropVision', status: 'Live' },
      { tier: 'Pro — USA', price: '$9.99 / month', includes: 'Full platform, USDA market prices', status: 'Live' },
      { tier: 'Pro — Canada', price: 'C$9.99 / month', includes: 'Full platform, StatCan market prices', status: 'Live' },
    ],
    note:
      'At Rs 1,788 a year, the subscription costs less than a single mistaken input application on a small holding. That is the comparison the household actually makes.',
  },

  market: {
    headline: 'Market, with the sources named.',
    items: [
      { title: 'Digital agriculture', body: 'Valued at $26.2B in 2026 and projected to reach $53.8B by 2033, at roughly 10.8% CAGR.', tag: 'Coherent Market Insights, 2026' },
      { title: 'Agritech overall', body: '$21.4B in 2025, projected to $71.2B by 2035 at 12.8% CAGR.', tag: 'Market.us, 2026' },
      { title: 'A crowded field', body: 'Tracxn lists 5,464 agritech startups in India as of August 2026. Being one of many is the starting condition, not a risk to be discovered later.', tag: 'Tracxn, August 2026' },
      { title: 'And a tight funding climate', body: 'Indian agritech raised $134M across 41 rounds to July 2026, against $198M across 77 rounds in 2025 and $392M across 105 in 2024. Capital has rotated toward capital efficiency and real unit economics — which is the shape this company already is.', tag: 'Entrepreneur India and Tracxn, 2026' },
    ] as Item[],
  },

  progress: {
    headline: 'Where we actually are.',
    built: [
      { title: 'Product shipped and live', body: 'YieldAI Global is live in India, the USA and Canada at a published price with a working 30-day trial. 17 modules, 54 crops, 13 languages, CropVision included.' },
      { title: 'Three government price feeds integrated', body: 'Mandi data in India, USDA in the USA and StatCan in Canada — three separate government sources, not one wrapped API.' },
      { title: 'Public company surface', body: 'Website, product documentation, press kit, structured data and a weekly build-in-public newsletter.' },
    ] as Item[],
    notClaimed: [
      'No user or revenue figures are presented, because none have been independently verified.',
      'No customers, pilots, letters of intent or institutional partnerships are asserted.',
      'No yield uplift, income increase or cost saving percentage is claimed. None has been measured on a customer’s farm.',
      'No certifications are held. There is no SOC 2, ISO 27001 or HIPAA compliance to claim.',
    ],
  },
};
