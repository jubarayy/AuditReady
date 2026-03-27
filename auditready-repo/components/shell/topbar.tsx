export function Topbar({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="container-page flex items-center justify-between py-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">{title}</h1>
          {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
          Workspace demo
        </div>
      </div>
    </div>
  );
}
