"use client";

import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Frontend Architecture at Scale",
    excerpt:
      "Lessons learned from architecting frontend systems that serve millions of users at fintech companies. Key principles, patterns, and practices that ensure maintainability and performance.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Frontend Architecture", "React", "Performance"],
    slug: "scalable-frontend-architecture",
  },
  {
    id: "2",
    title: "The Evolution of React State Management",
    excerpt:
      "From Redux to Zustand to React Query - exploring the journey of state management in React applications and when to use each approach in modern development.",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["React", "State Management", "Redux"],
    slug: "react-state-management-evolution",
  },
  {
    id: "3",
    title: "TypeScript Best Practices for Large Codebases",
    excerpt:
      "Advanced TypeScript patterns and practices that have helped me maintain type safety and developer experience across large-scale fintech applications.",
    date: "2024-01-02",
    readTime: "10 min read",
    tags: ["TypeScript", "Best Practices", "Code Quality"],
    slug: "typescript-large-codebases",
  },
  {
    id: "4",
    title: "GraphQL vs REST: A Frontend Perspective",
    excerpt:
      "Real-world comparison of GraphQL and REST from a frontend developer's viewpoint, including performance, developer experience, and team adoption considerations.",
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["GraphQL", "REST", "API Design"],
    slug: "graphql-vs-rest-frontend",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-base section-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading">Latest Blog Posts</h2>
          <p className="section-description">
            Sharing insights, experiences, and learnings from my journey in
            frontend engineering and fintech development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                {/* Post Header */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
                  <span>Read More</span>
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-900 to-black text-white font-medium rounded-lg hover:from-black hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>View All Posts</span>
            <motion.svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
