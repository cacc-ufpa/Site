import { createFileRoute, Link } from "@tanstack/react-router";
import { Cover, PageHead } from "@/components/site/Shell";
import { eventosPassados, fmtDate, proximosEventos, type Evento } from "@/lib/content";

export const Route = createFileRoute("/eventos/")({
  head: () => ({
    meta: [
      { title: "Eventos — CACC" },
      { name: "description", content: "Agenda de eventos, palestras e oficinas do CACC, e o arquivo de eventos passados." },
      { property: "og:title", content: "Eventos — CACC" },
      { property: "og:description", content: "Agenda visual de eventos da Computação." },
    ],
  }),
  component: Eventos,
});

const tones = ["violet", "coral", "deep", "ink"] as const;

function Card({ e, i }: { e: Evento; i: number }) {
  const d = fmtDate(e.date) as any;
  return (
    <Link to="/eventos/$slug" params={{ slug: e.slug }} className="group block">
      <Cover src={e.image} alt={e.title} tone={tones[i % 4]} className={`w-full ${i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"}`} />
      <p className="mt-3 font-mono text-xs uppercase">{d.full} · {e.time} · {e.category}</p>
      <h3 className="display mt-1 text-3xl group-hover:text-violet">{e.title}</h3>
      <p className="text-sm text-muted-foreground">{e.location}</p>
    </Link>
  );
}

function Eventos() {
  const [main, ...rest] = proximosEventos;
  return (
    <>
      <PageHead n="01" title="Agenda" kicker="Eventos">
        Palestras, oficinas, semanas acadêmicas e encontros da comunidade.
      </PageHead>
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        {main && (
          <Link to="/eventos/$slug" params={{ slug: main.slug }} className="group mb-16 grid border-2 border-ink md:grid-cols-[2fr_3fr]">
            <Cover src={main.image} alt={main.title} tone="violet" className="aspect-[3/4] w-full md:aspect-auto md:min-h-[28rem]" />
            <div className="flex flex-col bg-neon p-6 md:p-10">
              <span className="tag self-start bg-ink text-neon">Em destaque</span>
              <h2 className="display mt-6 text-6xl md:text-8xl">{main.title}</h2>
              <dl className="mt-auto grid grid-cols-2 gap-4 pt-10 font-mono text-sm">
                <div><dt className="opacity-60">Data</dt><dd>{(fmtDate(main.date) as any).full}</dd></div>
                <div><dt className="opacity-60">Horário</dt><dd>{main.time}</dd></div>
                <div><dt className="opacity-60">Local</dt><dd>{main.location}</dd></div>
                <div><dt className="opacity-60">Organização</dt><dd>{main.organizer}</dd></div>
              </dl>
            </div>
          </Link>
        )}
        {rest.length > 0 && (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((e, i) => <Card key={e.slug} e={e} i={i} />)}
          </div>
        )}
        {!main && <p className="text-muted-foreground">Nenhum evento agendado no momento.</p>}
      </div>
      {eventosPassados.length > 0 && (
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
            <h2 className="display mb-8 text-5xl text-neon">Arquivo</h2>
            <ul>
              {eventosPassados.map((e) => (
                <li key={e.slug} className="border-t border-paper/20">
                  <Link to="/eventos/$slug" params={{ slug: e.slug }} className="grid gap-2 py-4 hover:text-neon md:grid-cols-[10rem_1fr_auto]">
                    <span className="font-mono text-sm">{(fmtDate(e.date) as any).full}</span>
                    <span className="text-lg font-semibold">{e.title}</span>
                    <span className="font-mono text-xs uppercase opacity-60">{e.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
