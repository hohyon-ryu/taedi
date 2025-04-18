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
  // Using the optimized compiler
  swcMinify: true,
};

module.exports = nextConfig;
