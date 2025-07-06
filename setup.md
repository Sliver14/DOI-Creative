# Setup Guide for Next.js Conversion

## Step 1: Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

## Step 2: Environment Setup

Create a `.env.local` file in the root directory with your database credentials:

```env
DATABASE_URL="your-neon-database-url-here"
NEXTAUTH_SECRET="your-nextauth-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

## Step 3: Database Setup

Push the database schema to your PostgreSQL database:

```bash
npm run db:push
```

## Step 4: Start Development Server

```bash
npm run dev
```

## Migration Notes

### What Changed

1. **Project Structure**: Moved from Vite + Express to Next.js App Router
2. **Routing**: Replaced Wouter with Next.js built-in routing
3. **API Routes**: Converted Express routes to Next.js API routes
4. **Build System**: Replaced Vite with Next.js build system
5. **File Organization**: Moved components to root-level directories

### Key Differences

- **Server Components**: Next.js uses React Server Components by default
- **API Routes**: API routes are now in `app/api/` directory
- **File-based Routing**: Pages are automatically routed based on file structure
- **Built-in Optimization**: Next.js provides automatic code splitting and optimization

### Components Updated

All components that use client-side features (state, effects, browser APIs) now have the `'use client'` directive:

- `hero-section.tsx`
- `about-business.tsx`
- `services-section.tsx`
- `navigation.tsx`
- All components using Framer Motion or hooks

### API Routes

- `POST /api/contact` - Handles contact form submissions
- `GET /api/testimonials` - Fetches testimonials from database

## Troubleshooting

### Common Issues

1. **Module not found errors**: Make sure all dependencies are installed
2. **Database connection errors**: Verify your DATABASE_URL in `.env.local`
3. **Build errors**: Check that all components have proper imports

### Development Tips

- Use `npm run lint` to check for code issues
- The development server will automatically reload on file changes
- Check the browser console for any runtime errors 