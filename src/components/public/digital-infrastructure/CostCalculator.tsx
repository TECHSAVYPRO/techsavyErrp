'use client';

import { useMemo, useState } from 'react';

type ConsultationPlan = 'session' | 'retainer';
type PolicyKey = 'strategic' | 'attachment' | 'exam' | 'hr';

const serviceOptions = [
  { value: '', label: 'Select the type of service' },
  { value: 'consultation', label: 'TVET Consultation' },
  { value: 'policy', label: 'Policy Development' },
  { value: 'data', label: 'Data Management' },
  { value: 'full', label: 'Full Digital Infrastructure Setup' },
];

const serviceTypeLabels: Record<string, string> = {
  consultation: 'TVET Consultation',
  policy: 'Policy Development',
  data: 'Data Management',
  full: 'Full Digital Infrastructure Setup',
};

const consultationCosts: Record<ConsultationPlan, number> = {
  session: 3000,
  retainer: 5000,
};

const policyCosts: Record<PolicyKey, number> = {
  strategic: 10000,
  attachment: 10000,
  exam: 10000,
  hr: 15000,
};

function formatKes(value: number) {
  return `${value.toLocaleString('en-KE')} KES`;
}

export default function CostCalculator() {
  const [serviceType, setServiceType] = useState('');
  const [consultationPlan, setConsultationPlan] = useState<ConsultationPlan>('session');
  const [selectedPolicies, setSelectedPolicies] = useState<Record<PolicyKey, boolean>>({
    strategic: false,
    attachment: false,
    exam: false,
    hr: false,
  });
  const [portalDataEntry, setPortalDataEntry] = useState(false);

  const summaryItems = useMemo(() => {
    const items: Array<{ label: string; qty: number; amount: number }> = [];
    const includeConsultation = serviceType === 'consultation' || serviceType === 'full';
    const includePolicies = serviceType === 'policy' || serviceType === 'full';
    const includeData = serviceType === 'data' || serviceType === 'full';

    if (serviceType) {
      items.push({
        label: `Selected Type of Service — ${serviceTypeLabels[serviceType] ?? serviceType}`,
        qty: 1,
        amount: 0,
      });
    }

    if (includeConsultation) {
      items.push({
        label:
          consultationPlan === 'session'
            ? 'TVET Consultation — Per Session'
            : 'TVET Consultation — Retainer/Full Time',
        qty: 1,
        amount: consultationCosts[consultationPlan],
      });
    }

    if (includePolicies && selectedPolicies.strategic) {
      items.push({ label: 'Policy Development — Strategic Plan', qty: 1, amount: policyCosts.strategic });
    }

    if (includePolicies && selectedPolicies.attachment) {
      items.push({ label: 'Policy Development — Attachment Policy', qty: 1, amount: policyCosts.attachment });
    }

    if (includePolicies && selectedPolicies.exam) {
      items.push({ label: 'Policy Development — Exam Policy', qty: 1, amount: policyCosts.exam });
    }

    if (includePolicies && selectedPolicies.hr) {
      items.push({ label: 'Policy Development — HR Policy', qty: 1, amount: policyCosts.hr });
    }

    if (includeData && portalDataEntry) {
      items.push({ label: 'Data Management — TVETA Portal Data Entry', qty: 1, amount: 5000 });
    }

    return items;
  }, [serviceType, consultationPlan, selectedPolicies, portalDataEntry]);

  const totalCost = useMemo(
    () => summaryItems.reduce((total, item) => total + item.amount * item.qty, 0),
    [summaryItems],
  );

  const togglePolicy = (key: PolicyKey) => {
    setSelectedPolicies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
            Explore Our <span className="text-amber-500">Cost Calculator</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Get a quick estimate of your TVET setup costs based on your institution type, courses, and
            required services. Use it to plan confidently and understand what you&apos;ll need from the
            start.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <label htmlFor="serviceType" className="mb-2 block text-sm font-semibold text-[#1e2a4a]">
              Type of Service
            </label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(event) => setServiceType(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 focus:border-amber-500 focus:outline-none"
            >
              {serviceOptions.map((option) => (
                <option key={option.value || 'placeholder'} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <fieldset className="mt-8 rounded-xl bg-white p-5">
              <legend className="px-1 text-base font-bold text-[#1e2a4a]">TVET Consultation</legend>
              <div className="mt-4 space-y-3">
                <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="consultationPlan"
                      checked={consultationPlan === 'session'}
                      onChange={() => setConsultationPlan('session')}
                      className="h-4 w-4 border-slate-300 text-amber-500 focus:ring-amber-400"
                    />
                    Per Session
                  </span>
                  <span className="font-semibold text-[#1e2a4a]">3,000 KES</span>
                </label>

                <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="consultationPlan"
                      checked={consultationPlan === 'retainer'}
                      onChange={() => setConsultationPlan('retainer')}
                      className="h-4 w-4 border-slate-300 text-amber-500 focus:ring-amber-400"
                    />
                    Retainer/Full Time
                  </span>
                  <span className="font-semibold text-[#1e2a4a]">5,000 KES</span>
                </label>
              </div>
            </fieldset>

            <fieldset className="mt-5 rounded-xl bg-white p-5">
              <legend className="px-1 text-base font-bold text-[#1e2a4a]">Policy Development</legend>
              <div className="mt-4 space-y-3">
                <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedPolicies.strategic}
                      onChange={() => togglePolicy('strategic')}
                      className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                    />
                    Strategic Plan
                  </span>
                  <span className="font-semibold text-[#1e2a4a]">10,000 KES</span>
                </label>

                <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedPolicies.attachment}
                      onChange={() => togglePolicy('attachment')}
                      className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                    />
                    Attachment Policy
                  </span>
                  <span className="font-semibold text-[#1e2a4a]">10,000 KES</span>
                </label>

                <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedPolicies.exam}
                      onChange={() => togglePolicy('exam')}
                      className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                    />
                    Exam Policy
                  </span>
                  <span className="font-semibold text-[#1e2a4a]">10,000 KES</span>
                </label>

                <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedPolicies.hr}
                      onChange={() => togglePolicy('hr')}
                      className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                    />
                    HR Policy
                  </span>
                  <span className="font-semibold text-[#1e2a4a]">15,000 KES</span>
                </label>
              </div>
            </fieldset>

            <fieldset className="mt-5 rounded-xl bg-white p-5">
              <legend className="px-1 text-base font-bold text-[#1e2a4a]">Data Management</legend>
              <div className="mt-4">
                <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={portalDataEntry}
                      onChange={() => setPortalDataEntry((prev) => !prev)}
                      className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                    />
                    TVETA Portal Data Entry
                  </span>
                  <span className="font-semibold text-[#1e2a4a]">5,000 KES</span>
                </label>
              </div>
            </fieldset>
          </div>

          <aside className="h-fit rounded-2xl bg-[#1e2a4a] p-6 text-white shadow-md sm:p-8">
            <h3 className="text-xl font-bold">Your Quote Summary</h3>
            <div className="mt-5 space-y-4">
              {summaryItems.length === 0 ? (
                <p className="text-sm text-white/80">No items selected yet.</p>
              ) : (
                summaryItems.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/15 p-3 text-sm">
                    <p className="font-medium text-white">{item.label}</p>
                    <div className="mt-1 flex items-center justify-between text-white/80">
                      <span>Qty: {item.qty}</span>
                      <span>{formatKes(item.amount)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 rounded-lg bg-white/10 p-4">
              <p className="text-sm text-white/75">Total Estimated Cost</p>
              <p className="mt-1 text-2xl font-bold text-green-300">{formatKes(totalCost)}</p>
            </div>

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-amber-600"
            >
              Download Quote
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
