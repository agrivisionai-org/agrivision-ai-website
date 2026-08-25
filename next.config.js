/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    // FarmOS was renamed to FieldOps; keep the indexed URL alive.
    return [
      {
        source: '/products/farmos',
        destination: '/products/fieldops',
        permanent: true,
      },
      // AgriSense was renamed to FieldSense; keep the indexed URL alive.
      {
        source: '/products/agrisense',
        destination: '/products/fieldsense',
        permanent: true,
      },
    ];
  },
  async headers() {
    // Allow cross-origin reads of brand image assets (logo, founder photo) so they
    // can be referenced/loaded by third parties (e.g. Wikimedia Commons).
    return [
      {
        source: '/:file(logo-1024.png|logo-square.png|founder.jpg|opengraph-image.png)',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
      {
        // Everything in /public was served with max-age=0, must-revalidate, so a repeat
        // visitor re-fetched every logo and photo on every page view.
        //
        // Deliberately NOT `immutable` with a one-year max-age: these filenames are not
        // content-hashed the way /_next/static is, so a year-long immutable cache would
        // strand visitors on a stale asset after any replacement — exactly what would have
        // happened when the BuildVaillant logo changed. A week of freshness with a month of
        // stale-while-revalidate serves instantly from cache and still picks up a swap.
        source: '/:file(.*\.(?:png|jpg|jpeg|webp|svg|ico|avif|woff2))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=2592000' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
