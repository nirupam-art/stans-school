import Link from "next/link";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PrincipalMessage from "@/components/PrincipalMessage";
import GalleryPreview from "@/components/GalleryPreview";
import WhyChoose from "@/components/WhyChoose";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-white">
        <Hero />

        <PrincipalMessage />

        <Achievements />

        <WhyChoose />

        <GalleryPreview />

        {/* Admission CTA */}
        <section className="bg-yellow-400 px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[4px] text-yellow-900">
              Admissions Open
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Admissions Open 2026
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-900 sm:text-lg md:text-xl">
              Join St. An&apos;s School and build your future with excellence.
            </p>

            <div className="mt-8">
              <Link
                href="/admissions"
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-900 px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105 hover:bg-blue-950 sm:w-auto"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}