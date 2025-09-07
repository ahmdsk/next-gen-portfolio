"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/react-bits/fade-in"
import { StaggerContainer } from "@/components/react-bits/stagger-container"

const technologies = [
  { name: "React", logo: "/react-logo.png", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", logo: "/nextjs-logo.png", color: "from-gray-700 to-black" },
  { name: "TypeScript", logo: "/typescript-logo.png", color: "from-blue-500 to-blue-700" },
  { name: "Node.js", logo: "/nodejs-logo.png", color: "from-green-500 to-green-700" },
  { name: "React Native", logo: "/react-native-logo.png", color: "from-cyan-400 to-cyan-600" },
  { name: "Flutter", logo: "/flutter-logo.png", color: "from-blue-400 to-sky-500" },
  { name: "PostgreSQL", logo: "/postgresql-logo.png", color: "from-blue-600 to-indigo-600" },
  { name: "MongoDB", logo: "/mongodb-logo.png", color: "from-green-600 to-green-800" },
  { name: "AWS", logo: "/aws-logo.png", color: "from-orange-400 to-orange-600" },
  { name: "Docker", logo: "/docker-logo.png", color: "from-blue-500 to-blue-700" },
  { name: "Figma", logo: "/figma-logo.png", color: "from-purple-500 to-pink-500" },
  { name: "Git", logo: "/git-logo.jpg", color: "from-red-500 to-red-700" },
]

export function TechSection() {
  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-card/30 to-background">
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
              <Card className="hover:shadow-lg transition-all duration-300 hover:border-accent/50 bg-gradient-to-br from-background/50 to-card/50 backdrop-blur-sm border-accent/10">
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${tech.color} p-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <p className="text-sm font-medium group-hover:text-accent transition-colors">{tech.name}</p>
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
