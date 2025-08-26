"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/mayowaadediran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Mayowa Adediran on LinkedIn"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-800/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-500/50 transition-all duration-300 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/mayowaadediran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Mayowa Adediran's GitHub repositories"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-800/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            {/* Twitter/X */}
            <motion.a
              href="https://twitter.com/mayowaadediran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Mayowa Adediran on Twitter"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-800/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:hello@mayowaadediran.me"
              aria-label="Send email to Mayowa Adediran"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-800/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-500/50 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.a>
          </div>

          {/* Decorative Line */}
          <motion.div
            animate={{ scaleY: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600 dark:to-transparent"
          />
        </div>
      </motion.div>

      {/* Hero Section */}
      <main className="relative min-h-[70vh] flex items-center justify-center px-6 lg:px-8 pt-24 sm:pt-16 lg:pt-0">
        <div className="hero-container">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mt-16"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-title mb-0"
              >
                Mayowa Adediran
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-subtitle"
              >
                Senior Frontend Engineer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="body-text-large max-w-lg"
              >
                I turn complex ideas into clean, scalable user interfaces. 7+
                years building fintech applications with React, TypeScript, and
                Next.js at companies like Kuda Bank and 9japay.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-xs mx-auto lg:max-w-sm">
              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                {/* Animated Gradient Orbs */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-gray-400/15 to-gray-500/15 rounded-full blur-xl"
                />

                {/* Floating Geometric Shapes */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 -left-4 w-8 h-8 bg-gradient-to-br from-gray-400/30 to-gray-500/30 rounded-lg backdrop-blur-sm border border-white/10"
                />
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-1/4 -right-2 w-6 h-6 bg-gradient-to-br from-gray-400/30 to-gray-500/30 rounded-full backdrop-blur-sm border border-white/10"
                />
              </div>

              {/* Main Image Container */}
              <div className="relative">
                {/* Circular Profile Image Container */}
                <motion.div
                  className="relative w-80 h-80 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Glow Effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-2 rounded-full bg-gradient-to-br from-gray-300/30 to-gray-400/30 blur-md"
                  />

                  {/* Gray Ring - Lighter and Thinner */}
                  <motion.div
                    className="absolute inset-0 rounded-full p-0.5 shadow-lg"
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgb(156 163 175 / 0.6) 0%, rgb(107 114 128 / 0.6) 100%)",
                        "linear-gradient(135deg, rgb(107 114 128 / 0.7) 0%, rgb(75 85 99 / 0.7) 100%)",
                        "linear-gradient(135deg, rgb(156 163 175 / 0.6) 0%, rgb(107 114 128 / 0.6) 100%)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgb(156 163 175 / 0.6) 0%, rgb(107 114 128 / 0.6) 100%)",
                    }}
                  >
                    {/* Inner White Ring */}
                    <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-sm p-1.5">
                      {/* Profile Image */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden flex items-center justify-center shadow-inner">
                        {/* Actual Profile Image */}
                        <motion.div
                          className="w-full h-full rounded-full overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src="/header-image.JPEG"
                            alt="Mayowa Adediran - Senior Frontend Engineer"
                            className="w-full h-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-4 right-8 w-1 h-1 bg-gray-300 rounded-full opacity-60"></div>
                    <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-gray-200 rounded-full opacity-40"></div>
                    <div className="absolute top-12 left-4 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-70"></div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Enhanced Circular Badge */}

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 bg-white rounded-full"
                    />
                    <span className="whitespace-nowrap">
                      Available for projects
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
