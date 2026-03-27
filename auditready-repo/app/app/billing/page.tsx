import { Topbar } from "@/components/shell/topbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <>
      <Topbar title="Billing" subtitle="Prépare le branchement Stripe Checkout et Customer Portal." />
      <div className="container-page grid gap-6 py-8 lg:grid-cols-2">
        <Card>
          <div className="text-lg font-semibold">Plan actuel</div>
          <div className="mt-3 text-3xl font-bold">Starter</div>
          <p className="mt-3 text-sm text-slate-600">3 utilisateurs • 5 questionnaires actifs • support standard</p>
          <Button className="mt-6">Passer à Business</Button>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Usage</div>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="rounded-xl bg-slate-50 p-4">Questionnaires : 3 / 5</div>
            <div className="rounded-xl bg-slate-50 p-4">Stockage : 1.2 Go / 5 Go</div>
            <div className="rounded-xl bg-slate-50 p-4">Crédits IA : 412 / 1000</div>
          </div>
        </Card>
      </div>
    </>
  );
}
