"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SlideIn } from "@/components/react-bits/slide-in"
import { StaggerContainer } from "@/components/react-bits/stagger-container"
import { ScaleIn } from "@/components/react-bits/scale-in"
import { MessageSquare, Phone, Video, CheckCircle } from "lucide-react"

const consultationMethods = [
  {
    icon: MessageSquare,
    title: "Chat Santai",
    description: "Ngobrol real-time lewat chat buat konsultasi yang cepet dan gak ribet!",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Phone,
    title: "Telpon Aja",
    description: "Konsultasi mendalam lewat telpon sama tim expert kita yang asik banget",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Video,
    title: "Video Call",
    description: "Meeting virtual buat presentasi dan diskusi detail project kamu dengan lebih personal",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
]

const benefits = [
  "Konsultasi gratis buat project pertama kamu!",
  "Analisis kebutuhan bisnis yang detail banget",
  "Estimasi timeline dan budget yang akurat",
  "Roadmap pengembangan yang jelas dan mudah dipahami",
]

export function ConsultationSection() {
  return (
    <section id="consultation" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left" delay={0.2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Konsultasi{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Gratis</span>{" "}
                Sama Tim Kece Kita! 💬
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                Dapetin konsultasi profesional buat analisis kebutuhan bisnis kamu. Tim expert kita siap bantu rencanain
                solusi digital yang pas banget buat kamu! ✨
              </p>

              <StaggerContainer staggerDelay={0.1} className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center gap-3 group"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </StaggerContainer>

              <ScaleIn delay={0.8}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Yuk Konsultasi Sekarang!
                </Button>
              </ScaleIn>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.4}>
            <StaggerContainer staggerDelay={0.15} className="space-y-6">
              {consultationMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`hover:shadow-xl transition-all duration-300 group hover:border-accent/50 bg-gradient-to-br ${method.gradient} backdrop-blur-sm border-accent/10`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                          <method.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                            {method.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
