import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";
import { Card } from "@/components/ui/card";

const faqs = [
  ["À qui s'adresse AuditReady ?", "Aux équipes qualité, RSE, achats et conformité qui gèrent des questionnaires récurrents."],
  ["Est-ce que les réponses sont automatiques ?", "Le produit propose des suggestions. L'équipe garde la validation finale."],
  ["Peut-on brancher Stripe et Supabase ?", "Oui, la structure du repo est pensée pour cela."],
  ["Puis-je déployer sur Vercel ?", "Oui, le starter est prévu pour GitHub + Vercel."]
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <section className="section-space">
        <div className="container-page">
          <h1 className="text-4xl font-bold">FAQ</h1>
          <div className="mt-10 grid gap-6">
            {faqs.map(([q, a]) => (
              <Card key={q}>
                <div className="text-lg font-semibold">{q}</div>
                <p className="mt-3 text-slate-600">{a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
