import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";
import { Card } from "@/components/ui/card";

export default function EcovadisPage() {
  return (
    <>
      <Navbar />
      <section className="section-space">
        <div className="container-page">
          <h1 className="text-4xl font-bold">Logiciel EcoVadis</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Structurez vos preuves, gagnez du temps sur les réponses et consolidez votre documentation pour les campagnes suivantes.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card><div className="font-semibold">Bibliothèque de preuves</div></Card>
            <Card><div className="font-semibold">Réponses réutilisables</div></Card>
            <Card><div className="font-semibold">Pilotage des plans d'amélioration</div></Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
