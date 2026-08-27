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

        {/* Admission CTA Card Banner */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16 border border-white/10">
            {/* Soft Ambient Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs font-bold text-yellow-300">
                Admissions Open 2026–27
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Ready to Join St. An&apos;s School Family?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                Secure your child&apos;s seat for the upcoming academic session. Experience excellence in education, character building, and holistic growth.
              </p>

              <div className="mt-8">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-sm font-black text-slate-950 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
                >
                  Apply Online Now →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}