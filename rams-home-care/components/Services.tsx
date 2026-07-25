"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Baby,
  UserRound,
  CookingPot,
  House,
  Stethoscope,
  Activity,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Patient Care",
    description:
      "Professional patient care services at home with experienced caregivers.",
  },
  {
    icon: UserRound,
    title: "Elder Care",
    description:
      "Compassionate elderly care with dignity, comfort and continuous support.",
  },
  {
    icon: Baby,
    title: "Baby Care",
    description:
      "Safe and reliable newborn and infant care by trained caregivers.",
  },
  {
    icon: Stethoscope,
    title: "Home Nursing",
    description:
      "Qualified nurses for injections, dressing, medication and recovery care.",
  },
  {
    icon: Activity,
    title: "ICU & Post Operative Care",
    description:
      "Professional recovery support after surgery and intensive medical care.",
  },
  {
    icon: HeartHandshake,
    title: "Palliative Care",
    description:
      "Comfort-focused care that improves quality of life for patients and families.",
  },
  {
    icon: CookingPot,
    title: "Cooking Service",
    description:
      "Healthy home-cooked meals prepared according to patient requirements.",
  },
  {
    icon: House,
    title: "Housekeeping",
    description:
      "Reliable housekeeping and daily living assistance for every family.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Healthcare Services
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-blue-950 lg:text-5xl">
            Elite Home Care & Nursing Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            We provide trusted home healthcare services across Tamil Nadu with
            experienced nurses and caregivers, ensuring compassionate,
            professional and personalized care for every patient.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-5 transition-all duration-300 group-hover:scale-110 group-hover:from-blue-700 group-hover:to-cyan-500">

                  <Icon className="h-8 w-8 text-blue-700 transition-colors duration-300 group-hover:text-white" />

                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm font-semibold text-blue-700">
                    Professional Service
                  </span>

                  <ArrowRight className="h-5 w-5 text-blue-700 transition-transform duration-300 group-hover:translate-x-2" />

                </div>

              </motion.div>
            );
          })}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600 p-10 text-white shadow-2xl"
        >

          <div className="grid items-center gap-8 lg:grid-cols-2">

            <div>

              <h3 className="text-3xl font-bold">
                Need Professional Home Healthcare?
              </h3>

              <p className="mt-4 text-lg leading-8 text-blue-100">
                Our experienced nurses and caregivers are available
                to provide compassionate, reliable and personalized
                healthcare services at your home throughout Tamil Nadu.
              </p>

            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">

              <a
                href="tel:+919994475537"
                className="rounded-xl bg-white px-7 py-4 font-bold text-blue-900 transition hover:bg-blue-100"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/9994475537"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white px-7 py-4 font-bold transition hover:bg-white hover:text-blue-900"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </motion.div>
              </div>

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute left-10 top-20 hidden h-24 w-24 rounded-full border border-blue-200 lg:block" />
      <div className="pointer-events-none absolute right-12 bottom-16 hidden h-20 w-20 rounded-full border border-cyan-200 lg:block" />
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

    </section>
  );
}