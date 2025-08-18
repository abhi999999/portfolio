"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-portfolio-card/80 dark:bg-white/10 animate-pulse shadow-sm" />
    );
  }

  const getNextTheme = () => {
    switch (theme) {
      case "light":
        return "dark";
      case "dark":
        return "light";
      default:
        return "dark";
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return Sun;
      case "dark":
        return Moon;
      default:
        return Moon;
    }
  };

  const IconComponent = getThemeIcon();

  return (
    <motion.button
      onClick={() => setTheme(getNextTheme())}
      className="relative w-9 h-9 rounded-full bg-portfolio-card/80 dark:bg-white/10 hover:bg-portfolio-card-hover dark:hover:bg-white/20 transition-colors duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${getNextTheme()} theme`}
      title={`Current: ${theme} theme. Click for ${getNextTheme()} theme.`}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <IconComponent className="h-4 w-4 text-portfolio-text dark:text-white transition-colors duration-300" />
      </motion.div>
    </motion.button>
  );
}
