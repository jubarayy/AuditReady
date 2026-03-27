import { Topbar } from "@/components/shell/topbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function QuestionnaireDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <Topbar title={`Questionnaire ${id}`} subtitle="Réponse guidée avec suggestions IA." />
      <div className="container-page grid gap-6 py-8 xl:grid-cols-[1.8fr,1fr]">
        <Card>
          <div className="text-sm font-semibold text-slate-500">Question</div>
          <h2 className="mt-3 text-xl font-bold">Décrivez votre politique achats responsables.</h2>
          <textarea
            className="mt-6 min-h-[280px] w-full rounded-2xl border border-slate-200 p-4 text-sm outline-none"
            defaultValue="Notre organisation formalise sa politique achats responsables..."
          />
          <div className="mt-6 flex gap-3">
            <Button>Sauvegarder</Button>
            <Button variant="ghost">Valider</Button>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <div className="text-lg font-semibold">Suggestion IA</div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              La politique achats responsables est revue annuellement, validée par la direction, et transmise aux
              fournisseurs à enjeu. Les critères RSE sont intégrés dans l'évaluation et la sélection.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold">Sources</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="rounded-xl bg-slate-50 p-3">Politique Achats Responsables.pdf</div>
              <div className="rounded-xl bg-slate-50 p-3">Charte Éthique.docx</div>
            </div>
          </Card>
          <Card>
            <div className="text-lg font-semibold">Actions</div>
            <div className="mt-4 flex flex-col gap-3">
              <Button>Regénérer</Button>
              <Button variant="ghost">Demander une source supplémentaire</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
