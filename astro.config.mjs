// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import tina from "@tinacms/astro/integration";
import { tinaAdminDevRedirect } from "@tinacms/astro/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react(), tina()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "no"],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss(), tinaAdminDevRedirect()],
  },

  adapter: vercel(),
});
