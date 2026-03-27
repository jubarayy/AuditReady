import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

export default function AdminSecurityPage() {
  return (
    <>
      <Topbar title="Security" subtitle="SSO, rôles et conformité." />
      <div className="container-page grid gap-6 py-8 md:grid-cols-2">
        <Card>
          <div className="text-lg font-semibold">Contrôles d'accès</div>
          <p className="mt-3 text-sm text-slate-600">Prévu pour rôles, permissions et journalisation.</p>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Configuration sécurité</div>
          <p className="mt-3 text-sm text-slate-600">Branche ici SSO, 2FA et politiques d'accès.</p>
        </Card>
      </div>
    </>
  );
}
