"use client"

import { motion } from "framer-motion"

export function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8 leading-relaxed font-body"
    >
      Punya ide gila buat app atau website? Yuk wujudin bareng kita! Kita bakal bantuin kamu dari konsep sampai jadi,
      pake teknologi terbaru yang bikin projectmu stand out dari yang lain 💯
    </motion.p>
  )
}
