import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://elitehomecare.in/sitemap.xml",
    host: "https://elitehomecare.in",
  };
}
