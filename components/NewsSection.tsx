"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAnnouncements, AnnouncementRecord } from "@/lib/supabase";

const defaultNews: AnnouncementRecord[] = [
  {
    title: "Admissions Open 2026-27",
    date: "June 2026",
    description:
      "Admissions are now open for Nursery to Class X. Contact the school office or apply online for details.",
    href: "/admissions",
  },
  {
    title: "Summer Vacation Notice",
    date: "May 2026",
    description:
      "School will remain closed during summer vacation as per the academic calendar.",
    href: "/contact",
  },
  {
    title: "Annual Sports Meet",
    date: "February 2026",
    description:
      "Students participated enthusiastically in various indoor and outdoor sports events.",
    href: "/gallery",
  },
];

export default function NewsSection() {
  const [newsList, setNewsList] = useState<AnnouncementRecord[]>(defaultNews);

  useEffect(() => {
    async function loadNews() {
      const res = await getAnnouncements();
      if (res.success && res.data && res.data.length > 0) {
        setNewsList(res.data);
      }
    }
    loadNews();
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600">
            School Bulletins
          </p>
          <h2 className="mt-3 text-4xl font-black text-gray-900">
            Latest News & Announcements
          </h2>
          <p className="mt-4 text-gray-600">
            Stay updated with the latest activities and important notices from St. An&apos;s Secondary School.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {newsList.map((item, index) => (
            <div
              key={item.id || index}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-yellow-700">
                    {item.date}
                  </p>
                  {item.tag && (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-900">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="mb-3 mt-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>

              <Link
                href={item.href || "/contact"}
                className="mt-6 inline-flex items-center font-bold text-slate-900 transition hover:text-yellow-600"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}