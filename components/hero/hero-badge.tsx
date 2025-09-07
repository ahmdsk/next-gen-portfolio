"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20 backdrop-blur-sm"
    >
      <Sparkles size={16} className="animate-pulse" />
      <span className="font-body">Tim Developer Paling Asik! ✨</span>
    </motion.div>
  )
}
