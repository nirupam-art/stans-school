"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Users,
  GraduationCap,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 2010,
    prefix: "",
    suffix: "",
    label: "Year Founded",
    description: "15+ Years of Proven Educational Legacy",
  },
  {
    icon: Users,
    value: 1200,
    prefix: "",
    suffix: "+",
    label: "Happy Students",
    description: "Active Learners from Nursery to Class X",
  },
  {
    icon: GraduationCap,
    value: 60,
    prefix: "",
    suffix: "+",
    label: "Expert Educators",
    description: "Dedicated, Caring Faculty Mentors",
  },
  {
    icon: Trophy,
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Board Pass Rate",
    description: "Consistent Academic Excellence",
  },
];

export default function Achievements() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="achievements"
      ref={ref}
      className="scroll-mt-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-18"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            Our Milestone Achievements
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Building Excellence Since 2010
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            For over a decade, St. An&apos;s Secondary School has been shaping young minds with academic rigor, ethical values, modern sports, and holistic character building.
          </p>
        </motion.div>

        {/* Interactive Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative flex flex-col items-center justify-between rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-lg transition-all duration-300 hover:border-yellow-400/50 hover:shadow-2xl sm:p-8"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-yellow-400/0 via-yellow-400/0 to-yellow-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100/80 text-yellow-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-950 shadow-md">
                  <Icon size={32} />
                </div>

                <div className="text-4xl font-black text-slate-900 sm:text-5xl">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      separator=","
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  ) : (
                    <span>0</span>
                  )}
                </div>

                <div className="my-3.5 h-1 w-10 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-16" />

                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  {item.label}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
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