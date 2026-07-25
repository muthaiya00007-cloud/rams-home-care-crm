"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Care",
    description:
      "Experienced and verified caregivers for safe home nursing.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Service",
    description:
      "We care for every patient with dignity, respect and kindness.",
  },
  {
    icon: BadgeCheck,
    title: "Qualified Staff",
    description:
      "Professional nurses and caregivers with practical experience.",
  },
  {
    icon: Clock3,
    title: "24×7 Support",
    description:
      "Emergency and regular home care support whenever you need us.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About Us
            </span>

            <h2 className="mt-5 text-4xl font-bold text-blue-900">
              Elite Home Care & Nursing
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Elite Home Care & Nursing provides professional
              home nursing, patient care, elderly care,
              baby care and home assistance across Tamil Nadu.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our mission is to provide safe, affordable,
              compassionate and quality healthcare services
              in the comfort of your home.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="rounded-xl bg-blue-700 px-6 py-4 text-white">
                <h3 className="text-3xl font-bold">
                  10+
                </h3>

                <p>Years Experience</p>
              </div>

              <div className="rounded-xl bg-green-600 px-6 py-4 text-white">
                <h3 className="text-3xl font-bold">
                  1000+
                </h3>

                <p>Happy Families</p>
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-gray-50 p-6 shadow-sm transition hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3">
                    <Icon className="h-7 w-7 text-blue-700" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </motion.div>

        </div>

      </div>
    </section>
  );
}