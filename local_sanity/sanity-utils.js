import { createClient, groq } from "next-sanity";

export async function getProducts() {
  console.log('Abood');
  const client = createClient({
    projectId: "r8ewtp4b",
    dataset: "production",
    apiVersion: "2024-01-05",
    useCdn: true,
    token: process.env.SANITY_API_KEY,
  });
  const products = await client.fetch(
    groq`*[_type == "product"]{
      "image":image.asset->url,
      name,
      _id,
      details,
      "slug":slug.current,
      price,
    }`
  );
  const banner = await client.fetch(
    groq`*[_type == "banner"]{
      "image":image.asset->url,
      buttonText,
      product,
      desc,
      smallText,
      midText,
      largeText1,
      largeText2,
      discount,
      saleTime
    }`
  );
  return {
    banner,
    products,
  };
}
