'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  projectDetails: z.string().min(10, "Please provide more details about your project"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      budgetRange: "",
      projectDetails: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6 text-gray-900">
            Start Your <span className="primary-red">Project</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mt-1">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Studio Location</h3>
                  <p className="text-gray-700">1234 Creative Drive<br />Los Angeles, CA 90028</p>
                </div>
              </div> */}
              
              <a 
                href="tel:+2348110259082" 
                className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300 cursor-pointer group"
                title="Call (234) 811-0259-082"
              >
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mt-1 group-hover:bg-red-600 transition-colors duration-300">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <span className="text-gray-700 group-hover:text-red-500 transition-colors duration-300">
                    (234) 811-0259-082
                  </span>
                </div>
              </a>
              
              <a 
                href="mailto:DOI Creatives@gmail.com" 
                className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300 cursor-pointer group"
                title="Send email to DOI Creatives@gmail.com"
              >
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mt-1 group-hover:bg-red-600 transition-colors duration-300">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <span className="text-gray-700 group-hover:text-red-500 transition-colors duration-300">
                    DOI Creatives@gmail.com
                  </span>
                </div>
              </a>
              
              <a 
                href="https://wa.link/fe02s8" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300 cursor-pointer group"
                title="Chat on WhatsApp"
              >
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mt-1 group-hover:bg-red-600 transition-colors duration-300">
                  <SiWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <span className="text-gray-700 group-hover:text-red-500 transition-colors duration-300">
                    Chat with us on WhatsApp
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="DOI Creative Studios modern production facility exterior with creative signage" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="glass-effect bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl space-y-6 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John" 
                            className="bg-white border-gray-300 text-gray-900 focus:border-red-500" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Doe" 
                            className="bg-white border-gray-300 text-gray-900 focus:border-red-500" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="bg-white border-gray-300 text-gray-900 focus:border-red-500" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-red-500">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="commercial">Commercial Production</SelectItem>
                          <SelectItem value="film">Film Production</SelectItem>
                          <SelectItem value="directing">Directing Services</SelectItem>
                          <SelectItem value="editing">Video Editing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budgetRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-red-500">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Tell us about your vision..." 
                          className="bg-white border-gray-300 text-gray-900 focus:border-red-500" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary-red hover:bg-primary-dark text-white font-semibold py-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
