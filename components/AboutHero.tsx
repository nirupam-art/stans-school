"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen, Compass, HeartHandshake } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-cover bg-center px-4 pt-32 pb-20 sm:min-h-[75vh] sm:px-6 md:pt-36"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90" />

      {/* Ambient Floating Glows */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-yellow-400/15 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-amber-500/15 blur-[100px]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[4px] text-yellow-400 backdrop-blur-md"
        >
          <Sparkles size={14} />
          <span>About St. An&apos;s School</span>
        </motion.div>

        <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
          Inspiring Young Minds
          <br />
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Since 2010
          </span>
        </h1>

        <div className="mx-auto my-6 h-1 w-20 rounded-full bg-yellow-500 sm:my-8 sm:w-28" />

        <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
          We are committed to delivering academic excellence, core human values, and a nurturing environment where every child discovers their inner talent and thrives.
        </p>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: BookOpen, text: "CBSE Curriculum" },
            { icon: Compass, text: "Holistic Mentorship" },
            { icon: HeartHandshake, text: "Values & Discipline" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md shadow"
              >
                <Icon size={16} className="text-yellow-400" />
                <span>{item.text}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}