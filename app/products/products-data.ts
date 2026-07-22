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
  agrisense: { accent: '#0F6B3E', iconKey: 'wifi' },
  farmos: { accent: '#0A84FF', iconKey: 'cog' },
};

export const products: Product[] = [
  {
    "slug": "yieldai-global",
    "name": "YieldAI Global",
    "category": "AI crop intelligence platform",
    "status": "Live",
    "liveUrl": "https://yieldaiglobal.com",
    "metaTitle": "YieldAI Global — AI Farming Assistant | Free Trial",
    "metaDescription": "Ask about crops, live market prices, weather & government schemes — in your own language. YieldAI Global is a free-to-try AI farming assistant, live in India, the USA & Canada.",
    "heroHeadline": "YieldAI Global: AI crop intelligence, live for farmers",
    "heroSub": "Our flagship product is live in India, the USA, and Canada — AI crop advice, live government market prices, weather, and government-scheme guidance, in the farmer's own language. Start a free trial.",
    "overview": [
      "YieldAI Global is the flagship product of AGRIVISION AI, and it's live. It's an AI-powered agriculture platform that brings practical crop intelligence to the people who grow the world's food and the people who advise them — available now at yieldaiglobal.com.",
      "The idea is straightforward: take the kind of agronomic insight that's usually locked behind cost, distance, or language, and make it available through one accessible platform. Today it delivers AI crop advice, live government market prices, weather, and government-scheme guidance — all in the farmer's own language. Our roadmap extends toward yield prediction, disease detection from field imagery, IoT sensors, and smart irrigation.",
      "We're an early-stage, founder-led company based in Detroit, Michigan. YieldAI Global is live first in the USA, India, and Canada, and we're working to reach farmers, agronomists, and extension workers across 40+ countries. You can start a free trial today at yieldaiglobal.com."
    ],
    "capabilities": [
      {
        "title": "AI crop advice",
        "description": "Delivers context-aware guidance on planting, nutrition, and crop care, tailored to a farmer's location, crop, and growing conditions — in their own language."
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
        "title": "In the farmer's language",
        "description": "Works multilingually so guidance reaches farmers in the language they actually speak, across India, the USA, and Canada today."
      },
      {
        "title": "Yield prediction & weather intelligence",
        "description": "On our roadmap: forecasting tools designed to anticipate yields and weather risk so decisions can be made with more foresight."
      },
      {
        "title": "Built for many languages",
        "description": "Designed from the start to work multilingually across 40+ countries, so guidance can reach farmers in the language they actually speak."
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
      "Live now: AI crop advice, live government market prices, weather, and government-scheme guidance — in the farmer's own language, across India, the USA, and Canada.",
      "Next on the roadmap: yield prediction and deeper weather intelligence to support forward-looking decisions.",
      "Planned: AI disease detection from field imagery and a voice assistant for hands-free, low-literacy access.",
      "Planned: IoT sensor integration and smart irrigation to connect the platform to conditions on the ground.",
      "Longer-term vision: scaling crop intelligence across 40+ countries for farmers and extension workers worldwide."
    ],
    "faq": [
      {
        "q": "Is YieldAI Global available today?",
        "a": "Yes. YieldAI Global is live and available now in India, the USA, and Canada at yieldaiglobal.com, where you can start a free trial. It delivers AI crop advice, live government market prices, weather, and government-scheme guidance in the farmer's own language. AGRIVISION AI remains an early-stage, founder-led company and continues to add capabilities on its roadmap."
      },
      {
        "q": "What will be in the first version?",
        "a": "The MVP we're building focuses on four capabilities: crop advisory, pest intelligence, market insights, and a dashboard that brings them together. Yield prediction, weather intelligence, disease detection, a voice assistant, IoT sensors, and smart irrigation are planned for later stages on our roadmap."
      },
      {
        "q": "Who is YieldAI Global being built for?",
        "a": "We're designing it for farmers, agronomists, extension workers, agri-cooperatives, and agribusinesses. The long-term vision is to serve users across 40+ countries, with a strong emphasis on extension workers who support many farmers at once."
      },
      {
        "q": "Who is building YieldAI Global?",
        "a": "It's built by AGRIVISION AI (legal name Agrivisionai Inc), an AI-first agriculture company headquartered in Detroit, Michigan, founded in 2026 by sole founder and CEO Vijesh Reddy Golamari. We are not affiliated with any other similarly named project."
      }
    ],
    "ogAlt": "YieldAI Global by AGRIVISION AI — the flagship AI crop intelligence platform in development, shown with crop advisory, pest intelligence, and market insight modules."
  },
  {
    "slug": "cropvision",
    "name": "CropVision",
    "category": "YieldAI module · computer vision",
    "status": "Planned (roadmap)",
    "metaTitle": "CropVision — AI Crop Disease Detection (Planned) | AGRIVISION AI",
    "metaDescription": "A planned computer-vision module from AGRIVISION AI, designed to analyze field imagery, classify plant disease, and flag crop stress. On our roadmap.",
    "heroHeadline": "CropVision: computer vision for plant health, in the making",
    "heroSub": "A planned vision module designed to read field imagery, classify plant disease, and flag crop stress early — built to run even at the edge of connectivity.",
    "overview": [
      "CropVision is a computer-vision module we plan to build for crop health and disease monitoring. The vision is simple: point a phone, drone, or field camera at a plant and get an honest read on what's happening — what disease may be present, where stress is showing, and how confident the model is. It is intended to become the visual layer beneath our wider AGRIVISION AI product family.",
      "Today, CropVision is on our roadmap. It has not been built yet — there is no app to download, no model in production, and no field data behind it. What follows describes the capabilities we intend to design, not features that exist. We're sharing the direction early because we'd rather be transparent about where we're headed than quiet about it.",
      "When we do build it, CropVision is designed to fold into the same AI fabric as our flagship work, so that imagery, advisory, and field context can eventually inform one another. Our north star is to put credible plant-health vision into the hands of farmers, agronomists, and extension workers across the 40+ countries we aim to serve."
    ],
    "capabilities": [
      {
        "title": "Field-imagery analysis",
        "description": "Designed to analyze photos and field imagery — from a phone, drone, or fixed camera — and turn raw visuals into structured, plot-level signals about plant condition."
      },
      {
        "title": "Plant disease classification",
        "description": "Planned to classify common crop diseases from leaf and canopy imagery, returning a likely diagnosis alongside a clear confidence level rather than a single unexplained answer."
      },
      {
        "title": "Crop-stress detection",
        "description": "Will be built to surface early signs of stress — from nutrient deficiency to water and heat stress — so issues can be addressed before they take hold across a field."
      },
      {
        "title": "On-device (edge) inference",
        "description": "Designed to run inference on-device at the edge, so the module can stay useful in low-connectivity fields where uploading imagery to the cloud isn't practical."
      },
      {
        "title": "Confidence-first results",
        "description": "Planned to communicate uncertainty honestly — flagging low-confidence reads and unclear cases instead of overstating what the model can see."
      },
      {
        "title": "Part of one fabric",
        "description": "Intended to integrate with the broader AGRIVISION AI platform, so visual findings can eventually feed crop advisory and field decisions in one place."
      }
    ],
    "audience": [
      {
        "title": "Farmers",
        "description": "Growers who want a fast, in-field way to check what's wrong with a plant — designed to work from a phone, even where connectivity is thin."
      },
      {
        "title": "Agronomists & extension workers",
        "description": "Advisors who scout many fields and need a consistent, confidence-aware second opinion on disease and stress to support their own judgment."
      },
      {
        "title": "Cooperatives & agribusinesses",
        "description": "Co-ops and agribusinesses that want a standardized visual health signal across many farms and crops as part of a wider intelligence stack."
      }
    ],
    "roadmap": [
      "Define the scope and target crops, diseases, and stress types CropVision is intended to cover",
      "Assemble and validate the field-imagery and labeled datasets needed to train credible models",
      "Prototype disease classification and crop-stress detection, with confidence reporting from day one",
      "Develop on-device (edge) inference so the module can run reliably in low-connectivity fields",
      "Pilot CropVision with farmers, agronomists, and partners, then integrate it into the wider AGRIVISION AI platform"
    ],
    "faq": [
      {
        "q": "Is CropVision available today?",
        "a": "No. CropVision is on our roadmap and has not been built yet — there is no app, no live model, and no users. Everything on this page describes capabilities we intend to design, not features that exist today."
      },
      {
        "q": "What will CropVision actually do?",
        "a": "It is planned as a computer-vision module for crop health: designed to analyze field imagery, classify plant disease, detect crop stress, and run on-device at the edge. These are intended capabilities, not current ones."
      },
      {
        "q": "Do you have accuracy numbers or results to share?",
        "a": "Not yet, and we won't invent them. CropVision hasn't been trained or tested in the field, so there are no metrics, benchmarks, or customer results — we'll share real performance only once there's a real product behind it."
      },
      {
        "q": "How can I follow CropVision or get involved early?",
        "a": "Reach out through AGRIVISION AI. We're an early-stage, founder-led company based in Detroit, and we're glad to talk with farmers, agronomists, cooperatives, and partners who want to help shape what CropVision becomes."
      }
    ],
    "ogAlt": "CropVision by AGRIVISION AI — a planned computer-vision module for crop health and plant disease monitoring, currently on the roadmap."
  },
  {
    "slug": "agrisense",
    "name": "AgriSense",
    "category": "YieldAI module · IoT sensing",
    "status": "Planned (roadmap, IoT)",
    "metaTitle": "AgriSense — Farm IoT Sensing | AGRIVISION AI",
    "metaDescription": "AgriSense is a planned IoT + AI sensing layer from AGRIVISION AI — a sensor fabric for soil, irrigation, and microclimate. In development on our roadmap.",
    "heroHeadline": "AgriSense — a sensing layer we're designing for the field",
    "heroSub": "A planned IoT and AI monitoring fabric for soil, irrigation, and microclimate — being designed to turn the conditions in a field into signals a farmer can act on.",
    "overview": [
      "AgriSense is a planned product on the AGRIVISION AI roadmap — an IoT and AI sensing layer that we intend to lay across the farm like a nervous system. The vision is a fabric of low-cost sensors reading soil moisture, temperature, salinity, irrigation flow, and microclimate, streaming back to a single view that helps farmers and agronomists understand what's actually happening in the ground.",
      "Most farm decisions today are made on intuition and the occasional spot check. We're designing AgriSense to close that gap — to give every plot a continuous, honest signal, and to let AI turn that telemetry into early warnings and concrete next steps. The intent is intelligence that reaches the parts of the field a person can't walk every day.",
      "To be clear about where this stands: AgriSense is not yet built. It is planned and in active design as part of our product family, alongside our flagship YieldAI Global. What follows describes the capabilities we intend to build, not features that exist today."
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
        "description": "Planned to feed the wider AGRIVISION AI fabric, so AgriSense readings can inform crop advisory and yield models in one connected picture of the farm."
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
      "Phase 5 — Integrate with the AGRIVISION AI fabric so AgriSense data informs crop advisory and yield prediction, then open early-access field pilots."
    ],
    "faq": [
      {
        "q": "Is AgriSense available today?",
        "a": "No. AgriSense is a planned product on our roadmap and is not yet built. There is no hardware to buy, no app to use, and no live deployments. We're sharing the vision and intended capabilities early; we'll be honest at every step about when any of it is ready to try."
      },
      {
        "q": "What exactly is AgriSense meant to do?",
        "a": "It's designed to be an IoT and AI sensing layer for the farm — a fabric of sensors reading soil, irrigation, and microclimate, with real-time telemetry and edge automation. The goal is to turn field conditions into clear signals and early warnings. These are intended capabilities, not features that exist yet."
      },
      {
        "q": "Will AgriSense require internet on the farm?",
        "a": "We're designing it to work in low-connectivity settings. The plan is to run inference at the edge so core monitoring and automation keep functioning even when the network is intermittent. Final connectivity requirements will be determined as we build and pilot the hardware."
      },
      {
        "q": "How does AgriSense relate to AGRIVISION AI's other products?",
        "a": "AgriSense is one product in a family being built on a shared AI fabric. It's planned to feed telemetry into the broader platform — including our flagship YieldAI Global — so sensing data can inform crop advisory and yield models. The integrated experience is part of the roadmap, not something available now. To follow progress or join future field pilots, reach out through agrivisionai.org."
      }
    ],
    "ogAlt": "AgriSense by AGRIVISION AI — a planned IoT and AI sensing fabric for soil, irrigation, and microclimate, shown as a connected field monitoring concept."
  },
  {
    "slug": "farmos",
    "name": "FarmOS",
    "category": "YieldAI module · farm operations",
    "status": "Early-stage concept",
    "metaTitle": "FarmOS — Farm Operations Platform | AGRIVISION AI",
    "metaDescription": "An early-stage concept from AGRIVISION AI — a planned farm operations platform for agribusinesses and cooperatives, with workflows and an AI assistant.",
    "heroHeadline": "FarmOS: one operating system for the whole farm enterprise",
    "heroSub": "An early-stage concept from AGRIVISION AI for a unified operations and management platform — designed for agribusinesses and cooperatives running farming at scale.",
    "overview": [
      "FarmOS is the earliest-stage idea in the AGRIVISION AI product family — a concept we are actively designing, not a product you can use today. We are sharing it openly because we believe the people who will eventually rely on it should help shape it from the start.",
      "The vision is straightforward: agribusinesses and cooperatives run on a patchwork of spreadsheets, paper records, and disconnected apps. FarmOS is being designed as a single operations layer that ties together the day-to-day work of running multiple farms — the schedules, the inputs, the costs, the yields — and puts an AI assistant on top of all of it. Where our flagship products focus on field-level intelligence, FarmOS is intended to focus on the operation as a business.",
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
        "description": "The people responsible for schedules, inputs, labor, and margins day to day — the ones FarmOS is ultimately being designed to serve."
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
        "q": "Is FarmOS available today?",
        "a": "No. FarmOS is an early-stage concept — the earliest stage of any product in the AGRIVISION AI family. It is in concept and early design only. There is no product to sign up for, no live version, no users, and no pricing. We are sharing the vision openly while we design it."
      },
      {
        "q": "How is FarmOS different from your other products?",
        "a": "Our flagship products focus on field-level intelligence — crop advisory, pest intelligence, and market insights. FarmOS is being designed for the business side of farming: workflows, costs, yields, and multi-farm operations, with an AI assistant on top. It is also at an earlier stage than those products."
      },
      {
        "q": "Who is FarmOS being designed for?",
        "a": "It is intended for agribusinesses and agri-cooperatives that run farming at scale across many sites, and for the operations managers within them. If that describes your organization, we would value your input as we shape the concept."
      },
      {
        "q": "Can I influence what FarmOS becomes?",
        "a": "Yes — that is exactly why we publish concepts this early. AGRIVISION AI is a Detroit-based startup founded in 2026 by sole founder and CEO Vijesh Reddy Golamari, and we are building our products with the people who will use them. You can reach the team to share how your operation works and what would actually help."
      }
    ],
    "ogAlt": "FarmOS by AGRIVISION AI — an early-stage concept for a farm operations and management platform for agribusinesses and cooperatives."
  }
];

export const productSlugs = products.map((p) => p.slug);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
