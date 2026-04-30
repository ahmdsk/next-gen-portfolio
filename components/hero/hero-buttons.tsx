"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { MagneticButton } from "@/components/react-bits/magnetic-button"

export function HeroButtons() {
  return (
    <div
      className="flex gap-3 md:gap-8 justify-center items-center mb-20"
    >
      <MagneticButton strength={0.4}>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold h-16 px-12 rounded-full group transition-all duration-300 font-accent shadow-xl shadow-blue-500/20"
        >
          Start Your Project
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
        </Button>
      </MagneticButton>

      <MagneticButton strength={0.2}>
        <Button
          size="lg"
          variant="outline"
          className="h-16 px-12 rounded-full border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-slate-800 dark:hover:text-white transition-all duration-500 backdrop-blur-xl font-accent"
          asChild
        >
          <Link href="/case-studies">
            View Case Studies
          </Link>
        </Button>
      </MagneticButton>
    </div>
  )
}
