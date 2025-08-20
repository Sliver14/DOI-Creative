'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutMe() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-5xl font-display font-bold mb-6 text-gray-900">
              Meet the <span className="primary-red">Director</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Daniel O. Ifeakanawa is a filmmaker, creative director, and visual storyteller with a deep passion for meaningful content.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of hands-on experience directing short films, commercials, and branded visuals, Daniel leads every project at DOI Creative Media with clarity, creativity, and care. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Beyond his professional work, Daniel has received personal recognition for his dedication to media and storytelling. In 2022, he was awarded Best Male Media Student at the prestigious TSA Awards, a testament to his skill, consistency, and passion for the craft. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            He believes that powerful stories can spark emotion, shift perspective, and leave a lasting impact. At the heart of his process is a simple goal: to make people feel something real. 
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" />
                </div>
                <div>
                  {/* <div className="font-semibold text-white">MFA Film Production</div> */}
                  <div className="text-gray-400">Praxis Digital Studios 2025</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                  <Trophy className="text-white" />
                </div>
                <div>
                  {/* <div className="font-semibold text-white">Cannes Film Festival</div> */}
                  <div className="text-gray-400">Theatre Arts @ Delta State University - 2022</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                  <Trophy className="text-white" />
                </div>
                <div>
                  {/* <div className="font-semibold text-white">Cannes Film Festival</div> */}
                  <div className="text-gray-400">Best male Media Student, TSA Award - 2022</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <Image 
              src="/assets/ceo.webp"
              alt="CEO" 
              width={800} 
              height={600} 
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
