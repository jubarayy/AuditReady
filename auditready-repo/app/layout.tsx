import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuditReady",
  description: "SaaS de pilotage qualité, conformité et questionnaires fournisseurs.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
