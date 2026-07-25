"use client";

import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  BadgeCheck,
  MessageSquare,
} from "lucide-react";

const reviews = [
  {
    name: "Priya",
    location: "Trichy",
    review:
      "Very professional and caring staff. Excellent home nursing service.",
  },
  {
    name: "Arun",
    location: "Madurai",
    review:
      "Quick response and experienced nurses. Highly recommended.",
  },
  {
    name: "Meena",
    location: "Dindigul",
    review:
      "Thank you for taking care of my father. Outstanding service.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50 py-24">

      {/* Background Blur */}

      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg">

            <BadgeCheck className="h-6 w-6 text-green-600" />

            <span className="text-lg font-bold text-slate-900">
              Google Verified Reviews
            </span>

          </div>

          <h2 className="mt-8 text-5xl font-extrabold text-slate-900 lg:text-6xl">

            Rated
            <span className="text-blue-700"> 4.9 ★ </span>
            on Google

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

            Elite Home Care & Nursing is trusted by families across
            Tamil Nadu for compassionate, reliable and professional
            home healthcare services.

          </p>

          <div className="mt-8 flex justify-center gap-1">

            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="h-8 w-8 fill-yellow-400 text-yellow-400"
              />
            ))}

          </div>

          <p className="mt-4 text-xl font-semibold text-blue-700">
            1000+ Happy Families
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
          >
            <MessageSquare className="h-5 w-5" />
            Book Service
          </a>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
                  {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-blue-300 hover:shadow-2xl"
          >

            {/* Rating */}

            <div className="mb-5 flex gap-1">

              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}

            </div>

            {/* Review */}

            <p className="leading-8 text-slate-600">
              "{review.review}"
            </p>

            <div className="my-6 h-px bg-slate-200" />

            {/* Customer */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xl font-bold text-white shadow-md">
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    {review.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                    <MapPin className="h-4 w-4" />

                    {review.location}

                  </div>

                </div>

              </div>

              <div className="rounded-full bg-green-100 px-3 py-2 text-xs font-semibold text-green-700">
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
          Trusted by Families Across Tamil Nadu
        </h3>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
          Our commitment to compassionate care, experienced professionals
          and timely service has earned the trust of hundreds of families.
          Every review motivates us to deliver even better healthcare at home.
        </p>

      </motion.div>
            {/* Decorative Background */}

      <div className="pointer-events-none absolute left-10 top-20 hidden h-24 w-24 rounded-full border border-blue-200 lg:block" />

      <div className="pointer-events-none absolute right-10 bottom-20 hidden h-20 w-20 rounded-full border border-cyan-200 lg:block" />

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