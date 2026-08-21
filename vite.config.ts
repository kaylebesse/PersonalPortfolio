import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/PersonalPortfolio/",

  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },

  nitro: false,
});
