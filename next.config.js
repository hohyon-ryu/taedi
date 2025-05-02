/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Explicitly configure i18n with only default locale to prevent redirects
  i18n: {
    locales: ['default'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  // Experimental features
  experimental: {
    // ppr: true, // Disabled as it requires Next.js canary version
    optimizePackageImports: ["react-icons"],
  },
  // The swcMinify option has been removed as it's enabled by default in Next.js 15.3.1
};

module.exports = nextConfig;
