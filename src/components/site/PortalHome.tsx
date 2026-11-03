import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, LibraryBig, ListTree } from "lucide-react";
import { dataPtBr, noticias, oportunidades, oportunidadeAberta } from "@/lib/portal-content";

/** Seções adicionais, independentes da lógica dos eventos e projetos da home. */
export function PortalHomeNews() {
  const destaques = noticias.slice(0, 3);
  return (
    <section className="border-t border-paper/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <SectionHeader n="02" title="Últimas notícias" to="/noticias" label="Todas as notícias" />
        {destaques.length ? (
          <div className="grid gap-4 md:grid-cols-3">
            {destaques.map((noticia) => (
              <Link key={noticia.slug} to="/noticias/$slug" params={{ slug: noticia.slug }} className="group flex min-h-60 flex-col overflow-hidden border border-paper/30 bg-card hover:border-violet">
                {noticia.image && <img src={noticia.image} alt="" className="aspect-[16/8] w-full object-cover" loading="lazy" />}
                <div className="flex grow flex-col p-5">
                  <span className="font-mono text-xs uppercase text-violet">{noticia.category} · {dataPtBr(noticia.date)}</span>
                  <h3 className="font-title mt-3 text-2xl font-bold leading-tight group-hover:text-neon">{noticia.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-paper/70">{noticia.description}</p>
                  <ArrowUpRight aria-hidden="true" className="mt-auto ml-auto size-5 pt-1 text-neon" />
                </div>
              </Link>
            ))}
          </div>
        ) : <Empty text="As notícias serão publicadas aqui assim que a primeira matéria for cadastrada." />}
      </div>
    </section>
  );
}

export function PortalHomeOpportunities() {
  const abertas = oportunidades.filter((item) => oportunidadeAberta(item)).slice(0, 3);
  return (
    <section className="border-t border-paper/10 bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <SectionHeader n="03" title="Oportunidades" to="/oportunidades" label="Ver mural" />
        {abertas.length ? (
          <div className="grid gap-3 lg:grid-cols-3">
            {abertas.map((item) => (
              <Link key={item.slug} to="/oportunidades/$slug" params={{ slug: item.slug }} className="group relative flex min-h-48 flex-col border border-paper/30 bg-card p-5 hover:border-neon">
                <span className="self-start bg-neon px-2 py-1 font-mono text-xs uppercase text-ink">{item.category}</span>
                <h3 className="font-title mt-4 text-xl font-bold leading-tight group-hover:text-neon">{item.title}</h3>
                <p className="mt-2 text-sm text-paper/65">{item.organization}</p>
                <p className="mt-auto pt-5 font-mono text-xs text-violet">{item.deadline ? `Prazo: ${dataPtBr(item.deadline)}` : "Sem data de encerramento informada"}</p>
                <ArrowUpRight className="absolute bottom-4 right-4 size-5 text-neon" />
              </Link>
            ))}
          </div>
        ) : <Empty text="Nenhuma oportunidade com inscrições confirmadas no momento. Confira o mural completo." />}
      </div>
    </section>
  );
}

export function PortalAcademicShortcuts() {
  const shortcuts = [
    { to: "/manuais" as const, icon: BookOpen, title: "Guias e Calouros", description: "Procedimentos e primeiros passos." },
    { to: "/vida-academica/disciplinas" as const, icon: ListTree, title: "Disciplinas", description: "Matrizes, ementas e pré-requisitos." },
    { to: "/acervo" as const, icon: LibraryBig, title: "Acervo", description: "Livros, cursos e materiais para estudar." },
  ];
  return (
    <section className="border-t border-paper/20 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <SectionHeader n="05" title="Vida Acadêmica" to="/vida-academica" label="Explorar central" />
        <div className="grid gap-4 md:grid-cols-3">
          {shortcuts.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.to} to={item.to} className="group flex min-h-48 flex-col border border-paper/30 bg-card p-5 hover:border-neon">
                <Icon className="size-8 text-neon" strokeWidth={1.5} />
                <h3 className="font-title mt-5 text-2xl font-bold group-hover:text-neon">{item.title}</h3>
                <p className="mt-2 text-sm text-paper/70">{item.description}</p>
                <ArrowUpRight className="mt-auto ml-auto size-5 text-violet" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ n, title, to, label }: { n: string; title: string; to: "/noticias" | "/oportunidades" | "/vida-academica"; label: string }) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-paper/40 pb-4">
      <div>
        <span className="font-mono text-sm text-violet">{n}</span>
        <h2 className="display mt-1 text-4xl md:text-5xl">{title}</h2>
      </div>
      <Link to={to} className="inline-flex items-center gap-2 font-mono text-xs uppercase text-violet underline underline-offset-4 hover:text-neon">
        {label}<ArrowUpRight className="size-4" />
      </Link>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="border-l-2 border-violet bg-card px-5 py-7 text-sm text-paper/70">{text}</p>;
}
