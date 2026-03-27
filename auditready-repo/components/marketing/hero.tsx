import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { marketingStats } from "@/lib/mock-data";

export function Hero() {
  return (
    <section className="section-space bg-gradient-to-b from-white to-slate-50">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Badge>SaaS conformité & questionnaires fournisseurs</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold text-slate-950 sm:text-5xl">
            Répondez plus vite à vos audits, EcoVadis et questionnaires RSE.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            AuditReady centralise vos preuves, retrouve les bonnes politiques, et propose des réponses assistées
            par IA pour éviter le copier-coller manuel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/signup">Essai gratuit</Button>
            <Button href="/demo" variant="ghost">
              Voir la démo
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {marketingStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Card className="overflow-hidden p-0">
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="text-sm font-semibold text-slate-900">Aperçu produit</div>
            <div className="text-sm text-slate-600">Dashboard conformité et réponses IA</div>
          </div>
          <div className="grid gap-4 p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-100 p-4">
                <div className="text-xs text-slate-500">Score</div>
                <div className="mt-2 text-2xl font-bold">78%</div>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <div className="text-xs text-slate-500">Questionnaires</div>
                <div className="mt-2 text-2xl font-bold">12</div>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <div className="text-xs text-slate-500">Docs indexés</div>
                <div className="mt-2 text-2xl font-bold">248</div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">EcoVadis 2026</div>
                  <div className="text-sm text-slate-600">72% complété</div>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  En cours
                </span>
              </div>
              <div className="mt-4 h-3 rounded-full bg-slate-100">
                <div className="h-3 w-[72%] rounded-full bg-brand-600" />
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                <strong>Suggestion IA :</strong> “La politique achats responsables est revue annuellement, validée
                par la direction et communiquée à l’ensemble des fournisseurs stratégiques.”
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
