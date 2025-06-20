"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, User, MapPin } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30"></div>
              <Image
                src="/aboutme.jpg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              I'm Shubham Kumar, a creative Frontend Developer & UI/UX
              Enthusiast with a B.Tech in Computer Science. I specialize in
              building modern, responsive web applications using React.js, HTML,
              CSS, and JavaScript. Passionate about clean design and seamless
              user experiences, I turn ideas into interactive, user-friendly
              digital products. I blend design thinking with code to create
              pixel-perfect, high-performing interfaces that users love.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3">
                <User className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">
                  Age: 23
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">
                  Location: Muzaffarnagar
                </span>
              </div>
            </div>

            <div className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start">
              <motion.a
                href="https://github.com/vinayytkumar"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shubham-kumar-585767319/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
