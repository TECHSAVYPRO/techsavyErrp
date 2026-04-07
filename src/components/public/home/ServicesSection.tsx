const services = [
  {
    id: 1,
    slug: 'consultation',
    title: 'TVET Consultation',
    description:
      'Expert guidance on TVET Authority regulations, accreditation standards, and compliance requirements for establishing a recognized institution.',
    image: '/images/service-consultation.jpg',
    color: 'from-[#1B1B3A]/80 to-[#1B1B3A]/60',
  },
  {
    id: 2,
    slug: 'establishment',
    title: 'TVET Establishment',
    description:
      'End-to-end support for registering your TVET college — from board formation, physical facility setup, to full regulatory approval.',
    image: '/images/service-establishment.jpg',
    color: 'from-[#2D2D5E]/80 to-[#1B1B3A]/60',
  },
  {
    id: 3,
    slug: 'trainer-development',
    title: 'Trainer Development',
    description:
      'Professional development programs for trainers and instructors to meet TVET Authority staffing and qualification standards.',
    image: '/images/service-trainer.jpg',
    color: 'from-[#1B1B3A]/80 to-[#2D2D5E]/60',
  },
  {
    id: 4,
    slug: 'digital-infrastructure',
    title: 'TVET Digital Infrastructure',
    description:
      'Full Moodle LMS setup, custom e-learning portals, student management systems, and digital infrastructure for modern TVET delivery.',
    image: '/images/service-digital.jpg',
    color: 'from-[#2D2D5E]/80 to-[#1B1B3A]/60',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F9F9F9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1B1B3A] mb-10">
          Our <span className="text-[#E8792B]">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-xl overflow-hidden shadow-md flex flex-col bg-[#1B1B3A] relative group"
            >
              {/* Image area */}
              <div className="relative h-44 bg-gradient-to-br from-[#2D2D5E] to-[#1B1B3A] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${service.color} z-10`}
                />
                {/* Placeholder image background */}
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-14 h-14 text-white/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content area */}
              <div className="p-5 flex flex-col flex-1 relative">
                {/* Decorative faded building icon */}
                <svg
                  className="absolute bottom-3 right-3 w-12 h-12 text-white/5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm2-4h14V5H5v8zm2-6h10v4H7V7z" />
                </svg>

                <h3 className="text-[#E8792B] font-bold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center px-5 py-2 rounded-full bg-[#E8792B] text-white text-xs font-bold uppercase hover:bg-orange-600 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
