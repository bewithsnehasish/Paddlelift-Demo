import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // Allow all paths from this domain
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**", // Allow all paths from this domain
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**", // Allow all paths from this domain
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Allow all paths from this domain
      },
      {
        protocol: "https",
        hostname: "iili.io",
        pathname: "/**", // Allow all paths from this domain
      },
      {
        protocol: "https",
        hostname: "lottie.host",
        pathname: "/**", // Allow all paths from this domain
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
