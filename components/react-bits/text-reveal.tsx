"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function TextReveal({ children, delay = 0, className = "" }: TextRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
