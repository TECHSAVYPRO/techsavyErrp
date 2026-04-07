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

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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

// Search icon for email input
function SearchIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
    <footer className="bg-white text-[#1B1B3A]">
      {/* Newsletter strip */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#E8792B] flex items-center justify-center text-white font-bold text-lg">
                DC
              </div>
              <span className="font-bold text-xl tracking-tight">
                <span className="text-[#1B1B3A]">Dapin </span>
                <span className="text-[#E8792B]">Edu</span>
              </span>
            </Link>

            {/* Subscribe form */}
            <form onSubmit={handleSubscribe} className="flex items-center w-full sm:max-w-md border border-gray-300 rounded-full bg-white overflow-hidden">
              <span className="pl-4">
                <SearchIcon />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to get the latest news..."
                required
                className="flex-1 px-3 py-3 text-sm bg-transparent text-[#1B1B3A] placeholder-gray-400 focus:outline-none"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold rounded-full bg-[#1B1B3A] text-white hover:bg-[#2a2a5a] transition-colors flex-shrink-0 m-0.5"
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
              <h4 className="text-[#1B1B3A] font-bold text-sm uppercase tracking-widest mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:underline transition-colors"
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
            <h4 className="text-[#1B1B3A] font-bold text-sm uppercase tracking-widest mb-5">
              CONTACT &amp; SOCIALS
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <a href="mailto:info@dapineducation.co.ke" className="hover:underline">
                  info@dapineducation.co.ke
                </a>
              </li>
              <li>
                <a href="tel:+254708518641" className="hover:underline">
                  Phone: +254 708 518 641
                </a>
              </li>
              <li>Address: Nairobi, Kenya</li>
            </ul>
            {/* Social icons — small plain dark icons, no circle backgrounds */}
            <div className="flex items-center gap-4 mt-5">
              {[
                { icon: <YouTubeIcon />, href: '#', label: 'YouTube' },
                { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
                { icon: <TwitterIcon />, href: '#', label: 'X (Twitter)' },
                { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
                { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-[#1B1B3A] hover:text-[#E8792B] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 Dapin Education Consultants. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:underline transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:underline transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
