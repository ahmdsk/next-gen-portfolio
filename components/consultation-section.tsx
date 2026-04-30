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
    title: "Strategic Advisory",
    description: "Connect with our principal engineers for high-level technical strategy and roadmap planning.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Phone,
    title: "Voice Direct",
    description: "In-depth verbal briefings to clarify project scope and technical requirements.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Video,
    title: "Executive Briefing",
    description: "Virtual discovery sessions to align digital objectives with business outcomes.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
]

const benefits = [
  "Comprehensive Technical Feasibility Audit",
  "Tailored Digital Transformation Roadmap",
  "Scalable Infrastructure and Budget Modeling",
  "Direct Access to Senior Technical Leadership",
]

export function ConsultationSection() {
  return (
    <section id="consultation" className="py-32 bg-secondary/50 dark:bg-slate-900/20 transition-colors duration-500 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-10 tracking-tighter font-heading reveal-text">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              >
                Strategic Consultation
              </motion.span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-body leading-relaxed">
              We provide expert technical analysis and strategic foresight to ensure your digital
              investments yield maximum enterprise value.
            </p>

            <div className="space-y-6 mb-12">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 group"
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-lg dark:text-slate-300 font-body">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold h-16 px-10 rounded-full shadow-2xl transition-all duration-300 font-accent"
            >
              Schedule an Executive Briefing
            </Button>
          </div>

          <div className="space-y-6">
            {consultationMethods.map((method) => (
              <Card
                key={method.title}
                className="hover:shadow-2xl transition-all duration-500 group border-border bg-card/80 dark:bg-white/5 backdrop-blur-xl overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-secondary dark:bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-border group-hover:border-accent/50 transition-colors">
                      <method.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 text-foreground">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-body">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

