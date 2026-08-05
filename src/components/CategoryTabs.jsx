import React from "react";
import { motion } from "framer-motion";

export default function CategoryTabs({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 mb-10"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-3 rounded-full transition-all duration-300 border ${
            activeCategory === category
              ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20"
              : "bg-[#1b1b1b] border-gray-700 text-gray-300 hover:border-orange-500 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}