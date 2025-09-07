"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SlideInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "left" | "right" | "up" | "down"
  className?: string
}

export function SlideIn({ children, delay = 0, duration = 0.8, direction = "left", className = "" }: SlideInProps) {
  const directionOffset = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: -100 },
    down: { y: 100 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
