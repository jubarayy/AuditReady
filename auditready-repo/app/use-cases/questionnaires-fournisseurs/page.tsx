import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";

export default function UseCasePage() {
  return (
    <>
      <Navbar />
      <section className="section-space">
        <div className="container-page">
          <h1 className="text-4xl font-bold">Questionnaires fournisseurs</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Réduis le temps de réponse, fiabilise la documentation et crée un historique réutilisable pour chaque client.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
