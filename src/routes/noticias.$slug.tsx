import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortalArticle } from "@/components/site/PortalArticle";
import { noticias } from "@/lib/portal-content";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = noticias.find((item) => item.slug === params.slug);
    if (!noticia) throw notFound();
    return noticia;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.title} — Notícias CACC` },
    { name: "description", content: loaderData.description },
    { property: "og:type", content: "article" },
  ] : [{ title: "Notícia não encontrada — CACC" }, { name: "robots", content: "noindex" }] }),
  component: NoticiaPage,
});

function NoticiaPage() {
  const noticia = Route.useLoaderData();
  return (
    <PortalArticle backTo="/noticias" backLabel="Todas as notícias" label={noticia.category}
      title={noticia.title} description={noticia.description} date={noticia.date}
      sourceUrl={noticia.source_url} body={noticia.body}
      extra={noticia.author ? <span className="font-mono text-xs text-paper/60">Publicado por: {noticia.author}</span> : undefined}
    />
  );
}
