"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  FlaskConical,
  LibraryBig,
  Bus,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const facilities = [
  {
    title: "Smart Classrooms",
    description:
      "Interactive learning spaces equipped with modern digital teaching tools.",
    icon: MonitorSmartphone,
  },
  {
    title: "Science Laboratories",
    description:
      "Well-equipped Physics, Chemistry and Biology labs for practical learning.",
    icon: FlaskConical,
  },
  {
    title: "Modern Library",
    description:
      "A rich collection of books and digital resources to encourage reading.",
    icon: LibraryBig,
  },
  {
    title: "Transport Facility",
    description:
      "Safe and reliable school transportation covering nearby areas.",
    icon: Bus,
  },
  {
    title: "Safe Campus",
    description:
      "24×7 CCTV surveillance and a secure environment for every student.",
    icon: ShieldCheck,
  },
  {
    title: "Sports Excellence",
    description:
      "Indoor and outdoor sports facilities promoting fitness and teamwork.",
    icon: Trophy,
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="py-28 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold text-center">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-center text-gray-900 mt-3">
            World-Class Facilities
          </h2>

          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
            We provide an inspiring learning environment that nurtures academic
            excellence, creativity, discipline and holistic development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group bg-white rounded-3xl p-10 shadow-lg border border-gray-200 hover:border-yellow-500 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-500 transition duration-500">

                  <Icon
                    size={38}
                    className="text-yellow-600 group-hover:text-white transition duration-500"
                  />

                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8">
                  {facility.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {facility.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-4 transition-all">
                  Learn More →
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}