import { contacts, testimonials, type Contact, type InsertContact, type Testimonial, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  private currentContactId: number;
  private currentTestimonialId: number;

  constructor() {
    this.contacts = new Map();
    this.testimonials = new Map();
    this.currentContactId = 1;
    this.currentTestimonialId = 1;

    // Add sample testimonials
    this.addSampleTestimonials();
  }

  private addSampleTestimonials() {
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah Johnson",
        title: "Marketing Director",
        company: "TechFlow Solutions",
        content: "CineVision transformed our brand story into a compelling visual narrative that exceeded all our expectations. The attention to detail and creative vision was outstanding.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
      },
      {
        name: "Michael Chen",
        title: "Independent Filmmaker",
        company: "Chen Productions",
        content: "Working with Alex and the CineVision team was an absolute pleasure. They brought our documentary to life with incredible storytelling and visual artistry.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
      },
      {
        name: "Emily Rodriguez",
        title: "CEO",
        company: "Stellar Brands",
        content: "The commercial they produced for our product launch generated incredible engagement. Their cinematic approach elevated our brand to a whole new level.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      const fullTestimonial: Testimonial = { 
        ...testimonial, 
        id,
        rating: testimonial.rating || 5,
        imageUrl: testimonial.imageUrl || null
      };
      this.testimonials.set(id, fullTestimonial);
    });
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
}

export const storage = new MemStorage();
