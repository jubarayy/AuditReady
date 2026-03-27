import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

export default function AdminBillingPage() {
  return (
    <>
      <Topbar title="Billing" subtitle="MRR, abonnements et comptes en essai." />
      <div className="container-page grid gap-6 py-8 md:grid-cols-2">
        <Card>
          <div className="text-lg font-semibold">MRR</div>
          <div className="mt-3 text-4xl font-bold">8 450 €</div>
        </Card>
        <Card>
          <div className="text-lg font-semibold">Échecs de paiement</div>
          <div className="mt-3 text-4xl font-bold">1</div>
        </Card>
      </div>
    </>
  );
}
