import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Cover } from "@/components/site/Shell";
import { projetos, renderMarkdown } from "@/lib/content";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const p = projetos.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Projetos CACC` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
        ]
      : [{ title: "Projeto não encontrado — CACC" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjetoPage,
});

function ProjetoPage() {
  const p = Route.useLoaderData();
  const { html } = renderMarkdown(p.body);
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 md:px-8">
      <Link to="/projetos" className="font-mono text-xs uppercase link-under">← Projetos</Link>
      <header className="mt-6 grid gap-8 border-b-2 border-ink pb-8 md:grid-cols-[12rem_1fr]">
        <Cover src={p.image} alt={p.title} tone="deep" className="aspect-square w-48" />
        <div>
          {p.month_project && <span className="tag bg-violet text-paper">Projeto do mês</span>}
          <h1 className="display mt-3 text-6xl md:text-7xl">{p.title}</h1>
          <p className="mt-2 text-lg">{p.description}</p>
          <p className="mt-2 font-mono text-xs uppercase">{p.author}</p>
          <div className="mt-4 flex flex-wrap gap-1">
            {p.technologies.map((t) => <span key={t} className="tag bg-ink text-neon">{t}</span>)}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {p.repository_url && <a href={p.repository_url} target="_blank" rel="noreferrer" className="bg-ink px-4 py-2 font-semibold text-neon hover:bg-deep">Repositório →</a>}
            {p.demo_url && <a href={p.demo_url} target="_blank" rel="noreferrer" className="bg-neon px-4 py-2 font-semibold text-ink hover:bg-ink hover:text-neon">Demonstração →</a>}
          </div>
        </div>
      </header>
      <div className="prose-cacc mt-8" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
