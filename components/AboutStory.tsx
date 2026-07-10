"use client";

import { motion } from "framer-motion";
import { School, BookOpen, ShieldCheck } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              A Journey of Excellence Since 2010
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24" />

            <p className="mt-7 text-base leading-8 text-gray-600 sm:mt-8 sm:text-lg">
              Established in <strong>2010</strong>, St. An&apos;s Secondary
              School has been dedicated to providing quality education under the{" "}
              <strong>Rajasthan Board (RBSE)</strong>.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:mt-6">
              Our mission is to create a safe, disciplined, and inspiring
              environment where students develop academically, socially, and
              morally while preparing for future challenges.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:mt-6">
              We believe every child has unique potential. Through experienced
              teachers, modern teaching methods, and co-curricular activities,
              we help students become confident, responsible, and compassionate
              individuals.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:gap-6"
          >
            <div className="rounded-2xl bg-gray-50 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-8">
              <School className="mb-4 text-yellow-600" size={34} />

              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                RBSE Affiliated
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                Providing quality education aligned with the Rajasthan Board
                curriculum.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-8">
              <BookOpen className="mb-4 text-yellow-600" size={34} />

              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                Modern Learning
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                Smart classrooms, science labs, library, and activity-based
                learning.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-8">
              <ShieldCheck className="mb-4 text-yellow-600" size={34} />

              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                Safe Environment
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                A secure and nurturing campus focused on discipline, care, and
                student well-being.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}