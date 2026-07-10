"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import GalleryCard from "./GalleryCard";
import GalleryLightbox from "./GalleryLightbox";
import { galleryImages } from "./GalleryData";

type GalleryPreviewProps = {
  showButton?: boolean;
};

export default function GalleryPreview({
  showButton = true,
}: GalleryPreviewProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Home page shows only 6 photos.
  // Full gallery page can still show all photos separately.
  const displayedImages = showButton
    ? galleryImages.slice(0, 6)
    : galleryImages;

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % displayedImages.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + displayedImages.length) %
        displayedImages.length
    );
  };

  return (
    <>
      <section
        id="gallery"
        className="scroll-mt-24 bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center sm:mb-16 md:mb-20"
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
              School Life
            </p>

            <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Moments That Matter
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Explore the vibrant life of St. An&apos;s School through our
              classrooms, sports, celebrations, and unforgettable memories.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="columns-1 gap-5 space-y-5 sm:gap-6 sm:space-y-6 md:columns-2 xl:columns-3">
            {displayedImages.map((image, index) => (
              <div
                key={`${image.src}-${image.title}-${index}`}
                className="break-inside-avoid"
              >
                <GalleryCard
                  {...image}
                  index={index}
                  onClick={() => openImage(index)}
                />
              </div>
            ))}
          </div>

          {/* Button only on Home Page */}
          {showButton && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center sm:mt-16 md:mt-20"
            >
              <Link
                href="/gallery"
                className="inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-8 py-4 font-bold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-600 sm:w-auto sm:px-10"
              >
                View Complete Gallery
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <GalleryLightbox
        images={displayedImages}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={closeImage}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}