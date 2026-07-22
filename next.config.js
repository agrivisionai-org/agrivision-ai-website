/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
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
