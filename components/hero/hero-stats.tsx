"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe } from "lucide-react"

const stats = [
  {
    icon: Code,
    number: "50+",
    label: "Project Kece",
    delay: 0.8,
  },
  {
    icon: Smartphone,
    number: "98%",
    label: "Client Happy",
    delay: 1.0,
  },
  {
    icon: Globe,
    number: "24/7",
    label: "Siap Bantuin",
    delay: 1.2,
  },
]

export function HeroStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: stat.delay, duration: 0.5 }}
          className="space-y-2 p-6 rounded-lg bg-gradient-to-br from-card/80 to-accent/3 dark:from-background/50 dark:to-accent/5 backdrop-blur-sm border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-lg light-card-shadow"
        >
          <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
          <div className="text-3xl font-bold text-accent font-heading">{stat.number}</div>
          <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
