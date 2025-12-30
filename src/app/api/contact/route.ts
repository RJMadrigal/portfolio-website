import { NextResponse } from "next/server";
import { Resend } from "resend";
const apiKey = process.env.RESEND_API_KEY;

export async function POST(req: Request) {
  try {

    if (!apiKey) return new Response("API key is not configured", { status: 500 });

    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing name, email, or message" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: process.env.CONTACT_TO!,
      subject: "New message from your portfolio",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
