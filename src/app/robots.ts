import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ameer.dev";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/ui-preview", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
