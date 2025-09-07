"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

type Renderer = "svg" | "canvas" | "html";

interface BaseProps {
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  renderer?: Renderer;
}

type WithSrc = { src: string; data?: never }; // gunakan URL/path ke .json
type WithData = { data: object; src?: never }; // gunakan objek JSON hasil import

type LottieAnimationProps = BaseProps & (WithSrc | WithData);

export function LottieAnimation({
  className = "",
  autoplay = true,
  loop = true,
  renderer = "svg",
  ...source
}: LottieAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // Pastikan salah satu sumber ada
    if (!("src" in source) && !("data" in source)) {
      console.error("LottieAnimation: provide either `src` or `data`.");
      return;
    }

    let animationInstance: AnimationItem | null = null;

    const loadLottie = async () => {
      try {
        const lottie = (await import("lottie-web")).default;
        animationInstance = lottie.loadAnimation({
          container: ref.current!,
          renderer,
          loop,
          autoplay,
          ...("data" in source
            ? { animationData: source.data }
            : { path: source.src }),
        });
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
      }
    };

    loadLottie();

    return () => {
      animationInstance?.destroy();
    };
    // masukkan dependensi sesuai sumber yang dipakai
  }, [
    autoplay,
    loop,
    renderer,
    "data" in source ? source.data : undefined,
    "src" in source ? source.src : undefined,
  ]);

  return <div ref={ref} className={className} />;
}
