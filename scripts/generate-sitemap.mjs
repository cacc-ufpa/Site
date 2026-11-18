/** Sitemap do CACC gerado a cada build, a partir dos MDs publicados. */
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

// Confirme o domínio canônico; em outro domínio defina SITE_ORIGIN antes do build.
const ORIGIN = (process.env.SITE_ORIGIN || 'https://ufpacacc.com').replace(/\/+$/, '');
const fixed = [
  '/', '/eventos', '/gestao', '/projetos', '/lojinha', '/vida-academica',
  '/vida-academica/disciplinas', '/acervo', '/manuais', '/oportunidades', '/noticias',
];
const collections = [
  ['eventos', '/eventos', false],
  ['projetos', '/projetos', false],
  ['manuais', '/manuais', false],
  ['vida-academica', '/vida-academica', true],
  ['disciplinas', '/vida-academica/disciplinas', true],
  ['oportunidades', '/oportunidades', true],
  ['noticias', '/noticias', true],
];
const urls = new Set(fixed);
const parseMeta = (src) => {
  const match = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  try { return parse(match[1]) || {}; } catch { return {}; }
};
for (const [folder, prefix, isNew] of collections) {
  const base = path.join(process.cwd(), 'content', folder);
  if (!fs.existsSync(base)) continue;
  for (const file of fs.readdirSync(base)) {
    if (!file.endsWith('.md')) continue;
    const meta = parseMeta(fs.readFileSync(path.join(base, file), 'utf8'));
    if (!meta.title) continue;
    if (isNew && (meta.published === false || meta.draft === true)) continue;
    urls.add(`${prefix}/${encodeURIComponent(file.slice(0, -3))}`);
  }
}
const escapeXml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...urls]
  .sort()
  .map((route) => `  <url><loc>${escapeXml(ORIGIN + route)}</loc></url>`)
  .join('\n')}\n</urlset>\n`;
fs.mkdirSync('public', { recursive: true });
fs.writeFileSync(path.join('public', 'sitemap.xml'), xml);
console.log(`Sitemap gerado: ${urls.size} URLs (${ORIGIN}/sitemap.xml)`);
