import { createClient, groq } from "next-sanity";

export const client = createClient({
  projectId: "r8ewtp4b",
  dataset: "production",
  apiVersion: "2024-01-06",
  useCdn: false,
  token: process.env.SANITY_API_KEY,
});
export async function getProducts() {
  const products = await client.fetch(
    groq`*[_type == "product"]{
      "image":image[].asset->url,
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
export async function getDetails(slug) {
  const productDetails = await client.fetch(
    groq`*[_type == "product" && slug.current == "${slug}"][0]{
      "image":image[].asset->url,
      name,
      _id,
      details,
      "slug":slug.current,
      price,
    }`
  );
  const allProducts = await client.fetch(
    groq`*[_type == "product"]{
      "image":image[].asset->url,
      name,
      _id,
      details,
      "slug":slug.current,
      price,
    }`
  );
  return {
    productDetails,
    allProducts,
  };
}
