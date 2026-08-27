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
  const [isScrolled, setIsScrolled] = useState(false);

  const links: NavItem[] = [
    { name: "Home", href: "/", sectionId: "home" },
    { name: "About", href: "/about" },
    { name: "Facilities", href: "/facilities", sectionId: "facilities" },
    { name: "Gallery", href: "/gallery", sectionId: "gallery" },
    { name: "News", href: "/news" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isHomeTop = pathname === "/" && !isScrolled;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isHomeTop
          ? "bg-transparent border-transparent py-4 shadow-none text-white"
          : "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3.5 shadow-sm text-slate-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* School Logo & Title */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-3 transition"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-yellow-400/90 p-0.5 shadow-md transition group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="St. An's Secondary School Logo"
              width={44}
              height={44}
              priority
              className="rounded-full object-contain"
            />
          </div>

          <div>
            <h1
              className={`text-lg font-black leading-tight transition sm:text-xl md:text-2xl ${
                isHomeTop
                  ? "text-white group-hover:text-yellow-400 drop-shadow-sm"
                  : "text-slate-900 group-hover:text-yellow-600"
              }`}
            >
              St. An&apos;s School
            </h1>
            <p
              className={`text-xs font-semibold ${
                isHomeTop ? "text-slate-300/90" : "text-slate-500"
              }`}
            >
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
                    ? isHomeTop
                      ? "text-yellow-400 font-black"
                      : "text-yellow-600 font-black"
                    : isHomeTop
                    ? "text-slate-100 hover:text-yellow-400"
                    : "text-slate-700 hover:text-yellow-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
                    isHomeTop ? "bg-yellow-400" : "bg-yellow-500"
                  } ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop Admission CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/admissions"
            className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-black text-slate-950 shadow-md transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg"
          >
            Admissions Open
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition lg:hidden border ${
            isHomeTop
              ? "bg-white/10 text-white hover:bg-yellow-400 hover:text-slate-950 border-white/15"
              : "bg-slate-100 text-slate-900 hover:bg-yellow-400 hover:text-slate-950 border-slate-200"
          }`}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
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
            className={`overflow-hidden border-t shadow-2xl lg:hidden ${
              isHomeTop
                ? "border-white/10 bg-slate-950/95 text-white backdrop-blur-2xl"
                : "border-slate-200 bg-white/98 text-slate-900 backdrop-blur-xl"
            }`}
          >
            <div className="space-y-2 px-6 py-6">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block rounded-xl px-4 py-3 text-base font-bold transition ${
                    pathname === item.href
                      ? "bg-yellow-400/20 text-yellow-600 border border-yellow-400/30"
                      : isHomeTop
                      ? "text-slate-200 hover:bg-white/5 hover:text-yellow-400"
                      : "text-slate-800 hover:bg-slate-50 hover:text-yellow-600"
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