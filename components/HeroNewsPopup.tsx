"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, CalendarDays, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "Admissions Open for Session 2026",
    date: "Apply Now",
    href: "/admissions",
  },
  {
    title: "Annual Function Highlights Coming Soon",
    date: "Latest Update",
    href: "/gallery",
  },
  {
    title: "New Academic Session Information",
    date: "School Notice",
    href: "/admissions",
  },
];

export default function HeroNewsPopup() {
  return (
    <>
      {/* Mobile News Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="
          absolute
          bottom-5
          left-4
          right-4
          z-30
          rounded-2xl
          border
          border-white/20
          bg-white/95
          p-4
          shadow-2xl
          backdrop-blur-xl
          lg:hidden
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
            <Bell size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-yellow-700">
              Latest Update
            </p>

            <h3 className="truncate text-sm font-bold text-gray-900">
              Admissions Open for Session 2026
            </h3>
          </div>

          <Link
            href="/admissions"
            className="shrink-0 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-black transition hover:bg-yellow-500"
          >
            Apply
          </Link>
        </div>
      </motion.div>

      {/* Desktop News Popup */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="
          absolute
          right-6
          top-1/2
          z-30
          hidden
          w-[330px]
          -translate-y-1/2
          rounded-3xl
          border
          border-white/20
          bg-white/95
          p-5
          shadow-2xl
          backdrop-blur-xl
          xl:block
        "
      >
        {/* Heading */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-black">
            <Bell size={22} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Latest Updates
            </h3>

            <p className="text-sm text-gray-500">
              News & announcements
            </p>
          </div>
        </div>

        {/* News Items */}
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="
                group
                block
                rounded-2xl
                border
                border-gray-100
                bg-gray-50
                p-4
                transition-all
                duration-300
                hover:border-yellow-400
                hover:bg-yellow-50
                hover:shadow-md
              "
            >
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-yellow-700">
                <CalendarDays size={14} />
                <span>{item.date}</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold leading-6 text-gray-800">
                  {item.title}
                </p>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-yellow-600"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <Link
          href="/admissions"
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            rounded-full
            bg-yellow-400
            px-5
            py-3
            text-sm
            font-bold
            text-black
            transition
            hover:scale-[1.02]
            hover:bg-yellow-500
          "
        >
          View Admission Details
        </Link>
      </motion.div>
    </>
  );
}