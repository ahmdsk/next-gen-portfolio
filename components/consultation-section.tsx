"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Video, CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export function ConsultationSection() {
  const t = useTranslations('Consultation')

  const consultationMethods = [
    {
      icon: MessageSquare,
      title: t('method1Title'),
      description: t('method1Desc'),
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Phone,
      title: t('method2Title'),
      description: t('method2Desc'),
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Video,
      title: t('method3Title'),
      description: t('method3Desc'),
      gradient: "from-purple-500/10 to-pink-500/10",
    },
  ]

  const benefits = [
    t('benefit1'),
    t('benefit2'),
    t('benefit3'),
    t('benefit4'),
  ]

  return (
    <section id="consultation" className="py-32 bg-secondary/50 dark:bg-slate-900/20 transition-colors duration-500 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-10 tracking-tighter font-heading reveal-text text-slate-900 dark:text-white">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              >
                {t('title')}
              </motion.span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-body leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="space-y-6 mb-12">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 group"
                >
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700 dark:text-slate-300 font-body">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 text-white font-bold h-16 px-10 rounded-full shadow-2xl transition-all duration-300 font-accent"
            >
              {t('scheduleButton')}
            </Button>
          </div>

          <div className="space-y-6">
            {consultationMethods.map((method) => (
              <Card
                key={method.title}
                className="hover:shadow-2xl transition-all duration-500 group border-border bg-white/80 dark:bg-white/5 backdrop-blur-xl overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-border group-hover:border-blue-500/50 transition-colors">
                      <method.icon className="h-7 w-7 text-blue-600 dark:text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">
                        {method.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


