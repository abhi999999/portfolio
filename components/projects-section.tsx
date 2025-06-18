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
    tags: ["React", "Socket.io", "Node.js"],
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
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col">
        <div className="relative overflow-hidden group">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Dark overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-4">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-2 text-center">
              {project.title}
            </h4>
            <p className="text-white/90 text-xs sm:text-sm text-center mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Action buttons */}
            <div className="flex space-x-2 sm:space-x-3">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                <span className="text-white text-xs sm:text-sm font-medium">
                  Code
                </span>
              </motion.a>
              <motion.a
                href={project.live}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/80 backdrop-blur-sm rounded-full hover:bg-purple-600 transition-colors"
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                <span className="text-white text-xs sm:text-sm font-medium">
                  Live
                </span>
              </motion.a>
            </div>
          </div>
        </div>
        <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-white/70 mb-4 text-sm sm:text-base flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 text-xs sm:text-sm"
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
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
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
