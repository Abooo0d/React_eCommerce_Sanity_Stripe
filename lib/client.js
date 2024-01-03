import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "r8ewtp4b",
  dataset: "production",
  apiVersionL: "2024-01-02",
  useCdn: true,
  token: process.env.SANITY_API_KEY,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
