import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clients | Dapin Education',
  description:
    'Discover institutions we have supported through TVET setup, LMS deployment, technical solutions, and trainer development.',
};

type InstitutionCard = {
  name: string;
  title: string;
  description: string;
};

const establishedInstitutions: InstitutionCard[] = [
  {
    name: 'Predictive Analytics Training Institute',
    title: 'Compliance & Accreditation Support',
    description:
      'We guided this specialized institution through the regulatory process, ensuring their technical data curriculum and operational policies met the strict standards required for TVETA registration and approval.',
  },
  {
    name: 'Tambar Institute of Aviation (MAPS)',
    title: 'Full Institutional Registration',
    description:
      'We managed the end-to-end establishment process for this aviation college, handling the complex name reservation, physical facility inspection readiness, and final licensing documentation.',
  },
  {
    name: 'Learnfusion Training Centre',
    title: 'Legal Setup & Policy Framework',
    description:
      'We secured their legal standing by managing the Business Registration Service (BRS) filings and developed the mandatory academic policies (Strategic Plan, Exam Policy) needed for their successful accreditation.',
  },
];

const lmsInstitutions: InstitutionCard[] = [
  {
    name: 'KUC',
    title: 'Comprehensive E-Learning Platform',
    description:
      'We deployed a robust LMS tailored for their academic needs, enabling seamless online course delivery, digital assignment submissions, and automated grading to streamline the learning experience for students and faculty.',
  },
  {
    name: 'Eagle Creek College',
    title: 'Blended Learning Infrastructure',
    description:
      'We established a flexible digital learning environment that supports their blended learning model, allowing students to access lecture materials, take quizzes, and track their progress remotely while attending physical classes.',
  },
  {
    name: 'Target Training Institute',
    title: 'Digital Assessment & Training Hub',
    description:
      'We secured their legal standing by managing the Business Registration Service (BRS) filings and developed the mandatory academic policies (Strategic Plan, Exam Policy) needed for their successful accreditation.',
  },
];

const specializedSolutions: InstitutionCard[] = [
  {
    name: 'Evolutionary Training Center',
    title: 'College Management System (CMS)',
    description:
      'We deployed a centralized digital management system that automates student admissions, tracks academic progress, and manages financial records, replacing manual paperwork with a streamlined, error-free digital workflow.',
  },
  {
    name: 'Euntech Technical Training',
    title: 'Bulk SMS for Euntech Technical Training',
    description:
      'We integrated a high-volume SMS gateway directly into their operations, enabling the administration to send instant, cost-effective updates regarding fee balances, exam schedules, and emergency notifications to students and guardians.',
  },
  {
    name: 'Gekan Technical College',
    title: 'Gekan Technical College Trainers Support',
    description:
      'We partnered with the institution to manage the professional compliance of their faculty, guiding their technical trainers through the rigorous TVETA accreditation process to ensure every staff member holds a valid license to teach.',
  },
];

const plugins = [
  {
    title: 'Pesapal Payment Plugin',
    description:
      'Enable secure, automated fee collection directly inside Moodle through reliable payment workflows that support card and mobile transactions.',
  },
  {
    title: 'Modern LMS Themes',
    description:
      'Upgrade your LMS interface with responsive, branded themes designed to improve learner experience and institutional presentation.',
  },
  {
    title: 'Proctoring Tools',
    description:
      'Protect online assessments using smart proctoring capabilities that support identity checks, activity monitoring, and exam integrity.',
  },
  {
    title: 'AI Marker',
    description:
      'Automate grading and feedback with AI-powered assessment support that reduces trainer workload and improves scoring consistency.',
  },
];

