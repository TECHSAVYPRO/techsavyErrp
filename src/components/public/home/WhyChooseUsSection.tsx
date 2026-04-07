const reasons = [
  {
    number: '1',
    title: 'Industry Recognized',
    description:
      'Our TVET establishment services are fully aligned with TVET Authority of Kenya (TVETA) standards, ensuring your institution gains official recognition and credibility in the sector.',
  },
  {
    number: '2',
    title: 'Affordable',
    description:
      'We offer competitive, transparent pricing with flexible payment plans — making professional TVET establishment services accessible to every aspiring college founder.',
  },
  {
    number: '3',
    title: 'All in One Place',
    description:
      'From consultation and registration to digital infrastructure and trainer development, we provide a complete, end-to-end solution under one roof.',
  },
];

// Checkmark icon in orange circle
function CheckIcon() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#E8792B]/15 flex items-center justify-center flex-shrink-0">
      <svg
        className="w-5 h-5 text-[#E8792B]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
}

// Placeholder image box
function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center aspect-[4/3]">
      <div className="text-center p-4">
        <svg
          className="w-10 h-10 mx-auto text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#F9F9F9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1B1B3A]">
            Why Choose <span className="text-[#E8792B]">Us?</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-base">
            We are Kenya&apos;s leading TVET establishment consultants, committed to
            helping you build a compliant, thriving technical institution from
            the ground up.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: stacked images */}
          <div className="flex-1 flex flex-col gap-4 lg:max-w-[45%]">
            <ImgPlaceholder label="Students at laptops" />
            <ImgPlaceholder label="Students studying together" />
            <ImgPlaceholder label="Vocational education concepts" />
          </div>

          {/* Right: reasons */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {reasons.map((reason) => (
              <div key={reason.number} className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h3 className="text-lg font-bold text-[#E8792B] mb-1">
                    {reason.number}. {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/services/establishment"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#E8792B] text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
          >
            ESTABLISH YOUR COLLEGE
          </a>
          <a
            href="/consultation"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1B1B3A] text-white font-semibold text-sm hover:bg-[#2D2D5E] transition-colors"
          >
            BOOK FREE CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
