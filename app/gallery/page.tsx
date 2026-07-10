"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryCard from "@/components/GalleryCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import {
  galleryImages,
  galleryCategories,
} from "@/components/GalleryData";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Photos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All Photos"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === selectedCategory
        );

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null || filteredImages.length === 0) return;

    setSelectedIndex((selectedIndex + 1) % filteredImages.length);
  };

  const prevImage = () => {
    if (selectedIndex === null || filteredImages.length === 0) return;

    setSelectedIndex(
      (selectedIndex - 1 + filteredImages.length) %
        filteredImages.length
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-24 sm:pt-28">
        {/* Page Hero */}
        <section className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]"
          >
            School Memories
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-4xl font-black leading-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            School Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8"
          >
            Explore memorable moments, campus life, cultural events,
            classrooms, sports activities, school trips, annual functions,
            and celebrations at St. An&apos;s Secondary School.
          </motion.p>
        </section>

        {/* Category Buttons */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 flex gap-3 overflow-x-auto pb-3 sm:mb-16 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedIndex(null);
                }}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                  selectedCategory === category
                    ? "scale-105 border-yellow-500 bg-yellow-500 text-black shadow-lg"
                    : "border-gray-200 bg-white text-gray-700 hover:border-yellow-400 hover:text-yellow-600 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
          {filteredImages.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="columns-1 gap-5 space-y-5 sm:gap-6 sm:space-y-6 md:columns-2 xl:columns-3"
            >
              {filteredImages.map((image, index) => (
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
            </motion.div>
          ) : (
            <div className="py-20 text-center sm:py-24">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                No photos found
              </h2>

              <p className="mt-3 text-gray-500">
                Photos for this section will be added soon.
              </p>
            </div>
          )}
        </section>
      </main>

      <GalleryLightbox
        images={filteredImages}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={closeImage}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <Footer />
    </>
  );
}