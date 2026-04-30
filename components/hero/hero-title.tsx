import { TextReveal } from "@/components/react-bits/text-reveal"
import { useTranslations } from "next-intl"

export function HeroTitle() {
  const t = useTranslations('Hero');

  return (
    <h1
      className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-balance mb-10 text-slate-900 dark:text-white font-heading"
    >
      <TextReveal>{t('title1')}</TextReveal>
      <TextReveal delay={0.2}>
        <span className="text-blue-600 dark:text-blue-400">{t('title2')}</span> {t('title3')}
      </TextReveal>
    </h1>
  )
}
