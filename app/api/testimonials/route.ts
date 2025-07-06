import { NextResponse } from 'next/server'
import { db } from '../../../lib/db'
import { testimonials } from '../../../shared/schema'

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