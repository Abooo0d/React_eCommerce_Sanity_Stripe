import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./local_sanity/schemas";
import banner from "./local_sanity/schemas/banner";
import product from "./local_sanity/schemas/product";
const config = defineConfig({
  projectId: "r8ewtp4b",
  dataset: "production",
  title: "eCommerce_Sanity",
  apiVersion: "2024-01-02",
  useCdn: true,
  token: process.env.SANITY_API_KEY,
  basePath: "/Admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
export default config;
