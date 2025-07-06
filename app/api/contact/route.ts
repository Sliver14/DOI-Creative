import { NextRequest, NextResponse } from 'next/server'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { contacts, insertContactSchema } from '../../../shared/schema'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = insertContactSchema.parse(body)
    
    // Insert into database
    const result = await db.insert(contacts).values(validatedData).returning()
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      data: result[0]
    })
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
} 