"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/react-bits/fade-in"
import { ScaleIn } from "@/components/react-bits/scale-in"
import { StaggerContainer } from "@/components/react-bits/stagger-container"
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react"

export function CTASection() {
  const benefits = ["Konsultasi gratis dong!", "Estimasi dalam 24 jam aja", "Support terus sampai selesai"]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl"
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
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20">
              <Sparkles size={16} className="animate-pulse" />
              Ready Buat Mulai Project? 🚀
            </div>
          </FadeIn>

          <ScaleIn delay={0.4}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Yuk Wujudin{" "}
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-accent animate-gradient">
                Impian Digital
              </span>{" "}
              Kamu Bareng Kita! ✨
            </h2>
          </ScaleIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              Join sama puluhan client yang udah percaya sama kita buat bikin solusi digital yang mengubah bisnis
              mereka. Sekarang giliran kamu yang bakal sukses! 💪
            </p>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.2}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
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
                Gas Mulai Project!
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
                Chat Tim Kita
              </Button>
            </motion.div>
          </StaggerContainer>

          <FadeIn delay={1.0}>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle size={16} className="text-accent" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
