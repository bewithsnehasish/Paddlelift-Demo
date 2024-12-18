import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
