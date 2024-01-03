import { createClient, groq } from "next-sanity";

export async function getProducts() {
  const client = createClient({
    projectId: "r8ewtp4b",
    dataset: "production",
    apiVersion: "2024-01-02",
  });
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      price,
      details,
      "image":image.asset->url,
    }`
  );
}
