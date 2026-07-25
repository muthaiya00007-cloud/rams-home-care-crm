// Full replacement Gallery.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Heart, ShieldCheck } from "lucide-react";

const images = [
  { src: "/images/gallery1.jpg", title: "Patient Care" },
  { src: "/images/gallery2.jpg", title: "Home Nursing" },
  { src: "/images/gallery3.jpg", title: "Cooking Assistance" },
  { src: "/images/gallery4.jpg", title: "Baby Care" },
  { src: "/images/Elder.jpg", title: "Elder Care" },
  { src: "/images/ICU.jpg", title: "ICU & Critical Care" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            <Camera className="h-4 w-4"/> Our Gallery
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-blue-950 lg:text-5xl">Moments of Care & Compassion</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Explore our compassionate healthcare services across Madurai, Trichy, Salem, Thanjavur and All Over Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image,index)=>(
            <motion.div key={image.src} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{delay:index*0.08}} viewport={{once:true}} className="group overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="relative h-80">
                <Image src={image.src} alt={image.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                  <p className="text-blue-100">Elite Home Care & Nursing</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-900 to-cyan-600 p-10 text-center text-white">
          <div className="flex justify-center gap-6 mb-4">
            <span className="flex items-center gap-2"><Heart className="h-5 w-5"/>Compassionate Care</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5"/>Trusted Professionals</span>
          </div>
          <p>Every photograph reflects our commitment to quality home healthcare.</p>
        </div>
      </div>
    </section>
  );
}
