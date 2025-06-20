import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutMe() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Film Reel */}
      <div className="absolute bottom-16 left-8 opacity-10 animate-rotate-slow">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-gray-400 rounded-full"></div>
          <div className="absolute inset-2 border-2 border-gray-500 rounded-full"></div>
          <div className="absolute inset-4 w-4 h-4 bg-gray-600 rounded-full"></div>
          <div className="absolute top-0 left-1/2 w-1 h-2 bg-gray-400 transform -translate-x-1/2 -translate-y-1"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-gray-400 transform -translate-x-1/2 translate-y-1"></div>
          <div className="absolute left-0 top-1/2 w-2 h-1 bg-gray-400 transform -translate-x-1 -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-2 h-1 bg-gray-400 transform translate-x-1 -translate-y-1/2"></div>
        </div>
      </div>
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
              I'm Alex Martinez, a cinematographer and director with over a decade of experience crafting visual stories that move, inspire, and connect with audiences on an emotional level.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My journey began with documentary filmmaking, where I learned the power of authentic storytelling. This foundation now influences every project, whether it's a high-end commercial or an intimate narrative film.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">MFA Film Production</div>
                  <div className="text-gray-400">USC School of Cinematic Arts</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                  <Trophy className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Cannes Film Festival</div>
                  <div className="text-gray-400">Best Cinematography Nominee</div>
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
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional portrait of film director Alex Martinez in creative studio setting" 
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
