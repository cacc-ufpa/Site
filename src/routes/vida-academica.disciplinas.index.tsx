import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { PageHead } from "@/components/site/Shell";
import { disciplinas } from "@/lib/portal-content";

export const Route = createFileRoute("/vida-academica/disciplinas/")({
  head: () => ({ meta: [
    { title: "Catálogo de Disciplinas — CACC/UFPA" },
    { name: "description", content: "Consulte matérias, PPCs, semestres, ementas, pré-requisitos e bibliografias." },
  ] }),
  component: DisciplinasPage,
});

function DisciplinasPage() {
  const [ppc, setPpc] = useState("Todos");
  const [semestre, setSemestre] = useState("Todos");
  const [busca, setBusca] = useState("");
  const ppcs = ["Todos", ...new Set(disciplinas.flatMap((d) => d.ppc))].sort((a, b) => a === "Todos" ? -1 : b === "Todos" ? 1 : b.localeCompare(a));
  const semestres = ["Todos", ...new Set(disciplinas.map((d) => d.semester).filter(Boolean))].sort((a, b) => a === "Todos" ? -1 : b === "Todos" ? 1 : Number(a) - Number(b));
  const list = disciplinas.filter((d) =>
    (ppc === "Todos" || d.ppc.includes(ppc)) &&
    (semestre === "Todos" || d.semester === semestre) &&
    `${d.title} ${d.code} ${d.description}`.toLocaleLowerCase("pt-BR").includes(busca.toLocaleLowerCase("pt-BR"))
  );

  return (
    <>
      <PageHead n="05.2" title="Disciplinas" kicker="Vida Acadêmica">
        Catálogo organizado por projeto pedagógico e semestre, com referências para estudo.
      </PageHead>
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <Link to="/vida-academica" className="font-mono text-sm text-neon hover:underline">← Vida Acadêmica</Link>
        <div className="mt-7 grid gap-3 border border-paper/30 bg-card p-4 md:grid-cols-[1fr_auto_auto]">
          <label className="flex flex-col gap-2 font-mono text-xs uppercase text-paper/70">
            Buscar disciplina
            <input type="search" value={busca} onChange={(event) => setBusca(event.target.value)} placeholder="Nome, código ou assunto" className="min-w-0 border border-paper/30 bg-ink px-3 py-3 font-sans text-sm normal-case text-paper outline-none focus:border-neon" />
          </label>
          <label className="flex flex-col gap-2 font-mono text-xs uppercase text-paper/70">
            Matriz curricular / PPC
            <select value={ppc} onChange={(event) => setPpc(event.target.value)} className="border border-paper/30 bg-ink px-3 py-3 font-mono text-sm text-paper outline-none focus:border-neon">
              {ppcs.map((item) => <option key={item} value={item}>{item === "Todos" ? "Todos os PPCs" : `PPC ${item}`}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-2 font-mono text-xs uppercase text-paper/70">
            Semestre
            <select value={semestre} onChange={(event) => setSemestre(event.target.value)} className="border border-paper/30 bg-ink px-3 py-3 font-mono text-sm text-paper outline-none focus:border-neon">
              {semestres.map((item) => <option key={item} value={item}>{item === "Todos" ? "Todos os semestres" : `${item}º semestre`}</option>)}
            </select>
          </label>
        </div>
        <p className="mt-5 font-mono text-xs text-paper/60">{list.length} disciplina(s) encontrada(s)</p>
        {list.length ? (
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {list.map((disciplina) => (
              <Link key={disciplina.slug} to="/vida-academica/disciplinas/$slug" params={{ slug: disciplina.slug }} className="group flex min-h-56 flex-col border border-paper/30 bg-card p-5 hover:border-neon">
                <div className="flex flex-wrap justify-between gap-2 font-mono text-xs text-violet">
                  <span>{disciplina.code || "DISCIPLINA"}</span>
                  {disciplina.semester && <span>{disciplina.semester}º semestre</span>}
                </div>
                <h2 className="font-title mt-5 text-xl font-bold leading-tight group-hover:text-neon">{disciplina.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm text-paper/70">{disciplina.description}</p>
                <div className="mt-auto flex items-end justify-between gap-3 pt-5 font-mono text-xs text-paper/65">
                  <span>{disciplina.ppc.length ? `PPC ${disciplina.ppc.join(" / ")}` : "PPC não informado"}</span>
                  <ArrowUpRight className="size-5 shrink-0 text-neon" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-5 border-l-2 border-violet bg-card p-7">
            <BookOpen className="size-8 text-neon" />
            <p className="mt-3 text-sm text-paper/75">{disciplinas.length ? "Nenhuma disciplina corresponde aos filtros." : "O catálogo está pronto para receber os arquivos Markdown das disciplinas, após conferência com os PPCs oficiais."}</p>
          </div>
        )}
      </main>
    </>
  );
}
