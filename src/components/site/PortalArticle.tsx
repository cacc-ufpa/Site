import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, CalendarDays } from "lucide-react";
import { renderMarkdown } from "@/lib/content";
import { dataPtBr } from "@/lib/portal-content";

type BackPath = "/noticias" | "/oportunidades" | "/vida-academica" | "/vida-academica/disciplinas";

/** Mesmo renderizador Markdown e classes prose-cacc já usados pelos manuais. */
export function PortalArticle({
  backTo, backLabel, label, title, description, date, sourceUrl, body, extra,
}: {
  backTo: BackPath;
  backLabel: string;
  label: string;
  title: string;
  description?: string;
  date?: string;
  sourceUrl?: string;
  body: string;
  extra?: ReactNode;
}) {
  const { html, headings } = renderMarkdown(body);
  return (
    <article className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
      <Link to={backTo} className="inline-flex items-center gap-2 font-mono text-sm text-neon hover:underline">
        <ArrowLeft className="size-4" /> {backLabel}
      </Link>
      <header className="mt-7 max-w-5xl border-b border-paper/30 pb-8">
        <span className="tag bg-violet px-3 py-1 text-ink">{label}</span>
        <h1 className="display mt-4 text-5xl leading-[0.95] sm:text-6xl md:text-7xl">{title}</h1>
        {description && <p className="mt-5 max-w-3xl font-title text-lg leading-relaxed text-paper/80">{description}</p>}
        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          {date && <span className="inline-flex items-center gap-2 font-mono"><CalendarDays className="size-4" />{dataPtBr(date)}</span>}
          {sourceUrl && (
            <a className="inline-flex items-center gap-1 font-mono text-neon underline underline-offset-4" href={sourceUrl} target="_blank" rel="noopener noreferrer">
              Fonte oficial <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
        {extra && <div className="mt-5">{extra}</div>}
      </header>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="min-w-0">
          {headings.length > 2 && (
            <details className="mb-7 border border-paper/30 p-4 lg:hidden">
              <summary className="cursor-pointer font-mono text-sm uppercase text-neon">Sumário</summary>
              <Contents headings={headings} />
            </details>
          )}
          <div className="prose-cacc min-w-0" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        {headings.length > 2 && (
          <nav aria-label="Sumário do artigo" className="hidden lg:block">
            <div className="sticky top-24 border-l-2 border-neon pl-4">
              <p className="font-mono text-xs uppercase tracking-wider text-neon">Nesta página</p>
              <Contents headings={headings} />
            </div>
          </nav>
        )}
      </div>
    </article>
  );
}

function Contents({ headings }: { headings: { id: string; text: string }[] }) {
  return (
    <ol className="mt-3 space-y-2 text-sm text-paper/80">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a href={`#${heading.id}`} className="hover:text-violet">{heading.text}</a>
        </li>
      ))}
    </ol>
  );
}
