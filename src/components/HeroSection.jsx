import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://img.magnific.com/free-photo/white-table-chairs-terrace-oia-santorini_268835-3504.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    subtitle: "TIMELESS ELEGANCE",
    title: "Discover Furniture's For Living",
    desc: "Exceptional furniture solutions blending elegance, comfort, and modern design.",
  },
  {
    image:
      "https://img.magnific.com/premium-photo/stainless-steel-furniture-white-background_996135-45417.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    subtitle: "MODERN INTERIORS",
    title: "Luxury Crafted For Your Home",
    desc: "Beautiful premium furniture collections curated for elegant spaces. Create warmth, comfort and timeless design in every corner of your living.",
  },
  {
    image:
      "https://img.magnific.com/premium-photo/wooden-table-with-square-design_862994-510724.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    subtitle: "DESIGN YOUR SPACE",
    title: "Furniture That Defines Lifestyle",
    desc: "Premium handpicked sofas, tables, lights and decor pieces that blend sophistication with comfort for modern homes.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const auto = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(auto);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current].image}
          src={slides[current].image}
          alt="hero"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Left Arrow */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-2 sm:left-4 md:left-14 top-1/2 -translate-y-1/2 z-20 text-white hover:text-orange-500 transition"
      >
        <ChevronLeft size={55} className="md:w-[70px] md:h-[70px]" strokeWidth={1.2} />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-2 sm:right-4 md:right-14 top-1/2 -translate-y-1/2 z-20 text-white hover:text-orange-500 transition"
      >
        <ChevronRight size={55} className="md:w-[70px] md:h-[70px]" strokeWidth={1.2} />
      </motion.button>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-5">
        <div className="max-w-4xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -70 }}
              transition={{ duration: 0.8 }}
            >

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, letterSpacing: "15px" }}
                animate={{ opacity: 1, letterSpacing: "3px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-orange-500 tracking-[3px] text-xs md:text-sm mb-4 font-semibold"
              >
                {slides[current].subtitle}
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-5"
              >
                {slides[current].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8"
              >
                {slides[current].desc}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-full px-5 py-3 md:px-6 md:py-3 text-base md:text-lg font-medium inline-flex items-center gap-4 shadow-2xl"
              >
                Shop Now

                <span className="bg-white text-black rounded-full p-2">
                  <ArrowRight size={18} />
                </span>
              </motion.button>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Bottom Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-8 h-2 bg-orange-500"
                : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}