import Sidebar from '@/components/admin/Sidebar';
import DashboardHeader from '@/components/admin/DashboardHeader';
import { getAuthFromCookies } from '@/lib/auth';
import { getOne } from '@/lib/db';
import { AdminUserPublic } from '@/types';

async function getCurrentUser(): Promise<AdminUserPublic | null> {
  try {
    const payload = getAuthFromCookies();
    if (!payload) return null;
    const user = await getOne<AdminUserPublic>(
      'SELECT id, username, email, full_name, role, is_active, last_login, created_at FROM admin_users WHERE id = ? AND is_active = TRUE',
      [payload.id]
    );
    return user;
  } catch {
    return null;
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader user={user} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
