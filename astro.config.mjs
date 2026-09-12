// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: dominio definitivo. Necesario para el sitemap y las URL canónicas.
  // Debe coincidir con `site.url` de src/config.ts.
  site: "https://solotu.ia",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
