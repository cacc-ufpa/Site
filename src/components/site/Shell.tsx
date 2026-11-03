import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Code2, Globe2 } from "lucide-react";
import { site } from "@/lib/content";

const NAV = [
  { to: "/", label: "Início", n: "00" },
  { to: "/eventos", label: "Eventos", n: "01" },
  { to: "/gestao", label: "Gestão", n: "02" },
  { to: "/projetos", label: "Projetos", n: "03" },
  { to: "/lojinha", label: "Lojinha", n: "04" },
  { to: "/acervo", label: "Acervo", n: "05" },
  { to: "/manuais", label: "Manuais", n: "06" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-stretch justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 py-3" aria-label="CACC — Início">
          <span className="font-mono bg-neon px-2 py-0.5 text-2xl font-bold leading-tight text-ink">CACC</span>
          <span className="hidden font-mono text-[0.6rem] uppercase leading-tight sm:block">
            Centro Acadêmico de
            <br />
            Ciência da Computação
          </span>
        </Link>
        <span className="mr-auto ml-5 hidden items-center gap-2 border-l border-border pl-5 font-mono font-bold sm:flex"><Globe2 className="size-5" />UFPA</span>
        <nav aria-label="Principal" className="hidden lg:flex">
          {NAV.slice(1).map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="group flex items-center gap-1 border-b-2 border-transparent px-3 text-xs hover:text-neon"
              activeProps={{ className: "border-neon text-paper" }}
            >
              <span className="font-mono text-[0.6rem] opacity-60">{i.n}</span>
              {i.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Principal (celular)" className="border-t border-border bg-ink lg:hidden">
          {NAV.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 border-b border-paper/10 px-4 py-3 text-paper"
              activeProps={{ className: "text-neon" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              <span className="font-mono text-xs opacity-60">{i.n}</span>
              <span className="display text-3xl">{i.label}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr_1fr] md:px-8">
        <div>
          <p className="display text-6xl text-neon md:text-7xl">CACC</p>
          <p className="mt-4 max-w-sm text-sm text-paper/70">
            Portal do Centro Acadêmico de Ciência da Computação. Feito pela comunidade, para a comunidade.
          </p>
        </div>
        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-2 text-sm md:col-span-2">
          {NAV.map((i) => (
            <Link key={i.to} to={i.to} className="hover:text-neon">
              <span className="mr-2 font-mono text-xs text-paper/50">{i.n}</span>
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-paper/10 px-4 py-4 text-center font-mono text-xs text-paper/50">
        gestão {site.gestao_periodo} · Linus Torvalds
      </div>
    </footer>
  );
}

/* Typographic placeholder used when no image has been provided. Never fakes a real photo. */
export function Placeholder({ label, tone = "deep", className = "" }: { label: string; tone?: "deep" | "violet" | "coral" | "ink" | "neon"; className?: string }) {
  const tones = {
    deep: "bg-deep text-neon",
    violet: "bg-deep text-violet",
    coral: "bg-deep text-neon",
    ink: "bg-ink text-neon",
    neon: "bg-deep text-neon",
  };
  return (
    <div className={`placeholder-art grid-paper relative flex flex-col justify-between overflow-hidden border border-border p-5 ${tones[tone]} ${className}`} role="img" aria-label={`Sem imagem: ${label}`}>
      <span className="tag bg-ink/80 text-paper self-start">imagem pendente</span>
      <Code2 className="my-4 size-16 self-center text-neon" strokeWidth={1} aria-hidden="true" />
      <span className="font-title line-clamp-3 text-xl font-bold text-paper">{label}</span>
    </div>
  );
}

export function Cover({ src, alt, tone = "deep", className = "" }: { src: string; alt: string; tone?: "deep" | "violet" | "coral" | "ink" | "neon" | undefined; className?: string }) {
  return src ? <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" /> : <Placeholder label={alt} tone={tone} className={className} />;
}

export function PageHead({ n, title, kicker, tone = "paper", children }: { n: string; title: string; kicker: string; tone?: "paper" | "ink" | "neon" | "violet" | "deep"; children?: React.ReactNode }) {
  const tones = {
    paper: "bg-background text-foreground",
    ink: "bg-background text-foreground",
    neon: "bg-background text-foreground",
    violet: "bg-background text-foreground",
    deep: "bg-background text-foreground",
  };
  return (
    <section className={`border-b border-border ${tones[tone]}`}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 pt-12 md:grid-cols-[auto_1fr] md:px-8 md:pt-20">
        <span className="font-mono text-xl text-violet md:text-2xl">{n}</span>
        <div>
          <p className="tag mb-4 text-neon">{kicker}</p>
          <h1 className="display text-6xl md:text-8xl">{title}</h1>
          {children && <div className="mt-6 max-w-2xl text-sm text-muted-foreground">{children}</div>}
        </div>
      </div>
    </section>
  );
}
