"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-yellow-600 sm:tracking-[5px]">
            Contact Information
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-500 sm:w-24"></div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            We&apos;d be happy to answer your questions regarding admissions,
            academics, or campus visits.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Address */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:h-16 sm:w-16">
              <MapPin className="text-yellow-600" size={30} />
            </div>

            <h3 className="mb-5 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Address
            </h3>

            <a
              href="https://maps.app.goo.gl/npLb6B47yBuRACXG8"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm leading-7 text-gray-600 transition hover:text-yellow-600 sm:text-base"
            >
              Sanjay Nagar
              <br />
              Near Shaheed Bhagat Singh Stadium
              <br />
              Jalore, Rajasthan
              <br />
              343001
            </a>
          </div>

          {/* Phone */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:h-16 sm:w-16">
              <Phone className="text-yellow-600" size={30} />
            </div>

            <h3 className="mb-5 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Call Us
            </h3>

            <p className="text-center font-semibold text-gray-800">
              Office
            </p>

            <a
              href="tel:+918003616345"
              className="block text-center text-sm text-gray-600 transition hover:text-yellow-600 sm:text-base"
            >
              +91 80036 16345
            </a>

            <div className="my-4 border-t"></div>

            <p className="text-center font-semibold text-gray-800">
              Principal
            </p>

            <a
              href="tel:+919413516345"
              className="block text-center text-sm text-gray-600 transition hover:text-yellow-600 sm:text-base"
            >
              +91 94135 16345
            </a>
          </div>

          {/* Email */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:h-16 sm:w-16">
              <Mail className="text-yellow-600" size={30} />
            </div>

            <h3 className="mb-5 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Email
            </h3>

            <a
              href="mailto:schoolstans@gmail.com"
              className="block break-all text-center text-sm text-gray-600 transition hover:text-yellow-600 sm:text-base"
            >
              schoolstans@gmail.com
            </a>
          </div>

          {/* Office Hours */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 sm:h-16 sm:w-16">
              <Clock className="text-yellow-600" size={30} />
            </div>

            <h3 className="mb-5 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Office Hours
            </h3>

            <p className="text-center text-sm text-gray-600 sm:text-base">
              Monday – Saturday
            </p>

            <p className="mt-3 text-center text-sm font-semibold text-gray-700 sm:text-base">
              7:30 AM – 2:30 PM
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h2 className="mb-8 text-center text-3xl font-black text-gray-900 sm:mb-10 sm:text-4xl">
            Visit Our Campus
          </h2>

          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
            <div className="h-[320px] w-full sm:h-[420px] md:h-[550px]">
              <iframe
                title="St. An's School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.882582480978!2d72.62535407463083!3d25.341720825833217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394300c63b124183%3A0xf93922f15ae823f7!2sSt.%20An&#39;s%20School%20Jalore!5e0!3m2!1sen!2sin!4v1783515075852!5m2!1sen!2sin"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}