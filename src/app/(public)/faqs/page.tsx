import type { Metadata } from 'next';
import FaqAccordion from '@/components/public/faqs/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQs | Dapin Education',
};

const testimonials = [
  {
    quote:
      'Dapin Edu helped us launch smoothly with expert guidance, improving compliance, training quality, and institutional confidence.',
    name: 'Mary Wanjiku',
    role: 'Director, BrightSkills Technical College',
  },
  {
    quote:
      'Their digital learning support transformed our college, boosting engagement, simplifying delivery, and strengthening outcomes for learners.',
    name: 'James Muturi',
    role: 'Principal, Eastview Institute',
  },
  {
    quote:
      'We gained clear direction on accreditation, efficient systems, and sustainable growth through their expert TVET advisory.',
    name: "Lucy Achieng'",
    role: 'E-Learning Coordinator, Newbridge',
  },
  {
    quote:
      'Their team modernized our processes, strengthened capability, improved experiences, and positioned our institution for long-term success.',
    name: 'Kelvin Oduor',
    role: 'CEO, SkillPath Training Centre',
  },
];

function Stars() {
  return (
    <div className="mb-3 flex gap-1" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <div className="bg-white">
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Frequently Asked Questions <span className="text-amber-500">(FAQs)</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Find quick answers to the most common questions institutions ask when working with Dapin Edu.
              If you need more clarification, our team is always ready to support you with personalized
              guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#1e2a4a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#18233f]"
              >
                ESTABLISH YOUR COLLEGE
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
              >
                BOOK FREE CONSULTATION
              </a>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-[#1e2a4a]">
              <li className="flex items-center gap-2">
                <span aria-hidden="true">📍</span>
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">📞</span>
                <a href="#" className="hover:text-amber-500">
                  +254 708 518 641
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">✉️</span>
                <a href="#" className="hover:text-amber-500">
                  info@dapineducation.co.ke
                </a>
              </li>
            </ul>
          </div>

          <div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              What <span className="text-amber-500">Our Clients Say</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Stars />
                <p className="text-sm leading-relaxed text-slate-600">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-4 font-bold text-[#1e2a4a]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-amber-500">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
