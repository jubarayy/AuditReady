import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

export default function ActionPlanPage() {
  return (
    <>
      <Topbar title="Plan d'action" subtitle="Pilote les écarts et les prochaines améliorations." />
      <div className="container-page grid gap-6 py-8 lg:grid-cols-2">
        <Card>
          <div className="text-lg font-semibold">Actions ouvertes</div>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="rounded-xl bg-slate-50 p-4">Formaliser la procédure de revue fournisseurs</div>
            <div className="rounded-xl bg-slate-50 p-4">Mettre à jour la politique environnementale</div>
          </div>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Échéances</div>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="rounded-xl bg-slate-50 p-4">2 actions à moins de 14 jours</div>
            <div className="rounded-xl bg-slate-50 p-4">1 action bloquée en attente de validation</div>
          </div>
        </Card>
      </div>
    </>
  );
}
