"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FacilitiesHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://picsum.photos/1600/900?random=30')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400 sm:tracking-[6px]">
          St. An&apos;s School
        </p>

        <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Our Facilities
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:text-xl">
          We provide a safe, modern, and inspiring environment where students
          can learn, grow, and achieve their full potential.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="w-full rounded-full bg-yellow-400 px-8 py-4 text-center font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-500 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}