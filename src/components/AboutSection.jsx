import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#0b0b0b] py-16 md:py-24 px-5 md:px-12 overflow-hidden">
      <div className="max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Heading */}
            <div className="mb-8">
              <p className="text-orange-500 uppercase tracking-[2px] text-xs font-semibold mb-4">
                Taj Steel Furniture
              </p>

              <h2 className="text-white font-serif text-3xl md:text-5xl leading-tight mb-5">
                Premium Steel Furniture For
                Home, Office &amp; Commercial Use
              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-7 max-w-2xl">
                At Taj Steel Furniture, we design durable and stylish steel
                furniture crafted to enhance homes, offices, institutions, and
                commercial spaces. Our premium quality materials and expert
                workmanship ensure strength, comfort, and long-lasting
                performance in every product.
              </p>
            </div>

            {/* Bottom Left Image */}
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/assets/images/AboutImg1.png"
                alt="steel furniture"
                className="w-full h-[320px] sm:h-[450px] md:h-[580px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Top Right Image */}
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/assets/images/AboutImg2.png"
                alt="modern furniture"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            {/* Bottom Right Content */}
            <motion.div
              className="pt-1"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-white font-serif text-2xl md:text-4xl mb-5 leading-tight">
                Built With Strength &amp; Modern Design
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-7 mb-7">
                We offer a wide range of innovative steel furniture solutions
                that combine elegance, utility, and reliability. From storage
                units and office tables to beds, cabinets, and custom
                furnishings, every piece is engineered to meet modern lifestyle
                and business requirements.
              </p>

              <div className="space-y-4">
                {[
                  "High-quality steel with rust-resistant finishing.",
                  "Customized furniture solutions for every space.",
                  "Trusted durability with elegant modern craftsmanship.",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    <Check
                      className="text-orange-500 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}