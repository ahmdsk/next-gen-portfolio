"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
]

import { StaggerContainer } from "@/components/react-bits/stagger-container"
import { ScaleIn } from "@/components/react-bits/scale-in"
import { useTranslations } from "next-intl"

export function TechSection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('Tech')

  return (
    <section id="tech" className="py-32 bg-transparent transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter font-heading text-slate-900 dark:text-white">
              {t('title')} <span className="text-blue-600 dark:text-blue-500">{t('titleAccent')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-body max-w-2xl">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <ScaleIn
              key={tech.name}
              delay={index * 0.05}
            >
              <Card className="bg-card/90 dark:bg-card/40 border-border backdrop-blur-sm hover:border-accent/50 transition-all duration-300 premium-shadow">
                <CardContent className="p-8 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 mb-6">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain filter grayscale dark:invert-[0.1] hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">{tech.name}</span>
                </CardContent>
              </Card>
            </ScaleIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

