import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/admin/login",
        destination:
          process.env.CRM_LOGIN_URL ||
          "https://elite-home-care-ultimate-7eiyjga36-muthaiya00007-1225s-projects.vercel.app/#login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

