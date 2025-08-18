"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({
  activeSection,
  scrollToSection,
}: NavigationProps) {
  const navItems = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "contact",
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-portfolio-card/90 dark:bg-black/20 backdrop-blur-md border-b border-portfolio-border dark:border-white/10 shadow-sm transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl sm:text-2xl font-bold text-portfolio-text dark:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors duration-300 ${
                  activeSection === item
                    ? "text-portfolio-accent dark:text-purple-400"
                    : "text-portfolio-text-muted dark:text-white/70 hover:text-portfolio-text dark:hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation - Hamburger Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              className="text-portfolio-text dark:text-white p-2 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-portfolio-text dark:bg-white mb-1 transition-colors duration-300"></div>
              <div className="w-6 h-0.5 bg-portfolio-text dark:bg-white mb-1 transition-colors duration-300"></div>
              <div className="w-6 h-0.5 bg-portfolio-text dark:bg-white transition-colors duration-300"></div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-portfolio-card/95 dark:bg-black/90 backdrop-blur-md border-b border-portfolio-border dark:border-white/10 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`capitalize text-left py-2 px-4 rounded-lg transition-colors duration-300 ${
                    activeSection === item
                      ? "text-portfolio-accent dark:text-purple-400 bg-portfolio-card-hover dark:bg-white/10"
                      : "text-portfolio-text-muted dark:text-white/70 hover:text-portfolio-text dark:hover:text-white hover:bg-portfolio-card-hover dark:hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
