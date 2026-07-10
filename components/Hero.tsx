"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroNewsPopup from "./HeroNewsPopup";

const images = [
  "/hero-images/student1.jpg",
  "/hero-images/student2.jpg",
  "/hero-images/student3.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 pointer-events-none ${
            index === currentImage
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 pt-40 pb-20 text-center sm:px-6 sm:pb-24 lg:pt-24">
        <div className="w-full max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black shadow-lg sm:px-5 sm:text-base"
          >
            Admissions Open 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            St. An&apos;s School
            <br />
            <span className="text-yellow-400">
              Nurturing Minds
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg md:text-xl"
          >
            Excellence in Education • Character Building • Sports •
            Holistic Development
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
          >
            <Link
              href="/admissions"
              className="relative z-30 w-full rounded-full bg-yellow-400 px-8 py-4 text-center font-bold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-500 sm:w-auto"
            >
              Apply Now
            </Link>

            <a
              href="#gallery"
              className="relative z-30 w-full rounded-full border-2 border-white px-8 py-4 text-center font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black sm:w-auto"
            >
              Explore Campus
            </a>
          </motion.div>

          {/* Slider Dots */}
          <div className="relative z-30 mt-8 flex justify-center gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "w-8 bg-yellow-400"
                    : "w-3 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Latest News Popup */}
      <HeroNewsPopup />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 sm:block">
        <a href="#why-choose" aria-label="Scroll to Why Choose Us section">
          <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-3 w-1.5 animate-bounce rounded-full bg-white"></div>
          </div>
        </a>
      </div>
    </section>
  );
}