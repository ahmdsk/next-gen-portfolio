"use client"

import React, { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"
import { useTheme } from "next-themes"

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "var(--font-body)",
})

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState("")
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    mermaid.initialize({
      theme: resolvedTheme === "dark" ? "dark" : "default",
    })
    const renderChart = async () => {
      try {
        if (ref.current) {
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
          const { svg } = await mermaid.render(id, chart)
          setSvg(svg)
        }
      } catch (e) {
        console.error("Mermaid parsing failed", e)
      }
    }
    renderChart()
  }, [chart, resolvedTheme])

  return (
    <div 
      className="mermaid-container flex justify-center w-full my-8 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800"
      ref={ref} 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  )
}
