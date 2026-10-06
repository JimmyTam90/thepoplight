import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/legal/privacy", "/legal/terms", "/legal/affiliate-disclosure", "/legal/contact"].map((p) => ({ url: `https://primegearlab.com${p}` })); }
