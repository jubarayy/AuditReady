import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { Navbar } from "@/components/marketing/navbar";
import { Card } from "@/components/ui/card";

const features = [
  "Bibliothèque documentaire centralisée",
  "Réponses assistées par IA avec sources",
  "Pilotage des plans d'action",
  "Suivi EcoVadis, CSRD, ISO et audits fournisseurs"
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="section-space">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Un hub unique pour vos preuves et vos réponses.</h2>
            <p className="mt-4 text-lg text-slate-600">
              Conservez vos documents, réutilisez vos réponses, et structurez un vrai système de pilotage.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature}>
                <div className="text-base font-semibold text-slate-900">{feature}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="text-lg font-semibold">Étape 1</div>
            <p className="mt-3 text-slate-600">Importez vos politiques, procédures, rapports et fichiers Excel.</p>
          </Card>
          <Card>
            <div className="text-lg font-semibold">Étape 2</div>
            <p className="mt-3 text-slate-600">Créez un questionnaire ou importez-le pour structurer la réponse.</p>
          </Card>
          <Card>
            <div className="text-lg font-semibold">Étape 3</div>
            <p className="mt-3 text-slate-600">Validez les suggestions IA et exportez un livrable propre.</p>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}
