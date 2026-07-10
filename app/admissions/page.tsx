import {
  Download,
  FileText,
  Phone,
  Mail,
  ClipboardList,
  Users,
  CheckCircle,
} from "lucide-react";

import AdmissionForm from "@/components/AdmissionForm";

export default function Admissions() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-yellow-900 px-4 pb-16 pt-32 text-white sm:px-6 sm:pb-20 sm:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-block rounded-full bg-yellow-400 px-5 py-2 text-xs font-bold text-black shadow-lg sm:px-6 sm:text-sm">
            Admissions Open 2026
          </span>

          <h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Begin Your Child&apos;s
            <br />
            <span className="text-yellow-400">
              Learning Journey
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:text-xl">
            St. An&apos;s Secondary School welcomes students from Play Group to
            Class X with a focus on academics, values, discipline, and holistic
            development.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="#admission-form"
              className="w-full rounded-full bg-yellow-400 px-8 py-4 text-center font-bold text-black shadow-xl transition hover:scale-105 hover:bg-yellow-500 sm:w-auto sm:px-9"
            >
              Fill Admission Form
            </a>

            <a
              href="/schoolbroucher.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-white hover:text-black sm:w-auto sm:px-9"
            >
              <Download size={20} />
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-12 text-center sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            Simple Process
          </p>

          <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Admission Process
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Complete the admission enquiry form and our school team will contact
            you with the next steps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition hover:shadow-2xl sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 sm:mb-6 sm:h-16 sm:w-16">
              <ClipboardList size={30} />
            </div>

            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              1. Submit Enquiry
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Fill the online admission enquiry form with student and parent
              details.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition hover:shadow-2xl sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 sm:mb-6 sm:h-16 sm:w-16">
              <Users size={30} />
            </div>

            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              2. School Contact
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Our admission team will contact parents for guidance and further
              details.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition hover:shadow-2xl sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 sm:mb-6 sm:h-16 sm:w-16">
              <CheckCircle size={30} />
            </div>

            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              3. Confirmation
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Visit the school, complete required formalities, and confirm the
              admission.
            </p>
          </div>
        </div>
      </section>

      {/* Brochure Download Section */}
      <section className="bg-yellow-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 rounded-3xl border border-yellow-100 bg-white p-5 shadow-xl sm:p-8 md:p-10 lg:grid-cols-2 lg:gap-10 lg:rounded-[2rem] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
                School Brochure
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                Download Admission Brochure
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:leading-8">
                Get complete information about St. An&apos;s Secondary School,
                academics, infrastructure, safety, transport, hostel facilities,
                and admission details in one brochure.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/schoolbroucher.pdf"
                  download
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-bold text-black shadow-lg transition hover:scale-105 hover:bg-yellow-600 sm:w-auto sm:px-8"
                >
                  <Download size={20} />
                  Download Brochure
                </a>

                <a
                  href="/schoolbroucher.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 px-7 py-4 font-bold text-gray-800 transition hover:border-yellow-500 hover:text-yellow-600 sm:w-auto sm:px-8"
                >
                  <FileText size={20} />
                  View Brochure
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-2xl sm:p-8">
              <FileText size={42} className="text-yellow-400 sm:size-[46px]" />

              <h3 className="mt-6 text-2xl font-black sm:text-3xl">
                St. An&apos;s School Brochure
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                English Medium Co-Educational School
                <br />
                NCERT Curriculum
                <br />
                Play Group to Class X
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <a
                  href="tel:+918003616345"
                  className="flex items-center gap-3 text-gray-200 transition hover:text-yellow-400"
                >
                  <Phone size={18} className="shrink-0" />
                  +91 80036 16345
                </a>

                <a
                  href="mailto:schoolstans@gmail.com"
                  className="flex items-center gap-3 break-all text-gray-200 transition hover:text-yellow-400"
                >
                  <Mail size={18} className="shrink-0" />
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