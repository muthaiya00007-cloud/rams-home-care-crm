"use client";

export default function Map() {
  return (
    <section
      id="location"
      className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-extrabold text-slate-900">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            We proudly provide trusted Home Nursing, Patient Care, Elder Care
            and Baby Care services in Madurai, Trichy, Salem, Thanjavur and
            across Tamil Nadu.
          </p>

          <p className="mt-4 font-semibold text-blue-700">
            Service Areas: Madurai • Trichy • Salem • Thanjavur • All Over Tamil Nadu
          </p>

          <p className="mt-2 text-slate-700">
            Call: +91 99944 75537 | +91 99944 75243
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
