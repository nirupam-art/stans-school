"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  School,
  Trophy,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "A rigorous curriculum with experienced educators, modern smart classrooms, and consistent 100% board pass results.",
    href: "/facilities#academics",
    badge: "Top Tier",
  },
  {
    icon: Users,
    title: "Dedicated Faculty",
    description:
      "Passionate teachers who provide personalized student attention, nurturing curiosity, intellect, and confidence.",
    href: "/faculty",
    badge: "Mentorship",
  },
  {
    icon: School,
    title: "Safe & Modern Campus",
    description:
      "Spacious infrastructure featuring 24/7 CCTV security, lush play areas, science & computer labs, and a vibrant library.",
    href: "/facilities#safety",
    badge: "Secure",
  },
  {
    icon: Trophy,
    title: "Sports & Holistic Growth",
    description:
      "Extracurricular athletics, performing arts, debate clubs, and leadership programs to unlock every child's full potential.",
    href: "/facilities#sports",
    badge: "Activities",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="scroll-mt-24 bg-gradient-to-b from-white via-amber-50/30 to-white py-24 sm:py-28"
    >
      <div id="facilities" className="-translate-y-28 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            The St. An&apos;s Advantage
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
            Why Parents Choose St. An&apos;s School
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
            We believe education is more than examinations. We prepare students with critical thinking, moral integrity, physical fitness, and lifelong curiosity.
          </p>
        </motion.div>

        {/* Interactive Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-950 shadow-md">
                      <Icon size={28} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 transition-colors group-hover:bg-yellow-100 group-hover:text-yellow-800">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>

                <Link
                  href={feature.href}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-yellow-700 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-1"
                >
                  <span>Explore Feature</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}