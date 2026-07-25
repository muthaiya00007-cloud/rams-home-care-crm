"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  MapPin,
  HeartHandshake,
} from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Trichy",
    review:
      "Excellent home nursing service. The staff were professional, caring and always on time.",
  },
  {
    name: "Lakshmi Devi",
    location: "Dindigul",
    review:
      "Very kind and trustworthy caregivers. My mother received excellent support.",
  },
  {
    name: "Suresh",
    location: "Madurai",
    review:
      "Professional nurses, quick response and affordable service. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">

      {/* Background Effects */}

      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            <HeartHandshake className="h-4 w-4" />

            Client Testimonials

          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-blue-950 lg:text-5xl">

            What Our
            <br />

            Clients Say

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">

            Families across Tamil Nadu trust
            <span className="font-semibold text-blue-700">
              {" "}Elite Home Care & Nursing
            </span>
            {" "}for compassionate, reliable and professional healthcare services.

          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
                  {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >

            {/* Quote Icon */}

            <div className="absolute right-6 top-6 opacity-10">

              <Quote className="h-14 w-14 text-blue-700" />

            </div>

            {/* Rating */}

            <div className="mb-6 flex gap-1">

              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}

            </div>

            {/* Review */}

            <p className="leading-8 text-gray-600">

              "{item.review}"

            </p>

            {/* Divider */}

            <div className="my-6 h-px bg-gray-200" />

            {/* Customer */}

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-lg font-bold text-blue-900">
                  {item.name}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">

                  <MapPin className="h-4 w-4" />

                  {item.location}

                </div>

              </div>

              <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                Verified

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600 p-10 text-center text-white shadow-2xl"
      >

        <h3 className="text-4xl font-extrabold">
          ⭐ 4.9 / 5 Customer Rating
        </h3>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">

          Hundreds of families across Tamil Nadu trust
          <span className="font-semibold text-white">
            {" "}Elite Home Care & Nursing
          </span>
          {" "}for dependable, compassionate and professional home healthcare services.

        </p>
              </motion.div>

      {/* Decorative Background Elements */}

      <div className="pointer-events-none absolute left-8 top-20 hidden h-24 w-24 rounded-full border border-blue-200 lg:block" />

      <div className="pointer-events-none absolute right-10 bottom-16 hidden h-20 w-20 rounded-full border border-cyan-200 lg:block" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 hidden h-12 w-12 -translate-x-1/2 rounded-full bg-blue-100 blur-sm lg:block" />

      {/* Bottom Wave */}

      <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-20 w-full text-white"
          fill="currentColor"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>

    </div>
  </section>
  );
}