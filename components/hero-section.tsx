"use client";

import { motion } from "framer-motion";
import { HeroBadge } from "@/components/hero/hero-badge";
import { HeroTitle } from "@/components/hero/hero-title";
import { HeroDescription } from "@/components/hero/hero-description";
import { HeroButtons } from "@/components/hero/hero-buttons";
import { HeroStats } from "@/components/hero/hero-stats";
import { LottieAnimation } from "@/components/lottie-animation";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 light-gradient-bg">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/3 to-transparent dark:via-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent dark:from-accent/20" />
      </div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-accent/20 to-primary/20 dark:from-accent/20 dark:to-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-secondary/20 to-accent/20 dark:from-secondary/20 dark:to-accent/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-accent/15 to-primary/15 dark:from-accent/15 dark:to-primary/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <HeroBadge />
          <HeroTitle />
          <HeroDescription />
          <HeroButtons />
          <HeroStats />
        </div>
      </div>

      {/* Top Left */}
      <div className="absolute top-25 md:top-35 -left-5 md:left-20 opacity-40 dark:opacity-30">
        <LottieAnimation
          src="/lotties/Rocket.json"
          className="w-32 h-32"
        />
      </div>

      {/* Top Right */}
      <div className="absolute top-90 md:top-80 -right-10 md:right-10 opacity-40 dark:opacity-30">
        <LottieAnimation
          src="/lotties/Astronout.json"
          className="w-52 h-52"
        />
      </div>
    </section>
  );
}
