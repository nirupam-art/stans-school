"use client";

import Link from "next/link";

const news = [
  {
    title: "Admissions Open 2026-27",
    date: "June 2026",
    description:
      "Admissions are now open for Nursery to Class XII. Contact the school office for details.",
  },
  {
    title: "Summer Vacation Notice",
    date: "May 2026",
    description:
      "School will remain closed during summer vacation as per the academic calendar.",
  },
  {
    title: "Annual Sports Meet",
    date: "February 2026",
    description:
      "Students participated enthusiastically in various indoor and outdoor sports events.",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest News & Announcements
          </h2>

          <p className="text-gray-600 mt-4">
            Stay updated with the latest activities and important notices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >

              <p className="text-blue-700 font-semibold">
                {item.date}
              </p>

              <h3 className="text-xl font-bold mt-3 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>

              <Link
                href="/contact"
                className="inline-block mt-6 text-blue-700 font-semibold hover:underline"
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