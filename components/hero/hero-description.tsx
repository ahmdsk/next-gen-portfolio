"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function HeroDescription() {
  const t = useTranslations('Hero')

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto font-body leading-relaxed"
    >
      {t('description')}
    </motion.p>
  )
}
