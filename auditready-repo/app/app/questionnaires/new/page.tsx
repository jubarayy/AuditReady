import { Topbar } from "@/components/shell/topbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function NewQuestionnairePage() {
  return (
    <>
      <Topbar title="Nouveau questionnaire" subtitle="Crée la structure initiale du dossier." />
      <div className="container-page py-8">
        <Card className="max-w-3xl">
          <div className="grid gap-4">
            <Input placeholder="Nom du questionnaire" />
            <Input placeholder="Référentiel ou client" />
            <Input placeholder="Propriétaire" />
            <Button href="/app/questionnaires">Créer</Button>
          </div>
        </Card>
      </div>
    </>
  );
}
