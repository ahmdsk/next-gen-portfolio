"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/react-bits/fade-in"
import { StaggerContainer } from "@/components/react-bits/stagger-container"

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    color: "from-gray-700 to-black",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    color: "from-green-500 to-green-700",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    color: "from-blue-400 to-sky-500",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    color: "from-green-600 to-green-800",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    color: "from-red-500 to-red-700",
  },
]

export function TechSection() {
  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-4">
        <FadeIn delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Tech Stack Yang <span className="text-accent">Paling Nge-hits!</span> 🔥
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Kita pake teknologi terbaru dan tools yang lagi trending buat bikin project kamu jadi yang paling kece dan
              future-ready! ✨
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:border-accent/50 bg-gradient-to-br from-background/80 to-card/80 backdrop-blur-sm border-border/50 hover:bg-gradient-to-br hover:from-accent/5 hover:to-accent/10">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-10 h-10 object-contain" />
                  </div>
                  <p className="text-sm font-medium group-hover:text-accent transition-colors text-foreground/90">
                    {tech.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.8}>
          <div className="text-center">
            <p className="text-muted-foreground">
              Dan masih banyak tech keren lainnya yang kita kuasai buat kasih{" "}
              <span className="text-accent font-medium">solusi terbaik</span> buat kamu! 🚀
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
