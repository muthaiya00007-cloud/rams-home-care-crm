// Full replacement FAQ.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "Do you provide 24×7 Home Nursing Services?",
    answer:
      "Yes. We provide 24×7 Home Nursing, Patient Care, ICU Care, Elder Care and Caregiver Services throughout Tamil Nadu.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We provide services in Madurai, Trichy, Salem, Thanjavur and All Over Tamil Nadu.",
  },
  {
    question: "How can I book a caregiver?",
    answer:
      "Simply call us on +91 99944 75537 or +91 99944 75243, or contact us through WhatsApp at 99944 75537.",
  },
  {
    question: "Are your nurses experienced?",
    answer:
      "Yes. All our nurses and caregivers are experienced, verified and professionally trained.",
  },
  {
    question: "Do you provide Elder Care and Baby Care?",
    answer:
      "Yes. We provide Elder Care, Baby Care, Home Nursing, Patient Care, Cooking and Housekeeping services.",
  },
  {
    question: "Is emergency support available?",
    answer:
      "Yes. Depending on staff availability we provide emergency caregiver support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700">
            <HelpCircle className="h-5 w-5"/> Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">Got Questions?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Find answers to the most common questions about Elite Home Care & Nursing Services.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq,index)=>(
            <motion.div key={index} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button onClick={()=>setOpenIndex(openIndex===index?null:index)} className="flex w-full items-center justify-between px-6 py-5 text-left">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-blue-700"/>
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${openIndex===index?"rotate-180":""}`}/>
              </button>
              <AnimatePresence>
                {openIndex===index && (
                  <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>
                    <div className="border-t border-slate-200 px-6 py-5">
                      <p className="leading-7 text-slate-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-16 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">Still Have Questions?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Our care coordinators are ready to help you choose the right care service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+919994475537" className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700">📞 Call Now</a>
            <a href="https://wa.me/919994475537" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white px-6 py-3 font-semibold">💬 WhatsApp</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
