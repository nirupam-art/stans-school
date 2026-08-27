"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, CalendarDays, ArrowRight } from "lucide-react";
import { getAnnouncements, AnnouncementRecord } from "@/lib/supabase";

const defaultNewsItems: AnnouncementRecord[] = [
  {
    title: "Class X Board Examination Forms Are Open",
    date: "Important Notice",
    href: "/contact",
    tag: "Board Forms",
  },
  {
    title: "Head Boy & Head Girl Elections Coming Soon",
    date: "Student Council",
    href: "/gallery",
    tag: "Election",
  },
  {
    title: "Admissions Open for Session 2026",
    date: "Apply Now",
    href: "/admissions",
    tag: "Admissions",
  },
];

export default function HeroNewsPopup() {
  const [items, setItems] = useState<AnnouncementRecord[]>(defaultNewsItems);

  useEffect(() => {
    async function loadAnnouncements() {
      const res = await getAnnouncements();
      if (res.success && res.data && res.data.length > 0) {
        setItems(res.data.slice(0, 2));
      }
    }
    loadAnnouncements();
  }, []);

  const topItem = items[0] || defaultNewsItems[0];

  return (
    <>
      {/* Mobile News Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="
          absolute
          bottom-4
          left-4
          right-4
          z-30
          rounded-2xl
          border
          border-white/15
          bg-slate-900/90
          p-3.5
          shadow-2xl
          backdrop-blur-xl
          lg:hidden
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-slate-950">
            <Bell size={18} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-yellow-400">
              {topItem.tag || "Latest Update"}
            </p>

            <h3 className="truncate text-xs font-bold text-white">
              {topItem.title}
            </h3>
          </div>

          <Link
            href={topItem.href || "/news"}
            className="shrink-0 rounded-full bg-yellow-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-yellow-300"
          >
            {topItem.href && topItem.href !== "/news" ? "View" : "Notice"}
          </Link>
        </div>
      </motion.div>

      {/* Desktop Minimal Glass News Popup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="
          absolute
          right-8
          bottom-8
          z-30
          hidden
          w-[310px]
          rounded-2xl
          border
          border-white/15
          bg-slate-900/80
          p-4
          shadow-2xl
          backdrop-blur-xl
          xl:block
        "
      >
        {/* Heading */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-slate-950">
              <Bell size={16} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-white">
                Latest Bulletins
              </h3>
            </div>
          </div>

          <Link
            href="/news"
            className="text-[11px] font-bold text-yellow-400 hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* News Items */}
        <div className="space-y-2.5">
          {items.slice(0, 2).map((item, index) => (
            <Link
              key={item.id || index}
              href={item.href || "/news"}
              className="
                group
                block
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-3
                transition-all
                duration-200
                hover:border-yellow-400/50
                hover:bg-white/10
              "
            >
              <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold text-yellow-400">
                <CalendarDays size={12} />
                <span>{item.date}</span>
                {item.tag && (
                  <span className="ml-auto rounded-full bg-yellow-400/20 px-2 py-0.5 text-[9px] font-bold text-yellow-300 border border-yellow-400/30">
                    {item.tag}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between gap-2">
                <p className="line-clamp-1 text-xs font-semibold text-slate-200 group-hover:text-white">
                  {item.title}
                </p>

                <ArrowRight
                  size={14}
                  className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-yellow-400"
                />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}