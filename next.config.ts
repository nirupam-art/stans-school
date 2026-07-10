import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.16",
    "192.168.1.16:3000",
  ],
};

export default nextConfig;