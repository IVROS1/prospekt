/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    '@anthropic-ai/sdk',
    'apify-client',
    'stripe',
  ],
};

module.exports = nextConfig;
