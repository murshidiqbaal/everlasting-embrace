import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  vite: {
    base: "/",
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
});
