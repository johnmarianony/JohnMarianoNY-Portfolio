import type { NextConfig } from "next";
import { caseRedirects } from "./src/content/cases";

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(caseRedirects).map(([from, to]) => ({
      source: `/work/${from}`,
      destination: `/work/${to}`,
      permanent: true,
    }));
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
