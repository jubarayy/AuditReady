import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "149€",
    items: ["1 organisation", "3 utilisateurs", "5 questionnaires actifs", "Bibliothèque documentaire"]
  },
  {
    name: "Business",
    price: "399€",
    items: ["Utilisateurs illimités", "Réponses IA", "Exports avancés", "Plan d'action"]
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    items: ["SSO", "Admin avancé", "Multi-entités", "Support prioritaire"]
  }
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className="section-space">
        <div className="container-page">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">Tarifs simples pour lancer vite.</h1>
            <p className="mt-4 text-lg text-slate-600">
              Choisis une offre claire aujourd’hui, puis fais évoluer le compte quand le process se structure.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <div className="text-sm font-semibold text-brand-700">{plan.name}</div>
                <div className="mt-3 text-4xl font-bold">{plan.price}</div>
                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  {plan.items.map((item) => (
                    <div key={item}>• {item}</div>
                  ))}
                </div>
                <Button href="/signup" className="mt-8">
                  Commencer
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
