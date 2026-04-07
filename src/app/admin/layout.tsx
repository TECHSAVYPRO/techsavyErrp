// Admin layout — handles auth check redirect (middleware does the heavy lifting)
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
