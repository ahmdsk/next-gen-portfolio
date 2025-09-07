import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactEmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "DevStudio <onboarding@resend.dev>", // Replace with your verified domain
      to: ["hello@devstudio.com"], // Replace with your email
      subject: `New Contact Form: ${subject}`,
      react: ContactEmailTemplate({
        name,
        email,
        subject,
        message,
      }),
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
