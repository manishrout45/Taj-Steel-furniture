import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Grid3X3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import productData from "/src/data/ProductsData";



// ==========================
// Component
// ==========================

export default function Products() {
  const categories = Object.keys(productData);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const [activeSubCategory, setActiveSubCategory] = useState(
    Object.keys(productData[categories[0]])[0]
  );

  const [search, setSearch] = useState("");

  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setActiveSubCategory(
      Object.keys(productData[activeCategory])[0]
    );
  }, [activeCategory]);

const products = useMemo(() => {
  // No search -> show selected category/subcategory
  if (!search.trim()) {
    return productData?.[activeCategory]?.[activeSubCategory] || [];
  }

  const keyword = search.toLowerCase();
  const results = [];

  Object.entries(productData).forEach(([category, subCategories]) => {
    Object.entries(subCategories).forEach(([subCategory, items]) => {
      items.forEach((item) => {
        if (
          item.name.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword) ||
          category.toLowerCase().includes(keyword) ||
          subCategory.toLowerCase().includes(keyword)
        ) {
          results.push({
            ...item,
            category,
            subCategory,
          });
        }
      });
    });
  });

  return results;
}, [search, activeCategory, activeSubCategory]);

  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory, activeSubCategory, search]);

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="bg-[#111] py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[3px] text-orange-500 text-sm">
            Our Products
          </p>

          <h2 className="text-5xl font-serif text-white mt-3">
            Explore Our Collection
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Browse premium furniture crafted for homes,
            offices, restaurants and commercial spaces.
          </p>
        </motion.div>

        {/* Search */}

        <div className="max-w-xl mx-auto mb-10 relative">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-5 py-4 rounded-full bg-[#1b1b1b] border border-gray-700 text-white outline-none focus:border-orange-500"
          />
        </div>
                {/* ==========================
            Category Tabs
        ========================== */}
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

        {/* ==========================
            Sub Categories
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {Object.keys(productData[activeCategory]).map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubCategory(sub)}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                activeSubCategory === sub
                  ? "bg-white text-black"
                  : "bg-[#202020] text-gray-400 hover:text-white hover:bg-[#2d2d2d]"
              }`}
            >
              {sub}
            </button>
          ))}
        </motion.div>

        {/* ==========================
            Results Count
        ========================== */}

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 text-gray-400">
            <Grid3X3 size={18} />
            <span>
              {products.length} Product
              {products.length !== 1 ? "s" : ""} Found
            </span>
          </div>

          <div className="text-sm text-gray-500">
            {activeCategory}
            <span className="mx-2">/</span>
            {activeSubCategory}
          </div>
        </div>

        {/* ==========================
            Products Grid
        ========================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubCategory + search}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .45 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
{visibleProducts.map((product, index) => (
  <ProductCard
    key={product.id}
    product={product}
    category={product.category || activeCategory}
    subCategory={product.subCategory || activeSubCategory}
    index={index}
  />
))}
          </motion.div>
        </AnimatePresence>
                {/* ==========================
            Empty State
        ========================== */}
        {products.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-7xl mb-6">🔍</div>

            <h3 className="text-3xl text-white font-semibold mb-3">
              No Products Found
            </h3>

            <p className="text-gray-400 max-w-md mx-auto">
              We couldn't find any products matching your search.
              Try another keyword or browse a different category.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {/* ==========================
            Bottom Controls
        ========================== */}
        {products.length > 0 && (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-16">
            {/* Showing Count */}
            <div className="text-gray-400">
              Showing{" "}
              <span className="text-white font-semibold">
                {visibleProducts.length}
              </span>{" "}
              of{" "}
              <span className="text-white font-semibold">
                {products.length}
              </span>{" "}
              products
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.max(8, prev - 8)
                  )
                }
                disabled={visibleCount <= 8}
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition ${
                  visibleCount <= 8
                    ? "bg-[#222] text-gray-600 cursor-not-allowed"
                    : "bg-[#1c1c1c] text-white hover:bg-orange-500"
                }`}
              >
                <ChevronLeft size={18} />
                Previous
              </button>

              {visibleCount < products.length && (
                <button
                  onClick={() =>
                    setVisibleCount((prev) => prev + 8)
                  }
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition"
                >
                  Load More
                  <ChevronRight size={18} />
                </button>
              )}

              <button
                onClick={() =>
                  setVisibleCount(products.length)
                }
                className="px-6 py-3 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                View All
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}