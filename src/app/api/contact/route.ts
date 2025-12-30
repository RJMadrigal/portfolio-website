import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;

    if (!apiKey) return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    if (!from) return NextResponse.json({ error: "Missing CONTACT_FROM" }, { status: 500 });
    if (!to) return NextResponse.json({ error: "Missing CONTACT_TO" }, { status: 500 });

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing name, email, or message" }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    

    const data = await resend.emails.send({
      from,         
      to: [to],    
      replyTo: email,
      subject: `Portfolio contact: ${name}`,
      react: EmailTemplate({ name, email, message, sentAt: new Date().toISOString() }),
    });

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Contact API error:", err);
    const msg =
      err?.message ||
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      "Failed to send";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
