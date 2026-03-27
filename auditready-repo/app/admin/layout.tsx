import { AdminSidebar } from "@/components/shell/admin-sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-100 lg:flex">
      <AdminSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </main>
  );
}
