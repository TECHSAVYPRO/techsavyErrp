'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer?: string;
};

const faqItems: FaqItem[] = [
  {
    question: 'Do I need expensive servers?',
    answer: 'No, we offer cloud-hosted solutions that remove the need for physical hardware maintenance.',
  },
  {
    question: 'Can students pay fees through the portal?',
    answer:
      'Yes, our Pesapal Payment Plugin integration allows for seamless mobile money and card transactions directly on the site.',
  },
  {
    question: 'Is the system difficult for trainers to use?',
  },
];

export default function FaqAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1]);

  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {faqItems.map((item, index) => {
        const isOpen = openItems.includes(index);

        return (
          <article key={item.question} className="border-t-2 border-amber-500 py-4 first:pt-2">
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="flex w-full items-start justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-[#1e2a4a]">{item.question}</span>
              <span className="mt-0.5 text-2xl font-medium leading-none text-[#1e2a4a]" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && item.answer ? <p className="mt-3 text-sm leading-relaxed text-amber-500">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
