import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: { port: 3003 },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx()]
});