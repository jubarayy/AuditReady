import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";
import { documents } from "@/lib/mock-data";

export default function DocumentsPage() {
  return (
    <>
      <Topbar title="Documents" subtitle="Charge, indexe et relie les preuves à tes réponses." />
      <div className="container-page py-8">
        <Card>
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
            Zone d'upload à brancher sur Supabase Storage ou S3.
          </div>
        </Card>
        <div className="mt-6 grid gap-6">
          {documents.map((item) => (
            <Card key={item.id}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-slate-600">{item.type}</div>
                </div>
                <div className="text-sm font-semibold text-brand-700">{item.status}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
