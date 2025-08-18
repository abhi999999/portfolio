"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "Skin-Care Management Platform",
    description:
      "E-commerce platform with smart recommendations and skincare booking",
    image: "/Screenshot_14.png?height=300&width=400",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    github: "",
    live: "https://dermatocare.com/",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "/Screenshot_13.png?height=300&width=400",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/vinayytkumar/Moderen-Timeless-Designs",
    live: "https://lakshmanpal.github.io/shubham/",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio for all screen sizes",
    image: "/Screenshot_12.png?height=300&width=400",
    tags: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/vinayytkumar/web4",
    live: "https://vinayytkumar.github.io/web4/",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ amount: 0.3 }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <Card className="bg-gradient-to-br from-portfolio-card/90 to-portfolio-card-hover/80 dark:from-purple-900/80 dark:to-purple-800/60 border-portfolio-border/50 dark:border-purple-600/40 backdrop-blur-md overflow-hidden hover:from-portfolio-card hover:to-portfolio-card-hover dark:hover:from-purple-800/90 dark:hover:to-purple-700/70 hover:border-portfolio-accent/30 dark:hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-portfolio-accent/20 dark:hover:shadow-purple-500/30 hover:scale-[1.02] h-full flex flex-col">
        <div className="relative overflow-hidden group">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Dark overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-portfolio-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-4">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-2 text-center">
              {project.title}
            </h4>
            <p className="text-white/90 text-xs sm:text-sm text-center mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Action buttons */}
            {/* Action buttons */}
            <div className="flex space-x-2 sm:space-x-3">
              {project.github ? (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-portfolio-accent/80 to-portfolio-accent-secondary/80 backdrop-blur-sm rounded-full hover:from-portfolio-accent hover:to-portfolio-accent-secondary transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
                >
                  <Github className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  <span className="text-white text-xs sm:text-sm font-medium">
                    Code
                  </span>
                </motion.a>
              ) : (
                <div
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full opacity-50 cursor-not-allowed"
                  aria-label="No code available"
                >
                  <Github className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  <span className="text-white text-xs sm:text-sm font-medium">
                    Code
                  </span>
                </div>
              )}
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-portfolio-accent-secondary/80 to-portfolio-accent/80 backdrop-blur-sm rounded-full hover:from-portfolio-accent-secondary hover:to-portfolio-accent transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                <span className="text-white text-xs sm:text-sm font-medium">
                  Live
                </span>
              </motion.a>
            </div>
          </div>
        </div>
        <CardContent className="p-4 sm:p-6 flex-1 flex flex-col bg-gradient-to-b from-transparent to-portfolio-card/30 dark:to-purple-800/30">
          <h3 className="text-lg sm:text-xl font-semibold text-portfolio-text dark:text-white mb-2 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-portfolio-text-muted dark:text-white/70 mb-4 text-sm sm:text-base flex-1 transition-colors duration-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gradient-to-r from-portfolio-accent/20 to-portfolio-accent-secondary/20 dark:from-purple-600/20 dark:to-pink-600/20 text-portfolio-accent dark:text-purple-300 hover:from-portfolio-accent/30 hover:to-portfolio-accent-secondary/30 dark:hover:from-purple-600/30 dark:hover:to-pink-600/30 text-xs sm:text-sm font-medium border border-portfolio-accent/30 dark:border-purple-400/30 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-portfolio-bg-secondary/80 via-portfolio-accent/10 to-portfolio-bg dark:bg-gradient-to-br dark:from-purple-900/90 dark:via-purple-800/60 dark:to-purple-900/80 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-portfolio-accent/20 dark:bg-purple-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-portfolio-accent-secondary/20 dark:bg-pink-400/25 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-portfolio-accent/10 dark:bg-purple-500/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-text dark:text-white mb-4 transition-colors duration-300 drop-shadow-sm">
            Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary mx-auto shadow-lg"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
