import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Dapin Edu - Quality Education for Everyone',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Placeholder - will be replaced with Figma design implementation */}
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Dapin Edu</h1>
          <p className="text-xl text-gray-600 mb-8">
            Quality Education for Everyone
          </p>
          <p className="text-gray-500">
            Page implementation coming soon — Figma design will be applied here.
          </p>
        </div>
      </section>
    </div>
  );
}
