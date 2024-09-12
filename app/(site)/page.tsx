import { getProjects } from "../../sanity/sanity-utils"
import project from "../../sanity/schemas/project-schema"
import { IProject } from "../../types/project.types"


export default async function Home() {

  const projects = await getProjects()

  console.log(projects)
  return (


    <main className="h-screen flex">
      <div className="pt-[185px]">
        <h1 className="text-5xl	font-semibold	">Hi 👋🏿, I&apos;m Mayowa</h1>
        <h2 className="text-2xl font-light mt-3">A software developer based in Lagos, Nigeria.</h2>
      </div>
    </main>
  )
}



