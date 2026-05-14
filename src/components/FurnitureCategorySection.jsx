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
      className="relative w-full min-h-[420px] md:min-h-[520px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/images/Sofa.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1300px] mx-auto min-h-[420px] md:min-h-[520px] flex items-center justify-center px-4 py-10">

        {/* Categories Wrapper */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10 xl:gap-x-14 gap-y-5 md:gap-y-8 max-w-[1000px]">

          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
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
    <div className="flex items-center gap-1.5 md:gap-2 group cursor-pointer">

      {/* Title */}
      <span className="text-white font-serif text-[14px] sm:text-[16px] md:text-[20px] xl:text-[24px] leading-none whitespace-nowrap transition duration-300 group-hover:text-orange-400">
        {title}
      </span>

      {/* Icon */}
      <span className="text-orange-500 w-[14px] h-[14px] md:w-[16px] md:h-[16px] xl:w-[18px] xl:h-[18px] transition duration-300 group-hover:rotate-12 group-hover:scale-110">
        {icon}
      </span>

    </div>
  );
}