import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";
import { Card } from "@/components/ui/card";

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <section className="section-space">
        <div className="container-page">
          <h1 className="text-4xl font-bold">Démo produit</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Cette page est prête pour embarquer une vidéo Loom, un embed YouTube ou un calendrier de réservation.
          </p>
          <Card className="mt-10">
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              Zone de démo vidéo
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}
