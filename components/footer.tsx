'use client'

import React from "react";
import { SiInstagram, SiYoutube, SiVimeo, SiLinkedin, SiX } from "react-icons/si";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/assets/DOI.png" 
                  alt="DOI Creative Logo" 
                  width={120} 
                  height={120}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-display font-bold text-white">DOI Creative</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating cinematic stories that captivate audiences and drive results for brands worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-red-500 transition-colors">Commercial Production</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-red-500 transition-colors">Film Production</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-red-500 transition-colors">Directing</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-red-500 transition-colors">Video Editing</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-red-500 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-red-500 transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection("testimonials")} className="hover:text-red-500 transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-red-500 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/DIfeakanwa17853?t=xUqu17VN-DYLRDOjoQ8UbA&s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors"
              >
                <SiX className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors">
                <SiLinkedin className="text-white" />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors">
                <SiInstagram className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors">
                <SiYoutube className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors">
                <SiVimeo className="text-white" />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 DOI Creative Studios. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
