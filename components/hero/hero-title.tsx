import { TextReveal } from "@/components/react-bits/text-reveal"

export function HeroTitle() {
  return (
    <h1
      className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-balance mb-10 text-slate-900 dark:text-white font-heading"
    >
      <TextReveal>Architecting</TextReveal>
      <TextReveal delay={0.2}>
        <span className="text-blue-600 dark:text-blue-400">Elite</span> Solutions
      </TextReveal>
    </h1>
  )
}
