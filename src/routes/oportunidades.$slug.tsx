import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortalArticle } from "@/components/site/PortalArticle";
import { dataPtBr, oportunidades, oportunidadeAberta, statusOportunidade } from "@/lib/portal-content";

export const Route = createFileRoute("/oportunidades/$slug")({
  loader: ({ params }) => {
    const oportunidade = oportunidades.find((item) => item.slug === params.slug);
    if (!oportunidade) throw notFound();
    return oportunidade;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.title} — Oportunidades CACC` },
    { name: "description", content: loaderData.description },
  ] : [{ title: "Oportunidade não encontrada — CACC" }, { name: "robots", content: "noindex" }] }),
  component: OportunidadePage,
});

function OportunidadePage() {
  const item = Route.useLoaderData();
  return (
    <PortalArticle backTo="/oportunidades" backLabel="Mural de oportunidades" label={item.category}
      title={item.title} description={item.description} date={item.date}
      sourceUrl={item.source_url} body={item.body}
      extra={
        <div className="flex flex-wrap gap-3 font-mono text-xs">
          <span className={`border px-3 py-2 ${oportunidadeAberta(item) ? "border-neon text-neon" : "border-paper/30 text-paper/70"}`}>{statusOportunidade(item)}</span>
          {item.deadline && <span className="border border-paper/30 px-3 py-2">Prazo: {dataPtBr(item.deadline)}</span>}
          {item.organization && <span className="border border-paper/30 px-3 py-2">{item.organization}</span>}
        </div>
      }
    />
  );
}
