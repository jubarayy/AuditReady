import { Topbar } from "@/components/shell/topbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <>
      <Topbar title="Rapports" subtitle="Prépare les exports client, PDF et synthèses internes." />
      <div className="container-page grid gap-6 py-8 md:grid-cols-2">
        <Card>
          <div className="text-lg font-semibold">Export PDF questionnaire</div>
          <p className="mt-3 text-sm text-slate-600">Branche ici la génération PDF et les exports structurés.</p>
          <Button className="mt-6">Générer</Button>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Rapport de conformité</div>
          <p className="mt-3 text-sm text-slate-600">Vue synthétique des forces, écarts et plan d'amélioration.</p>
          <Button className="mt-6" variant="ghost">Prévisualiser</Button>
        </Card>
      </div>
    </>
  );
}
