const adminLinks = [
  ["Overview", "/admin"],
  ["Organisations", "/admin/organisations"],
  ["Users", "/admin/users"],
  ["Billing", "/admin/billing"],
  ["Référentiels", "/admin/referentiels"],
  ["Logs", "/admin/logs"],
  ["Security", "/admin/security"],
  ["Integrations", "/admin/integrations"]
];

export function AdminSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-slate-950 text-white lg:block">
      <div className="p-6">
        <a href="/" className="text-lg font-bold">AuditReady Admin</a>
      </div>
      <nav className="space-y-1 px-3 pb-6">
        {adminLinks.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-900"
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
