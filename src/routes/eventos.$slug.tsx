import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Cover } from "@/components/site/Shell";
import { eventos, fmtDate, renderMarkdown } from "@/lib/content";

export const Route = createFileRoute("/eventos/$slug")({
  loader: ({ params }) => {
    const e = eventos.find((x) => x.slug === params.slug);
    if (!e) throw notFound();
    return e;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Eventos CACC` },
          { name: "description", content: `${loaderData.category} em ${loaderData.location}, ${loaderData.date}.` },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: `${loaderData.category} — ${loaderData.location}` },
        ]
      : [{ title: "Evento não encontrado — CACC" }, { name: "robots", content: "noindex" }],
  }),
  component: EventoPage,
});

function EventoPage() {
  const e = Route.useLoaderData();
  const { html } = renderMarkdown(e.body);
  const d = fmtDate(e.date) as any;
  return (
    <article className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <Link to="/eventos" className="font-mono text-xs uppercase link-under">← Agenda</Link>
      <div className="mt-6 grid gap-10 md:grid-cols-[2fr_3fr]">
        <div>
          <Cover src={e.image} alt={e.title} tone="violet" className="aspect-[3/4] w-full" />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="tag bg-coral text-ink">{e.category}</span>
            {e.past && <span className="tag bg-ink text-paper">Encerrado</span>}
          </div>
          <h1 className="display mt-4 text-6xl md:text-8xl">{e.title}</h1>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-y-2 border-ink py-4 font-mono text-sm">
            <div><dt className="opacity-60">Data</dt><dd>{d.full}</dd></div>
            <div><dt className="opacity-60">Horário</dt><dd>{e.time}</dd></div>
            <div><dt className="opacity-60">Local</dt><dd>{e.location}</dd></div>
            <div><dt className="opacity-60">Organização</dt><dd>{e.organizer}</dd></div>
          </dl>
          {e.registration_url && !e.past && (
            <a href={e.registration_url} target="_blank" rel="noreferrer" className="display mt-6 inline-block bg-neon px-5 py-3 text-2xl hover:bg-ink hover:text-neon">
              Inscrever-se →
            </a>
          )}
          <div className="prose-cacc mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </article>
  );
}
