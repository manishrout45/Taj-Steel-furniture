import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Bed,
  Sofa,
  BriefcaseBusiness,
  Martini,
  Armchair,
  Hospital,
  CookingPot,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const [open, setOpen] = useState(0);

  const faqData = [
    {
      question: "Do you provide bulk or project-based furniture solutions?",
      answer:
        "Yes, Taj Steel Furniture specializes in bulk manufacturing and project-based solutions for homes, offices, and commercial spaces with consistent quality and timely delivery.",
    },
    {
      question: "What materials are used in your furniture?",
      answer:
        "We use high-grade steel, premium wood finishes, and durable coatings to ensure long-lasting strength, modern aesthetics, and resistance to wear and corrosion.",
    },
    {
      question: "Can I track my order and delivery status?",
      answer:
        "Yes, we provide complete order updates, including production progress and delivery tracking, ensuring transparency at every stage.",
    },
    {
      question: "Do you offer custom furniture designs?",
      answer:
        "Absolutely. We design and manufacture custom furniture tailored to your space, style, and functional requirements.",
    },
    {
      question:
        "Do you supply furniture for commercial and industrial use?",
      answer:
        "Yes, we cater to offices, hospitals, institutions, and industrial setups with heavy-duty and ergonomic furniture solutions.",
    },
  ];

  const tags = [
    { title: "Kitchen", icon: <CookingPot size={13} /> },
    { title: "Living Room", icon: <Sofa size={13} /> },
    { title: "Bed Room", icon: <Bed size={13} /> },
    { title: "Office Room", icon: <BriefcaseBusiness size={13} /> },
    { title: "Bars", icon: <Martini size={13} /> },
    { title: "Lounges", icon: <Armchair size={13} /> },
    { title: "Hospitals", icon: <Hospital size={13} /> },
  ];

  return (
    <section className="w-full bg-[#111111] py-16 md:py-24 px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT FAQ */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-orange-500 uppercase tracking-[2px] text-xs font-semibold mb-4"
          >
            Product Related Queries
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white font-serif text-3xl md:text-5xl mb-8 leading-tight"
          >
            Products &amp; Service
          </motion.h2>

          <div className="space-y-1">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className={`w-full flex justify-between items-center text-left py-4 transition-colors duration-300 ${
                    open === index
                      ? "text-orange-500"
                      : "text-white"
                  }`}
                >
                  <span className="font-serif text-base md:text-xl leading-snug pr-5">
                    {item.question}
                  </span>

                  <span className="transition-transform duration-300">
                    {open === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </span>
                </button>

                {/* Smooth Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    open === index
                      ? "max-h-40 opacity-100 pb-4"
                      : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="text-gray-400 leading-7 text-xs md:text-sm max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE CARD */}
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src="/assets/images/WhyChooseImg.png"
            alt="room"
            className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          />

          <div className="absolute inset-0 bg-black/35"></div>

          {/* Bottom Pills */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
  className="absolute bottom-6 left-0 w-full flex justify-center px-4"
>
  <div className="flex flex-wrap justify-center gap-3 max-w-[90%]">
    {tags.map((tag, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: i * 0.08,
        }}
        viewport={{ once: true }}
        className="border border-white/80 rounded-full px-4 py-[6px] text-white flex items-center gap-2 text-[11px] md:text-xs backdrop-blur-sm"
      >
        {tag.title}
        {tag.icon}
      </motion.div>
    ))}
  </div>
</motion.div>
        </motion.div>

      </div>
    </section>
  );
}