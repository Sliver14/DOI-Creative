import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function PortfolioSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const portfolioItems = [
    {
      title: "Luxury Brand Commercial",
      category: "High-end product showcase",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Award-Winning Documentary",
      category: "Human interest story",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Creative Music Video",
      category: "Artistic storytelling",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Corporate Film",
      category: "Brand storytelling",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Narrative Short Film",
      category: "Festival selection",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Social Media Campaign",
      category: "Viral content series",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6 text-gray-900">
            Our <span className="primary-red">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our award-winning work and see how we bring stories to life through cinematic excellence and creative innovation.
          </p>
        </motion.div>

        {/* Featured Reel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
              alt="Cinematic video production showcase featuring professional camera equipment and film set" 
              className="w-full h-80 object-cover" 
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 transform hover:scale-110">
                <Play className="text-white text-2xl ml-1" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">2024 Showreel</h3>
              <p className="text-gray-200">A compilation of our best work from this year</p>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="portfolio-item relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
