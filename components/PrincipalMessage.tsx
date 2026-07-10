"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PrincipalMessage() {
  return (
    <section
      id="principal"
      className="bg-white py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            From the Desk
          </p>

          <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Principal&apos;s Message
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center lg:gap-14">

          {/* Principal Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto max-w-md overflow-hidden rounded-3xl shadow-2xl md:max-w-none">
              <Image
                src="/principal_new.png"
                alt="Principal of St. An's School"
                width={600}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-xl sm:p-8 md:p-10"
          >
            <div className="mb-4 text-5xl text-yellow-500 sm:text-6xl">
              ❝
            </div>

            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              At St. An&apos;s School, we believe education is more than
              academics. Our mission is to nurture curiosity, discipline,
              confidence, and values that help students succeed in every aspect
              of life.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:mt-6 sm:text-lg">
              We are committed to creating an environment where every child
              feels inspired to learn, grow, and achieve their fullest
              potential.
            </p>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Kishore Singh Rajpurohit
              </h3>

              <p className="mt-1 font-semibold text-yellow-600">
                Principal, St. An&apos;s School
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}