"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroNewsPopup from "./HeroNewsPopup";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const images = [
  "/hero-images/student1.jpg",
  "/hero-images/student2.jpg",
  "/hero-images/student3.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const glowOneRef = useRef<HTMLDivElement | null>(null);
  const glowTwoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      // Background parallax on scroll
      gsap.to(backgroundRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Premium floating glow animation
      gsap.to(glowOneRef.current, {
        x: 35,
        y: -25,
        scale: 1.12,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glowTwoRef.current, {
        x: -30,
        y: 30,
        scale: 1.1,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");

    if (gallery) {
      gallery.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Images With GSAP Parallax */}
      <div ref={backgroundRef} className="absolute inset-0 z-0 scale-110">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[1600ms] ease-out ${
              index === currentImage
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-transparent to-black/50 pointer-events-none" />

      {/* Animated Glow Elements */}
      <div
        ref={glowOneRef}
        className="pointer-events-none absolute -left-24 top-28 z-10 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"
      />
      <div
        ref={glowTwoRef}
        className="pointer-events-none absolute -right-24 bottom-20 z-10 h-80 w-80 rounded-full bg-yellow-500/20 blur-3xl"
      />

      {/* Decorative Grid */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 pt-40 pb-20 text-center sm:px-6 sm:pb-24 lg:pt-24">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-400 px-4 py-2 text-sm font-black text-black shadow-[0_0_35px_rgba(250,204,21,0.35)] sm:px-5 sm:text-base"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black" />
            </span>
            Admissions Open 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.9, ease: "easeOut" }}
            className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            St. An&apos;s School
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Nurturing Minds
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg md:text-xl md:leading-8"
          >
            Excellence in Education • Character Building • Sports • Holistic
            Development
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-3"
          >
            {["English Medium", "Play Group to Class X", "Safe Campus"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.75, ease: "easeOut" }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
          >
            <Link
              href="/admissions"
              className="group relative z-30 w-full overflow-hidden rounded-full bg-yellow-400 px-8 py-4 text-center font-black text-black shadow-[0_0_35px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-105 hover:bg-yellow-500 sm:w-auto"
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute inset-y-0 -left-16 w-12 rotate-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
            </Link>

            <button
              type="button"
              onClick={scrollToGallery}
              className="relative z-30 w-full rounded-full border-2 border-white px-8 py-4 text-center font-black text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black sm:w-auto"
            >
              Explore Campus
            </button>
          </motion.div>

          {/* Slider Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82, duration: 0.6 }}
            className="relative z-30 mt-9 flex justify-center gap-3"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "w-9 bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.75)]"
                    : "w-3 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Latest News Popup */}
      <HeroNewsPopup />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 sm:block"
      >
        <a href="#why-choose" aria-label="Scroll to Why Choose Us section">
          <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm">
            <div className="mt-2 h-3 w-1.5 animate-bounce rounded-full bg-yellow-400" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}