import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="/" className="text-lg font-bold text-slate-900">
          AuditReady
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="/solutions/ecovadis">Solutions</a>
          <a href="/pricing">Tarifs</a>
          <a href="/faq">FAQ</a>
          <a href="/demo">Démo</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/login" variant="ghost">
            Se connecter
          </Button>
          <Button href="/signup">Essai gratuit</Button>
        </div>
      </div>
    </header>
  );
}
