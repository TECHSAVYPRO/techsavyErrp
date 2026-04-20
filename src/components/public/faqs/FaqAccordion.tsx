'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: 'What services does Dapin Edu offer to TVET institutions?',
    answer:
      'We provide college setup support, compliance guidance, digital learning solutions, trainer development, and Moodle plugin implementation.',
  },
  {
    question: 'Do you assist with TVET accreditation and regulatory requirements?',
    answer:
      'Yes. We guide institutions through accreditation and compliance requirements, including documentation, process planning, and regulatory alignment.',
  },
  {
    question: 'Can you help us set up an online college or e-learning platform?',
    answer:
      'Absolutely. We support institutions with LMS setup, e-learning content structuring, digital infrastructure planning, and platform implementation.',
  },
  {
    question: 'How can we book a consultation with your team?',
    answer:
      'You can book a free consultation through our website to discuss your institution\'s goals and receive personalized guidance from our team.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="border-t-2 border-amber-500 py-4 first:pt-2">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-start justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-[#1e2a4a]">{item.question}</span>
              <span className="mt-0.5 text-2xl font-medium leading-none text-[#1e2a4a]" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen ? <p className="mt-3 text-sm leading-relaxed text-amber-500">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
