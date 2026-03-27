export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold">AuditReady</div>
          <p className="mt-3 text-sm text-slate-600">
            Centralisez vos preuves, accélérez vos réponses et pilotez votre conformité.
          </p>
        </div>
        <div>
          <div className="font-semibold">Produit</div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <a href="/pricing" className="block">Tarifs</a>
            <a href="/demo" className="block">Démo</a>
            <a href="/faq" className="block">FAQ</a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Solutions</div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <a href="/solutions/ecovadis" className="block">EcoVadis</a>
            <a href="/solutions/csrd" className="block">CSRD</a>
            <a href="/use-cases/questionnaires-fournisseurs" className="block">Questionnaires fournisseurs</a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Légal</div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <a href="/legal/confidentialite" className="block">Confidentialité</a>
            <a href="/legal/conditions" className="block">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
