"use client";

import { motion } from "framer-motion";
import {
  School,
  BookOpen,
  FlaskConical,
  Monitor,
  Star,
} from "lucide-react";

const timeline = [
  {
    year: "2010",
    title: "School Established",
    description:
      "St. An's Secondary School began its journey with a vision of quality education.",
    icon: School,
  },
  {
    year: "2013",
    title: "Academic Growth",
    description:
      "The school expanded its academic programs and strengthened its teaching standards.",
    icon: BookOpen,
  },
  {
    year: "2016",
    title: "Science Education",
    description:
      "Science laboratories were enhanced to encourage practical learning.",
    icon: FlaskConical,
  },
  {
    year: "2022",
    title: "Modern Learning",
    description:
      "Technology and smart teaching methods became an integral part of classrooms.",
    icon: Monitor,
  },
  {
    year: "Today",
    title: "Growing Every Year",
    description:
      "Continuing our commitment to academic excellence and holistic development.",
    icon: Star,
  },
];

export default function Timeline() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            Our Journey
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            School Timeline
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-4 border-l-4 border-yellow-500 sm:ml-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="relative mb-12 ml-8 rounded-2xl bg-white p-5 shadow-md transition hover:shadow-xl sm:mb-14 sm:ml-10 sm:p-6"
              >
                <div className="absolute -left-[54px] top-5 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500 shadow-lg sm:-left-[62px] sm:h-12 sm:w-12">
                  <Icon size={21} className="text-white" />
                </div>

                <span className="text-base font-bold text-yellow-600 sm:text-lg">
                  {item.year}
                </span>

                <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
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