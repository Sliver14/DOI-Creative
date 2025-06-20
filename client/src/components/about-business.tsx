import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutBusiness() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Camera Tripod */}
      <div className="absolute top-16 right-8 opacity-10 animate-slide-right">
        <div className="relative">
          <div className="w-3 h-20 bg-gray-400 mx-auto"></div>
          <div className="w-8 h-8 bg-gray-600 rounded mx-auto -mt-2"></div>
          <div className="flex justify-center -mt-1">
            <div className="w-1 h-6 bg-gray-400 rotate-12 origin-bottom"></div>
            <div className="w-1 h-6 bg-gray-400 -rotate-12 origin-bottom"></div>
            <div className="w-1 h-6 bg-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional film studio with cinema cameras and lighting equipment" 
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-5xl font-display font-bold mb-6 text-gray-900">
              About <span className="primary-red">CineVision Studios</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Founded in 2018, CineVision Studios has become a leading force in cinematic storytelling, producing award-winning commercials, documentaries, and narrative films that captivate audiences worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art production facility and team of visionary creatives combine cutting-edge technology with artistic excellence to deliver compelling visual narratives that resonate with viewers and drive results for our clients.
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
