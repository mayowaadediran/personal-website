"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
];

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Logo/Name */}
      <div className="fixed top-6 left-6 z-[60]">
        <motion.div
          initial={{ opacity: 0, rotate: -180, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
            type: "spring",
            bounce: 0.3,
          }}
        >
          {/* Badge Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur-md opacity-30 scale-110"></div>

          {/* Badge Container */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-200/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-white text-xs font-medium"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                className="text-white"
              >
                <defs>
                  <path
                    id="circle-nav"
                    d="M 25, 25 m -20, 0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"
                  />
                </defs>
                <text fontSize="7" fill="currentColor" fontWeight="700">
                  <textPath href="#circle-nav">
                    FRONTEND ENGINEER • FRONTEND ENGINEER •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs tracking-wider drop-shadow-sm">
                  MA
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Right Side Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className={`h-px transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-12 bg-gray-900 dark:bg-gray-100"
                      : "w-8 bg-gray-400 dark:bg-gray-500 group-hover:bg-gray-900 dark:group-hover:bg-gray-100"
                  }`}
                  animate={{ width: activeSection === item.id ? 48 : 32 }}
                  transition={{ duration: 0.3 }}
                />
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-[0.2em] transition-colors uppercase ${
                    activeSection === item.id
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                  }`}
                >
                  {item.label.toUpperCase()}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20"
        >
          {/* Mobile Logo Space */}
          <div className="w-16 h-8 flex items-center">
            {/* Logo is positioned fixed, so this is just spacing */}
          </div>

          {/* Mobile Nav Items */}
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
}
