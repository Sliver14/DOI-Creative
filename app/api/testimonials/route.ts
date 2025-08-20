import { NextResponse } from 'next/server'
import { supabase } from '@/lib/db'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('id', { ascending: true })

    if (error) {
      throw error
    }
    
    return NextResponse.json({ 
      success: true, 
      data
    })
  } catch (error) {
    console.error('Testimonials fetch error:', error)
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}