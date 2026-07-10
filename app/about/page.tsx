import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import SchoolHighlights from "@/components/SchoolHighlights";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-white">
        <AboutHero />
        <AboutStory />
        <MissionVision />
        <CoreValues />
        <SchoolHighlights />
        <Timeline />
      </main>

      <Footer />
    </>
  );
}