"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScaleIn } from "@/components/react-bits/scale-in"
import { ArrowRight, CheckCircle } from "lucide-react"

import { MagneticButton } from "@/components/react-bits/magnetic-button"
import { useTranslations } from "next-intl"

export function CTASection() {
  const t = useTranslations('CTA')
  const benefits = [t('benefit1'), t('benefit2'), t('benefit3')]

  return (
    <section className="py-48 relative overflow-hidden bg-blue-600/5 dark:bg-blue-500/5 transition-colors duration-500">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter font-heading text-slate-900 dark:text-white reveal-text">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            >
              {t('title')} <span className="text-blue-600 dark:text-blue-500">{t('titleAccent')}</span>
            </motion.span>
          </h2>

          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 mb-20 text-pretty max-w-4xl mx-auto leading-relaxed font-body">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <MagneticButton strength={0.4}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 text-white font-bold h-20 px-16 rounded-2xl group shadow-2xl shadow-blue-500/20 transition-all duration-300 font-accent text-lg"
              >
                {t('btnPrimary')}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button
                size="lg"
                variant="outline"
                className="h-20 px-16 rounded-2xl border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-500 backdrop-blur-xl font-accent text-lg"
              >
                {t('btnSecondary')}
              </Button>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 font-accent">
            {benefits.map((benefit, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-blue-600 dark:text-blue-500" />
                  <span>{benefit}</span>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


