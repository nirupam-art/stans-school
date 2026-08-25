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
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 pt-36 pb-20 text-center sm:px-6 sm:pb-24 lg:pt-24">
        <div className="w-full max-w-5xl">
          {/* Admissions Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-yellow-300/40 bg-yellow-400/90 backdrop-blur-md px-5 py-2 text-sm font-black text-slate-950 shadow-[0_0_30px_rgba(250,204,21,0.35)] cursor-default transition"
          >
            <Sparkles size={16} className="text-slate-950 animate-spin-slow" />
            <span>Admissions Open for Session 2026–27</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85, ease: "easeOut" }}
            className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            St. An&apos;s School
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
              Nurturing Minds
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl"
          >
            Excellence in Education • Character Building • Sports &amp; Leadership • Holistic Growth
          </motion.p>

          {/* Feature Highlights Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7 }}
            className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md shadow-md transition"
                >
                  <Icon size={16} className="text-yellow-400" />
                  <span>{item.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.75 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
          >
            <Link
              href="/admissions"
              className="group relative z-30 w-full overflow-hidden rounded-full bg-yellow-400 px-9 py-4 text-center font-black text-slate-950 shadow-[0_0_35px_rgba(250,204,21,0.4)] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Apply for Admission
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <span className="absolute inset-y-0 -left-16 w-16 rotate-12 bg-white/40 transition-all duration-700 group-hover:left-[120%]" />
            </Link>

            <button
              type="button"
              onClick={() => scrollToSection("gallery")}
              className="group relative z-30 w-full rounded-full border-2 border-white/80 bg-slate-950/40 backdrop-blur-md px-8 py-4 text-center font-black text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:bg-white hover:text-slate-950 sm:w-auto shadow-lg"
            >
              Explore Campus Life
            </button>
          </motion.div>

          {/* Interactive Slider Dots with Progress Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="relative z-30 mt-10 flex items-center justify-center gap-3"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group relative p-1.5 focus:outline-none"
              >
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    currentImage === index
                      ? "w-10 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)]"
                      : "w-2.5 bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Dynamic News Popup */}
      <HeroNewsPopup />

      {/* Smooth Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 sm:block"
      >
        <button
          type="button"
          onClick={() => scrollToSection("achievements")}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-yellow-400"
        >
          <div className="flex h-11 w-6 justify-center rounded-full border-2 border-white/40 bg-white/5 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="mt-1.5 h-2 w-1.5 rounded-full bg-yellow-400"
            />
          </div>
          <span>Scroll</span>
        </button>
      </motion.div>
    </section>
  );
}