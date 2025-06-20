import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Cinematic film production setup with professional lighting and camera equipment" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 video-overlay"></div>
      </div>
      
      <div ref={ref} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 hero-text leading-tight">
            Cinematic
            <span className="block primary-red">Storytelling</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Award-winning film production and video editing services that bring your vision to life with cinematic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-primary-red hover:bg-primary-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              View Our Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
