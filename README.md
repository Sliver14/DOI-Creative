# DOI Creative

DOI Creative is a professional film production and video editing services website. Built with Next.js 14, TypeScript, and Tailwind CSS, it features a modern, responsive design and a robust backend powered by Supabase and PostgreSQL.

## Features

- Modern Next.js 14 App Router
- TypeScript for type safety
- Tailwind CSS for rapid UI development
- Framer Motion for smooth animations
- Supabase for backend and authentication
- PostgreSQL database integration
- React Query for efficient data fetching
- Radix UI for accessible UI components
- Lucide React for icons
- Responsive and mobile-friendly design

## Technologies Used

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Supabase**
- **PostgreSQL**
- **React Query (@tanstack/react-query)**
- **Radix UI** (multiple @radix-ui/react-* packages)
- **Lucide React**
- **Zod** (validation)
- **React Hook Form**
- **Embla Carousel**
- **Recharts**
- **date-fns**
- **cmdk**
- **nodemailer**
- **eslint, prettier, typescript** (dev tools)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd DOI Creative
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url-here"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key-here"
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
npm run db:push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (Radix)
│   └── providers/        # Context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── shared/               # Shared schemas and types
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Supabase** - Backend as a Service
- **React Query** - Data fetching and caching
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library

## Database Schema

The project uses PostgreSQL with the following main tables:

- `contacts` - Contact form submissions
- `testimonials` - Client testimonials

## API Routes

- `POST /api/contact` - Submit contact form
- `GET /api/testimonials` - Fetch testimonials

## Deployment

This project can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting platform.

## License

MIT 
