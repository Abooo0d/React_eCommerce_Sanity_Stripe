import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./local_sanity/schemas";
const config = defineConfig({
  projectId: "r8ewtp4b",
  dataset: "production",
  title: "eCommerce_Sanity",
  apiVersion: "2024-01-05",
  useCdn: true,
  token: process.env.SANITY_API_KEY,
  basePath: "/Admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
export default config;
