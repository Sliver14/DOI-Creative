import React from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutBusiness from '@/components/about-business'
import AboutMe from '@/components/about-me'
import ServicesSection from '@/components/services-section'
import PortfolioSection from '@/components/portfolio-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutBusiness />
      <AboutMe />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
} 