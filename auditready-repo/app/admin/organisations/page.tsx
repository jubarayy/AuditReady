import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

const orgs = [
  ["Acme Industrie", "Business", "12 utilisateurs"],
  ["Nova Supply", "Starter", "3 utilisateurs"],
  ["GreenPulse", "Essai", "2 utilisateurs"]
];

export default function AdminOrgsPage() {
  return (
    <>
      <Topbar title="Organisations" subtitle="Liste des comptes clients." />
      <div className="container-page py-8">
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-3">Organisation</th>
                  <th className="py-3">Plan</th>
                  <th className="py-3">Usage</th>
                </tr>
              </thead>
              <tbody>
                {orgs.map(([name, plan, usage]) => (
                  <tr key={name} className="border-b border-slate-100">
                    <td className="py-4 font-medium">{name}</td>
                    <td className="py-4">{plan}</td>
                    <td className="py-4">{usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
