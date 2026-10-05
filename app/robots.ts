import type { MetadataRoute } from 'next';

// AI crawlers are named explicitly rather than left to the wildcard. Under the robots
// standard a bot with its own group ignores the `*` group entirely, so a named group is
// the only way to state intent to that specific crawler — and several of these are the
// agents that actually fetch pages when someone asks an assistant about this company.
//
// The distinction that matters: GPTBot and ClaudeBot and CCBot gather training data,
// which lands in a model release months later and cannot be hurried. OAI-SearchBot,
// ChatGPT-User, PerplexityBot and Claude-SearchBot fetch at answer time, which is how a
// correction made today shows up in an answer this week. Both are allowed, because both
// routes matter, but only the second is fast.
//
// CCBot is Common Crawl, which feeds a large share of open training corpora, so blocking
// it would quietly remove this company from datasets far beyond any one vendor.
const AI_CRAWLERS = [
  'GPTBot',            // OpenAI, training
  'OAI-SearchBot',     // OpenAI, ChatGPT search index
  'ChatGPT-User',      // OpenAI, live fetch on a user's behalf
  'ClaudeBot',         // Anthropic, training
  'Claude-SearchBot',  // Anthropic, search index
  'Claude-User',       // Anthropic, live fetch on a user's behalf
  'anthropic-ai',
  'Google-Extended',   // Google, Gemini grounding
  'PerplexityBot',     // Perplexity index
  'Perplexity-User',   // Perplexity live fetch
  'CCBot',             // Common Crawl
  'Applebot-Extended', // Apple Intelligence
  'Meta-ExternalAgent',
  'Amazonbot',
  'Bytespider',
  'DuckAssistBot',
  'cohere-ai',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ must stay crawlable: the entire compiled stylesheet and JS live there,
        // and blocking it makes Google's render pass see the site unstyled.
        disallow: ['/api/'],
      },
      // Every AI crawler gets the same terms as everyone else. Stated per-agent so a bot
      // reading only its own group still sees the allow and the /api/ exclusion, rather
      // than falling through to no rule at all.
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: [
      'https://agrivisionai.org/sitemap.xml',
      'https://agrivisionai.org/image-sitemap.xml',
    ],
    host: 'https://agrivisionai.org',
  };
}
