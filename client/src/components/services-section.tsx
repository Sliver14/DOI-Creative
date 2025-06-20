import { motion } from "framer-motion";
import { Megaphone, Film, Video, Scissors, Smartphone, Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const services = [
    {
      icon: Megaphone,
      title: "Commercial Production",
      description: "High-impact commercial videos that drive engagement and conversions. From brand stories to product launches, we create compelling content that resonates with your target audience.",
      features: ["Brand Commercials", "Product Videos", "Social Media Content", "TV Advertising"]
    },
    {
      icon: Film,
      title: "Film Production",
      description: "Full-scale film production services from pre-production planning to final delivery. We handle documentaries, short films, and feature-length productions with professional excellence.",
      features: ["Documentary Films", "Short Films", "Music Videos", "Corporate Films"]
    },
    {
      icon: Video,
      title: "Directing Services",
      description: "Creative direction that brings your vision to life. Our experienced directors guide every aspect of your project from concept development to final execution.",
      features: ["Creative Direction", "Script Development", "Cast Direction", "Vision Execution"]
    },
    {
      icon: Scissors,
      title: "Long-form Editing",
      description: "Professional editing for feature films, documentaries, and extended content. We craft compelling narratives that engage viewers throughout extended viewing experiences.",
      features: ["Documentary Editing", "Feature Film Editing", "Webinar Production", "Educational Content"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Director's Megaphone */}
      <div className="absolute top-20 left-12 opacity-12 animate-float">
        <div className="relative">
          <div className="w-4 h-8 bg-gray-500 rounded-full"></div>
          <div className="w-8 h-6 bg-gray-400 rounded-r-full ml-4 -mt-7"></div>
          <div className="w-12 h-8 bg-gray-300 rounded-r-full ml-8 -mt-6"></div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6 text-gray-900">
            Our <span className="primary-red">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive video production services that bring your vision to life with cinematic quality and creative excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="service-card bg-white rounded-2xl p-8 shadow-2xl transition-all duration-500 hover:shadow-red-500/20 border border-gray-200"
            >
              <div className="w-16 h-16 bg-primary-red rounded-2xl flex items-center justify-center mb-6 animate-float">
                <service.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 text-gray-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-red-500 mr-2 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Short-form Video Editing - Special Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="service-card bg-white rounded-2xl p-8 shadow-2xl transition-all duration-500 hover:shadow-red-500/20 border border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-primary-red rounded-2xl flex items-center justify-center mb-6 animate-float">
                <Smartphone className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Short-form Editing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dynamic short-form content optimized for social media platforms. We create engaging, shareable content that captures attention and drives engagement across all digital channels.
              </p>
              <ul className="space-y-2 text-gray-700">
                {["Social Media Videos", "Instagram Reels", "TikTok Content", "YouTube Shorts"].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-red-500 mr-2 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Modern video editing setup with multiple monitors showing timeline and social media content" 
                className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
