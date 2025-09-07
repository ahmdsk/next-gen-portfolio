"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
    >
      <Button
        size="lg"
        className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground group shadow-lg hover:shadow-xl transition-all duration-300 font-body"
      >
        Yuk Chat Dulu!
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-accent/50 text-accent hover:bg-accent/10 bg-transparent backdrop-blur-sm font-body"
      >
        Liat Karya Kita
      </Button>
    </motion.div>
  )
}
