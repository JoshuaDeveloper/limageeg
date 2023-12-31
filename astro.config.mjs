import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://creativetimofficial.github.io",
  base: "/astro-ecommerce",
  output: "server",
  adapter: vercel(),
});
