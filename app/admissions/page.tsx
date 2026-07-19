import Link from "next/link";
import {
  Download,
  FileText,
  Phone,
  Mail,
  ClipboardList,
  Users,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import AdmissionForm from "@/components/AdmissionForm";

export default function Admissions() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-yellow-900 pt-36 pb-24 text-white">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <br />

          <span className="inline-block rounded-full bg-yellow-400 px-6 py-2 text-sm font-bold text-black shadow-lg">
            Admissions Open 2026
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Begin Your Child&apos;s
            <br />
            <span className="text-yellow-400">Learning Journey</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-8">
            St. An&apos;s Secondary School welcomes students from Play Group to
            Class X with a focus on academics, values, discipline, and holistic
            development.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#admission-form"
              className="rounded-full bg-yellow-400 px-9 py-4 font-bold text-black shadow-xl transition hover:bg-yellow-500 hover:scale-105"
            >
              Fill Admission Form
            </a>

            <a
              href="/schoolbroucher.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border-2 border-white px-9 py-4 font-bold text-white transition hover:bg-white hover:text-black hover:scale-105"
            >
              <Download size={20} />
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            Simple Process
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
            Admission Process
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-7">
            Complete the admission enquiry form and our school team will contact
            you with the next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
              <ClipboardList size={32} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              1. Submit Enquiry
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Fill the online admission enquiry form with student and parent
              details.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
              <Users size={32} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              2. School Contact
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Our admission team will contact parents for guidance and further
              details.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
              <CheckCircle size={32} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              3. Confirmation
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Visit the school, complete required formalities, and confirm the
              admission.
            </p>
          </div>
        </div>
      </section>

      {/* Brochure Download Section */}
      <section className="bg-yellow-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[2rem] bg-white p-8 md:p-12 shadow-xl border border-yellow-100">
            <div>
              <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
                School Brochure
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-900">
                Download Admission Brochure
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                Get complete information about St. An&apos;s Secondary School,
                academics, infrastructure, safety, transport, hostel facilities,
                and admission details in one brochure.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/schoolbroucher.pdf"
                  download
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black shadow-lg transition hover:bg-yellow-600 hover:scale-105"
                >
                  <Download size={20} />
                  Download Brochure
                </a>

                <a
                  href="/schoolbroucher.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-300 px-8 py-4 font-bold text-gray-800 transition hover:border-yellow-500 hover:text-yellow-600"
                >
                  <FileText size={20} />
                  View Brochure
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
              <FileText size={46} className="text-yellow-400" />

              <h3 className="mt-6 text-3xl font-black">
                St. An&apos;s School Brochure
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                English Medium Co-Educational School
                <br />
                NCERT Curriculum
                <br />
                Play Group to Class X
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <a
                  href="tel:+918003616345"
                  className="flex items-center gap-3 text-gray-200 hover:text-yellow-400 transition"
                >
                  <Phone size={18} />
                  +91 80036 16345
                </a>

                <a
                  href="mailto:schoolstans@gmail.com"
                  className="flex items-center gap-3 text-gray-200 hover:text-yellow-400 transition"
                >
                  <Mail size={18} />
                  schoolstans@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="admission-form" className="scroll-mt-28">
        <AdmissionForm />
      </section>
    </main>
  );
}