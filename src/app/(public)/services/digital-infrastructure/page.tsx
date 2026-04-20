import type { Metadata } from 'next';
import CostCalculator from '@/components/public/digital-infrastructure/CostCalculator';

export const metadata: Metadata = {
  title: 'Digital Infrastructure | Dapin Education',
  description:
    'Expert digital infrastructure solutions for TVET institutions, including LMS setup, e-learning content, integrations, and cost planning tools.',
};

const serviceCards = [
  {
    title: 'College Management System (CMS)',
    description:
      'Digitize admissions, attendance, and progress records with our robust systems, streamlining administration and ensuring full compliance with TVETA data standards.',
  },
  {
    title: 'Learning Management System (LMS)',
    description:
      'Enable effective online learning with user-friendly platforms that support interactive delivery, automated assessments, and real-time learner tracking for modern education.',
  },
  {
    title: 'Digital Library & E-Resources',
    description:
      'Meet mandatory facility requirements cost-effectively with digital libraries providing 24/7 access to approved e-books and resources for trainers and students.',
  },
  {
    title: 'Bulk SMS & Communication Integration',
    description:
      'Enhance student support with integrated bulk SMS. Instantly broadcast fee reminders, exam schedules, and urgent updates to students and guardians.',
  },
];

const clients = [
  'Predictive Analytics Training Institute',
  'Chancos Institute',
  'Learnfusion Training Centre',
  'KUC',
  'Eagle Creek College',
  'Target Training',
  'Evolutionary Training Centre',
  'Euntech Technical Training',
  'Gelian Technical College',
];

const includedItems = [
  {
    title: 'LMS Setup & Configuration',
    description:
      'We configure learning management systems with tailored features, essential integrations, and structured course frameworks that support effective delivery of online and blended training programs.',
  },
  {
    title: 'E-Learning Content Development',
    description:
      'We design digital learning materials and interactive course content aligned with industry expectations, improving accessibility, enhancing engagement, and supporting successful online learning experiences.',
  },
  {
    title: 'Digital Tools & Integration',
    description:
      'We integrate essential digital tools to support assessments, communication, automation, and data management, ensuring seamless learning experiences for trainers and students across platforms.',
  },
];

const pluginCards = [
  {
    title: 'Pesapal Payment Plugin',
    description:
      'Enable secure automated fee payments directly in Moodle with smooth checkout flows, reliable payment records, and faster reconciliation for institutions.',
  },
  {
    title: 'Modern LMS Themes',
    description:
      'Launch beautiful responsive Moodle interfaces that improve user experience, strengthen branding, and keep learners engaged across devices.',
  },
  {
    title: 'Proctoring Tools',
    description:
      'Protect online assessments with monitoring and verification tools that support exam integrity, reduce misconduct, and improve confidence in digital evaluations.',
  },
  {
    title: 'AI Marker',
    description:
      'Speed up grading with intelligent marking workflows that help trainers evaluate submissions consistently while reducing repetitive manual effort.',
  },
];

function CheckIcon() {
  return (
    <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
      ✓
    </span>
  );
}

function LmsIllustration() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-label="LMS dashboard illustration"
      fill="none"
    >
      <rect x="18" y="16" width="204" height="126" rx="10" fill="#1e2a4a" />
      <rect x="32" y="30" width="176" height="80" rx="8" fill="#fff" />
      <text x="120" y="78" textAnchor="middle" fill="#1e2a4a" fontSize="24" fontWeight="700">
        LMS
      </text>
      <rect x="86" y="148" width="68" height="10" rx="4" fill="#1e2a4a" />
      <rect x="70" y="160" width="100" height="10" rx="4" fill="#f59e0b" />
      <circle cx="46" cy="54" r="7" fill="#f59e0b" />
      <rect x="62" y="50" width="132" height="8" rx="4" fill="#e2e8f0" />
      <rect x="40" y="70" width="72" height="8" rx="4" fill="#cbd5e1" />
      <rect x="40" y="84" width="116" height="8" rx="4" fill="#cbd5e1" />
    </svg>
  );
}

export default function DigitalInfrastructurePage() {
  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl md:text-5xl">
              <span className="font-extrabold text-[#1e2a4a]">Expert Digital Infrastructure</span> for
              Modern Learning Delivery
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
              Our Digital Infrastructure service builds and optimizes online learning environments that
              support flexible, scalable, and high-quality training. We deploy LMS systems, develop
              e-learning content, integrate digital tools, and prepare institutions for effective online
              and blended instruction aligned with modern TVET needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-[#1e2a4a] px-6 py-3 text-sm font-semibold text-[#1e2a4a] transition-colors hover:bg-slate-100"
              >
                LEARN MORE
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
              >
                ACCESS THE DEMO
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <LmsIllustration />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#1e2a4a] p-6 text-white shadow-md"
              >
                <h2 className="text-lg font-bold leading-snug">{card.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90">{card.description}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-md border border-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#1e2a4a]"
                >
                  VIEW DEMO
                </a>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-amber-500" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
            Our <span className="text-amber-500">Clients</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client}
                className="flex min-h-[84px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-center text-sm font-semibold text-[#1e2a4a]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
            Sample <span className="text-amber-500">Learning Management System</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-44 items-center justify-center rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 text-sm font-medium text-slate-600">
                  LMS Preview {item}
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
                >
                  ACCESS THE DEMO
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              What Is <span className="text-amber-500 italic">Included</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Transforming institutions through powerful digital learning systems, LMS setup, e-learning
              content, and integrated tools that support online and blended TVET delivery.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#1e2a4a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#27375f]"
            >
              BOOK FREE CONSULTATION
            </a>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-72 items-center justify-center rounded-xl bg-white text-center text-lg font-bold text-[#1e2a4a] shadow-inner">
                Kenya Journal of TVET
                <br />
                (Placeholder)
              </div>
            </div>

            <div className="space-y-6">
              {includedItems.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <div>
                      <p className="text-sm font-semibold text-amber-500">0{index + 1}</p>
                      <h3 className="text-lg font-bold text-[#1e2a4a]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CostCalculator />

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Explore Our <span className="text-amber-500">Moodle Plugins</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Discover custom-built Moodle plugins designed to simplify operations, improve learner
              experience, and extend your platform with practical tools built for modern training
              institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {pluginCards.map((plugin, index) => (
              <article
                key={plugin.title}
                className="relative overflow-hidden rounded-2xl p-6 text-white shadow-md"
              >
                <div
                  className={`absolute inset-0 ${
                    index % 2 === 0
                      ? 'bg-gradient-to-br from-[#1e2a4a] via-[#24355f] to-[#0f172a]'
                      : 'bg-gradient-to-br from-[#1f3f6a] via-[#31598b] to-[#1e2a4a]'
                  }`}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="text-xl font-bold">{plugin.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/90">{plugin.description}</p>
                  <a
                    href="#"
                    className="mt-6 inline-flex w-fit items-center justify-center rounded-md border border-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#1e2a4a]"
                  >
                    LEARN MORE
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
