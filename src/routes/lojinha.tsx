import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Cover, PageHead } from "@/components/site/Shell";
import { produtos, renderMarkdown, whatsappLink, type Produto } from "@/lib/content";

export const Route = createFileRoute("/lojinha")({
  head: () => ({
    meta: [
      { title: "Lojinha — CACC" },
      { name: "description", content: "Camisetas, adesivos e produtos do CACC. Pedidos via WhatsApp." },
      { property: "og:title", content: "Lojinha — CACC" },
      { property: "og:description", content: "Produtos do Centro Acadêmico de Computação." },
    ],
  }),
  component: Lojinha,
});

function Lojinha() {
  const [sel, setSel] = useState<Produto | null>(null);
  return (
    <>
      <PageHead n="04" title="Lojinha" kicker="Catálogo" tone="ink">
        Produtos do CA. Sem carrinho: escolha, chame no WhatsApp e combine a retirada.
      </PageHead>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {produtos.map((p, i) => (
          <button key={p.slug} onClick={() => setSel(p)} className="group text-left">
            <Cover src={p.images[0] ?? ""} alt={p.title} tone={i % 2 ? "deep" : "ink"} className="aspect-square w-full" />
            <div className="mt-3 flex items-baseline justify-between gap-4 border-b-2 border-ink pb-2">
              <h2 className="display text-3xl group-hover:text-violet">{p.title}</h2>
              <span className="font-mono text-sm">{p.price}</span>
            </div>
          </button>
        ))}
      </div>
      <Dialog open={!!sel} onOpenChange={(o) => !o && setSel(null)}>
        {sel && (
          <DialogContent className="max-w-3xl rounded-none border-2 border-ink bg-paper">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                {sel.images.length ? sel.images.map((src, i) => <img key={src} src={src} alt={`${sel.title} — foto ${i + 1}`} className="aspect-square w-full object-cover" />) : <Cover src="" alt={sel.title} className="aspect-square w-full" />}
              </div>
              <div>
                <DialogTitle className="display text-5xl">{sel.title}</DialogTitle>
                <p className="mt-2 font-mono text-lg">{sel.price}</p>
                {sel.availability && <p className="tag mt-2 bg-coral text-ink">{sel.availability}</p>}
                <DialogDescription asChild>
                  <div className="prose-cacc mt-4 text-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(sel.body).html }} />
                </DialogDescription>
                {sel.sizes.length > 0 && (
                  <div className="mt-4">
                    <p className="font-mono text-xs uppercase">Tamanhos</p>
                    <div className="mt-1 flex gap-1">{sel.sizes.map((s) => <span key={s} className="border-2 border-ink px-3 py-1 font-mono">{s}</span>)}</div>
                  </div>
                )}
                <a href={whatsappLink(sel)} target="_blank" rel="noreferrer" className="display mt-6 inline-block bg-neon px-5 py-3 text-2xl text-ink hover:bg-ink hover:text-neon">
                  Pedir no WhatsApp →
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
