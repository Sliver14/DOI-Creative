import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/db'
import { insertContactSchema } from '@/shared/schema'
import nodemailer from 'nodemailer'

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // from .env
    pass: process.env.EMAIL_PASS, // from .env (App Password if using Gmail w/2FA)
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // ✅ Validate request
    const validatedData = insertContactSchema.parse(body)

    // ✅ Save to Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert(validatedData)
      .select()

    if (error) throw error

    // ✅ Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'doicreatives@gmail.com',
      // to: 'sylverchristopher12@gmail.com',
      subject: '📩 New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        <p><strong>Budget Range:</strong> ${validatedData.budgetRange}</p>
        <p><strong>Project Details:</strong> ${validatedData.projectDetails}</p>
      `,
    }

    // ✅ Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully 🚀',
      data: data?.[0],
    })
  } catch (error) {
    console.error('❌ Contact form error:', error)

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
