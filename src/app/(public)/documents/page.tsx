import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documents | Dapin Education',
  description:
    'Download essential TVET setup resources including registration, curriculum, governance, quality assurance, and digital learning documents.',
};

const documents = [
  {
    title: 'TVET Registration Guide',
    description:
      'A comprehensive, easy-to-use document that explains TVET registration steps, required approvals, essential regulations, and compliance expectations for launching accredited institutions successfully.',
  },
  {
    title: 'TVET Infrastructure',
    description:
      'A practical guide outlining TVET facility standards, essential equipment, digital infrastructure requirements, and layout recommendations to help institutions create safe, functional learning environments.',
  },
  {
    title: 'Curriculum Handbook',
    description:
      'A structured resource detailing competency-based program design, assessment methods, industry alignment steps, and approval requirements to support institutions developing high-quality accredited training programs.',
  },
  {
    title: 'TVET Business Template',
    description:
      'A structured template providing financial projections, operational planning, market analysis, and sustainability strategies to help organizations build strong, investment-ready TVET business models.',
  },
  {
    title: 'Trainer Competency',
    description:
      'A detailed guide outlining teaching standards, digital skills expectations, assessment practices, and professional development pathways required for high-quality trainers in modern TVET institutions.',
  },
  {
    title: 'Quality Assurance Toolkit',
    description:
      'A practical toolkit offering checklists, evaluation forms, compliance indicators, and monitoring processes that support TVET institutions in maintaining consistent quality across all programs.',
  },
  {
    title: 'TVET Governance Toolkit',
    description:
      'A collection of essential policy templates covering governance, administration, safety, learning integrity, and institutional operations for newly established or growing TVET institutions.',
  },
  {
    title: 'Industry Partnership Guide',
    description:
      'A clear document explaining how institutions can build strategic employer partnerships, secure industrial attachments, and align training with real workforce needs for better learner outcomes.',
  },
  {
    title: 'Digital Learning Starter Kit',
    description:
      'A beginner-friendly resource offering guidelines, tools, templates, and workflows to help institutions transition smoothly into online learning and blended training delivery.',
  },
];

function ExternalArrowIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17L17 7M17 7H9m8 0v8"
      />
    </svg>
  );
}

export default function DocumentsPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <h1 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl md:text-5xl">
            Download Our{' '}
            <span className="text-amber-500">TVET Setup Documents</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((document) => (
            <article
              key={document.title}
              className="relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl bg-[#1e2a4a] p-6 text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-xl font-bold leading-snug">{document.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90">
                {document.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-amber-500 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-amber-600"
                >
                  DOWNLOAD
                </a>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 rounded-tl-[2rem] bg-amber-500" />
              <a
                href="#"
                aria-label={`Download ${document.title}`}
                className="absolute bottom-4 right-4 z-10 text-white transition-transform hover:scale-110"
              >
                <ExternalArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
