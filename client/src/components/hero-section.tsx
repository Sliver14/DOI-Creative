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
      {/* Animated Camera Elements */}
      <div className="absolute top-20 left-10 opacity-10 animate-rotate-slow z-0">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      </div>
      
      {/* Film Strip Animation */}
      <div className="absolute top-40 right-20 animate-slide-left z-0">
        <div className="flex space-x-2 opacity-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-8 h-12 bg-gray-300 rounded border-2 border-gray-400"></div>
          ))}
        </div>
      </div>

      {/* Editing Dashboard Elements */}
      <div className="absolute bottom-32 left-20 opacity-8 animate-pulse-glow z-0">
        <div className="bg-gray-200 rounded-lg p-4 w-48">
          <div className="space-y-2">
            <div className="h-2 bg-red-300 rounded w-3/4"></div>
            <div className="h-2 bg-gray-300 rounded w-1/2"></div>
            <div className="h-2 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Floating Camera Lens */}
      <div className="absolute top-60 right-40 animate-float opacity-10 z-0">
        <div className="w-16 h-16 rounded-full border-4 border-gray-400 bg-gray-200 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gray-500"></div>
        </div>
      </div>

      {/* Timeline Elements */}
      <div className="absolute bottom-20 right-10 animate-slide-right opacity-8 z-0">
        <div className="space-y-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-3 bg-red-200 rounded" style={{width: `${80 + i * 20}px`}}></div>
          ))}
        </div>
      </div>
      
      <div ref={ref} className="relative z-20 text-center px-6 max-w-6xl mx-auto">
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
