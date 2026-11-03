import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortalArticle } from "@/components/site/PortalArticle";
import { paginasAcademicas } from "@/lib/portal-content";

export const Route = createFileRoute("/vida-academica/$slug")({
  loader: ({ params }) => {
    const pagina = paginasAcademicas.find((item) => item.slug === params.slug);
    if (!pagina) throw notFound();
    return pagina;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.title} — Vida Acadêmica CACC` },
    { name: "description", content: loaderData.description },
  ] : [{ title: "Página não encontrada — CACC" }, { name: "robots", content: "noindex" }] }),
  component: PaginaAcademica,
});

function PaginaAcademica() {
  const item = Route.useLoaderData();
  return <PortalArticle backTo="/vida-academica" backLabel="Vida Acadêmica"
    label={item.category} title={item.title} description={item.description}
    date={item.updated} sourceUrl={item.source_url} body={item.body} />;
}
