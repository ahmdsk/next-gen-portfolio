"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('Header')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t('navServices'), href: "#services" },
    { name: t('navTech'), href: "#tech" },
    { name: t('navProcess'), href: "#consultation" },
    { name: t('navContact'), href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full container rounded-2xl border transition-all duration-500 flex items-center justify-between px-6 py-3 ${isScrolled
          ? "bg-background/20 backdrop-blur-xl border-border/50 shadow-2xl"
          : "bg-transparent border-transparent"
          }`}
      >
        <div className="text-2xl font-black tracking-tighter text-foreground">
          NextGen<span className="text-blue-600 dark:text-blue-500">Infinity</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="h-4 w-px bg-border" />
          <LanguageSwitcher />
          <ThemeToggle />
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 text-white font-bold rounded-full px-8 h-11 transition-transform hover:scale-105 active:scale-95">
            {t('contactUs')}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="text-foreground p-1 transition-transform active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-background/95 backdrop-blur-3xl border border-border rounded-3xl p-8 md:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xl font-semibold tracking-tighter text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 text-white font-bold rounded-2xl h-16 text-lg transition-transform active:scale-95">
                {t('contactUs')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