const testimonials = [
  {
    name: 'Mary Wanjiku',
    role: 'Director, BrightSkills Technical College',
    quote:
      'Dapin Edu helped us launch smoothly with expert guidance, improving compliance, training quality, and institutional confidence.',
  },
  {
    name: 'James Muturi',
    role: 'Principal, Eastview Institute',
    quote:
      'Their digital learning support transformed our college, boosting engagement, simplifying delivery, and strengthening outcomes for learners.',
  },
  {
    name: "Lucy Achieng'",
    role: 'E-Learning Coordinator, Newbridge',
    quote:
      'We gained clear direction on accreditation, efficient systems, and sustainable growth through their expert TVET advisory.',
  },
  {
    name: 'Kelvin Oduor',
    role: 'CEO, SkillPath Training Centre',
    quote:
      'Their team modernized our processes, strengthened capability, improved experiences, and positioned our institution for long-term success.',
  },
];

function InstitutionSection({
  title,
  subtitle,
  cards,
  accent,
}: {
  title: React.ReactNode;
  subtitle: string;
  cards: InstitutionCard[];
  accent: string;
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">{title}</h2>
          <p className="mt-4 text-slate-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-slate-200" aria-hidden="true" />
                <p className="text-sm font-semibold text-[#1e2a4a]">{card.name}</p>
              </div>
              <h3 className="text-lg font-bold text-[#1e2a4a]">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
              <a
                href="#"
                className={`mt-6 inline-flex w-fit items-center justify-center rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors ${accent}`}
              >
                VIEW DEMO
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ClientsPage() {
  return (
    <div className="bg-white">
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-[#1e2a4a] sm:text-4xl md:text-5xl">
              <span className="font-extrabold">Empowering</span>{' '}
              <span className="text-amber-500 italic">the Future of TVETs</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
              We are proud to have partnered with visionary institutions and educators to build
              compliant, modern, and efficient learning environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#1e2a4a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#26385f]"
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

          <article className="rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <p className="text-xl tracking-wide text-amber-500" aria-label="Five stars">
              ★★★★★
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              &ldquo;Dapin&apos;s digital learning support transformed our college, boosting engagement,
              simplifying delivery, and strengthening outcomes for learners.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold text-amber-500">
              — James Muturi, <span className="italic">Principal, Target Training Institute</span>
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-50">
        <InstitutionSection
          title={
            <>
              TVET Institutions <span className="text-amber-500">Established by Us</span>
            </>
          }
          subtitle="We guided these institutions through the complete lifecycle—from name reservation and legal registration to physical inspection and final TVETA licensing."
          cards={establishedInstitutions}
          accent="bg-[#1e2a4a] hover:bg-[#26385f]"
        />
      </section>

      <InstitutionSection
        title={
          <>
            LMS <span className="text-amber-500">Deployed by Us</span>
          </>
        }
        subtitle="Institutions utilizing our custom Learning Management Systems to deliver compliant, blended, and online learning experiences."
        cards={lmsInstitutions}
        accent="bg-[#1e2a4a] hover:bg-[#26385f]"
      />

      <section className="bg-slate-50">
        <InstitutionSection
          title={
            <>
              <span className="text-amber-500">Specialized</span> Technical Solutions, Trainer Development{' '}
              <span className="text-amber-500">&amp; Support</span>
            </>
          }
          subtitle="We empower institutions with digital tools for administration and communication, while ensuring their teaching staff meets all regulatory licensing requirements."
          cards={specializedSolutions}
          accent="bg-[#1e2a4a] hover:bg-[#26385f]"
        />
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Explore Our <span className="text-amber-500">Moodle Plugins</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Enhance your institution&apos;s digital learning experience with our custom-built Moodle
              plugins designed to improve efficiency, streamline course delivery, and support stronger
              learner engagement. These tools integrate seamlessly with any TVET institution and are
              optimized for ease of use, performance, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plugins.map((plugin) => (
              <article
                key={plugin.title}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#1e2a4a] p-6 text-white shadow-md"
              >
                <h3 className="text-xl font-bold">{plugin.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90">{plugin.description}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-md border border-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#1e2a4a]"
                >
                  LEARN MORE
                </a>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-amber-500" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              What <span className="text-amber-500">Our Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm tracking-wide text-amber-500" aria-hidden="true">
                  ★★★★★
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-6 text-base font-bold text-[#1e2a4a]">{item.name}</p>
                <p className="mt-1 text-sm italic text-slate-500">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
