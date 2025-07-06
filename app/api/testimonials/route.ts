import { NextResponse } from 'next/server'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { testimonials } from '../../../shared/schema'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)

export async function GET() {
  try {
    const result = await db.select().from(testimonials).orderBy(testimonials.id)
    
    return NextResponse.json({ 
      success: true, 
      data: result
    })
  } catch (error) {
    console.error('Testimonials fetch error:', error)
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
} 