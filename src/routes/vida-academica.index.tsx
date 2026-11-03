import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpenText, GraduationCap, LibraryBig, ListTree, School } from "lucide-react";
import { PageHead } from "@/components/site/Shell";
import { manuais } from "@/lib/content";
import { paginasAcademicas } from "@/lib/portal-content";

export const Route = createFileRoute("/vida-academica/")({
  head: () => ({ meta: [
    { title: "Vida Acadêmica — CACC/UFPA" },
    { name: "description", content: "Guias, disciplinas, materiais, PPCs e informações acadêmicas para estudantes de Ciência da Computação." },
  ] }),
  component: VidaAcademicaPage,
});

const entradas = [
  { to: "/manuais" as const, title: "Guias e Calouros", detail: "Primeiros passos, sistemas e procedimentos acadêmicos.", icon: BookOpenText, n: "01" },
  { to: "/vida-academica/disciplinas" as const, title: "Catálogo de Disciplinas", detail: "Matrizes, ementas, pré-requisitos e bibliografias.", icon: ListTree, n: "02" },
  { to: "/acervo" as const, title: "Acervo", detail: "Livros, cursos, ferramentas e materiais de estudo.", icon: LibraryBig, n: "03" },
];

function VidaAcademicaPage() {
  return (
    <>
      <PageHead n="05" title="Vida Acadêmica" kicker="Guia do estudante">
        Um ponto de partida para estudar, consultar documentos e resolver questões práticas da graduação.
      </PageHead>
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {entradas.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.to} to={item.to} className="group flex min-h-64 flex-col border border-paper/30 bg-card p-6 hover:border-neon">
                <span className="font-mono text-xs text-violet">{item.n} / RECURSOS</span>
                <Icon className="mt-6 size-9 text-neon" strokeWidth={1.5} />
                <h2 className="font-title mt-5 text-2xl font-bold leading-tight group-hover:text-neon">{item.title}</h2>
                <p className="mt-3 text-sm text-paper/75">{item.detail}</p>
                <ArrowUpRight className="mt-auto ml-auto size-6 pt-1 text-neon" />
              </Link>
            );
          })}
        </div>

        <section className="mt-16">
          <h2 className="display border-b border-paper/30 pb-4 text-4xl md:text-5xl">Informações acadêmicas</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {paginasAcademicas.map((item) => (
              <Link key={item.slug} to="/vida-academica/$slug" params={{ slug: item.slug }} className="group border border-paper/30 bg-card p-5 hover:border-violet">
                <span className="font-mono text-xs uppercase text-violet">{item.category}</span>
                <h3 className="font-title mt-2 text-xl font-bold group-hover:text-neon">{item.title}</h3>
                <p className="mt-2 text-sm text-paper/70">{item.description}</p>
              </Link>
            ))}
            {!paginasAcademicas.length && <p className="border-l-2 border-violet bg-card p-5 text-sm text-paper/75">Páginas sobre PPCs, estágio, TCC, calendário e outros procedimentos serão adicionadas após conferência das informações oficiais.</p>}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="display border-b border-paper/30 pb-4 text-4xl md:text-5xl">Primeiros passos</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {manuais.slice(0, 4).map((item) => (
              <Link key={item.slug} to="/manuais/$slug" params={{ slug: item.slug }} className="group flex items-start justify-between gap-3 border border-paper/30 p-4 hover:border-neon">
                <span><span className="block font-title text-lg font-semibold group-hover:text-neon">{item.title}</span><span className="mt-1 block text-sm text-paper/65">{item.description}</span></span>
                <ArrowUpRight className="size-5 shrink-0 text-neon" />
              </Link>
            ))}
            {!manuais.length && <p className="text-sm text-paper/60">Os guias serão exibidos aqui quando forem cadastrados.</p>}
          </div>
        </section>

        <section className="mt-14 border border-paper/30 bg-deep/40 p-6">
          <h2 className="font-title text-2xl font-bold">Links institucionais</h2>
          <p className="mt-2 text-sm text-paper/75">Para confirmar calendário, horários, turmas e exigências acadêmicas, consulte sempre os canais oficiais.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a className="link-under inline-flex items-center gap-2 text-neon" href="https://www.computacao.ufpa.br/" target="_blank" rel="noopener noreferrer"><School className="size-4"/> FACOMP <ArrowUpRight className="size-4"/></a>
            <a className="link-under inline-flex items-center gap-2 text-neon" href="https://www.ufpa.br/" target="_blank" rel="noopener noreferrer"><GraduationCap className="size-4"/> UFPA <ArrowUpRight className="size-4"/></a>
          </div>
        </section>
      </main>
    </>
  );
}
