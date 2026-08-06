import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowLeft,
  Mail,
  Phone,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const facultyMembers = [
  {
    name: "Kishore Singh Rajpurohit",
    role: "Principal",
    subject: "School Leadership & Administration",
    qualification: "Experienced Educationist",
    image: "/principal_new.png",
  },
  {
    name: "Meenakshi",
    role: "Senior Teacher",
    subject: "Science",
    qualification: "B.Sc, B.Ed",
    image: "/Faculty/meenakshi.png",
  },
  {
    name: "Bhagwati",
    role: "Teacher",
    subject: "Mathematics",
    qualification: "M.Sc, B.Ed",
    image: "/Faculty/bhagwati.png",
  },
  {
    name: "Sapna",
    role: "Teacher",
    subject: "English",
    qualification: "M.A, B.Ed",
    image: "/Faculty/sapna.png",
  },
  {
    name: "Komal",
    role: "Teacher",
    subject: "Social Science",
    qualification: "M.A, B.Ed",
    image: "/Faculty/komal.png",
  },
  {
    name: "Faculty Member Name",
    role: "Teacher",
    subject: "Hindi",
    qualification: "M.A, B.Ed",
    image: "/logo.png",
  },
];

const strengths = [
  {
    icon: GraduationCap,
    title: "Qualified Educators",
    description:
      "Our teachers bring strong academic knowledge, classroom experience, and commitment to student success.",
  },
  {
    icon: BookOpen,
    title: "Student-Centered Teaching",
    description:
      "Faculty members focus on concept clarity, regular practice, discipline, and individual attention.",
  },
  {
    icon: Users,
    title: "Guidance & Mentorship",
    description:
      "Teachers guide students beyond academics through values, confidence-building, and personal development.",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Our faculty works consistently to maintain strong learning standards and board exam preparation.",
  },
];

export default function FacultyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-yellow-900 py-20 text-white sm:py-24">
          <div className="absolute inset-0 bg-black/25" />

          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400 sm:tracking-[5px]">
              Our Faculty
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Dedicated Teachers,
              <br />
              <span className="text-yellow-400">Strong Foundation</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:text-xl">
              Meet the experienced and caring faculty of St. An&apos;s Secondary
              School, committed to academic excellence, discipline, values, and
              holistic development.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black sm:w-auto"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>

              <Link
                href="/contact"
                className="w-full rounded-full bg-yellow-400 px-8 py-4 font-bold text-black shadow-xl transition hover:scale-105 hover:bg-yellow-500 sm:w-auto"
              >
                Contact School
              </Link>
            </div>
          </div>
        </section>

        {/* Faculty Strengths */}
        <section className="bg-gradient-to-b from-white to-yellow-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 text-center sm:mb-14">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
                Teaching Excellence
              </p>

              <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
                Why Our Faculty Stands Out
              </h2>

              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-500" />

              <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Our educators work together to create a disciplined, supportive,
                and inspiring learning environment for every child.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-8"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">
                      <Icon size={32} className="text-yellow-600" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Faculty Members */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 text-center sm:mb-16">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
                Meet Our Team
              </p>

              <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
                Faculty Members
              </h2>

              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-500" />

              <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Our teachers help students build knowledge, confidence,
                discipline, and strong moral values.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {facultyMembers.map((member) => (
                <div
                  key={`${member.name}-${member.subject}`}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-[340px] bg-gray-100 sm:h-[360px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="inline-block rounded-full bg-yellow-100 px-4 py-1 text-sm font-bold text-yellow-700">
                      {member.role}
                    </span>

                    <h3 className="mt-4 text-2xl font-black text-gray-900">
                      {member.name}
                    </h3>

                    <p className="mt-2 font-semibold text-yellow-600">
                      {member.subject}
                    </p>

                    <p className="mt-3 text-gray-600">
                      {member.qualification}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-3xl bg-slate-900 p-6 text-center text-white shadow-2xl sm:p-8 md:p-12">
              <h3 className="text-2xl font-black sm:text-3xl">
                Want to know more about our faculty?
              </h3>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
                Contact the school office for academic enquiries, admission
                guidance, or teacher-related information.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+918003616345"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-500 sm:w-auto"
                >
                  <Phone size={20} />
                  Call School
                </a>

                <a
                  href="mailto:schoolstans@gmail.com"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black sm:w-auto"
                >
                  <Mail size={20} />
                  Email School
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}