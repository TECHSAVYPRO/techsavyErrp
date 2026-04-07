'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);
  const [moodleImgError, setMoodleImgError] = useState(false);
  const [odooImgError, setOdooImgError] = useState(false);

  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 lg:max-w-[55%]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1B1B3A]">
              Empowering Kenya&apos;s
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#E8792B]">
              TVET Institutions
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1B1B3A]">
              for{' '}
              <span className="relative inline-block">
                <span className="text-[#1B1B3A]">Progress.</span>
                {/* Orange wavy underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5 T150,5 T200,5"
                    fill="none"
                    stroke="#E8792B"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-gray-500 text-base lg:text-lg leading-relaxed">
              Establishing a private college or Vocational Training Center in Kenya from scratch is a challenging experience. Our team of education experts is here to help you along the way.
            </p>
            <p className="mt-3 text-gray-500 text-base lg:text-lg leading-relaxed">
              We enhance the effortless establishment, growth, and success of your TVET institution by ensuring the fulfillment of the evolving needs of students, trainers, and the dynamic job market.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/services/establishment"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1B1B3A] text-white font-semibold text-sm hover:bg-[#2D2D5E] transition-colors"
              >
                ESTABLISH YOUR COLLEGE
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#E8792B] text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                GET STARTED
              </a>
            </div>
          </div>

          {/* Right: Circle Image + Orange Arc + Partners */}
          <div className="flex-1 lg:max-w-[45%] relative flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              {/* Layered circle composition: image → thin gap → thin navy arc → thick orange arc */}
              <div className="relative" style={{ width: 380, height: 380 }}>
                {/* Thick orange C-shaped arc (outermost) — SVG circle arc */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 380 380"
                  aria-hidden="true"
                  style={{ overflow: 'visible' }}
                >
                  {/* Thick orange arc — from ~60° to ~210° (right side, C-shape) */}
                  <circle
                    cx="190"
                    cy="190"
                    r="178"
                    fill="none"
                    stroke="#E8792B"
                    strokeWidth="12"
                    strokeDasharray="630 940"
                    strokeDashoffset="-157"
                    strokeLinecap="round"
                  />
                  {/* Thin navy arc — just inside the orange arc */}
                  <circle
                    cx="190"
                    cy="190"
                    r="160"
                    fill="none"
                    stroke="#1B1B3A"
                    strokeWidth="2"
                    strokeDasharray="565 940"
                    strokeDashoffset="-141"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Main hero image — circular */}
                <div
                  className="absolute rounded-full overflow-hidden bg-gradient-to-br from-[#1B1B3A] to-[#2D2D5E] flex items-center justify-center"
                  style={{ inset: 14 }}
                >
                  {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/images/hero-students.jpg"
                      alt="Students studying with laptops"
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white/60 p-8 text-center">
                      <svg className="w-16 h-16 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Students studying with laptops</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Partners badge + logos below the circle */}
              <div className="mt-5 flex flex-col items-center gap-3">
                <div className="bg-[#E8792B] text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wide">
                  Partners
                </div>
                <div className="flex items-center gap-6">
                  {/* Moodle partner logo */}
                  {!moodleImgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/images/partners/moodle-partner.png"
                      alt="Moodle Partner"
                      className="h-10 w-auto object-contain"
                      onError={() => setMoodleImgError(true)}
                    />
                  ) : (
                    <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white text-xs font-bold">M</div>
                      <span className="text-xs font-semibold text-gray-700">moodle partner</span>
                    </div>
                  )}
                  {/* Odoo partner logo */}
                  {!odooImgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/images/partners/odoo-partner.png"
                      alt="Odoo Partner"
                      className="h-10 w-auto object-contain"
                      onError={() => setOdooImgError(true)}
                    />
                  ) : (
                    <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-[#1B1B3A] flex items-center justify-center text-white text-xs font-bold">O</div>
                      <span className="text-xs font-semibold text-gray-700">Odoo Partner</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
