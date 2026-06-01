import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tianqingxin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-04-06"),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-04-05"),
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date("2026-04-06"),
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date("2026-04-05"),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-04-06"),
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-04-06"),
    },
    {
      url: `${SITE_URL}/blog/junction-box-guide`,
      lastModified: new Date("2026-04-06"),
    },
    {
      url: `${SITE_URL}/blog/cast-iron-vs-stainless`,
      lastModified: new Date("2026-04-06"),
    },
    {
      url: `${SITE_URL}/blog/waterproof-conduit`,
      lastModified: new Date("2026-04-06"),
    },
  ];
}
