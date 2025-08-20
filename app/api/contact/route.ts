import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/db'
import { insertContactSchema } from '@/shared/schema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = insertContactSchema.parse(body)
    
    // Insert into database
    const { data, error } = await supabase
      .from('contacts')
      .insert(validatedData)
      .select()

    if (error) {
      throw error
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      data: data[0]
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