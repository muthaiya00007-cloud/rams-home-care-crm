import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900">
            Contact Us
          </h2>

          <p className="mt-5 mx-auto max-w-2xl text-lg text-slate-600">
            Our team is available 24×7 to provide trusted home nursing,
            patient care and healthcare services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="rounded-3xl bg-white border border-slate-200 p-10 shadow-xl">

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="rounded-2xl bg-blue-100 p-4">
                  <Phone className="text-blue-700" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Phone
                  </h3>

                  <p className="text-slate-600">
                    +91 99944 75537
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-2xl bg-blue-100 p-4">
                  <Mail className="text-blue-700" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Email
                  </h3>

                  <p className="text-slate-600">
                    info@ramshomecare.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-2xl bg-blue-100 p-4">
                  <MapPin className="text-blue-700" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Service Area
                  </h3>

                  <p className="text-slate-600">
                    Trichy • Dindigul • Across Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-2xl bg-blue-100 p-4">
                  <Clock className="text-blue-700" />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Working Hours
                  </h3>

                  <p className="text-slate-600">
                    24 Hours • 7 Days a Week
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}