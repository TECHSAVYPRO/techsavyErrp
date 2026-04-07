// Public-facing header — placeholder until Figma design is implemented
export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">Dapin Edu</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
            About
          </a>
          <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
            Services
          </a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
