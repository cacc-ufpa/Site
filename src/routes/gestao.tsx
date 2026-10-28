import { createFileRoute } from "@tanstack/react-router";
import { Cover, PageHead } from "@/components/site/Shell";
import { gestao, site } from "@/lib/content";

export const Route = createFileRoute("/gestao")({
  head: () => ({
    meta: [
      { title: "Gestão — CACC" },
      { name: "description", content: "Conheça a gestão atual do Centro Acadêmico de Ciência da Computação." },
      { property: "og:title", content: "Gestão — CACC" },
      { property: "og:description", content: "Integrantes e coordenações do CACC." },
    ],
  }),
  component: Gestao,
});

function Gestao() {
  const destaque = gestao.members.filter((m) => m.highlight);
  const demais = gestao.members.filter((m) => !m.highlight);
  return (
    <>
      <PageHead n="02" title="Gestão" kicker={`Período ${site.gestao_periodo}`} tone="deep">
        {gestao.intro}
      </PageHead>
      {gestao.demo && (
        <p className="bg-coral px-4 py-3 text-center font-mono text-sm text-ink">
          Demonstração: nomes, cargos e textos abaixo são fictícios.
        </p>
      )}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {destaque.map((m) => (
            <div key={m.name} className="grid grid-cols-[8rem_1fr] gap-5 border-t-4 border-ink pt-5">
              <Cover src={m.photo} alt={m.name} tone="neon" className="aspect-[3/4] w-32" />
              <div>
                <p className="tag bg-violet text-paper">{m.role}</p>
                <h2 className="display mt-3 text-4xl">{m.name}</h2>
                <p className="mt-2 text-sm">{m.bio}</p>
                <Links links={m.links} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-10 px-4 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          {demais.map((m, i) => (
            <div key={m.name}>
              <Cover src={m.photo} alt={m.name} tone={(["deep", "coral", "violet"] as const)[i % 3]} className="aspect-[3/4] w-full" />
              <p className="mt-3 font-mono text-xs uppercase text-neon">{m.role}</p>
              <h3 className="display text-3xl">{m.name}</h3>
              <p className="mt-1 text-sm text-paper/70">{m.bio}</p>
              <Links links={m.links} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Links({ links }: { links: { label: string; url: string }[] }) {
  if (!links.length) return null;
  return (
    <div className="mt-2 flex gap-3 text-sm">
      {links.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="link-under">{l.label}</a>)}
    </div>
  );
}
