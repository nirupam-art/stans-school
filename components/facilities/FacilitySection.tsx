"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface FacilityProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  reverse?: boolean;
}

export default function FacilitySection({
  title,
  description,
  image,
  features,
  reverse = false,
}: FacilityProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={reverse ? "lg:order-2" : ""}
        >
          <div className="group overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl">
            <Image
              src={image}
              alt={title}
              width={900}
              height={650}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110 sm:h-[360px] md:h-[430px] lg:h-[450px]"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={reverse ? "lg:order-1" : ""}
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600">
            Facilities
          </span>

          <h2 className="mb-5 mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>

          <p className="mb-7 text-base leading-8 text-gray-600 sm:text-lg">
            {description}
          </p>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-yellow-50 px-4 py-3"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-yellow-600" />

                <span className="text-sm leading-6 text-gray-700 sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}