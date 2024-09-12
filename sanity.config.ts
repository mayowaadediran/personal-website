import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk"
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "ce5g0fao",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2023-01-11",

    basePath: "/admin",
    plugins: [deskTool()],

    schema: {
        types: schemas
    }
})

export default config