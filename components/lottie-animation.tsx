"use client"

import { useEffect, useRef } from "react"

interface LottieAnimationProps {
  src: string
  className?: string
  autoplay?: boolean
  loop?: boolean
}

export function LottieAnimation({ src, className = "", autoplay = true, loop = true }: LottieAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationInstance: any = null

    const loadLottie = async () => {
      try {
        const lottie = (await import("lottie-web")).default

        if (ref.current) {
          animationInstance = lottie.loadAnimation({
            container: ref.current,
            renderer: "svg",
            loop,
            autoplay,
            path: src,
          })
        }
      } catch (error) {
        console.error("Failed to load Lottie animation:", error)
      }
    }

    loadLottie()

    return () => {
      if (animationInstance) {
        animationInstance.destroy()
      }
    }
  }, [src, autoplay, loop])

  return <div ref={ref} className={className} />
}
