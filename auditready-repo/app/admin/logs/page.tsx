import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

const logs = [
  "2026-03-27 10:22 - Questionnaire généré",
  "2026-03-27 10:18 - Nouveau document importé",
  "2026-03-27 09:54 - Compte créé"
];

export default function AdminLogsPage() {
  return (
    <>
      <Topbar title="Logs" subtitle="Historique d'événements et audit trail." />
      <div className="container-page py-8">
        <Card>
          <div className="space-y-3 text-sm text-slate-700">
            {logs.map((item) => (
              <div key={item} className="rounded-xl bg-slate-50 p-4">{item}</div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
