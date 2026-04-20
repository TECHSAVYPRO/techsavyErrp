'use client';

import { useMemo, useState } from 'react';

type SummaryItem = {
  label: string;
  qty: number;
  amount: number;
};

const serviceTypeOptions = [
  'TVET Consultation',
  'TVET Establishment',
  'TVET Digital Infrastructure',
  'Trainer Development',
];

const institutionTypes = ['Physical Campus', 'Virtual Campus', 'Hybrid Campus'];

function formatKes(value: number) {
  return `${value.toLocaleString('en-KE')} KES`;
}

function QuoteSummary({ items, total }: { items: SummaryItem[]; total: number }) {
  return (
    <aside className="h-fit rounded-2xl bg-[#1e2a4a] p-6 text-white shadow-md sm:p-8">
      <h3 className="text-xl font-bold">Your Quote Summary</h3>
      <div className="mt-5 space-y-4">
        {items.length === 0 ? (
          <p className="text-sm text-white/80">No items selected yet.</p>
        ) : (
          items.map((item) => (
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
        <p className="mt-1 text-2xl font-bold text-green-300">{formatKes(total)}</p>
      </div>
      <a
        href="#"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-amber-600"
      >
        Download Quote
      </a>
    </aside>
  );
}

function SelectTypeOfService({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#1e2a4a]">
        Select the type of service
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 focus:border-amber-500 focus:outline-none"
      >
        {serviceTypeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function CostCalculatorPage() {
  const [serviceTypeOne, setServiceTypeOne] = useState('TVET Consultation');
  const [consultationPlan, setConsultationPlan] = useState<'session' | 'retainer'>('session');
  const [policySelections, setPolicySelections] = useState({
    strategicPlan: false,
    attachmentPolicy: false,
    examPolicy: false,
    hrPolicy: false,
  });
  const [portalDataEntry, setPortalDataEntry] = useState(false);

  const summaryOne = useMemo(() => {
    const items: SummaryItem[] = [{ label: `Type of Service — ${serviceTypeOne}`, qty: 1, amount: 0 }];

    items.push({
      label: consultationPlan === 'session' ? 'Per Session' : 'Retainer/Full Time',
      qty: 1,
      amount: consultationPlan === 'session' ? 3000 : 5000,
    });

    if (policySelections.strategicPlan) items.push({ label: 'Strategic Plan', qty: 1, amount: 10000 });
    if (policySelections.attachmentPolicy) items.push({ label: 'Attachment Policy', qty: 1, amount: 10000 });
    if (policySelections.examPolicy) items.push({ label: 'Exam Policy', qty: 1, amount: 10000 });
    if (policySelections.hrPolicy) items.push({ label: 'HR Policy', qty: 1, amount: 15000 });
    if (portalDataEntry) items.push({ label: 'TVETA Portal Data Entry', qty: 1, amount: 5000 });

    return items;
  }, [consultationPlan, policySelections, portalDataEntry, serviceTypeOne]);

  const totalOne = useMemo(() => summaryOne.reduce((sum, item) => sum + item.amount, 0), [summaryOne]);

  const [serviceTypeTwo, setServiceTypeTwo] = useState('TVET Establishment');
  const [institutionType, setInstitutionType] = useState('Physical Campus');
  const [paperworkBundle, setPaperworkBundle] = useState(false);
  const [policyBundle, setPolicyBundle] = useState(false);
  const [curriculums, setCurriculums] = useState(1);
  const [siteVisitDays, setSiteVisitDays] = useState(3);

  const summaryTwo = useMemo(() => {
    const items: SummaryItem[] = [
      { label: `Type of Service — ${serviceTypeTwo}`, qty: 1, amount: 0 },
      { label: `Institution Type — ${institutionType}`, qty: 1, amount: 0 },
    ];

    if (paperworkBundle) items.push({ label: 'Paperwork Bundle', qty: 1, amount: 20000 });
    if (policyBundle) items.push({ label: 'Policy Bundle', qty: 1, amount: 30000 });
    if (curriculums > 0) items.push({ label: 'Curriculums', qty: curriculums, amount: curriculums * 1000 });
    if (siteVisitDays > 0) {
      items.push({ label: 'Physical Site Visits (Days)', qty: siteVisitDays, amount: siteVisitDays * 5000 });
    }

    return items;
  }, [curriculums, institutionType, paperworkBundle, policyBundle, serviceTypeTwo, siteVisitDays]);

  const totalTwo = useMemo(() => summaryTwo.reduce((sum, item) => sum + item.amount, 0), [summaryTwo]);

  const [serviceTypeThree, setServiceTypeThree] = useState('TVET Digital Infrastructure');
  const [moodleSetup, setMoodleSetup] = useState(false);
  const [userLicences, setUserLicences] = useState(50);
  const [senderIdRegistration, setSenderIdRegistration] = useState(false);
  const [costPerSms, setCostPerSms] = useState(false);
  const [erpSetup, setErpSetup] = useState(false);

  const summaryThree = useMemo(() => {
    const items: SummaryItem[] = [{ label: `Type of Service — ${serviceTypeThree}`, qty: 1, amount: 0 }];

    if (moodleSetup) items.push({ label: 'Moodle LMS Setup', qty: 1, amount: 50000 });
    if (userLicences > 0) items.push({ label: 'User Licences', qty: userLicences, amount: userLicences * 1000 });
    if (senderIdRegistration) items.push({ label: 'Sender ID Registration', qty: 1, amount: 8000 });
    if (costPerSms) items.push({ label: 'Cost Per SMS', qty: 1, amount: 0.5 });
    if (erpSetup) items.push({ label: 'College Management ERP — Setup Cost', qty: 1, amount: 6000 });

    return items;
  }, [costPerSms, erpSetup, moodleSetup, senderIdRegistration, serviceTypeThree, userLicences]);

  const totalThree = useMemo(() => summaryThree.reduce((sum, item) => sum + item.amount, 0), [summaryThree]);

  const [serviceTypeFour, setServiceTypeFour] = useState('Trainer Development');
  const [capacityWorkshop, setCapacityWorkshop] = useState(false);
  const [trainerRecruitmentQty, setTrainerRecruitmentQty] = useState(50);
  const [licensingQty, setLicensingQty] = useState(5);

  const summaryFour = useMemo(() => {
    const items: SummaryItem[] = [{ label: `Type of Service — ${serviceTypeFour}`, qty: 1, amount: 0 }];

    if (capacityWorkshop) items.push({ label: 'Capacity Building Workshop', qty: 1, amount: 6000 });
    if (trainerRecruitmentQty > 0) {
      items.push({ label: 'Trainer Recruitment', qty: trainerRecruitmentQty, amount: trainerRecruitmentQty * 3000 });
    }
    if (licensingQty > 0) items.push({ label: 'Licensing Application', qty: licensingQty, amount: licensingQty * 500 });

    return items;
  }, [capacityWorkshop, licensingQty, serviceTypeFour, trainerRecruitmentQty]);

  const totalFour = useMemo(() => summaryFour.reduce((sum, item) => sum + item.amount, 0), [summaryFour]);

  const updatePolicy = (key: keyof typeof policySelections) => {
    setPolicySelections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
            Explore Our <span className="text-amber-500">Cost Calculator</span>
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Get a quick estimate of your TVET setup costs based on your institution type, courses, and required
            services. Use it to plan confidently and understand what you&apos;ll need from the start.
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <SelectTypeOfService id="service-type-1" value={serviceTypeOne} onChange={setServiceTypeOne} />

                <fieldset className="mt-6 rounded-xl bg-white p-5">
                  <legend className="px-1 text-base font-bold text-[#1e2a4a]">TVET Consultation</legend>
                  <div className="mt-4 space-y-3">
                    <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                      <span className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="consultation-plan"
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
                          name="consultation-plan"
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
                          checked={policySelections.strategicPlan}
                          onChange={() => updatePolicy('strategicPlan')}
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
                          checked={policySelections.attachmentPolicy}
                          onChange={() => updatePolicy('attachmentPolicy')}
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
                          checked={policySelections.examPolicy}
                          onChange={() => updatePolicy('examPolicy')}
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
                          checked={policySelections.hrPolicy}
                          onChange={() => updatePolicy('hrPolicy')}
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

              <QuoteSummary items={summaryOne} total={totalOne} />
            </div>
          </section>

          <hr className="border-slate-200" />

          <section>
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <SelectTypeOfService id="service-type-2" value={serviceTypeTwo} onChange={setServiceTypeTwo} />

                <h2 className="mt-6 text-2xl font-bold text-[#1e2a4a]">TVET Establishment</h2>
                <p className="mt-1 text-sm font-semibold text-slate-500">Configure Your Service Package</p>

                <div className="mt-5">
                  <label htmlFor="institution-type" className="mb-2 block text-sm font-semibold text-[#1e2a4a]">
                    Institution Type
                  </label>
                  <select
                    id="institution-type"
                    value={institutionType}
                    onChange={(event) => setInstitutionType(event.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 focus:border-amber-500 focus:outline-none"
                  >
                    {institutionTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset className="mt-5 rounded-xl bg-white p-5">
                  <legend className="px-1 text-base font-bold text-[#1e2a4a]">Add-on Bundles</legend>
                  <div className="mt-4 space-y-3">
                    <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={paperworkBundle}
                          onChange={() => setPaperworkBundle((prev) => !prev)}
                          className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                        />
                        Paperwork Bundle
                      </span>
                      <span className="font-semibold text-[#1e2a4a]">20,000 KES</span>
                    </label>
                    <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={policyBundle}
                          onChange={() => setPolicyBundle((prev) => !prev)}
                          className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                        />
                        Policy Bundle
                      </span>
                      <span className="font-semibold text-[#1e2a4a]">30,000 KES</span>
                    </label>
                  </div>
                </fieldset>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <label htmlFor="curriculums" className="text-base font-bold text-[#1e2a4a]">
                    Curriculums <span className="text-sm font-semibold text-slate-500">(KES 1,000/curriculum)</span>
                  </label>
                  <div className="mt-3 flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3">
                    <span className="font-semibold text-[#1e2a4a]">KES 1,000</span>
                    <input
                      id="curriculums"
                      type="number"
                      min={0}
                      value={curriculums}
                      onChange={(event) => setCurriculums(Math.max(0, Number(event.target.value) || 0))}
                      className="w-24 rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1e2a4a]"
                    />
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <p className="text-base font-bold text-[#1e2a4a]">Physical Site Visits (Days)</p>
                  <div className="mt-3 flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3">
                    <span className="font-semibold text-[#1e2a4a]">KES 5,000 per day</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSiteVisitDays((prev) => Math.max(0, prev - 1))}
                        className="h-9 w-9 rounded-full border border-slate-300 text-lg font-semibold text-[#1e2a4a]"
                        aria-label="Decrease site visit days"
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center font-semibold text-[#1e2a4a]">{siteVisitDays}</span>
                      <button
                        type="button"
                        onClick={() => setSiteVisitDays((prev) => prev + 1)}
                        className="h-9 w-9 rounded-full border border-slate-300 text-lg font-semibold text-[#1e2a4a]"
                        aria-label="Increase site visit days"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <QuoteSummary items={summaryTwo} total={totalTwo} />
            </div>
          </section>

          <hr className="border-slate-200" />

          <section>
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <SelectTypeOfService id="service-type-3" value={serviceTypeThree} onChange={setServiceTypeThree} />

                <h2 className="mt-6 text-2xl font-bold text-[#1e2a4a]">TVET Digital Infrastructure</h2>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                    <span className="font-semibold text-[#1e2a4a]">Moodle LMS Setup — KES 50,000</span>
                    <button
                      type="button"
                      onClick={() => setMoodleSetup((prev) => !prev)}
                      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                        moodleSetup ? 'bg-amber-500' : 'bg-slate-300'
                      }`}
                      aria-pressed={moodleSetup}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                          moodleSetup ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                </div>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <label htmlFor="user-licences" className="text-base font-bold text-[#1e2a4a]">
                    User Licences <span className="text-sm font-semibold text-slate-500">(KES 1,000/User)</span>
                  </label>
                  <div className="mt-3 flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3">
                    <span className="font-semibold text-[#1e2a4a]">KES 1,000 each</span>
                    <div className="flex items-center gap-2">
                      <input
                        id="user-licences"
                        type="number"
                        min={0}
                        value={userLicences}
                        onChange={(event) => setUserLicences(Math.max(0, Number(event.target.value) || 0))}
                        className="w-24 rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1e2a4a]"
                      />
                      <span className="text-sm font-semibold text-slate-500">Users</span>
                    </div>
                  </div>
                </div>

                <fieldset className="mt-5 rounded-xl bg-white p-5">
                  <legend className="px-1 text-base font-bold text-[#1e2a4a]">Bulk SMS Integration</legend>
                  <div className="mt-4 space-y-3">
                    <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={senderIdRegistration}
                          onChange={() => setSenderIdRegistration((prev) => !prev)}
                          className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                        />
                        Sender ID Registration
                      </span>
                      <span className="font-semibold text-[#1e2a4a]">8,000 KES</span>
                    </label>
                    <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={costPerSms}
                          onChange={() => setCostPerSms((prev) => !prev)}
                          className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                        />
                        Cost Per SMS
                      </span>
                      <span className="font-semibold text-[#1e2a4a]">0.5 KES</span>
                    </label>
                  </div>
                </fieldset>

                <fieldset className="mt-5 rounded-xl bg-white p-5">
                  <legend className="px-1 text-base font-bold text-[#1e2a4a]">College Management ERP</legend>
                  <div className="mt-4">
                    <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={erpSetup}
                          onChange={() => setErpSetup((prev) => !prev)}
                          className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                        />
                        Setup Cost
                      </span>
                      <span className="font-semibold text-[#1e2a4a]">6,000 KES</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <QuoteSummary items={summaryThree} total={totalThree} />
            </div>
          </section>

          <hr className="border-slate-200" />

          <section>
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <SelectTypeOfService id="service-type-4" value={serviceTypeFour} onChange={setServiceTypeFour} />

                <h2 className="mt-6 text-2xl font-bold text-[#1e2a4a]">Trainer Development</h2>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={capacityWorkshop}
                        onChange={() => setCapacityWorkshop((prev) => !prev)}
                        className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                      />
                      Capacity Building Workshop
                    </span>
                    <span className="font-semibold text-[#1e2a4a]">6,000 KES</span>
                  </label>
                </div>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <label htmlFor="trainer-recruitment" className="text-base font-bold text-[#1e2a4a]">
                    Trainer Recruitment <span className="text-sm font-semibold text-slate-500">(KES 3,000/Trainer)</span>
                  </label>
                  <div className="mt-3 flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3">
                    <span className="font-semibold text-[#1e2a4a]">KES 3,000</span>
                    <input
                      id="trainer-recruitment"
                      type="number"
                      min={0}
                      value={trainerRecruitmentQty}
                      onChange={(event) => setTrainerRecruitmentQty(Math.max(0, Number(event.target.value) || 0))}
                      className="w-24 rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1e2a4a]"
                    />
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <label htmlFor="licensing-application" className="text-base font-bold text-[#1e2a4a]">
                    Licensing Application <span className="text-sm font-semibold text-slate-500">(KES 500/Trainer)</span>
                  </label>
                  <div className="mt-3 flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3">
                    <span className="font-semibold text-[#1e2a4a]">KES 500</span>
                    <input
                      id="licensing-application"
                      type="number"
                      min={0}
                      value={licensingQty}
                      onChange={(event) => setLicensingQty(Math.max(0, Number(event.target.value) || 0))}
                      className="w-24 rounded-md border border-slate-300 px-3 py-2 text-sm text-[#1e2a4a]"
                    />
                  </div>
                </div>
              </div>

              <QuoteSummary items={summaryFour} total={totalFour} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
