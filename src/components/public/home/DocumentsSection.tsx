const documents = [
  {
    id: 1,
    title: 'TVET Registration Guide',
    description:
      'A comprehensive step-by-step guide covering the full TVETA registration process, required documents, fees, and timelines for establishing your TVET college in Kenya.',
    downloadUrl: '/documents/tvet-registration-guide',
  },
  {
    id: 2,
    title: 'TVET Infrastructure',
    description:
      'Detailed standards and specifications for physical infrastructure required by TVET Authority — workshops, classrooms, equipment, and facilities checklist.',
    downloadUrl: '/documents/tvet-infrastructure',
  },
  {
    id: 3,
    title: 'Curriculum Handbook',
    description:
      'Official curriculum frameworks and course structure guidelines for accredited TVET programs, including assessment methods and competency standards.',
    downloadUrl: '/documents/curriculum-handbook',
  },
];

// Arrow icon
function ArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#E8792B]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function DocumentsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1B1B3A]">
            Download Our{' '}
            <span className="text-[#E8792B]">TVET Setup Documents</span>
          </h2>
          <a
            href="/documents"
            className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[#E8792B] text-white text-xs font-bold uppercase hover:bg-orange-600 transition-colors"
          >
            View More
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col relative"
              style={{ borderLeft: '5px solid #1B1B3A' }}
            >
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#1B1B3A] font-bold text-lg mb-3">
                  {doc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {doc.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={doc.downloadUrl}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1B1B3A] text-white text-xs font-bold uppercase hover:bg-[#2D2D5E] transition-colors"
                  >
                    Download
                  </a>
                  {/* Decorative arrow icon bottom-right */}
                  <div className="w-8 h-8 rounded-full bg-[#E8792B]/10 flex items-center justify-center">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
