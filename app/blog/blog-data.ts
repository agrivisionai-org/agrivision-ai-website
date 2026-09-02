// Blog post content for AGRIVISION AI. Honest, building-in-public.
// YieldAI Global and CropVision are live; FieldSense and FieldOps are not. Posts written
// before launch keep their original wording and carry a dated update note instead.

export type BlogSection = { heading: string; paragraphs: string[] };
export type BlogPost = {
  slug: string;
  /** Language this post is written in. Drives the html lang attribute and hreflang. */
  lang: 'en' | 'hi';
  /** Slug of the same post in the other language, if a translation exists. */
  altSlug?: string;
  /** Set when a post carries a dated update note. Drives dateModified and sitemap lastModified. */
  updated?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  author: string;
  sections: BlogSection[];
  tags: string[];
};

export const posts: BlogPost[] = [
  {
    "slug": "what-i-found-auditing-our-own-website",
    "lang": "en",
    "title": "I Audited Our Own Website and Found We Were Underselling the Product",
    "metaTitle": "What I Found Auditing Our Own Website | AGRIVISION AI",
    "metaDescription": "We spent the pre-launch months careful not to overclaim, then forgot to stop once things shipped. What I found reading our own site line by line.",
    "date": "2026-08-13",
    "excerpt": "Our homepage said disease detection was on the roadmap. It had been live for weeks. Here is everything I found wrong on our own site, and why I am publishing the list.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "The problem with being careful",
        "paragraphs": [
          "For most of this year I wrote our website like a company that had not shipped anything, because that was true. Every capability was marked planned. Every page carried a line reminding you that nothing was available yet. I was more worried about overclaiming than about anything else, and I think that was the right instinct at the time.",
          "Then we shipped. And I never went back and turned that caution off. Last week I sat down and read our own site the way a stranger would, and what I found was a company quietly telling people its product does less than it does."
        ]
      },
      {
        "heading": "Disease detection was live. Our homepage said it was planned.",
        "paragraphs": [
          "[CropVision](/products/cropvision) — photograph an affected plant, get the likely disease and an honest confidence level — has been live inside YieldAI Global for weeks. It has its own page saying so. And two hundred pixels below that, our homepage listed Disease Detection under a heading that read On the roadmap, planned.",
          "The same was true of weather, of yield prediction, and of the voice assistant. All shipped. All still sitting in the planned column. One chip on the homepage read multilingual voice, planned, directly underneath a card listing Voice Assistant as live. Both were on the same screen."
        ]
      },
      {
        "heading": "Our platform inventory was two modules short",
        "paragraphs": [
          "We describe YieldAI Global as a set of modules and we print the number on the homepage. That number said fifteen. The actual list was missing yield prediction and the voice assistant, so the real number was seventeen. We had been undercounting our own product in the one place a visitor looks for a summary.",
          "It is a small thing. It is also the kind of small thing that makes someone wonder what else on the page is out of date."
        ]
      },
      {
        "heading": "The terms of service were the worst offender",
        "paragraphs": [
          "Our Terms of Service still described AGRIVISION AI as a pre-launch company where no product is generally available — on a site that sells a subscription at $9.99 a month after a thirty-day trial. That is not a marketing inconsistency. That is the document a customer is bound by, contradicting the thing they just paid for.",
          "It now says what is actually true: these terms cover the website, YieldAI Global is live and governed by the terms published at [yieldaiglobal.com](https://yieldaiglobal.com), and the no-offer language applies to the products we have not built."
        ]
      },
      {
        "heading": "Two products got new names on the same day",
        "paragraphs": [
          "While I was in there I checked our roadmap product names properly for the first time. FarmOS collided with farmOS, an open-source farm management project that has been running under that name since around 2014. AgriSense collided with a UK pest-monitoring company trading under it since 1984, two live US trademark registrations, and at least four current agtech companies — one of them building the same IoT sensing product we had sketched.",
          "They are now FieldOps and FieldSense. Both are still concepts rather than products, which is exactly why renaming them cost nothing. Finding this out after launch would have cost a great deal."
        ]
      },
      {
        "heading": "Why publish the list",
        "paragraphs": [
          "I could have fixed all of this quietly. Nobody had complained. The mistakes ran in the direction of modesty, which is the safer direction to be wrong in.",
          "But building in public is not a thing you do only on launch days. If I am going to write posts about being honest with farmers, the site those posts sit on has to be accurate about what it does, what it does not do, and what it costs. The corrections are the work, not an embarrassing footnote to it.",
          "Everything described here is now live on agrivisionai.org. If you find something else that is wrong, tell me and I will fix it and say so."
        ]
      }
    ],
    "tags": [
      "founder essay",
      "building in public",
      "AGRIVISION AI",
      "YieldAI Global",
      "agritech"
    ]
  },
  {
    "slug": "why-cropvision-shows-its-confidence",
    "lang": "en",
    "title": "Why CropVision Tells You How Sure It Is",
    "metaTitle": "Why Our Crop Disease AI Shows Its Confidence | CropVision",
    "metaDescription": "Most crop disease apps give one answer and no way to judge it. CropVision returns the likely disease with an honest confidence level.",
    "date": "2026-08-13",
    "excerpt": "A confident wrong answer about a diseased crop can cost a farmer a season. Here is why our disease detection shows its confidence instead of hiding it.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "One answer, no way to judge it",
        "paragraphs": [
          "Most crop disease apps work the same way. You photograph a leaf, and you get back a disease name. Sometimes a treatment. Almost never any indication of how sure the model actually is.",
          "That design is comfortable to build and comfortable to demo. It is also the design that costs farmers money, because the app sounds exactly as certain when it is guessing as when it is right."
        ]
      },
      {
        "heading": "What CropVision returns instead",
        "paragraphs": [
          "[CropVision](/products/cropvision) is the vision layer inside YieldAI Global. Photograph an affected plant and it returns the disease it believes it is seeing, the visible symptoms behind that read, and how confident it is — in the farmer's own language.",
          "The confidence number is not decoration. A high-confidence read on a classic, well-photographed infection deserves to be acted on. A low-confidence read on a blurry photo of an unusual symptom deserves a second opinion, and the farmer should be able to tell the difference before they spend money."
        ]
      },
      {
        "heading": "The line we do not cross",
        "paragraphs": [
          "There is one place where we deliberately stop short. For chemical treatments and dosages, YieldAI Global does not name a product and a quantity. It directs the farmer to a local agriculture extension officer or a Krishi Vigyan Kendra.",
          "This is the rule I am least willing to negotiate on. Dosage advice depends on the specific compound, the crop stage, local resistance patterns and what is legally approved in that state. A model that is ninety percent right about chemicals is not ninety percent useful — the remaining ten percent is a poisoned crop or a wasted season, and neither the model nor I would carry that cost."
        ]
      },
      {
        "heading": "Being honest costs us on the demo",
        "paragraphs": [
          "I know the tradeoff. A tool that always answers with total certainty feels more impressive in a thirty-second demo than one that says it is sixty percent sure and suggests confirming with an extension officer.",
          "But farming is not a demo. The person on the other end is deciding whether to spend money on a spray, pull a crop early, or wait. They deserve to know how much weight the answer can hold. We would rather lose the demo and keep the trust."
        ]
      },
      {
        "heading": "What we will not claim yet",
        "paragraphs": [
          "We do not publish an accuracy percentage for CropVision, and I will not invent one. It is live, it is early, and field-validated accuracy figures are something we intend to publish once we have results worth standing behind rather than a number that sounds good.",
          "CropVision is live now as the Disease Detection module inside YieldAI Global, available in India, the USA and Canada. You can try it on the thirty-day free trial at [yieldaiglobal.com](https://yieldaiglobal.com) — and if it gives you a bad read, I would genuinely like to hear about it."
        ]
      }
    ],
    "tags": [
      "CropVision",
      "AI agriculture",
      "crop disease",
      "YieldAI Global",
      "AGRIVISION AI",
      "founder essay"
    ]
  },
  {
    "slug": "why-im-building-agrivision-ai",
    "lang": "en",
    "updated": "2026-07-21",
    "title": "Why I'm Building AGRIVISION AI (and Why I'm Telling You Before It's Done)",
    "metaTitle": "Why I'm Building AGRIVISION AI | Founder Essay",
    "metaDescription": "Vijesh Reddy Golamari's June 2026 founding essay on starting AGRIVISION AI in Detroit and building YieldAI Global in public — now live.",
    "date": "2026-06-30",
    "excerpt": "The honest first post: why I left a career in production AI to build YieldAI Global for the world's agricultural extension workers — and exactly how early we are.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "Update — July 2026: YieldAI Global is now live",
        "paragraphs": [
          "A note added after the fact: since this essay was written, YieldAI Global has shipped. It is now live and available in India, the USA, and Canada at [yieldaiglobal.com](https://yieldaiglobal.com), with a free trial — AI crop advice, live government market prices, weather, and government-scheme guidance in the farmer's own language.",
          "I'm leaving the original post below exactly as it was written, pre-launch, because that honesty is the whole point of building in public. Everything under this line reflects where we were then, not where we are now."
        ]
      },
      {
        "heading": "This is the first thing we've ever published, and we haven't shipped anything yet",
        "paragraphs": [
          "I'm Vijesh Reddy Golamari, the founder and CEO of AGRIVISION AI. This is the first post on our blog, and I want to start it the same way I intend to run the whole company: by being precise about where we actually are.",
          "AGRIVISION AI (our legal entity is AgriVisionAI Inc., a Delaware C-Corporation) was founded in May 2026 and is headquartered in Detroit, Michigan. We are one founder — me — plus a small group of advisors. We are pre-MVP. Our flagship product, YieldAI Global, is in active development and has not shipped to a single production user. No customers, no revenue, no funding announced. If you came here expecting a launch, I'd rather disappoint you now than oversell you later.",
          "So why write anything at all before there's a product to point at? Because I've decided to build this in public, and building in public only counts if you show up at the awkward early stage, not just on launch day. This essay is the founding document: what we're building, why I left a comfortable career to build it, and what we have and haven't done so far. I'd rather you judge us against an honest baseline."
        ]
      },
      {
        "heading": "The problem that wouldn't leave me alone",
        "paragraphs": [
          "Across India, Africa, Latin America, and Southeast Asia, a single agricultural extension worker is often responsible for advising roughly 1,200 farming households. Twelve hundred. Usually with no real-time data, no model in their hand, and no tooling beyond a phone and their own hard-won experience. When a pest shows up in a field, the person best positioned to give advice at that exact moment is almost always working blind.",
          "That number is the thing that kept nagging at me. An extension worker isn't a user you scale to one at a time — they're a lever. Make one of them meaningfully better at their job, and the effect lands on a thousand farms at once. That math is genuinely why I started the company. The same AI capabilities I'd been building for well-served corners of the economy could, in principle, point at the people growing the world's food. It felt indefensible not to try.",
          "I won't pretend the field is empty. There's an active agritech and digital-advisory space — government extension programs, point apps for weather, prices, or pest ID. My bet isn't a single clever feature. It's grounding: a system built specifically for the extension worker's actual workflow, where the advice is anchored in real agronomy instead of whatever a model feels like saying."
        ]
      },
      {
        "heading": "What YieldAI Global is meant to be",
        "paragraphs": [
          "YieldAI Global is the product we're building first: an AI crop intelligence platform designed for agricultural extension workers and the farming households they serve. The mission of AGRIVISION AI is broader than one product — AI-first tools for global agriculture, designed for more than 40 countries and multilingual by design — but YieldAI Global is where that mission has to prove itself.",
          "The shape we're building toward is a voice-first, multilingual assistant for the field: AI crop advisory grounded in agronomic sources, live weather and pest-and-disease alerts, real-time market-price intelligence, and the ability to turn an extension worker's spoken field notes into a structured visit report. We're designing it around specialized agents — a crop advisor, market intelligence, weather, and field visit — rather than one monolithic chatbot, because the workflows are genuinely different.",
          "Beyond YieldAI Global, we have a roadmap I'll describe honestly as a roadmap, not a product line: CropVision (a planned vision module for crop and disease imagery), FieldSense (planned IoT sensing), and FieldOps (an early-stage operations concept). These are directions, not deliverables. I'd rather name them as ideas than dress them up as features that exist.",
          "Update, August 2026: [CropVision](/products/cropvision) has since shipped. It is live inside YieldAI Global as the Disease Detection module — photograph a plant, get the likely disease and an honest confidence level. AgriSense and FarmOS have been renamed FieldSense and FieldOps, and both remain exactly what this post called them: planned, not built. I'm leaving the paragraph above as written, because the point of publishing early is that the record should show what we knew at the time."
        ]
      },
      {
        "heading": "Why the model is the easy part",
        "paragraphs": [
          "After about five years building production AI, I've stopped being impressed by fluency. The hard part of this isn't getting a model to say something plausible about a crop — it's being right, by voice, in a farmer's own language and context, where a confidently wrong answer can cost someone an entire season. Fluent and correct are not the same thing, and in agriculture the gap between them is measured in lost harvests.",
          "So reliability is being treated as a first-class engineering problem, not a polish step. The technical core we're building is a routed multi-model stack with retrieval-augmented generation grounded in agronomic primitives from sources like ICAR, FAO, and state agriculture departments, plus vision for pest and disease identification. And we're building a continuous evaluation harness that grades outputs on separate tracks — factual accuracy, safety, and cultural appropriateness — because 'sounds right' is the failure mode I most want to avoid.",
          "This is also why I keep emphasizing that we're being careful before we ship. It would be easy to put up a demo that looks magical in a controlled setting. It's much harder to earn the trust of someone whose livelihood depends on the answer. That second thing is the only thing worth building."
        ]
      },
      {
        "heading": "Why me, and why now",
        "paragraphs": [
          "I was born in Hyderabad, India, in 2000, and moved to the United States in January 2023 for a master's degree. Over roughly five years I've built production AI systems across the industry: LLM evaluation and red-teaming, open-weight model fine-tuning and CLIP multimodal work, enterprise generative AI and retrieval-augmented generation, and end-to-end machine learning. That experience is exactly what I'm now pointing at agriculture.",
          "The honest reason I left is that I kept building incredible systems for problems that were already well-served. At some point you have to ask whether you want to make the comfortable parts of the world slightly more optimized, or take the same tooling somewhere it has never been. I chose the second.",
          "And the timing isn't arbitrary. The ingredients for a credible AI advisory — strong multilingual models, retrieval grounding, affordable multimodal vision — have only recently matured enough to be trustworthy for high-stakes agronomic advice. Meanwhile the field gap hasn't moved: one worker, roughly 1,200 households, almost no tooling. The distance between what's now technically possible and what's actually deployed on the ground is the whole opportunity."
        ]
      },
      {
        "heading": "What 'building in public' will actually mean here",
        "paragraphs": [
          "Here's what I'm committing to. I'll share progress one capability at a time, including the parts that don't work yet. I won't post fake metrics, invented testimonials, or a user count we don't have. When something is a hypothesis — like our monetization, which is genuinely still an open question — I'll call it a hypothesis. The fastest way to lose the trust of the extension workers and agronomists I most want in the room is to perform certainty I haven't earned.",
          "A note on identity, because it matters for being findable and credible: there are a couple of unrelated projects that share a similar name in India and Ghana. To be unambiguous — this AGRIVISION AI is AgriVisionAI Inc., a Delaware C-Corporation headquartered in Detroit, Michigan, founded in May 2026, with one sole founder and CEO, me, Vijesh Reddy Golamari. We're not affiliated with any other similarly named project.",
          "If any of this resonates — especially if you're an extension worker, an agronomist, a researcher, or a journalist who wants to track a pre-MVP build honestly — I'd genuinely like to hear from you. The site is agrivisionai.org, I read everything sent to hello@agrivisionai.org, our code lives at github.com/agrivisionai-org, and we share progress through AGRIVISION Build Notes on LinkedIn and on X at @yieldaiglobal. We're at the very beginning. That's exactly why it's a good time to come help shape it."
        ]
      }
    ],
    "tags": [
      "AGRIVISION AI",
      "YieldAI Global",
      "building in public",
      "agritech",
      "founder essay",
      "Detroit startups",
      "AI agriculture",
      "pre-MVP"
    ]
  },
  {
    "slug": "crops-for-flood-prone-and-waterlogged-land",
    "lang": "en",
    "altSlug": "badh-prabhavit-zameen-mein-kaunsi-fasal",
    "title": "Which Crops to Grow on Flood-Prone or Waterlogged Land",
    "metaTitle": "Best Crops for Flood-Prone & Waterlogged Land (2026 Guide)",
    "metaDescription": "What to plant on land that floods or waterlogs — flood-tolerant rice, jute, taro and more — plus how to choose the right crop for your soil, region and season.",
    "date": "2026-07-11",
    "excerpt": "If part of your land holds water or floods after heavy rain, the crop you choose matters more than anything. Here is a practical guide to what grows well on wet ground.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "Start with the water, not the crop",
        "paragraphs": [
          "Before picking a crop, understand the water. How long does water actually stand after rain — hours, days, or weeks? Is it seasonal flooding along a river or canal, or year-round waterlogging from poor drainage? A field that drains in a day is a very different problem from one that stays submerged for a week, and the right crop depends entirely on that answer.",
          "The goal is to match a crop's tolerance for standing water and low-oxygen roots to how wet your land really gets. Get that match right and wet land becomes an asset rather than a loss."
        ]
      },
      {
        "heading": "Rice (paddy) is the classic flood-tolerant choice",
        "paragraphs": [
          "Rice is the go-to crop for land that holds water, because it is adapted to grow in flooded, low-oxygen soil where most other crops would drown. For most farmers with a wet field, paddy is the safest starting point.",
          "If your land is prone to deeper or longer flooding, ask specifically about deepwater rice and submergence-tolerant varieties — these are bred to survive being fully underwater for a period and then recover. Availability of these varieties differs by state and season, so confirm what is offered locally."
        ]
      },
      {
        "heading": "Other water-loving options",
        "paragraphs": [
          "Beyond rice, several crops do well on wet ground. Jute is a traditional fibre crop for low-lying, moisture-rich land. Taro (arbi/colocasia) tolerates wet soils. In parts of India, water-based crops like water chestnut (singhara) and makhana (foxnut) are grown deliberately in ponded fields, turning standing water into a cash crop.",
          "On land that is only partially or seasonally wet, certain fodder grasses and, in some conditions, sugarcane can work once basic drainage is in place. The right pick depends on your soil, climate and market — there is no single answer for every wet field."
        ]
      },
      {
        "heading": "Practices that reduce flood risk",
        "paragraphs": [
          "The crop is only half the solution; managing the water is the other half. Raised beds and bunds lift roots above standing water. Simple drainage channels move excess water off the field faster. Choosing short-duration varieties and timing sowing to avoid the peak flood window can let you harvest before the worst water arrives.",
          "Small, low-cost changes to how water enters and leaves the field often make more difference than the crop choice alone."
        ]
      },
      {
        "heading": "Match it to your exact field",
        "paragraphs": [
          "Soil type, region, rainfall pattern and season all change what will actually work on your land, and variety names and availability vary district to district. Treat this guide as a starting point, and confirm the specific variety and practices with your local agriculture extension officer or Krishi Vigyan Kendra (KVK) before you commit a season to it.",
          "This is exactly the kind of question our product, [YieldAI Global](/products/yieldai-global), is built to answer — describe your land, and it gives crop guidance tuned to your location, in your own language. It is live in India, the USA and Canada, with a free trial at [yieldaiglobal.com](https://yieldaiglobal.com)."
        ]
      }
    ],
    "tags": ["crop selection", "flood-prone land", "waterlogging", "rice", "farming guide"]
  },
  {
    "slug": "how-to-check-todays-mandi-prices-online",
    "lang": "en",
    "altSlug": "aaj-ke-mandi-bhav-online-kaise-dekhein",
    "title": "How to Check Today's Mandi Prices Online (India)",
    "metaTitle": "Check Today's Mandi Prices Online — Free Sources (2026)",
    "metaDescription": "Where to find today's mandi (market) prices for your crop online — AGMARKNET, e-NAM and state portals — plus how to use them and the MSP to sell smarter.",
    "date": "2026-07-12",
    "excerpt": "Knowing today's mandi price before you sell can be the difference between a fair deal and a loss. Here are the free, official places to check prices — and how to use them.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "Why today's mandi price matters",
        "paragraphs": [
          "Prices at agricultural markets (mandis) move day to day and differ from one market to the next. A farmer who knows the current rate — and how it compares across nearby mandis and to last week — is in a far stronger position to decide when and where to sell.",
          "The good news: several official sources publish this data online for free. You just need to know where to look and how to read it."
        ]
      },
      {
        "heading": "AGMARKNET — the government's price portal",
        "paragraphs": [
          "AGMARKNET (agmarknet.gov.in) is the Government of India portal that publishes daily prices for a wide range of commodities across markets nationwide. You can look up your crop and see the minimum, maximum and modal (most common) price reported at different mandis.",
          "One thing to know: this data is updated in a daily batch and some markets may not report every day, so always check the date on the price you are reading. A price without a date can be misleading."
        ]
      },
      {
        "heading": "e-NAM and state portals",
        "paragraphs": [
          "e-NAM (enam.gov.in), the National Agriculture Market, connects many mandis into a single online platform and shows trade prices from participating markets. Many state agricultural marketing boards also run their own portals and apps with local mandi rates.",
          "Between AGMARKNET and your state's portal, you can usually triangulate a reliable picture of what your crop is fetching right now."
        ]
      },
      {
        "heading": "Use the MSP as a benchmark",
        "paragraphs": [
          "For many crops, the government announces a Minimum Support Price (MSP) each season. Knowing the current MSP for your crop gives you a floor to judge market offers against — if a trader is offering well below MSP, that is worth questioning, and for MSP-procured crops you may have the option to sell at a procurement centre.",
          "MSP is announced ahead of the Kharif and Rabi seasons, so check the latest figure for your crop before you sell."
        ]
      },
      {
        "heading": "Turn prices into decisions",
        "paragraphs": [
          "Data only helps if you act on it. Compare a few nearby mandis, look at the trend versus last week rather than a single day, and factor in transport cost to reach a higher-priced market. Sometimes the closer mandi at a slightly lower price nets you more.",
          "This is one of the core things [YieldAI Global](/products/yieldai-global) does: it pulls live government market prices for your crop and shows them — with the 'as of' date — in your own language, so you are not digging through portals. It is live in India, the USA and Canada, with a free trial at [yieldaiglobal.com](https://yieldaiglobal.com)."
        ]
      }
    ],
    "tags": ["mandi prices", "market prices", "AGMARKNET", "e-NAM", "MSP", "selling crops"]
  },
  {
    "slug": "government-schemes-for-farmers-2026-india",
    "lang": "en",
    "altSlug": "kisano-ke-liye-sarkari-yojanaayein-2026",
    "title": "Government Schemes for Farmers in India (2026): A Simple Guide",
    "metaTitle": "Farmer Schemes in India 2026 — PM-KISAN, PMFBY & More",
    "metaDescription": "A plain-language guide to key Indian farmer schemes in 2026 — PM-KISAN, PMFBY, Kisan Credit Card and Soil Health Card — and how to apply.",
    "date": "2026-07-13",
    "excerpt": "There is real support available for farmers — the hard part is knowing which scheme applies and how to apply. Here is a simple, honest guide to the main ones.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "PM-KISAN — direct income support",
        "paragraphs": [
          "The PM-KISAN scheme provides eligible landholding farmer families with income support of ₹6,000 per year, paid directly to their bank account in three equal instalments of ₹2,000. It is meant to help with input costs and household needs across the season.",
          "You can register and check your status through the official portal (pmkisan.gov.in) or a Common Service Centre (CSC). Keep your Aadhaar, bank account and land records handy, and make sure your details match across documents to avoid payment holds."
        ]
      },
      {
        "heading": "PMFBY — crop insurance",
        "paragraphs": [
          "The Pradhan Mantri Fasal Bima Yojana (PMFBY) is the national crop insurance scheme. It protects farmers against crop loss from events like drought, flood, pests and disease, with the farmer paying only a small, fixed share of the premium (commonly a low percentage for Kharif and Rabi crops) and the government subsidising the rest.",
          "Enrolment usually happens through banks, insurance companies or CSCs, and there are cut-off dates each season — missing the window means missing cover, so enrol early. Confirm the current premium and enrolment deadline for your crop and district before the season starts."
        ]
      },
      {
        "heading": "Kisan Credit Card (KCC) — affordable credit",
        "paragraphs": [
          "The Kisan Credit Card gives farmers access to short-term credit at concessional interest rates for cultivation and related needs, instead of relying on high-cost informal lenders. Many farmers also use it to bridge the gap between planting costs and harvest income.",
          "You can apply through most banks. Timely repayment often unlocks interest benefits, so understand the repayment terms when you take it."
        ]
      },
      {
        "heading": "Soil Health Card — know your soil",
        "paragraphs": [
          "The Soil Health Card scheme provides farmers with a report on their soil's nutrient status and crop-wise recommendations on how much fertiliser to actually apply. Following it can cut wasted fertiliser spend and improve yields at the same time.",
          "Ask at your local agriculture office or KVK about getting your soil tested under the scheme."
        ]
      },
      {
        "heading": "How to apply — and not miss out",
        "paragraphs": [
          "Most schemes need the same core documents: Aadhaar, bank account details and land records. Deadlines matter, especially for insurance. If the online process is confusing, a Common Service Centre (CSC) or your bank branch can usually help you enrol.",
          "Scheme rules, amounts and dates do change, so always confirm the current details on the official government portal for each scheme before acting. If you would rather just ask in your own language, [YieldAI Global](/products/yieldai-global) can tell you which schemes you may be eligible for and how to apply — it is live in India, the USA and Canada, with a free trial at [yieldaiglobal.com](https://yieldaiglobal.com)."
        ]
      }
    ],
    "tags": ["government schemes", "PM-KISAN", "PMFBY", "Kisan Credit Card", "Soil Health Card", "farmer subsidies"]
  },
  {
    "slug": "how-to-increase-crop-yield",
    "lang": "en",
    "altSlug": "fasal-ki-paidawar-kaise-badhayein",
    "title": "How to Increase Crop Yield: 8 Practical Steps",
    "metaTitle": "How to Increase Crop Yield — 8 Practical Steps (2026)",
    "metaDescription": "A practical, no-nonsense guide to increasing crop yield — soil testing, seed choice, spacing, balanced nutrition, water, and timely pest management.",
    "date": "2026-07-05",
    "excerpt": "Higher yield rarely comes from one big change. It comes from getting several small things right, in order. Here are eight practical steps that consistently move the needle.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "1. Start with a soil test",
        "paragraphs": [
          "You cannot fix what you have not measured. A soil test tells you your soil's nutrient levels and pH, so you add what is actually missing instead of guessing. In India, the Soil Health Card scheme offers this along with crop-specific recommendations. Testing before every major crop is one of the cheapest ways to raise yield and cut wasted fertiliser."
        ]
      },
      {
        "heading": "2. Choose the right seed and variety",
        "paragraphs": [
          "Good seed of a variety suited to your region, season and soil is the foundation. Certified seed with high germination, and varieties bred for your local conditions (drought tolerance, pest resistance, duration), can lift yield before you do anything else. Ask your local agriculture office or KVK which varieties are performing well near you this season."
        ]
      },
      {
        "heading": "3. Get spacing and plant population right",
        "paragraphs": [
          "Too dense and plants compete for light, water and nutrients; too sparse and you waste land. Following the recommended spacing for your crop and variety gives each plant room to reach its potential. It is a free change that many fields get wrong."
        ]
      },
      {
        "heading": "4. Feed the crop in balance",
        "paragraphs": [
          "Balanced nutrition — the right mix of nitrogen, phosphorus, potassium and micronutrients based on your soil test — beats simply adding more of one fertiliser. Split applications timed to the crop's growth stages usually work better than a single heavy dose."
        ]
      },
      {
        "heading": "5. Manage water deliberately",
        "paragraphs": [
          "Both too little and too much water cut yield. Irrigate based on the crop's needs and growth stage rather than habit, and improve drainage where water stands. Where water is scarce, efficient methods like drip can maintain yield while using far less."
        ]
      },
      {
        "heading": "6. Stay ahead of weeds and pests",
        "paragraphs": [
          "Weeds steal nutrients and water; [pests and disease](/products/cropvision) can wipe out gains fast. Scout your field regularly so you catch problems early, and favour integrated pest management (IPM) — cultural, biological and only-when-needed chemical control. Always confirm any chemical and its dose with your local agriculture extension officer before applying."
        ]
      },
      {
        "heading": "7. Sow on time",
        "paragraphs": [
          "Timing is one of the most underrated yield levers. Sowing within the right window for your crop and region lets it use the full season and avoid the worst heat, cold or pest pressure. A crop planted late often never catches up."
        ]
      },
      {
        "heading": "8. Protect the harvest",
        "paragraphs": [
          "Yield you grow but lose after harvest still counts as lost. Harvest at the right maturity, dry and store properly, and reduce spoilage. Getting this right protects the gains from all the earlier steps.",
          "If keeping track of soil, timing, water and pests across a season feels like a lot, that is exactly what YieldAI Global helps with — practical, location-specific guidance in your own language. It is live in India, the USA and Canada, with a free trial at [yieldaiglobal.com](https://yieldaiglobal.com)."
        ]
      }
    ],
    "tags": ["crop yield", "farming tips", "soil health", "IPM", "farm productivity"]
  },
  {
    "slug": "kharif-vs-rabi-when-to-sow-crops-india",
    "lang": "en",
    "altSlug": "kharif-rabi-boai-ka-samay-bharat",
    "title": "Kharif vs Rabi: When to Sow Major Crops in India",
    "metaTitle": "Kharif vs Rabi Crops — Sowing Seasons in India (2026)",
    "metaDescription": "Kharif, Rabi and Zaid explained simply — which crops are grown in each season in India, when to sow and harvest, and how to plan your year.",
    "date": "2026-07-06",
    "excerpt": "India's farming calendar runs on three seasons. Knowing which crop belongs in which — and the sowing window — is the backbone of planning a profitable year.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "The three cropping seasons",
        "paragraphs": [
          "Indian agriculture is organised around three seasons: Kharif (the monsoon season), Rabi (the winter season) and Zaid (the short summer season between them). Each suits different crops because of temperature, day length and water availability. Planning your year means matching the right crop to the right season and sowing within its window."
        ]
      },
      {
        "heading": "Kharif — the monsoon crops",
        "paragraphs": [
          "Kharif crops are sown with the arrival of the monsoon, roughly June to July, and harvested around September to November. They need warm, wet conditions. Typical Kharif crops include rice (paddy), maize, cotton, soybean, groundnut, and millets like bajra and jowar, along with pulses such as tur (arhar).",
          "Because Kharif depends heavily on the monsoon, timing sowing to the rains — and having a plan if they are late or excessive — matters a great deal."
        ]
      },
      {
        "heading": "Rabi — the winter crops",
        "paragraphs": [
          "Rabi crops are sown in the cooler months, roughly October to December, and harvested around March to April. They grow in cool weather and often rely on irrigation or residual soil moisture rather than rain. Common Rabi crops include wheat, barley, mustard, gram (chickpea) and peas.",
          "Sowing Rabi crops on time is important so they mature before the spring heat arrives."
        ]
      },
      {
        "heading": "Zaid — the summer season",
        "paragraphs": [
          "Zaid is the short season between Rabi harvest and the next Kharif, roughly March to June. With long, hot days and irrigation, farmers grow quick crops like watermelon, muskmelon, cucumber and some vegetables and fodder. It is a way to earn from land that would otherwise sit idle."
        ]
      },
      {
        "heading": "Plan the whole year, not one crop",
        "paragraphs": [
          "The strongest plans think across seasons — rotating crops to keep soil healthy, spreading risk, and lining up sowing dates with your water and labour. Exact windows shift with region and weather each year, so confirm local dates with your agriculture office or KVK.",
          "[YieldAI Global](/products/yieldai-global) can help you plan around your location, crop and the current weather — in your own language. It is live in India, the USA and Canada, with a free trial at [yieldaiglobal.com](https://yieldaiglobal.com)."
        ]
      }
    ],
    "tags": ["kharif", "rabi", "zaid", "cropping season", "sowing calendar", "crop planning"]
  },
  {
    "slug": "drip-vs-flood-irrigation",
    "lang": "en",
    "altSlug": "drip-vs-flood-sinchai",
    "title": "Drip vs Flood Irrigation: Which Saves More Water and Money?",
    "metaTitle": "Drip vs Flood Irrigation — Water, Cost & Yield (2026)",
    "metaDescription": "Drip versus flood irrigation compared simply — water savings, cost, yield, weeds and subsidies — so you can choose the right method for your field.",
    "date": "2026-07-07",
    "excerpt": "Flood irrigation is cheap to start but wastes water. Drip costs more upfront but saves water, cuts weeds and can raise yield. Here is how to decide.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "How each method works",
        "paragraphs": [
          "Flood (or surface) irrigation floods the field or runs water down furrows, letting it soak in. It is simple and cheap to set up, which is why it is so common. Drip irrigation delivers water slowly and directly to the root zone through a network of pipes and emitters, so very little is lost to evaporation or runoff."
        ]
      },
      {
        "heading": "Water and cost",
        "paragraphs": [
          "Drip typically uses far less water than flood irrigation for the same crop, because water goes to the roots instead of the whole field. That efficiency matters most where water is scarce or expensive to pump. The trade-off is upfront cost: drip needs an investment in pipes and emitters, while flood needs little equipment.",
          "In India, government support under schemes for micro-irrigation (per-drop-more-crop) can subsidise a large share of drip installation, which changes the maths considerably — worth checking before you rule it out on cost."
        ]
      },
      {
        "heading": "Yield, weeds and fertiliser",
        "paragraphs": [
          "Because drip keeps the area between plants drier, it usually means fewer weeds and less weeding. It also allows fertigation — delivering fertiliser through the water directly to the roots — which can improve both nutrient use and yield. Flood irrigation wets everything, encouraging weeds and losing some nutrients to runoff."
        ]
      },
      {
        "heading": "Which should you choose?",
        "paragraphs": [
          "If water is scarce or costly, land is uneven, or you grow high-value crops, drip often pays for itself — especially with subsidy. If water is abundant and cheap and margins are thin, flood may still make sense for now. Many farmers move high-value plots to drip first and expand as it proves out.",
          "The right answer depends on your crop, water source, land and budget. [YieldAI Global](/products/yieldai-global) can help you weigh options for your situation, in your own language — live in India, the USA and Canada, with a free trial at [yieldaiglobal.com](https://yieldaiglobal.com)."
        ]
      }
    ],
    "tags": ["drip irrigation", "flood irrigation", "water saving", "micro-irrigation", "irrigation methods"]
  },
  {
    "slug": "can-ai-really-help-farmers",
    "lang": "en",
    "title": "Can AI Really Help Farmers? A Plain-English Guide",
    "metaTitle": "Can AI Really Help Farmers? What It Can and Can't Do",
    "metaDescription": "An honest, plain-English look at how AI helps farmers today — crop advice, market prices, weather, schemes, local languages — and its real limits.",
    "date": "2026-07-14",
    "excerpt": "AI is showing up everywhere, including farming. So what can it actually do for a farmer today — and what should you not expect from it? An honest look.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "What AI can genuinely do for farmers today",
        "paragraphs": [
          "At its best, [an AI farming assistant](/products) puts useful information in a farmer's hand instantly. It can answer questions about which crop suits a field, explain a government scheme and how to apply, surface today's market prices, and give weather-based guidance — the kind of help that used to require calling several people or visiting an office.",
          "The most practical part is that good AI does this in the farmer's own language, by voice or text, so literacy and jargon stop being barriers."
        ]
      },
      {
        "heading": "Why 'grounded' matters more than 'clever'",
        "paragraphs": [
          "The real value is not a clever-sounding answer — it is a correct one. A trustworthy AI farming tool answers from real data: official market prices, verified scheme details, actual weather, and established agronomy. A tool that just generates confident text without grounding can be wrong in ways that cost a farmer a season.",
          "So when judging any AI farming app, ask where its answers come from, and whether it is honest when it does not know."
        ]
      },
      {
        "heading": "What AI should not replace",
        "paragraphs": [
          "AI is a helper, not a replacement for judgement or local expertise. It does not stand in your field, and it should never hand out specific pesticide or chemical doses on its own — that is exactly where a local agriculture extension officer's confirmation matters. The right role for AI is to inform decisions and point you to the right expert, not to make high-stakes calls for you."
        ]
      },
      {
        "heading": "How to try it for yourself",
        "paragraphs": [
          "The best way to judge whether AI helps is to ask it a real question from your own farm and see if the answer is useful, specific and honest. That is the bar we hold ourselves to.",
          "YieldAI Global is our AI farming assistant, built to give crop advice, live government market prices, weather and scheme guidance grounded in real data, in your own language. It is live in India, the USA and Canada, with a free trial at [yieldaiglobal.com](https://yieldaiglobal.com) — try it with your own question."
        ]
      }
    ],
    "tags": ["AI in agriculture", "AI farming assistant", "agritech", "farming technology", "digital agriculture"]
  },
  {
    "slug": "badh-prabhavit-zameen-mein-kaunsi-fasal",
    "lang": "hi",
    "altSlug": "crops-for-flood-prone-and-waterlogged-land",
    "title": "बाढ़ या जलभराव वाली ज़मीन में कौन सी फसल लगाएँ",
    "metaTitle": "बाढ़/जलभराव वाली ज़मीन में कौन सी फसल लगाएँ (2026 गाइड)",
    "metaDescription": "जिस ज़मीन पर पानी भरता है या बाढ़ आती है, वहाँ क्या लगाएँ — बाढ़-सहनशील धान, जूट, अरबी और अन्य विकल्प, और अपनी मिट्टी व मौसम के अनुसार चुनाव कैसे करें।",
    "date": "2026-07-01",
    "excerpt": "अगर आपकी ज़मीन के किसी हिस्से में पानी भरता है या बारिश के बाद बाढ़ आती है, तो सही फसल चुनना सबसे ज़रूरी है। यहाँ गीली ज़मीन के लिए एक व्यावहारिक गाइड है।",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "पहले पानी को समझें, फिर फसल चुनें",
        "paragraphs": [
          "फसल चुनने से पहले यह समझें कि पानी कितनी देर खेत में रुकता है — कुछ घंटे, कुछ दिन या कई हफ़्ते? क्या यह नदी/नहर से आने वाली मौसमी बाढ़ है, या खराब निकासी की वजह से साल भर रहने वाला जलभराव? जो खेत एक दिन में सूख जाता है और जो एक हफ़्ते तक डूबा रहता है — दोनों की समस्या अलग है, और सही फसल इसी पर निर्भर करती है।"
        ]
      },
      {
        "heading": "धान (चावल) सबसे सुरक्षित विकल्प है",
        "paragraphs": [
          "जिस ज़मीन में पानी रुकता है, वहाँ धान सबसे अच्छा विकल्प है, क्योंकि यह खड़े पानी और कम ऑक्सीजन वाली मिट्टी में भी उगता है। अगर आपकी ज़मीन पर गहरी या लंबी बाढ़ आती है, तो गहरे पानी वाली और बाढ़-सहनशील (submergence-tolerant) किस्मों के बारे में ज़रूर पूछें — ये किस्में कुछ समय तक पूरी तरह डूबे रहने के बाद भी बच जाती हैं। ये किस्में राज्य और मौसम के अनुसार अलग होती हैं, इसलिए स्थानीय उपलब्धता की पुष्टि करें।"
        ]
      },
      {
        "heading": "पानी पसंद करने वाली अन्य फसलें",
        "paragraphs": [
          "धान के अलावा जूट, अरबी (कोलोकेसिया) जैसी फसलें भी गीली मिट्टी में अच्छी चलती हैं। भारत के कई हिस्सों में पानी वाली ज़मीन पर सिंघाड़ा और मखाना जैसी फसलें भी उगाई जाती हैं, जिससे खड़ा पानी नुकसान की जगह कमाई का ज़रिया बन जाता है। जो ज़मीन सिर्फ़ मौसमी रूप से गीली रहती है, वहाँ बुनियादी निकासी के बाद कुछ चारा घास और कहीं-कहीं गन्ना भी लगाया जा सकता है।"
        ]
      },
      {
        "heading": "बाढ़ का जोखिम कम करने के उपाय और सही सलाह",
        "paragraphs": [
          "फसल आधा हल है; पानी का प्रबंधन दूसरा आधा। ऊँची क्यारियाँ (raised beds) और मेड़ जड़ों को खड़े पानी से ऊपर रखती हैं, निकासी नालियाँ अतिरिक्त पानी जल्दी बाहर करती हैं, और कम अवधि की किस्में व सही समय पर बुआई बाढ़ के चरम से बचा सकती हैं।",
          "मिट्टी, क्षेत्र और मौसम के अनुसार सही किस्म बदलती है, इसलिए इसे शुरुआती गाइड मानें और अंतिम निर्णय से पहले अपने स्थानीय कृषि अधिकारी या KVK से पुष्टि करें। यही सवाल हमारा प्रोडक्ट [YieldAI Global](/products/yieldai-global) हल करता है — अपनी ज़मीन बताइए, यह आपकी जगह के अनुसार सलाह देता है, आपकी अपनी भाषा में। यह भारत, अमेरिका और कनाडा में लाइव है, और मुफ़्त ट्रायल के साथ: [yieldaiglobal.com](https://yieldaiglobal.com)"
        ]
      }
    ],
    "tags": ["फसल चुनाव", "बाढ़", "जलभराव", "धान", "खेती गाइड", "hindi"]
  },
  {
    "slug": "aaj-ke-mandi-bhav-online-kaise-dekhein",
    "lang": "hi",
    "altSlug": "how-to-check-todays-mandi-prices-online",
    "title": "आज के मंडी भाव ऑनलाइन कैसे देखें",
    "metaTitle": "आज के मंडी भाव ऑनलाइन कैसे देखें — मुफ़्त स्रोत (2026)",
    "metaDescription": "अपनी फसल के आज के मंडी भाव ऑनलाइन कहाँ देखें — AGMARKNET, e-NAM और राज्य पोर्टल — और भाव व MSP का इस्तेमाल कर बेहतर बिक्री कैसे करें।",
    "date": "2026-07-02",
    "excerpt": "बेचने से पहले आज का मंडी भाव जानना सही सौदे और नुकसान के बीच का फ़र्क़ हो सकता है। यहाँ भाव देखने के मुफ़्त, आधिकारिक स्रोत और उनका इस्तेमाल बताया गया है।",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "आज का भाव जानना क्यों ज़रूरी है",
        "paragraphs": [
          "मंडी के भाव रोज़ बदलते हैं और एक मंडी से दूसरी मंडी में अलग होते हैं। जिस किसान को मौजूदा भाव पता है — और यह भी कि आस-पास की मंडियों और पिछले हफ़्ते के मुकाबले वह कैसा है — वह कब और कहाँ बेचना है, यह तय करने में बहुत मज़बूत स्थिति में होता है।"
        ]
      },
      {
        "heading": "AGMARKNET — सरकारी भाव पोर्टल",
        "paragraphs": [
          "AGMARKNET (agmarknet.gov.in) भारत सरकार का पोर्टल है जो देश भर की मंडियों के लिए रोज़ाना भाव प्रकाशित करता है। आप अपनी फसल खोजकर अलग-अलग मंडियों का न्यूनतम, अधिकतम और मॉडल (सबसे आम) भाव देख सकते हैं। ध्यान रहे: यह डेटा रोज़ एक बार अपडेट होता है और कुछ मंडियाँ हर दिन रिपोर्ट नहीं करतीं, इसलिए हमेशा भाव के साथ की तारीख़ ज़रूर देखें।"
        ]
      },
      {
        "heading": "e-NAM, राज्य पोर्टल और MSP",
        "paragraphs": [
          "e-NAM (enam.gov.in) कई मंडियों को एक ऑनलाइन मंच पर जोड़ता है और भाग लेने वाली मंडियों के भाव दिखाता है। कई राज्य कृषि विपणन बोर्ड भी अपने पोर्टल/ऐप चलाते हैं। साथ ही, कई फसलों के लिए सरकार हर सीज़न न्यूनतम समर्थन मूल्य (MSP) घोषित करती है — बेचने से पहले अपनी फसल का मौजूदा MSP जानना एक अच्छा आधार देता है।"
        ]
      },
      {
        "heading": "भाव को फ़ैसले में बदलें",
        "paragraphs": [
          "डेटा तभी काम आता है जब आप उस पर कदम उठाएँ। पास की कुछ मंडियों की तुलना करें, सिर्फ़ एक दिन नहीं बल्कि पिछले हफ़्ते के मुक़ाबले रुझान देखें, और ऊँचे भाव वाली मंडी तक पहुँचने का परिवहन खर्च भी जोड़ें।",
          "यही एक मुख्य काम [YieldAI Global](/products/yieldai-global) करता है: यह आपकी फसल के लाइव सरकारी मंडी भाव — तारीख़ के साथ — आपकी अपनी भाषा में दिखाता है, ताकि आपको पोर्टल खंगालने न पड़ें। यह भारत, अमेरिका और कनाडा में लाइव है, मुफ़्त ट्रायल के साथ: [yieldaiglobal.com](https://yieldaiglobal.com)"
        ]
      }
    ],
    "tags": ["मंडी भाव", "बाज़ार भाव", "AGMARKNET", "e-NAM", "MSP", "hindi"]
  },
  {
    "slug": "kisano-ke-liye-sarkari-yojanaayein-2026",
    "lang": "hi",
    "altSlug": "government-schemes-for-farmers-2026-india",
    "title": "किसानों के लिए सरकारी योजनाएँ 2026: एक आसान गाइड",
    "metaTitle": "किसानों के लिए सरकारी योजनाएँ 2026 — PM-KISAN, PMFBY और अधिक",
    "metaDescription": "2026 में किसानों की मुख्य सरकारी योजनाओं की सरल गाइड — PM-KISAN, PMFBY फसल बीमा, किसान क्रेडिट कार्ड और मृदा स्वास्थ्य कार्ड — और आवेदन कैसे करें।",
    "date": "2026-07-03",
    "excerpt": "किसानों के लिए असली मदद उपलब्ध है — मुश्किल बस यह जानना है कि कौन सी योजना लागू होती है और आवेदन कैसे करें। यहाँ मुख्य योजनाओं की एक सरल, ईमानदार गाइड है।",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "PM-KISAN — सीधी आय सहायता",
        "paragraphs": [
          "PM-KISAN योजना पात्र भूमिधारक किसान परिवारों को हर साल ₹6,000 की आय सहायता देती है, जो ₹2,000 की तीन बराबर किस्तों में सीधे बैंक खाते में आती है। आप pmkisan.gov.in या नज़दीकी CSC से पंजीकरण और स्थिति देख सकते हैं। आधार, बैंक खाता और ज़मीन के दस्तावेज़ तैयार रखें, और ध्यान दें कि सभी दस्तावेज़ों में जानकारी एक जैसी हो ताकि भुगतान न रुके।"
        ]
      },
      {
        "heading": "PMFBY — फसल बीमा",
        "paragraphs": [
          "प्रधानमंत्री फसल बीमा योजना (PMFBY) राष्ट्रीय फसल बीमा योजना है। यह सूखा, बाढ़, कीट और रोग जैसी घटनाओं से फसल के नुकसान पर सुरक्षा देती है, जिसमें किसान प्रीमियम का सिर्फ़ एक छोटा, तय हिस्सा देता है और बाकी सरकार वहन करती है। नामांकन आमतौर पर बैंक, बीमा कंपनी या CSC के ज़रिए होता है और हर सीज़न की अंतिम तिथि होती है — देर करने का मतलब है बीमा से चूक जाना, इसलिए जल्दी नामांकन करें।"
        ]
      },
      {
        "heading": "किसान क्रेडिट कार्ड और मृदा स्वास्थ्य कार्ड",
        "paragraphs": [
          "किसान क्रेडिट कार्ड (KCC) किसानों को खेती के लिए रियायती ब्याज पर अल्पकालिक ऋण देता है, ताकि महँगे अनौपचारिक कर्ज़ पर निर्भरता कम हो। अधिकांश बैंकों से आवेदन किया जा सकता है। वहीं मृदा स्वास्थ्य कार्ड योजना आपकी मिट्टी की पोषक स्थिति और फसल-वार खाद की सलाह देती है, जिससे बेकार खाद का खर्च घटता है और पैदावार सुधरती है।"
        ]
      },
      {
        "heading": "आवेदन कैसे करें और चूकें नहीं",
        "paragraphs": [
          "ज़्यादातर योजनाओं के लिए एक ही मुख्य दस्तावेज़ चाहिए: आधार, बैंक खाता और ज़मीन के कागज़। अंतिम तिथियाँ मायने रखती हैं, खासकर बीमा के लिए। ऑनलाइन प्रक्रिया उलझन भरी लगे तो CSC या बैंक शाखा आपकी मदद कर सकती है। योजनाओं के नियम, राशि और तिथियाँ बदलती रहती हैं, इसलिए कदम उठाने से पहले हर योजना के आधिकारिक पोर्टल पर मौजूदा जानकारी की पुष्टि करें।",
          "अगर आप अपनी भाषा में बस पूछना चाहें, तो YieldAI Global बता सकता है कि आप किन योजनाओं के लिए पात्र हो सकते हैं और आवेदन कैसे करें — यह भारत, अमेरिका और कनाडा में लाइव है, मुफ़्त ट्रायल के साथ: [yieldaiglobal.com](https://yieldaiglobal.com)"
        ]
      }
    ],
    "tags": ["सरकारी योजना", "PM-KISAN", "PMFBY", "किसान क्रेडिट कार्ड", "मृदा स्वास्थ्य कार्ड", "hindi"]
  },
  {
    "slug": "fasal-ki-paidawar-kaise-badhayein",
    "lang": "hi",
    "altSlug": "how-to-increase-crop-yield",
    "title": "फसल की पैदावार कैसे बढ़ाएँ: 8 व्यावहारिक कदम",
    "metaTitle": "फसल की पैदावार कैसे बढ़ाएँ — 8 व्यावहारिक कदम (2026)",
    "metaDescription": "फसल की पैदावार बढ़ाने की सरल, कारगर गाइड — मिट्टी जाँच, बीज चयन, दूरी, संतुलित पोषण, पानी और समय पर कीट प्रबंधन।",
    "date": "2026-07-04",
    "excerpt": "ज़्यादा पैदावार किसी एक बड़े बदलाव से नहीं, बल्कि कई छोटी चीज़ों को सही क्रम में करने से आती है। यहाँ आठ व्यावहारिक कदम हैं जो सचमुच फ़र्क़ डालते हैं।",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "मिट्टी जाँच और सही बीज से शुरुआत करें",
        "paragraphs": [
          "जिसे आपने मापा नहीं, उसे सुधार नहीं सकते। मिट्टी जाँच बताती है कि किस पोषक तत्व की कमी है, ताकि आप अंदाज़े से नहीं, ज़रूरत के अनुसार खाद डालें — मृदा स्वास्थ्य कार्ड योजना यह सुविधा देती है। इसके साथ, अपने क्षेत्र, मौसम और मिट्टी के अनुकूल प्रमाणित, अच्छी अंकुरण दर वाला बीज पैदावार की नींव है।"
        ]
      },
      {
        "heading": "सही दूरी और संतुलित पोषण",
        "paragraphs": [
          "बहुत घनी बुआई में पौधे रोशनी, पानी और पोषण के लिए आपस में लड़ते हैं; बहुत कम में ज़मीन बर्बाद होती है। अपनी फसल और किस्म के अनुसार अनुशंसित दूरी अपनाएँ। पोषण में भी संतुलन ज़रूरी है — मिट्टी जाँच के आधार पर नाइट्रोजन, फॉस्फोरस, पोटाश और सूक्ष्म पोषक तत्वों का सही मिश्रण, और एक भारी खुराक के बजाय फसल की अवस्थाओं के अनुसार बँटी हुई खुराक बेहतर काम करती है।"
        ]
      },
      {
        "heading": "पानी, खरपतवार और कीट का समय पर प्रबंधन",
        "paragraphs": [
          "बहुत कम और बहुत ज़्यादा — दोनों पानी पैदावार घटाते हैं। आदत के बजाय फसल की अवस्था के अनुसार सिंचाई करें और जहाँ पानी रुकता है वहाँ निकासी सुधारें। खरपतवार पोषण और पानी चुरा लेते हैं, और [कीट-रोग](/products/cropvision) तेज़ी से नुकसान करते हैं, इसलिए खेत की नियमित निगरानी करें और एकीकृत कीट प्रबंधन (IPM) अपनाएँ। किसी भी रसायन और उसकी मात्रा की पुष्टि हमेशा अपने स्थानीय कृषि अधिकारी से करें।"
        ]
      },
      {
        "heading": "समय पर बुआई और फ़सल की सुरक्षा",
        "paragraphs": [
          "सही समय पर बुआई पैदावार का एक बड़ा, अक्सर अनदेखा किया जाने वाला कारक है। सही खिड़की में बोई गई फसल पूरे मौसम का लाभ लेती है। और जो पैदावार आपने उगाई पर कटाई के बाद खो दी, वह भी नुकसान है — सही परिपक्वता पर कटाई करें, ठीक से सुखाएँ और भंडारण करें।",
          "अगर पूरे मौसम में मिट्टी, समय, पानी और कीटों का हिसाब रखना मुश्किल लगे, तो यही काम YieldAI Global आसान करता है — आपकी जगह के अनुसार व्यावहारिक सलाह, आपकी अपनी भाषा में। यह भारत, अमेरिका और कनाडा में लाइव है, मुफ़्त ट्रायल के साथ: [yieldaiglobal.com](https://yieldaiglobal.com)"
        ]
      }
    ],
    "tags": ["फसल पैदावार", "खेती के टिप्स", "मृदा स्वास्थ्य", "IPM", "उत्पादकता", "hindi"]
  },
  {
    "slug": "kharif-rabi-boai-ka-samay-bharat",
    "lang": "hi",
    "altSlug": "kharif-vs-rabi-when-to-sow-crops-india",
    "title": "खरीफ और रबी: भारत में फसल बोने का समय",
    "metaTitle": "खरीफ बनाम रबी फसलें — भारत में बोने का समय (2026)",
    "metaDescription": "खरीफ, रबी और ज़ायद को आसान भाषा में समझें — किस मौसम में कौन सी फसल, बोने और कटाई का समय, और पूरे साल की योजना कैसे बनाएँ।",
    "date": "2026-07-08",
    "excerpt": "भारत की खेती तीन मौसमों पर चलती है। कौन सी फसल किस मौसम की है — और बोने की सही खिड़की — यही एक फ़ायदेमंद साल की रीढ़ है।",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "तीन कृषि मौसम",
        "paragraphs": [
          "भारतीय कृषि तीन मौसमों के इर्द-गिर्द चलती है: खरीफ (मानसून का मौसम), रबी (सर्दियों का मौसम) और ज़ायद (बीच का छोटा गर्मी का मौसम)। तापमान, दिन की लंबाई और पानी की उपलब्धता के कारण हर मौसम अलग फसलों के लिए उपयुक्त होता है। साल की योजना का मतलब है सही फसल को सही मौसम से मिलाना और उसकी खिड़की में बुआई करना।"
        ]
      },
      {
        "heading": "खरीफ — मानसून की फसलें",
        "paragraphs": [
          "खरीफ फसलें मानसून के आगमन के साथ, लगभग जून से जुलाई में बोई जाती हैं और सितंबर से नवंबर के आसपास काटी जाती हैं। इन्हें गर्म और नम मौसम चाहिए। आम खरीफ फसलों में धान, मक्का, कपास, सोयाबीन, मूँगफली, और बाजरा व ज्वार जैसे मोटे अनाज, तथा अरहर (तुअर) जैसी दालें शामिल हैं।",
          "चूँकि खरीफ काफ़ी हद तक मानसून पर निर्भर है, बारिश के अनुसार बुआई का समय तय करना — और बारिश देर या ज़्यादा होने पर एक योजना रखना — बहुत मायने रखता है।"
        ]
      },
      {
        "heading": "रबी — सर्दियों की फसलें",
        "paragraphs": [
          "रबी फसलें ठंडे महीनों में, लगभग अक्टूबर से दिसंबर में बोई जाती हैं और मार्च से अप्रैल के आसपास काटी जाती हैं। ये ठंडे मौसम में उगती हैं और अक्सर बारिश के बजाय सिंचाई या मिट्टी की बची नमी पर निर्भर करती हैं। आम रबी फसलों में गेहूँ, जौ, सरसों, चना और मटर शामिल हैं। रबी फसलों को समय पर बोना ज़रूरी है ताकि वे वसंत की गर्मी आने से पहले पक जाएँ।"
        ]
      },
      {
        "heading": "ज़ायद और पूरे साल की योजना",
        "paragraphs": [
          "ज़ायद रबी की कटाई और अगली खरीफ के बीच का छोटा मौसम है, लगभग मार्च से जून। लंबे, गर्म दिनों और सिंचाई के साथ किसान तरबूज़, खरबूज़, खीरा और कुछ सब्ज़ियाँ व चारा उगाते हैं — यह उस ज़मीन से कमाई का तरीका है जो वरना खाली रहती।",
          "सबसे अच्छी योजनाएँ मौसमों के आर-पार सोचती हैं — मिट्टी को स्वस्थ रखने के लिए फसल-चक्र, जोखिम बाँटना, और बुआई की तारीख़ों को पानी व मज़दूरी के साथ मिलाना। सटीक खिड़कियाँ हर साल क्षेत्र और मौसम के अनुसार बदलती हैं, इसलिए स्थानीय तारीख़ें अपने कृषि कार्यालय या KVK से पुष्टि करें। [YieldAI Global](/products/yieldai-global) आपकी जगह, फसल और मौजूदा मौसम के अनुसार योजना बनाने में मदद करता है — आपकी अपनी भाषा में। यह भारत, अमेरिका और कनाडा में लाइव है, मुफ़्त ट्रायल के साथ: [yieldaiglobal.com](https://yieldaiglobal.com)"
        ]
      }
    ],
    "tags": ["खरीफ", "रबी", "ज़ायद", "फसल मौसम", "बुआई कैलेंडर", "hindi"]
  },
  {
    "slug": "drip-vs-flood-sinchai",
    "lang": "hi",
    "altSlug": "drip-vs-flood-irrigation",
    "title": "ड्रिप बनाम फ्लड सिंचाई: कौन ज़्यादा पानी और पैसा बचाती है?",
    "metaTitle": "ड्रिप बनाम फ्लड सिंचाई — पानी, लागत और पैदावार (2026)",
    "metaDescription": "ड्रिप और फ्लड सिंचाई की आसान तुलना — पानी की बचत, लागत, पैदावार, खरपतवार और सब्सिडी — ताकि आप अपने खेत के लिए सही तरीका चुन सकें।",
    "date": "2026-07-09",
    "excerpt": "फ्लड सिंचाई शुरू करना सस्ता है पर पानी बर्बाद करती है। ड्रिप में शुरुआती खर्च ज़्यादा है पर यह पानी बचाती है, खरपतवार घटाती है और पैदावार बढ़ा सकती है। फ़ैसला कैसे करें, यहाँ बताया है।",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "दोनों तरीके कैसे काम करते हैं",
        "paragraphs": [
          "फ्लड (सतही) सिंचाई में पूरे खेत या क्यारियों में पानी भर दिया जाता है और वह ज़मीन में समा जाता है। यह सरल और सस्ता है, इसलिए बहुत आम है। ड्रिप सिंचाई में पाइप और एमिटर के ज़रिए पानी धीरे-धीरे सीधे जड़ों तक पहुँचाया जाता है, जिससे वाष्पीकरण या बहाव में बहुत कम पानी बर्बाद होता है।"
        ]
      },
      {
        "heading": "पानी और लागत",
        "paragraphs": [
          "उसी फसल के लिए ड्रिप आमतौर पर फ्लड की तुलना में बहुत कम पानी इस्तेमाल करती है, क्योंकि पानी पूरे खेत के बजाय जड़ों तक जाता है। यह बचत वहाँ सबसे ज़्यादा मायने रखती है जहाँ पानी कम है या पंप करना महँगा है। बदले में शुरुआती लागत ज़्यादा होती है: ड्रिप में पाइप और एमिटर का निवेश चाहिए, जबकि फ्लड में उपकरण न के बराबर।",
          "भारत में सूक्ष्म सिंचाई (per-drop-more-crop) की सरकारी योजनाओं के तहत ड्रिप लगाने की काफ़ी लागत पर सब्सिडी मिल सकती है, जिससे हिसाब काफ़ी बदल जाता है — लागत के आधार पर इसे खारिज करने से पहले यह ज़रूर जाँच लें।"
        ]
      },
      {
        "heading": "पैदावार, खरपतवार और खाद",
        "paragraphs": [
          "क्योंकि ड्रिप पौधों के बीच की ज़मीन को सूखा रखती है, इसका मतलब आमतौर पर कम खरपतवार और कम निराई होता है। यह फर्टिगेशन की सुविधा भी देती है — पानी के साथ खाद सीधे जड़ों तक पहुँचाना — जो पोषक तत्वों का बेहतर उपयोग और पैदावार दोनों सुधार सकता है। फ्लड सिंचाई सब कुछ गीला कर देती है, जिससे खरपतवार बढ़ते हैं और कुछ पोषक तत्व बहाव में चले जाते हैं।"
        ]
      },
      {
        "heading": "कौन सा चुनें?",
        "paragraphs": [
          "अगर पानी कम या महँगा है, ज़मीन ऊबड़-खाबड़ है, या आप ऊँचे मूल्य वाली फसलें उगाते हैं, तो ड्रिप अक्सर अपनी लागत वसूल कर लेती है — खासकर सब्सिडी के साथ। अगर पानी भरपूर और सस्ता है और मुनाफ़ा कम है, तो फिलहाल फ्लड भी ठीक हो सकता है। कई किसान पहले ऊँचे मूल्य वाले खेतों को ड्रिप पर लाते हैं और साबित होने पर बढ़ाते हैं।",
          "सही जवाब आपकी फसल, पानी के स्रोत, ज़मीन और बजट पर निर्भर करता है। [YieldAI Global](/products/yieldai-global) आपकी स्थिति के अनुसार विकल्प तौलने में मदद कर सकता है, आपकी अपनी भाषा में — यह भारत, अमेरिका और कनाडा में लाइव है, मुफ़्त ट्रायल के साथ: yieldaiglobal.com"
        ]
      }
    ],
    "tags": ["ड्रिप सिंचाई", "फ्लड सिंचाई", "पानी की बचत", "सूक्ष्म सिंचाई", "सिंचाई तरीके", "hindi"]
  },
  {
    "slug": "irelands-nitrates-derogation-explained",
    "lang": "en",
    "title": "Ireland's Nitrates Derogation, Explained",
    "metaTitle": "Ireland's Nitrates Derogation Explained (2026)",
    "metaDescription": "What the nitrates derogation actually is, the 220 and 250 kg limits, the 80% grassland rule, and the extension to 31 December 2028.",
    "date": "2026-08-26",
    "excerpt": "The derogation is not a scheme. It is an exception to a limit written into an EU directive from 1991, and in December 2025 it was extended to the end of 2028. Here is what it actually says.",
    "author": "Vijesh Reddy Golamari",
    "tags": [
      "ireland",
      "nitrates",
      "regulation",
      "dairy"
    ],
    "sections": [
      {
        "heading": "It is an exception, not a scheme",
        "paragraphs": [
          "The single most common misunderstanding about the nitrates derogation is that it is a programme you join. It is not. The EU Nitrates Directive (91/676/EEC) sets a baseline in Annex III(2): a maximum of 170 kg of nitrogen per hectare per year from livestock manure. The derogation is a Commission decision permitting Ireland to authorise certain farms to exceed that baseline.",
          "That distinction matters, because it explains why the terms keep moving. A scheme has rules its owner can adjust. A derogation is an exception granted for a fixed period, reviewed against evidence, and renewed or not by the European Commission. Irish farmers are not negotiating with Dublin here so much as living inside a decision taken in Brussels."
        ]
      },
      {
        "heading": "The 80% rule decides who can even apply",
        "paragraphs": [
          "Only grassland farms qualify. Under the terms governing the 2026 to 2028 derogation period, a grassland farm means a holding where at least 80% of the agricultural area available for manure application is grass. Fall below that and the derogation is not available to you, regardless of how the rest of the farm is run.",
          "This is why the derogation is, in practice, a dairy and drystock instrument. It is written around Ireland's grass-based systems, and a holding with substantial tillage simply falls outside the definition."
        ]
      },
      {
        "heading": "220 or 250, and why it depends on your water",
        "paragraphs": [
          "An authorised farm may exceed the 170 kg baseline, but not without limit. The headline figure is 250 kg of nitrogen per hectare per year from livestock manure. Since 1 January 2024, however, that ceiling drops to 220 kg on holdings whose land drains into waters where monitoring showed the required water quality was not being met.",
          "The mechanism for that split came from Article 12 of Commission Implementing Decision (EU) 2022/696, headed “Two-year review”. Irish authorities carried out that review in 2023 and mapped the areas where the limit would fall. So whether you are on 220 or 250 is not a matter of farm type or stocking ambition. It is a matter of which catchment your land drains into.",
          "The practical consequence is that two neighbouring farms running identical systems can sit under different ceilings. If you have not checked which applies to your holding, that is the first thing to establish, not the last."
        ]
      },
      {
        "heading": "The rules you actually farm under",
        "paragraphs": [
          "Ireland's current Nitrates Action Programme is the Sixth. It was given legal effect by the European Union (Good Agricultural Practice for Protection of Waters) Regulations 2025, S.I. No. 588 of 2025, signed on 8 December 2025.",
          "That statutory instrument is where the day-to-day obligations live: closed periods for spreading, storage requirements, buffer distances from watercourses. The derogation decision sets your nitrogen ceiling; the regulations set how and when you may apply what you have."
        ]
      },
      {
        "heading": "Extended to the end of 2028",
        "paragraphs": [
          "Commission Implementing Decision (EU) 2026/67, made on 22 December 2025, amended the 2022 decision and replaced its expiry date. Ireland's derogation now runs to 31 December 2028.",
          "The Commission's own wording is worth reading rather than paraphrasing. It described the step as “appropriate and prudent to exceptionally extend” the derogation. That is not the language of a settled, permanent arrangement, and planning a farm system on the assumption that the derogation is indefinite would be reading it more generously than it reads.",
          "Three years is real breathing room. It is not certainty."
        ]
      },
      {
        "heading": "Where to check, and why we are not your source",
        "paragraphs": [
          "Everything above is drawn from primary sources: the Nitrates Directive itself, Commission Implementing Decisions 2022/696 and 2026/67, and S.I. No. 588 of 2025. We have cited them so you can read them rather than take our word for it.",
          "But nitrates rules are amended, re-mapped and reviewed, and a farm-specific question about your ceiling, your closed periods or your storage is a question for the Department of Agriculture, Food and the Marine or your own advisor. We build software for farmers and we are careful about the line between explaining a rule and advising you on your holding. This article is the former.",
          "We write about Irish farming because it is on our roadmap, not because we sell here. YieldAI Global is not available in Ireland. [Here is what an Irish version would have to get right first](/ireland)."
        ]
      }
    ]
  },
  {
    "slug": "when-to-sow-cereals-in-ireland",
    "lang": "en",
    "title": "When to Sow Cereals in Ireland: The Winter and Spring Windows",
    "metaTitle": "When to Sow Cereals in Ireland — Teagasc Windows",
    "metaDescription": "Winter and spring sowing windows for Irish cereals, seeding rates and the October date Teagasc trials point to, drawn from Teagasc guidance.",
    "date": "2026-08-26",
    "excerpt": "Irish sowing dates are decided by a short autumn window and a wet spring, not by a calendar. Here are the windows Teagasc actually publishes, and the trade-off behind each one.",
    "author": "Vijesh Reddy Golamari",
    "tags": [
      "ireland",
      "tillage",
      "sowing",
      "cereals"
    ],
    "sections": [
      {
        "heading": "The winter window is narrower than it looks",
        "paragraphs": [
          "Teagasc's guidance describes the Irish planting season plainly: winter cereals are generally sown from mid-September to mid-November, and because growth is restricted after mid-November, little or no cereal is sown after that point.",
          "That gives roughly eight weeks. In a country where autumn rainfall decides whether a field travels at all, eight weeks of calendar can become a fortnight of actual opportunity. Planning as though you have the full window is how crops end up in the ground in conditions that cost more in establishment than the later date saves."
        ]
      },
      {
        "heading": "The yield window is narrower still",
        "paragraphs": [
          "Sowing and maximum yield are not the same target. Teagasc's sowing guidance advises that for maximum yield, winter varieties should be sown from the end of September to early November. It adds that with modern varieties sowing can occur up to February, but that is a statement about what the crop tolerates, not about what it rewards.",
          "For winter wheat specifically, Teagasc crops specialist Shay Phelan, writing in Teagasc Daily, put it in terms of a single date: ideally all wheat should be drilled around the 15th of October, because trials at Oak Park have shown that to be, on average, the optimum.",
          "One date is not a rule you can farm to literally. It is a centre of gravity worth planning around and departing from knowingly."
        ]
      },
      {
        "heading": "The early-versus-late trade-off",
        "paragraphs": [
          "Teagasc's winter wheat guidance sets the trade-off out directly. Planting early, in mid to late September, generally ensures good seedbeds and favourable temperatures during germination, which leads to higher establishment.",
          "The cost of early sowing is everything that a longer autumn exposes the crop to: more growth before winter, more aphid pressure and the virus risk that comes with it, more disease carried into spring. The cost of late sowing is poorer establishment and less tillering. Neither end of the window is free, which is why the middle of it is where the guidance sits."
        ]
      },
      {
        "heading": "Seeding rates and plant populations",
        "paragraphs": [
          "Teagasc's Sowing and Varieties guidance gives recommended seeding rates of 140 to 200 kg per hectare for winter wheat, 140 to 190 kg per hectare for winter barley, and 160 to 190 kg per hectare for winter oats, with target plant populations of 250 to 300 plants per square metre.",
          "Those are ranges for a reason. Rate rises with lateness, with a rougher seedbed, and with lower expected establishment. A figure from the bottom of the range sown into a difficult November seedbed is not a saving."
        ]
      },
      {
        "heading": "Spring barley: early to mid-March",
        "paragraphs": [
          "For spring barley, Teagasc Drystock and Tillage Adviser John Galvin has put the window as early to mid-March being the ideal time to sow, with yield potential falling away as the season progresses.",
          "Spring sowing in Ireland is less a decision than a race between the calendar and the ground drying. The agronomy is straightforward; the timing is a judgement about your own fields in a given year, which is why this article gives you the published window rather than a date for your farm."
        ]
      },
      {
        "heading": "A note on what this article is not",
        "paragraphs": [
          "Every figure above traces to published Teagasc guidance, and we have named the source and the specialist where a quote is attributed, so you can go and read it.",
          "What we have deliberately not done is tell you what to apply to a crop. Anything approaching a chemical or dosage decision belongs with your agronomist or Teagasc adviser, who knows your ground. That is the line we hold in our software too: an answer that sounds confident and is wrong can cost a season.",
          "For the avoidance of doubt: YieldAI Global is live in India, the USA and Canada, and not in Ireland. [We keep a page saying exactly that](/ireland) rather than running a waitlist."
        ]
      }
    ]
  },
  {
    "slug": "irish-farm-payment-schemes-explained",
    "lang": "en",
    "title": "Irish Farm Payment Schemes: How BISS and the Area-Based Applications Work",
    "metaTitle": "Irish Farm Payments: How BISS Applications Work",
    "metaDescription": "How Ireland's BISS and area-based scheme applications work — one application, nine schemes, the myagfood.ie portal and the penalty timeline.",
    "date": "2026-08-26",
    "excerpt": "One online application covers nine Irish schemes, and missing its deadline costs 1% per working day until it costs everything. Here is how the machinery actually works.",
    "author": "Vijesh Reddy Golamari",
    "tags": [
      "ireland",
      "cap",
      "schemes",
      "payments"
    ],
    "sections": [
      {
        "heading": "One application, nine schemes",
        "paragraphs": [
          "The thing worth understanding first is that Ireland's area-based supports run through a single online application. One submission through the Department of Agriculture, Food and the Marine covers Basic Income Support for Sustainability and a set of related schemes and measures alongside it.",
          "That design has a consequence people discover the hard way. Because the other supports hang off the same application, a valid BISS application is the gateway: the Eco-Scheme, CRISS, CIS-YF, Protein Aid, ANC, ACRES, SIM and SCEP cannot be paid for a scheme year without one. Miss the application and you have not missed one payment, you have missed the set."
        ]
      },
      {
        "heading": "The penalty timeline is a staircase, not a cliff",
        "paragraphs": [
          "For the 2026 scheme year, the application closed at midnight on 15 May 2026. What happens after a deadline like that is more graduated than most farmers expect.",
          "Under section 15 of the Department's 2026 terms and conditions, a late application is reduced by 1% for each working day it is late. Because the reduction accrues on working days only, a weekend immediately after the deadline carries no reduction. The deduction reached 16% for an application received on 9 June 2026, the final day of the 25-calendar-day late window. From 10 June 2026, the reduction was 100%.",
          "Amendments follow their own timetable. For 2026 a farmer could amend a declared area without penalty until 31 May. Adding parcels or increasing claimed area late carried the same 1% per working day on the parcels concerned. Withdrawing land or reducing a claimed area could be done without penalty much later, provided the Department had not already flagged an issue with the application."
        ]
      },
      {
        "heading": "Where the application actually happens",
        "paragraphs": [
          "Applications go through the Department's own portal at myagfood.ie. Older Departmental material still refers to agfood.ie; that address redirects to the same portal, so either gets you there.",
          "There are two helpdesks and they are not interchangeable, which is a small detail that wastes a lot of people's afternoons. Registration and password problems go to the Agfood Online Services Helpdesk in the Department's Cavan office. Help with completing the application itself goes to the Direct Payments Helpdesk in Portlaoise."
        ]
      },
      {
        "heading": "Letting an advisor apply for you",
        "paragraphs": [
          "A farmer who does not want to file themselves can authorise a Farm Advisory System approved advisor to do it. There are two routes. You can authorise the advisor yourself in your myagfood.ie account under Manage Your Agent Associations. Or an approved advisor can add you as a client, which triggers an SMS to you, and you reply to confirm the association.",
          "Both routes are open up to the scheme closing date. Where authorisation is given on a form instead, as the Department describes for joint ventures, the form has to be in earlier: five working days before the scheme deadline. The list of approved advisors is published by the Department."
        ]
      },
      {
        "heading": "Why the dates in this article will be wrong next year",
        "paragraphs": [
          "Everything above is drawn from the Department's 2026 terms and conditions and its own announcements for that scheme year. The 2026 window opened on 13 February 2026 and closed on 15 May 2026. Those dates are already history at the time of writing.",
          "Irish scheme deadlines are set fresh annually, and the terms are revised during the year as well: the 2026 document reached version 6 by late August. So treat the structure here as durable and the dates as a snapshot. Before you rely on any specific date, check the current year's terms and conditions on gov.ie or ask your advisor.",
          "We publish this because the machinery is genuinely confusing and rarely explained in one place. We are not a substitute for the Department, and on a question about your own holding, they and your advisor are the answer.",
          "YieldAI Global does not operate in Ireland. [What an Irish version would need](/ireland) is set out separately, including why we will not put a launch date on it."
        ]
      }
    ]
  },
  {
    "slug": "canada-farm-support-programs-explained",
    "lang": "en",
    "title": "Canadian Farm Support Programs: How the Business Risk Management Suite Works",
    "metaTitle": "Canada Farm Support Programs 2026 | AgriVision AI",
    "metaDescription": "AgriStability, AgriInvest, AgriInsurance and AgriRecovery under Sustainable CAP: what each one does, and why the delivery agent differs by province.",
    "date": "2026-08-31",
    "excerpt": "The four programs do not share one delivery map. An Alberta producer deals with AFSC for AgriStability and with Ottawa for AgriInvest, and that is the detail people get wrong most often.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "Four cost-shared programs, and one that sits beside them",
        "paragraphs": [
          "Agriculture and Agri-Food Canada files its farm support under a single heading: Business Risk Management. AgriStability pays when a farm's margin falls a long way. AgriInvest is a savings account with a government contribution attached. AgriInsurance is insurance against natural hazards that cause production or asset losses. AgriRecovery is a federal-provincial-territorial disaster relief framework covering the extraordinary costs of recovering from a natural disaster. AAFC's BRM page also lists the Advance Payments Program, a federal loan guarantee giving producers access to low-interest cash advances of up to $1 million.",
          "Those first four are cost-shared programs inside the Sustainable Canadian Agricultural Partnership, the fifth pan-Canadian agriculture policy framework. Sustainable CAP is a $3.5-billion, five-year federal-provincial-territorial agreement running from April 1, 2023 to March 31, 2028, made up of $1 billion in federal-only programs and activities and $2.5 billion in cost-shared ones. Cost-shared programming is funded 60% by the federal government and 40% by the province or territory. Two date conventions are both correct and both in circulation: the agreement covers the 2023-24 to 2027-28 fiscal years, while BRM program years run 2023 through 2027.",
          "The Advance Payments Program is the exception, and it is worth separating out. It is not part of Sustainable CAP. It is legislated under the Agricultural Marketing Programs Act, delivered by producer organisations rather than by AAFC or the provinces, and its interest-free limit is set year by year in regulation. For the 2026 program year, Minister MacDonald announced on April 1, 2026 that the limit would be $250,000 for all non-canola advances. Canola advances carry an additional $250,000 interest free, $500,000 in total, a measure introduced in September 2025 in response to Chinese trade action on canola and applying to the 2025 and 2026 program years; it was given regulatory effect in the Canada Gazette, Part II on April 22, 2026. The rest of this article covers the four Sustainable CAP programs.",
          "Sustainable CAP replaced the Canadian Agricultural Partnership (2018 to 2023), which replaced Growing Forward 2, Growing Forward and the Agricultural Policy Framework before it. The four program names carried over, which is why older material still refers to AgriStability and AgriInvest by the names you know. The terms did not carry over. The AgriStability compensation rate rose from 70% to 80% with the 2023 program year, and AgriInvest gained a new environmental requirement for 2025. Treat pre-2023 articles as reliable on names and unreliable on numbers."
        ]
      },
      {
        "heading": "Every program has its own delivery agent",
        "paragraphs": [
          "The four programs do not share a delivery map. Who administers your AgriStability file tells you nothing about who administers your AgriInvest account, and AgriInsurance is a third arrangement again.",
          "AAFC delivers AgriStability itself in Manitoba, New Brunswick, Nova Scotia, Newfoundland and Labrador, the Northwest Territories and Yukon. It is delivered provincially in British Columbia, Alberta, Saskatchewan, Ontario, Quebec and Prince Edward Island. The administrators are Agriculture Financial Services Corporation in Alberta, Saskatchewan Crop Insurance Corporation in Saskatchewan, Agricorp in Ontario, La Financière agricole du Québec in Quebec, and the PEI Agricultural Insurance Corporation in Prince Edward Island. British Columbia delivers through its Ministry of Agriculture and Food. If you find a page listing British Columbia among the federally delivered jurisdictions, check it against AAFC's main AgriStability page and the BC ministry's own AgriStability material; both put British Columbia in the provincial column.",
          "AgriInvest is close to the inverse. AAFC delivers it in the Northwest Territories, Yukon and every province except Quebec, where it is delivered by La Financière agricole du Québec. So an Alberta producer deals with AFSC for AgriStability and with AAFC for AgriInvest: two files, two administrators, two sets of correspondence. AgriInsurance is different again, delivered provincially in all ten provinces with no federal delivery option, and AAFC lists an administering body for each of the ten provinces and none for the territories. AgriRecovery is neither, because there is no standing program to be delivered at all.",
          "The reason is constitutional rather than administrative. Agriculture is a shared federal-provincial jurisdiction, and provinces designed and ran their own production insurance and income support long before the current framework existed. Successive frameworks aligned the funding and much of the program design; they did not consolidate the counters. The practical consequence is that an answer from a producer in the next province can be accurate for them and wrong for you."
        ]
      },
      {
        "heading": "AgriStability: the percentages, the margin and the fee",
        "paragraphs": [
          "Three figures circulate around AgriStability and they get swapped constantly. They measure different things. The 30% is the trigger. AAFC's wording is that you may receive a payment if your production margin in the current year falls below your historical reference margin by more than 30%. Nothing is paid on the first 30% of a decline. The 80% is the compensation rate: the share of the decline below that trigger which the program actually pays. The AgriStability handbook describes it as covering 80% of the decline beyond the 30%. The 70% you also see quoted is neither of those. It is the support level, and it turns up in the fee formula and in the payment cap, which the handbook sets at the lesser of $3 million or 70% of the difference between the reference margin and the program year margin.",
          "There is a fourth set of numbers on the open web, and it is the one most likely to mislead you. For the 2025 program year only, the compensation rate was raised from 80% to 90% and the maximum payment from $3 million to $6 million. The handbook states the limits in exactly those terms: 2025 program year only. The change was announced in late March 2025 in a federal response package to tariffs imposed by China, which took effect on March 20, 2025 and included 100% tariffs on canola oil, canola meal and peas and 25% tariffs on certain pork, fish and seafood products. For the 2026 program year the handbook figures are 80% and $3 million. If you read 90% and $6 million with no year attached, you are reading about 2025.",
          "The reference margin is an Olympic average: three of the previous five years, dropping the highest and the lowest. A participant without a five-year history uses the average of the three years immediately before the current program year. One historical point is worth knowing because older articles still discuss it — the Reference Margin Limit was removed. Federal, provincial and territorial ministers of agriculture agreed to remove it in March 2021, retroactive to the 2020 program year, and it does not appear in the Sustainable CAP guidelines or handbook.",
          "Beyond that, the margin calculation is genuinely complex. Structural change adjustments, inventory valuation, which expenses count as allowable — this is accountant territory, not something to work out from a web page, and we are not going to pretend otherwise. What is simple is the fee. It is 0.45% of your contribution reference margin multiplied by the 70% support level, which AAFC also expresses as $3.15 for every $1,000 of protected reference margin. The minimum fee is $45, and there is a $55 administrative cost share each year on top of it. Eligibility requires a minimum of six consecutive months of farming activity and a completed production cycle, unless you experienced a disaster, plus an income tax return reporting farming income or loss filed with the Canada Revenue Agency by the final filing deadline for the program year. AAFC excludes government-funded bodies including research stations, universities and colleges; landlords earning rental income for crop or livestock shares; former federal public office holders not in compliance with conflict of interest guidelines; and dissolved corporations."
        ]
      },
      {
        "heading": "Deadlines, late participation and interim payments",
        "paragraphs": [
          "There is a default deadline structure with four steps, and provinces move it. The default: enrol by April 30. Pay the fee by that date, or up to December 31 with a penalty equal to 20% of your fee. File your forms by June 30 of the following year without penalty. September 30 of the following year is the final deadline, and filing past the June 30 date reduces any payment by $500 for each month or part month, to a maximum of $1,500; no penalty applies if no benefit is calculated. Applied to 2026 that would give December 31, 2026 for the fee with penalty, June 30, 2027 for forms without penalty, and September 30, 2027 as the final date, also the date by which your 2026 tax return reporting farming income or loss must be filed with the CRA.",
          "Read that as the default and not as your calendar. For the 2026 program year the enrolment deadline has already moved in more than one province: Alberta extended it to October 1, 2026 for producers hit by extreme moisture, and British Columbia extended it to November 30, 2026 for drought. When enrolment moves, the dates downstream of it move too. Your Enrolment Notice and your own administrator are authoritative on your file, and we have deliberately not printed a province-by-province table here because it would be out of date by the time you read it.",
          "The June 30 and September 30 form deadlines are also recent. They moved earlier starting with the 2024 program year, when AAFC set them at June 30, 2025 and September 30, 2025 for that year's forms, replacing a September deadline that had stood for years. Anyone working from memory, or from an article written before that change, will give you the old later dates.",
          "Two mechanisms get missed in disaster years. Late Participation allows producers to join after the enrolment deadline, but it is discretionary rather than a right. AAFC's wording is that, if agreed to by the federal and provincial governments, a province or territory may allow it where there has been a significant downturn in the farm sector. It is opened event by event and province by province — AAFC published a notice for producers in New Brunswick, Newfoundland and Labrador and Nova Scotia facing extreme dry conditions in the 2025 program year, and further openings followed for Manitoba and Alberta in 2026. A late participant pays $300 up front, being a $245 fee plus the $55 administrative cost share, and the final calculated benefit is reduced by 20%.",
          "The second is interim payments, for producers who need money before the year closes and the file is assessed. The handbook says these are generally paid at 50% of the estimated final benefit, a hedge against overpayments that would later have to be recovered. Generally is the operative word. Since March 2025 provinces and territories have had the option to agree to a higher rate, and for the 2026 program year both Alberta and Manitoba are issuing interim payments at 75%. Ask your own administrator which rate applies to you rather than assuming 50%.",
          "If you are applying for an interim payment you are estimating a year you are still inside, and your own records do that work. In Canada, [YieldAI Global](/products/yieldai-global) shows market prices drawn from Statistics Canada. It does not calculate margins, complete forms or estimate benefits, and it is not a substitute for your accountant or your administrator."
        ]
      },
      {
        "heading": "AgriInvest: the government does not match your deposit",
        "paragraphs": [
          "AgriInvest is usually described as a program where the government matches what you put in. That is not what happens, and the difference matters. You may deposit up to 100% of your Allowable Net Sales into your AgriInvest account, but the government contribution is calculated on 1% of your Allowable Net Sales, not on the size of your deposit. Only that first slice attracts a matching contribution.",
          "The program guidelines cap Allowable Net Sales at $1 million for program purposes, which puts the maximum government deposit at $10,000 a year, being 1% of $1 million. The administrator may require a minimum deposit of $250. The account balance itself is limited to 400% of your average Allowable Net Sales for the program year and the two preceding program years. AgriInvest is cost-shared 60/40 between the federal and provincial or territorial governments, the same split that applies to cost-shared programming under Sustainable CAP generally.",
          "Accounts are held at participating financial institutions and contain two funds. Fund 1 is your own deposits and is not taxable when withdrawn. Fund 2 holds government contributions and interest and is included in income for tax purposes. Withdrawals come out of Fund 2 first and Fund 1 second, so the first money out of the account is the taxable money. You can withdraw at any time. Once AAFC issues a Deposit Notice you have 90 days to make the deposit, with no extension, and only one deposit counts — if you put in less than your maximum matchable amount you cannot top it up later. Filing late reduces the maximum matchable deposit by 5% for each month or part month past the initial deadline, a different kind of penalty from AgriStability's flat $500 a month.",
          "One requirement is new and applies to larger operations. Beginning with the 2025 program year, participants whose average Allowable Net Sales for the three preceding program years, measured before the $1 million limit is applied, reach $1 million or more must have a valid agri-environmental risk assessment in place to receive matching government contributions. An Environmental Farm Plan is the example AAFC gives, alongside options such as 4R designation, Certified Organic and nutrient management plans. You also have to submit a declaration; without it, the matching contribution does not come. Which assessments qualify is agreed between Canada and the provinces and territories and set out in an annex to the guidelines, so the answer for your province is in that annex rather than in a general description like this one."
        ]
      },
      {
        "heading": "AgriInsurance: provincial delivery, and the only producer-paid premium",
        "paragraphs": [
          "AgriInsurance is what most people mean when they say crop insurance or production insurance, and provinces brand it their own way — Saskatchewan Crop Insurance Corporation calls its version the Crop Insurance Program. If you are searching for crop insurance in Canada, AgriInsurance is the program underneath. AAFC describes it as reducing the financial impacts of production losses through affordable insurance protection, covering perils including drought, flood, wind, frost, excessive rain, heat, snow, uncontrolled disease, insect infestations and wildlife. Plans cover field crops such as wheat, corn, oats and barley and horticultural crops such as lettuce, strawberries, carrots and eggplants, and some provinces also cover bee mortality and maple syrup production.",
          "Delivery is provincial in all ten provinces. AAFC states that each province has either a Crown corporation or a branch of its provincial agriculture department responsible for administering the program, and that each province develops and delivers its AgriInsurance plans in accordance with the federal Farm Income Protection Act. In practice that means Crown corporations nearly everywhere — AFSC in Alberta, the Manitoba Agricultural Services Corporation, SCIC in Saskatchewan, Agricorp in Ontario, La Financière agricole du Québec — with British Columbia delivering through the provincial government instead.",
          "AgriInsurance is also the one program in the suite where the producer pays a premium, and its cost share is not the 60/40 that applies elsewhere. Premiums are shared 36% federal, 24% provincial and 40% producer. Administration costs are carried entirely by governments, and those are the ones split 60/40. The distinction is small on paper and useful in practice: AgriStability, AgriInvest and AgriRecovery are cost-shared between two governments, while AgriInsurance is cost-shared between two governments and you."
        ]
      },
      {
        "heading": "AgriRecovery: a framework, not a program you apply to",
        "paragraphs": [
          "AgriRecovery causes confusion in the worst possible week, because there is nothing standing to apply to. AAFC describes it as a disaster relief framework that forms part of the federal-provincial-territorial BRM suite. When an initiative is launched, it gets its own name, its own terms and conditions and its own application process — the 2023 Canada-New Brunswick Potato AgriRecovery Initiative, for instance. You apply to the named initiative, not to AgriRecovery.",
          "An initiative begins with a formal request for an assessment. Those requests are typically made by a province or territory, though the federal government can initiate one. The preliminary assessment applies three tests, all of which must be met: that the event is not recurring, that it is abnormal and unforeseeable, and that extraordinary costs were incurred. Extraordinary costs are the operative idea: costs producers would not incur under normal circumstances but which are necessary to mitigate the impact of the disaster or to resume farming as quickly as possible. AgriRecovery covers those costs over and above what the other BRM programs cover, typically up to 70% of them. It is not a second payment for the same loss.",
          "Initiatives are typically cost-shared 60:40 between the federal and provincial or territorial governments. AAFC's stated goal is to announce an initiative within 120 days of receiving a request. Its Evaluation of AgriRecovery, covering 2015-16 to 2021-22, found that 14 of the 21 initiatives completed in that period, 67%, had 75% of payments issued within 300 days of the assessment process starting; we have not seen a more recent departmental figure. A current example gives the shape of it: on February 10, 2026 the federal and Newfoundland and Labrador governments announced the 2025-26 Canada-Newfoundland and Labrador AgriRecovery Forage Assistance Initiative, helping dairy, beef, sheep and goat producers buy and transport feed after the 2025 drought, with applications closing March 2, 2026."
        ]
      },
      {
        "heading": "Where to check, and what this article is not",
        "paragraphs": [
          "Every figure above is drawn from Agriculture and Agri-Food Canada material: the program pages for each of the four programs, the AgriStability handbook and Sustainable CAP guidelines, the AgriInvest program guidelines, AAFC's Evaluation of AgriRecovery, federal news releases, and the Canada Gazette for the Advance Payments Program limits. We have named the source in the text so you can go and read it rather than take our word for it.",
          "These rules change annually, several of the numbers here are tied to one specific program year on purpose, and the deadlines move by province during the year. Your Enrolment Notice, your provincial administrator and AAFC are authoritative on your own file — AAFC's AgriStability line is 1-866-367-8506 — and a question about your margins or your tax position belongs with your accountant. We explain the rules. We are not your advisor."
        ]
      }
    ],
    "tags": [
      "canada",
      "agristability",
      "agriinvest",
      "agriinsurance",
      "schemes"
    ]
  },
  {
    "slug": "usda-farm-programs-explained",
    "lang": "en",
    "title": "USDA Farm Programs, Explained: Crop Insurance, ARC, PLC, EQIP and CSP",
    "metaTitle": "USDA Farm Programs Explained | AGRIVISION AI",
    "metaDescription": "Federal crop insurance, ARC and PLC, EQIP and CSP, explained from USDA sources — with the 2026 figures, the deadlines, and what the 2025 law changed.",
    "date": "2026-08-31",
    "excerpt": "Three USDA agencies run the main federal farm programs, on three different clocks, under one authority that expires on 30 September 2026. Here is how crop insurance, ARC and PLC, and the NRCS conservation programs work, with the 2026 figures and where each one came from.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "Everything below sits on an authority that expires next month",
        "paragraphs": [
          "The Agriculture Improvement Act of 2018 is still the governing farm bill. USDA's Risk Management Agency states on its [farm bill page](https://www.rma.usda.gov/about-crop-insurance/farm-bill) that the Continuing Appropriations, Agriculture, Legislative Branch, Military Construction and Veterans Affairs, and Extensions Act, 2026, extended it, and that the extension allows authorized programs to continue through Sept. 30, 2026. This post is dated 31 August 2026. That is thirty days.",
          "There is a second law on top of it. P.L. 119-21 was signed on 4 July 2025. USDA uses two names for it: FSA's May 2026 base acre news release calls it the Working Families Tax Cuts Act, FSA's June 2026 letter to landowners calls it the One Big Beautiful Bill Act, and RMA's farm bill page uses the second. They are the same statute, and it rewrote parts of the commodity and crop insurance titles. The landowner letter says it authorized \"the continuation of the Agriculture Risk Coverage (ARC) and Price Loss Coverage (PLC) programs for the 2026 through 2031 crop years.\"",
          "So the picture is layered rather than tidy: some program authority runs to 2031 under the 2025 law, while the farm bill extension underneath it lapses on 30 September 2026. We are not going to guess what Congress does next. We mention it because it is the honest frame for everything that follows, and because it is the reason every number in this post carries a year."
        ]
      },
      {
        "heading": "Federal crop insurance is public money sold by private companies",
        "paragraphs": [
          "You cannot buy a federal crop insurance policy from USDA. RMA puts it flatly in its news releases: \"Crop insurance is sold and delivered solely through private crop insurance agents.\" If you want coverage, you deal with a company, not a government office.",
          "The mechanism behind that is worth knowing, because it explains why the terms are not negotiable. RMA states that the Federal Crop Insurance Corporation \"is a government corporation within USDA authorized to carry out programs of the Federal Crop Insurance Act,\" and that \"The Risk Management Agency acts on behalf of FCIC to administer all Federal crop insurance programs.\" The two sides are joined by the Standard Reinsurance Agreement, which RMA describes as \"a cooperative financial assistance agreement between the Federal Crop Insurance Corporation (FCIC) and an insurance company,\" setting \"the terms under which FCIC provides reinsurance and subsidies on eligible crop insurance contracts sold by the insurance company.\"",
          "The practical consequence for a producer is twofold. The policy language and the premium rate are federal, so shopping between agents does not change the price of the same coverage. And the premium you pay is a share, not the whole cost: USDA's Economic Research Service reports that in 2024, on average, producers were responsible for paying 38 percent of their policy premiums, with the federal government covering the remaining 62 percent."
        ]
      },
      {
        "heading": "The sales closing date is the deadline that matters",
        "paragraphs": [
          "RMA's line is short and it is the single most useful sentence in the program: \"Crop insurance coverage decisions must be made on or before the applicable sales closing date.\" Not the paperwork, not the acreage report, not the premium billing. The coverage decision. After that date, for that crop and that crop year, the decision is made.",
          "In its 5 August 2026 release on fall planted crops, RMA said the next major sales closing dates were 1 September and 30 September, and that coverage purchased then applies to the 2027 crop year. This trips people up every autumn. The crop year is named for the harvest, not the planting, so winter wheat drilled this September is insured under 2027.",
          "Earlier in the year the pattern was the same. RMA's 2 April 2026 release named 1 May, 15 May, 15 July and 31 July as the next major sales closing dates, also for the 2027 crop year. We are not going to tell you which of those governs your crop, because RMA does not either: it stresses in the same release that \"Sales closing dates vary by crop and location,\" and points producers to the Actuarial Information Browser — the 'Dates' tab — and the RMA Map Viewer. The governing date is the one printed in the actuarial documents for that crop in that county. It will not match a neighbour's, and it will not match another crop on the same farm."
        ]
      },
      {
        "heading": "What the 2025 law changed in crop insurance, and when it bites",
        "paragraphs": [
          "RMA's Manager's Bulletin MGR-25-006, issued 20 August 2025, sets out the immediate changes. The premium subsidy rate for the Supplemental Coverage Option went from 65 to 80 percent, and RMA applied the same 80 percent rate to the Enhanced Coverage Option, the Margin Coverage Option, the Hurricane Insurance Protection Wind Index and the Fire Insurance Protection Smoke Index. Whole-Farm Revenue Protection's maximum insurable coverage level rose from 85 to 90 percent. All of it took effect for policies with a sales closing date on or after 1 July 2025.",
          "The same bulletin widened the Beginning Farmer and Rancher definition to cover someone who has not actively operated and managed a farm or ranch for more than 10 crop years, up from 5. The additional premium subsidy rate that goes with it is 15 percent for the first two crop years, 13 percent for the third, 11 percent for the fourth, and 10 percent for the fifth through tenth. Amended BFR applications for 2026 crop year policies were due 30 November 2025.",
          "The change most often reported wrongly is the SCO coverage level. The 2025 law raises SCO's maximum from 86 to 90 percent and allows SCO to be bought regardless of the insured's ARC election with FSA — but not yet. RMA's Product Management Bulletin PM-26-036, dated 30 June 2026, implements it beginning with the 2027 crop year for crops with a 30 June 2026 contract change date, and beginning with the 2028 crop year for crops with earlier contract change dates. That is a genuinely complex rule and we are not going to flatten it: which year it reaches you depends on your crop's contract change date. For anyone reading in 2026, the older restriction still binds. Under the 2025 program year rules, electing ARC made a producer ineligible for SCO on planted acres, and producers enrolling seed cotton base in ARC or PLC were ineligible for STAX on planted cotton acres."
        ]
      },
      {
        "heading": "ARC and PLC pay on base acres, not on what you planted",
        "paragraphs": [
          "FSA's ARC and PLC fact sheet, dated September 2025, lists 22 covered commodities: wheat, oats, barley, corn, grain sorghum, long grain rice, medium and short grain rice, temperate japonica rice, seed cotton, dry peas, lentils, large and small chickpeas, soybeans, peanuts, sunflower seed, canola, flaxseed, mustard seed, rapeseed, safflower, crambe and sesame seed.",
          "Payment acres under ARC-CO and PLC equal 85 percent of the farm's base acres of that covered commodity. And FSA is explicit that the payment does not follow the crop: \"PLC payments are not dependent upon the planting of a covered commodity or planting of the applicable base crop on the farm,\" with the same rule for ARC-CO. ARC-IC is the exception — \"ARC-IC payments are dependent upon the planting of covered commodities on the farm\" — and it pays on 65 percent of the farm's total covered commodity base acres.",
          "FSA gives the ARC-CO calculation plainly: \"The ARC-CO benchmark revenue is the 5-year Olympic average MYA price multiplied by the 5-year Olympic average county yield.\" The guarantee is 90 percent of that benchmark, raised from 86 percent by the 2025 law. ARC-IC is the whole-farm option, using the producer's own certified yields, and its guarantee was not raised with it: the fact sheet states that \"The farm's ARC-IC guarantee equals 86% of the ARC-IC farm's weighted benchmark revenue.\"",
          "There is one number here where two USDA sources disagree, and it is worth naming rather than hiding. ARC payment rates are capped. USDA's Economic Research Service states that for the 2014 through 2024 crop years payment rates could not exceed 10 percent of the ARC benchmark revenue, and that the 2025 law raised the cap to 12 percent for the 2025 through 2031 crop years. FSA's September 2025 fact sheet still prints 10 percent, for both ARC-CO and ARC-IC. The fact sheet is scoped to the 2025 program year and appears not to have been updated for the new cap. If the cap is load-bearing in your election, confirm the figure with FSA rather than with either document."
        ]
      },
      {
        "heading": "The reference price that actually triggers a payment",
        "paragraphs": [
          "PLC pays when a covered commodity's effective price falls below its effective reference price. FSA defines the first half plainly: \"The effective price equals the higher of the national market year average price (MYA) or the national average loan rate for the covered commodity.\" The second half is where people get lost. The effective reference price is \"the lesser of 115% of the reference price or an amount equal to the greater of the reference price or 88% of the average of MYA prices from the 5 preceding years, excluding the highest and lowest price.\" The 88 percent is a change from the previous 85 percent, made by the 2025 law.",
          "The 2026 numbers make the formula legible without writing it out twice. FSA's [2026 effective reference price table](https://www.fsa.usda.gov/sites/default/files/2026-08/2026_ERP_0.pdf), dated 12 August 2026, computes the year's figures from the 2020/21 to 2024/25 market year average prices. Wheat's statutory reference price is $6.35/bu and its effective reference price is also $6.35 — it sits on the statutory floor. Corn's statutory price is $4.10/bu but its effective price is $4.42, because recent market year averages were strong enough to lift it. Soybeans go from $10.00 to $10.71, grain sorghum from $4.40 to $4.67, barley from $5.45 to $5.58, oats from $2.65 to $3.05. Peanuts at $0.3150/lb, long grain rice at $0.1690/lb and seed cotton at $0.4200/lb are all at their statutory floors for 2026. Statutory and effective are different numbers, and for a grower the gap between them decides whether a price triggers a payment at all.",
          "The prices driving all of this come from one place. The source note on FSA's own table names USDA's National Agricultural Statistics Service, \"Agricultural Prices.\" Watching the market year average as it forms through the season is how a grower gets an early read on whether a covered commodity is heading toward a PLC trigger. We build [YieldAI Global](/products/yieldai-global), which is live and paid in the USA at $9.99 a month after a 30-day free trial and takes its US market prices from USDA. It reports prices. It does not file your paperwork, calculate your program payments, or advise you on an election — for those, FSA is the answer."
        ]
      },
      {
        "heading": "Payment limits, income tests and the entity rules",
        "paragraphs": [
          "The ARC and PLC payment limitation is per person or legal entity, and it moves. The statutory limit rose from $125,000, where it stood for program years 2019 through 2024, to $155,000 starting with crop year 2025 under the 2025 law. It is then indexed: FSA's [payment limitations page](https://www.fsa.usda.gov/tools/informational/payment-eligibility/payment-limitations) states that the limitation \"will be adjusted annually for inflation based on the Consumer Price Index for all Urban Consumers published by the Bureau of Labor Statistics.\" The inflation-adjusted table on that page gives the amounts that actually apply: $160,000 for program year 2025 and $164,000 for 2026. The 2027 and 2028 figures are listed as TBD. Read the statutory figure and the applied figure as two different things, because FSA prints them in two different tables.",
          "Peanuts have their own row in that table, at the same amounts. That is the point of the row: the peanut limitation is separate from the limitation on other covered commodities, not a share of it.",
          "The average adjusted gross income limitation for payment eligibility is $900,000. In a news release dated 3 June 2026, FSA said producers \"are exempt from the $900,000 AGI cap for conservation and disaster programs if at least 75% of their average gross income is from farming, ranching, or silviculture, which now includes agri-tourism, direct-to-consumer sales, and certain equipment sales.\" The release does not attach a program year to that exemption, so we are not printing one.",
          "The entity change does carry a date. The same release says that \"Starting with the 2026 crop year, for payment eligibility purposes, FSA will treat applicable limited liability companies (LLCs) and S-Corporations (S-Corps), and other similar entities, as 'pass through entities,'\" so each member who meets the actively engaged in farming criteria helps qualify the entity for expanded payments. Operations structured that way \"must file updated farm operating plans with FSA for program year 2026 by Sept. 15, 2026.\"",
          "Separately, FSA's fact sheet states that a producer is not eligible for ARC or PLC payments if the sum of base acres on all farms in which the producer has an interest is 10 acres or less. That 10-acre rule does not apply to a socially disadvantaged, beginning, veteran or limited resource farmer or rancher."
        ]
      },
      {
        "heading": "Base acres, and the 2026 election nobody has dates for yet",
        "paragraphs": [
          "The 2025 law made up to 30 million additional base acres available nationwide, allocated on a farm's 2019 to 2023 planting history, beginning with the 2026 crop year. Farms keep the base acres they already have; eligible farms may increase them. There is no application: FSA mailed each landowner a Base Allocation Summary from 1 June 2026. If eligible acreage nationwide exceeds the cap, FSA's 26 May 2026 release says \"USDA will apply an across-the-board, prorated reduction to all approved new base acres,\" so an allocation is not a guaranteed figure until it is final.",
          "The window for landowners to respond ran from 1 June 2026 to 31 August 2026 — it closes on the day this post is published. In that window a landowner could correct the acreage history, choose subsequent acreage, opt out of additional base acres, or appeal to the FSA County Committee in writing. FSA's position on silence is direct: \"If FSA is not notified, the Base Allocation Summary will be considered accurate and complete.\" If you did not respond, the summary stands as issued, and what happens next is a question for your county office rather than for us.",
          "The election is still ahead, and its dates are not published. FSA's letter states that \"Every farm must make a new program election for 2026 to be eligible for a payment,\" and in the same letter says \"FSA will announce details pertaining to the 2026 program year election and enrollment period at a later date.\" We are not going to invent a window. For scale, the 2025 election and enrollment period ran 21 January to 15 April 2025 — and for 2025 only, FSA issued the higher of the PLC or ARC-CO payment regardless of the election made, with ARC-IC handled separately. That was a one-year provision. Do not assume it repeats in 2026.",
          "Payments arrive late by design. ARC and PLC payments are issued only after the covered commodity's marketing year ends, and not before 1 October of the year following the program year. FSA says 2025 program year payments will be issued after 1 October 2026. Roughly a year passes between the harvest and the payment."
        ]
      },
      {
        "heading": "EQIP and CSP run on a different clock again",
        "paragraphs": [
          "The two big working-lands conservation programs are run by the Natural Resources Conservation Service. The Economic Research Service describes EQIP as a program that \"provides financial assistance to farmers who adopt or install conservation practices on land in agricultural production\" — nutrient management, conservation tillage, cover crops, filter strips, irrigation management, livestock facilities, fencing. The Conservation Stewardship Program \"supports ongoing and new conservation efforts for producers addressing natural resource concerns on working agricultural and forest lands.\" Both keep the land in production, which is what separates them from land retirement programs such as CRP, which pays annual rent to retire cropland for 10 to 15 years, and ACEP, which uses long-term or permanent easements.",
          "ERS's FY2025 estimates put EQIP at roughly $1.74 billion, CSP at $839 million, CRP at $2.1 billion including technical assistance, ACEP at $375 million and RCPP at $184 million. ERS also notes that in 2025 the law \"repealed unobligated funds originally appropriated in the 2022 Inflation Reduction Act and repurposed them as permanent Farm Bill baseline funding beginning in FY2026,\" which raised budget authority while lowering projected outlays for conservation across FY2025 to FY2034.",
          "One widely repeated figure is wrong for this year. NRCS's National Bulletin 440-26-2, dated 17 December 2025, says of EQIP: \"There are no payment limitations in FY 2026; the authority for EQIP payment limitations expired in 2024.\" It makes the identical statement for CSP. The $450,000 EQIP and $200,000 CSP payment limitations are the 2018 Farm Bill authority, and they still appear on FSA's own payment limitations table — but NRCS's bulletin is the document that governs FY2026. Contract limits are a different thing and they do exist: CSP contract limits for FY2026 are \"$300,000 for individuals and entities and $600,000 for joint operations,\" while contracts obligated before FY2026 stay at $200,000 for a person or legal entity and $400,000 for joint operations and general partnerships. NRCS adds that a participant may not cancel an existing contract solely to apply for a new one under the higher limit.",
          "The same bulletin sets out what changed for FY2026. Because of the lapse in appropriations, NRCS set a single national deadline for the first batching period: \"the first batching period for AMA, CSP, and EQIP now has a national deadline of January 15, 2026,\" which USDA's 15 December 2025 announcement extended to ACEP and to the new Regenerative Pilot Program. For CSP, NRCS is using \"a streamlined single sign-up approach,\" the renewal sign-up option \"will not be offered in FY 2026\" with renewals evaluated in the general sign-up, the existing activity payment \"will be $4,000 per contract each year for new contracts starting in FY 2026,\" bundles and some structural and infrastructure practices are no longer offered, and the unique 'E' enhancement codes are discontinued. Higher CSP payments remain available for cover crops, advanced grazing management and resource conserving crop rotations. For EQIP, there are only two contract types in FY2026 — \"Water Conservation (for applications for Water Management Entities)\" and \"Conventional (for all other EQIP applications)\" — funding for EQIP Conservation Incentive Contracts \"will not be allocated,\" and all FY2026 contracts must be obligated by 30 September 2026. The Regenerative Pilot Program is new and lightly documented; USDA describes it as delivering assistance through EQIP and CSP, and we are not going to describe its terms beyond that.",
          "Mechanically, NRCS is the opposite of RMA. Applications are made on form NRCS-CPA-1200, the Conservation Program Application, and applicants \"may access and submit applications through Farmers.gov\" or work through the NRCS office at their local USDA Service Center. NRCS describes its programs as continuous sign-up, but money is awarded in batches against ranking dates, so a continuous door does not mean a continuous payment. Unfunded applications are deferred rather than rejected, and the bulletin adds a process \"that lets NRCS cancel applications if an unfunded applicant does not respond to the deferral letter within 30 days of receipt of the letter.\" A deferral letter is a document with a clock on it."
        ]
      },
      {
        "heading": "Three agencies, three clock designs, one consequence",
        "paragraphs": [
          "RMA runs on a hard cut-off that varies by crop and county and is published in the actuarial documents. NRCS takes applications continuously and funds them in batches against ranking dates. FSA runs an annual election window plus a scatter of program-specific deadlines. Three different designs, and the same consequence for missing any of them: the choice is settled without you.",
          "As of 31 August 2026, four things are still live. The 1 and 30 September sales closing dates for fall-planted crops, buying 2027 crop year coverage. The 15 September 2026 deadline for LLCs, S-Corps and other qualified pass-through entities to file updated farm operating plans for program year 2026. The 30 September 2026 deadline for NRCS to obligate FY2026 contracts. And the 2026 ARC and PLC election, which FSA says every farm must make to be eligible for a payment, and whose dates had not been announced in any FSA material we could find."
        ]
      },
      {
        "heading": "What this post is, and what it is not",
        "paragraphs": [
          "Every claim above is drawn from a primary source and the agency is named in the text — RMA bulletins and news releases, FSA fact sheets, letters, tables and news releases, NRCS National Bulletin 440-26-2, and USDA's Economic Research Service — and nearly every figure is stamped 2025 or 2026 because most of them move. We explain rules; we are not your advisor. On your own base acres, your election, your policy or your contract, the answer comes from FSA, RMA or NRCS at your local USDA Service Center, or from your own crop insurance agent."
        ]
      }
    ],
    "tags": [
      "usa",
      "usda",
      "crop insurance",
      "farm bill",
      "conservation"
    ]
  },
  {
    "slug": "how-to-check-crop-prices-usa",
    "lang": "en",
    "title": "How to Check Crop and Livestock Prices in the USA",
    "metaTitle": "US Crop Price Check Guide | AGRIVISION AI",
    "metaDescription": "How to read USDA AMS Market News, NASS statistics, CME futures and local elevator bids, and why the reported price is not the price you get paid.",
    "date": "2026-08-31",
    "excerpt": "USDA published more than 250,000 free price reports in the year it counted them, but a reported price is not the price on your cheque. This guide explains where American price data comes from, how each report is built, and what gets deducted before you are paid.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "Two USDA price systems, doing two different jobs",
        "paragraphs": [
          "Most confusion about American price data comes from mixing up two agencies. USDA's Agricultural Marketing Service (AMS) runs Market News, which reports what is being bid and traded right now. USDA's National Agricultural Statistics Service (NASS) runs the Price Program, which surveys what farmers actually received, weeks after the fact. They are not substitutes for each other.",
          "AMS Market News covers cotton and tobacco, dairy and milk products, fruits, vegetables and specialty crops, livestock, meats, poultry, eggs, grain and hay, organic, and local and regional foods. AMS issued its first Market News report in 1915, by telegraph, carrying the price of strawberries at Hammond, Louisiana. USDA's centenary account of the service, published in 2015, put the output at more than 250,000 reports a year; treat that as an order of magnitude rather than a current count. For specialty crops, reporters collect data through direct contacts with sales personnel, suppliers, brokers and buyers, and AMS says the data is made available within hours of collection at no cost.",
          "NASS is on a monthly clock. Its Agricultural Prices publication contains prices received by producers for principal crops, livestock and livestock products, indexes of prices received by producers, feed price ratios, indexes of prices paid by producers, and parity prices. The 2026 release calendar puts it at 3:00 p.m. Eastern on 31 August, 29 September, 30 October, 30 November and 30 December. A NASS state average is a benchmark for judging a season. It is not a bid you can sell into today."
        ]
      },
      {
        "heading": "Where the reports live, and what a daily grain report contains",
        "paragraphs": [
          "AMS publishes through the My Market News portal. Reports were migrated off plain-text files onto the MARS platform and converted from text to PDF; archived notices on the old .txt reports still carry the message that the report will move to the new platform. There is a free public API for general Market News at marsapi.ams.usda.gov, a separate endpoint for Livestock Mandatory Reporting data at mpr.datamart.ams.usda.gov, and an MMN API to Excel user guide for people who do not write code. AMS also publishes a Market News mobile app for Apple and Android devices. USDA reports can be delivered by email through USDA's Economics, Statistics and Market Information System, which moved from Cornell University to the National Agricultural Library and now sits at esmis.nal.usda.gov; the old Cornell address redirects there.",
          "A daily state grain bid report gives you the commodity and class with any quality qualifier, such as US 1 Hard Red Winter Wheat up to 12 per cent protein; a bid range in dollars per bushel; the change in cents against the previous day; the words not available where no bid was collected; an explicit as-of cut-off time; and the reporting office with a named reporter and phone number. The header also carries a publication timestamp and a Preliminary or Final flag, so you can tell exactly when the numbers were fixed.",
          "AMS's own description of the Nebraska Daily Elevator Grain Bids report says it contains price spreads and simple averages for individual grain commodities and may include a basis calculated from the current day or prior day close of a publicly traded futures price, with the exchange identified as the Chicago Board of Trade, the Minneapolis Grain Exchange or the Kansas City Board of Trade. Two of those three names are out of date. CME Group completed its acquisition of the Kansas City Board of Trade on 3 December 2012, and hard red winter wheat futures now list on the Chicago Board of Trade. The Minneapolis Grain Exchange was renamed MIAX Futures Exchange on 1 October 2024, and its hard red spring wheat contract is now branded Minneapolis Hard Red Spring Wheat. The AMS boilerplate has not caught up. The underlying futures prices are the same ones.",
          "Coverage is uneven by design. Most state grain bid reports are daily, but California, Indiana and Maryland are weekly, so check the frequency on the report you want rather than assuming. Minnesota also has a Minneapolis Daily Basis Report, and there is a Louisiana and Texas Gulf Export Bids and Basis report. For statistics rather than daily prices, NASS Quick Stats is the searchable database of NASS estimates, developed from data collected through hundreds of annual sample surveys and the Census of Agriculture, with a free API for direct programmatic access. The Census is taken once every five years and counts even small plots where $1,000 or more of products were raised and sold, or normally would have been sold, during the census year. Data from the 2022 Census was released on 13 February 2024."
        ]
      },
      {
        "heading": "Grain reporting is voluntary. Livestock reporting is not",
        "paragraphs": [
          "AMS grain prices are released under Voluntary Price Reporting authority, in the words of the agency's own report description. Nobody is legally obliged to give AMS a grain bid. That is why the map has holes in it and why some states get a weekly report rather than a daily one.",
          "AMS explains how the data is gathered and filtered. Price information is collected remotely through phone communication, email and company websites, with contact visits made periodically to verify that the information is accurate, unbiased and relevant. Reporters reserve the right to exclude insignificant data sets and outliers that are not consistent with the majority of the trades or bids. A published range has therefore already been cleaned. If you sold at an unusual number, your trade may not be in it.",
          "Livestock, meat and poultry work on the opposite principle. Under Livestock Mandatory Reporting, market information is submitted by reporting packers at required times specified in the LMR Act, a reporter contacts each participating company to verify, exclude or correct the submitted data, and AMS runs on-site compliance verification audits at each reporting plant. Those reports carry volumes, pricing ranges and weighted average prices. There is a live legal caveat that matters in 2026. LMR rests on the Livestock Mandatory Reporting Act of 1999 (7 U.S.C. 1635-1636i), implemented on 2 April 2001 with regulations at 7 CFR part 59. Authority lapsed on 30 September 2005, was re-established in 2006, reauthorised in 2010 and again in 2015 through 30 September 2020, and since that expiry it has been maintained through a series of short extensions rather than new multi-year statutory reauthorisations. The most recent, Public Law 119-37, enacted 12 November 2025, extended LMR authority to 30 September 2026. It may well be extended again, but as of this post's date that is the horizon. We have not seen a primary source stating what would happen to the reports if the authority lapsed, so we will not guess.",
          "One naming note, because older guides route people to a dead agency. GIPSA no longer exists as a standalone agency; grain inspection and the Packers and Stockyards Act functions now sit inside AMS, and the nomenclature changes appear at 84 FR 45645, dated 30 August 2019. As of August 2026 the eCFR titles 7 CFR Chapter VIII as Agricultural Marketing Service (Federal Grain Inspection Service, Fair Trade Practices Program), Department of Agriculture, and 9 CFR Chapter II as Agricultural Marketing Service (Fair Trade Practices Program), Department of Agriculture. Those headings are themselves in motion: USDA announced in 2025 that AMS would break up the Fair Trade Practices Program, moving the Packers and Stockyards Division into the Livestock and Poultry Program and PACA oversight into the Specialty Crops Program. If you want to understand how any individual report is constructed, AMS maintains a public Reference Room holding the LPGMN Reporter's Handbook, the commodity glossaries and report overviews including A User's Guide to USDA LMR Cattle Price Reports."
        ]
      },
      {
        "heading": "Why a price can be missing, and why a quote may be no trade at all",
        "paragraphs": [
          "A blank in a USDA report is not a zero and it is not a mistake. AMS applies a confidentiality guideline known as 3/70/20 to livestock reports under Livestock Mandatory Reporting. For a report to be published, at least three reporting entities must provide data at least 50 per cent of the time over the most recent 60-day period; no single reporting entity may provide more than 70 per cent of the data for a report over that period; and no single reporting entity may be the sole reporting entity for a report more than 20 per cent of the time over that period. Thin markets get suppressed rather than published.",
          "In grain, the reverse problem exists. AMS defines a nominal quotation as a price reported in the absence of a cash trade, where the reporter is confident that the nominal price reflects current market value conditions. A number on the page does not prove a bushel changed hands at it. AMS also defines a bid as willingness to buy at a stated price according to specified conditions, and a spot bid as a price willing to be paid for a commodity available for immediate delivery. A bid is an offer to buy, not a settled transaction. Separately, AMS defines price protection as a price discount subtracted from the bid, usually in effect during volatile market activity, and requires that where protection occurs the bids include the protection discounts and the report carries a statement showing the range of discounts taken for each commodity.",
          "AMS's own reporter guidance is unusually blunt about the limits of its numbers. Much of a daily livestock report is a qualitative scale rather than a figure: supply is described as light, moderate or heavy; demand as very good, good, moderate, light or very light; trade activity as active, moderate, slow or inactive; and price trend as higher, firm, steady, weak or lower. Trends are based on bulk prices for the most part, sales outside the normal range usually have little influence on the trend, and it is generally not necessary to use less than a 25 cent fluctuation. The same guidance states that the prices at which livestock or livestock products are sold are not necessarily their value, and that the terms are not synonymous and must not be used interchangeably."
        ]
      },
      {
        "heading": "Futures on the CME, and the basis that connects them to your elevator",
        "paragraphs": [
          "Chicago Board of Trade corn futures, Globex code ZC, are a 5,000 bushel contract quoted in US cents per bushel, with a minimum price fluctuation of one quarter of one cent per bushel, equal to $12.50 per contract. Corn is deliverable, and trading terminates on the business day prior to the 15th day of the contract month. The contract prices one specific grade. Under the schedule in force from March 2019, #2 Yellow is deliverable at contract price, #1 Yellow carries a premium of 1.5 cents per bushel, and #3 Yellow takes a discount of between 2 and 4 cents per bushel depending on broken corn and foreign material and damage grade factors.",
          "The two cattle contracts differ from each other in a way that is often reported backwards. CME Live Cattle futures (LE) are 40,000 pounds quoted in US cents per pound, minimum tick 0.00025 per pound or $10.00, physically deliverable, with trading terminating at 12:00 noon Central Time on the last business day of the contract month. CME Feeder Cattle futures (GF) are 50,000 pounds, minimum tick $12.50, and are financially settled rather than delivered. Trading terminates on the last Thursday of the contract month, except in November, when it is the Thursday before Thanksgiving. Rather than calling for delivery of physical cattle, Feeder Cattle futures cash settle against the CME Feeder Cattle Index, which the rulebook computes over the seven calendar days ending on the day trading terminates, and which CME Group staff calculate using data provided by USDA. Lean Hog futures likewise cash settle to the CME Lean Hog Index. The futures market therefore loops back into AMS reporting.",
          "One practical warning about free quotes. CME Group's product pages carry the line that market data is delayed by at least 10 minutes, which was still the case when we checked on 31 August 2026. If you are watching a fast market on a free web page, you are watching the past. On the other side of the same relationship, AMS defines the CME settlement price it uses in livestock reporting as the midpoint of the trades or the last valid price in the pit between 12:59:30 and 13:00:00 Central Time, including trades, higher bids, lower offers, or a nominal close based on the prior settle if there was no activity. Read that as legacy wording. CME Group closed its agricultural futures pits in July 2015 and its remaining agricultural options pits in 2021, so the half-minute window is now measured on electronic trading, not on a floor.",
          "AMS defines basis in its own grain glossary as the difference between a spot or cash price and a specified futures price. CME puts the same idea in terms of what causes it: in local markets the futures price is adjusted for variables such as freight, handling, storage and quality, as well as supply and demand factors affecting that particular area, and that difference is the basis, calculated as the cash price minus the futures price. A negative basis is called under, a positive basis is called over, and it can be either. CME's framing of what a hedge actually buys is worth keeping in view: by hedging with futures, buyers and sellers are essentially reducing their price risk by assuming basis risk, which is why CME says it is important that hedgers maintain historical basis records in order to make realistic basis expectations.",
          "The extension services put numbers and ownership on that. University of Wisconsin-Madison Division of Extension, in Joshua Kamps and Steven Okonek's grain marketing material, defines basis as the difference between an offered cash price at a specific location and the price of the next futures contract which will mature, notes that at fall harvest the supply of the commodity is largest so you can expect a larger negative basis, lists storage cost, interest, drying and shrink, handling charges and quality deterioration as components, and cautions that basis trends are predictable but not absolute. University of Nebraska-Lincoln Extension makes the ownership explicit: individual grain buyers determine and adjust their own basis value depending on local supply and demand, grain quality and the cost of doing business, and UNL recommends that producers maintain their own local historic basis data from area elevators. For a regional picture, Kansas State University's AgManager.info publishes grain basis maps and basis deviation maps for corn, soybeans, wheat and grain sorghum, built from cash prices at 500 to 1,000 locations depending on the crop, collected each Wednesday, interpolated with GIS inverse-distance methods and updated monthly; the deviation maps compare current basis with the three-year average for the same week and location."
        ]
      },
      {
        "heading": "The gap between the reported price and your cheque",
        "paragraphs": [
          "Start with what you are comparing. AMS's glossary distinguishes the kinds of buyer you might haul to, and the delivery terms matter as much as the headline number: a to-arrive price includes freight and handling charges delivered to a destination at a specified time, while FOB is the price at place of origin not including transportation charges. Comparing an FOB bid with a to-arrive bid is comparing two different things. For cattle, AMS publishes named local auction reports for feeder and replacement cattle listed by individual sale barn and sale day, Cullman Stockyard in Cullman, Alabama on a Tuesday being one example of the format; the roster of covered states changes, so look up your own state on the AMS index rather than trusting a list in an article. The descriptive comments in those reports map directly to premiums and discounts. AMS notes that cattle marked fleshy or full typically sell at a discount, while gaunt, thin fleshed, fancy, weaned and value added cattle typically sell at a premium, and it defines value added as a combination of source and age verification, all-natural, non-hormone treated, a known vaccination programme, being weaned more than 30 days, or superior genetics. If you sell direct instead, AMS Local and Regional Food Market News publishes farmers market and farmers auction reports for selected locations, national quarterly direct-to-consumer reports for Grass Fed Beef, Grass Fed Lamb and Goat, Pasture Raised Pork and Pasture Raised Poultry, and monthly National Organic Dairy Products Prices; AMS states that coverage is for select locations and that more will be added, so check whether your market is in scope. These same USDA feeds are where [YieldAI Global](/products/yieldai-global) pulls its US market prices from, and every report described in this post is free to anyone who goes to the source.",
          "AMS draws the distinction cleanly for livestock. Base Price is the price paid for livestock before application of any premiums or discounts, expressed in dollars per hundredweight. Net Price is the price paid after application of any premiums or discounts. A discount is defined as an adjustment, expressed in dollars per hundredweight, subtracted from the base price due to weight, quality characteristics, yield characteristics, livestock class, dark cutting, breed, dressing percentage, or other factors. If you sold on a forward contract, AMS defines that as an agreement executed in advance of slaughter under which the base price is established by reference to prices quoted on the Chicago Mercantile Exchange, with a Basis Level being the agreed adjustment to that futures price to establish the final price paid.",
          "In grain, the deductions come from a schedule that is not USDA's. AMS defines a discount as a schedule of deductions from the cash price for a commodity grading lower than the base grade, and a premium as a schedule of allowances over the cash price for grading higher. The schedule belongs to the buyer. What USDA does own is the grade itself. The Official U.S. Standards for corn at 7 CFR 810.404 grade on four factors only: test weight, heat-damaged kernels, total damaged kernels, and broken corn and foreign material. U.S. No. 1 requires a minimum 56.0 lb per bushel test weight with maximums of 0.1 per cent heat-damaged kernels, 3.0 per cent total damaged kernels and 2.0 per cent BCFM. No. 2 is 54.0 lb, 0.2, 5.0 and 3.0. No. 3 is 52.0 lb, 0.5, 7.0 and 4.0. No. 4 is 49.0 lb, 1.0, 10.0 and 5.0. No. 5 is 46.0 lb, 3.0, 15.0 and 7.0.",
          "Moisture is not on that list. It is not a grade-determining factor for corn under the federal standards, and neither the grade table nor the definitions at 7 CFR 810.402 set a moisture limit. Every moisture discount and shrink calculation you are charged therefore comes from the buyer's own schedule, not from USDA. Austin Harthoorn and Cory Walters, writing for the University of Nebraska-Lincoln Center for Agricultural Profitability on 19 September 2022, noted that the moisture level where discounts begin is generally consistent among grain buyers at 15.0 per cent for corn and 13.0 per cent for soybeans, but that the schedules above that level differ: one elevator may charge a flat per bushel fee for each 0.5 moisture point over 15.0 per cent while another charges an increasing fee for each 0.1 point. Shrink converts a wet load into the bushel equivalent had the grain been dried to the base moisture. The numbers vary by elevator, by crop and by year, so ask for the schedule in writing before you haul.",
          "Two further deductions come off before you see the money, and both are set in federal regulation. The beef checkoff at 7 CFR 1260.172 makes each person making payment to a producer for cattle a collecting person who must collect an assessment of one dollar per head of cattle purchased, with a credit of up to 50 cents per head for a producer contributing to a qualified state beef council. The soybean checkoff at 7 CFR 1220.223 is a percentage rather than a flat fee: each first purchaser collects one-half of one per cent of the net market price of the soybeans purchased, with a credit of up to one quarter of one per cent for contributions to a Qualified State Soybean Board. Federal law also sets when the money must arrive. Under 9 CFR 201.43, a packer, market agency or dealer buying livestock for cash must make payment before the close of the next business day following the purchase and transfer of possession, or, for a purchase on a carcass or grade and yield basis, before the close of the first business day following determination of the purchase price. A market agency selling consigned livestock must, before the close of the next business day following the sale, transmit the net proceeds together with a true written account of such sale, showing the number, weight, and price of each kind of animal sold, the date of sale, the commission, yardage, and other lawful charges. That account of sale is where the reported auction price and your cheque are reconciled."
        ]
      },
      {
        "heading": "A note on what this guide is",
        "paragraphs": [
          "We have explained how the USDA reports are built, what the terms in them mean, and where the deductions come from. We are not your marketing adviser and not your broker, and nothing here is a recommendation about when to sell or whether to hedge.",
          "Contract terms, discount and shrink schedules, and checkoff deductions are between you and your buyer. Confirm those with the buyer directly, and confirm anything report-specific with USDA AMS Market News or your land-grant extension service. Programme authorities, release calendars, agency names and grade schedules change, so check the date on anything you rely on, including this."
        ]
      }
    ],
    "tags": [
      "usa",
      "market prices",
      "usda",
      "grain marketing",
      "livestock"
    ]
  },
  {
    "slug": "when-to-seed-canadian-prairies",
    "lang": "en",
    "title": "When to Seed on the Canadian Prairies: Soil Temperature, Frost and the Insurance Deadline",
    "metaTitle": "When to Seed on the Canadian Prairies | AGRIVISION AI",
    "metaDescription": "Soil temperature thresholds, frost risk and the 2026 seeding deadlines MASC, SCIC and AFSC set for Prairie wheat, canola, barley, peas and oats.",
    "date": "2026-08-31",
    "excerpt": "On the Prairies, soil temperature decides when a crop can go in and the crop insurance contract decides when it is too late. Here are the thresholds and the 2026 deadlines that MASC, SCIC and AFSC actually publish.",
    "author": "Vijesh Reddy Golamari",
    "sections": [
      {
        "heading": "Soil temperature is the input, and canola's number is contested",
        "paragraphs": [
          "Manitoba Agriculture's fact sheet Early Seeding Considerations, developed by cereal specialist Anne Kirk and crediting North Dakota State University Extension Service, the Canola Council of Canada and Alberta Agriculture and Forestry, the name that ministry carried when the sheet was written, lists minimum soil temperatures for germination. Wheat, barley, oat and peas are 4C. Canola is 5C. Sunflower is 6C, flax 9C, and corn, edible beans and soybeans 10C. Manitoba Agriculture's web version of the same table lists peas at 5C rather than 4C, which is roughly where the useful precision runs out. These are floors for germination, not targets for a good stand.",
          "How you take the reading matters as much as the number. Manitoba Agriculture advises placing the thermometer at target seeding depth, reading morning and evening to get a daily average, repeating over several days for a multi-day average, and measuring in a number of locations in the field. Alberta Grains, the commission formed on 1 August 2023 when Alberta Barley and the Alberta Wheat Commission amalgamated, says soil temperature can be measured at 5 cm depth in mid-morning and that soil temperature is a better indicator of seedbed conditions than the calendar date. The Canola Council of Canada puts it more bluntly: calendar date is not a reliable indicator of soil temperature, and the variation between years and between fields can be very large.",
          "The floor may be lower than most rotations assume. Manitoba Agriculture reports that research in Alberta and Saskatchewan on ultra-early seeding of spring wheat found the optimal seeding time is when soil temperature is between 2C and 6C, citing Collier and colleagues (2020). Alberta Grains reports from the same body of ultra-early work that seeding at 2C to 4C gave higher yield and yield stability south of Calgary, and equivalent results north of Calgary, compared with seeding at 8C to 10C.",
          "Canola is where the published guidance stops agreeing, and the disagreement is real rather than sloppy. Manitoba Agriculture's fact sheet gives 5C as the germination minimum, while its delayed-seeding guidance points to soil temperature of 8C to 10C as the key factor for fast emergence. Those answer different questions. The Canola Council splits them explicitly: canola can germinate at 2C to 3C but does so slowly and unevenly over a period of weeks, while at 6C close to 100 per cent germination can occur within eight days; below 10C germination and emergence get progressively poorer; cold soils below 5C at seeding and throughout the two weeks following can increase mortality by 10 to 20 per cent; and given the yield benefit of seeding early, 4C to 5C is still a reasonable starting point. It is worth knowing that the eight-day figure rests on an early-1980s laboratory study at AAFC Beaverlodge using petri dishes at controlled temperatures, not on field conditions. The Council's practical advice is to plan to seed at 5C or above with warmer weather in the forecast, while accepting that from the second week of May onward growers may need to take good field conditions regardless of temperature."
        ]
      },
      {
        "heading": "Why wheat goes in before canola",
        "paragraphs": [
          "The order of seeding on most Prairie farms rests on one anatomical fact. Manitoba Agriculture's Spring Frost Damage bulletin states that spring cereals such as wheat, barley and oats are very tolerant of temperatures as low as -6C, because the growing point stays below the soil surface until the five-leaf stage to jointing. Frosted leaves wilt and go necrotic at the tips within one or two days, and normal new growth comes from the growing point in two to three days. Read the condition attached to that -6C figure, not just the number: it holds while the growing point is still underground. Peas have a version of the same protection. Manitoba Agriculture says pea crops are rarely lost to early spring frost because peas can carry two nodes between the seed and the soil surface, and if the main growing point is killed those nodes each send a shoot to the surface, though the plant then matures later. Saskatchewan Pulse Growers gives the mechanism: peas germinate hypogeally, so the growing point stays below the soil surface for some time after germination. It advises seeding peas when the minimum average soil temperature at seeding depth is 5C, at a depth of 3 to 8 cm and a target density of 75 to 85 plants per square metre, and notes that seeding in Saskatchewan usually runs from mid-April to mid-May.",
          "Canola has no equivalent buffer once it has emerged, and the Canola Council's frost guidance is written accordingly: it is about judging damage rather than waiting for regrowth. A light frost of 0C to -2C carries minimal risk of crop damage. A heavy frost that blackens cotyledons or leaves needs four to 10 days before the damage can be judged. Several days of near-freezing weather harden early-seeded canola, but exposure to warm weather can cost hardened plants that tolerance, leaving them, like unhardened later-sown canola, liable to be killed at only -3C to -4C. Rapidly growing seedlings are more susceptible than slow-growing ones. The Council advises that a field with at least 20 to 40 recovering plants per square metre, roughly two to four per square foot, and light weed pressure should not need reseeding.",
          "On which growth stage is more frost tolerant, the two agencies say different amounts rather than opposite things. Manitoba Agriculture's Spring Frost Damage bulletin states that canola at the cotyledon stage is more susceptible to frost damage than plants at the three to four-leaf stage, and attaches no temperature to that statement. The Canola Council says there is no firm evidence that cotyledons are more or less frost tolerant than true leaves: a 1980s research project found cotyledon-stage canola more susceptible, but reported field observations have stated the opposite, because the soil surface acts as a heat sink for the smaller plants. You will also see specific temperatures attached to those stages, commonly -4C at cotyledon and -7C once hardened at three to four leaf. Neither agency publishes those numbers and we could not trace them to a primary source, so we are leaving them out.",
          "The same anatomy shows up in seeding depth. Manitoba Agriculture gives 1.5 to 3 inches for spring wheat, with a target of 23 to 28 plants per square foot; 1.5 to 2 inches for barley at 22 to 25 plants per square foot; 1 to 2 inches for field peas at 7 to 8 plants per square foot; and 0.5 to 1.5 inches for canola, for a final stand of 7 to 11 plants per square foot. Alberta Grains gives an optimum of 1.5 to 2 inches, or 3.75 to 5 cm, for spring cereals. Canola goes into the shallow layer that warms and dries fastest, which is part of why its calendar sits differently from wheat's."
        ]
      },
      {
        "heading": "June 20 is a pivot date, not a universal deadline",
        "paragraphs": [
          "AgriInsurance is a federal, provincial and producer cost-shared programme delivered provincially, under the Farm Income Protection Act, the Canada Production Insurance Regulations and the federal-provincial-territorial framework agreement, according to Agriculture and Agri-Food Canada. Manitoba markets it as AgriInsurance, Saskatchewan as Crop Insurance and Alberta as Annual Crop Insurance. The current framework is the Sustainable Canadian Agricultural Partnership, a $3.5-billion five-year agreement running from 1 April 2023 to 31 March 2028. Both names are still in circulation, and AAFC's own AgriInsurance page still refers to the older Canadian Agricultural Partnership.",
          "June 20 is the structural pivot in all three provinces. In Manitoba it is the seeding deadline for the 2026 crop year for barley, oats and every spring wheat class, Red Spring, Northern Hard Red, Prairie Spring, Hard White Spring, Other Spring and Durum, plus flax, mustard and buckwheat, with no extended seeding period available for those crops. It is not, however, the deadline for everything. For 2026, MASC sets the Argentine canola deadline by insurable area: June 15 in Canola Area 1 and June 10 in Canola Area 2, with extended seeding periods of June 16 to 20 and June 11 to 15 respectively. Polish canola is June 20 with no extended period. Field peas are June 15 for full coverage, with an extended period of June 16 to 20.",
          "The extended seeding period is not free time. MASC gives some crops up to five additional days, and coverage during that period is reduced by 20 per cent to reflect lower yield potential. It is not available in insurance test areas. MASC also divides Manitoba into 15 Risk Areas of similar crop production risk, and premiums, coverage and some seeding deadlines vary by risk area, so the deadline that applies to your land is the one for your area rather than a provincial figure.",
          "The insurance deadline and the agronomic window are different things. Manitoba Agriculture's crop production pages give recommended seeding windows of May 1 to May 31 for spring wheat and for barley, May 1 to June 10 for oats and for Argentine canola, and May 1 to June 20 for Polish canola. For field peas it says yield will usually be reduced if peas are seeded after the third week in May. Manitoba Crop Alliance says spring wheat and barley in Manitoba are usually seeded between May 1 and 30, though farmers have been able to seed in April when conditions are optimal."
        ]
      },
      {
        "heading": "Alberta keeps two kinds of date. Saskatchewan maps its own.",
        "paragraphs": [
          "Alberta's contracts define two separate dates, and they are not interchangeable. In AFSC's 2026 Cereal and Oilseed Crops Insuring Agreement, crops seeded past the Recommended Seeding Date may not be eligible for Quality Loss. Crops seeded after the Seeding Deadline are not insurable at all. One affects what kind of loss you can claim; the other affects whether you have a policy on those acres.",
          "For 2026, AFSC's recommended seeding date is May 31 for all spring wheat classes, HRS, CNHR, CPS, Extra Strong, Western Special Purpose and Soft White Spring, along with durum, canola, oats, flax, canary seed, mixed grain and mustard, and June 5 for barley, spring rye and spring triticale. The seeding deadline for all of those crops is June 20. AFSC's 2026 pulse table lists no recommended seeding date at all, only a seeding deadline: field peas, green, other and yellow, June 1; green and red lentils, desi and kabuli chickpeas and faba beans, May 25; dry beans and soybeans, June 10. There is no recommended date column to look up, so do not go looking for one.",
          "These dates move, and 2026 is the illustration. AFSC's notice of 25 May 2026 extended seeding dates for that growing season only, in the North East, North West and Peace regions, because of above-average April snowfall, a prolonged winter and spring rainfall. The recommended seeding date moved from May 31 to June 5 for Argentine canola and from May 31 to June 15 for Polish canola, and the seeding deadlines for lentils and field peas were extended; AFSC published the full crop-by-crop table with that notice, and it is the table to read rather than any second-hand list. The Land Report deadline of June 20 was left unchanged. That was a regional, single-year decision and is not a standing rule.",
          "Saskatchewan keeps both kinds of date too, but it does not publish a single province-wide recommended date. SCIC's Seeding Date Tool gives the final date on which full liability may be accepted for each insurable crop, mapped by township and rural municipality and built on first fall frost dates, and SCIC says recommended seeding dates vary by crop and location and should be confirmed in the tool. The right question is what your township says, not what the province says. SCIC accepts no liability for crops seeded after June 20, with greenfeed the exception at June 30, and crops remain insurable when seeded between the recommended date and that final deadline. Seeding after the recommended date does not void coverage: SCIC says producers who seed late may have reduced claims only if losses are related to late seeding and are abnormal compared with other producers in the area, and that losses unrelated to seeding date, such as drought, disease, wind and hail, remain insurable causes of loss. SCIC also notes that some crops have absolute final seeding dates earlier than June 20, specifically chickpeas, hemp, soybeans and corn, set out in the terms and conditions."
        ]
      },
      {
        "heading": "The dates that are not about seeding at all",
        "paragraphs": [
          "Coverage starts months before the drill moves. MASC AgriInsurance applications must be made in person at a MASC Service Centre by March 31 of the growing year, with existing contracts renewing automatically, and producers choose 50, 70 or 80 per cent coverage of their probable yield, with a Crop Coverage Plus option available above that. New SCIC customers must complete an application in person at their customer service office before March 31. In Alberta the deadline to apply for, change or cancel Annual Crop Insurance is April 30, and for Perennial Crop Insurance it is the last day of February.",
          "Reporting deadlines then decide whether the coverage you bought pays. MASC excess moisture claims are filed through the Seeded Acreage Report no later than June 22; claims registered June 23 to 30 are charged a late filing fee of 25 per cent of the claim to a maximum of $1,000, and claims after June 30 are not accepted. SCIC requires a Seeded Acreage Report by June 25, and states that a producer does not have any Crop Insurance coverage until acres are reported; it may deny a claim where acres were not reported by that date, and may assess a $60 penalty for a late or missing report. AFSC land reports are due once seeding is finished and no later than June 20. Where a report is late, AFSC may at its discretion accept it if received by June 25 and charge a late filing fee, and failure to file by June 25 is a breach of contract that bars the insured from AFSC insurance programs for the current and following year. AFSC calculates coverage and premium from the land base farmed, not just the land insured.",
          "The money attached to acres you could not seed is set annually, so a figure from an earlier year will not match this one. For 2026, Manitoba's Excess Moisture Insurance covers acres that were ready for seeding on or before June 20 but could not be seeded because of flooding or spring rainfall, at $75 per acre basic with buy-up options of $100 or $125 per acre. The deductible is not fixed: it starts at five per cent, rises by five percentage points for each claim year to a maximum of 40 per cent, and falls five points for each year without a claim. SCIC's Unseeded Acreage feature is included with multi-peril coverage and is not optional, with four levels of $50, $75, $100 and $125 per acre; eligible acres are the acres normally seeded that remain unseeded by June 20 because of excessive spring moisture, less a five per cent deductible applied per quarter. The SCIC unseeded acreage claim deadline is June 25, claims received June 26 to July 2 are reduced by 25 per cent to a maximum of $1,000, and claims after July 2 may be denied.",
          "Alberta structures its year around the same June date. AFSC Stage 1 covers losses on or before June 20 and Stage 2 covers losses notified on or after June 21. Its 2026 Unseeded Acreage Benefit has four payment levels: dryland $57 per acre for direct costs and land preparation, dryland $127 per acre where pre-plant fertilizer is included, irrigated $125 per acre and irrigated $207 per acre, capped at the lesser of $127 dryland or $207 irrigated, or 50 per cent coverage on the client's predominant crops. To qualify, the insured must not have completed seeding on or before June 20 because of excessive moisture and must have initiated a request for inspection on or before June 20, with eligible acres calculated per quarter section less a five per cent deductible of cultivated acres.",
          "Reseeding and establishment sit on the same clock. AFSC's 2026 reseeding benefit is $95 per acre for canola, $45 per acre for barley, oats, mixed grain, canary seed and the spring wheat classes, and $35 per acre for flax; reseeding must be to an elected crop and completed by that crop's seeding deadline, and AFSC must release and confirm the acres before the original crop is taken out of production. SCIC's Establishment Benefit works from plant density in plants per square yard: canola and hybrid canola are treated as not established below 25 and 12 respectively, HRS wheat, durum, barley and oats below 70, and field peas below 25. Establishment claims must be registered by June 20, need an area of five acres or more in one piece, and the non-established acres must exceed the lesser of 10 acres or 10 per cent of the acres seeded."
        ]
      },
      {
        "heading": "What a delay costs, and what the 2026 spring looked like",
        "paragraphs": [
          "Manitoba Agriculture's fact sheet Late Planting Spring Cereals, by Dane Froese, gives the clearest single table, using MASC data from 2012 to 2021 across all Manitoba risk areas. Relative yield as a percentage of maximum, by sowing week, for wheat, barley and oat respectively: 100, 99 and 100 before May; 96, 100 and 96 in the first week of May; 89, 93 and 88 in the second; 81, 82 and 77 in the third; 76, 74 and 66 in the fourth; 69, 64 and 55 in the first week of June; and 62, 53 and 47 in the second. The slope is not linear and it steepens through late May. Alberta Grains reports separately that previous research shows crop yield declining by 0.6 to 1.7 per cent per day of delay after April 30, which works out to a 9 to 25 per cent reduction for a crop planted on May 15 instead of April 30.",
          "Treat those series as period-specific. Manitoba Agriculture's two relative-yield analyses rank crops differently depending on the years used. On MASC data for 2010 to 2019, average relative yields were highest for spring wheat, oat, flax, soybean, field pea and sunflower at the late April seeding date, while barley, grain corn and canola were highest on average when seeded in the first week of May. On a more recent series covering 2015 to 2024, average relative yields were highest for barley, flax, corn, oat, wheat and sunflowers when seeded in late April. If you quote either, quote the years with it.",
          "For canola the penalty has a mechanism behind it. The Canola Council reports that the greatest yield penalties from late planting have typically come from seeding in the last week of May or early June, and that later seeding shortens a variety's days to maturity by roughly half the length of the delay. The reason to be in the ground early is heat at flowering. AAFC research scientist Malcolm Morrison found canola yield loss begins when temperatures during flowering exceed 29.5C, and Nuttall and colleagues found that over 16 Saskatchewan years, 1975 to 1990, raising the average daily July and August maximum from 21C to 24C cut canola yield by 0.4 tonnes per hectare, roughly seven bushels per acre.",
          "The 2026 season shows both the delay and the recovery. The Government of Saskatchewan's crop report for May 19 to 25, 2026, released on 28 May, put provincial seeding progress at 52 per cent against a five-year average of 74 per cent and a 10-year average of 77 per cent, with field peas at 77 per cent, lentils 76, durum 74, spring wheat 52, barley 50, canola 38 and oats 26. Pulses were furthest ahead and oilseeds furthest behind. Statistics Canada reported a record 23.4 million acres of canola seeded nationally in 2026, up 8.4 per cent and past the previous record of 23.0 million acres set in 2017. Total wheat fell 5.9 per cent to 25.3 million acres, barley rose 9.3 per cent to 6.7 million, oats fell 15.1 per cent to 2.5 million and dry peas fell 13.7 per cent to 3.0 million, the lowest since 2011. Those June figures are preliminary: the survey ran from 15 May to 12 June 2026 across about 25,000 farms, final 2026 acreages were scheduled for release on 4 December 2026, and the estimates are subject to revision for two years."
        ]
      },
      {
        "heading": "What software can settle, and what it cannot",
        "paragraphs": [
          "Nothing above is a decision a tool can make for you. Your seeding date is a function of your own soil temperature readings, your seedbed, your risk area or township, and the contract you signed. No software reads your insuring agreement, and none of ours claims to.",
          "What a tool is reasonably good at is the surrounding information. [YieldAI Global](/products/yieldai-global) is live and paid in India, the USA and Canada, at C$9.99 a month in Canada after a 30-day free trial, and its Canadian market prices come from Statistics Canada. It also refuses chemical and dosage questions outright, which covers a fair share of what a farmer wants to ask in the middle of seeding, seed treatment rates among them, and routes those to a local agricultural extension officer instead of guessing. We would rather it say no than be confidently wrong."
        ]
      },
      {
        "heading": "What this article is and is not",
        "paragraphs": [
          "Every date, dollar figure and threshold above is for the 2026 crop year and is set annually, and the AFSC extension of 25 May 2026 shows they can change mid-season. We have named the agency behind each one, so you can go and read the original rather than take ours. We are not your advisor or your insurance agent; confirm the dates and coverage that apply to your own land with your provincial corporation or your own advisor before you act on them."
        ]
      }
    ],
    "tags": [
      "canada",
      "prairies",
      "seeding",
      "crop insurance",
      "canola"
    ]
  }

];

export const postSlugs = posts.map((p) => p.slug);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// Rough reading time from total words.
export function readingMinutes(p: BlogPost): number {
  const words = p.sections.reduce((n, s) => n + s.paragraphs.join(' ').split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 200));
}
