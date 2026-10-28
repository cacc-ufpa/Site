import { createFileRoute, Link } from "@tanstack/react-router";
import { Cover, PageHead } from "@/components/site/Shell";
import { projetos, site } from "@/lib/content";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — CACC" },
      { name: "description", content: "Vitrine de projetos desenvolvidos por estudantes de Ciência da Computação." },
      { property: "og:title", content: "Projetos — CACC" },
      { property: "og:description", content: "O que a comunidade de Computação está construindo." },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  const doMes = projetos.find((p) => p.month_project);
  const outros = projetos.filter((p) => p !== doMes);
  return (
    <>
      <PageHead n="03" title="Projetos" kicker="Vitrine" tone="neon">
        Software feito por estudantes: bots, compiladores, ferramentas e experimentos.
      </PageHead>
      {doMes && (
        <section className="border-b-2 border-ink bg-violet text-paper">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-[auto_1fr_auto] md:px-8">
            <Cover src={doMes.image} alt={doMes.title} tone="neon" className="aspect-square w-40" />
            <div>
              <span className="tag bg-neon text-ink">Projeto do mês</span>
              <Link to="/projetos/$slug" params={{ slug: doMes.slug }}>
                <h2 className="display mt-3 text-5xl hover:underline md:text-6xl">{doMes.title}</h2>
              </Link>
              <p className="mt-2 max-w-xl">{doMes.description}</p>
              <p className="mt-2 font-mono text-xs uppercase opacity-80">{doMes.author}</p>
            </div>
            {site.vote_url && (
              <a href={site.vote_url} target="_blank" rel="noreferrer" className="display self-start bg-paper px-5 py-3 text-2xl text-ink hover:bg-neon md:self-center">
                Votar no próximo →
              </a>
            )}
          </div>
        </section>
      )}
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <ol>
          {outros.map((p, i) => (
            <li key={p.slug} className="border-t-2 border-ink">
              <Link to="/projetos/$slug" params={{ slug: p.slug }} className="group grid items-center gap-6 py-6 md:grid-cols-[3rem_6rem_1fr_1fr]">
                <span className="display text-3xl opacity-40">{String(i + 1).padStart(2, "0")}</span>
                <Cover src={p.image} alt={p.title} tone={i % 2 ? "coral" : "deep"} className="aspect-square w-24" />
                <div>
                  <h3 className="display text-4xl group-hover:text-violet">{p.title}</h3>
                  <p className="font-mono text-xs uppercase opacity-70">{p.author}</p>
                </div>
                <div>
                  <p>{p.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {p.technologies.map((t) => <span key={t} className="tag bg-ink text-neon">{t}</span>)}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
