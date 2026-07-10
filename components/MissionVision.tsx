"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            Our Purpose
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Mission & Vision
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            Our commitment is to inspire excellence in academics, character,
            leadership, and lifelong learning while preparing students for a
            successful future.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:rounded-3xl sm:p-8 md:p-10"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:h-16 sm:w-16">
              <Target size={30} className="text-yellow-600 sm:size-8" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl">
              Our Mission
            </h3>

            <p className="text-base leading-8 text-gray-600">
              To provide quality education that develops academic excellence,
              discipline, creativity, confidence, and moral values. We strive to
              create an environment where every student is encouraged to reach
              their full potential.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:rounded-3xl sm:p-8 md:p-10"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:h-16 sm:w-16">
              <Eye size={30} className="text-yellow-600 sm:size-8" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl">
              Our Vision
            </h3>

            <p className="text-base leading-8 text-gray-600">
              To nurture responsible, compassionate, and future-ready citizens
              who contribute positively to society through knowledge, integrity,
              innovation, and leadership.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}