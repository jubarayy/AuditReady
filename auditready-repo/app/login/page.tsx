import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <a href="/" className="text-sm font-semibold text-brand-700">← Retour</a>
        <h1 className="mt-4 text-3xl font-bold">Se connecter</h1>
        <p className="mt-2 text-sm text-slate-600">Branche Supabase Auth ou Clerk ici.</p>
        <div className="mt-8 space-y-4">
          <Input placeholder="Email" />
          <Input type="password" placeholder="Mot de passe" />
          <Button href="/app/dashboard" className="w-full">Entrer dans l'app</Button>
        </div>
      </Card>
    </main>
  );
}
