import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900/80 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Raam's Home Nursing Services"
            width={55}
            height={55}
            className="rounded-full"
          />

          <div>
            <h1 className="text-2xl font-bold">
              Raam's Home Nursing Services
            </h1>

            <p className="text-sm text-gray-200">
              Trusted Home Nursing Services
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <a
          href="tel:9994475537"
          className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl font-bold"
        >
          📞 Call
        </a>

      </div>
    </nav>
  );
}