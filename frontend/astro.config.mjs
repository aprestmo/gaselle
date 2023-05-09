import { defineConfig } from "astro/config";
import sanity from "astro-sanity";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [sanity({
    projectId: "4awmkexx",
    dataset: "development",
    apiVersion: "2023-05-09",
    useCdn: true
  })]
});
