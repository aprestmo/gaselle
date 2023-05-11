import { defineConfig } from "astro/config";
import sanity from "astro-sanity";
import netlify from "@astrojs/netlify/functions";
import node from "@astrojs/node";
import astroAws from "@astro-aws/adapter";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: "4awmkexx",
      dataset: "development",
      apiVersion: "2023-05-09",
      useCdn: true,
    }),
    // compress()
  ],
});
