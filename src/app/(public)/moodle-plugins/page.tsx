import type { Metadata } from 'next';
import FaqAccordion from '@/components/public/moodle-plugins/FaqAccordion';

export const metadata: Metadata = {
  title: 'Moodle Plugins | Dapin Education',
};

const setupCards = [
  {
    title: 'LMS Setup & Configuration',
    description:
      'We structure learning management systems with optimized layouts, essential integrations, and user-friendly frameworks that support the effective delivery of online and blended learning programs.',
  },
  {
    title: 'E-Learning Content Development',
    description:
      'We design learning materials and modules tailored for digital formats with interactive elements to improve accessibility, enhance engagement, and boost learning outcomes for the online experience.',
  },
  {
    title: 'Digital Tools & Integration',
    description:
      'We seamlessly integrate digital tools to support assessment, communication, and student data management, ensuring a smooth learning ecosystem for trainers and students across platforms.',
  },
];

const plugins = [
  {
    title: 'Pesapal Payment Plugin',
    description:
      'Enable secure, automated fee payments directly inside your LMS using Pesapal. This plugin simplifies student transactions, supports mobile money, cards, and bank options, and ensures smooth financial reconciliation for your institution.',
  },
  {
    title: 'Modern LMS Themes',
    description:
      "Upgrade your LMS interface with beautiful, responsive, and professionally designed themes. These modern layouts improve student engagement, enhance usability, and make your institution's digital learning environment look clean, polished, and fully branded.",
  },
  {
    title: 'Proctoring Tools',
    description:
      'Protect the integrity of online exams with advanced proctoring. Our tools offer identity verification, activity monitoring, automated cheating alerts, and secure test environments to ensure fair assessments for all learners.',
  },
  {
    title: 'AI Marker',
    description:
      'Automate grading and feedback using AI-powered assessment tools. AI Marker analyzes student submissions, generates accurate feedback, reduces trainer workload, and improves consistency in scoring across large classes.',
  },
];

const featureChecklist = [
  {
    title: 'Real-Time Analytics',
    description: 'Track student login times, course completion rates, and assessment scores instantly.',
  },
  {
    title: 'Mobile-First Design',
    description:
      'Fully responsive interfaces that allow students to learn on smartphones, tablets, or laptops.',
  },
  {
    title: 'Secure Exam Portal',
    description: 'Locked browser capabilities and timed quizzes to maintain assessment integrity.',
  },
  {
    title: 'Integrated Virtual Classroom',
    description: 'Seamless links to Zoom, Google Meet, or Microsoft Teams for live sessions.',
  },
  {
    title: 'Automated Certification',
    description:
      'Auto-generate and email certificates to students upon successful course completion.',
  },
  {
    title: 'Automated Attendance Tracking',
    description:
      'System-generated logs that record student login times and participation in live sessions, replacing manual registers and ensuring compliance with TVETA attendance standards.',
  },
];

const clientLogos = [
  'Predictive Analytics Training Institute',
  'Chancos Institute',
  'Learnfusion Training Centre',
  'KUC',
  'Eagle Creek College',
  'Target Training',
  'Evolutionary Training Centre',
  'Euntech',
];

function CheckIcon() {
  return (
    <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
      ✓
    </span>
  );
}

export default function MoodlePluginsPage() {
  return (
    <div className="bg-white">
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl md:text-5xl">
              Digital <span className="text-amber-500">LMS Setup</span>
            </h1>
            <p className="mt-4 text-base text-slate-600">What is included in our setup package:</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {setupCards.map((card) => (
              <article
                key={card.title}
                className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-[#1e2a4a] p-6 text-white shadow-md"
              >
                <h2 className="text-xl font-bold leading-snug">{card.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90">{card.description}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-md border border-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#1e2a4a]"
                >
                  VIEW DEMO
                </a>
                <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-tl-[1.5rem] bg-amber-500" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((screenshotNumber) => (
              <div
                key={screenshotNumber}
                className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex h-44 items-center justify-center rounded-xl bg-slate-200 text-sm font-medium text-slate-600">
                  LMS Screenshot {screenshotNumber}
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

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Our <span className="text-amber-500">Moodle Plugins</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Enhance your institution&apos;s digital learning experience with our specialized plugins
              designed to improve efficiency and revenue management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-tl-[1.5rem] bg-amber-500" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              LMS <span className="text-amber-500">Features Checklist</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featureChecklist.map((feature) => (
              <article key={feature.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <h3 className="text-lg font-bold text-[#1e2a4a]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Trusted by <span className="text-amber-500">Leading Institutions</span>
            </h2>
            <p className="mt-4 text-slate-600">
              We have successfully deployed digital learning infrastructures for institutions like Eagle
              Creek College, Brighter Minds Technical, and JobPlus MHS College, enabling them to offer
              flexible, modern education to hundreds of students.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {clientLogos.map((client) => (
              <div
                key={client}
                className="flex min-h-[90px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 text-center text-xs font-semibold text-[#1e2a4a]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
              Frequently Asked Questions <span className="text-amber-500">(FAQs)</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Find answers to common questions about setup, payments, and day-to-day use of our Moodle
              services.
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

            <ul className="mt-8 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span aria-hidden="true">📍</span>
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">📞</span>
                <a href="tel:+254708518641" className="hover:text-amber-500">
                  +254 708 518 641
                </a>
              </li>
            </ul>
          </div>

          <div>
            <FaqAccordion />
          </div>
        </div>
      </section>
    </div>
  );
}
