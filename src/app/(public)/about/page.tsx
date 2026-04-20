import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Dapin Education',
};

const teamMembers = [
  {
    name: 'Wilson Mungai',
    role: 'CFO',
    bio: 'He is a financial expert with four years of experience in the financial sector. His significant management skills are playing a crucial role in overseeing the daily operations of the company. His commitment to ensuring the provision of quality products and services for their customers is a key asset to the organization.',
    imageFrameClass: 'border-l-8 border-amber-500',
  },
  {
    name: 'Peter Kibunja',
    role: 'CEO',
    bio: 'A seasoned professional with four years of experience in the TVET sector at TVET Authority. His extensive knowledge and insights into the industry are proving to be invaluable. His excitement and commitment to enhancing technical and vocational education make him a valuable asset to our organization.',
    imageFrameClass: 'border-t-8 border-amber-500 rounded-t-[2.25rem]',
  },
  {
    name: 'Edwin Kariuki',
    role: 'Head of Marketing',
    bio: 'Edwin Kariuki is a seasoned marketing professional with a passion for driving brand growth and engagement. With extensive experience in developing strategic marketing campaigns and leveraging data-driven insights, Edwin excels in crafting innovative solutions that resonate with target audiences. His expertise spans various industries, ensuring a tailored approach to each unique challenge.',
    imageFrameClass: 'border-2 border-[#1e2a4a]',
  },
];

const departments = [
  {
    title: 'Consultancy & Advisory',
    description:
      'We offer expert consultation to guide institutions through compliance planning, curriculum strategy, and operational improvement, helping them strengthen programs and institutional capacity. Our advisory team supports organizations in making informed decisions, improving academic quality, enhancing outreach, and building strong foundations for sustainable TVET development and student success.',
  },
  {
    title: 'Digital Infrastructure Development',
    description:
      'We design and implement digital learning systems that support modern TVET delivery, including LMS setup, e-learning content development, and integrated platforms for online and blended training. Our team helps institutions adopt scalable digital tools that improve teaching efficiency, enhance learner engagement, and streamline overall educational management processes.',
  },
  {
    title: 'Trainer Development',
    description:
      'We specialize in developing skilled trainers through competency-based methodologies, digital teaching tools, and structured professional growth programs. Our department ensures educators receive practical training that strengthens lesson delivery, assessment quality, and classroom engagement, enabling institutions to maintain high academic standards and improve overall training effectiveness across programs.',
  },
  {
    title: 'Systems Development',
    description:
      'We build customized management systems tailored to educational institutions, improving efficiency in admissions, records, learning management, and communication. Our software development team collaborates with clients to create innovative digital solutions that simplify operations, enhance data accuracy, support automation, and strengthen institutional performance through reliable, scalable technology platforms.',
  },
];

function MissionGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -left-2 top-4 h-14 w-14 rounded-full border-2 border-amber-500/70" />
      <div className="absolute left-10 top-24 h-20 w-20 rounded-full border-2 border-amber-500/70" />
      <div className="absolute left-24 top-0 h-10 w-10 rounded-full border-2 border-amber-500/70" />
      <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <p className="text-sm font-bold tracking-[0.3em] text-[#1e2a4a]">MISSION</p>
        <svg viewBox="0 0 220 150" className="mt-4 h-auto w-full" role="img" aria-label="Mission icon">
          <circle cx="95" cy="76" r="34" fill="none" stroke="#1e2a4a" strokeWidth="6" />
          <circle cx="95" cy="76" r="22" fill="none" stroke="#f59e0b" strokeWidth="5" />
          <circle cx="95" cy="76" r="8" fill="#1e2a4a" />
          <line x1="122" y1="52" x2="185" y2="22" stroke="#f59e0b" strokeWidth="6" />
          <polygon points="190,20 206,18 194,32" fill="#f59e0b" />
          <line x1="144" y1="42" x2="132" y2="56" stroke="#1e2a4a" strokeWidth="5" />
        </svg>
      </div>
    </div>
  );
}

function VisionGraphic() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
      <p className="text-sm font-bold tracking-[0.3em] text-[#1e2a4a]">VISION</p>
      <svg viewBox="0 0 220 150" className="mt-4 h-auto w-full" role="img" aria-label="Vision icon">
        <circle cx="92" cy="70" r="34" fill="none" stroke="#1e2a4a" strokeWidth="7" />
        <circle cx="92" cy="70" r="17" fill="none" stroke="#f59e0b" strokeWidth="5" />
        <line x1="118" y1="96" x2="158" y2="136" stroke="#1e2a4a" strokeWidth="9" strokeLinecap="round" />
        <circle cx="170" cy="38" r="16" fill="#f59e0b" />
        <path d="M170 28v20M160 38h20" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <MissionGraphic />
          <div>
            <h1 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Our <span className="text-amber-500">Mission</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Dapin Edu is devoted to reshaping Kenya&apos;s educational landscape by equipping TVET and
              Tertiary Institutions with comprehensive consultancy, strategic planning, digital solutions,
              and effective marketing services. Our mission is to facilitate the seamless establishment,
              growth, and success of TVET Institutions, ensuring they meet the needs of both students and
              the ever-evolving job market.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Our <span className="text-amber-500">Vision</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Our vision is to foster a resilient network of flourishing TVET institutions in Kenya,
              celebrated for their outstanding commitment to providing skill-based education and enriching
              the nation&apos;s socio-economic fabric. We envision a future where DapinEdu is synonymous
              with innovation, compassionate guidance, and collective success within the TVET sector.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <VisionGraphic />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Meet Our <span className="text-amber-500">Team</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div
                  className={`flex h-56 items-center justify-center rounded-2xl bg-slate-300 text-sm font-medium text-slate-700 ${member.imageFrameClass}`}
                >
                  Photo Placeholder
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1e2a4a]">{member.name}</h3>
                <p className="mt-1 font-semibold text-amber-500">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-[#1e2a4a] bg-white px-6 py-3 text-sm font-semibold text-[#1e2a4a] transition-colors hover:bg-slate-100"
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
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Our <span className="text-amber-500">Departments</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {departments.map((department, index) => (
              <article
                key={department.title}
                className="relative overflow-hidden rounded-2xl bg-[#1e2a4a] p-6 text-white shadow-md"
              >
                <h3 className="text-xl font-bold">{department.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/90">{department.description}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-amber-600"
                >
                  BOOK FREE CONSULTATION
                </a>
                <div
                  className={`pointer-events-none absolute h-14 w-14 bg-amber-500 ${
                    index % 2 === 0 ? 'bottom-0 right-0 rounded-tl-2xl' : 'left-0 top-0 rounded-br-2xl'
                  }`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
