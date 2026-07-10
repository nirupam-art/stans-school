"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  School,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "A strong academic foundation with experienced teachers, modern learning methods, and consistent board results.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Dedicated educators who inspire curiosity, guide every student, and encourage lifelong learning.",
  },
  {
    icon: School,
    title: "Safe & Modern Campus",
    description:
      "A caring environment with CCTV surveillance, disciplined management, and student-focused safety measures.",
  },
  {
    icon: Trophy,
    title: "Holistic Development",
    description:
      "Sports, cultural activities, leadership opportunities, and personality development for every student.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="scroll-mt-24 bg-gradient-to-b from-white to-yellow-50 py-16 sm:py-20 md:py-24"
    >
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
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Why Choose St. An&apos;s School?
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            We believe education is about more than academic success. At
            St. An&apos;s School, students grow with confidence, character,
            creativity, discipline, and compassion in a nurturing environment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl sm:rounded-3xl sm:p-7 lg:p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 transition-all duration-500 group-hover:bg-yellow-500 sm:h-16 sm:w-16">
                  <Icon
                    size={30}
                    className="text-yellow-600 transition-all duration-500 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="flex-grow text-sm leading-7 text-gray-600 sm:text-base">
                  {feature.description}
                </p>

                <Link
                  href="/facilities"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-yellow-600 transition-all duration-300 hover:translate-x-2 hover:text-yellow-700 sm:mt-8 sm:text-base"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}