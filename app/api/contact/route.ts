import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/db'
import { insertContactSchema } from '@/shared/schema'
import nodemailer from 'nodemailer'

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

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

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'doicreatives@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        <p><strong>Budget Range:</strong> ${validatedData.budgetRange}</p>
        <p><strong>Project Details:</strong> ${validatedData.projectDetails}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    
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
