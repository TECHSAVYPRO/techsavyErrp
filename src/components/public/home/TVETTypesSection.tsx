const tvetTypes = [
  {
    id: 1,
    title: 'Technical Colleges',
    overlay: 'bg-[#E8792B]/75',
    image: '/images/tvet-technical.jpg',
  },
  {
    id: 2,
    title: 'Medical Colleges',
    overlay: 'bg-[#1B1B3A]/75',
    image: '/images/tvet-medical.jpg',
  },
  {
    id: 3,
    title: 'Business & Hospitality Colleges',
    overlay: 'bg-[#E8792B]/75',
    image: '/images/tvet-business.jpg',
  },
  {
    id: 4,
    title: 'Other Specialized TVET Institutions',
    overlay: 'bg-[#1B1B3A]/75',
    image: '/images/tvet-specialized.jpg',
  },
];

export default function TVETTypesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1B1B3A] mb-10">
          Types of <span className="text-[#E8792B]">TVETs</span> We Deal With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tvetTypes.map((type) => (
            <div
              key={type.id}
              className="relative rounded-2xl overflow-hidden h-56 group cursor-pointer"
            >
              {/* Background image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700">
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>

              {/* Color overlay */}
              <div className={`absolute inset-0 ${type.overlay} transition-opacity group-hover:opacity-80`} />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg leading-snug">
                  {type.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
