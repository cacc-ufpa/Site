import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "@/components/site/Shell";
import { manuais } from "@/lib/content";

export const Route = createFileRoute("/manuais/")({
  head: () => ({
    meta: [
      { title: "Manuais — CACC" },
      { name: "description", content: "Guias práticos da universidade, com referências institucionais." },
      { property: "og:title", content: "Manuais — CACC" },
      { property: "og:description", content: "Base de conhecimento para estudantes de Computação." },
    ],
  }),
  component: Manuais,
});

function Manuais() {
  const cats = [...new Set(manuais.map((m) => m.category))].sort();
  return (
    <>
      <PageHead n="06" title="Manuais" kicker="Base de conhecimento">
        Orientações passo a passo para estudantes, com fontes oficiais da UFPA.
      </PageHead>
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-8">
        <p className="mb-10 border-l-2 border-neon bg-card px-5 py-4 text-sm text-paper/80">Manuais preparados pelo CACC com base em fontes institucionais. Consulte as referências ao final de cada guia.</p>
        {cats.map((c) => (
          <section key={c} className="mb-12 grid gap-4 md:grid-cols-[14rem_1fr]">
            <h2 className="font-mono text-sm uppercase text-violet">{c}</h2>
            <ul>
              {manuais.filter((m) => m.category === c).map((m) => (
                <li key={m.slug} className="border-t border-border">
                  <Link to="/manuais/$slug" params={{ slug: m.slug }} className="block py-4 hover:bg-neon/10">
                    <span className="text-xl font-semibold">{m.title}</span>
                    <span className="block text-sm text-muted-foreground">{m.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
