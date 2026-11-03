import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { PageHead } from "@/components/site/Shell";
import { dataPtBr, noticias } from "@/lib/portal-content";

export const Route = createFileRoute("/noticias/")({
  head: () => ({ meta: [
    { title: "Notícias — CACC/UFPA" },
    { name: "description", content: "Notícias, comunicados e novidades da comunidade de Ciência da Computação da UFPA." },
  ] }),
  component: NoticiasPage,
});

function NoticiasPage() {
  const [categoria, setCategoria] = useState("Todas");
  const categorias = ["Todas", ...new Set(noticias.map((n) => n.category))];
  const exibidas = noticias.filter((n) => categoria === "Todas" || categoria === n.category);

  return (
    <>
      <PageHead n="07" title="Notícias" kicker="Comunicação">
        Comunicados, novidades e acontecimentos de interesse da comunidade acadêmica.
      </PageHead>
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="mb-9 flex flex-wrap gap-2" aria-label="Filtrar notícias por categoria">
          {categorias.map((c) => (
            <button key={c} type="button" aria-pressed={categoria === c} onClick={() => setCategoria(c)}
              className={`border px-4 py-2 font-mono text-xs uppercase transition-colors ${categoria === c ? "border-neon bg-neon text-ink" : "border-paper/30 text-paper hover:border-violet"}`}>
              {c}
            </button>
          ))}
        </div>
        {exibidas.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {exibidas.map((n) => (
              <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group flex flex-col overflow-hidden border border-paper/30 bg-card hover:border-violet">
                {n.image ? <img src={n.image} alt="" className="aspect-video w-full object-cover" loading="lazy" /> : (
                  <div className="grid-paper flex aspect-video items-center justify-center bg-deep text-violet"><Newspaper className="size-12" strokeWidth={1} /></div>
                )}
                <div className="flex grow flex-col p-5">
                  <p className="font-mono text-xs uppercase text-violet">{n.category} · {dataPtBr(n.date)}</p>
                  <h2 className="font-title mt-3 text-2xl font-bold leading-tight group-hover:text-neon">{n.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">{n.description}</p>
                  <ArrowUpRight className="mt-auto ml-auto size-6 pt-2 text-neon" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="border-l-2 border-violet bg-card p-7 text-base text-paper/75">
            {noticias.length ? "Não há notícias nessa categoria." : "Ainda não há notícias publicadas. As primeiras matérias aparecerão aqui e também na página inicial."}
          </p>
        )}
      </main>
    </>
  );
}
