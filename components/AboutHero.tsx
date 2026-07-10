"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-cover bg-center px-4 pt-28 pb-16 sm:min-h-[75vh] sm:px-6 md:pt-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center text-white"
      >
        <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400 sm:tracking-[6px]">
          About Us
        </p>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          St. An&apos;s Secondary School
        </h1>

        <div className="mx-auto my-6 h-1 w-20 rounded-full bg-yellow-500 sm:my-8 sm:w-28" />

        <p className="mx-auto max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:text-xl">
          Since 2010, we have been committed to providing quality education,
          strong values, and a nurturing environment where every student can
          learn, grow, and succeed.
        </p>
      </motion.div>
    </section>
  );
}