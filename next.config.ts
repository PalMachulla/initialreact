// next.config.js
/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in dev mode
  // You might want to add more configurations here later
  // e.g., runtimeCaching strategies
});

const nextConfig = {
  reactStrictMode: true,
  // Add other Next.js configurations here if needed
  images: {
    // Allow images from Replicate's CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery",
        port: "",
        pathname: "/**", // Allow all paths from replicate.delivery
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
