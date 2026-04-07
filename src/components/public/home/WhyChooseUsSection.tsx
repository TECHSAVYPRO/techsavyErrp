'use client';

const reasons = [
  {
    number: '1',
    title: 'Industry Recognized',
    description:
      "Dapin Edu is trusted across Kenya's TVET ecosystem for delivering accredited, compliant, and high-quality support. We work with regulators, partners, and training experts to ensure institutions meet modern standards and offer programs employers value.",
  },
  {
    number: '2',
    title: 'Affordable',
    description:
      'We make quality TVET support accessible to institutions of all sizes. Our solutions are cost-effective and designed to reduce setup costs, streamline operations, and give colleges the tools they need to grow sustainably.',
  },
  {
    number: '3',
    title: 'All in One Place',
    description:
      'We provide every essential TVET service in one integrated platform including college setup, curriculum development, trainer support, e-learning solutions, and Moodle plugins. You get a single reliable partner for efficiency and long-term growth.',
  },
];

// Checkmark icon — dark navy filled circle with white check
function CheckIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#1B1B3A] flex items-center justify-center flex-shrink-0">
      <svg
        className="w-4 h-4 text-white"
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

// Image with fallback placeholder
function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full rounded-xl overflow-hidden aspect-[3/2] bg-gradient-to-br from-gray-200 to-gray-300 relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
        }}
      />
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1B1B3A]">
            Why Choose <span className="text-[#E8792B]">Us?</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-base">
            Behind every institution we support are students gaining real opportunities, trainers expanding their skills, and communities growing stronger. We exist to make quality education accessible and impactful.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: stacked images */}
          <div className="flex-shrink-0 w-full lg:w-[40%] flex flex-col gap-4">
            <SectionImage
              src="/images/why-choose/education.jpg"
              alt="Student at laptop with EDUCATION text on screen"
            />
            <SectionImage
              src="/images/why-choose/students.jpg"
              alt="Two students studying together"
            />
            <SectionImage
              src="/images/why-choose/vocational-wordcloud.jpg"
              alt="Vocational education word cloud"
            />
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
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#E8792B] text-white font-semibold text-sm uppercase hover:bg-orange-600 transition-colors"
          >
            ESTABLISH YOUR COLLEGE
          </a>
          <a
            href="/consultation"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1B1B3A] text-white font-semibold text-sm uppercase hover:bg-[#2D2D5E] transition-colors"
          >
            BOOK FREE CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
