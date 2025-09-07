"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/react-bits/fade-in"
import { StaggerContainer } from "@/components/react-bits/stagger-container"
import { ScaleIn } from "@/components/react-bits/scale-in"
import { Monitor, Smartphone, Palette, Zap } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Bikin Website Kece",
    description:
      "Website yang responsive dan kekinian pake teknologi terbaru kayak React, Next.js. Dijamin fast loading dan bikin pengunjung betah!",
    features: ["Design Responsive", "SEO Friendly", "Loading Cepet", "UI/UX Modern"],
    gradient: "from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10",
  },
  {
    icon: Smartphone,
    title: "App Mobile Mantap",
    description:
      "Bikin app mobile yang smooth banget buat iOS dan Android. User-friendly dan performanya juara, dijamin nagih dipake terus!",
    features: ["Cross Platform", "Performa Native", "Push Notif", "Bisa Offline"],
    gradient: "from-green-500/5 to-emerald-500/5 dark:from-green-500/10 dark:to-emerald-500/10",
  },
  {
    icon: Palette,
    title: "Design UI/UX Aesthetic",
    description: "Design yang eye-catching dan user experience yang intuitif. Bikin user jatuh cinta sama produk kamu!",
    features: ["User Research", "Wireframing", "Prototyping", "Design System"],
    gradient: "from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10",
  },
  {
    icon: Zap,
    title: "Optimasi Super Cepat",
    description:
      "Bikin app kamu jadi lightning fast! Optimasi performa yang bikin user experience makin smooth dan enjoyable.",
    features: ["Speed Boost", "Database Tuning", "Caching Strategy", "Real-time Monitor"],
    gradient: "from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-4">
        <FadeIn delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
              Service Kita Yang <span className="text-accent">Paling Hits!</span> 🔥
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Semua yang kamu butuhin buat bikin digital presence yang kece, dari website sampai app mobile. Tim kita
              siap bantuin! ✨
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`h-full hover:shadow-xl transition-all duration-300 group hover:border-accent/50 bg-gradient-to-br ${service.gradient} backdrop-blur-sm border-border/50 hover:bg-gradient-to-br hover:from-accent/3 hover:to-accent/5 dark:hover:from-accent/10 dark:hover:to-accent/15`}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <ScaleIn delay={index * 0.1 + 0.3}>
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/20 dark:to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-accent/20 group-hover:to-accent/10 dark:group-hover:from-accent/30 dark:group-hover:to-accent/20 transition-all duration-300 shadow-sm">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                    </ScaleIn>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:border-accent group-hover:text-accent bg-transparent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 border-border/50"
                  >
                    Cek Lebih Detail
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
