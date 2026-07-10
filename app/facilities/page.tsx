"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import FacilitiesHero from "@/components/facilities/FacilitiesHero";
import FacilitySection from "@/components/facilities/FacilitySection";
import FacilityCTA from "@/components/facilities/FacilityCTA";

import { facilities } from "@/components/facilities/FacilitiesData";

const sectionIds = [
  "academics",
  "science",
  "computer",
  "library",
  "sports",
  "safety",
];

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-white">
        <FacilitiesHero />

        {facilities.map((facility, index) => (
          <section
            key={facility.title}
            id={sectionIds[index] || `facility-${index + 1}`}
            className="scroll-mt-28"
          >
            <FacilitySection
              title={facility.title}
              description={facility.description}
              image={facility.image}
              features={facility.features}
              reverse={index % 2 !== 0}
            />
          </section>
        ))}

        <FacilityCTA />
      </main>

      <Footer />
    </>
  );
}