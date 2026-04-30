"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HeroTitle } from "@/components/hero/hero-title";
import { HeroDescription } from "@/components/hero/hero-description";
import { HeroButtons } from "@/components/hero/hero-buttons";
import { HeroStats } from "@/components/hero/hero-stats";
import { ThreeBackground } from "@/components/three-background";
import { animate, stagger } from "animejs";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".hero-animate");

      // Reveal animation for the title
      animate(".hero-title-reveal", {
        y: ["100%", "0%"],
        opacity: [0, 1],
        duration: 1500,
        ease: "outExpo",
      });

      // Staggered entrance for other elements
      animate(".hero-stagger", {
        y: [40, 0],
        opacity: [0, 1],
        delay: stagger(150, { start: 500 }),
        duration: 1200,
        ease: "outExpo",
      });

      // Scale in for the background or accent elements
      animate(".hero-scale", {
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 2000,
        ease: "outExpo",
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ThreeBackground />

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero-title-reveal overflow-hidden">
            <HeroTitle />
          </div>
          <div className="hero-stagger">
            <HeroDescription />
          </div>
          <div className="hero-stagger mt-10">
            <HeroButtons />
          </div>
          <div className="hero-stagger mt-20">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
}

