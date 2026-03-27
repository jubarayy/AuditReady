import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

export default function AdminIntegrationsPage() {
  return (
    <>
      <Topbar title="Integrations" subtitle="Supervision des connecteurs et webhooks." />
      <div className="container-page grid gap-6 py-8 md:grid-cols-2">
        <Card>
          <div className="text-lg font-semibold">Stripe</div>
          <p className="mt-3 text-sm text-slate-600">Checkout, portail client et webhooks.</p>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Supabase</div>
          <p className="mt-3 text-sm text-slate-600">Auth, Postgres, Storage et RLS.</p>
        </Card>
      </div>
    </>
  );
}
