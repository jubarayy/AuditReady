import type { AdminMetric, DocumentItem, KPI, Questionnaire } from "@/types";

export const marketingStats = [
  { value: "-60%", label: "temps gagné sur les questionnaires" },
  { value: "24h", label: "pour produire un premier draft" },
  { value: "1 hub", label: "pour centraliser documents et preuves" }
];

export const appKpis: KPI[] = [
  { label: "Score conformité", value: "78%", detail: "+6 pts ce mois-ci" },
  { label: "Questionnaires actifs", value: "12", detail: "3 à relancer" },
  { label: "Documents analysés", value: "248", detail: "14 nouveaux cette semaine" },
  { label: "Réponses IA générées", value: "387", detail: "92 validées par l'équipe" }
];

export const questionnaires: Questionnaire[] = [
  { id: "eco-2026", title: "EcoVadis 2026", framework: "EcoVadis", progress: 72, status: "En cours" },
  { id: "renouvellement-iso", title: "Renouvellement ISO 9001", framework: "ISO 9001", progress: 41, status: "À compléter" },
  { id: "fournisseur-a", title: "Questionnaire Fournisseur A", framework: "Vendor Due Diligence", progress: 91, status: "Relecture" }
];

export const documents: DocumentItem[] = [
  { id: "1", name: "Politique Achats Responsables.pdf", type: "PDF", status: "Indexé" },
  { id: "2", name: "Bilan Carbone 2025.xlsx", type: "XLSX", status: "Indexé" },
  { id: "3", name: "Charte Éthique.docx", type: "DOCX", status: "En traitement" }
];

export const adminMetrics: AdminMetric[] = [
  { label: "MRR", value: "8 450 €", detail: "+12% vs mois dernier" },
  { label: "Organisations", value: "17", detail: "2 essais actifs" },
  { label: "Utilisateurs actifs", value: "89", detail: "73% WAU/MAU" },
  { label: "Taux d'activation", value: "64%", detail: "objectif 70%" }
];
