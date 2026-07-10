"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

type NavScroll = {
  name: string;
  scrollTo: string;
};

type NavItem = NavLink | NavScroll;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Facilities", scrollTo: "why-choose" },
    { name: "Gallery", scrollTo: "gallery" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScrollClick = (sectionId: string) => {
    setIsOpen(false);

    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      sessionStorage.setItem("scrollTarget", sectionId);
      router.push("/");
    }
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const target = sessionStorage.getItem("scrollTarget");

    if (target) {
      setTimeout(() => {
        scrollToSection(target);
        sessionStorage.removeItem("scrollTarget");
      }, 300);
    }
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="School Logo"
            width={50}
            height={50}
            className="rounded-full object-contain"
          />

          <div>
            <h1 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl md:text-2xl">
              St. An&apos;s School
            </h1>

            <p className="text-xs text-gray-500 sm:text-sm">
              Jalore, Rajasthan
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              {"scrollTo" in item ? (
                <button
                  type="button"
                  onClick={() => handleScrollClick(item.scrollTo)}
                  className="group relative font-medium text-gray-700 transition duration-300 hover:text-yellow-600"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="group relative font-medium text-gray-700 transition duration-300 hover:text-yellow-600"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop Admission Button */}
        <Link
          href="/admissions"
          className="hidden rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black shadow-md transition duration-300 hover:scale-105 hover:bg-yellow-600 lg:inline-flex"
        >
          Admissions Open
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-900 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t border-gray-200 bg-white shadow-xl lg:hidden"
          >
            <div className="space-y-4 px-6 py-6">
              {links.map((item) =>
                "scrollTo" in item ? (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleScrollClick(item.scrollTo)}
                    className="block w-full py-2 text-left font-semibold text-gray-800 transition hover:text-yellow-600"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 font-semibold text-gray-800 transition hover:text-yellow-600"
                  >
                    {item.name}
                  </Link>
                )
              )}

              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-yellow-500 px-6 py-3 font-bold text-black shadow-md transition hover:bg-yellow-600"
              >
                Admissions Open
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}