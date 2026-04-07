const testimonials = [
  {
    id: 1,
    quote:
      'Dapin Edu made what seemed like an impossible process straightforward. We are now a fully registered TVET institution thanks to their dedicated support.',
    name: 'Dr. James Kariuki',
    role: 'Director',
    institution: 'Predictive Analytics Training Institute',
  },
  {
    id: 2,
    quote:
      'The team guided us through every step of accreditation. Their expertise in TVETA regulations saved us months of back-and-forth with regulators.',
    name: 'Ms. Grace Omondi',
    role: 'Principal',
    institution: 'Eagle Creek College',
  },
  {
    id: 3,
    quote:
      'From curriculum setup to Moodle LMS, Dapin Edu handled everything professionally. Our digital learning platform is now world-class.',
    name: 'Mr. Peter Wanjiku',
    role: 'CEO',
    institution: 'Learnfusion Training Centre',
  },
  {
    id: 4,
    quote:
      'Affordable, reliable, and highly professional. We couldn\'t have established our medical college without Dapin Edu\'s end-to-end support.',
    name: 'Dr. Amina Hassan',
    role: 'Founder',
    institution: 'Gelan Technical College',
  },
];

// 5-star rating
function Stars() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F9F9F9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1B1B3A] mb-10">
          What <span className="text-[#E8792B]">Our Clients Say</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col"
            >
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#1B1B3A] text-sm">{t.name}</p>
                <p className="text-[#E8792B] text-xs mt-0.5">
                  {t.role} — {t.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
