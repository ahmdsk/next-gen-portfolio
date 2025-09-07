"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn } from "@/components/react-bits/fade-in"
import { StaggerContainer } from "@/components/react-bits/stagger-container"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const quickLinks = [
  { name: "About Kita", href: "#" },
  { name: "Service", href: "#services" },
  { name: "Portfolio", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Join Tim", href: "#" },
  { name: "Contact", href: "#contact" },
]

const services = [
  { name: "Bikin Website", href: "#" },
  { name: "App Mobile", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "Konsultasi IT", href: "#" },
  { name: "Maintenance", href: "#" },
  { name: "SEO Boost", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-accent/5 via-background to-primary/5 dark:from-accent/10 dark:via-background dark:to-primary/10 text-foreground relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 dark:from-accent/20 dark:via-transparent dark:to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent dark:from-accent/30 dark:via-transparent dark:to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-accent">DevStudio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Partner terpercaya buat bikin digital presence kamu makin kece! Kita pake teknologi terbaru dan tim yang
              passionate banget 🚀
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-accent hover:to-primary transition-all duration-300 backdrop-blur-sm border border-accent/20 text-muted-foreground hover:text-accent-foreground hover:border-transparent"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-secondary">Hit Us Up! 📱</h4>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "hello@devstudio.com" },
                { icon: Phone, text: "+62 812-3456-7890" },
                { icon: MapPin, text: "Jakarta, Indonesia" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.text}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <contact.icon size={16} className="text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <FadeIn delay={0.8}>
              <div className="pt-4">
                <h5 className="font-medium mb-2 text-secondary">Newsletter 📧</h5>
                <p className="text-muted-foreground text-sm mb-3">
                  Dapetin update terbaru tentang tech dan tips coding yang kece!
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Email kamu"
                    className="bg-background/50 border-accent/30 focus:border-accent backdrop-blur-sm"
                  />
                  <Button className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-accent-foreground shadow-lg border-0">
                    Subscribe
                  </Button>
                </div>
              </div>
            </FadeIn>
          </motion.div>
        </StaggerContainer>

        <FadeIn delay={1.0}>
          <div className="border-t border-border/50 mt-12 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 DevStudio. All rights reserved. Dibuat dengan <span className="text-red-500 animate-pulse">❤️</span>{" "}
              dan banyak kopi ☕ di Indonesia
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
