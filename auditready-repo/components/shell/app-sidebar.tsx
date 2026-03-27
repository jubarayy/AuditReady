const appLinks = [
  ["Dashboard", "/app/dashboard"],
  ["Questionnaires", "/app/questionnaires"],
  ["Documents", "/app/documents"],
  ["Référentiels", "/app/referentiels"],
  ["Plan d'action", "/app/plan-action"],
  ["Rapports", "/app/rapports"],
  ["Billing", "/app/billing"],
  ["Settings", "/app/settings"],
  ["Support", "/app/support"]
];

export function AppSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="p-6">
        <a href="/" className="text-lg font-bold">AuditReady</a>
      </div>
      <nav className="space-y-1 px-3 pb-6">
        {appLinks.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
