'use client'

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        // Add a small delay to allow the scrollToSection to work first
        setTimeout(() => {
          setIsMobileMenuOpen(false);
        }, 150);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Add a small delay to ensure menu is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Testimonials", id: "testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect bg-white/80 border-b border-gray-200/50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-30 h-30 rounded-lg flex items-center justify-center overflow-hidden">
              <Image 
                src="/assets/DOI_2-logo.png" 
                alt="DOI Creative Logo" 
                width={120} 
                height={120}
                className="object-contain"
              />
            </div>
            {/* <span className="text-2xl font-display font-bold text-gray-900">DOI Creative</span> */}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-red transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary-red hover:bg-primary-dark px-6 py-2 rounded-full transition-colors duration-300 text-white"
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 z-50 relative"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 z-30"
            />
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-effect bg-white/95 border-t border-gray-200/50 z-40 relative"
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-primary-red transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-gray-100"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left bg-primary-red hover:bg-primary-dark px-4 py-3 rounded-lg transition-colors duration-300 mt-4"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
