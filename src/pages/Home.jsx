import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ContactUsSection from "../components/ContactUsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import FurnitureCategorySection from "../components/FurnitureCategorySection";
import FurnitureHero from "../components/FurnitureHero";
import MarqueeBar from "../components/MarqueeBar";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <section id="home">
        <HeroSection className="fade-up" />
      </section>

      <section id="about">
        <AboutSection className="fade-right" />
      </section>
      <FurnitureCategorySection />

      <section id="services">
        <ServicesSection />
      </section>
      <MarqueeBar />

      <section id="whychoose">
        <WhyChooseUs />
      </section>

      <section id="">
        <FurnitureHero />
      </section>

      <Testimonial />

      <section id="contact">
        <ContactUsSection className="fade-right" />
      </section>
    </>
  );
};

export default Home;