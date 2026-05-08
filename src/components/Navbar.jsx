import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect Scroll + Active Section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  // Active Nav Style
  const navClass = (section) =>
    activeSection === section
      ? "text-orange-500 relative after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-orange-500"
      : "hover:text-orange-500 transition";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-8 shadow-[0_8px_30px_rgba(255,115,0,0.25)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/assets/images/Logo.png"
            alt="Taj Steel Logo"
            className="w-20 md:w-24 object-contain transition-all duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white text-base font-light tracking-wide">

          <button
            onClick={() => scrollToSection("home")}
            className={navClass("home")}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={navClass("about")}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className={navClass("services")}
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={navClass("contact")}
          >
            Contact
          </button>

        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-black/95 backdrop-blur-lg z-50 transform transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <X
            size={28}
            className="text-white cursor-pointer"
            onClick={() => setMobileOpen(false)}
          />
        </div>

        <div className="flex flex-col items-center gap-8 mt-16 text-white text-lg">

          <button
            onClick={() => scrollToSection("home")}
            className={navClass("home")}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={navClass("about")}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className={navClass("services")}
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={navClass("contact")}
          >
            Contact
          </button>

        </div>
      </div>
    </header>
  );
}