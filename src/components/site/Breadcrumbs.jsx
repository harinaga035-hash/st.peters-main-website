import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
function Breadcrumbs({ items, light }) {
  const base = light ? "text-white/70" : "text-muted-foreground";
  const active = light ? "text-white" : "text-foreground";
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link
            to="/"
            className={`flex items-center gap-1  ${base} transition-colors hover: ${active}`}
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className={`h-3.5 w-3.5  ${base}`} />
              {c.to && !last ? (
                <Link to={c.to} className={` ${base} font-medium transition-colors hover: ${active}`}>
                  {c.label}
                </Link>
              ) : (
                <span className={` ${active} font-semibold`}>{c.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
export { Breadcrumbs };
