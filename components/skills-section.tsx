"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

const skills: Skill[] = [
  { name: "HTML", level: 95, icon: Code },
  { name: "CSS", level: 90, icon: Palette },
  { name: "JavaScript", level: 88, icon: Code },
  { name: "Bootstrap", level: 85, icon: Smartphone },
  { name: "React/Next.js", level: 80, icon: Code },
  { name: "UI/UX Design", level: 80, icon: Palette },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ amount: 0.3 }}
    >
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex-shrink-0">
              <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {skill.name}
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-white/80 text-sm sm:text-base">
                Proficiency
              </span>
              <span className="text-purple-400 font-semibold text-sm sm:text-base">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ amount: 0.3 }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
