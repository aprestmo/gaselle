import { useSanityClient, groq } from "astro-sanity";

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}
