"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe } from "lucide-react"
import { useTranslations } from "next-intl"

export function HeroStats() {
  const t = useTranslations('Hero')

  const stats = [
    {
      icon: Code,
      number: t('stat1Number'),
      label: t('stat1Text'),
    },
    {
      icon: Smartphone,
      number: t('stat2Number'),
      label: t('stat2Text'),
    },
    {
      icon: Globe,
      number: t('stat3Number'),
      label: t('stat3Text'),
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-12 text-center mt-20">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="space-y-4"
        >
          <div className="text-5xl font-extrabold text-black dark:text-white font-heading tracking-tighter">{stat.number}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500 font-bold font-accent">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

