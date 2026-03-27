import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    suggestion:
      "La politique achats responsables est documentée, revue annuellement et communiquée aux fournisseurs stratégiques.",
    sources: ["Politique Achats Responsables.pdf", "Charte Éthique.docx"]
  });
}
