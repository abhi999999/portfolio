"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="absolute inset-0 bg-[url('/placeholder1.jpg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
      </motion.div>

      <div className="container mx-auto text-center z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-portfolio-text dark:text-white mb-4 sm:mb-6 leading-tight transition-colors duration-300 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary block sm:inline"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Shubham Kumar
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-portfolio-text-muted dark:text-white/80 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-4 transition-colors duration-300 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Frontend Website Developer & UI/UX Designer creating amazing digital
            experiences
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary hover:from-portfolio-accent/90 hover:to-portfolio-accent-secondary/90 text-white px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-portfolio-border dark:border-white/30 text-portfolio-text dark:text-white hover:bg-purple-600/20 px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <a
                href="https://drive.google.com/file/d/1HX9389nisC45CVNwG2P3V1LYD1bhQw6Q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
                className="flex items-center"
              >
                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-portfolio-text-muted dark:text-white/60 transition-colors duration-300" />
      </motion.div>
    </section>
  );
}
