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
    ];
  },
};

module.exports = nextConfig;
