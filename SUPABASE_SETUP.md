# Supabase Setup Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Getting Your Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once your project is created, go to Settings > API
3. Copy the "Project URL" and "anon public" key
4. Replace the placeholder values in your `.env.local` file

## Database Setup

1. Run the database migrations:
   ```bash
   npm run db:push
   ```

2. Seed the database with sample testimonials:
   ```bash
   npm run db:seed
   ```

## Database Schema

The project uses the following tables:

### Contacts Table
- `id` - Primary key
- `firstName` - First name
- `lastName` - Last name
- `email` - Email address
- `projectType` - Type of project
- `budgetRange` - Budget range
- `projectDetails` - Project details
- `createdAt` - Timestamp

### Testimonials Table
- `id` - Primary key
- `name` - Client name
- `title` - Client title
- `company` - Company name
- `content` - Testimonial content
- `rating` - Rating (1-5)
- `imageUrl` - Profile image URL

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/testimonials` - Get all testimonials 