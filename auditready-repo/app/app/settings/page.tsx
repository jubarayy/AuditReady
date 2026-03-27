import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <>
      <Topbar title="Settings" subtitle="Profil, organisation, sécurité et intégrations." />
      <div className="container-page py-8">
        <Card className="max-w-3xl">
          <div className="grid gap-4">
            <Input placeholder="Nom de l'organisation" />
            <Input placeholder="Email admin" />
            <Input placeholder="Nom du workspace" />
          </div>
        </Card>
      </div>
    </>
  );
}
