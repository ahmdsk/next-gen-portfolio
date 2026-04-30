"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScaleIn } from "@/components/react-bits/scale-in"
import { ArrowRight, CheckCircle } from "lucide-react"

import { MagneticButton } from "@/components/react-bits/magnetic-button"

export function CTASection() {
  const benefits = ["Strategic Consultation", "Performance Audits", "Scalable Engineering"]

  return (
    <section className="py-48 relative overflow-hidden bg-accent/5 transition-colors duration-500">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter font-heading text-foreground reveal-text">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            >
              Accelerate Your <span className="text-accent">Future</span>
            </motion.span>
          </h2>

          <p className="text-xl md:text-3xl text-muted-foreground mb-20 text-pretty max-w-4xl mx-auto leading-relaxed font-body">
            Partner with NextGenInfinity to transform your organization through elite technical
            engineering and visionary digital strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <MagneticButton strength={0.4}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold h-20 px-16 rounded-2xl group shadow-2xl shadow-accent/20 transition-all duration-300 font-accent text-lg"
              >
                Initialize Project
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Button
                size="lg"
                variant="outline"
                className="h-20 px-16 rounded-2xl border-border bg-background/50 text-foreground hover:bg-secondary transition-all duration-500 backdrop-blur-xl font-accent text-lg"
              >
                Download Capabilities
              </Button>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 text-sm font-bold uppercase tracking-widest text-muted-foreground font-accent">
            {benefits.map((benefit, index) => (
              <ScaleIn key={benefit} delay={index * 0.1}>
                <div className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-accent" />
                  <span>{benefit}</span>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

