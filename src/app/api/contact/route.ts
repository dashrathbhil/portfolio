import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, message } = data;

    // Validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const emailTrimmed = typeof email === 'string' ? email.trim() : '';
    const phoneTrimmed = typeof phone === 'string' ? phone.trim() : '';

    if (!emailTrimmed && !phoneTrimmed) {
      return NextResponse.json({ error: 'Please provide either an Email Address or a Phone Number' }, { status: 400 });
    }

    if (emailTrimmed && !/^\S+@\S+\.\S+$/.test(emailTrimmed)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message is too long (max 5000 characters)' }, { status: 400 });
    }

    // Email Dispatch
    await sendEmail({
      name: name.trim(),
      email: emailTrimmed || undefined,
      phone: phoneTrimmed || undefined,
      message: message.trim(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[API/Contact] Error processing request:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
