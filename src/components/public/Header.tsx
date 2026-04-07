'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Clients', href: '/clients' },
  { label: 'Documents', href: '/documents' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Moodle Plugins', href: '/moodle-plugins' },
];

const serviceLinks = [
  { label: 'TVET Consultation', href: '/services/consultation' },
  { label: 'TVET Establishment', href: '/services/establishment' },
  { label: 'Trainer Development', href: '/services/trainer-development' },
  { label: 'TVET Digital Infrastructure', href: '/services/digital-infrastructure' },
];

// Logo component
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
      {/* Oval/capsule badge: navy outlined border wrapping an orange circle with DC */}
      <div className="relative flex items-center justify-center w-11 h-9 rounded-full border-2 border-[#1B1B3A]">
        <div className="w-7 h-7 rounded-full bg-[#E8792B] flex items-center justify-center text-white font-extrabold text-xs tracking-tighter leading-none">
          DC
        </div>
      </div>
      <span className="font-bold text-xl tracking-tight">
        <span className="text-[#1B1B3A]">Dapin </span>
        <span className="text-[#E8792B]">Edu</span>
      </span>
    </Link>
  );
}

// Search icon SVG
function SearchIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

// Chevron icon
function ChevronIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gray-500 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// Phone icon SVG
function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

// Email icon SVG
function EmailIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

// Hamburger icon
function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

// Close icon
function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* ── Announcement Bar ── */}
      <div className="bg-[#1B1B3A] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <span className="font-medium">Nairobi, Kenya</span>
          <span className="hidden sm:inline text-center">
            ⭐ Introducing our New College Management System ⭐
          </span>
          <div className="flex items-center gap-4">
            <a href="tel:+254708518641" className="flex items-center gap-1 hover:text-[#E8792B] transition-colors">
              <PhoneIcon />
              +254 708 518 641
            </a>
            <a href="mailto:info@dapineducation.co.ke" className="flex items-center gap-1 hover:text-[#E8792B] transition-colors">
              <EmailIcon />
              info@dapineducation.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <div className="bg-white shadow-sm border-b-2 border-[#E8792B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#E8792B] transition-colors rounded-md"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronIcon />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-1 hidden group-hover:block">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                        {serviceLinks.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#E8792B]/10 hover:text-[#E8792B] transition-colors"
                          >
                            {s.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#E8792B] transition-colors rounded-md"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  placeholder="Search"
                  className="pl-9 pr-4 py-2 text-sm rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E8792B]/30 focus:border-[#E8792B] w-36 transition-all"
                  aria-label="Search"
                />
              </div>

              {/* Contact Us */}
              <a
                href="/contact"
                className="px-4 py-2 text-sm font-semibold rounded-full border-2 border-[#E8792B] text-[#E8792B] hover:bg-[#E8792B] hover:text-white transition-colors"
              >
                Contact Us
              </a>

              {/* Book Free Consultation */}
              <a
                href="/consultation"
                className="px-4 py-2 text-sm font-semibold rounded-full bg-[#1B1B3A] text-white hover:bg-[#2D2D5E] transition-colors"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#E8792B] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronIcon />}
                  </a>
                  {link.hasDropdown && (
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {serviceLinks.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          className="px-3 py-2 text-sm text-gray-600 hover:text-[#E8792B] hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-gray-100 mt-2">
                <a
                  href="/contact"
                  className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-full border-2 border-[#E8792B] text-[#E8792B] hover:bg-[#E8792B] hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/consultation"
                  className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-full bg-[#1B1B3A] text-white hover:bg-[#2D2D5E] transition-colors"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
