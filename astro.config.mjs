import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from '@astrojs/node';

export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: 'standalone', // or 'middleware' depending on your use case
  }),
  integrations: [tailwind(), react()],
});
