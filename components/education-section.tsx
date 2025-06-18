"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  year: string;
  title: string;
  description: string;
  location: string;
  side: "left" | "right";
  delay: number;
  gradientFrom: string;
  gradientTo: string;
  dotColor: string;
}

const educationData: EducationItem[] = [
  {
    year: "2021-2025",
    title: "B.Tech in Computer Science",
    description:
      "Dr. A.P.J. Abdul Kalam Technical University is a public collegiate university that offers undergraduate and postgraduate programs in engineering, technology, and applied sciences.",
    location: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    side: "left",
    delay: 0.2,
    gradientFrom: "purple-600",
    gradientTo: "pink-600",
    dotColor: "purple-400",
  },
  {
    year: "2020-2021",
    title: "Shri Guru Ram Rai Public School (12th Grade)",
    description:
      "SGRR Education Mission is an educational institution that provides a value-based, holistic curriculum, preparing students for higher education and global success.",
    location: "Shri Guru Ram Rai Public School, Muzaffarnagar, Uttar Pradesh",
    side: "right",
    delay: 0.4,
    gradientFrom: "pink-600",
    gradientTo: "purple-600",
    dotColor: "pink-400",
  },
  {
    year: "2018-2019",
    title: "Shri Guru Ram Rai Public School (10th Grade)",
    description:
      "Completed secondary education with focus on Science and Mathematics, building a strong foundation for future technical studies and developing analytical thinking skills.",
    location: "Shri Guru Ram Rai Public School, Muzaffarnagar, Uttar Pradesh",
    side: "left",
    delay: 0.6,
    gradientFrom: "blue-600",
    gradientTo: "purple-600",
    dotColor: "blue-400",
  },
];

function EducationCard({
  item,
  index,
}: {
  item: EducationItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: item.delay }}
      viewport={{ amount: 0.3 }}
      className="relative"
    >
      {/* Mobile Layout */}
      <div className="md:hidden flex items-start space-x-4">
        <div className="relative z-10 flex-shrink-0 mt-2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: item.delay + 0.6 }}
            viewport={{ amount: 0.5 }}
            className={`w-12 h-12 bg-gradient-to-r from-${item.gradientFrom} to-${item.gradientTo} rounded-full flex items-center justify-center shadow-lg`}
          >
            <GraduationCap className="h-6 w-6 text-white" />
          </motion.div>
        </div>

        <div className="flex-1 min-w-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay + 0.2 }}
              viewport={{ amount: 0.5 }}
              className="text-yellow-400 font-bold text-sm sm:text-base mb-2"
            >
              {item.year}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay + 0.3 }}
              viewport={{ amount: 0.5 }}
              className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay + 0.4 }}
              viewport={{ amount: 0.5 }}
              className="text-white/70 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base"
            >
              {item.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay + 0.5 }}
              viewport={{ amount: 0.5 }}
              className="text-white font-medium text-sm sm:text-base"
            >
              {item.location}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center">
        {item.side === "left" ? (
          <>
            <div className="flex-1 pr-6 lg:pr-8 text-right">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay + 0.2 }}
                  viewport={{ amount: 0.5 }}
                  className="text-yellow-400 font-bold text-lg mb-2"
                >
                  {item.year}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay + 0.3 }}
                  viewport={{ amount: 0.5 }}
                  className="text-xl lg:text-2xl font-bold text-white mb-3"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay + 0.4 }}
                  viewport={{ amount: 0.5 }}
                  className="text-white/70 mb-4 leading-relaxed"
                >
                  {item.description}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay + 0.5 }}
                  viewport={{ amount: 0.5 }}
                  className="text-white font-medium"
                >
                  {item.location}
                </motion.p>
              </motion.div>
            </div>
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: item.delay + 0.6 }}
                viewport={{ amount: 0.5 }}
                className={`w-16 h-16 bg-gradient-to-r from-${item.gradientFrom} to-${item.gradientTo} rounded-full flex items-center justify-center shadow-lg`}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index,
                  }}
                >
                  <GraduationCap className="h-8 w-8 text-white" />
                </motion.div>
              </motion.div>
            </div>
            <div className="flex-1 pl-6 lg:pl-8"></div>
          </>
        ) : (
          <>
            <div className="flex-1 pr-6 lg:pr-8"></div>
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: item.delay + 0.6 }}
                viewport={{ amount: 0.5 }}
                className={`w-16 h-16 bg-gradient-to-r from-${item.gradientFrom} to-${item.gradientTo} rounded-full flex items-center justify-center shadow-lg`}
              >
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index,
                  }}
                >
                  <GraduationCap className="h-8 w-8 text-white" />
                </motion.div>
              </motion.div>
            </div>
            <div className="flex-1 pl-6 lg:pl-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay + 0.2 }}
                  viewport={{ amount: 0.5 }}
                  className="text-yellow-400 font-bold text-lg mb-2"
                >
                  {item.year}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay + 0.3 }}
                  viewport={{ amount: 0.5 }}
                  className="text-xl lg:text-2xl font-bold text-white mb-3"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay + 0.4 }}
                  viewport={{ amount: 0.5 }}
                  className="text-white/70 mb-4 leading-relaxed"
                >
                  {item.description}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay + 0.5 }}
                  viewport={{ amount: 0.5 }}
                  className="text-white font-medium"
                >
                  {item.location}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 text-sm sm:text-base"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              ✨
            </motion.div>
            <span className="font-semibold">LIFE TIME</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-4">
            My academic journey that shaped my technical expertise and
            problem-solving abilities
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <motion.div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ amount: 0.1 }}
              style={{ top: "2rem", bottom: "1rem" }}
            />

            {/* Mobile Timeline Line */}
            <motion.div
              className="md:hidden absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 4rem)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ amount: 0.1 }}
            />

            {/* Education Items */}
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              {educationData.map((item, index) => (
                <EducationCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
