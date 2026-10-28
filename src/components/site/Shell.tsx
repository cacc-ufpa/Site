import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-7xl items-stretch justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 py-3" aria-label="CACC — Início">
          <span className="display bg-ink px-2 py-1 text-2xl text-neon">CACC</span>
          <span className="hidden font-mono text-[0.65rem] uppercase leading-tight sm:block">
            Centro Acadêmico de
            <br />
            Ciência da Computação
          </span>
        </Link>
        <nav aria-label="Principal" className="hidden lg:flex">
          {NAV.slice(1).map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="group flex items-center gap-1 border-l border-border px-4 text-sm font-semibold hover:bg-neon"
              activeProps={{ className: "bg-ink text-neon hover:bg-ink" }}
            >
              <span className="font-mono text-[0.6rem] opacity-60">{i.n}</span>
              {i.label}
            </Link>
          ))}
        </nav>
        <button
          className="flex items-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Principal (celular)" className="border-t-2 border-ink bg-ink lg:hidden">
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
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr_1fr] md:px-8">
        <div>
          <p className="display text-6xl text-neon md:text-8xl">CACC</p>
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
    violet: "bg-violet text-paper",
    coral: "bg-coral text-ink",
    ink: "bg-ink text-neon",
    neon: "bg-neon text-ink",
  };
  return (
    <div className={`grid-paper relative flex flex-col justify-between overflow-hidden p-3 ${tones[tone]} ${className}`} role="img" aria-label={`Sem imagem: ${label}`}>
      <span className="tag bg-ink/80 text-paper self-start">imagem pendente</span>
      <span className="display line-clamp-3 text-2xl">{label}</span>
    </div>
  );
}

export function Cover({ src, alt, tone = "deep", className = "" }: { src: string; alt: string; tone?: "deep" | "violet" | "coral" | "ink" | "neon" | undefined; className?: string }) {
  return src ? <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" /> : <Placeholder label={alt} tone={tone} className={className} />;
}

export function PageHead({ n, title, kicker, tone = "paper", children }: { n: string; title: string; kicker: string; tone?: "paper" | "ink" | "neon" | "violet" | "deep"; children?: React.ReactNode }) {
  const tones = {
    paper: "bg-paper text-ink",
    ink: "bg-ink text-paper",
    neon: "bg-neon text-ink",
    violet: "bg-violet text-paper",
    deep: "bg-deep text-paper",
  };
  return (
    <section className={`border-b-2 border-ink ${tones[tone]}`}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 pt-12 md:grid-cols-[auto_1fr] md:px-8 md:pt-20">
        <span className="display text-7xl opacity-30 md:text-9xl">{n}</span>
        <div>
          <p className="tag mb-4 bg-ink text-neon">{kicker}</p>
          <h1 className="display text-6xl md:text-9xl">{title}</h1>
          {children && <div className="mt-6 max-w-2xl text-lg">{children}</div>}
        </div>
      </div>
    </section>
  );
}
