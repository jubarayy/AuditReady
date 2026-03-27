import { KpiCard } from "@/components/dashboard/kpi-card";
import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";
import { appKpis, questionnaires } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <>
      <Topbar title="Dashboard" subtitle="Vue d'ensemble qualité, conformité et questionnaires." />
      <div className="container-page space-y-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {appKpis.map((item) => (
            <KpiCard key={item.label} item={item} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[2fr,1fr]">
          <Card>
            <div className="text-lg font-semibold">Questionnaires récents</div>
            <div className="mt-6 space-y-4">
              {questionnaires.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <div className="text-sm text-slate-600">{item.framework}</div>
                    </div>
                    <a href={`/app/questionnaires/${item.id}`} className="text-sm font-semibold text-brand-700">
                      Ouvrir
                    </a>
                  </div>
                  <div className="mt-4 h-3 rounded-full bg-slate-100">
                    <div className="h-3 rounded-full bg-brand-600" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="text-lg font-semibold">Actions prioritaires</div>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="rounded-xl bg-slate-50 p-4">Relancer 3 propriétaires de réponses</div>
              <div className="rounded-xl bg-slate-50 p-4">Indexer 1 document en attente</div>
              <div className="rounded-xl bg-slate-50 p-4">Passer Business pour débloquer les exports avancés</div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
