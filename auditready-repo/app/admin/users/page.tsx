import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

const users = [
  ["laura@acme.fr", "Admin", "Acme Industrie"],
  ["paul@nova.io", "Member", "Nova Supply"],
  ["sara@greenpulse.eu", "Owner", "GreenPulse"]
];

export default function AdminUsersPage() {
  return (
    <>
      <Topbar title="Users" subtitle="Vision globale des accès." />
      <div className="container-page py-8">
        <Card>
          <div className="space-y-4">
            {users.map(([email, role, org]) => (
              <div key={email} className="flex flex-col gap-2 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="font-semibold">{email}</div>
                  <div className="text-sm text-slate-600">{org}</div>
                </div>
                <div className="text-sm text-slate-700">{role}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
