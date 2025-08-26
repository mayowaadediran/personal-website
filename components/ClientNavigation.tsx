"use client";

import Navigation from "./Navigation";

export default function ClientNavigation() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return <Navigation scrollToSection={scrollToSection} />;
}
