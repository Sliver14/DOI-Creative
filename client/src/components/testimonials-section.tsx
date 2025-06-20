import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver();
  
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['/api/testimonials'],
  });

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-white">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6 text-white">
            Client <span className="primary-red">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear what our clients have to say about working with CineVision Studios and the impact our work has made on their success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial: any, index: number) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-red-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.imageUrl} 
                  alt={`${testimonial.name}, ${testimonial.title} at ${testimonial.company}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
