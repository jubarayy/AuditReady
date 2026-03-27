import { Topbar } from "@/components/shell/topbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function OnboardingPage() {
  return (
    <>
      <Topbar title="Onboarding" subtitle="Mets en place le premier espace de travail." />
      <div className="container-page py-8">
        <Card className="max-w-3xl">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Nom de l'organisation" />
            <Input placeholder="Secteur" />
            <Input placeholder="Taille de l'entreprise" />
            <Input placeholder="Référentiel prioritaire" />
          </div>
          <div className="mt-6">
            <Button href="/app/dashboard">Terminer</Button>
          </div>
        </Card>
      </div>
    </>
  );
}
