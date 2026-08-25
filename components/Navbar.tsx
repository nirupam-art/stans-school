"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  sectionId?: string;
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links: NavItem[] = [
    { name: "Home", href: "/", sectionId: "home" },
    { name: "About", href: "/about" },
    { name: "Facilities", href: "/facilities", sectionId: "facilities" },
    { name: "Gallery", href: "/gallery", sectionId: "gallery" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  const smoothScrollTo = (targetId: string) => {
    if (targetId === "home" || targetId === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element =
      document.getElementById(targetId) ||
      (targetId === "facilities" ? document.getElementById("why-choose") : null);

    if (element) {
      const navbarOffset = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = Math.max(0, elementTop - navbarOffset);

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    setIsOpen(false);

    // If Home button or Logo
    if (item.name === "Home" || item.href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Leaving another page to go to Home top
        e.preventDefault();
        router.push("/");
      }
      return;
    }

    // If on homepage and the item has an in-page section (Facilities / Gallery)
    if (pathname === "/" && item.sectionId) {
      e.preventDefault();
      smoothScrollTo(item.sectionId);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      e.preventDefault();
      router.push("/");
    }
  };

  // Handle URL hash on initial page load / after navigation
  useEffect(() => {
    if (pathname !== "/") return;

    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (hashId) {
        const timer = setTimeout(() => {
          smoothScrollTo(hashId);
        }, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-3.5">
        {/* School Logo & Title */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-3 transition"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-yellow-400/80 p-0.5 shadow transition group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="St. An's Secondary School Logo"
              width={48}
              height={48}
              priority
              className="rounded-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-lg font-black leading-tight text-gray-900 transition group-hover:text-yellow-600 sm:text-xl md:text-2xl">
              St. An&apos;s School
            </h1>
            <p className="text-xs font-semibold text-gray-500">
              Jalore, Rajasthan
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`group relative text-sm font-bold transition-all duration-200 ${
                  pathname === item.href
                    ? "text-yellow-600"
                    : "text-gray-700 hover:text-yellow-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-yellow-500 transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop Admission CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/admissions"
            className="rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-black text-slate-950 shadow-md transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg"
          >
            Admissions Open
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition hover:bg-yellow-100 hover:text-yellow-800 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-200 bg-white/98 backdrop-blur-xl shadow-2xl lg:hidden"
          >
            <div className="space-y-2 px-6 py-6">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block rounded-xl px-4 py-3 text-base font-bold transition ${
                    pathname === item.href
                      ? "bg-yellow-100 text-yellow-800"
                      : "text-gray-800 hover:bg-gray-50 hover:text-yellow-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2">
                <Link
                  href="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-black text-slate-950 shadow-md transition hover:bg-yellow-500"
                >
                  Apply for Admission 2026
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}