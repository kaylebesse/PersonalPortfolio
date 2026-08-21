import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // GitHub Pages repository base path
  base: "/PersonalPortfolio/",

  // GitHub Pages is static hosting, so disable Nitro/server output
  nitro: false,

  tanstackStart: {
    // Generate a static version of the site
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
});
