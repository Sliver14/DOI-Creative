# DOI Creative - Next.js Version

A professional film production and video editing services website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Drizzle ORM** with PostgreSQL
- **React Query** for data fetching
- **Radix UI** components
- **Responsive Design**

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