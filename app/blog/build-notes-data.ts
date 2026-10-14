// The AGRIVISION Build Notes archive, republished on our own domain.
//
// Every post here first appeared as a LinkedIn newsletter issue. The wording is the
// wording that was published, including the claims we later found were wrong -- that is
// the point of the series. Where something in a post is no longer true, it carries a
// dated update note at the top and an `updated` field, exactly as the pre-launch posts in
// blog-data.ts do. We do not quietly edit the past; we annotate it.
//
// `originalUrl` drives the attribution line and the direct link back to the issue on
// LinkedIn. These are syndicated copies, not originals, and the page says so.

import type { BlogPost } from './blog-data';

const AUTHOR = 'Vijesh Reddy Golamari';

export const buildNotes: BlogPost[] = [
  {
    slug: 'build-notes-wiring-up-real-farm-data',
    lang: 'en',
    title: 'Build Notes #5: The Unglamorous Week — Wiring Up Real Farm Data',
    metaTitle: 'Wiring Up Real Farm Data | AGRIVISION Build Notes',
    metaDescription:
      'The week we connected AGMARKNET, USDA Market News and Statistics Canada, and hand-curated 33 government schemes because no API exists for them.',
    date: '2026-07-07',
    updated: '2026-10-14',
    excerpt:
      'If the data is wrong, a fluent AI just tells a confident lie — and in farming, a confident lie can cost someone a season. The week spent on the boring layer underneath everything else.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/build-notes-5-unglamorous-week-wiring-up-real-farm-data-golamari-98j7c/',
    sections: [
      {
        heading: 'Update — October 2026: two things in this post have since changed',
        paragraphs: [
          'This was written eight days before YieldAI Global shipped, so every “pre-MVP, no users” line below describes where we were in July 2026, not where we are now. YieldAI Global went live on 15 July 2026 and is available in India, the USA and Canada at [yieldaiglobal.com](https://yieldaiglobal.com).',
          'The more important correction is about the word “live”. This post describes India’s AGMARKNET feed as live, which is accurate — it updates daily. It does not make that claim about the USA or Canada, and it should not be read as doing so: USDA NASS and Statistics Canada publish farm prices monthly. A later edition of this newsletter is entirely about finding that claim stated too broadly in six other files, and then in our system prompt. The original wording stands below.',
        ],
      },
      {
        heading: 'The least glamorous layer of the whole product',
        paragraphs: [
          'AGRIVISION Build Notes — building YieldAI Global in public, pre-MVP, one honest update at a time.',
          'There’s a version of an AI-for-agriculture update that’s all model and magic. This isn’t that one. This week was spent on the least glamorous, most important layer of the whole product: the actual data a farmer’s answer has to be built on. If the data is wrong, a fluent AI just tells a confident lie — and in farming, a confident lie can cost someone a season.',
          'So before any of the clever parts, I wired up the boring, trustworthy foundation. Here’s what that actually looked like.',
        ],
      },
      {
        heading: 'Real prices, from the real sources',
        paragraphs: [
          'YieldAI Global is launching first in three countries — the USA, India, and Canada — and each has its own official price source. So I connected to the government feeds directly: live mandi (market) prices from the government’s AGMARKNET open-data feed in India, market prices from the USDA’s Market News service in the USA, and crop price data from Statistics Canada.',
          'No middlemen, no scraped numbers of unknown origin. If YieldAI tells a farmer a price, it should trace back to an official source — and now it does.',
        ],
      },
      {
        heading: 'The thing nobody tells you: some data just doesn’t have an API',
        paragraphs: [
          'I went in assuming I could plug into a clean feed for everything. That’s not how the real world works.',
          'There is no API anywhere for government farming schemes — the subsidies and support programs farmers most need help navigating. There’s no live feed for India’s Minimum Support Prices either. The honest, industry-standard answer is that this data has to be curated carefully by hand and kept up to date deliberately.',
          'So I did exactly that: 33 government schemes across India, the USA, and Canada — each one’s benefit, eligibility, and how-to-apply checked against the official source — plus a crop reference covering 33 crops with the exact names each government system expects. Tedious? Yes. But it’s the difference between the AI thinking there might be a scheme and here is the real scheme, what you get, and how to apply.',
        ],
      },
      {
        heading: 'What the data taught me',
        paragraphs: [
          'Fresh isn’t always fresh. India’s mandi prices update once a day, in a batch, with gaps for markets that didn’t report. So every price YieldAI shows will carry an “as of” date. A stale price without a date is a trap; a stale price with a date is still useful.',
          'Grounding beats fluency. The whole design principle is that the AI reasons over verified data, it doesn’t invent it. When the data isn’t there, the honest answer is I don’t know — check with your local extension officer, not a guess.',
          'The unglamorous layer is the moat. Anyone can put a chatbot in front of farmers. Clean, sourced, country-specific data that the answers are actually grounded in — that’s the hard, patient part, and it’s the part I’d rather get right first.',
        ],
      },
      {
        heading: 'Where we are, honestly',
        paragraphs: [
          'Still pre-MVP. No users, no revenue. This week didn’t produce a flashy demo — it produced a foundation I trust. That trade is one I’ll make every time at this stage.',
          'Next up: putting the AI brain on top of this data so it can answer a real farmer’s question, in their own language, grounded in these numbers — and being just as honest with you about how that goes.',
          'If you work in agriculture, extension, or agronomy and you can tell me where this data model is naive, I genuinely want to hear it. That’s the whole point of building in the open.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'YieldAI Global', 'market prices', 'government schemes'],
  },

  {
    slug: 'build-notes-yieldai-global-is-live',
    lang: 'en',
    title: 'Build Notes #6: We Shipped — YieldAI Global Is Live',
    metaTitle: 'We Shipped: YieldAI Global Is Live | AGRIVISION Build Notes',
    metaDescription:
      'For five editions I wrote the word “building”. This one is different: YieldAI Global is live in India, the USA and Canada, with a free trial.',
    date: '2026-07-15',
    excerpt:
      'For five editions I’ve written the word “building”. This one is different — and here is exactly what “live” does and does not mean.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/build-notes-6-we-shipped-yieldai-global-live-vijesh-reddy-golamari-76zxc/',
    sections: [
      {
        heading: 'It’s live — and here’s exactly what that means',
        paragraphs: [
          'AGRIVISION Build Notes — building YieldAI Global in public, one honest update at a time.',
          'For five editions I’ve written the word “building.” This one is different: YieldAI Global is live.',
          'YieldAI Global is now available in India, the USA, and Canada, with a free trial at [yieldaiglobal.com](https://yieldaiglobal.com). A farmer can ask a real question — about a crop, today’s market price, the weather, or a government scheme — and get a clear answer in their own language. That’s the whole promise, and it’s finally something you can use, not something I’m describing.',
          'I’m not going to dress up the stage: we’re live, but early. No big user numbers to report, no revenue milestone. What changed is that the thing exists and works.',
        ],
      },
      {
        heading: 'What “live” actually took',
        paragraphs: [
          'Last edition was about the unglamorous data layer — real government prices, curated schemes, exact crop data. This edition is what got built on top of it: the AI brain that reasons over that data and answers in the farmer’s own language.',
          'The hard part was never making it sound smart. It was making it right — and honest when it doesn’t know — because a confident wrong answer can cost someone a season. So the rule is baked in: answer from real data, and for anything like chemical doses, send the farmer to their local agriculture extension officer. No exceptions.',
        ],
      },
      {
        heading: 'I also built the top of the funnel — honestly',
        paragraphs: [
          'A live product nobody can find isn’t worth much. So I spent this stretch making the company findable and useful: I rewrote the whole site to say “live” instead of “building” (and stripped out claims I couldn’t stand behind), and published a set of genuinely useful guides for farmers — which crop for flooded land, how to check today’s mandi price, government schemes explained — in English and Hindi, because most farmers search in their own language.',
          'Marketing, done right, is just being useful before you ask for anything.',
        ],
      },
      {
        heading: 'Where we are, honestly',
        paragraphs: [
          'Live in three countries. A real product with a free trial. A founder-led company still at the very start of its commercial journey. The work now isn’t more features for their own sake — it’s getting this into the hands of the farmers and extension workers it’s for, and listening hard to what breaks.',
          'What’s next: deepening the AI brain, early-warning alerts, and the extension-worker mode nobody else is building. But mostly: real usage, real feedback, real farms.',
          'If you work in agriculture, extension, or agronomy — or you just know a farmer who’d try it — I’d genuinely love for you to put YieldAI in front of them and tell me where it falls short. That is the whole point of building in the open.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'YieldAI Global', 'launch'],
  },

  {
    slug: 'the-week-we-audited-our-own-website',
    lang: 'en',
    title: 'Edition #7 — The week we audited our own website',
    metaTitle: 'The Week We Audited Our Own Website | AGRIVISION Build Notes',
    metaDescription:
      'No new features. We went through agrivisionai.org looking for everything that was no longer true, renamed two products, and fixed a Terms of Service that still said pre-launch.',
    date: '2026-08-04',
    excerpt:
      'No new features this week. Instead we went through our own site looking for everything that was no longer true — and found more than I’d like to admit.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/edition-7-week-we-audited-our-own-website-vijesh-reddy-golamari-9o1hc/',
    sections: [
      {
        heading: 'Two products got renamed',
        paragraphs: [
          'No new features this week. Instead we went through agrivisionai.org looking for everything that was no longer true — and found more than I’d like to admit.',
          'FarmOS became FieldOps; AgriSense became FieldSense. Both original names were already taken in agtech: farmOS is an open-source farm management project that’s been running since around 2014, and AgriSense is a UK pest-monitoring company trading under that name since 1984, plus four current agtech companies using it — one of them building the same IoT sensing product we’d sketched.',
          'Better to find that now, while both are still roadmap concepts, than after they ship. The old URLs redirect.',
        ],
      },
      {
        heading: 'Our own site was underselling the product',
        paragraphs: [
          'The homepage listed disease detection as “on the roadmap” while [CropVision](/products/cropvision) has been live inside YieldAI Global for weeks. Same for weather, yield prediction, and the voice assistant. We’d been so careful not to overclaim during pre-launch that we forgot to stop once things actually shipped.',
          'And the Terms of Service still said we were pre-launch — that no product was generally available — on a site now selling a $9.99/month subscription. Fixed.',
          'Building in public means publishing the corrections too, not just the launches.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'CropVision', 'FieldSense'],
  },

  {
    slug: 'our-website-said-we-had-not-launched',
    lang: 'en',
    title: 'Our own website spent last week telling people we hadn’t launched',
    metaTitle: 'Our Website Said We Hadn’t Launched | AGRIVISION Build Notes',
    metaDescription:
      'YieldAI Global was live in three countries while agrivisionai.org called us pre-launch in six places — three of them on pages carrying a Start Free Trial button.',
    date: '2026-08-07',
    updated: '2026-10-14',
    excerpt:
      'The document a paying customer is bound by asserted that no product was generally available. A stale site is just a slower kind of overclaiming.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/our-own-website-spent-last-week-telling-people-we-hadnt-golamari-gfroc/',
    sections: [
      {
        heading: 'Update — October 2026: one line in this post is the claim we later spent six commits removing',
        paragraphs: [
          'The list below of what is “live today” includes the phrase “live government market prices”. That phrase is wrong, and it is the subject of several later editions of this newsletter.',
          'Only India’s AGMARKNET feed is daily. US prices come from USDA NASS Quick Stats and are monthly; Canadian prices come from Statistics Canada and are monthly. Between September and October 2026 that same sentence was found and removed from the Play Store listing, the in-app copy, the privacy policy, the submission runbook, the website and its meta descriptions, the README — and finally from the AI system prompt, where it had been handed to the model on every request.',
          'The original wording stands below, uncorrected, because a post about a stale site quietly becoming false is not improved by quietly making it true. It is the exhibit.',
        ],
      },
      {
        heading: 'Six places said pre-launch while the product was selling',
        paragraphs: [
          'YieldAI Global has been live in India, the USA and Canada — 30-day trial, then $9.99 a month. Meanwhile agrivisionai.org still called us a pre-launch company in six places, three of them on pages carrying a Start Free Trial button.',
          'Terms of Service was the sharpest case: the document a paying customer is bound by asserted that no product was generally available.',
          'So the week went to making the site true, not to shipping anything new.',
        ],
      },
      {
        heading: 'The homepage contradicted itself inside a single screen',
        paragraphs: [
          'Disease detection was marked roadmap in four places, while CropVision — live, with its own card — does exactly that. Weather was sold as live in the prose and listed as planned in the chips directly below it. The homepage managed to contradict itself inside a single screen: voice assistant under LIVE NOW, and a chip further down reading “multilingual voice, planned.”',
          'Every surface now agrees. Live today: AI crop advice, live government market prices, weather and forecasting, government-scheme guidance, yield prediction, photo disease detection through CropVision, and a voice assistant. FieldSense and FieldOps are roadmap, and the site says that plainly instead of hedging.',
          'Also upgraded to Next.js 16 to clear two security advisories that had no patch-level fix, and deleted three dead components that had drifted into contradicting the live product while sitting unused.',
          'A stale site is just a slower kind of overclaiming.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'YieldAI Global', 'market prices'],
  },

  {
    slug: 'i-wrote-my-own-bio-then-cut-three-claims',
    lang: 'en',
    title: 'I wrote my own bio. Then I cut three claims from it.',
    metaTitle: 'I Cut Three Claims From My Own Bio | AGRIVISION Build Notes',
    metaDescription:
      'Writing your own founder page turns out to be an efficient way to find out what you have been quietly overstating. Three claims came out of mine.',
    date: '2026-08-10',
    excerpt:
      'Writing your own bio turns out to be an efficient way to find out what you have been quietly overstating. Easier to correct a bio than to keep living up to one.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/i-wrote-my-own-bio-cut-three-claims-from-vijesh-reddy-golamari-7wbnc/',
    sections: [
      {
        heading: 'Three claims came out of mine',
        paragraphs: [
          'I put a founder page on agrivisionai.org last week. Writing your own bio turns out to be an efficient way to find out what you have been quietly overstating.',
          'I had described soil intelligence and farm planning as things we ship. Those are FieldSense and FieldOps. Neither is built, and our own product pages said so, on the same site, in plain language.',
          'I had described working with engineers, researchers and designers. AGRIVISION AI is me and two colleagues. Our About page has always said that.',
          'And I claimed a research function the company does not have. Our agronomy comes from ICAR, FAO and state agriculture department sources. Naming the actual sources is a better answer than implying a lab.',
        ],
      },
      {
        heading: 'An identifier that does not resolve makes everything next to it worth less',
        paragraphs: [
          'I also pulled two Wikidata identifiers off the site, one on me and one on the company. Both returned 404. An identifier that does not resolve makes every identity claim sitting next to it worth less, which is the exact opposite of why you add one.',
          'The same week I added a subscribe card for this newsletter, and left the subscriber count off it on purpose. Counts like that convert well and then quietly go stale, and stale copy is what I had just spent the week deleting.',
          'Easier to correct a bio than to keep living up to one.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'FieldSense'],
  },

  {
    slug: 'forty-five-buttons-that-went-nowhere',
    lang: 'en',
    title: 'We audited our own website and found 45 buttons that went nowhere',
    metaTitle: '45 Buttons That Went Nowhere | AGRIVISION Build Notes',
    metaDescription:
      '45 Contact us buttons across 23 pages pointed at an anchor that did not exist. Our robots.txt blocked every stylesheet. And the Hindi preview cards said nothing at all.',
    date: '2026-08-26',
    excerpt:
      'Nobody reported it. Nothing errored. It just silently leaked every person who tried to reach us. If you are building in public too: go click your own buttons.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/build-notes-what-shipped-broke-we-got-wrong-vijesh-reddy-golamari-ctsdc/',
    sections: [
      {
        heading: 'The one that cost us most',
        paragraphs: [
          'I spent a day going through agrivisionai.org line by line, the way a stranger would. Here is the honest list.',
          '45 “Contact us” buttons across 23 pages pointed at /#contact. That anchor does not exist. The contact form had moved to its own page months ago during a restructure, and the links were never updated. Every one of those buttons quietly dropped the visitor at the top of the homepage — including from our highest-intent product page.',
          'Nobody reported it. Nothing errored. It just silently leaked every person who tried to reach us.',
        ],
      },
      {
        heading: 'Google was rendering us unstyled',
        paragraphs: [
          'Our robots.txt blocked /_next/ — which, in a Next.js site, is where 100% of the CSS and JavaScript lives. Text still indexed because our pages are prerendered, but Google’s render pass was seeing a page with no styling at all. We had been shipping a site we thought looked good to a crawler that could not see any of it.',
          'One line.',
        ],
      },
      {
        heading: 'The Hindi cards said nothing',
        paragraphs: [
          'We generate a social preview image per blog post. For the Hindi posts, the Devanagari rendered as non-words: “ड्रिप सिंचाई” came out as “ड्रपि सचिाई” — the vowel mark drawn after its consonant instead of before, the nasal dropped entirely.',
          'Worse, I had checked this. I opened one of the generated images, saw Devanagari glyphs instead of empty boxes, and concluded it worked. But glyphs appearing is not the same as text being shaped correctly, and the one card I checked happened to contain no reordering. I then assumed a missing font, embedded a Devanagari typeface, rebuilt — and the mis-shaping was identical. The image generator simply does not reorder Indic scripts. No font fixes that.',
          'Hindi cards now use the English twin’s title. A readable English card beats a garbled Hindi one, and the page behind the link is still Hindi.',
        ],
      },
      {
        heading: 'What the numbers actually say',
        paragraphs: [
          'I had been assuming we did not rank for our own name — six other companies use “AgriVision AI”. Search Console says otherwise: position 3.7 for our brand, 110 clicks and 2,090 impressions in three months.',
          'The split that matters: the United States gave 75 clicks from 487 impressions, a 15.4% click-through rate. India gave 31 clicks from 1,253 impressions — 2.5%.',
          'India sees us 2.6x more than the US and clicks 6x less. One Hindi post has 436 impressions and 1 click. We are ranking fine in India and losing almost everyone at the search result. That is a headline-and-description problem in Hindi, not a ranking problem, and it is now the most valuable thing on my list.',
        ],
      },
      {
        heading: 'What I took from it',
        paragraphs: [
          'Verification that cannot fail is not verification. I looked at that Hindi image and saw what I expected to see. The check that would have caught it was reading all six, not one.',
          'And the expensive bug was not exotic. It was a link that used to work.',
          'If you are building in public too: go click your own buttons.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'SEO', 'Hindi'],
  },

  {
    slug: 'i-gave-my-own-work-a-97-percent-score',
    lang: 'en',
    title: 'I gave my own work a 97% score. The score could not see the problem.',
    metaTitle: 'A Number That Could Not See the Defect | AGRIVISION Build Notes',
    metaDescription:
      'Our site was drawing its own version of our logo. I fixed it, measured the fix at 97%, and the metric was blind to the exact flaw I was using it to rule out.',
    date: '2026-09-05',
    excerpt:
      'I did the responsible-looking thing — I measured. What I did not do was ask whether the measurement could detect the failure I cared about.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/i-gave-my-own-work-97-score-could-see-problem-vijesh-reddy-golamari-xzdgc/',
    sections: [
      {
        heading: 'Our site was drawing its own leaf',
        paragraphs: [
          'Build Notes — what shipped, what broke, and what we got wrong.',
          'Yesterday I found out our website had been showing a logo that was not our logo. Then I fixed it, measured the fix, published a number, and the number was wrong in a way that took me an embarrassingly long time to notice.',
          'The AGRIVISION AI mark is an outlined leaf with branching veins in a green gradient. Our website header was not using it. Somebody had drawn an approximation directly in code — a narrower leaf, four straight veins instead of branching ones, and greens that appear nowhere in our brand files. It had been on every page of the site. Next to a press kit offering the real file for download.',
          'Worse, we had no vector version of the logo at all. Not one SVG, AI or EPS anywhere. The highest-resolution thing we owned was a 2069-pixel PNG. Any printer asking for vector would have got an apology.',
        ],
      },
      {
        heading: 'The number that lied',
        paragraphs: [
          'So I traced the logo from pixels into real vector paths, then verified it by rendering the trace back and measuring how closely it matched the original. 97% agreement. I wrote that down and moved on.',
          'Then I looked at it at full size and the letterforms were mangled. Notches cut into the tops of the A, the G, the R. Hairline slits running through the strokes. Ragged baselines.',
          'The metric was intersection-over-union — it measures how much area overlaps. Area is dominated by the big solid bodies of the letters. A one-pixel slit through a stem barely moves the number. It is exactly the flaw a person notices instantly and exactly the flaw that measurement was blind to.',
          'I had picked a number that could not see the thing I was claiming to have ruled out, then trusted the number over looking.',
          'Two real causes, once I actually looked. The simplification tolerance was too coarse for letterforms — fine on a leaf’s curves, destructive on a stem edge. And the curve fitting was smoothing through every point including sharp corners, and a corner handed a tangent becomes a notch. Re-traced: 99.21%, and this time I cropped two letters at full magnification before saying anything.',
        ],
      },
      {
        heading: 'The favicon was the entire logo in 96 pixels',
        paragraphs: [
          'Our browser-tab icon was the full lockup — leaf, wordmark and tagline — squeezed into a 96-pixel square. A tab renders that at 16 pixels. Three elements cannot coexist at 16 pixels. It was a green smudge.',
          'I replaced it with just the leaf. The tab did not change.',
          'There was a second icon file I had not found, because I checked one folder, saw nothing, and concluded it did not exist. It was in the next folder along, and the browser was loading it first. My fix was live and completely invisible. Looking in one place and calling it absent is how a bad icon survives the change meant to remove it.',
        ],
      },
      {
        heading: 'We published four guides and fact-checking found 56 problems',
        paragraphs: [
          'We now have guides for the USA and Canada — how to check crop prices, USDA farm programmes, Canadian business risk management, and Prairie seeding windows. Every one was researched against primary agency sources, then independently fact-checked against those same sources rather than against the draft.',
          'That check returned 56 findings. Five were blockers. Four of the five were confidently wrong rather than vague, which is the worse kind.',
          'We had the USDA payment limit wrong for both years — we read the statutory table and missed the inflation-adjusted one that actually applies. We wrote that a producer lacks full crop insurance coverage until acres are reported; Saskatchewan’s actual wording is that you do not have any coverage, and one word turned a total absence of cover into a partial one. We gave an excess moisture deductible as a flat five per cent, when it starts at five and climbs to forty with claim history.',
          'Every one of those would have been published under my name, to farmers, as fact.',
        ],
      },
      {
        heading: 'The page nothing linked to',
        paragraphs: [
          'We have a page that says, plainly, that our product is not available in Ireland yet. Google had found it and refused to index it. The diagnostic said: referring page, none detected.',
          'Nothing on our own site linked to it. Not one link. It existed only in the sitemap, which is the internet equivalent of filing something and never mentioning it again. Meanwhile the three Ireland articles, which are linked from our blog index, got indexed without any help at all.',
        ],
      },
      {
        heading: 'What I took from it',
        paragraphs: [
          'The logo and the favicon were embarrassing but cheap. The fact-check was expensive and worth every minute.',
          'The one that will stay with me is the 97%. I did the responsible-looking thing — I measured. What I did not do was ask whether the measurement could detect the failure I cared about. A number that cannot see the defect is not verification. It is reassurance.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'brand', 'fact-checking'],
  },

  {
    slug: 'the-number-is-exactly-where-it-started',
    lang: 'en',
    title: 'I shipped, submitted and sent all week. The number is exactly where it started.',
    metaTitle: 'Four Days of Data, One Flat Line | AGRIVISION Build Notes',
    metaDescription:
      'Our schema told machines we served 40+ countries. We are live in three. Plus four days of backlink readings that did not move at all, and why that is the report.',
    date: '2026-09-09',
    updated: '2026-10-14',
    excerpt:
      'Everything I did this week was an input. The output — the only number that tells me whether any of it worked — did not move by one. That gap is where people quietly start inflating things.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/i-shipped-submitted-sent-all-week-number-exactly-where-golamari-oasjc/',
    sections: [
      {
        heading: 'Update — October 2026: two numbers below have moved',
        paragraphs: [
          'The schema fix described here set the language count at thirteen. YieldAI Global now supports fourteen languages, and the schema says so.',
          'The backlink figures in this post were also corrected two days after it was published — eight referring domains turned out to include two properties we own ourselves. That correction is its own edition: [We have sixteen backlinks. Not one of them is a recommendation.](/blog/sixteen-backlinks-not-one-a-recommendation)',
        ],
      },
      {
        heading: 'Our own schema was making a claim we cannot back',
        paragraphs: [
          'Build Notes — what shipped, what broke, and what we got wrong.',
          'Four days ago I started measuring our backlinks every morning. I now have four readings. They are identical. Eight referring domains, sixteen links, no movement at all. That is not a failure to report. It is the report.',
          'The structured data on our site described AGRIVISION AI as crop intelligence “for extension workers across 40+ countries.” Present tense. No hedge. We are live in three countries: the USA, India and Canada.',
          'The 40+ number is real, but it is a roadmap number, and everywhere else on the site it is framed that way — “designed to reach,” “long-term vision.” The schema was the one place it read as a statement of current fact.',
          'That is the worst possible place for it. Schema is not decoration. It is the machine-readable version of your claims, and it is exactly what directory moderators check and what AI answer engines quote back when someone asks what your company does. Every other page was honest. The one file written for machines was not.',
        ],
      },
      {
        heading: 'Four measurements, one flat line',
        paragraphs: [
          'Eight referring domains. One of them is our own second property, which search engines discount to roughly nothing. Of the remaining seven, three are auto-generated registry entries that pass almost no value. So the honest read is not eight. It is closer to four domains that mean anything.',
          'I built the daily tracker expecting to watch a number climb. Instead I have four days of proof that nothing is happening yet, which is more useful than it sounds — because now when it does move, I will know the exact day and the exact source, instead of noticing three weeks later and guessing.',
        ],
      },
      {
        heading: 'The first submission lands in four months',
        paragraphs: [
          'I ran a verification pass over backlink opportunities: fifty-six candidates, and every one had to survive an adversarial check that actually loaded the submission page before it counted. Forty-two survived. Fourteen were dead links, closed queues, or quietly paid.',
          'I submitted to the first one. It went into a free review queue with an estimated wait of about four months.',
          'There is a paid tier that buys a one-day review. I did not take it, because paying for speed is fine but it is worth being clear-eyed that the free queue is the actual product for someone at our stage, and four months is the real timeline. Anyone promising you fast links is selling you something else.',
        ],
      },
      {
        heading: 'Fifty introductions, and the wall Ireland put up',
        paragraphs: [
          'I sent fifty connection requests to agritech founders — twenty-five in the USA, seventeen in Canada, eight in Ireland.',
          'Ireland stopped at eight, and not for the reason I assumed. I first thought the pool was thin. It is not. There are real Irish agritech founders building serious things — farm management software on twenty-two thousand farms, on-farm parasite diagnostics, magnetic spray systems.',
          'They are reachable in search. Several are second-degree. But their profiles have creator mode switched on, which replaces the Connect button with Follow entirely. There is no connection request to send.',
          'I had written “Ireland is thin” in my notes and moved on. It was wrong, and it was wrong in a way that would have quietly shaped a market-entry decision. The constraint was a profile setting, not the market.',
        ],
      },
      {
        heading: 'The day the tracker did not run',
        paragraphs: [
          'There are four readings across five days. The seventh is missing, because the job only runs when my machine is on, and that day it was not.',
          'I also had to stop the tracker from lying to me. In testing, I fed it a partially-loaded page — the kind you get when a table has not finished rendering — and it cheerfully recorded “lost six of eight domains” and wrote it to the history as fact. On a site this small, losing six domains overnight is far more likely to be a bad screenshot than a real collapse.',
          'It now refuses to write a reading that looks truncated, and re-reads instead. A monitoring system that records a disaster that did not happen is worse than no monitoring, because you will act on it.',
        ],
      },
      {
        heading: 'What I took from it',
        paragraphs: [
          'Everything I did this week was an input. A schema correction, a directory submission, fifty introductions, a monitoring script. The output — the only number that actually tells me whether any of it worked — did not move by one.',
          'That gap is the normal condition of this work, and I think it is where most people quietly start inflating things. It is very tempting, four days in with a flat line, to report the activity instead of the result. Fifty invitations sent. Forty-two opportunities verified. It sounds like progress and it costs nothing to say.',
          'But the schema claiming forty countries was the same instinct one step further along: a true-ish number, stated in the wrong tense, in the one place that reads it literally.',
          'So: the line is flat. I will tell you the day it moves.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'SEO', 'structured data'],
  },

  {
    slug: 'sixteen-backlinks-not-one-a-recommendation',
    lang: 'en',
    title: 'We have sixteen backlinks. Not one of them is a recommendation.',
    metaTitle: 'Sixteen Backlinks, Zero Recommendations | AGRIVISION Build Notes',
    metaDescription:
      'Ten of our sixteen links come from properties we own. I had been watching a daily number that was, almost entirely, measuring myself.',
    date: '2026-09-09',
    excerpt:
      'A number can be measured correctly, tracked diligently, reported honestly, and still be describing something other than what you think it describes.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/we-have-sixteen-backlinks-one-them-recommendation-golamari-9cxxc/',
    sections: [
      {
        heading: 'The correction',
        paragraphs: [
          'Build Notes — what shipped, what broke, and what we got wrong.',
          'In the last edition I told you we had eight referring domains and that one of them was our own second property. That was wrong. It is two, and between them they account for ten of our sixteen links. I found out because I was fixing an unrelated typo.',
          'Our largest single source of backlinks is buildvaillant.com, with five links. BuildVaillant is a web and product development studio. It is also our own venture — same company, same founder. I had been counting it as an external site linking to us. It is us linking to us.',
          'Add the five from yieldaiglobal.com, our product site, and ten of our sixteen links come from properties we control. The genuine third-party picture is six domains and six links, not the eight and sixteen I reported.',
        ],
      },
      {
        heading: 'The answer was sitting in a file I wrote for machines',
        paragraphs: [
          'I did not discover this by auditing anything. I was correcting a legal-name spelling — our registered entity is AgriVisionAI Inc., and two files still had it as “Agrivisionai Inc” from before the rename.',
          'One of those files was llms.txt, which exists so that language models read our own description of the company instead of inferring one. Reviewing the change, I read a line I wrote myself: “BuildVaillant: a venture of AgriVisionAI Inc.”',
          'I had written that. I had also, separately, been tracking buildvaillant.com every morning as though it were a stranger who had chosen to link to us.',
        ],
      },
      {
        heading: 'Then I looked at the other six',
        paragraphs: [
          'Having got that wrong, I stopped trusting the rest of the number and actually examined it.',
          'Two of the six are github.com and linkedin.com. Both are our own profiles, and both are nofollow by default, which means they explicitly pass no ranking signal. One is wikidata.org. That is an entity record — it helps machines know we exist and who we are, which is genuinely valuable, but it is not a ranking signal and nobody chose to cite us. The remaining three are bebee.com, tracxn.com and dealroom.co. These are auto-generated startup registry entries. No human decided to include us. A crawler found a company and made a row.',
          'So: two properties we own. Two profiles we created. Three registry rows generated automatically. One entity record.',
          'Sixteen links, and not one of them is an instance of a person reading our work and deciding to point at it. We have zero editorial links. I have been watching a daily number that was, almost entirely, measuring myself.',
        ],
      },
      {
        heading: 'This is not actually a disaster',
        paragraphs: [
          'I want to be accurate in both directions, because the temptation after finding something like this is to overcorrect into drama.',
          'This is the normal profile of a four-month-old, unfunded, founder-led company. Nobody has cited us because we have not yet given anyone a reason to. The entity records — Wikidata, Dealroom, Tracxn — are the correct foundation, and having them formed properly is genuinely worth something, because those are the records that downstream aggregators and AI answer engines read first.',
          'We also have the two records I was about to tell you were missing. A Google Business Profile and a Crunchbase entry both exist. I had assumed they did not, which is its own small lesson about writing before checking.',
          'Neither appears anywhere in our referring domains. For the Google Business Profile that is expected — it is a map listing, not a crawlable link. Crunchbase is less expected.',
          'So I went looking for us on Crunchbase. I did not find us. What I found was AgriVision Solutions, AgriVision Equipment Group, AgVision, AgroVision, AGRVISION, Agriview and Agrovisio. There is also an agrivisionai.live, which is a different company entirely.',
          'Our own README carries brand disambiguation as a standing copy rule, because several unrelated organisations share this name. I had been treating that as a writing problem — state the legal entity, state Detroit, state the founder. It is not a writing problem. It is a findability problem. Creating a record is not the same as being findable in it, and in a field of ten near-identical names, a record nobody can surface does close to nothing.',
        ],
      },
      {
        heading: 'The fix was one line. The mistake was not.',
        paragraphs: [
          'Correcting the tracker took one line — adding buildvaillant.com to the list of properties it should exclude. It now reports six third-party domains instead of eight, every morning, automatically.',
          'But the configuration was never really the problem. I built a system to watch a number without first asking what the number contained. I had checked that the measurement was accurate. I had not checked that it was measuring the right thing.',
          'The last edition was about not confusing inputs with outputs — about how easy it is, staring at a flat line, to report your activity instead of your results. This one is worse, and it is the more common failure. I did look at the output. I just never audited what was inside it. A number can be measured correctly, tracked diligently, reported honestly, and still be describing something other than what you think it describes.',
          'The flat line I wrote about is still flat. It is just flatter than I said, and it starts lower.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'SEO', 'measurement'],
  },

  {
    slug: 'forty-two-link-opportunities-two-i-could-do',
    lang: 'en',
    title: 'I verified forty-two link opportunities. I could actually do two of them.',
    metaTitle: 'Forty-Two Opportunities, Two I Could Do | AGRIVISION Build Notes',
    metaDescription:
      'Every one passed verification. What the check never asked was whether a submission could be completed in one sitting. The gate is not effort — it is identity.',
    date: '2026-09-11',
    excerpt:
      'None of those numbers was wrong. Each one was accurate about a slightly different question than the one I was asking it.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/i-verified-forty-two-link-opportunities-could-do-two-them-golamari-dc7zc/',
    sections: [
      {
        heading: 'What “verified” actually meant',
        paragraphs: [
          'Build Notes — what shipped, what broke, and what we got wrong.',
          'Last week I ran a verification pass over backlink opportunities. Fifty-six candidates, each one checked by loading its actual submission page before it counted. Forty-two survived. I wrote that number down as though it were a to-do list. Yesterday I sat down and worked the list. Two submissions went out.',
          'The check I ran asked: does this page exist, is it live, is it free, does it accept submissions from a company like ours. Every one of the forty-two passed that. What it never asked was whether a submission could be completed in one sitting.',
          'Those are different questions, and the gap between them is where the whole afternoon went.',
        ],
      },
      {
        heading: 'The gate is not effort. It is identity.',
        paragraphs: [
          'Working through the free, low-effort tier — the ones I had ranked as do-these-first — here is what actually stopped each one.',
          'Seven required creating an account before the form would accept anything. StartupBlink filled in perfectly, then returned a 403: “Please log in to add or edit an entity.” SaaSHub, AlternativeTo, Digital Agri Hub, Indie Hackers, Hacker News and Qwoted all want a registered identity first, and Hacker News in particular wants an aged one that has commented a few times before it posts anything promotional.',
          'Three sat behind a CAPTCHA. The two university library submissions — Farm Answers, run out of the University of Minnesota for USDA’s beginning-farmer programme, and the Ag Risk library alongside it — both put an “I’m not a robot” checkbox directly above the submit button. Michigan Ag Connection carries the same protection.',
          'One, the FoodTech 500 questionnaire, is a live uncaptcha’d form, but submitting it means consenting to have your contact details shared with the organiser’s partners for business development. Four are not forms at all. They are email pitches to named people — a Michigan tech reporter, Farm Management Canada, a Vermont agriculture official — where the entire value is that a person wrote to a person. One wants a formal press release in Word format and says it will reject anything else.',
          'Every single one of those is the correct decision by the organisation making it. A library curated for beginning farmers should absolutely not accept bulk automated submissions. A journalist should want an email from a founder, not a template. The gates are not obstacles to route around; they are the thing that makes those links worth having in the first place.',
          'But it does mean the forty-two was never a list of tasks. It was a list of appointments.',
        ],
      },
      {
        heading: 'What actually went out',
        paragraphs: [
          'Future Tools, an AI product directory, accepted YieldAI Global. No account, no CAPTCHA, seven fields. Their category list has twenty options and not one of them is agriculture, so a crop-advice platform is now filed under Productivity. That is a fair summary of how the AI tooling world currently thinks about farming.',
          'Launching Next took the submission on the sixth, and put it in a free review queue with an estimated wait of about four months.',
          'Two out of roughly eighteen in the tier I had marked easiest.',
        ],
      },
      {
        heading: 'The number has not moved',
        paragraphs: [
          'Eight referring domains, sixteen links, six of them genuinely third-party. Identical to the first reading on the fifth of September. That is five readings spanning six days — the seventh is missing, because the tracker only runs when my machine is on — and every one of them the same.',
        ],
      },
      {
        heading: 'What I took from it',
        paragraphs: [
          'This is the third edition in a row where the problem was a number describing something adjacent to what I thought it described.',
          'First it was ninety-seven per cent, a measurement that could not see the defect I was using it to rule out. Then it was sixteen backlinks, ten of which turned out to be ours. Now it is forty-two opportunities, of which two were things I could actually do in an afternoon.',
          'None of those numbers was wrong. Each one was accurate about a slightly different question than the one I was asking it. That is a harder failure to catch than being wrong, because the number holds up when you check it — it just does not hold up when you try to use it.',
          'The forty-two is still real. It is just a calendar, not a checklist.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'SEO', 'measurement'],
  },

  {
    slug: 'i-told-nine-applicants-it-was-unpaid',
    lang: 'en',
    title: 'I told nine applicants it was unpaid. My careers page would not say it.',
    metaTitle: 'The Page Was Softer Than the Email | AGRIVISION Build Notes',
    metaDescription:
      'Our careers page said compensation “varies”. Nine applicants had been told in writing it was unpaid. Hedged copy is a cost you transfer to the reader.',
    date: '2026-09-24',
    excerpt:
      'It was the most uncomfortable commit I have written, because the sentence was not false. It was just softer than the truth.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/i-told-nine-applicants-unpaid-my-careers-page-would-say-golamari-4x5uc/',
    sections: [
      {
        heading: 'What it said',
        paragraphs: [
          'Build Notes — what shipped, what broke, and what we got wrong.',
          'Last week I changed one sentence on our careers page. It was the most uncomfortable commit I have written, because the sentence was not false. It was just softer than the truth.',
          'Under a heading that reads “Hours, and being straight about pay”, our careers page said compensation “varies by country and by local employment and university regulations,” and that we would tell you “before you start, not after.”',
          'Read that again. It is carefully constructed. Nothing in it is a lie. It also does not contain the word “unpaid.”',
        ],
      },
      {
        heading: 'What we were actually doing',
        paragraphs: [
          'By that point, nine applicants had been told in writing — by me, in email — that the internship is unpaid, with no stipend. So the page said something softer than the email. Under a heading promising we were being straight about pay.',
          'Two applicants had asked about the stipend directly in their applications. That is what the hedge actually costs. Someone reads the soft version, assumes there might be money, and spends an evening writing an application to find out there isn’t. I made them pay for my optionality.',
        ],
      },
      {
        heading: 'The part people forget: the schema',
        paragraphs: [
          'I changed the visible copy. Then I changed the JobPosting structured data too, and that second fix matters more than it looks.',
          'Structured data is the version directory moderators quote. It is the version AI answer engines quote. When someone asks ChatGPT or Google’s AI Overview “is the AgriVisionAI internship paid,” they are not reading your careers page — they are reading your schema. If your visible copy is honest and your markup is stale, you have not fixed anything. You have just moved the dishonesty somewhere you stopped looking.',
          'We had learned this the hard way once already. Our Organization schema claimed presence in 40+ countries. YieldAI Global is live in three: India, the USA and Canada. Same failure mode, different file.',
        ],
      },
      {
        heading: 'The rule I am keeping',
        paragraphs: [
          'Write the public version last, and only after you have written the private one.',
          'If the email you send a real person is more specific than the page that brought them to you, the page is wrong — even when every individual word on it survives a fact-check. Hedged copy is not caution. It is a cost you are quietly transferring to the person reading it.',
          'We are an early-stage, founder-led company. The honest version of that is not a weaker pitch than the polished one. It is the only one that survives contact with an applicant.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'hiring', 'structured data'],
  },

  {
    slug: 'we-removed-the-claim-from-six-files',
    lang: 'en',
    title: 'We removed the claim from six files. It was in the system prompt.',
    metaTitle: 'It Was in the System Prompt | AGRIVISION Build Notes',
    metaDescription:
      'The same false sentence came out of six files over two weeks. Then we found it in the AI system prompt, where it had been handed to the model on every request.',
    date: '2026-10-14',
    excerpt:
      'A system prompt is documentation that executes. If you ship an AI product, it is the highest-leverage piece of unreviewed prose in your company.',
    author: AUTHOR,
    originalUrl:
      'https://www.linkedin.com/pulse/we-removed-claim-from-six-files-system-prompt-vijesh-reddy-golamari-nytuc/',
    sections: [
      {
        heading: 'Where it was',
        paragraphs: [
          'Build Notes — what shipped, what broke, and what we got wrong.',
          'Over the last two weeks I removed the same false sentence from six files. This week I found it in the system prompt, which means the product had been saying it out loud the whole time.',
          'The sentence is “live market prices”. Only India’s feed is daily. The US figures come from USDA NASS Quick Stats, described in its own source comment as “prices received, MONTHLY”. The Canadian ones come from Statistics Canada table 32-10-0077, “monthly farm prices”. So for two of our three countries, “live” was simply not true.',
          'The store listing, where a Play reviewer reads it beside the app. The in-app copy. The privacy policy. The submission runbook. The website, including the meta descriptions that only Google reads. The opening sentence of our own README. Six places, six commits, each one found by going looking after the last.',
          'Every one of those is prose a human wrote and a human might re-read. That is the thing they had in common, and it is why I thought I was finished.',
        ],
      },
      {
        heading: 'The one that was different',
        paragraphs: [
          'ai_brain.py, line 110, told the model: “The app has live market prices the farmer can open for exact spot figures.” And a clause later: “for live market prices give trend and direction in words”. The header on the reference data said the same thing.',
          'So the claim was not sitting in a file waiting to be read. It was being handed to the model on every single request, as a fact about its own product, in the one voice a farmer has no reason to doubt.',
          'The six before it were things we told people. This one was a thing we told the model to tell people. It generates rather than sits, and that makes it worse than all of them put together.',
          'A farmer in Iowa asking our assistant about prices was not reading stale marketing copy. They were being told, by the product, in direct answer to their question, something we had already corrected everywhere a human would look.',
        ],
      },
      {
        heading: 'The docstring that made the truth look wrong',
        paragraphs: [
          'This is the part I did not expect, and it is the reason the fix got a commit of its own.',
          'MarketPricesView carried a docstring saying the US and Canadian endpoints “return an honest ‘not configured’ payload until wired”. They were wired. USDA and StatCan had both been connected. The docstring described a product that no longer existed.',
          'Now follow what that does. Suppose someone had done the right thing and checked the store listing’s claim against the code. They would have found a docstring saying those countries return nothing at all, concluded the listing was wrong in the other direction, and “corrected” a true statement into a false one.',
          'Rotten prose does not only mislead the person reading it. It makes the accurate prose look like the error. A stale comment is worse than no comment, because no comment sends you to the code and a stale one sends you to a confident wrong answer.',
        ],
      },
      {
        heading: 'What actually changed',
        paragraphs: [
          'Nothing, in the code. The model is told something true instead of something false. That changes what it says and nothing about what it does.',
          'Verified the only way worth verifying: 754 backend tests pass, manage.py check is clean, and grep for “live market price” across the API returns nothing at all. The last one is the only check that would have caught this in the first place, and it did not exist until this week.',
        ],
      },
      {
        heading: 'The rule I am keeping',
        paragraphs: [
          'Grep your own claims. Not once, across everything, including the files you do not think of as writing.',
          'A system prompt is documentation that executes. A docstring is a promise about code that no test enforces. Neither is covered by your test suite, both are read as authoritative, and the only thing standing between them and a farmer is somebody remembering to look.',
          'An earlier edition of this newsletter called out a number accurate about a different question than the one I was asking it. Another was a careers page saying less than the email I had already sent. This is the same failure in its most awkward form: I corrected the claim in public six times while the product kept making it in private.',
          'If you ship an AI product, the system prompt is the highest-leverage piece of unreviewed prose in your company. Mine said something false about my own product for long enough that I corrected it everywhere else first.',
        ],
      },
    ],
    tags: ['Build Notes', 'founder essay', 'AGRIVISION AI', 'YieldAI Global', 'market prices', 'AI safety'],
  },
];
