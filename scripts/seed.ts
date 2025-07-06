import { db } from '../lib/db';
import { testimonials } from '../shared/schema';

const testimonialData = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechFlow Solutions",
    content: "DOI Creative transformed our brand vision into a stunning commercial that exceeded all expectations. Their attention to detail and creative storytelling brought our product to life in ways we never imagined.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    title: "CEO",
    company: "InnovateCorp",
    content: "Working with DOI Creative was a game-changer for our company. Their film production expertise and professional approach delivered a corporate video that perfectly captures our company culture and values.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    title: "Creative Director",
    company: "Artistry Studios",
    content: "The editing work DOI Creative did for our documentary was exceptional. They have an incredible eye for storytelling and know exactly how to pace content to keep audiences engaged from start to finish.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    title: "Founder",
    company: "StartupXYZ",
    content: "DOI Creative's directing services helped us create a compelling pitch video that secured our Series A funding. Their ability to translate complex business concepts into engaging visual stories is unmatched.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Wang",
    title: "Brand Manager",
    company: "Global Retail Co.",
    content: "From concept to final cut, DOI Creative delivered a commercial that perfectly aligned with our brand identity. Their collaborative approach and creative vision resulted in a campaign that drove significant sales growth.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "James Wilson",
    title: "Event Coordinator",
    company: "Premier Events",
    content: "DOI Creative captured our annual conference with such professionalism and creativity. The final video perfectly showcases the energy and excitement of our event, making it an invaluable marketing tool.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

async function seedTestimonials() {
  try {
    console.log('🌱 Seeding testimonials...');
    
    // Clear existing testimonials
    await db.delete(testimonials);
    
    // Insert new testimonials
    const insertedTestimonials = await db.insert(testimonials).values(testimonialData).returning();
    
    console.log(`✅ Successfully seeded ${insertedTestimonials.length} testimonials`);
    console.log('📝 Testimonials created:');
    insertedTestimonials.forEach((testimonial, index) => {
      console.log(`${index + 1}. ${testimonial.name} - ${testimonial.company}`);
    });
    
  } catch (error) {
    console.error('❌ Error seeding testimonials:', error);
    throw error;
  }
}

// Run the seed function
seedTestimonials()
  .then(() => {
    console.log('🎉 Seeding completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  }); 