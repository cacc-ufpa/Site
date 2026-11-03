import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortalArticle } from "@/components/site/PortalArticle";
import { disciplinas } from "@/lib/portal-content";

export const Route = createFileRoute("/vida-academica/disciplinas/$slug")({
  loader: ({ params }) => {
    const disciplina = disciplinas.find((item) => item.slug === params.slug);
    if (!disciplina) throw notFound();
    return disciplina;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.title} — Disciplinas CACC` },
    { name: "description", content: loaderData.description },
  ] : [{ title: "Disciplina não encontrada — CACC" }, { name: "robots", content: "noindex" }] }),
  component: DisciplinaPage,
});

function DisciplinaPage() {
  const d = Route.useLoaderData();
  return <PortalArticle backTo="/vida-academica/disciplinas" backLabel="Catálogo de disciplinas"
    label={d.ppc.length ? `PPC ${d.ppc.join(" / ")}` : "Disciplina"}
    title={d.title} description={d.description} sourceUrl={d.source_url} body={d.body}
    extra={
      <div className="flex flex-wrap gap-2 font-mono text-xs text-paper/80">
        {d.code && <span className="border border-paper/30 px-3 py-2">Código: {d.code}</span>}
        {d.semester && <span className="border border-paper/30 px-3 py-2">{d.semester}º semestre</span>}
        {d.workload && <span className="border border-paper/30 px-3 py-2">Carga horária: {d.workload}</span>}
        {!!d.prerequisites.length && <span className="border border-paper/30 px-3 py-2">Pré-requisitos: {d.prerequisites.join(", ")}</span>}
      </div>
    }
  />;
}
