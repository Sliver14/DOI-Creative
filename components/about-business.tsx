'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutBusiness() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 w-full md:w-1/2 h-fit"
          >
            <Image 
              src="/assets/btv.png" 
              alt="Professional film studio with cinema cameras and lighting equipment" 
              width={800} 
              height={600} 
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-auto h-auto object-cover max-h-[800px]" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-5xl font-display font-bold mb-6 text-gray-900">
              About <span className="primary-red">DOI Creative Media </span>
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            We work on a variety of projects — from short films and documentaries to commercials and content for brands. What matters most to us is creating work that feels honest and connects with people.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We pay attention to the small things — how a scene looks, how a moment feels, and how it all comes together to tell a clear story. Our goal is to make videos that leave a lasting impression.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            DOI started with just a camera and a passion for storytelling. Today, it has grown into a space where ideas are brought to life with purpose, creativity, and care.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Founded in 2019 DOI Creative Media is a growing force in visual storytelling, known for producing powerful short films, commercials, documentaries, and branded content that connect with audiences across Nigeria and beyond.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our creative team brings together strong visuals, thoughtful direction, and professional production skills to deliver work that is both meaningful and impactful. From concept to final cut, we focus on telling stories that matter, stories that leave a lasting impression.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At DOI Creative Media, we combine creativity, passion, and technical skill to help brands, artists, and individuals bring their ideas to life through film and media.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold primary-red mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold primary-red mb-2">25+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold primary-red mb-2">8</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
