"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"

import { MagneticButton } from "@/components/react-bits/magnetic-button"

import { useTranslations } from "next-intl"

export function HeroButtons() {
  const t = useTranslations('Hero');

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center mb-20"
    >
      <MagneticButton strength={0.4}>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold h-14 px-8 text-sm md:h-16 md:px-12 md:text-base rounded-full group transition-all duration-300 font-accent shadow-xl shadow-blue-500/20 w-full sm:w-auto"
        >
          {t('startProject')}
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform" />
        </Button>
      </MagneticButton>

      <MagneticButton strength={0.2}>
        <Button
          size="lg"
          variant="outline"
          className="h-14 px-8 text-sm md:h-16 md:px-12 md:text-base rounded-full border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-slate-800 dark:hover:text-white transition-all duration-500 backdrop-blur-xl font-accent w-full sm:w-auto"
          asChild
        >
          <Link href="/case-studies">
            {t('viewCaseStudies')}
          </Link>
        </Button>
      </MagneticButton>
    </div>
  )
}
