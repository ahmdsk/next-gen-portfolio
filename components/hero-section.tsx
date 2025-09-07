"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/react-bits/fade-in"
import { SlideIn } from "@/components/react-bits/slide-in"
import { StaggerContainer } from "@/components/react-bits/stagger-container"
import { ScaleIn } from "@/components/react-bits/scale-in"
import { LottieAnimation } from "@/components/lottie-animation"
import { ArrowRight, Sparkles, Code, Smartphone, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 dark:from-background dark:via-background dark:to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent dark:via-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent dark:from-accent/20" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20">
              <Sparkles size={16} className="animate-pulse" />
              Tim Developer Paling Asik! ✨
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.4}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
              Bikin App & Website <span className="text-accent">Kece Badai!</span> 🚀
            </h1>
          </SlideIn>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8 leading-relaxed">
              Punya ide gila buat app atau website? Yuk wujudin bareng kita! Kita bakal bantuin kamu dari konsep sampai
              jadi, pake teknologi terbaru yang bikin projectmu stand out dari yang lain 💯
            </p>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.2}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Yuk Chat Dulu!
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent/10 bg-transparent backdrop-blur-sm"
              >
                Liat Karya Kita
              </Button>
            </motion.div>
          </StaggerContainer>

          {/* Enhanced stats section with icons */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ScaleIn delay={0.8}>
              <div className="space-y-2 p-6 rounded-lg bg-gradient-to-br from-background/50 to-accent/5 backdrop-blur-sm border border-accent/10">
                <Code className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Project Kece</div>
              </div>
            </ScaleIn>
            <ScaleIn delay={1.0}>
              <div className="space-y-2 p-6 rounded-lg bg-gradient-to-br from-background/50 to-accent/5 backdrop-blur-sm border border-accent/10">
                <Smartphone className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Client Happy</div>
              </div>
            </ScaleIn>
            <ScaleIn delay={1.2}>
              <div className="space-y-2 p-6 rounded-lg bg-gradient-to-br from-background/50 to-accent/5 backdrop-blur-sm border border-accent/10">
                <Globe className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Siap Bantuin</div>
              </div>
            </ScaleIn>
          </StaggerContainer>
        </div>
      </div>

      {/* Floating Lottie animation */}
      <div className="absolute bottom-10 right-10 opacity-20 dark:opacity-30">
        <LottieAnimation
          src="https://lottie.host/4f3c6b7e-8b2e-4c8a-9c4a-2d8f1e6b3a9c/9K8j2L4m3n.json"
          className="w-32 h-32"
        />
      </div>
    </section>
  )
}
