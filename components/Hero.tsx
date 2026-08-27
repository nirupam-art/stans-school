"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Sparkles, Award, GraduationCap, Shield } from "lucide-react";

import HeroNewsPopup from "./HeroNewsPopup";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const images = [
  "/hero-images/student1.jpg",
  "/hero-images/student2.jpg",
  "/hero-images/student3.jpg",
];

const highlights = [
  { icon: GraduationCap, text: "English Medium" },
  { icon: Award, text: "Play Group to Class X" },
  { icon: Shield, text: "Safe & Disciplined Campus" },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const glowOneRef = useRef<HTMLDivElement | null>(null);
  const glowTwoRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  // Smooth Auto Slide (Pauses when user hovers controls)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      // Background parallax on scroll
      gsap.to(backgroundRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Smooth floating ambient glows
      gsap.to(glowOneRef.current, {
        x: 40,
        y: -30,
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glowTwoRef.current, {
        x: -35,
        y: 35,
        scale: 1.12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images With Smooth Fade & GSAP Parallax */}
      <div ref={backgroundRef} className="absolute inset-0 z-0 scale-105 pointer-events-none">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[1800ms] cubic-bezier(0.16, 1, 0.3, 1) ${
              index === currentImage
                ? "opacity-100 scale-105 filter-none"
                : "opacity-0 scale-100 filter blur-sm"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Modern Vignette & Soft Gradient Overlays (No Harsh Grid Lines) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/75 via-transparent to-slate-950/60 pointer-events-none" />

      {/* Floating Aurora Ambient Glows */}
      <div
        ref={glowOneRef}
        className="pointer-events-none absolute -left-20 top-20 z-10 h-96 w-96 rounded-full bg-yellow-500/15 blur-[100px]"
      />
      <div
        ref={glowTwoRef}
        className="pointer-events-none absolute -right-20 bottom-16 z-10 h-[420px] w-[420px] rounded-full bg-amber-500/15 blur-[120px]"
      />

      {/* Left/Right Smooth Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="group absolute left-4 sm:left-8 top-1/2 z-30 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-slate-950 shadow-xl"
      >
        <ChevronLeft size={22} className="transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="group absolute right-4 sm:right-8 top-1/2 z-30 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-slate-950 shadow-xl"
      >
        <ChevronRight size={22} className="transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Main Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 pt-32 pb-20 text-center sm:px-6 sm:pb-24">
        <div className="w-full max-w-4xl">
          {/* Subtle Admissions Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-yellow-300 shadow-sm cursor-default"
          >
            <Sparkles size={14} className="text-yellow-400" />
            <span>Admissions Open for Session 2026–27</span>
          </motion.div>

          {/* Minimal Clean Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            St. An&apos;s School
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Nurturing Minds
            </span>
          </motion.h1>

          {/* Minimal Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl font-medium"
          >
            Empowering students from Play Group to Class X with academic excellence, strong character, and holistic development.
          </motion.p>

          {/* Minimal CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4"
          >
            <Link
              href="/admissions"
              className="group relative z-30 w-full rounded-full bg-yellow-400 px-8 py-3.5 text-center text-sm font-black text-slate-950 shadow-[0_0_25px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Apply for Admission
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => scrollToSection("gallery")}
              className="group relative z-30 w-full rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 py-3.5 text-center text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:bg-white/10 sm:w-auto"
            >
              Explore Campus Life
            </button>
          </motion.div>

          {/* Minimal Slider Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-30 mt-12 flex items-center justify-center gap-2.5"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group p-1 focus:outline-none"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentImage === index
                      ? "w-8 bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                      : "w-2 bg-white/30 group-hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Sleek Non-intrusive News Popup */}
      <HeroNewsPopup />
    </section>
  );
}