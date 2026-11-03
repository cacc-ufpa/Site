import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock3, MapPin, Code2, Box, Users } from "lucide-react";
import heroUfpa from "@/assets/hero-ufpa.jpg";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { Cover } from "@/components/site/Shell";
import { acervo, avisos, fmtDate, manuais, projetos, proximosEventos } from "@/lib/content";

import { PortalHomeNews, PortalHomeOpportunities, PortalAcademicShortcuts } from "@/components/site/PortalHome";

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
  const featuredSummary = main ? getEventSummary(main.body) : "";
  const aviso = avisos[0];
  const destaques = projetos.slice(0, 4);
  const materiais = [
    ...manuais.map((m) => ({ key: "m" + m.slug, type: "Manual", title: m.title, to: "/manuais/$slug" as const, slug: m.slug, href: "" })),
    ...acervo.map((r) => ({ key: "a" + r.slug, type: r.type, title: r.title, to: null, slug: "", href: r.url })),
  ].slice(0, 6);

  return (
    <>
      {/* Capa */}
      <section className="home-cover overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-[1.05fr_1fr] md:px-8 md:py-12">
          <div className="relative z-10">
            <p className="mb-5 font-mono text-xs uppercase"><span className="text-neon">∴ CACC</span> / UFPA</p>
            <h1 className="display hero-heading">
              <span className="hero-heading-intro block">Centro Acadêmico de</span>
              <span className="block italic text-neon">Ciência da<br />Computação</span>
            </h1>
            <p className="mt-5 max-w-lg text-xs leading-relaxed text-paper/85">
              O CACC representa os estudantes de Computação, organiza eventos, divulga o que a gente constrói e reúne o que
              todo mundo precisa saber para sobreviver ao curso.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild className="h-11 rounded-none px-5 font-mono text-xs font-bold uppercase shadow-none">
                <Link to="/gestao">Conhecer o CACC <ArrowUpRight /></Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-none border-paper/60 px-5 font-mono text-xs uppercase shadow-none">
                <Link to="/eventos">Próximos eventos <ArrowUpRight /></Link>
              </Button>
            </div>
          </div>
          <div className="relative min-w-0">
            <img src={heroUfpa} alt="Colagem ilustrada de universidade e computador em roxo e verde-lima" width={1200} height={960} className="aspect-[5/4] w-full object-cover" />
            <p className="absolute right-0 top-20 border-l border-paper/30 bg-ink/80 px-3 py-4 font-mono text-[0.6rem] uppercase leading-loose">UFPA —<br />ICEN —<br />COMPUTAÇÃO</p>
          </div>
        </div>
      </section>

      {/* Aviso */}
      {aviso && (
        <section className={`notice-band ${aviso.important ? "bg-violet text-paper" : "bg-neon text-ink"}`}>
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 md:flex-row md:items-center md:gap-8 md:px-8">
            <span className={`tag self-start border px-4 md:self-center ${aviso.important ? "border-paper text-paper" : "border-ink text-ink"}`}>
              ATENÇÃO
            </span>
            <p className="display text-3xl md:text-4xl">{aviso.title}</p>
            <div className="min-w-0 text-xs md:ml-auto md:max-w-sm [&_a]:break-words">
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold underline hover:opacity-70"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {aviso.body.trim()}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      )}

      {/* Eventos */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionTitle n="01" title="Próximos eventos" to="/eventos" />
        {main ? (
          <div className="grid gap-5 md:grid-cols-12">
            <Link
              to="/eventos/$slug"
              params={{ slug: main.slug }}
              className="group grid min-w-0 overflow-hidden border border-paper/45 md:col-span-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:h-[430px]"
            >
              <Cover
                src={main.image}
                alt={main.title}
                tone="violet"
                className="aspect-[4/3] min-h-64 w-full md:aspect-auto md:h-full md:min-h-[345px] lg:min-h-0"
              />

              <div className="relative flex min-w-0 flex-col bg-card p-5 text-paper md:min-h-[345px] md:p-5 lg:min-h-0 lg:p-6">
                {/* Data, categoria e título: hierarquia editorial da referência */}
                <DateBlock date={main.date} />
                <p className="tag mt-2 self-start bg-violet px-2 py-1 text-xs font-semibold text-ink">
                  {main.category}
                </p>
                <h3 className="font-title mt-3 max-w-[12ch] text-[clamp(2rem,3vw,2.6rem)] font-bold leading-[1.02] tracking-tight group-hover:text-neon">
                  {main.title}
                </h3>

                {/* Informações e resumo na parte inferior do cartão */}
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap items-center gap-y-2 pr-7 font-mono text-sm leading-snug">
                    <span className="flex items-center gap-2 pr-3">
                      <Clock3 className="size-4 shrink-0" />
                      {main.time}
                    </span>
                    <span className="flex min-w-0 items-center gap-2 border-l border-paper/50 pl-3">
                      <MapPin className="size-4 shrink-0" />
                      <span className="min-w-0 break-words">{main.location}</span>
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 max-w-[40ch] pr-7 text-sm leading-snug text-paper/75">
                    {featuredSummary || "Confira as informações completas deste evento."}
                  </p>
                </div>

                <span className="absolute bottom-4 right-4 grid size-7 place-items-center bg-neon text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </Link>
            <ul className="md:col-span-4 md:border-l md:border-paper/40 md:pl-5">
              {rest.slice(0, 4).map((e) => (
                <li key={e.slug} className="border-t border-paper/45">
                  <Link to="/eventos/$slug" params={{ slug: e.slug }} className="flex items-start gap-4 py-5 hover:text-neon">
                    <span className="display w-16 shrink-0 text-4xl lg:text-[2.75rem]">{(fmtDate(e.date) as any).day}</span>
                    <span>
                      <span className="font-mono text-xs uppercase text-violet">{(fmtDate(e.date) as any).month} · {e.category}</span>
                      <span className="font-title block text-lg font-semibold leading-snug">{e.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
              {rest.length === 0 && <li className="border-t border-paper/45 py-4 text-sm text-muted-foreground">Mais eventos em breve.</li>}
            </ul>
          </div>
        ) : (
          <p className="text-muted-foreground">Nenhum evento agendado no momento.</p>
        )}
      </section>

      <PortalHomeNews />
      <PortalHomeOpportunities />

      {/* Projetos */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <SectionTitle n="04" title="Feito por aqui" to="/projetos" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destaques.map((p, i) => (
              <Link key={p.slug} to="/projetos/$slug" params={{ slug: p.slug }} className={`project-card group relative flex min-h-64 flex-col border border-paper/45 p-5 ${i % 2 ? "project-card-alt" : ""}`}>
                {p.image ? <Cover src={p.image} alt={p.title} className="mb-3 aspect-[3/1] w-full" /> : <span className="text-neon">{i % 3 === 0 ? <Code2 className="size-8" /> : i % 3 === 1 ? <Box className="size-8" /> : <Users className="size-8" />}</span>}
                <h3 className="font-title mt-4 text-2xl font-bold leading-tight group-hover:text-neon">{p.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-paper/80">{p.description}</p>
                <p className="mt-auto pt-4 pr-8 font-mono text-[0.6rem] uppercase text-paper/50">{p.author}</p>
                <span className="absolute bottom-4 right-4 grid size-7 place-items-center bg-neon text-ink"><ArrowUpRight className="size-5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PortalAcademicShortcuts />

      {/* Materiais */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_2fr] md:px-8">
          <div>
            <p className="font-mono text-xs text-neon">06 / ACERVO</p>
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
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-paper/45 pb-3">
      <h2 className="display text-4xl md:text-5xl">
        <span className="mb-1 block font-mono text-sm text-violet">{n}</span>
        {title}
      </h2>
      <Link to={to} className="shrink-0 font-mono text-[0.65rem] uppercase text-violet link-under">Ver todos os {to === "/eventos" ? "eventos" : "projetos"} →</Link>
    </div>
  );
}

function DateBlock({ date }: { date: string }) {
  const d = fmtDate(date) as any;
  return (
    <div className="flex items-end gap-2 text-neon">
      <span className="display text-[4.5rem] leading-[0.85] lg:text-[5rem]">{d.day}</span>
      <span className="pb-1 font-mono text-sm uppercase leading-tight text-neon">{d.month}<br />{d.year}</span>
    </div>
  );
}

/** Extract a short real excerpt from the event's existing Markdown body. */
function getEventSummary(body: string): string {
  const paragraph = body
    .split(/\r?\n\s*\r?\n/)
    .map((part) => part.trim())
    .find((part) => part && !/^(?:#{1,6}\s|>|[-*+]\s|\d+\.\s|```|!\[|<)/.test(part));

  return (paragraph ?? "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
