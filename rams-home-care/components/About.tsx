import { ShieldCheck, Clock3, HeartHandshake, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Clock3,
      title: "24×7 Support",
      text: "Round-the-clock home nursing and emergency assistance.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Service",
      text: "Professional, verified and experienced nursing staff.",
    },
    {
      icon: Users,
      title: "Qualified Nurses",
      text: "Experienced caregivers for patients of all ages.",
    },
    {
      icon: HeartHandshake,
      title: "Compassionate Care",
      text: "Personalized care with kindness, dignity and respect.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="/images/Elder.jpg"
            alt="Ram's Home Care"
            className="w-full rounded-3xl shadow-2xl object-cover"
          />
        </div>

        <div>
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ABOUT RAM'S HOME CARE
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight">
  <span className="text-slate-900">
    Trusted Home Nursing
  </span>
  <br />
  <span className="text-blue-700">
    Home Healthcare Services
  </span>
</h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ram's Home Care provides compassionate home nursing, patient care,
            elder care, baby care and ICU support across Tamil Nadu. Our
            qualified nurses and caregivers are committed to delivering safe,
            reliable and personalized healthcare in the comfort of your home.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-4">
                  <item.icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}