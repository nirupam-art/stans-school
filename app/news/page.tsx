"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calendar,
  Search,
  ArrowRight,
  ExternalLink,
  X,
  FileText,
  Tag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAnnouncements, AnnouncementRecord } from "@/lib/supabase";

const defaultSampleNews: AnnouncementRecord[] = [
  {
    id: "sample-1",
    title: "Rakshabandhan Celebration & Holiday Notice",
    date: "August 2026",
    tag: "Holiday",
    description:
      "St. An's Secondary School will remain closed on account of Rakshabandhan. We wish all our students, parents, and staff a happy and joyful Rakshabandhan!",
    href: "",
  },
  {
    id: "sample-2",
    title: "Admissions Open for Academic Session 2026-27",
    date: "June 2026",
    tag: "Admissions",
    description:
      "Admissions are open for Nursery to Class X. Interested parents can fill out the online admission enquiry form or visit the school office on working days.",
    href: "/admissions",
  },
  {
    id: "sample-3",
    title: "Class X Board Examination Registration Forms",
    date: "Important Notice",
    tag: "Board Forms",
    description:
      "All Class X students are required to verify their registration details for the upcoming board examinations. Please contact your class teacher for signature verification.",
    href: "/contact",
  },
  {
    id: "sample-4",
    title: "Summer Vacation Notification & Homework Schedule",
    date: "May 2026",
    tag: "Holiday",
    description:
      "St. An's Secondary School will remain closed for summer vacation as per the academic calendar. Summer holiday homework has been uploaded on the portal.",
    href: "",
  },
  {
    id: "sample-5",
    title: "Annual Sports Meet & Inter-House Competitions",
    date: "February 2026",
    tag: "Event",
    description:
      "Congratulations to all houses for outstanding participation in cricket, athletics, badminton, and indoor sports events.",
    href: "/gallery",
  },
  {
    id: "sample-6",
    title: "Science Exhibition & Craft Fair 2026",
    date: "January 2026",
    tag: "Event",
    description:
      "Students from Class V to X showcased innovative working models in robotics, environmental science, and creative crafts.",
    href: "/gallery",
  },
];

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<AnnouncementRecord[]>(defaultSampleNews);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState<AnnouncementRecord | null>(null);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const res = await getAnnouncements();
      if (res.success && res.data && res.data.length > 0) {
        setNewsItems(res.data);
      }
      setLoading(false);
    }
    fetchNews();
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("All");
    newsItems.forEach((item) => {
      if (item.tag) set.add(item.tag);
    });
    return Array.from(set);
  }, [newsItems]);

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.date.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        (item.tag && item.tag.toLowerCase() === selectedCategory.toLowerCase());

      return matchSearch && matchCategory;
    });
  }, [newsItems, searchQuery, selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 pt-24 pb-20 sm:pt-28">
        {/* Header Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400">
              <Bell size={14} /> Official Bulletins
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              News &amp; Announcements
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              Stay up-to-date with official school circulars, academic schedules, events, holidays, and admissions notices from St. An&apos;s Secondary School.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search notices, events, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:bg-white focus:ring-2 focus:ring-yellow-100"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                    selectedCategory === category
                      ? "bg-yellow-400 text-slate-950 shadow"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Cards Grid */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent"></div>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white py-16 text-center text-slate-500 shadow-sm">
              <FileText size={44} className="mx-auto mb-3 text-slate-300" />
              <h3 className="text-lg font-bold text-slate-800">No Bulletins Found</h3>
              <p className="mt-1 text-sm text-slate-500">
                Try searching for a different keyword or reset category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white transition hover:bg-slate-800"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedNotice(item)}
                  className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-xl"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                        <Calendar size={14} className="text-yellow-600" />
                        {item.date}
                      </span>

                      {item.tag && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-bold text-yellow-900 border border-yellow-400/30">
                          <Tag size={11} /> {item.tag}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-yellow-600">
                      {item.title}
                    </h2>

                    {item.description && (
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-slate-900">
                    <span className="inline-flex items-center gap-1 transition group-hover:text-yellow-600">
                      Read Full Notice <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </span>

                    {item.href && item.href !== "/news" && (
                      <span className="text-slate-400 group-hover:text-slate-600">
                        <ExternalLink size={14} />
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Modal Detail Popup */}
        <AnimatePresence>
          {selectedNotice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNotice(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedNotice(null)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                >
                  <X size={18} />
                </button>

                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                    <Calendar size={14} className="text-yellow-600" />
                    {selectedNotice.date}
                  </span>

                  {selectedNotice.tag && (
                    <span className="rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-bold text-yellow-900 border border-yellow-400/30">
                      {selectedNotice.tag}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-black leading-tight text-slate-900">
                  {selectedNotice.title}
                </h2>

                <div className="mt-5 max-h-72 overflow-y-auto pr-2 text-sm leading-relaxed text-slate-700">
                  {selectedNotice.description || "No further details provided for this bulletin."}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <button
                    onClick={() => setSelectedNotice(null)}
                    className="rounded-full border border-slate-200 bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200"
                  >
                    Close
                  </button>

                  {selectedNotice.href && (
                    <Link
                      href={selectedNotice.href}
                      className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-2.5 text-xs font-black text-slate-950 shadow transition hover:bg-yellow-500"
                    >
                      Action Link <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
