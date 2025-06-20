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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Film Clapper Board */}
      <div className="absolute top-32 right-16 opacity-15 animate-float">
        <div className="relative">
          <div className="w-16 h-12 bg-gray-800 rounded-t-lg"></div>
          <div className="w-16 h-8 bg-white border-2 border-gray-800 rounded-b-lg relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent opacity-20"></div>
            <div className="h-1 bg-gray-800 w-full mt-1"></div>
            <div className="h-1 bg-gray-800 w-full mt-1"></div>
          </div>
        </div>
      </div>

      {/* Spotlight */}
      <div className="absolute top-20 left-16 opacity-10 animate-pulse-glow">
        <div className="relative">
          <div className="w-8 h-16 bg-gray-400 rounded-full"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-yellow-300 opacity-60"></div>
        </div>
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
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Award-winning film production and video editing services that bring your vision to life with cinematic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-primary-red hover:bg-primary-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl text-white"
            >
              View Our Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
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
