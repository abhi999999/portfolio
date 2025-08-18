"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-text dark:text-white mb-4 transition-colors duration-300 drop-shadow-sm">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-portfolio-text dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
                Let's work together
              </h3>
              <p className="text-portfolio-text-muted dark:text-white/70 text-base sm:text-lg leading-relaxed transition-colors duration-300">
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can bring your ideas to life!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2.5 sm:p-3 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary rounded-lg flex-shrink-0 shadow-md">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-portfolio-text dark:text-white font-medium text-sm sm:text-base transition-colors duration-300">
                    Email
                  </p>
                  <p className="text-portfolio-text-muted dark:text-white/70 text-sm sm:text-base break-all transition-colors duration-300">
                    shubham136892@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2.5 sm:p-3 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary rounded-lg flex-shrink-0 shadow-md">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <p className="text-portfolio-text dark:text-white font-medium text-sm sm:text-base transition-colors duration-300">
                    Phone
                  </p>
                  <p className="text-portfolio-text-muted dark:text-white/70 text-sm sm:text-base transition-colors duration-300">
                    +916398318894
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2.5 sm:p-3 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary rounded-lg flex-shrink-0 shadow-md">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <p className="text-portfolio-text dark:text-white font-medium text-sm sm:text-base transition-colors duration-300">
                    Location
                  </p>
                  <p className="text-portfolio-text-muted dark:text-white/70 text-sm sm:text-base transition-colors duration-300">
                    Chandigarh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <Card className="bg-portfolio-card/80 dark:bg-white/5 border-portfolio-border dark:border-white/10 backdrop-blur-sm shadow-lg transition-colors duration-300">
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-portfolio-text dark:text-white/80 mb-2 text-sm sm:text-base transition-colors duration-300">
                        Name
                      </label>
                      <Input
                        className="bg-portfolio-card-hover dark:bg-white/10 border-portfolio-border dark:border-white/20 text-portfolio-text dark:text-white placeholder:text-portfolio-text-muted dark:placeholder:text-white/50 text-sm sm:text-base transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-portfolio-text dark:text-white/80 mb-2 text-sm sm:text-base transition-colors duration-300">
                        Email
                      </label>
                      <Input
                        type="email"
                        className="bg-portfolio-card-hover dark:bg-white/10 border-portfolio-border dark:border-white/20 text-portfolio-text dark:text-white placeholder:text-portfolio-text-muted dark:placeholder:text-white/50 text-sm sm:text-base transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-portfolio-text dark:text-white/80 mb-2 text-sm sm:text-base transition-colors duration-300">
                      Subject
                    </label>
                    <Input
                      className="bg-portfolio-card-hover dark:bg-white/10 border-portfolio-border dark:border-white/20 text-portfolio-text dark:text-white placeholder:text-portfolio-text-muted dark:placeholder:text-white/50 text-sm sm:text-base transition-colors duration-300"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-portfolio-text dark:text-white/80 mb-2 text-sm sm:text-base transition-colors duration-300">
                      Message
                    </label>
                    <Textarea
                      className="bg-portfolio-card-hover dark:bg-white/10 border-portfolio-border dark:border-white/20 text-portfolio-text dark:text-white placeholder:text-portfolio-text-muted dark:placeholder:text-white/50 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base transition-colors duration-300"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary hover:from-portfolio-accent/90 hover:to-portfolio-accent-secondary/90 text-white py-2.5 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
