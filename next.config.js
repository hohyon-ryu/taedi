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
  // Experimental features
  experimental: {
    // ppr: true, // Disabled as it requires Next.js canary version
    optimizePackageImports: ["react-icons"],
  },
  // The swcMinify option has been removed as it's enabled by default in Next.js 15.3.1
};

module.exports = nextConfig;
