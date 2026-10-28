import { parse as parseYaml } from "yaml";
import { marked } from "marked";

/* Markdown files are discovered at build time via Vite glob imports. */
const raw = {
  eventos: import.meta.glob("/content/eventos/*.md", { query: "?raw", import: "default", eager: true }),
  projetos: import.meta.glob("/content/projetos/*.md", { query: "?raw", import: "default", eager: true }),
  acervo: import.meta.glob("/content/acervo/*.md", { query: "?raw", import: "default", eager: true }),
  manuais: import.meta.glob("/content/manuais/*.md", { query: "?raw", import: "default", eager: true }),
  avisos: import.meta.glob("/content/avisos/*.md", { query: "?raw", import: "default", eager: true }),
  lojinha: import.meta.glob("/content/lojinha/*.md", { query: "?raw", import: "default", eager: true }),
  gestao: import.meta.glob("/content/gestao/*.md", { query: "?raw", import: "default", eager: true }),
  site: import.meta.glob("/content/site.md", { query: "?raw", import: "default", eager: true }),
} as Record<string, Record<string, string>>;

export function parseFrontmatter(src: string): { data: any; body: string } {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: src };
  return { data: (parseYaml(m[1] ?? "") as any) ?? {}, body: m[2] ?? "" };
}

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export type Heading = { id: string; text: string };
export function renderMarkdown(body: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  let html = marked.parse(body, { async: false }) as string;
  html = html.replace(/<h2>(.*?)<\/h2>/g, (_, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "");
    const id = slugify(text);
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html, headings };
}

function load<T>(kind: string, map: (data: any, body: string, slug: string) => T): T[] {
  return Object.entries(raw[kind] ?? {}).map(([path, src]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { data, body } = parseFrontmatter(src);
    return map(data, body, slug);
  });
}

const str = (v: unknown) => (v == null ? "" : String(v));
const arr = <T = string>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

export type Evento = {
  slug: string; title: string; date: string; time: string; location: string; category: string;
  organizer: string; image: string; registration_url: string; past: boolean; body: string;
};
export type Projeto = {
  slug: string; title: string; author: string; description: string; image: string; technologies: string[];
  repository_url: string; demo_url: string; featured: boolean; month_project: boolean; body: string;
};
export type Recurso = { slug: string; title: string; type: string; category: string; description: string; url: string; image: string };
export type Manual = {
  slug: string; title: string; description: string; category: string; updated: string;
  related: { label: string; url: string }[]; body: string;
};
export type Aviso = { slug: string; title: string; date: string; important: boolean; body: string };
export type Produto = {
  slug: string; title: string; price: string; images: string[]; sizes: string[]; availability: string; whatsapp: string; body: string;
};
export type Integrante = { name: string; role: string; bio: string; photo: string; highlight?: boolean; links: { label: string; url: string }[] };

const today = () => new Date().toISOString().slice(0, 10);

export const eventos: Evento[] = load("eventos", (d, body, slug) => ({
  slug, body, title: str(d.title), date: str(d.date), time: str(d.time), location: str(d.location),
  category: str(d.category), organizer: str(d.organizer), image: str(d.image), registration_url: str(d.registration_url),
  past: d.status === "past" || (d.status !== "upcoming" && str(d.date) < today()),
})).sort((a, b) => a.date.localeCompare(b.date));
export const proximosEventos = eventos.filter((e) => !e.past);
export const eventosPassados = eventos.filter((e) => e.past).reverse();

export const projetos: Projeto[] = load("projetos", (d, body, slug) => ({
  slug, body, title: str(d.title), author: str(d.author), description: str(d.description), image: str(d.image),
  technologies: arr(d.technologies), repository_url: str(d.repository_url), demo_url: str(d.demo_url),
  featured: !!d.featured, month_project: !!d.month_project,
})).sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));

export const ACERVO_CATEGORIAS = [
  "Introdução à Computação", "Algoritmos e Estruturas de Dados", "Desenvolvimento Web", "Inteligência Artificial",
  "Redes de Computadores", "Cibersegurança", "Sistemas Operacionais", "Matemática e Computação",
];
export const acervo: Recurso[] = load("acervo", (d, _b, slug) => ({
  slug, title: str(d.title), type: str(d.type), category: str(d.category), description: str(d.description), url: str(d.url), image: str(d.image),
}));

export const manuais: Manual[] = load("manuais", (d, body, slug) => ({
  slug, body, title: str(d.title), description: str(d.description), category: str(d.category) || "Geral",
  updated: str(d.updated), related: arr(d.related),
}));

export const avisos: Aviso[] = load("avisos", (d, body, slug) => ({
  slug, body, title: str(d.title), date: str(d.date), important: !!d.important,
})).sort((a, b) => b.date.localeCompare(a.date));

export const produtos: Produto[] = load("lojinha", (d, body, slug) => ({
  slug, body, title: str(d.title), price: str(d.price), images: arr(d.images), sizes: arr(d.sizes).map(String),
  availability: str(d.availability), whatsapp: str(d.whatsapp),
}));

const gestaoData: any = load("gestao", (d) => d)[0] ?? {};
export const gestao = {
  demo: !!gestaoData.demo, intro: str(gestaoData.intro), photo: str(gestaoData.photo),
  members: arr<Integrante>(gestaoData.members).map((m) => ({ ...m, links: arr<{ label: string; url: string }>(m.links) })),
};

const siteData: any = load("site", (d) => d)[0] ?? {};
export const site = {
  whatsapp: str(siteData.whatsapp), vote_url: str(siteData.vote_url), instagram: str(siteData.instagram),
  email: str(siteData.email), gestao_periodo: str(siteData.gestao_periodo),
};

export const whatsappLink = (p: Produto) => {
  const n = (p.whatsapp || site.whatsapp).replace(/\D/g, "");
  return `https://wa.me/${n}?text=${encodeURIComponent(`Olá! Tenho interesse em: ${p.title}`)}`;
};

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
export function fmtDate(d: string) {
  const [y, m, day] = d.split("-");
  if (!m) return d;
  return { day, month: MESES[Number(m) - 1], year: y, full: `${day} ${MESES[Number(m) - 1]} ${y}` };
}
