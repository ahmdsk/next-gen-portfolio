"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Palette, Zap, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import { StaggerContainer } from "@/components/react-bits/stagger-container";
import { SlideIn } from "@/components/react-bits/slide-in";

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Services');

  const services = [
    {
      icon: Monitor,
      title: t('service1Title'),
      description: t('service1Desc'),
      className: "md:col-span-2 md:row-span-2",
      color: "bg-blue-50 dark:bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Smartphone,
      title: t('service2Title'),
      description: t('service2Desc'),
      className: "md:col-span-1 md:row-span-1",
      color: "bg-emerald-50 dark:bg-emerald-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Palette,
      title: t('service3Title'),
      description: t('service3Desc'),
      className: "md:col-span-1 md:row-span-2",
      color: "bg-purple-50 dark:bg-purple-500/10",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Zap,
      title: t('service4Title'),
      description: t('service4Desc'),
      className: "md:col-span-1 md:row-span-1",
      color: "bg-orange-50 dark:bg-orange-500/10",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <section id="services" className="py-32 pb-48 relative overflow-hidden bg-slate-50 dark:bg-slate-950/50 transition-colors duration-500 border-y border-slate-200 dark:border-slate-800/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter font-heading reveal-text text-slate-900 dark:text-white"
          >
            <motion.span
               initial={{ y: "100%" }}
               whileInView={{ y: 0 }}
               transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            >
              {t('title')} <span className="text-blue-600 dark:text-blue-400">{t('titleAccent')}</span>
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-body"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <SlideIn
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
              className={service.className}
            >
              <Card className="h-full border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 backdrop-blur-2xl overflow-hidden group relative min-h-[350px] shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-2xl dark:hover:bg-slate-800/60 transition-all duration-500">
                <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-10 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${service.color} opacity-100 flex items-center justify-center mb-8 border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white">{service.title}</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-end mt-10">
                    <ArrowUpRight className="w-6 h-6 text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}