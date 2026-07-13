const faqs = [
  {
    question: "Are your nurses qualified?",
    answer:
      "Yes. Our caregivers and nursing staff are trained and experienced in providing professional home healthcare services.",
  },
  {
    question: "Is your service available 24×7?",
    answer:
      "Yes. We provide round-the-clock support based on your healthcare needs.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We provide home care services across Tamil Nadu. Contact us to check availability in your location.",
  },
  {
    question: "How can I book a service?",
    answer:
      "You can call us directly or submit the contact form on our website. Our team will assist you promptly.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Answers to the most common questions about our services.
        </p>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-2xl shadow-premium p-6"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {faq.question}
              </h3>

              <p className="text-gray-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}