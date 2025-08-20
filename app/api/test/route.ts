import { NextResponse } from 'next/server'
import { supabase } from '@/lib/db'

// This endpoint checks database connection
export async function GET() {
  try {
    // Do a lightweight query to check connection
    const { data, error } = await supabase.from('contacts').select('id').limit(1)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true, message: 'Connected!', data })
  } catch (err: any) {
    console.error('Error in API route:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}