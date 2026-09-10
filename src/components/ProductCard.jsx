import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductCard({
  product,
  category,
  subCategory,
  index,
}) {
  // Get product code from image filename
  // Example: /assets/images/Products/TSF-504.jpg → TSF-504
  const productCode =
    product.image?.split("/").pop()?.split(".")[0] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className="group bg-[#181818] rounded-2xl overflow-hidden border border-[#2b2b2b] hover:border-orange-500 transition-all duration-500"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
          30% OFF
        </div>

        {/* Product Code */}
        <div className="absolute bottom-4 right-4 bg-orange-500 backdrop-blur-md text-xs text-white px-3 py-2 rounded-full">
          {productCode}
        </div>

        {/* Sub Category */}
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-xs text-white px-4 py-2 rounded-full">
          {subCategory}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-orange-500 uppercase tracking-wider text-xs mb-2">
          {category}
        </p>

        <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-orange-500 transition">
          {product.name}
        </h3>

        <p className="text-gray-400 text-sm leading-7 min-h-[72px]">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-white text-lg font-bold">
            ₹{product.price.toLocaleString()}
          </span>

          <button className="flex items-center gap-2 text-white hover:text-orange-500 transition">
            View
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}