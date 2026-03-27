import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <>
      <Topbar title="Support" subtitle="Base de support, contact et incidents." />
      <div className="container-page grid gap-6 py-8 md:grid-cols-2">
        <Card>
          <div className="text-lg font-semibold">Documentation</div>
          <p className="mt-3 text-sm text-slate-600">Relie ici un Help Center ou une doc Notion/Docs.</p>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Contacter l'équipe</div>
          <p className="mt-3 text-sm text-slate-600">support@auditready.app</p>
        </Card>
      </div>
    </>
  );
}
