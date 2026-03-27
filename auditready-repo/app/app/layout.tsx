import { AppSidebar } from "@/components/shell/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50 lg:flex">
      <AppSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </main>
  );
}
