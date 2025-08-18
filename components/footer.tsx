"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-portfolio-card/80 dark:bg-black/40 border-t border-portfolio-border dark:border-white/10 transition-colors duration-300 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-portfolio-text-muted dark:text-white/60 text-sm sm:text-base text-center sm:text-left transition-colors duration-300">
            © 2024 Shubham Kumar. All rights reserved.
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            <motion.a
              href="https://github.com/vinayytkumar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-portfolio-text-muted dark:text-white/60 hover:text-portfolio-text dark:hover:text-white transition-colors duration-300"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shubham-kumar-585767319/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-portfolio-text-muted dark:text-white/60 hover:text-portfolio-text dark:hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
            <motion.a
              href="mailto:shubham136892@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-portfolio-text-muted dark:text-white/60 hover:text-portfolio-text dark:hover:text-white transition-colors duration-300"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
