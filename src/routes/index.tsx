import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Cover } from "@/components/site/Shell";
import { acervo, avisos, fmtDate, manuais, projetos, proximosEventos } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CACC — Centro Acadêmico de Ciência da Computação" },
      { name: "description", content: "A revista-portal do CACC: eventos, projetos de alunos, avisos, lojinha, acervo e manuais." },
      { property: "og:title", content: "CACC — Centro Acadêmico de Ciência da Computação" },
      { property: "og:description", content: "Eventos, projetos, avisos, acervo e manuais da comunidade de Computação." },
    ],
  }),
  component: Home,
});

function Home() {
  const [main, ...rest] = proximosEventos;
  const aviso = avisos[0];
  const destaques = projetos.slice(0, 4);
  const materiais = [
    ...manuais.map((m) => ({ key: "m" + m.slug, type: "Manual", title: m.title, to: "/manuais/$slug" as const, slug: m.slug, href: "" })),
    ...acervo.map((r) => ({ key: "a" + r.slug, type: r.type, title: r.title, to: null, slug: "", href: r.url })),
  ].slice(0, 6);

  return (
    <>
      {/* Capa */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="mx-auto grid max-w-7xl md:grid-cols-12">
          <div className="px-4 pb-12 pt-10 md:col-span-8 md:px-8 md:pt-16">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase">
              <span className="tag bg-ink text-neon">Edição permanente</span>
              <span>Centro Acadêmico de Ciência da Computação</span>
            </div>
            <h1 className="display mt-8 text-[18vw] md:text-[10.5rem]">
              Código
              <br />
              <span className="ml-[0.6em] bg-neon px-2">aberto,</span>
              <br />
              curso <span className="text-violet">vivo.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg">
              O CACC representa os estudantes de Computação, organiza eventos, divulga o que a gente constrói e reúne o que
              todo mundo precisa saber para sobreviver ao curso.
            </p>
          </div>
          <aside className="flex flex-col border-t-2 border-ink bg-deep text-paper md:col-span-4 md:border-l-2 md:border-t-0">
            <p className="display p-6 text-[7rem] leading-none text-neon md:text-[9rem]">CC</p>
            <nav aria-label="Nesta edição" className="mt-auto">
              {([
                ["/eventos", "Agenda", "01"],
                ["/projetos", "Projetos", "03"],
                ["/acervo", "Acervo", "05"],
                ["/manuais", "Manuais", "06"],
              ] as const).map(([to, label, n]) => (
                <Link key={to} to={to} className="flex items-center justify-between border-t border-paper/20 px-6 py-4 hover:bg-neon hover:text-ink">
                  <span className="display text-3xl">
                    <span className="mr-3 font-mono text-xs opacity-60">{n}</span>
                    {label}
                  </span>
                  <ArrowUpRight />
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      {/* Aviso */}
      {aviso && (
        <section className={aviso.important ? "bg-violet text-paper" : "bg-neon text-ink"}>
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:gap-8 md:px-8">
            <span className="tag self-start bg-coral text-ink">Aviso do CA</span>
            <p className="display text-3xl md:text-4xl">{aviso.title}</p>
            <p className="text-sm opacity-90 md:ml-auto md:max-w-sm">{aviso.body.trim()}</p>
          </div>
        </section>
      )}

      {/* Eventos */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle n="01" title="Próximos eventos" to="/eventos" />
        {main ? (
          <div className="grid gap-8 md:grid-cols-12">
            <Link to="/eventos/$slug" params={{ slug: main.slug }} className="group grid md:col-span-8 md:grid-cols-2">
              <Cover src={main.image} alt={main.title} tone="violet" className="aspect-[4/5] w-full" />
              <div className="flex flex-col bg-ink p-6 text-paper">
                <DateBlock date={main.date} />
                <p className="tag mt-6 self-start bg-coral text-ink">{main.category}</p>
                <h3 className="display mt-3 text-5xl group-hover:text-neon">{main.title}</h3>
                <p className="mt-auto pt-6 font-mono text-xs">
                  {main.time} · {main.location}
                </p>
              </div>
            </Link>
            <ul className="md:col-span-4">
              {rest.slice(0, 4).map((e) => (
                <li key={e.slug} className="border-t-2 border-ink">
                  <Link to="/eventos/$slug" params={{ slug: e.slug }} className="flex gap-4 py-4 hover:bg-neon">
                    <span className="display w-16 shrink-0 text-4xl">{(fmtDate(e.date) as any).day}</span>
                    <span>
                      <span className="font-mono text-xs uppercase">{(fmtDate(e.date) as any).month} · {e.category}</span>
                      <span className="block text-lg font-semibold">{e.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
              {rest.length === 0 && <li className="border-t-2 border-ink py-4 text-sm text-muted-foreground">Mais eventos em breve.</li>}
            </ul>
          </div>
        ) : (
          <p className="text-muted-foreground">Nenhum evento agendado no momento.</p>
        )}
      </section>

      {/* Projetos */}
      <section className="bg-neon">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <SectionTitle n="03" title="Feito por aqui" to="/projetos" />
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {destaques.map((p, i) => (
              <Link key={p.slug} to="/projetos/$slug" params={{ slug: p.slug }} className={`group ${i % 2 ? "lg:mt-12" : ""}`}>
                <Cover src={p.image} alt={p.title} tone={i % 2 ? "ink" : "deep"} className="aspect-square w-32" />
                <h3 className="display mt-4 text-3xl group-hover:underline">{p.title}</h3>
                <p className="mt-1 text-sm">{p.description}</p>
                <p className="mt-2 font-mono text-xs uppercase opacity-70">{p.author}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materiais */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_2fr] md:px-8">
          <div>
            <p className="font-mono text-xs text-neon">05 / 06</p>
            <h2 className="display mt-2 text-6xl">Últimos materiais</h2>
            <div className="mt-6 flex gap-4 text-sm">
              <Link to="/acervo" className="link-under">Acervo</Link>
              <Link to="/manuais" className="link-under">Manuais</Link>
            </div>
          </div>
          <ul>
            {materiais.map((m) => {
              const inner = (
                <>
                  <span className={`tag w-24 shrink-0 text-center ${m.to ? "bg-coral text-ink" : "bg-neon text-ink"}`}>{m.type}</span>
                  <span className="flex-1 text-lg">{m.title}</span>
                  <ArrowUpRight className="shrink-0 opacity-50" />
                </>
              );
              return (
                <li key={m.key} className="border-t border-paper/20">
                  {m.to ? (
                    <Link to={m.to} params={{ slug: m.slug }} className="flex items-center gap-4 py-4 hover:text-neon">{inner}</Link>
                  ) : (
                    <a href={m.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 py-4 hover:text-neon">{inner}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export function SectionTitle({ n, title, to }: { n: string; title: string; to: "/eventos" | "/projetos" }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 border-b-2 border-current pb-3">
      <h2 className="display text-5xl md:text-7xl">
        <span className="mr-3 align-top font-mono text-sm">{n}</span>
        {title}
      </h2>
      <Link to={to} className="shrink-0 font-mono text-xs uppercase link-under">Ver tudo →</Link>
    </div>
  );
}

function DateBlock({ date }: { date: string }) {
  const d = fmtDate(date) as any;
  return (
    <div className="flex items-end gap-2 text-neon">
      <span className="display text-8xl">{d.day}</span>
      <span className="pb-2 font-mono text-sm uppercase">{d.month}<br />{d.year}</span>
    </div>
  );
}
