"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { saveAdmissionEnquiry } from "@/lib/supabase";

export default function AdmissionForm() {
  const form = useRef<HTMLFormElement>(null);

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [parentMobile, setParentMobile] = useState("");
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSending(true);
    setStatusMessage(null);

    const formData = new FormData(form.current);
    const student_name = String(formData.get("student_name") || "").trim();
    const dob = String(formData.get("dob") || "").trim();
    const gender = String(formData.get("gender") || "").trim();
    const class_applying = String(formData.get("class_applying") || "").trim();
    const father_name = String(formData.get("father_name") || "").trim();
    const mother_name = String(formData.get("mother_name") || "").trim();
    const mobile = String(formData.get("mobile") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const address = String(formData.get("address") || "").trim();
    const query = String(formData.get("query") || "").trim();

    try {
      // 1. Save directly into Supabase Database
      const supabaseResult = await saveAdmissionEnquiry({
        student_name,
        dob,
        gender,
        class_applying,
        father_name,
        mother_name,
        mobile,
        email,
        address,
        query,
      });

      if (!supabaseResult.success) {
        console.warn("Supabase save notification:", supabaseResult.error);
      }

      // 2. Dual Send: Try sending email via EmailJS if configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey
          );
        } catch (emailErr) {
          console.warn("EmailJS notification skipped/error:", emailErr);
        }
      }

      setSent(true);
      setStatusMessage({
        type: "success",
        text: "Your admission enquiry has been saved and submitted to the school administration.",
      });

      if (form.current) {
        form.current.reset();
      }
      setParentMobile("");
    } catch (error) {
      console.error("Admission submission error:", error);
      setStatusMessage({
        type: "error",
        text: "Could not submit your enquiry. Please try again or reach out to us directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-yellow-600">
            Admission Enquiry
          </p>

          <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Admission Enquiry Form
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Fill the form and our admission team will contact you shortly.
          </p>
        </div>

        {/* Success Message */}
        {sent && (
          <div className="mb-8 space-y-5">
            <div className="rounded-2xl border border-green-300 bg-green-100 p-5 text-center text-green-800 sm:p-6">
              <h3 className="text-lg font-bold">
                🎉 Admission Enquiry Submitted Successfully!
              </h3>

              <p className="mt-2 text-sm leading-6 sm:text-base">
                Thank you for your interest in St. An&apos;s Secondary School. Our
                admissions office has received your application and will reach out
                to you soon.
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/919413516345?text=Hello%20St.%20Ans%20School,%20I%20have%20submitted%20an%20admission%20enquiry%20through%20your%20website.%20Kindly%20assist%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700 sm:w-auto"
              >
                💬 Chat with us on WhatsApp
              </a>
            </div>
          </div>
        )}

        {statusMessage && statusMessage.type === "error" && (
          <div className="mb-6 rounded-2xl border border-red-300 bg-red-50 p-4 text-center text-sm font-medium text-red-800">
            {statusMessage.text}
          </div>
        )}

        {/* Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-3xl bg-white p-5 shadow-xl sm:p-8 md:grid-cols-2"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Student Name *
            </label>
            <input
              name="student_name"
              placeholder="Enter student name"
              required
              className="input"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dob"
              required
              className="input"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Gender *
            </label>
            <select
              name="gender"
              defaultValue=""
              required
              className="input"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Class Applying For *
            </label>
            <select
              name="class_applying"
              defaultValue=""
              required
              className="input"
            >
              <option value="" disabled>
                Select class
              </option>
              <option value="Play Group">Play Group</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
              <option value="Class 4">Class 4</option>
              <option value="Class 5">Class 5</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Father&apos;s Name *
            </label>
            <input
              name="father_name"
              placeholder="Enter father's name"
              required
              className="input"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Mother&apos;s Name
            </label>
            <input
              name="mother_name"
              placeholder="Enter mother's name"
              className="input"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="10-digit mobile number"
              required
              inputMode="numeric"
              pattern="[6-9][0-9]{9}"
              maxLength={10}
              title="Please enter a valid 10-digit Indian mobile number."
              value={parentMobile}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, "");
                setParentMobile(onlyNumbers.slice(0, 10));
              }}
              className="input"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              className="input"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              placeholder="Enter full address"
              rows={4}
              className="input resize-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Any Query
            </label>
            <textarea
              name="query"
              placeholder="Write your query here"
              rows={4}
              className="input resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="
              md:col-span-2
              mt-2
              w-full
              rounded-full
              bg-yellow-500
              px-8
              py-4
              font-bold
              text-black
              shadow-lg
              transition
              hover:bg-yellow-600
              hover:scale-[1.01]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {sending ? "Submitting to Admissions..." : "Submit Admission Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}