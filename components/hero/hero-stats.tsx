"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe } from "lucide-react"

const stats = [
  {
    icon: Code,
    number: "120+",
    label: "Successful Projects",
  },
  {
    icon: Smartphone,
    number: "99%",
    label: "Customer Satisfaction",
  },
  {
    icon: Globe,
    number: "15+",
    label: "Global Partnerships",
  },
]

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-12 text-center mt-20">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="space-y-4"
        >
          <div className="text-5xl font-extrabold text-black dark:text-white font-heading tracking-tighter">{stat.number}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold font-accent">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
