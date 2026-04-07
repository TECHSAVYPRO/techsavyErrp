'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

// ── Icon components ──────────────────────────────────────────────────────────

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

// ── Dapin Edu logo (large) ────────────────────────────────────────────────────

function DapinLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-14 h-14 rounded-full bg-[#E8792B] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
        D
      </div>
      <span className="text-[#1B1B3A] font-bold text-2xl tracking-tight">Dapin Edu</span>
    </Link>
  );
}

// ── Contact info item ─────────────────────────────────────────────────────────

function ContactItem({
  iconBg,
  icon,
  text,
  href,
}: {
  iconBg: string;
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className={`w-11 h-11 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <span className="text-[#1B1B3A] font-medium text-base">{text}</span>
    </div>
  );
  return href ? (
    <a href={href} className="hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');
    const form = e.currentTarget;

    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    // Client-side validation
    if (!name || !email || !message) {
      setErrorMsg('Please fill in all required fields (name, email, message).');
      return;
    }
    // Simple safe email check (no ReDoS risk)
    const atIdx = email.indexOf('@');
    const isEmailValid =
      atIdx > 0 &&
      email.indexOf('@', atIdx + 1) === -1 &&
      email.lastIndexOf('.') > atIdx + 1;
    if (!isEmailValid) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setFormState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }
      setFormState('success');
      formRef.current?.reset();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setFormState('error');
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="text-[#1B1B3A]">Contact </span>
            <span className="text-[#E8792B]">Us</span>
          </h1>
          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Fill in the form below to{' '}
            <Link href="/contact" className="underline text-gray-600 hover:text-[#E8792B] transition-colors">
              Contact us.
            </Link>
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* ── Left: Contact form ── */}
          <div className="flex-1 lg:max-w-[50%]">
            {formState === 'success' ? (
              <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#1B1B3A] mb-2">Message Sent!</h2>
                <p className="text-gray-600 mb-6">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="px-6 py-2.5 rounded-full bg-[#1B1B3A] text-white text-sm font-semibold hover:bg-[#2D2D5E] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name."
                  required
                  autoComplete="name"
                  className="w-full bg-[#F5F5F5] rounded-xl px-5 py-4 text-[#1B1B3A] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8792B]/40 transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number."
                  autoComplete="tel"
                  className="w-full bg-[#F5F5F5] rounded-xl px-5 py-4 text-[#1B1B3A] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8792B]/40 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address."
                  required
                  autoComplete="email"
                  className="w-full bg-[#F5F5F5] rounded-xl px-5 py-4 text-[#1B1B3A] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8792B]/40 transition"
                />
                <textarea
                  name="message"
                  placeholder="We are listening."
                  required
                  rows={5}
                  className="w-full bg-[#F5F5F5] rounded-xl px-5 py-4 text-[#1B1B3A] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8792B]/40 transition resize-none"
                />

                {(formState === 'error' || errorMsg) && (
                  <p className="text-red-600 text-sm" role="alert">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full bg-[#1B1B3A] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#2D2D5E] transition-colors disabled:opacity-70"
                >
                  {formState === 'loading' ? (
                    <>
                      <SpinnerIcon />
                      Sending…
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      Send
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Right: Company info ── */}
          <div className="flex-1 lg:max-w-[50%] flex flex-col gap-8">
            {/* Logo */}
            <DapinLogo />

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <ContactItem
                iconBg="bg-[#E8792B]"
                icon={<LocationIcon />}
                text="Nairobi, Kenya"
              />
              <ContactItem
                iconBg="bg-[#25D366]"
                icon={<PhoneIcon />}
                text="+254 708 518 641"
                href="tel:+254708518641"
              />
              <ContactItem
                iconBg="bg-[#FFB800]"
                icon={<EmailIcon />}
                text="info@dapineducation.co.ke"
                href="mailto:info@dapineducation.co.ke"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
