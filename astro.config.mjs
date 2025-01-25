import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
/* import node from "@astrojs/node"; */

export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [tailwind(), react()],
  include: ["src", "types"],
});
