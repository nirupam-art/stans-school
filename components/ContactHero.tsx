"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-500 px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <div className="absolute inset-0 bg-black/45" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center text-white"
      >
        <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-200 sm:tracking-[6px]">
          Contact Us
        </p>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Get In Touch
        </h1>

        <div className="mx-auto my-6 h-1 w-20 rounded-full bg-white sm:my-8 sm:w-24" />

        <p className="mx-auto max-w-3xl text-base leading-7 text-gray-100 sm:text-lg sm:leading-8 md:text-xl">
          We&apos;d love to hear from you. Whether you have an admission enquiry,
          need information about the school, or wish to visit our campus, our
          team is here to help.
        </p>
      </motion.div>
    </section>
  );
}