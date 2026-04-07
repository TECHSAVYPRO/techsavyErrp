'use client';

const clients = [
  { name: 'Predictive Analytics Training Institute', img: '/images/clients/predictive-analytics.png' },
  { name: 'Institute 2', img: '/images/clients/institute-2.png' },
  { name: 'Learnfusion Training Centre', img: '/images/clients/learnfusion.png' },
  { name: 'KUC', img: '/images/clients/kuc.png' },
  { name: 'Eagle Creek College', img: '/images/clients/eagle-creek.png' },
  { name: 'Target Training Center', img: '/images/clients/target-training.png' },
  { name: 'Evolutionary Training Center', img: '/images/clients/evolutionary.png' },
  { name: 'Euntech', img: '/images/clients/euntech.png' },
  { name: 'Gelan Technical College', img: '/images/clients/gelan-technical.png' },
];

function ClientLogo({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 px-4" title={name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={name}
        className="w-24 h-20 object-contain"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      {/* Fallback placeholder shown if image fails to load */}
      <div
        className="w-24 h-20 rounded-xl bg-gray-100 items-center justify-center text-gray-500 text-xs font-semibold text-center p-2 leading-tight hidden"
        aria-hidden="true"
      >
        {name}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1B1B3A] mb-8">
          Our <span className="text-[#E8792B]">Clients</span>
        </h2>
      </div>

      {/* Marquee container — full width, overflow hidden */}
      <div className="overflow-hidden w-full" role="region" aria-label="Our clients">
        <div className="flex clients-marquee">
          {/* First copy */}
          {clients.map((client) => (
            <ClientLogo key={`a-${client.name}`} name={client.name} img={client.img} />
          ))}
          {/* Duplicate for seamless infinite loop */}
          <div aria-hidden={true} className="flex">
            {clients.map((client) => (
              <ClientLogo key={`b-${client.name}`} name={client.name} img={client.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
