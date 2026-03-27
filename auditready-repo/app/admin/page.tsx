import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";
import { adminMetrics } from "@/lib/mock-data";

export default function AdminPage() {
  return (
    <>
      <Topbar title="Admin overview" subtitle="Vue opérateur sur la croissance et l'activation." />
      <div className="container-page grid gap-6 py-8 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((item) => (
          <Card key={item.label}>
            <div className="text-sm text-slate-500">{item.label}</div>
            <div className="mt-3 text-3xl font-bold">{item.value}</div>
            <div className="mt-2 text-sm text-slate-600">{item.detail}</div>
          </Card>
        ))}
      </div>
    </>
  );
}
