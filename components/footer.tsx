"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "#", label: "Github" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Process", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Solutions", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Cloud Services", href: "#services" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-16 text-foreground border-t border-border/50 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-3xl font-black tracking-tighter">
              NextGen<span className="text-accent">Infinity</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed font-body text-lg">
              Empowering global enterprises through state-of-the-art digital engineering. We architect
              the foundations of the digital economy.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-10">{group.title}</h4>
              <ul className="space-y-6">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors font-body">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-10">Insights</h4>
            <p className="text-muted-foreground mb-8 font-body">Join our exclusive network for strategic technical intelligence.</p>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Business Email"
                className="h-14 bg-secondary border-border focus:border-accent rounded-xl px-6"
              />
              <Button className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl shadow-lg shadow-accent/20 transition-transform active:scale-95">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} PT NextGen Infinity Solutions. All rights reserved.
          </p>
          <div className="flex gap-10 text-sm text-muted-foreground font-body">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

