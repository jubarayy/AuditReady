import type { KPI } from "@/types";
import { Card } from "@/components/ui/card";

export function KpiCard({ item }: { item: KPI }) {
  return (
    <Card>
      <div className="text-sm text-slate-500">{item.label}</div>
      <div className="mt-3 text-3xl font-bold text-slate-950">{item.value}</div>
      <div className="mt-2 text-sm text-slate-600">{item.detail}</div>
    </Card>
  );
}
