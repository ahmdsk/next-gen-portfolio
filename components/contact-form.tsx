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
        toast.success("Pesan berhasil dikirim! 🚀", {
          description: "Kami akan segera menghubungi kamu balik, bestie!",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      toast.error("Oops! Ada yang error nih 😅", {
        description: "Coba lagi nanti ya, atau DM aja langsung!",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Yuk Chat Sama Kita! 💬</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ada ide gila buat app atau website? Spill aja semua! Kita siap bantu wujudin impian digital kamu jadi
                kenyataan ✨
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <SlideIn direction="left">
              <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Drop Your Message! 📝</CardTitle>
                  <CardDescription>
                    Ceritain aja semua yang ada di pikiran kamu. No worries, kita friendly kok! 😊
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Nama kamu siapa nih?"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50 border-accent/30 focus:border-accent"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email buat bales chat"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50 border-accent/30 focus:border-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Mau bikin apa nih? (Web, App, atau yang lain?)"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-accent/30 focus:border-accent"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Spill semua detail projectnya! Makin detail makin bagus 🔥"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-background/50 border-accent/30 focus:border-accent resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground group shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Lagi kirim nih...
                        </>
                      ) : (
                        <>
                          Kirim Sekarang!
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-accent">Kenapa Harus Pilih Kita? 🤔</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Fast response - gak bakal nunggu lama!
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Tim yang asik dan gak kaku
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Hasil yang bikin kamu proud
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Support 24/7 sampai project selesai
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">Quick Contact 📱</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">📧</div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">hello@devstudio.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">📞</div>
                        <div>
                          <p className="font-medium">WhatsApp</p>
                          <p className="text-muted-foreground">+62 812-3456-7890</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">📍</div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">Jakarta, Indonesia</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  )
}
