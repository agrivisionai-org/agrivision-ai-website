// Product content for AGRIVISION AI dedicated product pages.
// Generated from a reviewed, no-overclaim editorial pass — keep status framing honest.

export type ProductFaq = { q: string; a: string };
export type ProductItem = { title: string; description: string };
export type Product = {
  slug: string;
  name: string;
  category: string;
  status: string;
  liveUrl?: string;
  /** Only set where a product is separately purchasable. Drives the Offer node in JSON-LD. */
  /** One entry per market. YieldAI Global is priced regionally, so a single USD figure
   *  would be wrong for two of the three countries it is live in. */
  price?: { amount: string; currency: string; country: string }[];
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  overview: string[];
  capabilities: ProductItem[];
  audience: ProductItem[];
  roadmap: string[];
  faq: ProductFaq[];
  ogAlt: string;
};

// Visual identity per product (accent + lucide icon key resolved in the page).
export const productVisual: Record<string, { accent: string; iconKey: string }> = {
  'yieldai-global': { accent: '#5DBB63', iconKey: 'sparkles' },
  cropvision: { accent: '#0A84FF', iconKey: 'eye' },
  fieldsense: { accent: '#0F6B3E', iconKey: 'wifi' },
  fieldops: { accent: '#0A84FF', iconKey: 'cog' },
};

