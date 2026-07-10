"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  GraduationCap,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    number: "2010",
    label: "Founded",
  },
  {
    icon: Users,
    number: "1200+",
    label: "Students",
  },
  {
    icon: GraduationCap,
    number: "60+",
    label: "Qualified Teachers",
  },
  {
    icon: Trophy,
    number: "100%",
    label: "RBSE Results",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16 md:mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            Our Achievements
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Building Excellence Since 2010
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            For over a decade, St. An&apos;s Secondary School has been committed
            to academic excellence, character building, and holistic
            development, creating confident and responsible citizens for
            tomorrow.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
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
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-500 hover:shadow-2xl sm:rounded-3xl sm:p-8"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:mb-6 sm:h-16 sm:w-16">
                  <Icon
                    size={32}
                    className="text-yellow-600"
                  />
                </div>

                <h3 className="text-3xl font-black text-gray-900 sm:text-4xl">
                  {item.number}
                </h3>

                <div className="mx-auto my-4 h-1 w-10 rounded-full bg-yellow-500"></div>

                <p className="text-sm font-semibold text-gray-600 sm:text-base">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}