import type { NextConfig } from "next";

const careCities = ["trichy", "madurai", "thanjavur", "salem", "pudukkottai"];

const nextConfig: NextConfig = {
  async rewrites() {
    return careCities.map((city) => ({
      source: `/home-care-${city}`,
      destination: `/home-care-${city}.html`,
    }));
  },
};

export default nextConfig;
