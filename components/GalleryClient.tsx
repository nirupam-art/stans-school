"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import GalleryCard from "@/components/GalleryCard";
import GalleryLightbox from "@/components/GalleryLightbox";

export type AutoGalleryImage = {
  src: string;
  title: string;
  category: string;
};

type GalleryClientProps = {
  images: AutoGalleryImage[];
  categories: string[];
};

export default function GalleryClient({
  images,
  categories,
}: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Photos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All Photos"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const lightboxImages = filteredImages.map((image) => ({
    src: image.src,
    title: image.title,
    description: image.category,
  }));

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
      {/* Category Buttons */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex gap-3 overflow-x-auto pb-3 sm:mb-16 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          {categories.map((category) => (
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
                key={`${image.src}-${index}`}
                className="break-inside-avoid"
              >
                <GalleryCard
                  src={image.src}
                  title={image.title}
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
              Add photos inside this folder and deploy again.
            </p>
          </div>
        )}
      </section>

      <GalleryLightbox
        images={lightboxImages}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={closeImage}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}