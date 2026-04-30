"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Phone, Mail, Calendar } from "lucide-react"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: Phone,
      label: "Direct Line",
      href: "tel:+6281234567890",
      color: "bg-emerald-500",
    },
    {
      icon: Mail,
      label: "Inquiry",
      href: "mailto:hello@nextgeninfinity.com",
      color: "bg-blue-500",
    },
    {
      icon: Calendar,
      label: "Schedule",
      href: "#consultation",
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: 10 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="text-sm font-semibold tracking-tight bg-white dark:bg-slate-900 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                  {action.label}
                </span>
                <Button
                  size="sm"
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${action.color} hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl border border-white/10`}
                  asChild
                >
                  <a href={action.href}>
                    <action.icon size={22} className="text-white" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-2xl shadow-blue-500/20 dark:shadow-none transition-all duration-300 relative overflow-hidden border border-white/20"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <MessageCircle size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  )
}
