"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="section-base section-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="section-heading">
            About Mayowa Adediran - Senior Frontend Engineer
          </h2>
          <div className="content-spacing body-text">
            <p>
              I&apos;m a <strong>Senior Frontend Engineer</strong> passionate
              about crafting clean, scalable, and user-centric interfaces that
              bridge business goals with intuitive digital experiences. Based in{" "}
              <strong>Lagos, Nigeria</strong>, I specialize in building
              high-performance web applications for the fintech industry.
            </p>
            <p>
              Over the past <strong>7+ years</strong>, I&apos;ve led frontend
              engineering efforts across high-growth fintech startups,
              delivering systems that power everything from internal operations
              to customer-facing platforms used by millions. My experience
              includes leading frontend teams at{" "}
              <strong>Kuda Microfinance Bank</strong> and{" "}
              <strong>9japay Microfinance</strong>, where I built scalable
              banking platforms.
            </p>
            <p>
              My technical expertise includes <strong>JavaScript</strong>,{" "}
              <strong>TypeScript</strong>, <strong>React</strong>,
              <strong>Next.js</strong>, <strong>GraphQL</strong>, and{" "}
              <strong>Tailwind CSS</strong> — all focused on building
              performant, maintainable codebases that stand the test of time.
              Whether I&apos;m building a reusable component system or scaling a
              platform&apos;s frontend for explosive growth, my work is guided
              by performance optimization, code clarity, and user experience.
            </p>
            <p>
              Beyond frontend development, I&apos;m deeply interested in the
              future of intelligent automation and{" "}
              <strong>AI integration</strong>. As an AI enthusiast, I&apos;ve
              been experimenting with ways to integrate large language models,
              automation platforms, and no-code/low-code tools to streamline
              development workflows and improve productivity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
