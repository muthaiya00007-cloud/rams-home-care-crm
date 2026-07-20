import { Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-3xl font-extrabold">
              Raam's Home Nursing ServicesA
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Trusted home nursing, patient care, elder care and baby care
              services delivered with compassion across Tamil Nadu.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 99944 75537</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@ramshomecare.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Trichy • Dindigul</span>
              </div>

            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">
              Available
            </h3>

            <div className="rounded-2xl bg-blue-600 p-6">
              <p className="text-3xl font-black">
                24×7
              </p>

              <p className="mt-2">
                Emergency Home Nursing Support
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-slate-400">
              © {new Date().getFullYear()} Raam's Home Nursing ServicesA. All Rights Reserved.
            </p>

            <p className="flex items-center gap-2 text-slate-400">
              Made with <Heart size={16} className="text-red-500" /> for Better Healthcare
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}