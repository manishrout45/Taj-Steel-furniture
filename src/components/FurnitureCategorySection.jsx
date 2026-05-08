import React from "react";
import {
  Sofa,
  LampDesk,
  BedSingle,
  Table2,
  BriefcaseBusiness,
  Archive,
  CookingPot,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FurnitureCategorySection() {
  const categories = [
    { title: "Sofa", icon: <Sofa /> },
    { title: "Cabinet", icon: <LampDesk /> },
    { title: "Shelving Units", icon: <BedSingle /> },
    { title: "Tea Table", icon: <Table2 /> },
    { title: "Decors", icon: <Archive /> },
    { title: "Office Table", icon: <BriefcaseBusiness /> },
    { title: "Storage Furniture", icon: <Table2 /> },
    { title: "Kitchen Furniture", icon: <CookingPot /> },
  ];

  return (
    <section
      className="relative w-full min-h-[650px] md:min-h-[700px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1450px] mx-auto min-h-[650px] md:min-h-[700px] flex items-center justify-center px-5 py-16">

        {/* Categories Wrapper */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-16 xl:gap-x-24 gap-y-8 md:gap-y-12 max-w-[1200px]">

          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <CategoryItem
                title={item.title}
                icon={item.icon}
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

function CategoryItem({ title, icon }) {
  return (
    <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">

      {/* Title */}
      <span className="text-white font-serif text-[17px] sm:text-[20px] md:text-[24px] xl:text-[30px] leading-none whitespace-nowrap transition duration-300 group-hover:text-orange-400">
        {title}
      </span>

      {/* Icon */}
      <span className="text-orange-500 w-[16px] h-[16px] md:w-[18px] md:h-[18px] xl:w-[20px] xl:h-[20px] transition duration-300 group-hover:rotate-12 group-hover:scale-110">
        {icon}
      </span>

    </div>
  );
}