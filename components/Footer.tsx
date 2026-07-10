import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-gray-300 sm:mt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* School */}
        <div>
          <Link
            href="/"
            className="mb-5 flex items-center gap-4"
          >
            <Image
              src="/logo.png"
              alt="St. An's School Logo"
              width={60}
              height={60}
              className="rounded-full bg-white p-1 shadow-md"
            />

            <div>
              <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                St. An&apos;s
              </h2>

              <p className="text-sm text-gray-400">
                Secondary School
              </p>
            </div>
          </Link>

          <p className="max-w-sm text-sm leading-7 text-gray-300">
            Providing quality education with strong values, modern learning,
            and holistic development to nurture responsible citizens and
            lifelong learners.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="grid grid-cols-2 gap-3 text-sm sm:block sm:space-y-3">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link
                href="/#why-choose"
                className="hover:text-yellow-400 transition"
              >
                Facilities
              </Link>
            </li>

            <li>
              <Link
                href="/#gallery"
                className="hover:text-yellow-400 transition"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/admissions"
                className="hover:text-yellow-400 transition"
              >
                Admissions
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-4 text-sm">
            {/* Address */}
            <a
              href="https://maps.app.goo.gl/npLb6B47yBuRACXG8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 leading-6 transition duration-300 hover:text-yellow-400"
            >
              <MapPin size={18} className="mt-1 shrink-0" />

              <span>
                Sanjay Nagar, Near Shahid Bhagat Singh Stadium,
                <br />
                Jalore, Rajasthan - 343001
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918003616345"
              className="flex items-center gap-3 transition duration-300 hover:text-yellow-400"
            >
              <Phone size={18} className="shrink-0" />
              <span>+91 80036 16345</span>
            </a>

            {/* Email */}
            <a
              href="mailto:schoolstans@gmail.com"
              className="flex items-center gap-3 break-all transition duration-300 hover:text-yellow-400"
            >
              <Mail size={18} className="shrink-0" />
              <span>schoolstans@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Follow Us
          </h3>

          <p className="mb-5 max-w-xs text-sm leading-7 text-gray-400">
            Stay connected with school updates, events, announcements, and
            gallery moments.
          </p>

          <div className="flex gap-4 text-2xl">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Schoolstans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:scale-110 hover:bg-red-500 hover:text-white"
            >
              <FaYoutube />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/schoolstans/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:scale-110 hover:bg-pink-500 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 px-4 py-5 text-center text-xs text-gray-400 sm:text-sm">
        © {new Date().getFullYear()} St. An&apos;s Secondary School. All Rights Reserved.
      </div>
    </footer>
  );
}