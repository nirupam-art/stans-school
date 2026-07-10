"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GalleryCardProps = {
  src: string;
  title: string;
  description: string;
  height: "small" | "medium" | "large";
  index: number;
  onClick: () => void;
};

export default function GalleryCard({
  src,
  title,
  description,
  height,
  index,
  onClick,
}: GalleryCardProps) {
  const heightClass = {
    small: "h-[240px] sm:h-[280px]",
    medium: "h-[280px] sm:h-[360px] md:h-[380px]",
    large: "h-[320px] sm:h-[440px] md:h-[520px]",
  };

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className={`
        group
        relative
        block
        w-full
        overflow-hidden
        rounded-2xl
        text-left
        shadow-lg
        transition-all
        duration-500
        hover:shadow-2xl
        sm:rounded-3xl
        ${heightClass[height]}
      `}
    >
      {/* Image */}
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Gold Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-yellow-400 sm:rounded-3xl" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-all duration-500 sm:p-5 md:translate-y-6 md:group-hover:translate-y-0">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400 sm:text-sm">
            St. An&apos;s School
          </p>

          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-200 sm:mt-3">
            {description}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition-all duration-300 group-hover:gap-4 sm:text-base">
            View Photo →
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/20 opacity-0 blur-xl transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100" />
      </div>
    </motion.button>
  );
}