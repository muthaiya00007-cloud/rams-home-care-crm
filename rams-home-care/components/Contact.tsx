// Full replacement Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            CONTACT US
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Elite Home Care & Nursing provides trusted home nursing, patient care,
            elderly care, baby care and caregiver services across Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-600 p-10 text-white shadow-xl"
          >
            <h3 className="mb-8 text-3xl font-bold">Contact Information</h3>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="mt-1 text-blue-100">+91 99944 75537</p>
                  <p className="text-blue-100">+91 99944 75243</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="mt-1 text-blue-100">info@elitehomecare.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6" />
                <div>
                  <h4 className="font-semibold">Service Locations</h4>
                  <p className="mt-1 text-blue-100">
                    Madurai • Trichy • Salem • Thanjavur
                  </p>
                  <p className="text-blue-100">Serving All Over Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="mt-1 text-blue-100">24 × 7 Home Care Support</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/919994475537"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg"
          >
            <h3 className="mb-8 text-3xl font-bold text-slate-900">Send Enquiry</h3>

            <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"/>
              <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"/>
              <input type="email" placeholder="Email Address" className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"/>
              <textarea rows={5} placeholder="Your Message" className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"/>
              <button type="submit" className="w-full rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white hover:bg-blue-800">
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
