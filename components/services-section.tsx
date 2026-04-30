"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Palette, Zap, ArrowUpRight } from "lucide-react";
import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: Monitor,
    title: "Enterprise Web Systems",
    description: "Architecting scalable, resilient web infrastructures that drive business agility and operational efficiency.",
    className: "md:col-span-2 md:row-span-2",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Smartphone,
    title: "Native Mobility",
    description: "High-performance mobile ecosystems tailored for seamless enterprise integration.",
    className: "md:col-span-1 md:row-span-1",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Palette,
    title: "Experience Design",
    description: "Human-centric UX strategies that redefine digital engagement and brand loyalty.",
    className: "md:col-span-1 md:row-span-2",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Zap,
    title: "System Optimization",
    description: "Performance engineering to maximize throughput and minimize latency across your stack.",
    className: "md:col-span-1 md:row-span-1",
    color: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
];

import { StaggerContainer } from "@/components/react-bits/stagger-container";
import { SlideIn } from "@/components/react-bits/slide-in";

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-32 pb-48 relative overflow-hidden bg-secondary/50 dark:bg-slate-900/20 transition-colors duration-500">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter font-heading reveal-text"
          >
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            >
              Core <span className="text-accent">Solutions</span>
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body"
          >
            We deliver end-to-end digital excellence through strategic engineering and visionary design.
          </motion.p>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <SlideIn
              key={service.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
              className={service.className}
            >
              <Card className="h-full border-border bg-card/80 dark:bg-card/40 backdrop-blur-2xl overflow-hidden group relative min-h-[350px] shadow-sm hover:shadow-xl transition-all duration-500">
                <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-10 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 border border-border/50`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 tracking-tighter text-foreground">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-body">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-end mt-10">
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
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