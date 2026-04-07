import type { Metadata } from 'next';
import Link from 'next/link';
import { query } from '@/lib/db';
import { DashboardStats } from '@/types';

export const metadata: Metadata = {
  title: 'Dashboard',
};

async function getStats(): Promise<DashboardStats> {
  try {
    const [pagesCount] = await query<{ count: number }>('SELECT COUNT(*) as count FROM pages');
    const [sectionsCount] = await query<{ count: number }>('SELECT COUNT(*) as count FROM sections');
    const [mediaCount] = await query<{ count: number }>('SELECT COUNT(*) as count FROM media');
    const recentPages = await query('SELECT * FROM pages ORDER BY created_at DESC LIMIT 5');
    const recentMedia = await query('SELECT * FROM media ORDER BY created_at DESC LIMIT 5');

    return {
      totalPages: pagesCount?.count || 0,
      totalSections: sectionsCount?.count || 0,
      totalMedia: mediaCount?.count || 0,
      recentPages: recentPages as never,
      recentMedia: recentMedia as never,
    };
  } catch {
    return { totalPages: 0, totalSections: 0, totalMedia: 0, recentPages: [], recentMedia: [] };
  }
}

interface StatCardProps {
  label: string;
  value: number;
  href: string;
  color: string;
  icon: React.ReactNode;
}

function StatCard({ label, value, href, color, icon }: StatCardProps) {
  return (
    <Link href={href} className="stat-card hover:shadow-md transition-shadow group">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {value.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </Link>
  );
}

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
        <p className="text-gray-500 text-sm mt-1">Welcome to your admin dashboard</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Total Pages"
          value={stats.totalPages}
          href="/admin/dashboard/pages"
          color="bg-blue-100 text-blue-600"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
        />
        <StatCard
          label="Total Sections"
          value={stats.totalSections}
          href="/admin/dashboard/sections"
          color="bg-green-100 text-green-600"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          }
        />
        <StatCard
          label="Media Files"
          value={stats.totalMedia}
          href="/admin/dashboard/media"
          color="bg-purple-100 text-purple-600"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      {/* Quick Actions */}
      <div className="admin-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'New Page', href: '/admin/dashboard/pages', icon: '📄' },
            { label: 'New Section', href: '/admin/dashboard/sections', icon: '📋' },
            { label: 'Upload Media', href: '/admin/dashboard/media', icon: '🖼️' },
            { label: 'Settings', href: '/admin/dashboard/settings', icon: '⚙️' },
          ].map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-center"
            >
              <span className="text-2xl">{action.icon}</span>
              <span className="text-sm font-medium text-gray-700">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="admin-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="text-center py-8 text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm">Activity feed coming soon</p>
        </div>
      </div>
    </div>
  );
}
