import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  return {
    // /reference is the structural study of the layout reference, not part of the site.
    rules: { userAgent: "*", allow: "/", disallow: "/reference" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
