import { Topbar } from "@/components/shell/topbar";
import { Card } from "@/components/ui/card";

const refs = ["EcoVadis", "CSRD", "ISO 9001", "ISO 14001", "SEDex"];

export default function AdminReferentielsPage() {
  return (
    <>
      <Topbar title="Référentiels" subtitle="Catalogue de cadres et contenus." />
      <div className="container-page grid gap-6 py-8 md:grid-cols-2 xl:grid-cols-3">
        {refs.map((item) => (
          <Card key={item}>
            <div className="font-semibold">{item}</div>
            <p className="mt-3 text-sm text-slate-600">Active ou enrichis les mappings et contenus.</p>
          </Card>
        ))}
      </div>
    </>
  );
}
