import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-white">
        <ContactHero />
        <ContactInfo />
      </main>

      <Footer />
    </>
  );
}