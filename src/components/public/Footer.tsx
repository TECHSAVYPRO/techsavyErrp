'use client';

import { useState } from 'react';
import Link from 'next/link';

const footerColumns = [
  {
    heading: 'COMPANY',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Why Dapin Edu', href: '/why-dapin-edu' },
      { label: 'Clients', href: '/clients' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'SERVICES',
    links: [
      { label: 'Establish a College', href: '/services/establishment' },
      { label: 'Student Opportunities', href: '/services/student-opportunities' },
      { label: 'Trainer Development', href: '/services/trainer-development' },
      { label: 'Online College Setup', href: '/services/online-college' },
      { label: 'Moodle Plugins Store', href: '/moodle-plugins' },
    ],
  },
  {
    heading: 'PROGRAMS',
    links: [
      { label: 'Scholarships & Funding', href: '/programs/scholarships' },
      { label: 'E-Learning Portal', href: '/programs/e-learning' },
      { label: 'Online Training Courses', href: '/programs/online-courses' },
      { label: 'TVET Capacity Building', href: '/programs/capacity-building' },
    ],
  },
];

// Social media icons
function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Phone icon
function PhoneIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

// Email icon
function EmailIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

// Map pin icon
function MapIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setEmail('');
  }

  return (
    <footer className="bg-[#1B1B3A] text-gray-300">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo white version */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#E8792B] flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Dapin Edu</span>
            </Link>

            {/* Subscribe form */}
            <form onSubmit={handleSubscribe} className="flex w-full sm:max-w-md gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to get the latest news..."
                required
                className="flex-1 px-4 py-3 text-sm rounded-l-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#E8792B] transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold rounded-r-full bg-[#E8792B] text-white hover:bg-orange-600 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#E8792B] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Socials column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              CONTACT &amp; SOCIALS
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:info@dapineducation.co.ke" className="flex items-start gap-2 hover:text-[#E8792B] transition-colors">
                  <EmailIcon />
                  info@dapineducation.co.ke
                </a>
              </li>
              <li>
                <a href="tel:+254708518641" className="flex items-start gap-2 hover:text-[#E8792B] transition-colors">
                  <PhoneIcon />
                  +254 708 518 641
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapIcon />
                Nairobi, Kenya
              </li>
            </ul>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: <YouTubeIcon />, href: '#', label: 'YouTube' },
                { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
                { icon: <TwitterIcon />, href: '#', label: 'X (Twitter)' },
                { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#E8792B] hover:text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 Dapin Education Consultants. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-[#E8792B] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-[#E8792B] transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
