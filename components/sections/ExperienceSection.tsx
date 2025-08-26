"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "May 2022 - Present",
    title: "Lead Frontend Engineer",
    company: "9japay Microfinance",
    location: "Lagos, Nigeria",
    description:
      "Lead frontend architecture and development for the company's core banking and internal tools platform — the engine behind SME and consumer lending operations. Built major workflow systems from scratch with GraphQL and TypeScript, creating a highly reliable and scalable data layer that powers ops and compliance teams. The platform has become the operational hub for 9japay, enabling faster customer onboarding and improved workflow efficiency across departments.",
    skills: [
      "GraphQL",
      "TypeScript",
      "React",
      "Frontend Architecture",
      "Team Leadership",
    ],
  },
  {
    period: "Oct 2020 - Apr 2022",
    title: "Senior Frontend Engineer",
    company: "Kuda Microfinance Bank",
    location: "Lagos, Nigeria",
    description:
      "Led frontend redevelopment of Kuda Suites, the bank's central back-office platform used by eight internal teams. Migrated the entire app from Angular to React, unlocking significant improvements in performance and development speed. The platform played a pivotal role in Kuda's growth from under 500K to over 3M retail customers. Also led development of a shared design system that unified UI across three web engineering teams.",
    skills: [
      "React",
      "Angular Migration",
      "Design Systems",
      "Performance Optimization",
      "Scaling",
    ],
  },
  {
    period: "Apr 2020 - Sep 2020",
    title: "Frontend Engineer",
    company: "Swipemax",
    location: "Lagos, Nigeria",
    description:
      "Improved frontend experience for a digital payments platform by introducing coding standards that reduced collaboration friction and sped up delivery. Built interactive product features in React to enhance the customer-facing application.",
    skills: [
      "React",
      "Code Standards",
      "Digital Payments",
      "Frontend Development",
    ],
  },
  {
    period: "Apr 2019 - Mar 2020",
    title: "Frontend Engineer",
    company: "iQubeLabs",
    location: "Lagos, Nigeria",
    description:
      "Built applications across fintech, e-commerce, and government sectors — delivering customer portals and reporting dashboards. Led transition of company website from WordPress to JamStack (Gatsby + Contentful), significantly improving speed and discoverability. Mentored interns and created dev guides to raise team's overall code quality.",
    skills: [
      "Gatsby",
      "Contentful",
      "JamStack",
      "Mentoring",
      "Multi-sector Development",
    ],
  },
  {
    period: "Sep 2017 - Dec 2018",
    title: "Web Developer Intern",
    company: "Verstaad Technologies",
    location: "Lagos, Nigeria",
    description:
      "Balanced technical and customer-facing responsibilities by building WordPress-based websites and providing user training on Microsoft Dynamics. Supported client onboarding from a product enablement perspective.",
    skills: [
      "WordPress",
      "Microsoft Dynamics",
      "Client Training",
      "Product Enablement",
    ],
  },
  {
    period: "Sep 2015 - Nov 2016",
    title: "Business Development / Value-Added Services",
    company: "SystemSpecs (Remita)",
    location: "Lagos, Nigeria",
    description:
      "Helped institutions integrate with Remita's payment gateway, handling everything from crafting proposals to hands-on technical support for over 100 clients. Worked across onboarding, testing, and go-live processes — blending business, tech, and strategy in one role.",
    skills: [
      "Payment Integration",
      "Technical Support",
      "Business Development",
      "Client Onboarding",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-base section-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-heading">Experience</h2>
          <p className="section-description">
            Over the years, I&apos;ve had the privilege of working with amazing
            teams and companies, helping them create digital products that make
            a difference.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="border-l-2 border-gray-700 pl-8 pb-8 hover:border-gray-500 transition-colors duration-300">
                {/* Period */}
                <div className="text-sm font-medium text-gray-400 mb-2">
                  {experience.period}
                </div>

                {/* Title and Company */}
                <h3 className="text-xl font-semibold  mb-1">
                  {experience.title}
                </h3>
                <div className="text-base mb-4">
                  {experience.company} • {experience.location}
                </div>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed mb-6 max-w-3xl">
                  {experience.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-colors duration-200"
                    >
                      {skill}
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
