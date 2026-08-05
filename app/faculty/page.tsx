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
    image: "/meenakshi.png",
  },
  {
    name: "Bhagwati",
    role: "Teacher",
    subject: "Mathematics",
    qualification: "M.Sc, B.Ed",
    image: "/bhagwati.png",
  },
  {
    name: "Sapna",
    role: "Teacher",
    subject: "English",
    qualification: "M.A, B.Ed",
    image: "/sapna.png",
  },
  {
    name: "Komal",
    role: "Teacher",
    subject: "Social Science",
    qualification: "M.A, B.Ed",
    image: "/komal.png",
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
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-yellow-900 py-24 text-white">
          <div className="absolute inset-0 bg-black/25" />

          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[5px] text-yellow-400">
              Our Faculty
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Dedicated Teachers,
              <br />
              <span className="text-yellow-400">Strong Foundation</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              Meet the experienced and caring faculty of St. An&apos;s Secondary
              School, committed to academic excellence, discipline, values, and
              holistic development.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>

              <Link
                href="/contact"
                className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black shadow-xl transition hover:bg-yellow-500 hover:scale-105"
              >
                Contact School
              </Link>
            </div>
          </div>
        </section>

        {/* Faculty Strengths */}
        <section className="bg-gradient-to-b from-white to-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center">
              <p className="font-semibold uppercase tracking-[5px] text-yellow-600">
                Teaching Excellence
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
                Why Our Faculty Stands Out
              </h2>

              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-500" />

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600">
                Our educators work together to create a disciplined, supportive,
                and inspiring learning environment for every child.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
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
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="font-semibold uppercase tracking-[5px] text-yellow-600">
                Meet Our Team
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
                Faculty Members
              </h2>

              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-yellow-500" />

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600">
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
                  <div className="relative h-[330px] bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
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

            <div className="mt-14 rounded-3xl bg-slate-900 p-8 text-center text-white shadow-2xl md:p-12">
              <h3 className="text-3xl font-black">
                Want to know more about our faculty?
              </h3>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
                Contact the school office for academic enquiries, admission
                guidance, or teacher-related information.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+918003616345"
                  className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-500"
                >
                  <Phone size={20} />
                  Call School
                </a>

                <a
                  href="mailto:schoolstans@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
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