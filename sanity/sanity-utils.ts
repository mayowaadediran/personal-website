import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { IProject } from "../types/project.types";


export async function getProjects(): Promise<IProject[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
    
      }`
    )
  }
  