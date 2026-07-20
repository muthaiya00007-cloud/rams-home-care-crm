"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Users, Phone } from "lucide-react";

const stats = [
  { value: "24×7", label: "Support" },
  { value: "1000+", label: "Happy Families" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Trusted Care" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-blue-900/70" />

<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pt-32 pb-20 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <ShieldCheck size={18} />
            Trusted Home Healthcare
          </span>

          <h1 className="mt-6 text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
  Raam's Home Nursing Services
</h1>
<h2 className="mt-4 text-2xl md:text-4xl font-semibold text-cyan-300">
  Premium Home Nursing Services
</h2>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-200">
  Compassionate Home Nursing, Patient Care, Elder Care, Baby Care and ICU
  Support delivered by experienced professionals. We provide safe,
  reliable and personalized healthcare at your doorstep, 24×7.
</p>
<div className="mt-8 flex flex-wrap gap-3">
  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
    ⭐ 4.9 Google Rating
  </span>

  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
    🩺 Qualified Nurses
  </span>

  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
    🚑 24×7 Emergency Support
  </span>
</div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Book Service
            </a>

            <a
              href="tel:9994475537"
              className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/20"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .3 }}
         className="mt-16 grid grid-cols-2 gap-6 max-w-3xl"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}

          <div className="col-span-2 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <HeartPulse className="text-cyan-300" size={40} />
              <div>
                <h4 className="text-xl font-bold text-white">
                  Compassionate Care
                </h4>

                <p className="mt-1 text-slate-300">
                  Professional nurses & caregivers for every family.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
        ↓
      </div>
    </section>
  );
}