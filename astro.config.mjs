// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import tina from "@tinacms/astro/integration";
import { tinaAdminDevRedirect } from "@tinacms/astro/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://spillingweb.com",
  output: "server",
  integrations: [react(), tina(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "no"],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss(), tinaAdminDevRedirect()],
    build: {
      cssMinify: "esbuild",
    },
  },
  adapter: vercel({
    imageService: true,
  }),
  image: {
    domains: ["assets.tina.io"],
  },
});
