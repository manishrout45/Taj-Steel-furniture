import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Garden Decor",
    icon: "/assets/icons/furniture-icon.png",
  },
  {
    name: "Home Furniture's",
    icon: "/assets/icons/furniture-icon-2.png",
  },
  {
    name: "Ceiling Furniture's",
    icon: "/assets/icons/furniture-icon-3.png",
  },
  {
    name: "Storage Space",
    icon: "/assets/icons/furniture-icon-4.png",
  },
  {
    name: "Tea Table",
    icon: "/assets/icons/furniture-icon-5.png",
  },
  {
    name: "Decoration Solutions",
    icon: "/assets/icons/furniture-icon-6.png",
  },
];

const FurnitureHero = () => {
  return (
    <section className="bg-[#0d0d0d] text-white px-6 md:px-12 py-10 overflow-hidden">

      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 uppercase tracking-[2px] text-xs font-semibold mb-4">
            SLEEK AND STYLISH
          </p>

          <h1 className="text-3xl md:text-5xl font-serif mt-2 leading-tight">
            Innovative Furniture's
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-md text-sm leading-relaxed"
        >
          Taj Steel Furniture delivers durable, high-quality furniture crafted
          with precision. Our designs combine strength, functionality, and
          modern aesthetics for every space.
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative rounded-xl overflow-hidden"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1616627561839-074385245ff6"
          alt=""
          className="w-full h-[300px] md:h-[450px] object-cover"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Plus buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute top-[60%] left-[25%]"
        >
          <div className="plus-btn">+</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-[40%] left-[60%]"
        >
          <div className="plus-btn">+</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="absolute top-[70%] left-[75%]"
        >
          <div className="plus-btn">+</div>
        </motion.div>
      </motion.div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-12 text-center">
        {categories.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
            }}
            viewport={{ once: true }}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >

            {/* ICON WITH ANIMATION */}
            <div className="relative w-16 h-16 flex items-center justify-center">

              {/* Background Circle */}
              <div
                className="
                  absolute
                  w-10 h-10
                  bg-orange-800
                  rounded-full
                  -left-2
                  transition-all duration-300 ease-in-out
                  group-hover:w-14
                  group-hover:h-14
                  group-hover:left-1/2
                  group-hover:-translate-x-1/2
                "
              ></div>

              {/* Icon Image */}
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                src={item.icon}
                alt={item.name}
                className="relative w-12 h-12 z-10"
              />
            </div>

            <p className="text-sm text-gray-300 group-hover:text-white transition duration-300">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Plus Button Style */}
      <style jsx>{`
        .plus-btn {
          background: orange;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .plus-btn:hover {
          transform: scale(1.12);
          background: #ff8c00;
        }
      `}</style>
    </section>
  );
};

export default FurnitureHero;