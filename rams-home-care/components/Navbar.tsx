"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-blue-900/90 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Elite Home Care & Nursing"
            width={56}
            height={56}
            priority
            className="rounded-full border-2 border-white object-cover"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-white">Elite Home Care</h1>
            <p className="text-sm text-blue-100">& Nursing</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-white transition hover:text-yellow-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919994475537"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700 lg:flex"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href="tel:+919994475537"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
