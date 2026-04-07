'use client';

const services = [
  {
    id: 1,
    slug: 'consultation',
    title: 'TVET Consultation',
    description:
      'We provide expert advisory services to guide institutions through compliance, planning, curriculum strategy, and operational improvement for sustainable TVET growth.',
    image: '/images/services/consultation.jpg',
  },
  {
    id: 2,
    slug: 'establishment',
    title: 'TVET Establishment',
    description:
      'We support new institutions from concept to launch, handling accreditation, infrastructure planning, program development, and all requirements for a fully compliant TVET college.',
    image: '/images/services/establishment.jpg',
  },
  {
    id: 3,
    slug: 'trainer-development',
    title: 'Trainer Development',
    description:
      'We equip trainers with modern teaching skills, digital tools, and competency-based methodologies that strengthen lesson delivery and overall instructional quality.',
    image: '/images/services/trainer.jpg',
  },
  {
    id: 4,
    slug: 'digital-infrastructure',
    title: 'TVET Digital Infrastructure',
    description:
      'We build and optimize digital learning ecosystems including LMS setup, e-learning content development, and integrated systems that support online and blended training.',
    image: '/images/services/digital.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1B1B3A] mb-10">
          Our <span className="text-[#E8792B]">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden shadow-md flex flex-col bg-[#1B1B3A] relative group border border-white/10"
            >
              {/* Image in top-right area */}
              <div className="relative h-44 overflow-hidden">
                {/* Fallback gradient (shown behind img) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D2D5E] to-[#1B1B3A]" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute top-0 right-0 w-3/4 h-full object-cover rounded-bl-2xl"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Content area */}
              <div className="p-5 flex flex-col flex-1 relative">
                {/* Decorative faded building illustration */}
                <svg
                  className="absolute bottom-3 right-3 w-16 h-16 text-[#E8792B]/15"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                >
                  <path d="M8 56h48v-4H8v4zm4-8h40V16H12v32zm4-28h8v8h-8v-8zm12 0h8v8h-8v-8zm12 0h8v8h-8v-8zM16 36h8v8h-8v-8zm12 0h8v8h-8v-8zm12 0h8v8h-8v-8zM28 8h8v8h-8V8z" />
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
                    LEARN MORE
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
