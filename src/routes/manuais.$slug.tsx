import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { fmtDate, manuais, renderMarkdown } from "@/lib/content";

export const Route = createFileRoute("/manuais/$slug")({
  loader: ({ params }) => {
    const m = manuais.find((x) => x.slug === params.slug);
    if (!m) throw notFound();
    return m;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Manuais CACC` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
        ]
      : [{ title: "Manual não encontrado — CACC" }, { name: "robots", content: "noindex" }],
  }),
  component: ManualPage,
});

function ManualPage() {
  const m = Route.useLoaderData();
  const { html, headings } = renderMarkdown(m.body);
  return (
    <article className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <Link to="/manuais" className="font-mono text-xs uppercase link-under">← Manuais</Link>
      <header className="mt-6 border-b-2 border-ink pb-6">
        <p className="tag bg-deep text-paper">{m.category}</p>
        <h1 className="display mt-3 text-5xl md:text-7xl">{m.title}</h1>
        <p className="mt-3 max-w-2xl text-lg">{m.description}</p>
        {m.updated && <p className="mt-2 font-mono text-xs">Atualizado em {(fmtDate(m.updated) as any).full}</p>}
      </header>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_14rem]">
        <div>
          {headings.length > 2 && (
            <details className="mb-6 border-2 border-ink p-3 lg:hidden">
              <summary className="font-mono text-sm uppercase">Sumário</summary>
              <Toc headings={headings} />
            </details>
          )}
          <div className="prose-cacc" dangerouslySetInnerHTML={{ __html: html }} />
          {m.related.length > 0 && (
            <aside className="mt-10 max-w-[68ch] bg-neon p-5">
              <h2 className="display text-2xl">Recursos relacionados</h2>
              <ul className="mt-2">
                {m.related.map((r) => <li key={r.url}><a href={r.url} target="_blank" rel="noreferrer" className="link-under">{r.label}</a></li>)}
              </ul>
            </aside>
          )}
        </div>
        {headings.length > 2 && (
          <nav aria-label="Sumário" className="hidden lg:block">
            <div className="sticky top-24 border-l-4 border-neon pl-4">
              <p className="font-mono text-xs uppercase">Sumário</p>
              <Toc headings={headings} />
            </div>
          </nav>
        )}
      </div>
    </article>
  );
}

function Toc({ headings }: { headings: { id: string; text: string }[] }) {
  return (
    <ol className="mt-2 space-y-1 text-sm">
      {headings.map((h) => <li key={h.id}><a href={`#${h.id}`} className="hover:text-violet">{h.text}</a></li>)}
    </ol>
  );
}
