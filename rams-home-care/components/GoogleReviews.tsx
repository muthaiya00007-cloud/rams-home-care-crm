const reviews = [
  {
    name: "Priya",
    review:
      "Very professional and caring staff. Excellent home nursing service.",
  },
  {
    name: "Arun",
    review:
      "Quick response and experienced nurses. Highly recommended.",
  },
  {
    name: "Meena",
    review:
      "Thank you for taking care of my father. Outstanding service.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg">
            <span className="text-2xl">🟢</span>
            <span className="text-xl font-bold text-slate-900">
              Google Rating
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-extrabold text-slate-900">
            Rated 4.9 ★ on Google
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Trusted by hundreds of happy families across Tamil Nadu.
          </p>

          <div className="mt-6 text-3xl text-yellow-500">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-2 text-lg font-semibold text-blue-700">
            1000+ Happy Families
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Book Service
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]"
            >
              <div className="text-xl text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                "{review.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {review.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Google Review
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