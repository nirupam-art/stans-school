"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ImageIcon } from "lucide-react";

export default function FacilityCTA() {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-2xl sm:p-10 md:p-16"
        >
          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-yellow-700 sm:text-sm">
            Join Our School
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Experience Quality Education at{" "}
            <span className="text-yellow-500">
              St. An&apos;s School
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Our facilities are designed to provide every student with a safe,
            inspiring, and engaging learning environment. We welcome you to
            learn more about our school and become part of the St. An&apos;s
            family.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-500 sm:w-auto"
            >
              <Phone size={20} />
              Contact Us
            </Link>

            <Link
              href="/gallery"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-8 py-4 font-bold text-gray-800 transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50 sm:w-auto"
            >
              <ImageIcon size={20} />
              Explore Gallery
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}