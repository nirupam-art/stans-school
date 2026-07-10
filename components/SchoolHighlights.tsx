"use client";

import { motion } from "framer-motion";
import {
  School,
  MonitorSmartphone,
  FlaskConical,
  Library,
  Trophy,
  ShieldCheck,
  Bus,
  Trees,
} from "lucide-react";

const highlights = [
  {
    icon: School,
    title: "RBSE Affiliated",
    description: "Quality education following the Rajasthan Board curriculum.",
  },
  {
    icon: MonitorSmartphone,
    title: "Smart Classrooms",
    description: "Interactive teaching supported by modern technology.",
  },
  {
    icon: FlaskConical,
    title: "Science Laboratory",
    description: "Well-equipped labs for practical learning and experiments.",
  },
  {
    icon: Library,
    title: "Library",
    description: "A growing collection of books to inspire reading and research.",
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
    description: "Encouraging physical fitness, teamwork, and leadership.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    description: "A secure and disciplined environment for every student.",
  },
  {
    icon: Bus,
    title: "Transport Facility",
    description: "Safe and reliable transportation for students.",
  },
  {
    icon: Trees,
    title: "Healthy Environment",
    description: "A clean, green, and student-friendly campus.",
  },
];

export default function SchoolHighlights() {
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
            School Highlights
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            What Makes Our School Special
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            We provide an environment where students can learn, grow, and
            discover their full potential through academics, technology, sports,
            and values.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl sm:rounded-3xl sm:p-8"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:mb-6 sm:h-16 sm:w-16">
                  <Icon className="text-yellow-600" size={30} />
                </div>

                <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}