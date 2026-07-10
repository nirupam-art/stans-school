"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

type GalleryLightboxProps = {
  images: {
    src: string;
    title: string;
    description: string;
  }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const image = images[currentIndex];

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 px-4 py-6 backdrop-blur-lg sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery image"
          className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-yellow-500 sm:right-8 sm:top-8 sm:h-12 sm:w-12"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          className="absolute bottom-6 left-1/2 z-50 flex h-12 w-12 -translate-x-[120%] items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-yellow-500 sm:left-8 sm:top-1/2 sm:bottom-auto sm:h-14 sm:w-14 sm:translate-x-0 sm:-translate-y-1/2"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          className="absolute bottom-6 left-1/2 z-50 flex h-12 w-12 translate-x-[20%] items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-yellow-500 sm:left-auto sm:right-8 sm:top-1/2 sm:bottom-auto sm:h-14 sm:w-14 sm:translate-x-0 sm:-translate-y-1/2"
        >
          <ChevronRight size={28} />
        </button>

        {/* Image Content */}
        <motion.div
          key={image.src}
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-6xl"
        >
          <div className="relative mx-auto h-[55vh] w-full overflow-hidden rounded-2xl bg-black shadow-2xl sm:h-[65vh] sm:rounded-3xl md:h-[70vh]">
            <Image
              src={image.src}
              alt={image.title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="mx-auto mt-5 max-w-3xl text-center sm:mt-8">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-yellow-400 sm:text-sm">
              St. An&apos;s School
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {image.title}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:mt-4 sm:text-lg">
              {image.description}
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:mt-6">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}