import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Bhubaneswar",
    image:
      "https://img.freepik.com/premium-psd/blank-profile-picture-with-circle-blue-psd-transparent-background_609989-5235.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    text: `Very strong and durable furniture. I purchased a steel bed and it's been excellent in quality. Highly recommended for long-term use.`,
  },
  {
    id: 2,
    name: "Anita Das",
    location: "Cuttack",
    image:
      "https://img.freepik.com/premium-psd/blank-profile-picture-with-circle-blue-psd-transparent-background_609989-5235.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    text: `Good design and reasonable pricing. The shop owner was very helpful in suggesting the right furniture for my home.`,
  },
  {
    id: 3,
    name: "Sanjay Patra",
    location: "Khordha",
    image:
      "https://img.freepik.com/premium-psd/blank-profile-picture-with-circle-blue-psd-transparent-background_609989-5235.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    text: `Nice collection of steel furniture. Quality is solid and delivery was on time. Will visit again for office furniture.`,
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#111111] py-20 px-5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Top */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-orange-500 tracking-[3px] text-xs mb-3"
        >
          CUSTOMER FEEDBACK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl font-serif mb-10 leading-tight"
        >
          What Our Customers Say
        </motion.h2>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-[360px] md:h-[320px] flex items-center justify-center"
        >

          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`absolute w-full transition-all duration-700 ease-in-out px-4 ${
                index === current
                  ? "opacity-100 translate-x-0 scale-100 z-10"
                  : index < current
                  ? "opacity-0 -translate-x-full scale-95"
                  : "opacity-0 translate-x-full scale-95"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl"
              >

                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-5"
                >
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < item.rating
                          ? "text-orange-500"
                          : "text-gray-600"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </motion.div>

                {/* Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto"
                >
                  {item.text}
                </motion.p>

                {/* Profile */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover mb-3 border border-white/20"
                  />

                  <h4 className="text-white font-semibold text-sm md:text-base">
                    {item.name}
                  </h4>

                  <span className="text-xs text-gray-400">
                    {item.location}
                  </span>
                </motion.div>

              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <motion.button
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onClick={prevSlide}
          className="absolute left-3 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-orange-500 text-white p-3 rounded-full backdrop-blur transition duration-300"
        >
          <ChevronLeft size={22} />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onClick={nextSlide}
          className="absolute right-3 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-orange-500 text-white p-3 rounded-full backdrop-blur transition duration-300"
        >
          <ChevronRight size={22} />
        </motion.button>

        {/* Dots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-10"
        >
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                current === i
                  ? "w-6 h-2 bg-orange-500"
                  : "w-2 h-2 bg-gray-500"
              }`}
            ></div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}