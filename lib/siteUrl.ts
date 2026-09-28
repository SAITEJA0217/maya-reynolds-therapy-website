/** Canonical origin: NEXT_PUBLIC_SITE_URL, else Vercel's production domain, else local dev. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const absoluteUrl = (path: string) => new URL(path, `${siteUrl}/`).toString();
