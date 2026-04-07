'use client';

const tvetTypes = [
  {
    id: 1,
    title: 'Technical Colleges',
    overlay: 'bg-[#E8792B]/75',
    image: '/images/tvets/technical.jpg',
  },
  {
    id: 2,
    title: 'Medical Colleges',
    overlay: 'bg-[#1B1B3A]/75',
    image: '/images/tvets/medical.jpg',
  },
  {
    id: 3,
    title: 'Business & Hospitality Colleges',
    overlay: 'bg-[#E8792B]/75',
    image: '/images/tvets/business.jpg',
  },
  {
    id: 4,
    title: 'Other Specialized TVET institutions',
    overlay: 'bg-[#1B1B3A]/75',
    image: '/images/tvets/specialized.jpg',
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
              className="relative rounded-3xl overflow-hidden h-56 group cursor-pointer"
            >
              {/* Fallback gradient (shown behind img) */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700" />

              {/* Background image */}
              <img
                src={type.image}
                alt={type.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />

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
