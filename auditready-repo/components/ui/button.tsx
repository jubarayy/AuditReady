import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  ghost: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
};

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
