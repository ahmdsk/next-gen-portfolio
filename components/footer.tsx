"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"

const socialLinks = [
  { icon: Github, href: "#", label: "Github" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const t = useTranslations('Footer')

  const footerLinks = [
    {
      title: t('company'),
      links: [
        { name: t('aboutUs'), href: "#" },
        { name: t('ourProcess'), href: "#" },
        { name: t('portfolio'), href: "#" },
        { name: t('contact'), href: "#contact" },
      ],
    },
    {
      title: t('services'),
      links: [
        { name: t('webDev'), href: "#services" },
        { name: t('mobileSolutions'), href: "#services" },
        { name: t('uiUxDesign'), href: "#services" },
        { name: t('cloudServices'), href: "#services" },
      ],
    },
  ]

  return (
    <footer className="bg-background pt-32 pb-16 text-foreground border-t border-border/50 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-3xl font-black tracking-tighter">
              NextGen<span className="text-accent">Infinity</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed font-body text-lg">
              {t('description')}
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
                    <a href={link.href} className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-body">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-10">{t('insights')}</h4>
            <p className="text-muted-foreground mb-8 font-body">{t('insightsDesc')}</p>
            <div className="flex flex-col gap-4">
              <Input
                placeholder={t('businessEmail')}
                className="h-14 bg-secondary border-border focus:border-blue-500 rounded-xl px-6"
              />
              <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-transform active:scale-95">
                {t('subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-body">
            {t('rights', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-10 text-sm text-muted-foreground font-body">
            <a href="#" className="hover:text-foreground transition-colors">{t('privacy')}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

