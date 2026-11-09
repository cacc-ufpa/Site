import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, CalendarClock, BriefcaseBusiness } from "lucide-react";
import { PageHead } from "@/components/site/Shell";
import { dataPtBr, oportunidades, oportunidadeAberta, statusOportunidade } from "@/lib/portal-content";

export const Route = createFileRoute("/oportunidades/")({
  head: () => ({ meta: [
    { title: "Oportunidades — CACC/UFPA" },
    { name: "description", content: "Vagas, estágios, bolsas, iniciação científica, hackathons e editais de interesse dos alunos." },
  ] }),
  component: OportunidadesPage,
});

function OportunidadesPage() {
  const [categoria, setCategoria] = useState("Todas");
  const [somenteAbertas, setSomenteAbertas] = useState(false);
  const categorias = ["Todas", ...new Set(oportunidades.map((item) => item.category))];
  const exibidas = oportunidades.filter((item) =>
    (categoria === "Todas" || item.category === categoria) && (!somenteAbertas || oportunidadeAberta(item))
  );

  return (
    <>
      <PageHead n="06" title="Oportunidades" kicker="Carreira e comunidade">
        Bolsas, estágios, iniciação científica, empregos, hackathons, editais e seleções.
      </PageHead>
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <p className="mb-7 max-w-3xl border-l-2 border-neon bg-card px-5 py-4 text-sm leading-relaxed text-paper/75">Este mural reúne oportunidades e canais oficiais da UFPA. Os itens marcados como consulta são fontes permanentes, não inscrições abertas. Confira o edital antes de se candidatar.</p>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2" aria-label="Filtrar oportunidades por categoria">
            {categorias.map((c) => (
              <button key={c} type="button" onClick={() => setCategoria(c)} aria-pressed={categoria === c}
                className={`border px-3 py-2 font-mono text-xs uppercase ${categoria === c ? "border-neon bg-neon text-ink" : "border-paper/30 hover:border-violet"}`}>
                {c}
              </button>
            ))}
          </div>
          <label className="ml-auto inline-flex cursor-pointer items-center gap-2 border border-paper/30 px-3 py-2 text-sm">
            <input type="checkbox" checked={somenteAbertas} onChange={(event) => setSomenteAbertas(event.target.checked)} className="accent-[var(--neon)]" />
            Apenas inscrições abertas
          </label>
        </div>
        {exibidas.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {exibidas.map((o) => (
              <Link key={o.slug} to="/oportunidades/$slug" params={{ slug: o.slug }} className="group relative flex min-h-64 flex-col border border-paper/30 bg-card p-5 hover:border-neon">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-violet px-2 py-1 font-mono text-xs uppercase text-ink">{o.category}</span>
                  <span className={`font-mono text-xs ${oportunidadeAberta(o) ? "text-neon" : "text-paper/60"}`}>{statusOportunidade(o)}</span>
                </div>
                <h2 className="font-title mt-5 max-w-sm text-2xl font-bold leading-tight group-hover:text-neon">{o.title}</h2>
                <p className="mt-2 text-sm text-paper/65">{o.organization}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-paper/75">{o.description}</p>
                <div className="mt-auto flex items-end justify-between gap-3 pt-6 font-mono text-xs text-paper/75">
                  <span className="flex items-center gap-2"><CalendarClock className="size-4" /> {o.deadline ? `Até ${dataPtBr(o.deadline)}` : statusOportunidade(o)}</span>
                  <ArrowUpRight className="size-5 shrink-0 text-neon" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border-l-2 border-neon bg-card p-8">
            <BriefcaseBusiness className="size-7 text-neon" />
            <p className="mt-3 text-base text-paper/80">
              {oportunidades.length ? "Nenhuma oportunidade corresponde aos filtros selecionados." : "O mural ainda não possui oportunidades cadastradas. Novos editais e vagas aparecerão aqui."}
            </p>
          </div>
        )}
        <p className="mt-7 text-sm text-paper/55">Confira sempre os requisitos e prazos no link oficial de cada publicação. O CACC não substitui o edital da instituição responsável.</p>
      </main>
    </>
  );
}
