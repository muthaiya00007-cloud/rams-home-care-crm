import {
  HeartPulse,
  Users,
  Baby,
  Stethoscope,
  Activity,
  House,
} from "lucide-react";

const services = [
  {
    title: "Patient Care",
    description: "Professional caregivers for patients recovering at home.",
    icon: HeartPulse,
  },
  {
    title: "Elder Care",
    description: "Compassionate care and assistance for senior citizens.",
    icon: Users,
  },
  {
    title: "Baby Care",
    description: "Experienced caretakers for newborns and infants.",
    icon: Baby,
  },
  {
    title: "Home Nursing",
    description: "Qualified nurses for injections, dressings and medical care.",
    icon: Stethoscope,
  },
  {
    title: "ICU Care",
    description: "Advanced nursing support for critical care patients at home.",
    icon: Activity,
  },
  {
    title: "Housekeeping",
    description: "Reliable housekeeping staff for daily household support.",
    icon: House,
  },
];

export default function Services() {
  return (
<section
  id="services"
  className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50"
>      <div className="max-w-7xl mx-auto px-6">
<h2 className="text-5xl font-extrabold text-center text-slate-900">          Our Services
        </h2>

<p className="mx-auto mt-5 mb-14 max-w-2xl text-center text-lg text-slate-600">          We provide trusted home healthcare services with compassion,
          professionalism and 24×7 support.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
  key={service.title}
  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]"
>
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="h-10 w-10 text-blue-700" />
              </div>

<h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
              <a
  href="#contact"
  className="mt-6 inline-flex items-center font-semibold text-blue-700 transition group-hover:text-blue-900"
>
  Learn More →
</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}