"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Fitlify",
    description:
      "A SaaS platform that helps gyms manage clients, sessions, and payments — all from one simple dashboard. Built with modern web technologies to provide a seamless experience for fitness business owners.",
    tags: ["React", "Supabase", "Tailwind", "Clerk", "SaaS"],
  },
  {
    title: "SocialPilot AI",
    description:
      "An automation workflow that turns spreadsheet content into ready-to-post, AI-generated social media content. Streamlines content creation by connecting Google Sheets with AI and social media APIs.",
    tags: ["n8n", "OpenAI", "Google Sheets", "LinkedIn API", "Automation"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen section-base section-light">
      <div className="section-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-description">
            A selection of projects that showcase my approach to solving complex
            design challenges and creating meaningful user experiences.
          </p>
        </motion.div>

        <div className="grid-projects">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
