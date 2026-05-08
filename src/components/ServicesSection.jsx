import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Home Decoration");
  const [startIndex, setStartIndex] = useState(0);

  const tabs = [
    { name: "Home Decoration", count: 6 },
    { name: "Office Decoration", count: 4 },
    { name: "Indoor Decoration", count: 6 },
    { name: "Outdoor Decoration", count: 5 },
  ];

  const allProducts = {
    "Home Decoration": [
      {
        img: "hhttps://img.magnific.com/premium-photo/black-metal-bed-frame-with-white-brick-wall-green-blanket_93675-188637.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Stylish Bed Frame",
      },
      {
        img: "https://img.magnific.com/free-photo/traditional-background-bamboo-furniture-cane_1203-3867.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Soft Seater Chair",
      },
      {
        img: "https://img.magnific.com/premium-photo/minimalist-wooden-table-illuminated-by-soft-light-serene-indoor-space-with-sheer-curtains_93675-338131.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Elegant Wooden Table",
      },
      {
        img: "https://img.magnific.com/free-photo/blue-kitchen-cabinet-with-three-drawers-brass-knobs-color-mood_169016-71065.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Luxury Wall Cabinet",
      },
      {
        img: "https://img.magnific.com/free-photo/beautiful-interior-design-with-plants-high-angle_23-2149383642.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Decor Shelf Unit",
      },
      {
        img: "https://img.magnific.com/premium-photo/aromatic-reed-air-freshener_1038858-5846.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Designer Center Table",
      },
    ],

    "Office Decoration": [
      {
        img: "https://img.magnific.com/free-photo/still-life-office-chair-indoors_23-2151108752.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Executive Office Desk",
      },
      {
        img: "https://img.magnific.com/free-photo/still-life-office-chair-indoors_23-2151108699.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Premium Work Chair",
      },
      {
        img: "https://img.magnific.com/free-photo/business-meeting-room-office_1170-1950.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Conference Table",
      },
      {
        img: "https://img.magnific.com/premium-photo/office-supply-store-with-office-supplies-organizers-perched-atop-modern-three-tier-podium_1020495-661783.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Office Storage Unit",
      },
    ],

    "Indoor Decoration": [
      {
        img: "https://img.magnific.com/free-photo/bookshelf-with-plant-hat_23-2148882787.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Designer Bookshelf",
      },
      {
        img: "https://img.magnific.com/premium-photo/white-chair-marble-floor_1082141-37705.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Indoor Accent Chair",
      },
      {
        img: "https://img.magnific.com/free-photo/stylish-cabinet-with-artwork-decor_23-2151988661.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Decor Console Table",
      },
      {
        img: "https://img.magnific.com/free-photo/mid-century-modern-wooden-cabinet-with-lamp_23-2151988664.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Premium Side Cabinet",
      },
      {
        img: "https://img.magnific.com/free-photo/light-bedside-accessories-lamp-fabric_1203-4649.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Luxury Floor Lamp",
      },
      {
        img: "https://img.magnific.com/premium-photo/shelving-unit-green-houseplants-elegant-curtain-room-interior-design_495423-95609.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Indoor Corner Shelf",
      },
    ],

    "Outdoor Decoration": [
      {
        img: "https://img.magnific.com/free-photo/black-white-room-empty-chair_1203-3985.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Outdoor Patio Chair",
      },
      {
        img: "https://img.magnific.com/premium-photo/park-bench-summer-time-garden_1611203-37.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Garden Bench",
      },
      {
        img: "https://img.magnific.com/free-photo/outdoor-restaurant-with-tables-chairs-resort_1373-507.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Outdoor Dining Set",
      },
      {
        img: "https://img.magnific.com/free-photo/modern-chair-table_74190-1649.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Terrace Lounge Table",
      },
      {
        img: "https://img.magnific.com/premium-photo/rocking-chair_36923-200.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
        title: "Garden Relax Chair",
      },
    ],
  };

  // Responsive items count
  const getItemsPerView = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setStartIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProducts = allProducts[activeTab].slice(
    startIndex,
    startIndex + itemsPerView
  );

  const nextSlide = () => {
    if (
      startIndex + itemsPerView >=
      allProducts[activeTab].length
    ) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex === 0) {
      setStartIndex(
        Math.max(
          allProducts[activeTab].length - itemsPerView,
          0
        )
      );
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  useEffect(() => {
    setStartIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(auto);
  });

  return (
    <section className="w-full bg-[#111111] py-16 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1500px] mx-auto text-center">

        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-orange-500 uppercase tracking-[2px] text-[11px] md:text-xs font-semibold mb-4"
        >
          Explore Our
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-10"
        >
          Luxurious Haven Collection
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-12 md:mb-14"
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab.name)}
              className={`text-sm sm:text-base md:text-xl font-serif transition duration-300 ${
                activeTab === tab.name
                  ? "text-white underline underline-offset-8"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.name}
              <sup className="text-[9px] sm:text-[10px] ml-1">
                {tab.count}
              </sup>
            </button>
          ))}
        </motion.div>

        {/* Slider */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 transition w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 transition w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          <div
            className={`grid gap-6 md:gap-8 ${
              itemsPerView === 1
                ? "grid-cols-1"
                : itemsPerView === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {visibleProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
              >
                <div className="overflow-hidden rounded-xl group cursor-pointer bg-[#0c0c0c]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[320px] sm:h-[400px] md:h-[430px] object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="pt-4 md:pt-5">
                  <p className="text-gray-500 uppercase tracking-[1px] text-[10px] mb-2">
                    {activeTab}
                  </p>

                  <h3 className="text-white font-serif text-xl sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}