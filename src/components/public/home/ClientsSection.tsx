const clients = [
  { name: 'Predictive Analytics Training Institute', abbr: 'PATI' },
  { name: 'Learnfusion Training Centre', abbr: 'LTC' },
  { name: 'KUC', abbr: 'KUC' },
  { name: 'Eagle Creek College', abbr: 'ECC' },
  { name: 'Target Training Center', abbr: 'TTC' },
  { name: 'Evolutionary Training Center', abbr: 'ETC' },
  { name: 'Euntech', abbr: 'ETH' },
  { name: 'Gelan Technical College', abbr: 'GTC' },
];

export default function ClientsSection() {
  return (
    <section className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1B1B3A] mb-8">
          Our <span className="text-[#E8792B]">Clients</span>
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          {clients.map((client) => (
            <div
              key={client.abbr}
              className="flex flex-col items-center justify-center bg-gray-50 rounded-xl px-5 py-4 min-w-[110px] hover:shadow-md transition-shadow"
              title={client.name}
            >
              {/* Logo placeholder circle */}
              <div className="w-12 h-12 rounded-full bg-[#1B1B3A] flex items-center justify-center text-white font-bold text-sm mb-2">
                {client.abbr.slice(0, 2)}
              </div>
              <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight max-w-[80px]">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
