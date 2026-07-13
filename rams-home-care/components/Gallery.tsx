const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/Baby.jpg",
  "/images/Elder.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-blue-50 via-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-slate-900">
          Our Gallery
        </h2>

        <p className="mx-auto mt-5 mb-14 max-w-2xl text-center text-lg text-slate-600">
          A glimpse of our compassionate home nursing, patient care and
          healthcare services delivered with professionalism and kindness.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  Professional Care
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Trusted home nursing and healthcare services.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}