import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

const items = ["EcoVadis", "CSRD", "ISO 9001", "ISO 14001", "Questionnaires fournisseurs"];

export default function ReferentielsPage() {
  return (
    <>
      <Topbar title="Référentiels" subtitle="Active les cadres de travail et les bibliothèques de questions." />
      <div className="container-page grid gap-6 py-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item}>
            <div className="text-lg font-semibold">{item}</div>
            <p className="mt-3 text-sm text-slate-600">Base prête pour mapping, scoring et contenus dédiés.</p>
          </Card>
        ))}
      </div>
    </>
  );
}
