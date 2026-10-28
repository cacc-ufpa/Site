import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHead } from "@/components/site/Shell";
import { ACERVO_CATEGORIAS, acervo } from "@/lib/content";

export const Route = createFileRoute("/acervo")({
  head: () => ({
    meta: [
      { title: "Acervo — CACC" },
      { name: "description", content: "Biblioteca de livros, cursos, vídeos e ferramentas gratuitas para estudantes de Computação." },
      { property: "og:title", content: "Acervo — CACC" },
      { property: "og:description", content: "Materiais gratuitos organizados por área." },
    ],
  }),
  component: Acervo,
});

const tones = ["bg-deep text-neon", "bg-violet text-paper", "bg-coral text-ink", "bg-ink text-neon", "bg-neon text-ink"];

function Acervo() {
  const [cat, setCat] = useState<string | null>(null);
  const cats = ACERVO_CATEGORIAS.filter((c) => acervo.some((r) => r.category === c));
  const list = acervo.filter((r) => !cat || r.category === cat);
  return (
    <>
      <PageHead n="05" title="Acervo" kicker="Biblioteca" tone="violet">
        Livros, cursos, vídeos e ferramentas gratuitas, organizados por área.
      </PageHead>
      <div className="sticky top-[58px] z-30 border-b-2 border-ink bg-paper">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-3 md:px-8" role="group" aria-label="Filtrar por área">
          {[null, ...cats].map((c) => (
            <button key={c ?? "all"} onClick={() => setCat(c)} aria-pressed={cat === c} className={`shrink-0 border-2 border-ink px-3 py-1 text-sm font-semibold ${cat === c ? "bg-ink text-neon" : "hover:bg-neon"}`}>
              {c ?? "Tudo"}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-10 px-4 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {list.map((r) => {
          const tone = tones[ACERVO_CATEGORIAS.indexOf(r.category) % tones.length];
          return (
            <a key={r.slug} href={r.url} target="_blank" rel="noreferrer" className="group flex flex-col">
              {r.image ? (
                <img src={r.image} alt={r.title} className="aspect-[3/4] w-full object-cover" loading="lazy" />
              ) : (
                <div className={`flex aspect-[3/4] flex-col justify-between p-4 ${tone}`} aria-hidden>
                  <span className="font-mono text-[0.65rem] uppercase">{r.category}</span>
                  <span className="display line-clamp-5 text-3xl">{r.title}</span>
                  <span className="font-mono text-xs uppercase">{r.type}</span>
                </div>
              )}
              <span className="tag mt-3 self-start bg-ink text-neon">{r.type}</span>
              <h2 className="mt-2 flex items-start gap-1 text-lg font-semibold group-hover:text-violet">
                {r.title} <ArrowUpRight className="mt-1 size-4 shrink-0" />
              </h2>
              <p className="text-sm text-muted-foreground">{r.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
