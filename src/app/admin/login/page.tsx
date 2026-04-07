import type { Metadata } from 'next';
import LoginForm from '@/components/admin/LoginForm';

export const metadata: Metadata = {
  title: 'Admin Login',
  description: 'Sign in to Dapin Edu admin dashboard',
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-8 py-8 text-center" style={{ backgroundColor: '#1a1a2e' }}>
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">DE</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Dapin Edu</h1>
            <p className="text-gray-400 text-sm mt-1">Admin Dashboard</p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Welcome back</h2>
              <p className="text-sm text-gray-500 mt-1">Sign in to your admin account</p>
            </div>
            <LoginForm />
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Dapin Edu. All rights reserved.
        </p>
      </div>
    </div>
  );
}
