import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

interface ContactPayload {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

/** Safe email format check without ReDoS-prone nested quantifiers. */
function isValidEmail(value: string): boolean {
  const atIndex = value.indexOf('@');
  if (atIndex < 1) return false; // no '@' or starts with '@'
  if (value.indexOf('@', atIndex + 1) !== -1) return false; // more than one '@'
  const domain = value.slice(atIndex + 1);
  const dotIndex = domain.lastIndexOf('.');
  return dotIndex > 0 && dotIndex < domain.length - 1;
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, phone, email, message } = body;

  // Server-side validation
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }
  // Safe email check: must have exactly one '@' with characters on both sides and a '.' after the '@'
  if (
    !email ||
    typeof email !== 'string' ||
    !isValidEmail(email)
  ) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }

  try {
    await query(
      `INSERT INTO contact_messages (name, phone, email, message) VALUES (?, ?, ?, ?)`,
      [name.trim(), (phone ?? '').trim() || null, email.trim(), message.trim()],
    );

    return NextResponse.json({ success: true, message: 'Your message has been received. We will get back to you shortly.' });
  } catch (err) {
    console.error('Contact form DB error:', err);
    return NextResponse.json({ error: 'Failed to save your message. Please try again later.' }, { status: 500 });
  }
}
