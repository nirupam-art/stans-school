"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GalleryCardProps = {
  src: string;
  title: string;
  description?: string;
  height?: "small" | "medium" | "large";
  index: number;
  onClick: () => void;
};

export default function GalleryCard({
  src,
  title,
  height = "medium",
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
        delay: index * 0.04,
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
        bg-gray-100
        shadow-lg
        transition-all
        duration-500
        hover:shadow-2xl
        sm:rounded-3xl
        ${heightClass[height]}
      `}
    >
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-yellow-400 sm:rounded-3xl" />

      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
    </motion.button>
  );
}