export const products: Product[] = [
  {
    "slug": "yieldai-global",
    "name": "YieldAI Global",
    "category": "AI crop intelligence platform",
    "status": "Live",
    "liveUrl": "https://yieldaiglobal.com",
    "price": [
      { "amount": "149", "currency": "INR", "country": "IN" },
      { "amount": "9.99", "currency": "USD", "country": "US" },
      { "amount": "9.99", "currency": "CAD", "country": "CA" }
    ],
    "metaTitle": "YieldAI Global — AI Farming Assistant | Free Trial",
    "metaDescription": "Ask about crops, live market prices, weather and government schemes in your own language. Free to try, live in India, the USA & Canada.",
    "heroHeadline": "YieldAI Global: AI crop intelligence, live for farmers",
    "heroSub": "Our flagship product is live in India, the USA, and Canada — AI crop advice, live government market prices, weather, and government-scheme guidance, in the farmer's own language. Start a free trial.",
    "overview": [
      "YieldAI Global is the flagship product of AGRIVISION AI, and it's live. It's an AI-powered agriculture platform that brings practical crop intelligence to the people who grow the world's food and the people who advise them — available now at yieldaiglobal.com.",
      "The idea is straightforward: take the kind of agronomic insight that's usually locked behind cost, distance, or language, and make it available through one accessible platform. Today it delivers AI crop advice, live government market prices, weather and forecasting, government-scheme guidance, yield prediction, a voice assistant, and photo-based disease detection through CropVision — all in the farmer's own language. Our roadmap extends toward IoT sensors and smart irrigation.",
      "We're an early-stage, founder-led company based in Detroit, Michigan. YieldAI Global is live first in the USA, India, and Canada, and we're working to reach farmers, agronomists, and extension workers across 40+ countries. You can start a free trial today at yieldaiglobal.com.",
      "YieldAI Global is free for 30 days with full platform access. After that the Pro plan is Rs 149 per month in India, $9.99 in the USA and C$9.99 in Canada. It covers 54 crops across 17 platform modules, in 13 languages. Market prices come from government sources — mandi data in India, USDA in the USA, and StatCan in Canada — and crop guidance is grounded in credible agronomic sources including ICAR, FAO, and state agriculture departments."
    ],
    "capabilities": [
      {
        "title": "AI crop advice",
        "description": "Delivers context-aware guidance on planting, nutrition, and crop care, tailored to a farmer's location, crop, and growing conditions — in their own language."
      },
      {
        "title": "Photo disease detection",
        "description": "CropVision, the platform's vision layer, reads a photograph of an affected plant and returns the likely disease with an honest confidence level rather than a single unexplained answer."
      },
      {
        "title": "Live market prices",
        "description": "Surfaces live government market prices so farmers and cooperatives can decide what to grow and when to sell, benchmarked against official sources."
      },
      {
        "title": "Weather & scheme guidance",
        "description": "Brings weather and government-scheme guidance to farmers, helping them plan around conditions and access the support programs they're eligible for."
      },
      {
        "title": "Yield prediction & weather forecasting",
        "description": "Forecasting that anticipates yields and weather risk, so decisions can be made with foresight rather than after the fact."
      },
      {
        "title": "Voice assistant, in the farmer's language",
        "description": "Ask out loud and get an answer back in the language you actually speak — 13 today across India, the USA, and Canada: Hindi, Bengali, Telugu, Tamil, Kannada, Marathi, Punjabi, Gujarati, Malayalam, Odia, English, Spanish and French. Designed from the start to reach 40+ countries."
      }
    ],
    "audience": [
      {
        "title": "Farmers",
        "description": "Smallholders and growers who want clear, practical crop guidance — designed to be accessible regardless of location or language."
      },
      {
        "title": "Agronomists & extension workers",
        "description": "Advisors who support many farmers at once, who we're building YieldAI Global to equip with AI-assisted crop intelligence at scale."
      },
      {
        "title": "Cooperatives & agribusinesses",
        "description": "Agri-cooperatives and businesses planning ahead, who will be able to use shared insight on crops, pests, and markets across their members."
      }
    ],
    "roadmap": [
      "Live now: AI crop advice, live government market prices, weather and forecasting, government-scheme guidance, and photo-based disease detection through CropVision — in the farmer's own language, across India, the USA, and Canada.",
      "Also live: yield prediction for forward-looking decisions, and a voice assistant for hands-free, low-literacy access.",
      "Planned: IoT sensor integration and smart irrigation to connect the platform to conditions on the ground.",
      "Longer-term vision: scaling crop intelligence across 40+ countries for farmers and extension workers worldwide."
    ],
    "faq": [
      {
        "q": "Is YieldAI Global available today?",
        "a": "Yes. YieldAI Global is live and available now in India, the USA, and Canada at yieldaiglobal.com, where you can start a free trial. It delivers AI crop advice, live government market prices, weather and forecasting, government-scheme guidance, yield prediction, photo-based disease detection through CropVision, and a voice assistant — in the farmer's own language. AGRIVISION AI remains an early-stage, founder-led company and continues to add capabilities on its roadmap."
      },
      {
        "q": "What is in YieldAI Global today?",
        "a": "It is live with crop advisory, pest intelligence, market insights, weather and forecasting, government-scheme guidance, yield prediction, a voice assistant, photo-based disease detection through CropVision, and a dashboard that brings them together. IoT sensors and smart irrigation are planned for later stages on our roadmap."
      },
      {
        "q": "Who is YieldAI Global being built for?",
        "a": "We're designing it for farmers, agronomists, extension workers, agri-cooperatives, and agribusinesses. The long-term vision is to serve users across 40+ countries, with a strong emphasis on extension workers who support many farmers at once."
      },
      {
        "q": "How much does YieldAI Global cost?",
        "a": "The 30-day trial is free and gives you full platform access, with no payment required up front. After that the Pro plan is priced for your market: Rs 149 per month in India, $9.99 in the USA, and C$9.99 in Canada. You can start at yieldaiglobal.com."
      },
      {
        "q": "What languages does YieldAI Global support?",
        "a": "13 languages today: Hindi, Bengali, Telugu, Tamil, Kannada, Marathi, Punjabi, Gujarati, Malayalam, Odia, English, Spanish and French. Answers come back in the language you asked in, including by voice, and the platform is designed to reach 40+ countries."
      },
      {
        "q": "Who is building YieldAI Global?",
        "a": "It's built by AGRIVISION AI (legal name Agrivisionai Inc), an AI-first agriculture company headquartered in Detroit, Michigan, founded in 2026 by sole founder and CEO Vijesh Reddy Golamari. We are not affiliated with any other similarly named project."
      }
    ],
    "ogAlt": "YieldAI Global by AGRIVISION AI — the flagship AI crop intelligence platform, live in India, the USA and Canada, shown with crop advisory, pest intelligence, and market insight modules."
  },
  {
    "slug": "cropvision",
    "name": "CropVision",
    "category": "YieldAI module · computer vision",
    "status": "Live",
    "liveUrl": "https://yieldaiglobal.com",
    "metaTitle": "CropVision — AI Crop Disease Detection | AGRIVISION AI",
    "metaDescription": "Photograph a plant and get a likely disease, a clear confidence level, and what to do next. CropVision is the vision layer inside YieldAI Global.",
    "heroHeadline": "CropVision: point your phone at the plant",
    "heroSub": "The computer-vision layer inside YieldAI Global. Photograph a leaf and get a likely diagnosis, an honest confidence level, and a clear next step \u2014 in your own language.",
    "overview": [
      "CropVision is the vision layer of YieldAI Global, and it is live today. Point a phone at an affected plant and CropVision reads the image, returns the disease it believes it is seeing, and tells you how confident it is \u2014 rather than handing back a single unexplained answer. It ships as the Disease Detection module inside YieldAI Global, so it sits alongside crop advice, pest prediction, weather and market prices in one place.",
      "The design rule is confidence before cleverness. A plant-health call made from a single photograph carries real uncertainty, so CropVision surfaces that uncertainty instead of hiding it: unclear reads are flagged as unclear, and anything approaching a chemical or dosage decision routes the farmer to their local agriculture extension officer or Krishi Vigyan Kendra. A confident wrong answer can cost an entire season, and we would rather be useful and honest than impressive and wrong.",
      "Because CropVision runs inside YieldAI Global, a diagnosis does not end at the diagnosis. The same assistant can explain the symptoms in the farmer\u2019s own language, point to the relevant government scheme, and show what the crop is fetching at market today. It is available now in India, the USA and Canada on the YieldAI Global free trial — 30 days free, then the Pro plan at Rs 149 per month in India, $9.99 in the USA or C$9.99 in Canada, with no separate charge for CropVision."
    ],
    "capabilities": [
      {
        "title": "Photo-based disease detection",
        "description": "Photograph a leaf or canopy from an ordinary phone and CropVision returns the most likely disease, with the visible symptoms that led to that read."
      },
      {
        "title": "Confidence-first results",
        "description": "Every read comes with a confidence level. Low-confidence and ambiguous cases are flagged as such rather than dressed up as certainty."
      },
      {
        "title": "Symptoms explained, not just named",
        "description": "Results describe what the model is reacting to \u2014 mottling, spotting, distortion, discolouration \u2014 so a farmer can check the reasoning against the plant in front of them."
      },
      {
        "title": "Next steps in your language",
        "description": "Guidance continues in any of YieldAI Global\u2019s 13 languages, so the diagnosis and the advice arrive in the language the farmer actually thinks in."
      },
      {
        "title": "Safety rule built in",
        "description": "For chemical treatments and dosages, CropVision points to a local extension officer or Krishi Vigyan Kendra instead of guessing. No exceptions."
      },
      {
        "title": "Part of one platform",
        "description": "A diagnosis flows straight into the rest of YieldAI Global \u2014 pest prediction, weather, market prices and the farm record \u2014 rather than living in a separate app."
      }
    ],
    "audience": [
      {
        "title": "Farmers",
        "description": "Growers who want a fast, in-field read on what is wrong with a plant, from the phone already in their pocket."
      },
      {
        "title": "Agronomists & extension workers",
        "description": "Advisors scouting many fields who want a consistent, confidence-aware second opinion to support \u2014 not replace \u2014 their own judgment."
      },
      {
        "title": "Cooperatives & agribusinesses",
        "description": "Co-ops and agribusinesses that want a standardised visual health signal across many farms and crops as part of a wider intelligence stack."
      }
    ],
    "roadmap": [
      "Widen crop and disease coverage beyond the currently supported set",
      "Improve accuracy on early-stage and overlapping symptoms, where a single photo is hardest to read",
      "Add crop-stress detection for nutrient, water and heat stress alongside disease",
      "Explore on-device inference so the module stays useful in low-connectivity fields",
      "Publish real accuracy figures once we have field-validated results worth standing behind"
    ],
    "faq": [
      {
        "q": "Is CropVision available today?",
        "a": "Yes. CropVision is live as the Disease Detection module inside YieldAI Global, available in India, the USA and Canada. You can use it on the 30-day free trial at yieldaiglobal.com."
      },
      {
        "q": "What does CropVision actually do?",
        "a": "You photograph an affected plant and it returns the most likely disease, the visible symptoms behind that read, and a confidence level \u2014 then continues with guidance in your own language inside YieldAI Global."
      },
      {
        "q": "Do you have accuracy numbers to share?",
        "a": "Not yet, and we will not invent them. CropVision is live but early, and we would rather publish field-validated accuracy once we have results worth standing behind than quote a number we cannot defend."
      },
      {
        "q": "Will it tell me which chemical to spray?",
        "a": "No, and that is deliberate. For chemical treatments and dosages CropVision directs you to your local agriculture extension officer or Krishi Vigyan Kendra. A wrong dosage recommendation can cost a season, so we do not guess."
      },
      {
        "q": "Do I need a separate app for CropVision?",
        "a": "No. CropVision is part of YieldAI Global, so disease detection sits alongside crop advice, pest prediction, weather, government schemes and market prices in the same place."
      }
    ],
    "ogAlt": "CropVision by AGRIVISION AI \u2014 live AI crop disease detection inside YieldAI Global, with confidence-first results."
  },
  {
    "slug": "fieldsense",
    "name": "FieldSense",
    "category": "YieldAI module · IoT sensing",
    "status": "Planned (roadmap, IoT)",
    "metaTitle": "FieldSense — Farm IoT Sensing | AGRIVISION AI",
    "metaDescription": "FieldSense is a planned IoT + AI sensing layer from AGRIVISION AI — a sensor fabric for soil, irrigation, and microclimate. In development on our roadmap.",
    "heroHeadline": "FieldSense — a sensing layer we're designing for every plot",
    "heroSub": "A planned IoT and AI monitoring fabric for soil, irrigation, and microclimate — being designed to turn the conditions in a field into signals a farmer can act on.",
    "overview": [
      "FieldSense is a planned product on the AGRIVISION AI roadmap — an IoT and AI sensing layer that we intend to lay across the farm like a nervous system. The vision is a fabric of low-cost sensors reading soil moisture, temperature, salinity, irrigation flow, and microclimate, streaming back to a single view that helps farmers and agronomists understand what's actually happening in the ground.",
      "Most farm decisions today are made on intuition and the occasional spot check. We're designing FieldSense to close that gap — to give every plot a continuous, honest signal, and to let AI turn that telemetry into early warnings and concrete next steps. The intent is intelligence that reaches the parts of the field a person can't walk every day.",
      "To be clear about where this stands: FieldSense is not yet built. It is planned and in active design as part of our product family, alongside our flagship YieldAI Global. What follows describes the capabilities we intend to build, not features that exist today."
    ],
    "capabilities": [
      {
        "title": "Sensor fabric",
        "description": "Designed to be a mesh of affordable, rugged sensors spanning soil moisture, temperature, salinity, and microclimate — built to blanket a field without blanketing a budget."
      },
      {
        "title": "Real-time telemetry",
        "description": "Will stream live readings from across every plot into one continuous view, so the state of the field becomes something to watch rather than something to guess at."
      },
      {
        "title": "Microclimate intelligence",
        "description": "Planned to model the small, local differences — frost pockets, dry corners, humid rows — that field-wide forecasts miss, and to flag risk early."
      },
      {
        "title": "Edge automation",
        "description": "Designed to run inference at the edge and trigger actions like irrigation adjustments locally, so the system keeps working even where connectivity is thin."
      },
      {
        "title": "Irrigation insight",
        "description": "Will pair soil-moisture and flow data with AI to suggest where and when to water — aiming to cut waste while protecting the crop."
      },
      {
        "title": "One field view",
        "description": "Planned to feed the wider AGRIVISION AI fabric, so FieldSense readings can inform crop advisory and yield models in one connected picture of the farm."
      }
    ],
    "audience": [
      {
        "title": "Farmers",
        "description": "Growers who want continuous eyes on soil and water across every plot — designed to surface problems early instead of after the damage is done."
      },
      {
        "title": "Agronomists & extension workers",
        "description": "Advisors who need ground-truth telemetry to back their guidance, planned to make field conditions measurable rather than anecdotal."
      },
      {
        "title": "Cooperatives & agribusinesses",
        "description": "Organizations managing many fields at once, for whom a shared sensing layer is intended to standardize how conditions are monitored across sites."
      }
    ],
    "roadmap": [
      "Phase 1 — Define the sensor fabric: target hardware, the soil, water, and microclimate signals to capture, and a low-cost, rugged reference design.",
      "Phase 2 — Build the telemetry pipeline: reliable ingestion of real-time readings into a single field view, designed to hold up in low-connectivity environments.",
      "Phase 3 — Develop microclimate intelligence: AI models that interpret local conditions and turn raw readings into early warnings and recommendations.",
      "Phase 4 — Add edge automation: on-device inference and local triggers, such as irrigation adjustments, that work even when the network doesn't.",
      "Phase 5 — Integrate with the AGRIVISION AI fabric so FieldSense data informs crop advisory and yield prediction, then open early-access field pilots."
    ],
    "faq": [
      {
        "q": "Is FieldSense available today?",
        "a": "No. FieldSense is a planned product on our roadmap and is not yet built. There is no hardware to buy, no app to use, and no live deployments. We're sharing the vision and intended capabilities early; we'll be honest at every step about when any of it is ready to try."
      },
      {
        "q": "What exactly is FieldSense meant to do?",
        "a": "It's designed to be an IoT and AI sensing layer for the farm — a fabric of sensors reading soil, irrigation, and microclimate, with real-time telemetry and edge automation. The goal is to turn field conditions into clear signals and early warnings. These are intended capabilities, not features that exist yet."
      },
      {
        "q": "Will FieldSense require internet on the farm?",
        "a": "We're designing it to work in low-connectivity settings. The plan is to run inference at the edge so core monitoring and automation keep functioning even when the network is intermittent. Final connectivity requirements will be determined as we build and pilot the hardware."
      },
      {
        "q": "How does FieldSense relate to AGRIVISION AI's other products?",
        "a": "FieldSense is one product in a family being built on a shared AI fabric. It's planned to feed telemetry into the broader platform — including our flagship YieldAI Global — so sensing data can inform crop advisory and yield models. The integrated experience is part of the roadmap, not something available now. To follow progress or join future field pilots, reach out through agrivisionai.org."
      }
    ],
    "ogAlt": "FieldSense by AGRIVISION AI — a planned IoT and AI sensing fabric for soil, irrigation, and microclimate, shown as a connected field monitoring concept."
  },
  {
    "slug": "fieldops",
    "name": "FieldOps",
    "category": "YieldAI module · farm operations",
    "status": "Early-stage concept",
    "metaTitle": "FieldOps — Farm Operations Platform | AGRIVISION AI",
    "metaDescription": "An early-stage concept from AGRIVISION AI — a planned farm operations platform for agribusinesses and cooperatives, with workflows and an AI assistant.",
    "heroHeadline": "FieldOps: one operations layer for the whole farm enterprise",
    "heroSub": "An early-stage concept from AGRIVISION AI for a unified operations and management platform — designed for agribusinesses and cooperatives running farming at scale.",
    "overview": [
      "FieldOps is the earliest-stage idea in the AGRIVISION AI product family — a concept we are actively designing, not a product you can use today. We are sharing it openly because we believe the people who will eventually rely on it should help shape it from the start.",
      "The vision is straightforward: agribusinesses and cooperatives run on a patchwork of spreadsheets, paper records, and disconnected apps. FieldOps is being designed as a single operations layer that ties together the day-to-day work of running multiple farms — the schedules, the inputs, the costs, the yields — and puts an AI assistant on top of all of it. Where our flagship products focus on field-level intelligence, FieldOps is intended to focus on the operation as a business.",
      "Everything described on this page is intent and early design. Nothing here is live, in production, or available for purchase. As the concept matures we will move pieces onto a real roadmap, and we will keep this page honest about exactly where things stand."
    ],
    "capabilities": [
      {
        "title": "Workflow automation",
        "description": "Designed to turn recurring farm operations — planting, irrigation, input applications, harvest, and labor scheduling — into structured, trackable workflows instead of scattered notes and reminders."
      },
      {
        "title": "Yield & cost ledger",
        "description": "Planned as a single ledger that records yields against costs per plot, crop, and season, so an operation can see its real margins rather than estimate them after the fact."
      },
      {
        "title": "Multi-farm operations",
        "description": "Will be built for organizations running many sites at once, giving cooperatives and agribusinesses a shared view across farms, teams, and regions from one place."
      },
      {
        "title": "AI operations assistant",
        "description": "Designed to let managers ask questions in plain language — about schedules, costs, and field status — and get grounded answers and suggested next actions across the whole operation."
      },
      {
        "title": "Records & traceability",
        "description": "Intended to keep a clean, structured history of what happened on each plot, laying the groundwork for reporting, audits, and supply-chain traceability over time."
      },
      {
        "title": "Part of one fabric",
        "description": "Planned to interoperate with the rest of the AGRIVISION AI family, so field intelligence and operations can eventually share one data layer rather than living in separate tools."
      }
    ],
    "audience": [
      {
        "title": "Agribusinesses",
        "description": "Enterprises managing farming as an operation at scale, who need costs, yields, and workflows in one place instead of across disconnected systems."
      },
      {
        "title": "Agri-cooperatives",
        "description": "Cooperatives coordinating many member farms, who need a shared operational view across sites, teams, and seasons."
      },
      {
        "title": "Farm operations managers",
        "description": "The people responsible for schedules, inputs, labor, and margins day to day — the ones FieldOps is ultimately being designed to serve."
      }
    ],
    "roadmap": [
      "Concept and early design — defining the core operations model with input from farmers, cooperatives, and agribusinesses (current stage).",
      "Validation — pressure-test the workflow, ledger, and multi-farm ideas with real operators before committing to a build.",
      "Prototype — stand up an early working slice of workflow automation and the yield & cost ledger for hands-on feedback.",
      "AI assistant integration — layer the operations assistant onto validated data once the foundations are in place.",
      "Roadmap commitment — graduate the proven pieces from concept into a dated build plan, shared transparently here."
    ],
    "faq": [
      {
        "q": "Is FieldOps available today?",
        "a": "No. FieldOps is an early-stage concept — the earliest stage of any product in the AGRIVISION AI family. It is in concept and early design only. There is no product to sign up for, no live version, no users, and no pricing. We are sharing the vision openly while we design it."
      },
      {
        "q": "How is FieldOps different from your other products?",
        "a": "Our flagship products focus on field-level intelligence — crop advisory, pest intelligence, and market insights. FieldOps is being designed for the business side of farming: workflows, costs, yields, and multi-farm operations, with an AI assistant on top. It is also at an earlier stage than those products."
      },
      {
        "q": "Who is FieldOps being designed for?",
        "a": "It is intended for agribusinesses and agri-cooperatives that run farming at scale across many sites, and for the operations managers within them. If that describes your organization, we would value your input as we shape the concept."
      },
      {
        "q": "Can I influence what FieldOps becomes?",
        "a": "Yes — that is exactly why we publish concepts this early. AGRIVISION AI is a Detroit-based startup founded in 2026 by sole founder and CEO Vijesh Reddy Golamari, and we are building our products with the people who will use them. You can reach the team to share how your operation works and what would actually help."
      }
    ],
    "ogAlt": "FieldOps by AGRIVISION AI — an early-stage concept for a farm operations and management platform for agribusinesses and cooperatives."
  }
];

export const productSlugs = products.map((p) => p.slug);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
