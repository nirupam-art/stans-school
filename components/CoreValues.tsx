"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Star,
  BookOpen,
  Users,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Discipline",
    description: "Developing responsible and disciplined individuals.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Teaching kindness, empathy, and respect for everyone.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Encouraging students to achieve their highest potential.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description: "Creating curious minds with a love for learning.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Building leadership and collaboration through participation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Promoting creativity and modern thinking in education.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
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
            Core Values
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Values That Shape Every Student
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            At St. An&apos;s Secondary School, our values guide every lesson,
            every activity, and every student&apos;s journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:rounded-3xl sm:p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:mb-6 sm:h-16 sm:w-16">
                  <Icon size={30} className="text-yellow-600" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">
                  {value.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}