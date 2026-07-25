// Full Hero.tsx replacement
"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Users,
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { value: "24×7", label: "Support" },
  { value: "1000+", label: "Happy Families" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Trusted Care" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 pt-36 pb-24 text-white">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
            <Star className="h-4 w-4 text-yellow-400" />
            Trusted Healthcare Partner
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
            Elite Home
            <br />
            Care & Nursing
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Professional Home Nursing, Patient Care, Elder Care, Baby Care, ICU Care,
            Bedridden Patient Care and Home Healthcare Services across Tamil Nadu.
          </p>

          <div className="mt-5 space-y-2 text-blue-100">
            <p>📍 Madurai • Trichy • Salem • Thanjavur • All Over Tamil Nadu</p>
            <p>📞 99944 75537 | 99944 75243</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+919994475537" className="flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold transition hover:bg-green-700">
              <Phone className="h-5 w-5" />
              Call Now
            </a>

            <a href="https://wa.me/919994475537" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white px-7 py-4 font-bold transition hover:bg-white hover:text-blue-800">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-green-400"/>Verified Staff</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-green-400"/>24×7 Support</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-green-400"/>Emergency Service</div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((item)=>(
              <div key={item.label} className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
                <h2 className="text-3xl font-bold">{item.value}</h2>
                <p className="mt-2 text-sm text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} transition={{duration:0.9}} className="flex justify-center">
          <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900">Why Choose Elite?</h2>
              <p className="mt-2 text-gray-600">Trusted healthcare professionals delivering compassionate care at your home.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-2xl bg-red-50 p-4">
                <HeartPulse className="mt-1 h-10 w-10 text-red-500"/>
                <div><h3 className="text-lg font-bold">Patient Care</h3><p className="mt-1 text-sm text-gray-600">Professional caretakers for elderly, bedridden and post-operative patients with 24×7 support.</p></div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-green-50 p-4">
                <ShieldCheck className="mt-1 h-10 w-10 text-green-600"/>
                <div><h3 className="text-lg font-bold">Verified Staff</h3><p className="mt-1 text-sm text-gray-600">Experienced, background-verified nursing professionals dedicated to quality home healthcare.</p></div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-4">
                <Users className="mt-1 h-10 w-10 text-blue-600"/>
                <div><h3 className="text-lg font-bold">Family-Centered Care</h3><p className="mt-1 text-sm text-gray-600">Personalized care plans designed to meet every patient's medical and emotional needs.</p></div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-900 to-cyan-600 p-6 text-white">
              <h3 className="text-xl font-bold">24×7 Emergency Assistance</h3>
              <p className="mt-2 text-blue-100">Immediate response for patient care, elderly support, home nursing and emergency healthcare services across Tamil Nadu.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="tel:+919994475537" className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-900 transition hover:bg-blue-100">Call Now</a>
                <a href="https://wa.me/919994475537" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white px-5 py-3 font-semibold transition hover:bg-white hover:text-blue-900">WhatsApp</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
