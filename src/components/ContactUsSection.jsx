import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Living Room Furniture",
    img: "https://img.magnific.com/premium-photo/large-lobby-with-lot-furniture-sophisticated-hotel-lobby-interior-with-luxurious-furnishings_916189-9212.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Office Furniture",
    img: "https://img.magnific.com/premium-photo/large-lobby-with-lot-furniture-sophisticated-hotel-lobby-interior-with-luxurious-furnishings_916189-9212.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Bedroom Solutions",
    img: "https://img.magnific.com/premium-photo/large-lobby-with-lot-furniture-sophisticated-hotel-lobby-interior-with-luxurious-furnishings_916189-9212.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Industrial Storage",
    img: "https://img.magnific.com/premium-photo/large-lobby-with-lot-furniture-sophisticated-hotel-lobby-interior-with-luxurious-furnishings_916189-9212.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Custom Steel Designs",
    img: "https://img.magnific.com/premium-photo/large-lobby-with-lot-furniture-sophisticated-hotel-lobby-interior-with-luxurious-furnishings_916189-9212.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
];

const ContactSection = () => {
  return (
    <section className="w-full bg-black text-white overflow-hidden">

      {/* 🔥 TOP BRAND EXPANDING HOVER SECTION */}
      <div className="flex w-full h-28 md:h-36 overflow-hidden">
        {brands.map((brand, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
            }}
            viewport={{ once: true }}
            className="
              group relative flex-1
              transition-all duration-500 ease-in-out
              hover:flex-[2]
              cursor-pointer overflow-hidden
              border-r border-gray-800
            "
          >
            {/* Background Image */}
            <img
              src={brand.img}
              alt={brand.name}
              className="
                absolute inset-0 w-full h-full object-cover
                opacity-0 scale-110
                transition-all duration-500
                group-hover:opacity-100 group-hover:scale-100
              "
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute inset-0 bg-[#1a1a1a]
                transition-all duration-500
                group-hover:bg-black/40
              "
            ></div>

            {/* Text */}
            <div className="relative z-10 h-full flex items-center justify-center px-2">
              <h2
                className="
                  text-gray-300 text-sm md:text-xl text-center font-light
                  transition-all duration-500
                  group-hover:text-white
                  group-hover:tracking-wide
                "
              >
                {brand.name}
              </h2>
            </div>

            {/* Bottom Accent */}
            <div
              className="
                absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500
                transition-all duration-500 group-hover:w-full
              "
            ></div>
          </motion.div>
        ))}
      </div>

      {/* 🔶 HERO CONTACT SECTION */}
      <div className="relative flex items-center justify-center min-h-[650px] px-6 py-20 text-center">

        {/* Background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-orange-500 uppercase tracking-[2px] text-xs font-semibold mb-4"
          >
            ART OF COMFORT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif leading-tight mb-8"
          >
            Transforming Spaces,
            <br />
            Transforming Style
          </motion.h1>

          {/* 🔶 CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4 text-left"
          >

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              className="bg-white/10 border border-gray-700 px-4 py-3 rounded-md outline-none focus:border-orange-500 transition duration-300"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Your Email"
              className="bg-white/10 border border-gray-700 px-4 py-3 rounded-md outline-none focus:border-orange-500 transition duration-300"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              placeholder="Phone Number"
              className="bg-white/10 border border-gray-700 px-4 py-3 rounded-md outline-none focus:border-orange-500 transition duration-300"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Subject"
              className="bg-white/10 border border-gray-700 px-4 py-3 rounded-md outline-none focus:border-orange-500 transition duration-300"
            />

            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              rows="4"
              placeholder="Your Message"
              className="md:col-span-2 bg-white/10 border border-gray-700 px-4 py-3 rounded-md outline-none focus:border-orange-500 transition duration-300"
            ></motion.textarea>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 flex justify-center pt-2"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-orange-500 hover:bg-orange-600 transition px-12 py-4 rounded-md text-sm font-medium"
              >
                Send Message
              </motion.button>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;