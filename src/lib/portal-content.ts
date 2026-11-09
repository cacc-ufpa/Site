/**
 * Conteúdos novos do portal acadêmico, separados do carregador original.
 * O código e os documentos anteriores do CACC permanecem inalterados.
 */
import { parseFrontmatter } from "@/lib/content";

const rawNoticias = import.meta.glob("/content/noticias/*.md", {
  query: "?raw", import: "default", eager: true,
}) as Record<string, string>;
const rawOportunidades = import.meta.glob("/content/oportunidades/*.md", {
  query: "?raw", import: "default", eager: true,
}) as Record<string, string>;
const rawDisciplinas = import.meta.glob("/content/disciplinas/*.md", {
  query: "?raw", import: "default", eager: true,
}) as Record<string, string>;
const rawVidaAcademica = import.meta.glob("/content/vida-academica/*.md", {
  query: "?raw", import: "default", eager: true,
}) as Record<string, string>;

const str = (value: unknown): string => (value == null ? "" : String(value).trim());
const strings = (value: unknown): string[] =>
  Array.isArray(value) ? value.map(str).filter(Boolean) : str(value) ? [str(value)] : [];

const httpUrl = (value: unknown): string => {
  const url = str(value);
  return /^https?:\/\//i.test(url) ? url : "";
};

function load<T>(files: Record<string, string>, parse: (d: Record<string, unknown>, body: string, slug: string) => T): T[] {
  return Object.entries(files).flatMap(([filename, source]) => {
    const { data, body } = parseFrontmatter(source);
    if (!data?.title || data.published === false || data.draft === true) return [];
    const slug = filename.split("/").pop()!.replace(/\.md$/, "");
    return [parse(data as Record<string, unknown>, body, slug)];
  });
}

export type Noticia = {
  slug: string; title: string; description: string; date: string; updated: string;
  category: string; author: string; image: string; source_url: string; body: string;
};
export type Oportunidade = {
  slug: string; title: string; description: string; category: string; organization: string;
  date: string; deadline: string; status: string; source_url: string; tags: string[]; body: string;
};
export type Disciplina = {
  slug: string; title: string; code: string; ppc: string[]; semester: string;
  prerequisites: string[]; workload: string; description: string; source_url: string; body: string;
};
export type PaginaAcademica = {
  slug: string; title: string; description: string; category: string;
  updated: string; source_url: string; body: string;
};

export const noticias: Noticia[] = load(rawNoticias, (d, body, slug) => ({
  slug, body, title: str(d.title), description: str(d.description), date: str(d.date),
  updated: str(d.updated), category: str(d.category) || "Notícias", author: str(d.author),
  image: str(d.image), source_url: httpUrl(d.source_url),
})).sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export const oportunidades: Oportunidade[] = load(rawOportunidades, (d, body, slug) => ({
  slug, body, title: str(d.title), description: str(d.description),
  category: str(d.category) || "Outras", organization: str(d.organization),
  date: str(d.date), deadline: str(d.deadline), status: str(d.status).toLowerCase(),
  source_url: httpUrl(d.source_url), tags: strings(d.tags),
})).sort((a, b) => a.deadline.localeCompare(b.deadline) || b.date.localeCompare(a.date));

export const disciplinas: Disciplina[] = load(rawDisciplinas, (d, body, slug) => ({
  slug, body, title: str(d.title), code: str(d.code), ppc: strings(d.ppc),
  semester: str(d.semester), prerequisites: strings(d.prerequisites),
  workload: str(d.workload), description: str(d.description), source_url: httpUrl(d.source_url),
})).sort((a, b) => Number(a.semester || 999) - Number(b.semester || 999) || a.title.localeCompare(b.title));

export const paginasAcademicas: PaginaAcademica[] = load(rawVidaAcademica, (d, body, slug) => ({
  slug, body, title: str(d.title), description: str(d.description),
  category: str(d.category) || "Vida Acadêmica", updated: str(d.updated),
  source_url: httpUrl(d.source_url),
})).sort((a, b) => a.title.localeCompare(b.title));

/**
 * Sem prazo e sem status explícito NÃO significa que uma vaga está aberta.
 * Datas em ISO (YYYY-MM-DD) permitem comparar sem depender do fuso local.
 */
export function oportunidadeAberta(o: Oportunidade, hoje = new Intl.DateTimeFormat("sv-SE", { timeZone: "America/Belem" }).format(new Date())): boolean {
  if (["encerrada", "cancelada", "fechada"].includes(o.status)) return false;
  if (o.deadline) return o.deadline >= hoje;
  return o.status === "aberta" || o.status === "sem_prazo";
}

export function statusOportunidade(o: Oportunidade): string {
  if (o.status === "consulta") return "Consultar fonte oficial";
  if (o.status === "cancelada") return "Cancelada";
  if (o.status === "encerrada" || o.status === "fechada") return "Encerrada";
  if (o.deadline) return oportunidadeAberta(o) ? "Inscrições abertas" : "Prazo encerrado";
  if (o.status === "aberta") return "Inscrições abertas";
  if (o.status === "sem_prazo") return "Sem prazo definido";
  return "Situação a confirmar";
}

export function dataPtBr(value: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [ano, mes, dia] = value.split("-");
  return `${dia}/${mes}/${ano}`;
}
