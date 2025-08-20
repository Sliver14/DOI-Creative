import { z } from "zod";

export const insertContactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  projectType: z.string(),
  budgetRange: z.string(),
  projectDetails: z.string(),
});

export const insertTestimonialSchema = z.object({
  name: z.string(),
  title: z.string(),
  company: z.string(),
  content: z.string(),
  rating: z.number().min(1).max(5).optional().default(5),
  imageUrl: z.string().url().optional(),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = InsertContact & { id: number; created_at: string };
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = InsertTestimonial & { id: number };