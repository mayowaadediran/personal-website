import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
} from "../components/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Frontend Engineer | React, TypeScript, Next.js Expert",
  description:
    "Mayowa Adediran is a Senior Frontend Engineer with 7+ years of experience at top fintech companies like Kuda Bank and 9japay. Expert in React, TypeScript, Next.js, GraphQL. Available for frontend engineering roles and consulting in Lagos, Nigeria.",
  openGraph: {
    title: "Mayowa Adediran - Senior Frontend Engineer Portfolio",
    description:
      "Explore the portfolio of Mayowa Adediran, Senior Frontend Engineer with expertise in React, TypeScript, and Next.js. 7+ years of experience building scalable fintech applications.",
  },
};

export default function Home() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://mayowaadediran.me",
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <header>
          <HeroSection />
        </header>

        <main>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          {/* <BlogSection /> */}
        </main>
      </div>
    </>
  );
}
