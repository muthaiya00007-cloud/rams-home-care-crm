const testimonials = [
  {
    name: "Ramesh",
    role: "Patient Care",
    review:
      "Excellent service. The nurses were very caring, professional and always available whenever we needed support.",
  },
  {
    name: "Lakshmi",
    role: "Elder Care",
    review:
      "Very reliable home care service. They treated my mother with kindness, respect and genuine compassion.",
  },
  {
    name: "Suresh",
    role: "Home Nursing",
    review:
      "Highly recommended. Professional staff, quick response and excellent nursing care throughout the treatment.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-slate-900">
          What Our Clients Say
        </h2>

        <p className="mx-auto mt-5 mb-14 max-w-2xl text-center text-lg text-slate-600">
          Trusted by families across Tamil Nadu for compassionate home nursing
          and healthcare services.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]"
            >
              <div className="mb-5 text-2xl text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-blue-600">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}