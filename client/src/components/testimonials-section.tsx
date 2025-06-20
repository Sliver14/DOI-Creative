import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver();
  
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-gray-900">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Studio Light */}
      <div className="absolute bottom-20 right-12 opacity-10 animate-slide-left">
        <div className="relative">
          <div className="w-6 h-16 bg-gray-500 rounded-t-full"></div>
          <div className="w-12 h-8 bg-gray-400 rounded-full -mt-4 -ml-3"></div>
          <div className="w-16 h-4 bg-gray-300 rounded-full -mt-2 -ml-5"></div>
          <div className="w-1 h-8 bg-gray-600 mx-auto"></div>
          <div className="w-8 h-2 bg-gray-700 rounded mx-auto"></div>
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
            Client <span className="primary-red">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear what our clients have to say about working with CineVision Studios and the impact our work has made on their success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials && testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="flex text-red-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.imageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"} 
                    alt={`${testimonial.name}, ${testimonial.title} at ${testimonial.company}`}
                    className="w-12 h-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No testimonials available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
