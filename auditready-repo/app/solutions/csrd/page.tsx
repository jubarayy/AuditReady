import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";

export default function CsrdPage() {
  return (
    <>
      <Navbar />
      <section className="section-space">
        <div className="container-page">
          <h1 className="text-4xl font-bold">Pilotage CSRD</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Prépare une structure documentaire et un cockpit clair pour répondre aux demandes extra-financières.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
