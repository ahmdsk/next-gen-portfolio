"use client"

import { motion } from "framer-motion"

export function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 text-foreground font-heading"
    >
      Bikin App & Website{" "}
      <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text">Kece Badai!</span> 🚀
    </motion.h1>
  )
}
