"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/react-bits/fade-in"
import { SlideIn } from "@/components/react-bits/slide-in"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Transmission Received", {
          description: "Our technical team will review your inquiry shortly.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      toast.error("Transmission Error", {
        description: "Please attempt to reconnect later or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <SlideIn direction="left">
              <div className="space-y-12">
                <div>
                  <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter font-heading text-foreground">
                    Let&apos;s Build <br />
                    <span className="text-accent">Greatness</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-lg font-body leading-relaxed">
                    Ready to scale your digital presence? Send us a brief and our principal engineers will provide 
                    a comprehensive technical audit within 24 hours.
                  </p>
                </div>

                <div className="space-y-8 pt-12 border-t border-border">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-secondary dark:bg-white/5 rounded-2xl flex items-center justify-center border border-border group-hover:border-accent/50 transition-colors shadow-sm">
                      <Send className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Direct Email</p>
                      <p className="text-xl font-bold text-foreground">hello@nextgeninfinity.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-secondary dark:bg-white/5 rounded-2xl flex items-center justify-center border border-border group-hover:border-accent/50 transition-colors shadow-sm">
                      <Loader2 className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Global HQ</p>
                      <p className="text-xl font-bold text-foreground">Bandar Lampung, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <Card className="border-border bg-card/80 dark:bg-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] premium-shadow relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10">
                  <Send size={150} />
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-16 bg-secondary/50 dark:bg-white/5 border-border focus:border-accent rounded-2xl text-foreground px-8 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@enterprise.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-16 bg-secondary/50 dark:bg-white/5 border-border focus:border-accent rounded-2xl text-foreground px-8 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Scope</label>
                    <Input
                      name="subject"
                      placeholder="Enterprise Web Application"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-16 bg-secondary/50 dark:bg-white/5 border-border focus:border-accent rounded-2xl text-foreground px-8 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Describe your technical requirements and business objectives..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="bg-secondary/50 dark:bg-white/5 border-border focus:border-accent rounded-2xl text-foreground p-8 resize-none transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-20 bg-accent hover:bg-accent/90 text-white font-bold rounded-2xl shadow-xl shadow-accent/20 transition-all duration-300 font-accent text-lg active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="ml-3 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  )
}

