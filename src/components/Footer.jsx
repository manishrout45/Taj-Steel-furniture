import React from "react";
import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-8">
      
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT - BRAND */}
        <div>
          <img
            src="/assets/images/Logo.png"
            alt="Taj Steel Furniture"
            className="w-32 mb-4"
          />

          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            Taj Steel Furniture offers strong, stylish, and long-lasting furniture 
            solutions crafted for homes, offices, and commercial spaces.
          </p>

          <div className="flex gap-4 text-lg">
            <FaInstagram className="cursor-pointer hover:text-orange-500 transition duration-300" />
            <FaFacebookF className="cursor-pointer hover:text-orange-500 transition duration-300" />
            
          </div>
        </div>

        {/* CENTER - QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition duration-300">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition duration-300">
              Our Products
            </li>
            <li className="hover:text-white cursor-pointer transition duration-300">
              Services
            </li>
            <li className="hover:text-white cursor-pointer transition duration-300">
              Gallery
            </li>
            <li className="hover:text-white cursor-pointer transition duration-300">
              Contact
            </li>
          </ul>
        </div>

        {/* RIGHT - CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

          <div className="text-gray-400 text-sm space-y-4">
            
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-orange-500" />
              <span>Bhubaneswar, Odisha</span>
            </div>

            <div className="flex items-center gap-2">
              <MdPhone className="text-orange-500" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail className="text-orange-500" />
              <span>tajsteelfurniture@gmail.com</span>
            </div>

          </div>

          <p className="text-gray-500 text-xs mt-6 leading-relaxed max-w-xs">
            Visit our store or contact us for custom furniture solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        
        <p>© {new Date().getFullYear()} Taj Steel Furniture</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer transition duration-300">
            Privacy
          </span>
          <span className="hover:text-white cursor-pointer transition duration-300">
            Terms
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;