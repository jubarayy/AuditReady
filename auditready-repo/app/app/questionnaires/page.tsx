import { Topbar } from "@/components/shell/topbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { questionnaires } from "@/lib/mock-data";

export default function QuestionnairesPage() {
  return (
    <>
      <Topbar title="Questionnaires" subtitle="Crée, pilote et revois chaque questionnaire." />
      <div className="container-page py-8">
        <div className="mb-6 flex justify-end">
          <Button href="/app/questionnaires/new">Nouveau questionnaire</Button>
        </div>
        <div className="grid gap-6">
          {questionnaires.map((item) => (
            <Card key={item.id}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.framework}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-slate-600">{item.progress}%</div>
                  <Button href={`/app/questionnaires/${item.id}`} variant="ghost">
                    Ouvrir
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
