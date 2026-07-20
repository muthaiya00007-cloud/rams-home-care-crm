"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="Raam's Home Nursing ServicesA"
              width={54}
              height={54}
              className="rounded-full"
            />

            <div>
              <h1
                className={`text-xl font-bold ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Raam's Home Nursing ServicesA
              </h1>

              <p
                className={`text-xs ${
                  scrolled ? "text-slate-600" : "text-slate-200"
                }`}
              >
                Trusted Home Nursing
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${
                  scrolled
                    ? "text-slate-700 hover:text-blue-600"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9994475537"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          <button
            className={`lg:hidden ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed left-4 right-4 top-24 z-40 rounded-2xl bg-white p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-slate-700"
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="tel:9994475537"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white font-semibold"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}