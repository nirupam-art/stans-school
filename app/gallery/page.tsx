import fs from "node:fs";
import path from "node:path";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryClient, {
  type AutoGalleryImage,
} from "@/components/GalleryClient";

const galleryFolders = [
  {
    label: "Annual Function",
    folder: "annual-function",
  },
  {
    label: "Celebrations",
    folder: "celebrations",
  },
  {
    label: "Classroom",
    folder: "classroom",
  },
  {
    label: "School Trip",
    folder: "school-trip",
  },
  {
    label: "Session 2025-26",
    folder: "session-2025-26",
  },
  {
    label: "Sports",
    folder: "sports",
  },
];

const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function formatTitle(fileName: string) {
  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getGalleryImages(): AutoGalleryImage[] {
  const galleryRoot = path.join(process.cwd(), "public", "gallery");

  const images: AutoGalleryImage[] = [];

  for (const category of galleryFolders) {
    const folderPath = path.join(galleryRoot, category.folder);

    if (!fs.existsSync(folderPath)) {
      continue;
    }

    const files = fs
      .readdirSync(folderPath)
      .filter((file) =>
        allowedExtensions.includes(path.extname(file).toLowerCase())
      )
      .sort();

    for (const file of files) {
      images.push({
        src: `/gallery/${category.folder}/${file}`,
        title: formatTitle(file),
        category: category.label,
      });
    }
  }

  return images;
}

export default function GalleryPage() {
  const images = getGalleryImages();

  const categories = [
    "All Photos",
    ...galleryFolders.map((folder) => folder.label),
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-white pt-24 sm:pt-28">
        <section className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            School Memories
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            School Gallery
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Explore memorable moments, campus life, cultural events, school
            trips, annual functions, classroom activities, sports, and
            celebrations at St. An&apos;s Secondary School.
          </p>
        </section>

        <GalleryClient images={images} categories={categories} />
      </main>

      <Footer />
    </>
  );
}